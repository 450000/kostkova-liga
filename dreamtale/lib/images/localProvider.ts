import type { GameImage, ImageProvider, ImageRequest } from '@/types/images';
import { IMAGE_CATALOG } from '@/data/catalog';
import { pickBalancedImages } from '@/lib/game/selection';
import { createRng } from '@/lib/game/rng';

/**
 * Výchozí zdroj obrázků pro MVP – lokální assety, žádná síť, funguje offline.
 * Losuje se ze všech karet naráz; hra nemá tematické balíčky.
 */
export class LocalImageProvider implements ImageProvider {
  readonly id = 'local' as const;
  readonly name = 'Lokální knihovna';

  async capacity(): Promise<number> {
    return IMAGE_CATALOG.length;
  }

  async getImages({ count, seed }: ImageRequest): Promise<GameImage[]> {
    const rng = createRng(seed ?? String(Date.now()));
    return pickBalancedImages(IMAGE_CATALOG, count, rng);
  }
}
