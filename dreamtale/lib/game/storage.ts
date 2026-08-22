import type { GameSettings, GameState } from '@/types/game';
import { STORAGE_KEYS } from '@/lib/config';
import { createInitialState } from './engine';

export type Preferences = {
  playerNames: string[];
  settings: GameSettings;
};

function readJson<T>(key: string): T | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    // Privátní režim nebo poškozená data – hra musí běžet dál.
    return null;
  }
}

function writeJson(key: string, value: unknown): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* úložiště není k dispozici – ignorujeme */
  }
}

function remove(key: string): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.removeItem(key);
  } catch {
    /* nic */
  }
}

export function loadPreferences(): Preferences | null {
  const stored = readJson<Partial<Preferences>>(STORAGE_KEYS.preferences);
  if (!stored || !stored.settings || !Array.isArray(stored.playerNames)) return null;
  const base = createInitialState();
  return {
    playerNames: stored.playerNames.map((name) => String(name)),
    settings: { ...base.settings, ...stored.settings },
  };
}

export function savePreferences(preferences: Preferences): void {
  writeJson(STORAGE_KEYS.preferences, preferences);
}

export function loadSavedGame(): GameState | null {
  const stored = readJson<GameState>(STORAGE_KEYS.savedGame);
  if (!stored || !Array.isArray(stored.images) || stored.images.length === 0) return null;
  if (!stored.phase || typeof stored.currentImageIndex !== 'number') return null;
  return stored;
}

export function saveGame(state: GameState): void {
  writeJson(STORAGE_KEYS.savedGame, state);
}

export function clearSavedGame(): void {
  remove(STORAGE_KEYS.savedGame);
}
