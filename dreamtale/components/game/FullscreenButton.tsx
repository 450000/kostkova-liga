'use client';

import type { FullscreenControls } from '@/hooks/useFullscreen';
import { IconButton } from '@/components/ui/IconButton';

export function FullscreenButton({ fullscreen }: { fullscreen: FullscreenControls }) {
  if (!fullscreen.isSupported) return null;

  return (
    <IconButton
      label={fullscreen.isFullscreen ? 'Ukončit celou obrazovku' : 'Celá obrazovka'}
      onClick={() => void fullscreen.toggle()}
      className="h-9 w-9 opacity-60 hover:opacity-100"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        {fullscreen.isFullscreen ? (
          <path
            d="M6 1v5H1M10 15v-5h5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M1 6V1h5M15 10v5h-5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </IconButton>
  );
}
