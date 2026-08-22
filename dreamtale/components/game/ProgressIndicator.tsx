'use client';

type ProgressIndicatorProps = {
  current: number;
  total: number;
  label?: string;
};

/** Decentní počítadlo – jediná informace, kterou hráč během příběhu potřebuje. */
export function ProgressIndicator({ current, total, label }: ProgressIndicatorProps) {
  return (
    <div
      className="no-select flex flex-col items-center gap-1"
      role="status"
      aria-live="polite"
      aria-label={`${label ?? 'Obrázek'} ${current} z ${total}`}
    >
      <span className="font-display text-sm tracking-[0.34em] text-muted">
        {current} / {total}
      </span>
      <span className="block h-px w-16 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
    </div>
  );
}
