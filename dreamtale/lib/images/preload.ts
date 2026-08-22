import type { GameImage } from '@/types/images';

/**
 * Předem načte všechny obrázky kola. Story mode se spustí až potom –
 * další karta tak nikdy nečeká na síť.
 */
export function preloadImages(
  images: readonly GameImage[],
  onProgress?: (loaded: number, total: number) => void,
): Promise<void> {
  if (images.length === 0) return Promise.resolve();

  let loaded = 0;
  const total = images.length;

  return new Promise((resolve) => {
    const settle = () => {
      loaded += 1;
      onProgress?.(loaded, total);
      if (loaded >= total) resolve();
    };

    for (const image of images) {
      const element = new Image();
      let settled = false;
      // Obrázek z cache může hlásit hotovo synchronně i přes onload – počítáme ho jen jednou.
      const done = () => {
        if (settled) return;
        settled = true;
        settle();
      };
      element.onload = done;
      // Chybějící asset nesmí hru zablokovat – karta se prostě zobrazí s pozadím.
      element.onerror = done;
      element.src = image.image;
      if (element.complete) done();
    }
  });
}
