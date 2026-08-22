/**
 * Jediné místo pro branding. Změna názvu produktu = změna tohoto souboru.
 */
export const APP_CONFIG = {
  name: 'DREAMTALE',
  tagline: 'Každý obrázek ukrývá příběh.',
  description:
    'Společenská hra, ve které z obrázků vyprávíte příběh – a pak si ho zkusíte vybavit.',
  shortName: 'Dreamtale',
  themeColor: '#0f1330',
  backgroundColor: '#0f1330',
  locale: 'cs',
} as const;

export const GAME_LIMITS = {
  minPlayers: 1,
  maxPlayers: 12,
  minImages: 5,
  maxImages: 60,
} as const;

export const IMAGE_COUNT_PRESETS = [
  { count: 10, label: 'Rychlá hra', hint: 'na dobrou noc' },
  { count: 20, label: 'Klasická', hint: 'nejoblíbenější' },
  { count: 30, label: 'Výzva', hint: 'pro otrlé snílky' },
] as const;

export const STORAGE_KEYS = {
  preferences: 'dreamtale.preferences.v1',
  savedGame: 'dreamtale.savedGame.v1',
} as const;
