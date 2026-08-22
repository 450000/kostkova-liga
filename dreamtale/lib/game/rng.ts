/**
 * Deterministický generátor náhodných čísel.
 * Stejný seed → stejná posloupnost obrázků (příprava pro sdílení hry).
 */
export type Rng = () => number;

/** FNV-1a – rychlý a dostatečný hash textového seedu na 32bit číslo. */
export function hashSeed(seed: string): number {
  let hash = 0x811c9dc5;
  for (let i = 0; i < seed.length; i += 1) {
    hash ^= seed.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return hash >>> 0;
}

/** Mulberry32 – malý, rychlý a dobře rozprostřený PRNG. */
export function createRng(seed: string): Rng {
  let state = hashSeed(seed) || 1;
  return () => {
    state |= 0;
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Fisher–Yates shuffle nad kopií vstupu. */
export function shuffle<T>(items: readonly T[], rng: Rng): T[] {
  const result = items.slice();
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

const SEED_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

/** Krátký, čitelný a nahlas sdělitelný seed – např. `AB47X2`. */
export function createSeed(length = 6): string {
  let seed = '';
  for (let i = 0; i < length; i += 1) {
    seed += SEED_ALPHABET[Math.floor(Math.random() * SEED_ALPHABET.length)];
  }
  return seed;
}

export function normalizeSeed(input: string): string {
  return input.trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
}
