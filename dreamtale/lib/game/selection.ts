import type { GameImage } from '@/types/images';
import { createRng, shuffle, type Rng } from './rng';

/**
 * Vybere `count` unikátních obrázků s vyváženým zastoupením kategorií.
 *
 * Postup: obrázky se rozdělí do kategorií, z každé se odebírá po jednom
 * v náhodně promíchaném pořadí kategorií (round-robin). Tím se zabrání
 * tomu, aby 20 karet tvořilo 15 zvířat a 5 aut.
 */
export function pickBalancedImages(
  pool: readonly GameImage[],
  count: number,
  seedOrRng: string | Rng,
): GameImage[] {
  const rng = typeof seedOrRng === 'string' ? createRng(seedOrRng) : seedOrRng;
  const target = Math.min(count, pool.length);
  if (target <= 0) return [];

  const buckets = new Map<string, GameImage[]>();
  for (const image of pool) {
    const bucket = buckets.get(image.category);
    if (bucket) bucket.push(image);
    else buckets.set(image.category, [image]);
  }

  const queues = shuffle([...buckets.values()], rng).map((bucket) => shuffle(bucket, rng));
  const picked: GameImage[] = [];

  while (picked.length < target) {
    let tookAny = false;
    for (const queue of queues) {
      if (picked.length >= target) break;
      const next = queue.pop();
      if (next) {
        picked.push(next);
        tookAny = true;
      }
    }
    if (!tookAny) break;
  }

  // Kategorie by jinak vycházely v pravidelném cyklu – finální promíchání to rozbije.
  return shuffle(picked, rng);
}
