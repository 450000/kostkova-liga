'use client';

import { motion } from 'framer-motion';
import { useEffect, useMemo, useRef } from 'react';
import type { GameState } from '@/types/game';
import type { SoundName } from '@/hooks/useSound';
import { buildResult } from '@/lib/game/scoring';
import { createRng } from '@/lib/game/rng';
import { Button } from '@/components/ui/Button';

type ResultsScreenProps = {
  state: GameState;
  onReview: () => void;
  onPlayAgain: () => void;
  onNewGame: () => void;
  onHome: () => void;
  onFinish: (sound: SoundName) => void;
};

export function ResultsScreen({
  state,
  onReview,
  onPlayAgain,
  onNewGame,
  onHome,
  onFinish,
}: ResultsScreenProps) {
  const result = useMemo(() => buildResult(state), [state]);
  const showScore = state.settings.scoring !== 'off';
  const showRanking = state.settings.scoring === 'players' && state.players.length > 1;
  const celebrated = useRef(false);

  useEffect(() => {
    if (celebrated.current) return;
    celebrated.current = true;
    onFinish('finish');
  }, [onFinish]);

  const confetti = useMemo(() => {
    const rng = createRng(`dreamtale-results-${state.seed}`);
    return Array.from({ length: 22 }, () => ({
      x: rng() * 100,
      delay: rng() * 1.2,
      duration: 3 + rng() * 2.5,
      size: 4 + rng() * 5,
      hue: ['var(--secondary)', 'var(--primary)', 'var(--accent)'][Math.floor(rng() * 3)],
    }));
  }, [state.seed]);

  return (
    <div className="relative flex h-full flex-col overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {confetti.map((piece, index) => (
          <motion.span
            key={index}
            className="absolute rounded-full"
            style={{
              left: `${piece.x}%`,
              width: piece.size,
              height: piece.size,
              background: piece.hue,
            }}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: '105vh', opacity: [0, 1, 0] }}
            transition={{ duration: piece.duration, delay: piece.delay, ease: 'easeIn' }}
          />
        ))}
      </div>

      <div className="scroll-soft relative flex flex-1 flex-col items-center overflow-y-auto px-6 py-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="font-display text-4xl font-semibold text-text"
        >
          Sen dokončen ✨
        </motion.h1>

        {showScore ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-8"
          >
            <p className="text-sm tracking-[0.25em] text-muted uppercase">Zapamatovali jste si</p>
            <p className="font-display mt-3 text-6xl font-semibold text-secondary">
              {result.correct} <span className="text-3xl text-muted">/ {result.total}</span>
            </p>
            <p className="font-display mt-1 text-2xl text-text">{result.percentage} %</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-8"
          >
            <p className="font-display text-6xl font-semibold text-secondary">{result.total}</p>
            <p className="mt-2 text-sm tracking-[0.25em] text-muted uppercase">obrázků ve snu</p>
          </motion.div>
        )}

        {showRanking && (
          <motion.ol
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="glass mt-8 w-full max-w-sm rounded-[var(--radius-card)] p-4 text-left"
          >
            {result.ranking.map(({ player, score, rank }) => (
              <li
                key={player.id}
                className="flex items-center gap-3 border-b border-white/5 py-2.5 last:border-none"
              >
                <span
                  className={`font-display w-6 text-center text-lg ${rank === 1 ? 'text-secondary' : 'text-muted'}`}
                >
                  {rank}.
                </span>
                <span className="flex-1 truncate text-text">{player.name}</span>
                <span className="font-display text-lg text-text">{score}</span>
              </li>
            ))}
          </motion.ol>
        )}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-10 flex w-full max-w-sm flex-col gap-3"
        >
          <Button size="lg" full onClick={onReview}>
            Prohlédnout celý příběh
          </Button>
          <Button variant="secondary" full onClick={onPlayAgain}>
            Hrát znovu
          </Button>
          <Button variant="ghost" full onClick={onNewGame}>
            Nová hra
          </Button>
          <Button variant="ghost" full onClick={onHome}>
            Zpět na úvod
          </Button>
        </motion.div>

        <p className="mt-8 text-xs tracking-[0.24em] text-muted/50 uppercase">Kód snu: {state.seed}</p>
      </div>
    </div>
  );
}
