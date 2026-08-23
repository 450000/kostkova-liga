import type { GameAction, GamePhase, GameSettings, GameState, Player } from '@/types/game';
import { GAME_LIMITS } from '@/lib/config';
import { nextPlayerIndex } from './scoring';

export const DEFAULT_SETTINGS: GameSettings = {
  imageCount: 20,
  scoring: 'off',
  recallMode: 'guided',
  timeLimit: 0,
  soundEnabled: false,
};

/** Prázdná jména – ve formuláři se zobrazí jen jako placeholder. */
export function createEmptyPlayers(count: number): Player[] {
  return Array.from({ length: count }, (_, index) => ({ id: `p${index + 1}`, name: '' }));
}

/** Doplní výchozí jména („Hráč 3“) tam, kde uživatel nic nevyplnil. */
export function createPlayers(names: readonly string[]): Player[] {
  return names.map((name, index) => ({
    id: `p${index + 1}`,
    name: name.trim() || `Hráč ${index + 1}`,
  }));
}

export function createInitialState(overrides: Partial<GameState> = {}): GameState {
  return {
    phase: 'HOME',
    players: createEmptyPlayers(4),
    settings: { ...DEFAULT_SETTINGS },
    images: [],
    currentImageIndex: 0,
    recallIndex: 0,
    recallRevealed: false,
    currentPlayerIndex: 0,
    scores: {},
    teamScore: 0,
    reviewIndex: 0,
    seed: '',
    startedAt: null,
    finishedAt: null,
    ...overrides,
  };
}

export function clampPlayerCount(count: number): number {
  return Math.min(GAME_LIMITS.maxPlayers, Math.max(GAME_LIMITS.minPlayers, Math.round(count)));
}

export function clampImageCount(count: number): number {
  if (!Number.isFinite(count)) return DEFAULT_SETTINGS.imageCount;
  return Math.min(GAME_LIMITS.maxImages, Math.max(GAME_LIMITS.minImages, Math.round(count)));
}

/** Kolik obrázků skutečně rozdáme: přání hráče omezené limity hry i velikostí balíčku. */
export function effectiveImageCount(requested: number, packCapacity: number): number {
  return Math.max(0, Math.min(clampImageCount(requested), Math.floor(packCapacity)));
}

function emptyScores(players: readonly Player[]): Record<string, number> {
  return Object.fromEntries(players.map((player) => [player.id, 0]));
}

/** Reset všeho, co patří k jednomu odehranému kolu – nastavení a hráči zůstávají. */
function resetRound(state: GameState, phase: GamePhase, seed: string): GameState {
  return {
    ...state,
    phase,
    images: [],
    currentImageIndex: 0,
    recallIndex: 0,
    recallRevealed: false,
    currentPlayerIndex: 0,
    scores: emptyScores(state.players),
    teamScore: 0,
    reviewIndex: 0,
    seed,
    startedAt: null,
    finishedAt: null,
  };
}

/** Posun na další otázku vybavování; po poslední se hra uzavře do výsledků. */
function advanceRecall(state: GameState): GameState {
  const isLast = state.recallIndex >= state.images.length - 1;
  if (isLast) {
    return { ...state, phase: 'RESULTS', recallRevealed: true, finishedAt: Date.now() };
  }
  return {
    ...state,
    recallIndex: state.recallIndex + 1,
    recallRevealed: false,
    currentPlayerIndex: nextPlayerIndex(state.currentPlayerIndex, state.players.length),
  };
}

/**
 * Kdo je na tahu u N-té karty. Hráči se střídají dokola.
 * Při jednom hráči nemá smysl jméno ukazovat – vrací null.
 */
