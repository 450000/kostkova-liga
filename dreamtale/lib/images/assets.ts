/**
 * Překlad cesty k obrázku na skutečný zdroj.
 *
 * Ve výchozím stavu vrací cestu beze změny (assety jsou v `public/`).
 * Jednosouborový build (`npm run build:single`) předá mapu
 * `window.__DREAMTALE_ASSETS__`, kde jsou obrázky vložené jako data URI –
 * díky tomu hra běží i z jediného HTML souboru bez serveru.
 */
declare global {
  interface Window {
    __DREAMTALE_ASSETS__?: Record<string, string>;
  }
}

/** Předpona, když hra neběží v kořeni domény (např. GitHub Pages). */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function resolveAsset(path: string): string {
  const inlined = typeof window === 'undefined' ? undefined : window.__DREAMTALE_ASSETS__?.[path];
  return inlined ?? `${BASE_PATH}${path}`;
}
