import type { MotifArt } from './palette';
import { animals } from './animals';
import { nature } from './nature';
import { sky } from './sky';
import { places } from './places';
import { transport } from './transport';
import { food } from './food';
import { objects } from './objects';
import { fantasy } from './fantasy';
import { music } from './music';
import { play } from './play';

/**
 * Kresby předmětů. Nejsou to karty – scény v `data/cards` si je půjčují
 * jako rekvizity. Skupina slouží jen k udržení pořádku v souborech.
 */
export type MotifGroup =
  | 'animals' | 'nature' | 'sky' | 'places' | 'transport'
  | 'food' | 'objects' | 'fantasy' | 'music' | 'play';

export type CategorizedMotif = MotifArt & { category: MotifGroup };

const GROUPS: Array<[MotifGroup, MotifArt[]]> = [
  ['animals', animals],
  ['nature', nature],
  ['sky', sky],
  ['places', places],
  ['transport', transport],
  ['food', food],
  ['objects', objects],
  ['fantasy', fantasy],
  ['music', music],
  ['play', play],
];

/** Knihovna kreseb, ze které staví scény karet. */
export const MOTIFS: CategorizedMotif[] = GROUPS.flatMap(([category, items]) =>
  items.map((motif) => ({ ...motif, category })),
);

export { C } from './palette';
export type { MotifArt } from './palette';
