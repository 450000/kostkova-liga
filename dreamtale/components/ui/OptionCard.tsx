'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type OptionCardProps = {
  title: string;
  subtitle?: string;
  hint?: string;
  selected: boolean;
  onSelect: () => void;
  children?: ReactNode;
};

export function OptionCard({ title, subtitle, hint, selected, onSelect, children }: OptionCardProps) {
  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.97 }}
      aria-pressed={selected}
      onClick={onSelect}
      className={`relative flex flex-col items-start gap-1 rounded-[var(--radius-control)] border p-4 text-left transition-colors ${
        selected
          ? 'border-secondary/70 bg-secondary/15 text-text'
          : 'border-border-soft bg-surface text-muted hover:bg-surface-strong'
      }`}
    >
      <span className="font-display text-lg font-semibold text-text">{title}</span>
      {subtitle && <span className="text-sm">{subtitle}</span>}
      {hint && <span className="text-xs uppercase tracking-[0.18em] text-secondary/80">{hint}</span>}
      {children}
    </motion.button>
  );
}
