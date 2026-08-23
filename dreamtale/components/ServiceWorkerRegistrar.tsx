'use client';

import { useEffect } from 'react';
import { BASE_PATH } from '@/lib/images/assets';

/** Registrace service workeru – díky němu hra běží i offline. */
export function ServiceWorkerRegistrar() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;
    if (!('serviceWorker' in navigator)) return;
    // Jednosouborová verze hry běží bez serveru – tam žádný manifest ani sw.js není.
    if (!document.querySelector('link[rel="manifest"]')) return;
    const register = () => {
      void navigator.serviceWorker.register(`${BASE_PATH}/sw.js`, { scope: `${BASE_PATH}/` }).catch(() => {
        /* offline režim je bonus, ne podmínka */
      });
    };
    window.addEventListener('load', register);
    return () => window.removeEventListener('load', register);
  }, []);

  return null;
}
