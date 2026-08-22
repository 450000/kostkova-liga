'use client';

import { AnimatePresence } from 'framer-motion';
import { useCallback, useMemo, useState } from 'react';
import type { GameImage } from '@/types/images';
import { useKeyboard } from '@/hooks/useKeyboard';
import { useSwipe } from '@/hooks/useSwipe';
import { GameCard } from '@/components/game/GameCard';
import { ProgressIndicator } from '@/components/game/ProgressIndicator';
import { Button } from '@/components/ui/Button';
import { IconButton } from '@/components/ui/IconButton';

type ReviewModeProps = {
  images: GameImage[];
  index: number;
  onNext: () => void;
  onPrev: () => void;
  onClose: () => void;
};

/** Poklidné procházení celého snu po skončení hry. */
export function ReviewMode({ images, index, onNext, onPrev, onClose }: ReviewModeProps) {
  const [direction, setDirection] = useState(1);
  const image = images[index];
  const isLast = index === images.length - 1;

  const goNext = useCallback(() => {
    if (isLast) return;
    setDirection(1);
    onNext();
  }, [isLast, onNext]);

  const goPrev = useCallback(() => {
    if (index === 0) return;
    setDirection(-1);
    onPrev();
  }, [index, onPrev]);

  useKeyboard(
    useMemo(
      () => ({ ArrowRight: goNext, ' ': goNext, Enter: goNext, ArrowLeft: goPrev, Escape: onClose }),
      [goNext, goPrev, onClose],
    ),
  );

  const swipe = useSwipe({ onTap: goNext, onSwipeLeft: goNext, onSwipeRight: goPrev });

  if (!image) return null;

  return (
    <div className="flex h-full flex-col">
      <header className="flex items-start justify-between px-4 pt-[max(1rem,env(safe-area-inset-top))]">
        <IconButton label="Zavřít prohlížení" onClick={onClose} className="h-9 w-9 opacity-70">
          <span aria-hidden className="text-sm">
            ✕
          </span>
        </IconButton>
        <div className="pt-1">
          <ProgressIndicator current={index + 1} total={images.length} label="Sen" />
        </div>
        <span className="h-9 w-9" />
      </header>

      <div
        {...swipe}
        className="relative flex min-h-0 flex-1 cursor-pointer touch-pan-y items-center justify-center overflow-hidden px-4 py-3"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <GameCard key={image.id} image={image} direction={direction} />
        </AnimatePresence>
      </div>

      <footer className="flex items-center justify-center gap-3 px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4">
        <Button variant="secondary" onClick={goPrev} disabled={index === 0}>
          Zpět
        </Button>
        {isLast ? (
          <Button onClick={onClose}>Hotovo</Button>
        ) : (
          <Button onClick={goNext}>Další</Button>
        )}
      </footer>
    </div>
  );
}
