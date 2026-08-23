import { motion } from 'framer-motion';
import type { Player } from '@/types/game';

/** Jméno hráče na tahu. Musí být vidět u každé karty, aby se nikdo neptal „kdo teď?“. */
export function TurnBadge({ player, label = 'Na řadě' }: { player: Player; label?: string }) {
  return (
    <motion.div
      key={player.id}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="glass flex items-center gap-2 rounded-full px-4 py-1.5"
    >
      <span className="text-[0.65rem] tracking-[0.2em] text-muted uppercase">{label}</span>
      <span className="font-display max-w-[9rem] truncate text-base font-semibold text-secondary">
        {player.name}
      </span>
    </motion.div>
  );
}
