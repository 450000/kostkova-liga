'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { createRng } from '@/lib/game/rng';
import { useKeyboard } from '@/hooks/useKeyboard';
import { Button } from '@/components/ui/Button';
import { ExitGameButton } from '@/components/game/ExitGameButton';

export function TransitionScreen({
  onContinue,
  onFinish,
  onExit,
}: {
  onContinue: () => void;
  /** Skončit rovnou – ne každá parta chce hádat karty. */
  onFinish: () => void;
  onExit: () => void;
}) {
  useKeyboard(useMemo(() => ({ Enter: onContinue, ' ': onContinue, Escape: onExit }), [onContinue, onExit]));

  const sparks = useMemo(() => {
    const rng = createRng('dreamtale-transition');
    return Array.from({ length: 18 }, () => ({
      x: 10 + rng() * 80,
      y: 10 + rng() * 70,
      size: 3 + rng() * 5,
      delay: rng() * 1.8,
    }));
  }, []);

  return (
    <div className="relative flex h-full flex-col">
      <header className="flex justify-start px-4 pt-[max(1rem,env(safe-area-inset-top))]">
        <ExitGameButton onExit={onExit} />
      </header>

      <div className="relative flex flex-1 flex-col items-center justify-center px-8 text-center">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {sparks.map((spark, index) => (
            <motion.span
              key={index}
              className="absolute rounded-full bg-secondary"
              style={{ left: `${spark.x}%`, top: `${spark.y}%`, width: spark.size, height: spark.size }}
              animate={{ opacity: [0, 1, 0], scale: [0.5, 1.3, 0.5] }}
              transition={{ duration: 3, delay: spark.delay, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl font-semibold text-text"
        >
          Příběh skončil.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mt-4 max-w-xs text-balance text-muted"
        >
          Můžete si ho zkusit vybavit – nebo to nechat být a vrátit se na úvod.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-12 flex w-full max-w-xs flex-col gap-3"
        >
          <Button size="lg" full onClick={onContinue}>
            Vybavit sen
          </Button>
          <Button variant="ghost" full onClick={onFinish}>
            Skončit a zpět na úvod
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
