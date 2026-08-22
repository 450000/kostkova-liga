'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useMemo, useState } from 'react';
import type { GameImage } from '@/types/images';
import type { FullscreenControls } from '@/hooks/useFullscreen';
import { useKeyboard } from '@/hooks/useKeyboard';
import { useSwipe } from '@/hooks/useSwipe';
import { GameCard } from '@/components/game/GameCard';
import { ProgressIndicator } from '@/components/game/ProgressIndicator';
import { FullscreenButton } from '@/components/game/FullscreenButton';
import { ExitGameButton } from '@/components/game/ExitGameButton';

type StoryModeProps = {
  images: GameImage[];
  index: number;
  timeLimit: number;
  onNext: () => void;
  onPrev: () => void;
  onExit: () => void;
  fullscreen: FullscreenControls;
};

export function StoryMode({
  images,
  index,
  timeLimit,
  onNext,
  onPrev,
  onExit,
  fullscreen,
}: StoryModeProps) {
  const [direction, setDirection] = useState(1);
  // Volitelný časový limit na kartu; 0 = bez limitu.
  const [remaining, setRemaining] = useState(timeLimit);
  const image = images[index];

  const goNext = useCallback(() => {
    setDirection(1);
    setRemaining(timeLimit);
    onNext();
  }, [onNext, timeLimit]);

  const goPrev = useCallback(() => {
    if (index === 0) return;
    setDirection(-1);
    onPrev();
  }, [index, onPrev]);

  const handlers = useMemo(
    () => ({ ' ': goNext, Enter: goNext, ArrowRight: goNext, ArrowLeft: goPrev, Escape: onExit }),
    [goNext, goPrev, onExit],
  );
  useKeyboard(handlers);

  const swipe = useSwipe({ onTap: goNext, onSwipeLeft: goNext, onSwipeRight: goPrev });

  useEffect(() => {
    if (timeLimit <= 0) return;
    let left = timeLimit;
    const timer = window.setInterval(() => {
      left -= 1;
      if (left <= 0) {
        left = timeLimit;
        goNext();
      } else {
        setRemaining(left);
      }
    }, 1000);
    return () => window.clearInterval(timer);
  }, [timeLimit, index, goNext]);

  if (!image) return null;

  return (
    <div className="flex h-full flex-col">
      <header className="flex items-start justify-between px-4 pt-[max(1rem,env(safe-area-inset-top))]">
        <ExitGameButton onExit={onExit} />
        <div className="pt-1">
          <ProgressIndicator current={index + 1} total={images.length} />
        </div>
        <FullscreenButton fullscreen={fullscreen} />
      </header>

      <div
        {...swipe}
        role="button"
        tabIndex={0}
        aria-label={`Obrázek ${index + 1} z ${images.length}. Klepnutím zobrazíte další.`}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') event.preventDefault();
        }}
        className="relative flex min-h-0 flex-1 cursor-pointer touch-pan-y items-center justify-center overflow-hidden px-4 py-3"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <GameCard key={image.id} image={image} direction={direction} />
        </AnimatePresence>
      </div>

      <footer className="flex h-16 items-center justify-center gap-3 px-6 pb-[env(safe-area-inset-bottom)]">
        {timeLimit > 0 && (
          <motion.span
            key={remaining}
            initial={{ opacity: 0.4, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-display text-sm tracking-[0.3em] text-muted"
          >
            {remaining}
          </motion.span>
        )}
        <span className="text-xs tracking-[0.28em] text-muted/40 uppercase">
          {index === 0 ? 'Klepnutím dál' : ''}
        </span>
      </footer>
    </div>
  );
}
