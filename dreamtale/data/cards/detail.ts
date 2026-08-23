import { P } from './palette';

/**
 * Nástroje pro propracované karty.
 *
 * Scény v `scene.ts` staví rychlé pozadí; tenhle soubor přidává to, čím karta
 * získává hloubku: vícestupňové přechody, stínové a světelné vrstvy, šrafování
 * a jemné rozostření dálky.
 */
export const W = 240;
export const H = 364;

let counter = 0;
const nextId = (): string => `d${(counter += 1)}`;

type Stop = [offset: number, color: string, opacity?: number];

/** Lineární přechod. Vrací [defs, url]. */
export function linear(stops: Stop[], x1 = 0, y1 = 0, x2 = 0, y2 = 1): [string, string] {
  const id = nextId();
  const body = stops
    .map(([o, c, op]) => `<stop offset="${o}" stop-color="${c}"${op === undefined ? '' : ` stop-opacity="${op}"`}/>`)
    .join('');
  return [
    `<linearGradient id="${id}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}">${body}</linearGradient>`,
    `url(#${id})`,
  ];
}

/** Kruhový přechod – světlo, mlha, záře. */
export function radial(stops: Stop[], cx = 0.5, cy = 0.5, r = 0.5): [string, string] {
  const id = nextId();
  const body = stops
    .map(([o, c, op]) => `<stop offset="${o}" stop-color="${c}"${op === undefined ? '' : ` stop-opacity="${op}"`}/>`)
    .join('');
  return [
    `<radialGradient id="${id}" cx="${cx}" cy="${cy}" r="${r}">${body}</radialGradient>`,
    `url(#${id})`,
  ];
}

/** Šrafování – dává plochám kresebnou texturu jako perokresba. */
export function hatch(color: string, spacing = 6, angle = -45, width = 1.4, opacity = 0.5): [string, string] {
  const id = nextId();
  return [
    `<pattern id="${id}" width="${spacing}" height="${spacing}" patternUnits="userSpaceOnUse" patternTransform="rotate(${angle})">
<line x1="0" y1="0" x2="0" y2="${spacing}" stroke="${color}" stroke-width="${width}" opacity="${opacity}"/></pattern>`,
    `url(#${id})`,
  ];
}

/** Jemné zrno – karta pak nevypadá jako plochý vektor. */
export function grain(opacity = 0.16): [string, string] {
  const id = nextId();
  return [
    `<filter id="${id}" x="0" y="0" width="100%" height="100%">
<feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" result="n"/>
<feColorMatrix type="saturate" values="0" in="n" result="g"/>
<feComponentTransfer in="g" result="t"><feFuncA type="linear" slope="${opacity}"/></feComponentTransfer>
<feComposite in="t" in2="SourceGraphic" operator="in"/></filter>`,
    `url(#${id})`,
  ];
}

/** Rozostření pro vzdálené plány. */
export function blur(amount: number): [string, string] {
  const id = nextId();
  return [`<filter id="${id}"><feGaussianBlur stdDeviation="${amount}"/></filter>`, `url(#${id})`];
}

/** Obrys kresby. Slabší tah v dálce, silnější vepředu. */
export const line = (width = 3, color: string = P.ink) =>
  `stroke="${color}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"`;

/** Stínová vrstva – tmavý tvar s nízkým krytím přes základní barvu. */
export const shade = (opacity = 0.22, color = '#1B1730') => `fill="${color}" opacity="${opacity}"`;

/** Světelná vrstva. */
export const lit = (opacity = 0.3, color = '#FFF6E2') => `fill="${color}" opacity="${opacity}"`;

/** Rámeček karty – tenká linka uvnitř okraje jako u tištěné karty. */
export function frame(color: string = P.ink, opacity = 0.35): string {
  return `<rect x="7" y="7" width="${W - 14}" height="${H - 14}" rx="20" fill="none"
 stroke="${color}" stroke-width="2" opacity="${opacity}"/>`;
}

/** Ztmavení okrajů. */
export function vignetteDeep(strength = 0.34): string {
  const [defs, url] = radial(
    [[0.5, '#120F22', 0], [0.82, '#120F22', strength * 0.5], [1, '#120F22', strength]],
    0.5, 0.46, 0.78,
  );
  return `<defs>${defs}</defs><rect width="${W}" height="${H}" fill="${url}"/>`;
}

/** Hejno ptáků v dálce – drobnost, která scéně dá měřítko. */
export function birds(points: Array<[number, number, number]>, color: string = P.ink, opacity = 0.5): string {
  return points
    .map(([x, y, s]) => `<path d="M${x - 5 * s} ${y} q${5 * s} ${-4 * s} ${5 * s} 0 q0 ${-4 * s} ${5 * s} 0"
 fill="none" stroke="${color}" stroke-width="${1.4 * s}" opacity="${opacity}" stroke-linecap="round"/>`)
    .join('');
}
