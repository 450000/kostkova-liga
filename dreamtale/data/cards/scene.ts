import { P } from './palette';

/** Plátno karty. Kresba se dělá v těchto souřadnicích. */
export const W = 240;
export const H = 364;

/** Společný inkoustový obrys – drží celou sérii pohromadě. */
export const ink = (width = 4) => `stroke="${P.ink}" stroke-width="${width}"`;

let gradientCounter = 0;
function gradientId(): string {
  gradientCounter += 1;
  return `g${gradientCounter}`;
}

/** Svislý přechod přes celé plátno. */
function wash(from: string, to: string): string {
  const id = gradientId();
  return `<defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="${from}"/><stop offset="1" stop-color="${to}"/></linearGradient></defs>
<rect width="${W}" height="${H}" fill="url(#${id})"/>`;
}

export type SkyKind = 'day' | 'dusk' | 'night' | 'storm' | 'sea' | 'space' | 'warm' | 'cool';

const SKIES: Record<SkyKind, [string, string]> = {
  day: [P.skyDay, P.skyDayLow],
  dusk: [P.skyDusk, P.skyDuskLow],
  night: [P.skyNight, P.skyNightLow],
  storm: [P.skyStorm, P.skyStormLow],
  sea: [P.sea, P.seaDeep],
  space: ['#0E1230', '#2A2F63'],
  warm: ['#F6C98A', P.paper],
  cool: ['#C9DCEF', '#EAF1F8'],
};

export function sky(kind: SkyKind = 'day'): string {
  const [from, to] = SKIES[kind];
  return wash(from, to);
}

/** Interiér: stěna a podlaha. */
export function room(wall: string = P.wall, floor: string = P.floor, y = 250): string {
  return `${wash(wall, P.paper)}
<path d="M0 ${y} H${W} V${H} H0 Z" fill="${floor}"/>
<path d="M0 ${y} H${W}" ${ink(4)}/>`;
}

/** Terén – měkký kopec přes celou šířku. */
export function ground(y: number, fill: string, curve = 26): string {
  return `<path d="M0 ${y + curve} Q${W / 2} ${y - curve} ${W} ${y + curve} V${H} H0 Z" fill="${fill}"/>
<path d="M0 ${y + curve} Q${W / 2} ${y - curve} ${W} ${y + curve}" fill="none" ${ink(4)}/>`;
}

/** Vrstva kopců v pozadí. */
export function hills(y: number, fill: string = P.hill): string {
  return `<path d="M-10 ${y} q40 -46 84 -6 q30 26 56 -14 q34 -50 116 6 V${H} H-10 Z" fill="${fill}"/>
<path d="M-10 ${y} q40 -46 84 -6 q30 26 56 -14 q34 -50 116 6" fill="none" ${ink(4)}/>`;
}

/** Hladina moře s vlnkami. */
export function water(y: number, fill: string = P.sea): string {
  return `<path d="M0 ${y} H${W} V${H} H0 Z" fill="${fill}"/>
<path d="M0 ${y} H${W}" ${ink(4)}/>
<path d="M18 ${y + 26} q16 -10 32 0 t32 0 M112 ${y + 46} q16 -10 32 0 t32 0 M30 ${y + 66} q16 -10 32 0 t32 0"
 fill="none" stroke="${P.seaFoam}" stroke-width="4"/>`;
}

/** Hvězdy – pevné pozice, aby byl výsledek pokaždé stejný. */
const STAR_POSITIONS = [
  [28, 44, 3], [66, 24, 2], [104, 58, 3], [148, 30, 2], [190, 52, 3], [214, 96, 2],
  [40, 96, 2], [82, 130, 2], [172, 118, 3], [206, 26, 2], [124, 96, 2], [58, 168, 2],
];

export function stars(count = 12, fill: string = P.cream): string {
  return STAR_POSITIONS.slice(0, count)
    .map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}"/>`)
    .join('');
}

/** Zářivá hvězda se čtyřmi paprsky. */
export function sparkle(x: number, y: number, r: number, fill: string = P.yellow): string {
  return `<path d="M${x} ${y - r} Q${x + r * 0.22} ${y - r * 0.22} ${x + r} ${y}
 Q${x + r * 0.22} ${y + r * 0.22} ${x} ${y + r} Q${x - r * 0.22} ${y + r * 0.22} ${x - r} ${y}
 Q${x - r * 0.22} ${y - r * 0.22} ${x} ${y - r} Z" fill="${fill}"/>`;
}

export function cloud(x: number, y: number, s = 1, fill: string = P.white): string {
  return `<g transform="translate(${x} ${y}) scale(${s})">
<path d="M-34 12 q-18 0 -18 -14 q0 -13 15 -14 q3 -19 24 -19 q18 0 22 16 q17 -2 20 12 q3 19 -17 19 Z" fill="${fill}" ${ink(3.5)}/></g>`;
}

export function sun(x: number, y: number, r = 26, fill: string = P.yellow): string {
  return `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" ${ink(4)}/>`;
}

export function moon(x: number, y: number, r = 26, fill: string = P.cream): string {
  return `<path d="M${x + r * 0.5} ${y - r} a${r} ${r} 0 1 0 0 ${r * 2}
 a${r * 0.78} ${r * 0.78} 0 1 1 0 ${-r * 2} Z" fill="${fill}" ${ink(4)}/>`;
}

/** Jednoduchý strom – opakuje se v mnoha scénách. */
export function tree(x: number, y: number, s = 1, crown: string = P.green): string {
  return `<g transform="translate(${x} ${y}) scale(${s})">
<rect x="-8" y="-30" width="16" height="34" rx="6" fill="${P.wood}" ${ink(3.5)}/>
<circle cx="0" cy="-52" r="30" fill="${crown}" ${ink(4)}/>
<circle cx="-22" cy="-34" r="17" fill="${crown}" ${ink(4)}/>
<circle cx="22" cy="-34" r="17" fill="${crown}" ${ink(4)}/></g>`;
}

/** Jehličnan pro lesní scény. */
export function pine(x: number, y: number, s = 1, fill: string = P.grassDark): string {
  return `<g transform="translate(${x} ${y}) scale(${s})">
<rect x="-6" y="-12" width="12" height="16" rx="4" fill="${P.wood}" ${ink(3)}/>
<path d="M0 -84 L22 -46 H-22 Z M0 -60 L28 -14 H-28 Z" fill="${fill}" ${ink(3.5)}/></g>`;
}

/** Jemné ztmavení okrajů – karta pak působí jako tištěná ilustrace. */
export function vignette(): string {
  const id = gradientId();
  return `<defs><radialGradient id="${id}" cx="0.5" cy="0.46" r="0.78">
<stop offset="0.55" stop-color="${P.ink}" stop-opacity="0"/>
<stop offset="1" stop-color="${P.ink}" stop-opacity="0.24"/></radialGradient></defs>
<rect width="${W}" height="${H}" fill="url(#${id})"/>`;
}
