import type { GameImage, ImageProvider, ImageRequest } from '@/types/images';
import { getPack } from '@/data/packs';
import { pickBalancedImages } from '@/lib/game/selection';
import { createRng } from '@/lib/game/rng';

/**
 * Výchozí zdroj obrázků pro MVP – lokální assety, žádná síť, funguje offline.
 */
export class LocalImageProvider implements ImageProvider {
  readonly id = 'local' as const;
  readonly name = 'Lokální knihovna';

  async capacity(packId?: string): Promise<number> {
    return getPack(packId ?? 'classic').images.length;
  }

  async getImages({ count, packId, seed }: ImageRequest): Promise<GameImage[]> {
    const pack = getPack(packId ?? 'classic');
    const rng = createRng(seed ?? String(Date.now()));
    return pickBalancedImages(pack.images, count, rng);
  }
}
