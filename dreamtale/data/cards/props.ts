import { MOTIFS } from '@/data/motifs/index';
import { P } from './palette';

/**
 * Rekvizity scén.
 *
 * Kresby z `data/motifs` už nejsou samostatné karty – slouží jako knihovna
 * předmětů, které se do scén vkládají (loď, raketa, dárek, kolo…).
 * Díky tomu má 192 karet stejný rukopis a nekreslí se nic dvakrát.
 */
const BY_ID = new Map(MOTIFS.map((motif) => [motif.id, motif]));

/** Vloží kresbu předmětu na dané místo. Střed motivu je (120, 122). */
export function prop(id: string, x: number, y: number, s = 1, strokeWidth = 5): string {
  const motif = BY_ID.get(id);
  if (!motif) throw new Error(`Neznámá rekvizita: ${id}`);
  return `<g transform="translate(${x} ${y}) scale(${s}) translate(-120 -122)" fill="none"
 stroke="${P.ink}" stroke-width="${strokeWidth / s}" stroke-linecap="round" stroke-linejoin="round">${motif.art}</g>`;
}

/** Jednoduchý obdélníkový předmět – základ pro nábytek, cedule a krabice. */
export function box(
  x: number, y: number, w: number, h: number, fill: string, radius = 8,
): string {
  return `<rect x="${x - w / 2}" y="${y - h / 2}" width="${w}" height="${h}" rx="${radius}"
 fill="${fill}" stroke="${P.ink}" stroke-width="4"/>`;
}

/** Srdce – používá se u emocí. */
export function heart(x: number, y: number, s = 1, fill: string = P.red): string {
  return `<g transform="translate(${x} ${y}) scale(${s})">
<path d="M0 30 q-34 -22 -34 -46 q0 -18 17 -18 q12 0 17 12 q5 -12 17 -12 q17 0 17 18 q0 24 -34 46 Z"
 fill="${fill}" stroke="${P.ink}" stroke-width="${4 / s}" stroke-linejoin="round"/></g>`;
}

/** Bublina s otazníkem nebo vykřičníkem. */
export function bubble(x: number, y: number, s: number, text: string, fill: string = P.white): string {
  return `<g transform="translate(${x} ${y}) scale(${s})">
<path d="M-30 -22 h60 q12 0 12 14 v20 q0 14 -12 14 h-22 l-12 14 v-14 h-26 q-12 0 -12 -14 v-20 q0 -14 12 -14 Z"
 fill="${fill}" stroke="${P.ink}" stroke-width="${4 / s}" stroke-linejoin="round"/>
<text x="0" y="12" text-anchor="middle" font-family="Georgia, serif" font-size="34" font-weight="700"
 fill="${P.ink}">${text}</text></g>`;
}
