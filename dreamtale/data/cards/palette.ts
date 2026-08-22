/**
 * Paleta ilustrovaných karet.
 *
 * Scény se skládají jen z těchto barev – to je hlavní důvod, proč 192 různých
 * obrázků působí jako jedna série. Inkoustový obrys má každý tvar společný.
 */
export const P = {
  ink: '#2E2A45',
  inkSoft: '#4A4468',

  // pozadí a plochy
  cream: '#FBF3E4',
  white: '#FFFCF5',
  paper: '#F3E7D0',

  // obloha
  skyDay: '#9CC6EE',
  skyDayLow: '#D8ECFB',
  skyDusk: '#F0A57E',
  skyDuskLow: '#F7D3A8',
  skyNight: '#1B2350',
  skyNightLow: '#3A3F79',
  skyStorm: '#5B6486',
  skyStormLow: '#8E96B4',

  // krajina
  grass: '#7FB877',
  grassDark: '#5C9A5C',
  hill: '#8FBFA6',
  hillDark: '#5F9E86',
  sand: '#EBD9B4',
  sandDark: '#D9BE8C',
  soil: '#A5713F',
  soilDark: '#7E5430',
  snow: '#F2F6FF',
  snowShade: '#D5E0F2',
  sea: '#4E8FC7',
  seaDeep: '#2E5E93',
  seaFoam: '#BFE0F0',

  // interiér
  wall: '#E7D9C4',
  wallCool: '#CBD6E4',
  floor: '#C89A63',
  floorDark: '#A87B48',
  wood: '#A5713F',
  woodDark: '#7A5430',

  // akcenty
  yellow: '#F5C765',
  gold: '#E0A93B',
  coral: '#F2765C',
  red: '#DC5B5B',
  pink: '#EFA0BE',
  lavender: '#A99BE0',
  violet: '#7A6BC4',
  blue: '#6E8FD6',
  navy: '#3B4A78',
  teal: '#4FA3A5',
  green: '#6FAE7B',
  sage: '#8FBFA6',
  stone: '#BFC3D4',
  slate: '#8A90A8',
  brown: '#A5713F',
  peach: '#F6B08A',
  rust: '#C4693C',
} as const;

/** Odstíny pleti – postavy na kartách nejsou všechny stejné. */
export const SKIN = ['#F2C6A0', '#E0A87C', '#C4835A', '#8E5A38'] as const;

/** Barvy vlasů. */
export const HAIR = ['#3A2A22', '#6B4326', '#A5713F', '#E0C083', '#2E2A45'] as const;

/** Barvy triček – drží se palety, aby scény ladily. */
export const SHIRT = [
  P.coral,
  P.blue,
  P.green,
  P.yellow,
  P.lavender,
  P.teal,
  P.pink,
  P.rust,
] as const;
