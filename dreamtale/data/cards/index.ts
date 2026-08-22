import type { Card, CardCategory } from './types';
import { adventure1 } from './adventure-1';
import { adventure2 } from './adventure-2';
import { adventure3 } from './adventure-3';
import { adventure4 } from './adventure-4';
import { adventure5 } from './adventure-5';
import { adventure6 } from './adventure-6';
import { everyday1 } from './everyday-1';
import { everyday2 } from './everyday-2';
import { everyday3 } from './everyday-3';
import { everyday4 } from './everyday-4';

/** Sada dobrodružství: místa, povolání, zvířata, fantazie. */
export const ADVENTURE_CARDS: Card[] = [
  ...adventure1, ...adventure2, ...adventure3, ...adventure4, ...adventure5, ...adventure6,
];

/** Sada každodennosti: pocity, rodina, škola, obyčejné situace. */
export const EVERYDAY_CARDS: Card[] = [
  ...everyday1, ...everyday2, ...everyday3, ...everyday4,
];

export const CARDS: Card[] = [...ADVENTURE_CARDS, ...EVERYDAY_CARDS];

export const ADVENTURE_IDS = new Set(ADVENTURE_CARDS.map((card) => card.id));

export type { Card, CardCategory };
