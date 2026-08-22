/** Kategorie slouží k vyvážené randomizaci – ne k zobrazení hráči. */
export type ImageCategory =
  | 'places'
  | 'people'
  | 'animals'
  | 'fantasy'
  | 'nature'
  | 'adventure'
  | 'feelings'
  | 'everyday'
  | 'family'
  | 'school';

export type GameImage = {
  id: string;
  /** Český název karty. Slouží jen pro alt text – ve hře se nikdy nezobrazuje. */
  name: string;
  category: ImageCategory;
  /** Cesta k assetu. Výměna `rytir.svg` → `rytir.webp` je jen změna této hodnoty. */
  image: string;
  /** Dominantní barva scény – karta ji ukáže, než se ilustrace načte. */
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
  /** Kolik karet umí provider maximálně dodat (pro validaci nastavení). */
  capacity(packId?: string): Promise<number>;
  getImages(request: ImageRequest): Promise<GameImage[]>;
}
