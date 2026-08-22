'use client';

import { AnimatePresence, motion } from 'framer-motion';
import type { Player } from '@/types/game';
import { GAME_LIMITS } from '@/lib/config';
import { Stepper } from '@/components/ui/Stepper';

type PlayerSetupProps = {
  players: Player[];
  onChange: (players: Player[]) => void;
};

function pluralPlayers(count: number): string {
  if (count === 1) return '1 hráč';
  if (count < 5) return `${count} hráči`;
  return `${count} hráčů`;
}

export function PlayerSetup({ players, onChange }: PlayerSetupProps) {
  const setCount = (count: number) => {
    const next: Player[] = Array.from({ length: count }, (_, index) => {
      return players[index] ?? { id: `p${index + 1}`, name: '' };
    });
    onChange(next);
  };

  const setName = (index: number, name: string) => {
    onChange(players.map((player, i) => (i === index ? { ...player, name } : player)));
  };

  return (
    <div className="flex flex-col gap-5">
      <Stepper
        label="Počet hráčů"
        value={players.length}
        min={GAME_LIMITS.minPlayers}
        max={GAME_LIMITS.maxPlayers}
        onChange={setCount}
        suffix={pluralPlayers}
      />

      <div className="flex flex-col gap-2">
        <AnimatePresence initial={false}>
          {players.map((player, index) => (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22 }}
            >
              <label className="sr-only" htmlFor={`player-${player.id}`}>
                Jméno hráče {index + 1}
              </label>
              <input
                id={`player-${player.id}`}
                value={player.name}
                onChange={(event) => setName(index, event.target.value)}
                placeholder={`Hráč ${index + 1}`}
                maxLength={20}
                autoComplete="off"
                className="w-full rounded-[var(--radius-control)] border border-border-soft bg-surface px-4 py-3 text-text placeholder:text-muted/60 focus:border-primary focus:outline-none"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
