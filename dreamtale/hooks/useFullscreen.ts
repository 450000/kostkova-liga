'use client';

import { useCallback, useSyncExternalStore } from 'react';

export type FullscreenControls = {
  isFullscreen: boolean;
  isSupported: boolean;
  enter: () => Promise<void>;
  exit: () => Promise<void>;
  toggle: () => Promise<void>;
};

function subscribe(onChange: () => void): () => void {
  document.addEventListener('fullscreenchange', onChange);
  return () => document.removeEventListener('fullscreenchange', onChange);
}

const noopSubscribe = () => () => undefined;

/** Obal nad Fullscreen API – hra musí fungovat i tam, kde není podporované. */
export function useFullscreen(): FullscreenControls {
  const isFullscreen = useSyncExternalStore(
    subscribe,
    () => Boolean(document.fullscreenElement),
    () => false,
  );

  const isSupported = useSyncExternalStore(
    noopSubscribe,
    () => document.fullscreenEnabled === true,
    () => false,
  );

  const enter = useCallback(async () => {
    if (!document.fullscreenEnabled || document.fullscreenElement) return;
    try {
      await document.documentElement.requestFullscreen();
    } catch {
      /* uživatel odmítl nebo prohlížeč nepodporuje */
    }
  }, []);

  const exit = useCallback(async () => {
    if (!document.fullscreenElement) return;
    try {
      await document.exitFullscreen();
    } catch {
      /* nic */
    }
  }, []);

  const toggle = useCallback(
    () => (document.fullscreenElement ? exit() : enter()),
    [enter, exit],
  );

  return { isFullscreen, isSupported, enter, exit, toggle };
}
