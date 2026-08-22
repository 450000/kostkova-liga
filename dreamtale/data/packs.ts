import type { ImagePack } from '@/types/images';
import { IMAGE_CATALOG, imagesByCategories } from './catalog';

/**
 * Balíčky obrázků. Nový tematický balíček = jeden záznam v tomto poli
 * (ať už z lokálního katalogu, nebo později z AI generování).
 */
export const IMAGE_PACKS: ImagePack[] = [
  {
    id: 'classic',
    name: 'Klasický mix',
    description: 'Vyvážená směs ze všech světů. Doporučeno pro první hru.',
    coverImage: '/game-images/moon.svg',
    images: IMAGE_CATALOG,
  },
  {
    id: 'animals',
    name: 'Zvířata a příroda',
    description: 'Les, louka i moře – klidnější tempo pro nejmenší.',
    coverImage: '/game-images/fox.svg',
    images: imagesByCategories(['animals', 'nature']),
  },
  {
    id: 'fairytale',
    name: 'Pohádky',
    description: 'Draci, koruny a kouzla. Příběhy se vyprávějí samy.',
    coverImage: '/game-images/dragon.svg',
    images: imagesByCategories(['fantasy', 'places']),
  },
  {
    id: 'journey',
    name: 'Cesta kolem světa',
    description: 'Vlaky, lodě, obloha a všechno mezi tím.',
    coverImage: '/game-images/balloon.svg',
    images: imagesByCategories(['transport', 'sky', 'places']),
  },
  {
    id: 'cosmos',
    name: 'Vesmír a kouzla',
    description: 'Rakety, mimozemšťané a všechno nemožné.',
    coverImage: '/game-images/ufo.svg',
    images: imagesByCategories(['sky', 'fantasy']),
  },
  {
    id: 'everyday',
    name: 'Každý den',
    description: 'Jídlo, věci a drobnosti, které znáte odjakživa.',
    coverImage: '/game-images/cake.svg',
    images: imagesByCategories(['food', 'objects', 'music', 'play']),
  },
];

export const DEFAULT_PACK_ID = 'classic';

export function getPack(packId: string): ImagePack {
  return IMAGE_PACKS.find((pack) => pack.id === packId) ?? IMAGE_PACKS[0];
}
