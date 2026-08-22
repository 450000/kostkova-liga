import type { GameImage, ImageCategory } from '@/types/images';
import { MOTIFS } from './motifs/index';

/** Přípona assetů. Po dodání finálních ilustrací stačí změnit na `webp`. */
export const IMAGE_EXTENSION = 'svg';

export const IMAGE_CATALOG: GameImage[] = MOTIFS.map((motif) => ({
  id: motif.id,
  name: motif.name,
  category: motif.category,
  image: `/game-images/${motif.id}.${IMAGE_EXTENSION}`,
  tint: motif.tint,
}));

export const CATALOG_BY_ID = new Map(IMAGE_CATALOG.map((image) => [image.id, image]));

export function imagesByCategories(categories: readonly ImageCategory[]): GameImage[] {
  const wanted = new Set(categories);
  return IMAGE_CATALOG.filter((image) => wanted.has(image.category));
}
