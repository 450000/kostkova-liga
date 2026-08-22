'use client';

import { useCallback, useEffect, useRef } from 'react';

export type SoundName = 'flip' | 'reveal' | 'correct' | 'finish';

type Tone = { frequency: number; duration: number; delay: number; gain: number };

/** Jemné tóny místo audio souborů – nulová váha, žádné externí assety. */
const SOUNDS: Record<SoundName, Tone[]> = {
  flip: [{ frequency: 523.25, duration: 0.09, delay: 0, gain: 0.05 }],
  reveal: [
    { frequency: 587.33, duration: 0.1, delay: 0, gain: 0.05 },
    { frequency: 880, duration: 0.16, delay: 0.08, gain: 0.04 },
  ],
  correct: [
    { frequency: 659.25, duration: 0.1, delay: 0, gain: 0.05 },
    { frequency: 987.77, duration: 0.18, delay: 0.09, gain: 0.045 },
  ],
  finish: [
    { frequency: 523.25, duration: 0.16, delay: 0, gain: 0.05 },
    { frequency: 659.25, duration: 0.16, delay: 0.13, gain: 0.05 },
    { frequency: 783.99, duration: 0.3, delay: 0.26, gain: 0.05 },
  ],
};

export function useSound(enabled: boolean) {
  const contextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    return () => {
      void contextRef.current?.close();
      contextRef.current = null;
    };
  }, []);

  return useCallback(
    (name: SoundName) => {
      if (!enabled || typeof window === 'undefined') return;
      try {
        if (!contextRef.current) contextRef.current = new AudioContext();
        const context = contextRef.current;
        // Prohlížeč povolí zvuk až po interakci uživatele.
        if (context.state === 'suspended') void context.resume();

        for (const tone of SOUNDS[name]) {
          const startAt = context.currentTime + tone.delay;
          const oscillator = context.createOscillator();
          const gain = context.createGain();
          oscillator.type = 'sine';
          oscillator.frequency.value = tone.frequency;
          gain.gain.setValueAtTime(0.0001, startAt);
          gain.gain.exponentialRampToValueAtTime(tone.gain, startAt + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.0001, startAt + tone.duration);
          oscillator.connect(gain).connect(context.destination);
          oscillator.start(startAt);
          oscillator.stop(startAt + tone.duration + 0.05);
        }
      } catch {
        /* zvuk je doplněk, nikdy nesmí shodit hru */
      }
    },
    [enabled],
  );
}
