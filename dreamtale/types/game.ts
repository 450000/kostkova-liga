import type { GameImage } from './images';

export type GamePhase =
  | 'HOME'
  | 'SETUP'
  | 'LOADING_IMAGES'
  | 'STORY_MODE'
  | 'TRANSITION'
  | 'RECALL_MODE'
  | 'RESULTS'
  | 'REVIEW';

export type ScoringMode = 'off' | 'team' | 'players';

/** `guided` = hra se ptá na N-tý obrázek, `free` = hostitel jen odkrývá další. */
export type RecallMode = 'guided' | 'free';

export type Player = {
  id: string;
  name: string;
};

export type GameSettings = {
  imageCount: number;
  scoring: ScoringMode;
  recallMode: RecallMode;
  /** Volitelný limit na kartu ve story mode (sekundy). 0 = bez limitu. */
  timeLimit: number;
  soundEnabled: boolean;
};

export type GameState = {
  phase: GamePhase;
  players: Player[];
  settings: GameSettings;
  images: GameImage[];
  currentImageIndex: number;
  recallIndex: number;
  /** Byl aktuální recall obrázek už odkryt? */
  recallRevealed: boolean;
  currentPlayerIndex: number;
  scores: Record<string, number>;
  /** Počet uhodnutých obrázků v režimu společného skóre. */
  teamScore: number;
  reviewIndex: number;
  seed: string;
  startedAt: number | null;
  finishedAt: number | null;
};

export type GameAction =
  | { type: 'GO_HOME' }
  | { type: 'OPEN_SETUP' }
  | { type: 'SET_PLAYERS'; players: Player[] }
  | { type: 'UPDATE_SETTINGS'; settings: Partial<GameSettings> }
  | { type: 'START_LOADING'; seed: string }
  | { type: 'IMAGES_READY'; images: GameImage[] }
  | { type: 'NEXT_IMAGE' }
  | { type: 'PREV_IMAGE' }
  | { type: 'START_RECALL' }
  | { type: 'REVEAL_RECALL' }
  | { type: 'SCORE_RECALL'; correct: boolean }
  | { type: 'NEXT_RECALL' }
  | { type: 'OPEN_REVIEW' }
  | { type: 'REVIEW_NEXT' }
  | { type: 'REVIEW_PREV' }
  | { type: 'SET_REVIEW_INDEX'; index: number }
  | { type: 'CLOSE_REVIEW' }
  | { type: 'PLAY_AGAIN'; seed: string }
  | { type: 'RESTORE'; state: GameState };

export type GameResult = {
  total: number;
  correct: number;
  percentage: number;
  ranking: Array<{ player: Player; score: number; rank: number }>;
};
