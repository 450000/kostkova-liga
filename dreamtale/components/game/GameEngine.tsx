'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useMemo, useReducer } from 'react';
import type { GameSettings, GameState, Player } from '@/types/game';
import {
  createInitialState,
  createPlayers,
  effectiveImageCount,
  gameReducer,
  isGameActive,
} from '@/lib/game/engine';
import { createSeed } from '@/lib/game/rng';
import {
  clearSavedGame,
  loadPreferences,
  loadSavedGame,
  saveGame,
  savePreferences,
} from '@/lib/game/storage';
import { imageProvider } from '@/lib/images';
import { preloadImages } from '@/lib/images/preload';
import { getPack } from '@/data/packs';
import { useExitGuard } from '@/hooks/useExitGuard';
import { useFullscreen } from '@/hooks/useFullscreen';
import { useSound } from '@/hooks/useSound';
import { useWakeLock } from '@/hooks/useWakeLock';
import { NightSky } from '@/components/background/NightSky';
import { Dialog } from '@/components/ui/Dialog';
import { Button } from '@/components/ui/Button';
import { HomeScreen } from '@/components/home/HomeScreen';
import { GameSetup } from '@/components/setup/GameSetup';
import { LoadingScreen } from '@/components/game/LoadingScreen';
import { StoryMode } from '@/components/game/StoryMode';
import { TransitionScreen } from '@/components/game/TransitionScreen';
import { RecallMode } from '@/components/game/RecallMode';
import { ResultsScreen } from '@/components/game/ResultsScreen';
import { ReviewMode } from '@/components/game/ReviewMode';

/**
 * Stav obalu aplikace (dialogy, průběh načítání) je záměrně oddělený
 * od herního stavu – do uloženého snu nepatří.
 */
type UiState = {
  hydrated: boolean;
  progress: number;
  loadError: string | null;
  exitOpen: boolean;
  resumeCandidate: GameState | null;
};

type UiAction =
  | { type: 'HYDRATED'; savedGame: GameState | null }
  | { type: 'LOAD_STARTED' }
  | { type: 'LOAD_PROGRESS'; value: number }
  | { type: 'LOAD_FAILED'; message: string }
  | { type: 'OPEN_EXIT' }
  | { type: 'CLOSE_EXIT' }
  | { type: 'DISMISS_RESUME' };

const INITIAL_UI: UiState = {
  hydrated: false,
  progress: 0,
  loadError: null,
  exitOpen: false,
  resumeCandidate: null,
};

function uiReducer(state: UiState, action: UiAction): UiState {
  switch (action.type) {
    case 'HYDRATED':
      return { ...state, hydrated: true, resumeCandidate: action.savedGame };
    case 'LOAD_STARTED':
      return { ...state, progress: 0, loadError: null };
    case 'LOAD_PROGRESS':
      return { ...state, progress: action.value };
    case 'LOAD_FAILED':
      return { ...state, loadError: action.message };
    case 'OPEN_EXIT':
      return { ...state, exitOpen: true };
    case 'CLOSE_EXIT':
      return { ...state, exitOpen: false };
    case 'DISMISS_RESUME':
      return { ...state, resumeCandidate: null };
    default:
      return state;
  }
}

