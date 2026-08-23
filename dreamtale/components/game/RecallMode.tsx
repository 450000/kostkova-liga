'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useMemo } from 'react';
import type { GameState } from '@/types/game';
import type { FullscreenControls } from '@/hooks/useFullscreen';
import { ordinal } from '@/lib/game/ordinal';
import { useKeyboard } from '@/hooks/useKeyboard';
import { GameCard } from '@/components/game/GameCard';
import { ProgressIndicator } from '@/components/game/ProgressIndicator';
import { FullscreenButton } from '@/components/game/FullscreenButton';
import { ExitGameButton } from '@/components/game/ExitGameButton';
import { TurnBadge } from '@/components/game/TurnBadge';
import { Button } from '@/components/ui/Button';

type RecallModeProps = {
  state: GameState;
  onReveal: () => void;
  onScore: (correct: boolean) => void;
  onNext: () => void;
  onExit: () => void;
  fullscreen: FullscreenControls;
};

export function RecallMode({ state, onReveal, onScore, onNext, onExit, fullscreen }: RecallModeProps) {
  const { images, recallIndex, recallRevealed, settings, players, currentPlayerIndex } = state;
  const image = images[recallIndex];
  const scoringPlayers = settings.scoring === 'players';
  const scoring = settings.scoring !== 'off';
  const activePlayer = players[currentPlayerIndex];

  const question =
    settings.recallMode === 'free'
      ? `Obrázek číslo ${recallIndex + 1}`
      : `Jaký byl ${ordinal(recallIndex + 1)} obrázek?`;

  const primaryAction = useCallback(() => {
    if (!recallRevealed) onReveal();
    else if (!scoring) onNext();
  }, [recallRevealed, scoring, onReveal, onNext]);

  useKeyboard(
    useMemo(
      () => ({ ' ': primaryAction, Enter: primaryAction, ArrowRight: primaryAction, Escape: onExit }),
      [primaryAction, onExit],
    ),
  );

  if (!image) return null;

  return (
    <div className="flex h-full flex-col">
      <header className="flex items-start justify-between px-4 pt-[max(1rem,env(safe-area-inset-top))]">
        <ExitGameButton onExit={onExit} />
        <div className="pt-1">
          <ProgressIndicator current={recallIndex + 1} total={images.length} label="Vybavování" />
        </div>
        <FullscreenButton fullscreen={fullscreen} />
      </header>

      <div className="px-6 pt-4 text-center">
        <AnimatePresence mode="wait">
          <motion.h2
            key={question}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="font-display text-2xl font-semibold text-text sm:text-3xl"
          >
            {question}
          </motion.h2>
        </AnimatePresence>

        {activePlayer && players.length > 1 && (
          <div key={activePlayer.id + recallIndex} className="mt-3 flex justify-center">
            <TurnBadge player={activePlayer} label="Hádá" />
          </div>
        )}
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden px-4 py-4">
        <AnimatePresence mode="popLayout" initial={false}>
          <GameCard
            key={`${image.id}-${recallRevealed ? 'shown' : 'hidden'}`}
            image={image}
            hidden={!recallRevealed}
            hiddenLabel={recallRevealed ? undefined : 'Řekněte odpověď nahlas'}
          />
        </AnimatePresence>
      </div>

      <footer className="px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
        <div className="mx-auto w-full max-w-sm">
          {!recallRevealed ? (
            <Button size="lg" full onClick={onReveal}>
              Ukázat
            </Button>
          ) : scoring ? (
            <div className="flex gap-3">
              <Button variant="secondary" full onClick={() => onScore(false)}>
                {scoringPlayers ? 'Neuhodl' : 'Neuhodli'}
              </Button>
              <Button full onClick={() => onScore(true)}>
                {scoringPlayers ? 'Uhodl' : 'Uhodli'}
              </Button>
            </div>
          ) : (
            <Button size="lg" full onClick={onNext}>
              {recallIndex === images.length - 1 ? 'Výsledky' : 'Další'}
            </Button>
          )}
        </div>
      </footer>
    </div>
  );
}
