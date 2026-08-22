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

export function resolveAsset(path: string): string {
  if (typeof window === 'undefined') return path;
  return window.__DREAMTALE_ASSETS__?.[path] ?? path;
}
