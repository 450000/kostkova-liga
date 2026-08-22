'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

type LoadingScreenProps = {
  progress: number;
  error: string | null;
  onRetry: () => void;
  onCancel: () => void;
};

export function LoadingScreen({ progress, error, onRetry, onCancel }: LoadingScreenProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-8 px-8 text-center">
      {error ? (
        <>
          <p className="font-display text-2xl text-text">{error}</p>
          <div className="flex w-full max-w-xs flex-col gap-3">
            <Button full onClick={onRetry}>
              Zkusit znovu
            </Button>
            <Button variant="ghost" full onClick={onCancel}>
              Zpět na nastavení
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="relative h-24 w-24">
            {[0, 1, 2].map((index) => (
              <motion.span
                key={index}
                className="absolute inset-0 rounded-full border border-primary/40"
                animate={{ scale: [0.6, 1.15], opacity: [0.7, 0] }}
                transition={{
                  duration: 2.4,
                  delay: index * 0.8,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />
            ))}
            <motion.span
              className="absolute inset-[38%] rounded-full bg-secondary"
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          <div>
            <p className="font-display text-2xl text-text">Skládáme váš sen…</p>
            <p className="mt-2 text-sm text-muted">Chvilku to potrvá, ať nic nečeká.</p>
          </div>

          <div className="h-1 w-56 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-secondary"
              animate={{ width: `${Math.round(progress * 100)}%` }}
              transition={{ ease: 'easeOut', duration: 0.3 }}
            />
          </div>
        </>
      )}
    </div>
  );
}
