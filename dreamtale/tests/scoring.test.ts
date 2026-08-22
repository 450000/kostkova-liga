import { describe, expect, it } from 'vitest';
import { createInitialState, createPlayers, gameReducer } from '@/lib/game/engine';
import { buildResult, nextPlayerIndex } from '@/lib/game/scoring';
import type { GameState } from '@/types/game';
import type { GameImage } from '@/types/images';
import type { ScoringMode } from '@/types/game';

function makeImages(count: number): GameImage[] {
  return Array.from({ length: count }, (_, index) => ({
    id: `img-${index}`,
    name: `Obrázek ${index}`,
    category: 'objects' as const,
    image: `/game-images/img-${index}.svg`,
  }));
}

function recallReady(names: string[], scoring: ScoringMode, imageCount: number): GameState {
  let state = createInitialState({ players: createPlayers(names) });
  state = gameReducer(state, { type: 'SET_PLAYERS', players: createPlayers(names) });
  state = gameReducer(state, { type: 'UPDATE_SETTINGS', settings: { scoring, imageCount } });
  state = gameReducer(state, { type: 'START_LOADING', seed: 'S' });
  state = gameReducer(state, { type: 'IMAGES_READY', images: makeImages(imageCount) });
  return gameReducer(state, { type: 'START_RECALL' });
}

function answer(state: GameState, correct: boolean): GameState {
  const revealed = gameReducer(state, { type: 'REVEAL_RECALL' });
  return gameReducer(revealed, { type: 'SCORE_RECALL', correct });
}

describe('round-robin hráčů', () => {
  it('cyklí přes všechny hráče', () => {
    expect(nextPlayerIndex(0, 4)).toBe(1);
    expect(nextPlayerIndex(3, 4)).toBe(0);
    expect(nextPlayerIndex(0, 0)).toBe(0);
  });

  it('střídá hráče při vybavování', () => {
    let state = recallReady(['Mirek', 'Lenka', 'Anička'], 'players', 6);
    const order: string[] = [];
    for (let i = 0; i < 5; i += 1) {
      order.push(state.players[state.currentPlayerIndex].name);
      state = answer(state, true);
    }
    expect(order).toEqual(['Mirek', 'Lenka', 'Anička', 'Mirek', 'Lenka']);
  });
});

describe('skórování', () => {
  it('přičítá body jednotlivým hráčům', () => {
    let state = recallReady(['Mirek', 'Lenka'], 'players', 4);
    state = answer(state, true); // Mirek
    state = answer(state, false); // Lenka
    state = answer(state, true); // Mirek
    expect(state.scores.p1).toBe(2);
    expect(state.scores.p2).toBe(0);
  });

  it('počítá společné skóre', () => {
    let state = recallReady(['Mirek'], 'team', 3);
    state = answer(state, true);
    state = answer(state, false);
    expect(state.teamScore).toBe(1);
    expect(state.scores.p1).toBe(0);
  });

  it('nedovolí bodovat před odkrytím', () => {
    const state = recallReady(['Mirek'], 'team', 3);
    expect(gameReducer(state, { type: 'SCORE_RECALL', correct: true })).toBe(state);
  });

  it('spočítá procenta a pořadí se sdílenými místy', () => {
    let state = recallReady(['Mirek', 'Lenka', 'Anička', 'Petr'], 'players', 4);
    state = answer(state, true); // Mirek 1
    state = answer(state, true); // Lenka 1
    state = answer(state, false); // Anička 0
    state = answer(state, false); // Petr 0

    const result = buildResult(state);
    expect(result.total).toBe(4);
    expect(result.correct).toBe(2);
    expect(result.percentage).toBe(50);
    expect(result.ranking.map((entry) => entry.rank)).toEqual([1, 1, 3, 3]);
  });
});
