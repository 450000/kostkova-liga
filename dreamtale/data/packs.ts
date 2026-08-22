import type { ImagePack } from '@/types/images';
import { IMAGE_CATALOG, imagesByCategories, imagesByIds } from './catalog';
import { ADVENTURE_IDS } from './cards/index';

/**
 * Balíčky karet. Nový tematický balíček = jeden záznam v tomto poli
 * (ať už z lokálního katalogu, nebo později z AI generování).
 */
export const IMAGE_PACKS: ImagePack[] = [
  {
    id: 'classic',
    name: 'Velký mix',
    description: 'Všechny karty pohromadě. Doporučeno pro první hru.',
    coverImage: '/cards/socha-svobody.svg',
    images: IMAGE_CATALOG,
  },
  {
    id: 'adventure',
    name: 'Dobrodružství',
    description: 'Daleké kraje, povolání a fantazie.',
    coverImage: '/cards/piratska-lod.svg',
    images: imagesByIds(ADVENTURE_IDS),
  },
  {
    id: 'everyday',
    name: 'Všední den',
    description: 'Pocity, rodina, škola a obyčejné chvíle.',
    coverImage: '/cards/objeti.svg',
    images: IMAGE_CATALOG.filter((image) => !ADVENTURE_IDS.has(image.id)),
  },
  {
    id: 'feelings',
    name: 'Co cítím',
    description: 'Radost, obavy, smíření. Pro klidnější vyprávění.',
    coverImage: '/cards/objeti.svg',
    images: imagesByCategories(['feelings', 'family', 'school']),
  },
  {
    id: 'world',
    name: 'Kolem světa',
    description: 'Místa, stavby a cesty, kam se dá doletět.',
    coverImage: '/cards/katedrala.svg',
    images: imagesByCategories(['places', 'adventure', 'nature']),
  },
  {
    id: 'creatures',
    name: 'Zvířata a bytosti',
    description: 'Od tučňáka po draka.',
    coverImage: '/cards/drak-hory.svg',
    images: imagesByCategories(['animals', 'fantasy']),
  },
];

export const DEFAULT_PACK_ID = 'classic';

export function getPack(packId: string): ImagePack {
  return IMAGE_PACKS.find((pack) => pack.id === packId) ?? IMAGE_PACKS[0];
}
