/** Kategorie slouží k vyvážené randomizaci – ne k zobrazení hráči. */
export type ImageCategory =
  | 'animals'
  | 'nature'
  | 'sky'
  | 'places'
  | 'transport'
  | 'food'
  | 'objects'
  | 'fantasy'
  | 'music'
  | 'play';

export type GameImage = {
  id: string;
  /** Český název motivu. Slouží jen pro alt text a případný debug – ve hře se nikdy nezobrazuje. */
  name: string;
  category: ImageCategory;
  /** Cesta k assetu. Výměna `fox.svg` → `fox.webp` je jen změna této hodnoty. */
  image: string;
  /** Dominantní barva – používá se pro plynulé ladění pozadí karty během načítání. */
  tint?: string;
};

export type ImagePack = {
  id: string;
  name: string;
  description?: string;
  coverImage?: string;
  images: GameImage[];
};

export type ImageProviderId = 'local' | 'external' | 'ai';

export type ImageRequest = {
  count: number;
  /** Identifikátor balíčku. Provider si jej vykládá po svém. */
  packId?: string;
  /** Deterministický seed – stejný seed musí vrátit stejnou posloupnost. */
  seed?: string;
  signal?: AbortSignal;
};

/**
 * Jednotné rozhraní pro všechny zdroje obrázků.
 * Game engine nikdy nesahá na konkrétní implementaci.
 */
export interface ImageProvider {
  readonly id: ImageProviderId;
  readonly name: string;
  /** Kolik obrázků umí provider maximálně dodat (pro validaci nastavení). */
  capacity(packId?: string): Promise<number>;
  getImages(request: ImageRequest): Promise<GameImage[]>;
}
