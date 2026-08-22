import type { MotifArt } from './palette';
import type { ImageCategory } from '@/types/images';
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

export type CategorizedMotif = MotifArt & { category: ImageCategory };

const GROUPS: Array<[ImageCategory, MotifArt[]]> = [
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

/** Kompletní zdroj pravdy: z tohoto seznamu se generují SVG i katalog obrázků. */
export const MOTIFS: CategorizedMotif[] = GROUPS.flatMap(([category, items]) =>
  items.map((motif) => ({ ...motif, category })),
);

export { C } from './palette';
export type { MotifArt } from './palette';
