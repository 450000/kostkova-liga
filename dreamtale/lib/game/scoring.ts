import type { GameResult, GameState } from '@/types/game';

/** Round-robin: po každém odhadu se hráč posune o jednoho dál. */
export function nextPlayerIndex(currentIndex: number, playerCount: number): number {
  if (playerCount <= 0) return 0;
  return (currentIndex + 1) % playerCount;
}

export function totalCorrect(state: GameState): number {
  if (state.settings.scoring === 'players') {
    return Object.values(state.scores).reduce((sum, value) => sum + value, 0);
  }
  return state.teamScore;
}

export function buildResult(state: GameState): GameResult {
  const total = state.images.length;
  const correct = Math.min(totalCorrect(state), total);
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

  const sorted = [...state.players].sort(
    (a, b) => (state.scores[b.id] ?? 0) - (state.scores[a.id] ?? 0),
  );

  let lastScore: number | null = null;
  let lastRank = 0;
  const ranking = sorted.map((player, index) => {
    const score = state.scores[player.id] ?? 0;
    // Shodné skóre sdílí pořadí (1., 1., 3.).
    const rank = score === lastScore ? lastRank : index + 1;
    lastScore = score;
    lastRank = rank;
    return { player, score, rank };
  });

  return { total, correct, percentage, ranking };
}