export function GameEngine() {
  const [state, dispatch] = useReducer(gameReducer, undefined, () => createInitialState());
  const [ui, uiDispatch] = useReducer(uiReducer, INITIAL_UI);

  const fullscreen = useFullscreen();
  const play = useSound(state.settings.soundEnabled);
  const active = isGameActive(state.phase);

  useWakeLock(active);

  // --- Načtení uložených dat po startu ---------------------------------
  useEffect(() => {
    const preferences = loadPreferences();
    if (preferences) {
      dispatch({ type: 'SET_PLAYERS', players: createPlayers(preferences.playerNames) });
      dispatch({ type: 'UPDATE_SETTINGS', settings: preferences.settings });
    }
    uiDispatch({ type: 'HYDRATED', savedGame: loadSavedGame() });
  }, []);

  useEffect(() => {
    if (!ui.hydrated) return;
    if (isGameActive(state.phase) && state.images.length > 0) saveGame(state);
    else clearSavedGame();
  }, [state, ui.hydrated]);

  const persistPreferences = useCallback((players: Player[], settings: GameSettings) => {
    savePreferences({ playerNames: players.map((player) => player.name), settings });
  }, []);

  // --- Výběr a preload obrázků -----------------------------------------
  const { phase, seed } = state;
  const { imageCount, packId } = state.settings;

  useEffect(() => {
    if (phase !== 'LOADING_IMAGES') return;

    let cancelled = false;
    const controller = new AbortController();

    const run = async () => {
      uiDispatch({ type: 'LOAD_STARTED' });
      try {
        const capacity = await imageProvider.capacity(packId);
        const count = effectiveImageCount(imageCount, capacity);
        const images = await imageProvider.getImages({
          count,
          packId,
          seed,
          signal: controller.signal,
        });
        if (cancelled) return;
        await preloadImages(images, (loaded, total) => {
          if (!cancelled) uiDispatch({ type: 'LOAD_PROGRESS', value: loaded / total });
        });
        if (cancelled) return;
        dispatch({ type: 'IMAGES_READY', images });
      } catch {
        if (!cancelled) {
          uiDispatch({
            type: 'LOAD_FAILED',
            message: 'Obrázky se nepodařilo připravit. Zkuste to prosím znovu.',
          });
        }
      }
    };

    void run();
    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [phase, seed, imageCount, packId]);

  // --- Ochrana rozehrané hry -------------------------------------------
  const requestExit = useCallback(() => uiDispatch({ type: 'OPEN_EXIT' }), []);
  useExitGuard(active || state.phase === 'RESULTS', requestExit);

  const confirmExit = useCallback(() => {
    uiDispatch({ type: 'CLOSE_EXIT' });
    clearSavedGame();
    void fullscreen.exit();
    dispatch({ type: 'GO_HOME' });
  }, [fullscreen]);

  // --- Akce hráče ------------------------------------------------------
  const startGame = useCallback(
    async (useFullscreenMode: boolean) => {
      // Prázdná pole dostanou výchozí jména až tady – formulář zůstane čistý.
      const players = createPlayers(state.players.map((player) => player.name));
      dispatch({ type: 'SET_PLAYERS', players });
      persistPreferences(players, state.settings);
      if (useFullscreenMode) await fullscreen.enter();
      dispatch({ type: 'START_LOADING', seed: createSeed() });
    },
    [fullscreen, persistPreferences, state.players, state.settings],
  );

  const toggleSound = useCallback(() => {
    dispatch({ type: 'UPDATE_SETTINGS', settings: { soundEnabled: !state.settings.soundEnabled } });
  }, [state.settings.soundEnabled]);

  const nextImage = useCallback(() => {
    play('flip');
    dispatch({ type: 'NEXT_IMAGE' });
  }, [play]);

  const prevImage = useCallback(() => dispatch({ type: 'PREV_IMAGE' }), []);

  const startRecall = useCallback(() => {
    play('reveal');
    dispatch({ type: 'START_RECALL' });
  }, [play]);

  const revealRecall = useCallback(() => {
    play('reveal');
    dispatch({ type: 'REVEAL_RECALL' });
  }, [play]);

  const scoreRecall = useCallback(
    (correct: boolean) => {
      if (correct) play('correct');
      dispatch({ type: 'SCORE_RECALL', correct });
    },
    [play],
  );

  const nextRecall = useCallback(() => dispatch({ type: 'NEXT_RECALL' }), []);
  const openSetup = useCallback(() => dispatch({ type: 'OPEN_SETUP' }), []);
  const goHome = useCallback(() => dispatch({ type: 'GO_HOME' }), []);
  const openReview = useCallback(() => dispatch({ type: 'OPEN_REVIEW' }), []);
  const closeReview = useCallback(() => dispatch({ type: 'CLOSE_REVIEW' }), []);
  const reviewNext = useCallback(() => dispatch({ type: 'REVIEW_NEXT' }), []);
  const reviewPrev = useCallback(() => dispatch({ type: 'REVIEW_PREV' }), []);
  const playAgain = useCallback(() => dispatch({ type: 'PLAY_AGAIN', seed: createSeed() }), []);
  const retryLoading = useCallback(() => dispatch({ type: 'START_LOADING', seed: createSeed() }), []);

  const setPlayers = useCallback((players: Player[]) => dispatch({ type: 'SET_PLAYERS', players }), []);
  const updateSettings = useCallback(
    (settings: Partial<GameSettings>) => dispatch({ type: 'UPDATE_SETTINGS', settings }),
    [],
  );

  const resumeGame = useCallback(() => {
    if (!ui.resumeCandidate) return;
    dispatch({ type: 'RESTORE', state: ui.resumeCandidate });
    uiDispatch({ type: 'DISMISS_RESUME' });
  }, [ui.resumeCandidate]);

  const discardSavedGame = useCallback(() => {
    uiDispatch({ type: 'DISMISS_RESUME' });
    clearSavedGame();
  }, []);

  const packCapacity = useMemo(() => getPack(packId).images.length, [packId]);

  const screen = () => {
    switch (state.phase) {
      case 'HOME':
        return (
          <HomeScreen
            soundEnabled={state.settings.soundEnabled}
            onToggleSound={toggleSound}
            onNewGame={openSetup}
          />
        );

      case 'SETUP':
        return (
          <GameSetup
            players={state.players}
            settings={state.settings}
            packCapacity={packCapacity}
            fullscreenSupported={fullscreen.isSupported}
            onPlayersChange={setPlayers}
            onSettingsChange={updateSettings}
            onBack={goHome}
            onStart={(useFullscreenMode) => void startGame(useFullscreenMode)}
          />
        );

      case 'LOADING_IMAGES':
        return (
          <LoadingScreen
            progress={ui.progress}
            error={ui.loadError}
            onRetry={retryLoading}
            onCancel={openSetup}
          />
        );

      case 'STORY_MODE':
        return (
          <StoryMode
            images={state.images}
            index={state.currentImageIndex}
            timeLimit={state.settings.timeLimit}
            onNext={nextImage}
            onPrev={prevImage}
            onExit={requestExit}
            fullscreen={fullscreen}
          />
        );

      case 'TRANSITION':
        return <TransitionScreen onContinue={startRecall} onExit={requestExit} />;

      case 'RECALL_MODE':
        return (
          <RecallMode
            state={state}
            onReveal={revealRecall}
            onScore={scoreRecall}
            onNext={nextRecall}
            onExit={requestExit}
            fullscreen={fullscreen}
          />
        );

      case 'RESULTS':
        return (
          <ResultsScreen
            state={state}
            onReview={openReview}
            onPlayAgain={playAgain}
            onNewGame={openSetup}
            onFinish={play}
          />
        );

      case 'REVIEW':
        return (
          <ReviewMode
            images={state.images}
            index={state.reviewIndex}
            onNext={reviewNext}
            onPrev={reviewPrev}
            onClose={closeReview}
          />
        );

      default:
        return null;
    }
  };

  return (
    <main className="relative flex h-[100dvh] flex-col overflow-hidden">
      <NightSky variant={state.phase === 'HOME' ? 'full' : 'calm'} />

      <AnimatePresence mode="wait">
        <motion.div
          key={state.phase}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex h-full flex-col"
        >
          {screen()}
        </motion.div>
      </AnimatePresence>

      <Dialog
        open={ui.exitOpen}
        title="Opravdu ukončit rozehranou hru?"
        description="Postup hry bude ztracen."
        onClose={() => uiDispatch({ type: 'CLOSE_EXIT' })}
      >
        <Button variant="primary" full onClick={() => uiDispatch({ type: 'CLOSE_EXIT' })}>
          Pokračovat ve hře
        </Button>
        <Button variant="danger" full onClick={confirmExit}>
          Ukončit hru
        </Button>
      </Dialog>

      <Dialog
        open={ui.resumeCandidate !== null}
        title="Máte rozehraný sen."
        description="Chcete pokračovat tam, kde jste skončili?"
        onClose={discardSavedGame}
      >
        <Button variant="primary" full onClick={resumeGame}>
          Pokračovat
        </Button>
        <Button variant="secondary" full onClick={discardSavedGame}>
          Začít znovu
        </Button>
      </Dialog>
    </main>
  );
}
