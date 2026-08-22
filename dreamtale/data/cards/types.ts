/** Kategorie slouží k vyvážené randomizaci, hráči je nevidí. */
export type CardCategory =
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

export type Card = {
  id: string;
  /** Český název – jen pro alt text, ve hře se nikdy nezobrazuje. */
  name: string;
  category: CardCategory;
  /** Dominantní barva scény, používá se při načítání karty. */
  tint: string;
  /** Vnitřek SVG v souřadnicích 0 0 240 364. */
  art: string;
};
