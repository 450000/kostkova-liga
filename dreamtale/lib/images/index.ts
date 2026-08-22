import type { ImageProvider } from '@/types/images';
import { LocalImageProvider } from './localProvider';

export { LocalImageProvider } from './localProvider';
export { ExternalImageProvider } from './externalProvider';
export { AiImageProvider, AI_STYLE_PROMPT } from './aiProvider';
export type { AiPackGenerator, AiPackRequest } from './aiProvider';

/**
 * Jediné místo, kde se rozhoduje, odkud hra bere obrázky.
 * Výměna za jiného providera je změna jednoho řádku.
 */
export const imageProvider: ImageProvider = new LocalImageProvider();
