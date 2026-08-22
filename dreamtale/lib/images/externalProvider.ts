import type { GameImage, ImageProvider, ImageRequest } from '@/types/images';
import type { ImageCategory } from '@/types/images';

type RemoteImage = {
  id: string;
  name: string;
  category: ImageCategory;
  url: string;
  tint?: string;
};

type RemoteResponse = { images: RemoteImage[]; capacity?: number };

/**
 * Načítá balíček z externího JSON endpointu (např. CDN s vlastní sadou ilustrací).
 * Formát odpovědi: { images: [{ id, name, category, url, tint }], capacity?: number }
 */
export class ExternalImageProvider implements ImageProvider {
  readonly id = 'external' as const;
  readonly name = 'Externí knihovna';

  constructor(private readonly endpoint: string) {}

  private async fetchPack(packId: string | undefined, signal?: AbortSignal): Promise<RemoteResponse> {
    const url = new URL(this.endpoint, typeof window !== 'undefined' ? window.location.origin : 'http://localhost');
    if (packId) url.searchParams.set('pack', packId);
    const response = await fetch(url.toString(), { signal });
    if (!response.ok) throw new Error(`Externí knihovna odpověděla ${response.status}`);
    return (await response.json()) as RemoteResponse;
  }

  async capacity(packId?: string): Promise<number> {
    const data = await this.fetchPack(packId);
    return data.capacity ?? data.images.length;
  }

  async getImages({ count, packId, signal }: ImageRequest): Promise<GameImage[]> {
    const data = await this.fetchPack(packId, signal);
    return data.images.slice(0, count).map(
      (item): GameImage => ({
        id: item.id,
        name: item.name,
        category: item.category,
        image: item.url,
        tint: item.tint,
      }),
    );
  }
}
