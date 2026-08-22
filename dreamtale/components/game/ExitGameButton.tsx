'use client';

import { IconButton } from '@/components/ui/IconButton';

/** Jediná cesta ven ze hry – schválně nenápadná a vždy s potvrzením. */
export function ExitGameButton({ onExit }: { onExit: () => void }) {
  return (
    <IconButton label="Ukončit hru" onClick={onExit} className="h-9 w-9 opacity-60 hover:opacity-100">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path
          d="M4 4l8 8M12 4l-8 8"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    </IconButton>
  );
}
