import { describe, expect, it } from 'vitest';
import { pickBalancedImages } from '@/lib/game/selection';
import { createRng, createSeed, hashSeed, normalizeSeed, shuffle } from '@/lib/game/rng';
import { IMAGE_CATALOG } from '@/data/catalog';
import { IMAGE_PACKS } from '@/data/packs';
import { GAME_LIMITS, IMAGE_COUNT_PRESETS } from '@/lib/config';
import { effectiveImageCount } from '@/lib/game/engine';
import { LocalImageProvider } from '@/lib/images/localProvider';

describe('katalog obrázků', () => {
  it('má unikátní id a vyplněná metadata', () => {
    const ids = new Set(IMAGE_CATALOG.map((image) => image.id));
    expect(ids.size).toBe(IMAGE_CATALOG.length);
    expect(IMAGE_CATALOG.length).toBeGreaterThanOrEqual(150);
    for (const image of IMAGE_CATALOG) {
      expect(image.name.length).toBeGreaterThan(0);
      expect(image.image.startsWith('/cards/')).toBe(true);
    }
  });

  it('každý balíček zvládne i nejdelší předvolbu', () => {
    const longestPreset = Math.max(...IMAGE_COUNT_PRESETS.map((preset) => preset.count));
    for (const pack of IMAGE_PACKS) {
      expect(pack.images.length).toBeGreaterThanOrEqual(longestPreset);
    }
  });

  it('menší balíček zkrátí požadovaný počet obrázků', () => {
    expect(effectiveImageCount(60, 39)).toBe(39);
    expect(effectiveImageCount(20, 232)).toBe(20);
    expect(effectiveImageCount(999, GAME_LIMITS.maxImages)).toBe(GAME_LIMITS.maxImages);
    expect(effectiveImageCount(1, 232)).toBe(GAME_LIMITS.minImages);
  });
});

describe('randomizace', () => {
  it('vrátí přesný počet obrázků a žádný neopakuje', () => {
    const picked = pickBalancedImages(IMAGE_CATALOG, 30, 'SEED42');
    expect(picked).toHaveLength(30);
    expect(new Set(picked.map((image) => image.id)).size).toBe(30);
  });

  it('nikdy nevrátí víc, než kolik je k dispozici', () => {
    expect(pickBalancedImages(IMAGE_CATALOG.slice(0, 7), 20, 'X')).toHaveLength(7);
    expect(pickBalancedImages(IMAGE_CATALOG, 0, 'X')).toHaveLength(0);
  });

  it('drží kategorie vyvážené', () => {
    const picked = pickBalancedImages(IMAGE_CATALOG, 20, 'MIX01');
    const counts = new Map<string, number>();
    for (const image of picked) counts.set(image.category, (counts.get(image.category) ?? 0) + 1);
    // Žádná kategorie nesmí obsadit víc než třetinu kola.
    for (const count of counts.values()) expect(count).toBeLessThanOrEqual(7);
    expect(counts.size).toBeGreaterThanOrEqual(5);
  });

  it('stejný seed dá stejnou posloupnost, jiný seed jinou', () => {
    const a = pickBalancedImages(IMAGE_CATALOG, 15, 'AB47X2').map((image) => image.id);
    const b = pickBalancedImages(IMAGE_CATALOG, 15, 'AB47X2').map((image) => image.id);
    const c = pickBalancedImages(IMAGE_CATALOG, 15, 'ZZ99Q1').map((image) => image.id);
    expect(a).toEqual(b);
    expect(a).not.toEqual(c);
  });

  it('shuffle zachová všechny prvky', () => {
    const source = [1, 2, 3, 4, 5, 6, 7, 8];
    const mixed = shuffle(source, createRng('shuffle'));
    expect(mixed).not.toEqual(source);
    expect([...mixed].sort((x, y) => x - y)).toEqual(source);
  });
});

describe('seed', () => {
  it('generuje čitelný kód a normalizuje vstup', () => {
    expect(createSeed()).toMatch(/^[A-Z2-9]{6}$/);
    expect(normalizeSeed(' ab47-x2 ')).toBe('AB47X2');
    expect(hashSeed('AB47X2')).toBe(hashSeed('AB47X2'));
  });
});

describe('LocalImageProvider', () => {
  it('dodá požadovaný počet obrázků z balíčku', async () => {
    const provider = new LocalImageProvider();
    const images = await provider.getImages({ count: 12, packId: 'creatures', seed: 'S1' });
    expect(images).toHaveLength(12);
    expect(new Set(images.map((image) => image.id)).size).toBe(12);
    expect(await provider.capacity('creatures')).toBeGreaterThan(12);
  });
});
