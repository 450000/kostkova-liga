'use client';

import { useRef, type PointerEvent as ReactPointerEvent } from 'react';

type SwipeOptions = {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onTap?: () => void;
  threshold?: number;
};

/**
 * Rozliší tapnutí od swipu na jednom prvku – bez knihoven a bez blokování scrollu.
 */
export function useSwipe({ onSwipeLeft, onSwipeRight, onTap, threshold = 56 }: SwipeOptions) {
  const start = useRef<{ x: number; y: number; time: number } | null>(null);

  const onPointerDown = (event: ReactPointerEvent<HTMLElement>) => {
    start.current = { x: event.clientX, y: event.clientY, time: Date.now() };
  };

  const onPointerUp = (event: ReactPointerEvent<HTMLElement>) => {
    const origin = start.current;
    start.current = null;
    if (!origin) return;

    const dx = event.clientX - origin.x;
    const dy = event.clientY - origin.y;

    if (Math.abs(dx) > threshold && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) onSwipeLeft?.();
      else onSwipeRight?.();
      return;
    }

    // Krátký dotek bez posunu = tapnutí.
    if (Math.abs(dx) < 12 && Math.abs(dy) < 12 && Date.now() - origin.time < 700) {
      onTap?.();
    }
  };

  return { onPointerDown, onPointerUp, onPointerCancel: () => (start.current = null) };
}
