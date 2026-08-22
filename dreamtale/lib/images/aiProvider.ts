import type { GameImage, ImageProvider, ImageRequest } from '@/types/images';

/**
 * Připravené rozhraní pro budoucí generování tematických balíčků pomocí AI.
 *
 * Záměrně neobsahuje implementaci – hlavní hra nesmí být závislá na externím API.
 * Napojení: dodat `generate`, který zavolá serverovou route a vrátí hotové obrázky.
 */
export type AiPackRequest = {
  theme: string;
  count: number;
  stylePrompt?: string;
  signal?: AbortSignal;
};

export type AiPackGenerator = (request: AiPackRequest) => Promise<GameImage[]>;

/** Jednotný stylový popis, aby vygenerované balíčky navazovaly na vizuální jazyk hry. */
export const AI_STYLE_PROMPT = [
  'charming whimsical editorial illustration',
  'simple recognizable object',
  'soft rounded shapes',
  'subtle paper texture',
  'warm modern colors',
  'slightly hand drawn',
  'minimal background',
  'modern Scandinavian storybook aesthetic',
  'centered composition',
  'no text, no border',
  'consistent visual language',
].join(', ');

export class AiImageProvider implements ImageProvider {
  readonly id = 'ai' as const;
  readonly name = 'AI balíček';

  constructor(
    private readonly generate: AiPackGenerator,
    private readonly maxImages = 60,
  ) {}

  async capacity(): Promise<number> {
    return this.maxImages;
  }

  async getImages({ count, packId, signal }: ImageRequest): Promise<GameImage[]> {
    return this.generate({
      theme: packId ?? 'sen',
      count: Math.min(count, this.maxImages),
      stylePrompt: AI_STYLE_PROMPT,
      signal,
    });
  }
}
