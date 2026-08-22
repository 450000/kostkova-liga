'use client';

import { useEffect } from 'react';

export type KeyHandlers = Partial<Record<string, () => void>>;

/**
 * Globální klávesové zkratky. Ignoruje stisky v polích formuláře,
 * aby psaní jmen hráčů neposouvalo hru.
 */
export function useKeyboard(handlers: KeyHandlers, enabled = true): void {
  useEffect(() => {
    if (!enabled) return;

    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target) {
        const tag = target.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA' || target.isContentEditable) return;
      }
      const handler = handlers[event.key];
      if (!handler) return;
      event.preventDefault();
      handler();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [handlers, enabled]);
}
