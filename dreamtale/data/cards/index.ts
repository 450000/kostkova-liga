import type { CardCategory } from './types';
import { CARD_META, type CardMeta } from './manifest';

/** Kategorie, které tvoří balíček „Dobrodružství“. */
const ADVENTURE_CATEGORIES = new Set<CardCategory>([
  'places', 'people', 'animals', 'fantasy', 'nature', 'adventure',
]);

export const CARDS: CardMeta[] = CARD_META;

export const ADVENTURE_CARDS: CardMeta[] = CARDS.filter((card) =>
  ADVENTURE_CATEGORIES.has(card.category),
);

export const EVERYDAY_CARDS: CardMeta[] = CARDS.filter(
  (card) => !ADVENTURE_CATEGORIES.has(card.category),
);

export const ADVENTURE_IDS = new Set(ADVENTURE_CARDS.map((card) => card.id));

export type { CardMeta, CardCategory };
