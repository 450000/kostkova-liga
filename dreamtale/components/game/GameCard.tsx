'use client';

import { motion } from 'framer-motion';
import type { GameImage } from '@/types/images';
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion';
import { resolveAsset } from '@/lib/images/assets';

type GameCardProps = {
  image: GameImage;
  /** 1 = vpřed (nová karta přilétá zprava), -1 = zpět. */
  direction?: number;
  /** Skryje motiv – používá se, dokud hráči hádají. */
  hidden?: boolean;
  hiddenLabel?: string;
};

/** Karta vyplní prostor, který od rodiče dostane – nikdy ho nepřeteče. */
const CARD_STYLE = {
  height: '100%',
  maxWidth: 'min(88%, 30rem)',
  // Strop výšky drží poměr stran i na tabletu, kde by karta jinak byla úzká a přetažená.
  maxHeight: '44rem',
  // Užší poměr než klasická karta – na telefonu tak zabere 70–85 % dostupné výšky.
  aspectRatio: '0.66',
} as const;

export function GameCard({ image, direction = 1, hidden = false, hiddenLabel }: GameCardProps) {
  const reduced = usePrefersReducedMotion();

  // Odchod je krátký tween, ne pružina: při rychlém tapání se karty nesmí hromadit.
  const exitTransition = { duration: 0.24, ease: [0.4, 0, 1, 1] as const };

  const variants = reduced
    ? {
        enter: { opacity: 0 },
        center: { opacity: 1 },
        exit: { opacity: 0, transition: { duration: 0.12 } },
      }
    : {
        enter: { x: direction * 110, rotate: direction * 3, scale: 0.94, opacity: 0 },
        center: { x: 0, rotate: 0, scale: 1, opacity: 1 },
        exit: {
          x: direction * -90,
          rotate: direction * -2,
          scale: 0.94,
          opacity: 0,
          transition: exitTransition,
        },
      };

  return (
    <motion.div
      key={image.id}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={
        reduced
          ? { duration: 0.18 }
          : { type: 'spring', stiffness: 260, damping: 28, mass: 0.7, opacity: { duration: 0.22 } }
      }
      style={CARD_STYLE}
      className="paper no-select absolute flex items-center justify-center overflow-hidden rounded-[2.25rem] shadow-[var(--shadow-card)] ring-1 ring-black/10"
    >
      {hidden ? (
        <div className="flex flex-col items-center gap-4 px-8 text-center">
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden>
            <circle cx="36" cy="36" r="30" stroke="rgba(46,42,69,0.18)" strokeWidth="2" />
            <path
              d="M46 22c-11 4-18 12-18 21 0 9 7 15 18 17-15 2-26-6-26-19s11-21 26-19Z"
              fill="rgba(46,42,69,0.16)"
            />
          </svg>
          {hiddenLabel && (
            <p className="font-display text-xl leading-snug text-card-ink/70">{hiddenLabel}</p>
          )}
        </div>
      ) : (
        <img
          src={resolveAsset(image.image)}
          alt={image.name}
          draggable={false}
          className="h-[74%] w-[86%] object-contain"
        />
      )}
    </motion.div>
  );
}
