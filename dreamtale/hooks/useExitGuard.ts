'use client';

import { useEffect } from 'react';

/**
 * Chrání rozehranou hru před omylem – zpětné tlačítko i zavření karty
 * se nejdřív zeptají. Nikdy uživatele neuvězní, jen se ujistí.
 */
export function useExitGuard(active: boolean, onBackAttempt: () => void): void {
  useEffect(() => {
    if (!active) return;

    const onBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = '';
    };

    const onPopState = () => {
      // Zpět zase přidáme, aby uživatel zůstal ve hře, dokud odchod nepotvrdí.
      window.history.pushState({ dreamtale: true }, '');
      onBackAttempt();
    };

    window.history.pushState({ dreamtale: true }, '');
    window.addEventListener('beforeunload', onBeforeUnload);
    window.addEventListener('popstate', onPopState);

    return () => {
      window.removeEventListener('beforeunload', onBeforeUnload);
      window.removeEventListener('popstate', onPopState);
    };
  }, [active, onBackAttempt]);
}
