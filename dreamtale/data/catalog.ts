import type { GameImage, ImageCategory } from '@/types/images';
import { CARDS } from './cards/index';

/** Přípona assetů. Po dodání jiných ilustrací stačí změnit na `webp`. */
export const IMAGE_EXTENSION = 'svg';

export const IMAGE_CATALOG: GameImage[] = CARDS.map((card) => ({
  id: card.id,
  name: card.name,
  category: card.category,
  image: `/cards/${card.id}.${IMAGE_EXTENSION}`,
  tint: card.tint,
}));

export const CATALOG_BY_ID = new Map(IMAGE_CATALOG.map((image) => [image.id, image]));

export function imagesByCategories(categories: readonly ImageCategory[]): GameImage[] {
  const wanted = new Set(categories);
  return IMAGE_CATALOG.filter((image) => wanted.has(image.category));
}

export function imagesByIds(ids: ReadonlySet<string>): GameImage[] {
  return IMAGE_CATALOG.filter((image) => ids.has(image.id));
}
