'use client';

import { motion } from 'framer-motion';

type Option<T extends string | number> = { value: T; label: string };

type SegmentedProps<T extends string | number> = {
  value: T;
  options: ReadonlyArray<Option<T>>;
  onChange: (value: T) => void;
  label: string;
};

export function Segmented<T extends string | number>({
  value,
  options,
  onChange,
  label,
}: SegmentedProps<T>) {
  return (
    <div role="radiogroup" aria-label={label} className="glass flex gap-1 rounded-full p-1">
      {options.map((option) => {
        const selected = option.value === value;
        return (
          <button
            key={String(option.value)}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(option.value)}
            className={`relative flex-1 rounded-full px-3 py-2 text-sm font-semibold transition-colors ${
              selected ? 'text-card-ink' : 'text-muted hover:text-text'
            }`}
          >
            {selected && (
              <motion.span
                layoutId={`segmented-${label}`}
                transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                className="absolute inset-0 rounded-full bg-secondary"
              />
            )}
            <span className="relative z-10">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
