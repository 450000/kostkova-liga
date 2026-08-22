import { describe, expect, it } from 'vitest';
import {
  DEFAULT_SETTINGS,
  clampImageCount,
  createEmptyPlayers,
  createInitialState,
  createPlayers,
  gameReducer,
  isGameActive,
  isResumable,
} from '@/lib/game/engine';
import type { GameImage } from '@/types/images';
import type { GameState } from '@/types/game';

function makeImages(count: number): GameImage[] {
  return Array.from({ length: count }, (_, index) => ({
    id: `img-${index}`,
    name: `Obrázek ${index}`,
    category: 'everyday' as const,
    image: `/cards/img-${index}.svg`,
  }));
}

function startedGame(imageCount = 3, overrides: Partial<GameState> = {}): GameState {
  let state = createInitialState({ players: createPlayers(['Mirek', 'Lenka']) });
  state = gameReducer(state, { type: 'UPDATE_SETTINGS', settings: { imageCount } });
  state = gameReducer(state, { type: 'START_LOADING', seed: 'SEED01' });
  state = gameReducer(state, { type: 'IMAGES_READY', images: makeImages(imageCount) });
  return { ...state, ...overrides };
}

describe('vytvoření hry', () => {
  it('začíná na domovské obrazovce s výchozím nastavením', () => {
    const state = createInitialState();
    expect(state.phase).toBe('HOME');
    expect(state.settings).toEqual(DEFAULT_SETTINGS);
    expect(state.images).toHaveLength(0);
  });

  it('doplní výchozí jména jen tam, kde hráč nic nevyplnil', () => {
    const players = createPlayers(['Mirek', '', '  ']);
    expect(players.map((player) => player.name)).toEqual(['Mirek', 'Hráč 2', 'Hráč 3']);
    expect(createEmptyPlayers(2).every((player) => player.name === '')).toBe(true);
  });

  it('drží počet obrázků v povolených mezích', () => {
    expect(clampImageCount(3)).toBe(5);
    expect(clampImageCount(999)).toBe(60);
    expect(clampImageCount(24)).toBe(24);
  });
});

describe('změna fáze', () => {
  it('projde celým průběhem hry', () => {
    let state = createInitialState();
    state = gameReducer(state, { type: 'OPEN_SETUP' });
    expect(state.phase).toBe('SETUP');

    state = gameReducer(state, { type: 'START_LOADING', seed: 'ABC123' });
    expect(state.phase).toBe('LOADING_IMAGES');
    expect(state.seed).toBe('ABC123');

    state = gameReducer(state, { type: 'IMAGES_READY', images: makeImages(2) });
    expect(state.phase).toBe('STORY_MODE');
    expect(state.startedAt).not.toBeNull();

    state = gameReducer(state, { type: 'NEXT_IMAGE' });
    expect(state.currentImageIndex).toBe(1);

    state = gameReducer(state, { type: 'NEXT_IMAGE' });
    expect(state.phase).toBe('TRANSITION');

    state = gameReducer(state, { type: 'START_RECALL' });
    expect(state.phase).toBe('RECALL_MODE');
    expect(state.recallIndex).toBe(0);
  });

  it('nepustí zpět před první obrázek', () => {
    const state = startedGame(3);
    expect(gameReducer(state, { type: 'PREV_IMAGE' }).currentImageIndex).toBe(0);
  });

  it('bez obrázků hru nespustí', () => {
    let state = createInitialState();
    state = gameReducer(state, { type: 'START_LOADING', seed: 'X' });
    expect(gameReducer(state, { type: 'IMAGES_READY', images: [] }).phase).toBe('LOADING_IMAGES');
  });

  it('označí rozehranou hru jako obnovitelnou', () => {
    const state = startedGame(3);
    expect(isGameActive(state.phase)).toBe(true);
    expect(isResumable(state)).toBe(true);
    expect(isResumable(createInitialState())).toBe(false);
  });
});

describe('recall index', () => {
  it('odkrývá a posouvá se po jednom obrázku', () => {
    let state = gameReducer(startedGame(3), { type: 'START_RECALL' });
    expect(state.recallRevealed).toBe(false);

    state = gameReducer(state, { type: 'REVEAL_RECALL' });
    expect(state.recallRevealed).toBe(true);

    state = gameReducer(state, { type: 'NEXT_RECALL' });
    expect(state.recallIndex).toBe(1);
    expect(state.recallRevealed).toBe(false);
  });

  it('po posledním obrázku přejde na výsledky', () => {
    let state = gameReducer(startedGame(2), { type: 'START_RECALL' });
    state = gameReducer(state, { type: 'NEXT_RECALL' });
    state = gameReducer(state, { type: 'NEXT_RECALL' });
    expect(state.phase).toBe('RESULTS');
    expect(state.finishedAt).not.toBeNull();
  });
});

describe('nová hra a reset', () => {
  it('„hrát znovu“ vynuluje skóre i indexy a nechá nastavení', () => {
    let state = startedGame(3);
    state = gameReducer(state, { type: 'UPDATE_SETTINGS', settings: { scoring: 'team' } });
    state = gameReducer(state, { type: 'START_RECALL' });
    state = gameReducer(state, { type: 'REVEAL_RECALL' });
    state = gameReducer(state, { type: 'SCORE_RECALL', correct: true });

    const again = gameReducer(state, { type: 'PLAY_AGAIN', seed: 'NEW999' });
    expect(again.phase).toBe('LOADING_IMAGES');
    expect(again.teamScore).toBe(0);
    expect(again.recallIndex).toBe(0);
    expect(again.images).toHaveLength(0);
    expect(again.settings.scoring).toBe('team');
    expect(again.seed).toBe('NEW999');
  });

  it('prohlížení snu se drží v mezích', () => {
    let state: GameState = { ...startedGame(3), phase: 'RESULTS' };
    state = gameReducer(state, { type: 'OPEN_REVIEW' });
    expect(state.phase).toBe('REVIEW');

    state = gameReducer(state, { type: 'REVIEW_PREV' });
    expect(state.reviewIndex).toBe(0);

    state = gameReducer(state, { type: 'SET_REVIEW_INDEX', index: 99 });
    expect(state.reviewIndex).toBe(2);

    state = gameReducer(state, { type: 'CLOSE_REVIEW' });
    expect(state.phase).toBe('RESULTS');
  });
});
