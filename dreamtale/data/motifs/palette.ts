/**
 * Sdílená paleta ilustrací. Všechny motivy kreslí jen z těchto barev –
 * to je hlavní důvod, proč knihovna působí jako jedna série karet.
 */
export const C = {
  ink: '#2E2A45',
  cream: '#FBF3E4',
  white: '#FFFCF5',
  sand: '#EBD9B4',
  yellow: '#F5C765',
  coral: '#F2765C',
  peach: '#F6B08A',
  pink: '#EFA0BE',
  lavender: '#A99BE0',
  blue: '#6E8FD6',
  navy: '#3B4A78',
  teal: '#4FA3A5',
  sage: '#8FBFA6',
  green: '#6FAE7B',
  brown: '#A5713F',
  stone: '#BFC3D4',
  red: '#DC5B5B',
} as const;

export type MotifArt = {
  id: string;
  name: string;
  tint: string;
  /** Vnitřek SVG, souřadnicový systém 0 0 240 240. */
  art: string;
};