export function playerOnTurn(players: readonly Player[], index: number): Player | null {
  if (players.length < 2) return null;
  return players[((index % players.length) + players.length) % players.length] ?? null;
}

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'GO_HOME':
      return { ...resetRound(state, 'HOME', ''), phase: 'HOME' };

    case 'OPEN_SETUP':
      return { ...resetRound(state, 'SETUP', ''), phase: 'SETUP' };

    case 'SET_PLAYERS': {
      const players = action.players.length > 0 ? action.players : createPlayers(['']);
      return { ...state, players, scores: emptyScores(players), currentPlayerIndex: 0 };
    }

    case 'UPDATE_SETTINGS': {
      const merged = { ...state.settings, ...action.settings };
      return {
        ...state,
        settings: { ...merged, imageCount: clampImageCount(merged.imageCount) },
      };
    }

    case 'START_LOADING':
      return { ...resetRound(state, 'LOADING_IMAGES', action.seed) };

    case 'IMAGES_READY': {
      if (action.images.length === 0) return state;
      return {
        ...state,
        phase: 'STORY_MODE',
        images: action.images,
        currentImageIndex: 0,
        startedAt: Date.now(),
      };
    }

    case 'NEXT_IMAGE': {
      if (state.phase !== 'STORY_MODE') return state;
      if (state.currentImageIndex >= state.images.length - 1) {
        return { ...state, phase: 'TRANSITION' };
      }
      return { ...state, currentImageIndex: state.currentImageIndex + 1 };
    }

    case 'PREV_IMAGE': {
      if (state.phase !== 'STORY_MODE' || state.currentImageIndex === 0) return state;
      return { ...state, currentImageIndex: state.currentImageIndex - 1 };
    }

    case 'START_RECALL':
      return {
        ...state,
        phase: 'RECALL_MODE',
        recallIndex: 0,
        recallRevealed: false,
        currentPlayerIndex: 0,
      };

    case 'REVEAL_RECALL': {
      if (state.phase !== 'RECALL_MODE') return state;
      return { ...state, recallRevealed: true };
    }

    case 'SCORE_RECALL': {
      // Bodovat lze až po odkrytí – jinak by se dalo hádat naslepo.
      if (state.phase !== 'RECALL_MODE' || !state.recallRevealed) return state;
      let scored = state;
      if (action.correct) {
        if (state.settings.scoring === 'players') {
          const player = state.players[state.currentPlayerIndex];
          if (player) {
            scored = {
              ...state,
              scores: { ...state.scores, [player.id]: (state.scores[player.id] ?? 0) + 1 },
            };
          }
        } else {
          scored = { ...state, teamScore: state.teamScore + 1 };
        }
      }
      return advanceRecall(scored);
    }

    case 'NEXT_RECALL': {
      if (state.phase !== 'RECALL_MODE') return state;
      return advanceRecall(state);
    }

    case 'OPEN_REVIEW':
      return { ...state, phase: 'REVIEW', reviewIndex: 0 };

    case 'REVIEW_NEXT':
      return {
        ...state,
        reviewIndex: Math.min(state.reviewIndex + 1, Math.max(state.images.length - 1, 0)),
      };

    case 'REVIEW_PREV':
      return { ...state, reviewIndex: Math.max(state.reviewIndex - 1, 0) };

    case 'SET_REVIEW_INDEX':
      return {
        ...state,
        reviewIndex: Math.min(Math.max(action.index, 0), Math.max(state.images.length - 1, 0)),
      };

    case 'CLOSE_REVIEW':
      return { ...state, phase: 'RESULTS' };

    case 'PLAY_AGAIN':
      return resetRound(state, 'LOADING_IMAGES', action.seed);

    case 'RESTORE':
      return action.state;

    default:
      return state;
  }
}

/** Fáze, ve kterých je hra rozehraná a nemá se z ní dát omylem odejít. */
export const ACTIVE_PHASES: readonly GamePhase[] = [
  'LOADING_IMAGES',
  'STORY_MODE',
  'TRANSITION',
  'RECALL_MODE',
];

export function isGameActive(phase: GamePhase): boolean {
  return ACTIVE_PHASES.includes(phase);
}

/** Rozehraná hra, kterou má smysl nabídnout k obnovení po reloadu. */
export function isResumable(state: GameState): boolean {
  return isGameActive(state.phase) && state.images.length > 0;
}
