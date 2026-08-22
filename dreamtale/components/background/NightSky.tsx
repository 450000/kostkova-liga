'use client';

import { useMemo } from 'react';
import { createRng } from '@/lib/game/rng';

type NightSkyProps = {
  /** `calm` ztlumí pozadí, aby nesoupeřilo s herní kartou. */
  variant?: 'full' | 'calm';
};

type Star = { x: number; y: number; size: number; delay: number; duration: number };

/** Pozice se počítají ze seedu, takže server i klient vykreslí totéž. */
function useStars(count: number): Star[] {
  return useMemo(() => {
    const rng = createRng('dreamtale-sky');
    return Array.from({ length: count }, () => ({
      x: rng() * 100,
      y: rng() * 100,
      size: 1 + rng() * 2.2,
      delay: rng() * 6,
      duration: 4 + rng() * 5,
    }));
  }, [count]);
}

export function NightSky({ variant = 'full' }: NightSkyProps) {
  const stars = useStars(variant === 'full' ? 70 : 34);
  const dim = variant === 'calm';

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      <div
        className="absolute -left-24 -top-32 h-[26rem] w-[26rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(169,155,224,0.30), transparent 65%)', opacity: dim ? 0.4 : 1 }}
      />
      <div
        className="absolute -bottom-40 -right-24 h-[30rem] w-[30rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(242,118,92,0.22), transparent 65%)', opacity: dim ? 0.35 : 1 }}
      />

      <div className="absolute inset-0" style={{ opacity: dim ? 0.45 : 1 }}>
        {stars.map((star, index) => (
          <span
            key={index}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {!dim && (
        <div className="animate-drift absolute right-10 top-28 sm:right-20 sm:top-24">
          <svg width="96" height="96" viewBox="0 0 96 96" fill="none">
            <path
              d="M62 10C40 16 26 32 26 50c0 20 16 34 38 36-30 4-52-12-52-36S32 6 62 10Z"
              fill="rgba(245,199,101,0.85)"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
