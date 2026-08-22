# DREAMTALE

> Každý obrázek ukrývá příběh.

Webová společenská hra na vyprávění a paměť. Hráči si postupně prohlížejí sérii
obrázků a společně z nich skládají příběh, který jim pomůže si pořadí zapamatovat.
Po posledním obrázku se hra otočí a ptá se: *Jaký byl první obrázek?* – a odkrývá
je jeden po druhém.

Hra je navržená pro telefon položený na stole, ale funguje stejně dobře na tabletu,
notebooku i televizi. Po prvním načtení běží offline.

---

## Obsah

- [Rychlý start](#rychlý-start)
- [Co aplikace umí](#co-aplikace-umí)
- [Architektura](#architektura)
- [Herní stav](#herní-stav)
- [Jak přidat nový obrázek](#jak-přidat-nový-obrázek)
- [Jak přidat nový balíček](#jak-přidat-nový-balíček)
- [Jak změnit design](#jak-změnit-design)
- [Jak funguje randomizace](#jak-funguje-randomizace)
- [Jak funguje PWA a offline režim](#jak-funguje-pwa-a-offline-režim)
- [Jak připojit AI Image Provider](#jak-připojit-ai-image-provider)
- [Změna názvu produktu](#změna-názvu-produktu)
- [Testy a kontroly](#testy-a-kontroly)
- [Nasazení na Vercel](#nasazení-na-vercel)

---

## Rychlý start

```bash
npm install
npm run dev
```

Aplikace poběží na <http://localhost:3000>.

| Příkaz | Co dělá |
| --- | --- |
| `npm run dev` | vývojový server |
| `npm run build` | produkční build |
| `npm start` | spuštění produkčního buildu |
| `npm run lint` | ESLint |
| `npm run typecheck` | kontrola typů (`tsc --noEmit`) |
| `npm test` | unit testy herního enginu (Vitest) |
| `npm run images:build` | vygeneruje SVG assety z `data/motifs` do `public/game-images` |
| `npm run build:single` | složí celou hru do jednoho souboru `dist/dreamtale.html` |

---

## Co aplikace umí

1. **Domovská obrazovka** – noční obloha, jemné animace, nápověda a nastavení zvuku.
2. **Nastavení hry** – 1–12 hráčů s vlastními jmény, počet obrázků (5–60, předvolby
   10 / 20 / 30 nebo vlastní), výběr z šesti balíčků, bodování, režim vybavování, časový limit.
   Menší balíček automaticky zkrátí požadovaný počet obrázků.
3. **Příprava snu** – výběr obrázků, preload všech assetů, teprve pak start hry.
4. **Story mode** – jedna velká karta, decentní počítadlo, tap / klik / mezerník /
   šipka vpřed, swipe doleva dál a doprava zpět.
5. **Přechod** – „Příběh skončil. Pamatujete si celý sen?“
6. **Recall mode** – otázka na N-tý obrázek, tlačítko **Ukázat**, pak **Další**
   nebo **Uhodl / Neuhodl** podle bodování. Obrázky se nikdy nezobrazí všechny naráz.
7. **Výsledky** – skóre, procenta, pořadí hráčů, kód snu (seed).
8. **Prohlédnutí celého snu** – sekvenční přehrání všech obrázků tam i zpět.
9. **Ochrana rozehrané hry** – žádná navigace, potvrzovací dialog, `beforeunload`,
   zachycení tlačítka Zpět, uložení rozehrané hry do `localStorage`.
10. **Fullscreen, wake lock, PWA, offline, přístupnost, `prefers-reduced-motion`.**

---

## Architektura

Herní logika je čistý TypeScript bez Reactu – díky tomu je testovatelná a UI je
jen tenká vrstva nad ní.

```
app/                    Next.js App Router (layout, globální styly, jediná stránka)
components/
  game/                 GameEngine, StoryMode, RecallMode, ResultsScreen, ReviewMode,
                        GameCard, ProgressIndicator, LoadingScreen, TransitionScreen,
                        FullscreenButton, ExitGameButton
  setup/                GameSetup, PlayerSetup
  home/                 HomeScreen, HowToPlay
  ui/                   Button, IconButton, Stepper, Segmented, OptionCard, Dialog
  background/           NightSky
hooks/                  useKeyboard, useSwipe, useFullscreen, useSound, useWakeLock,
                        useExitGuard, useReducedMotion
lib/
  config.ts             branding, limity, předvolby, klíče do localStorage
  game/                 engine (reducer), rng, selection, scoring, ordinal, storage
  images/               ImageProvider abstrakce: local / external / ai + preload
data/
  motifs/               zdroj pravdy pro ilustrace (SVG kresba každého motivu)
  catalog.ts            katalog obrázků odvozený z motivů
  packs.ts              tematické balíčky
public/game-images/     vygenerované assety + index.json pro service worker
scripts/                generate-images.ts, build-single-file.ts
tests/                  unit testy enginu
types/                  game.ts, images.ts
```

### Tok hry

```
HOME → SETUP → LOADING_IMAGES → STORY_MODE → TRANSITION → RECALL_MODE → RESULTS ⇄ REVIEW
```

Celý průběh řídí jeden reducer (`lib/game/engine.ts`). Žádné roztroušené booleany.
Stav obalu aplikace (dialogy, průběh načítání) je oddělený v `GameEngine`, aby se
nepletl do uloženého snu.

---

## Herní stav

```ts
type GameState = {
  phase: GamePhase              // HOME | SETUP | LOADING_IMAGES | STORY_MODE
                                // | TRANSITION | RECALL_MODE | RESULTS | REVIEW
  players: Player[]
  settings: GameSettings        // imageCount, packId, scoring, recallMode,
                                // timeLimit, soundEnabled
  images: GameImage[]
  currentImageIndex: number     // story mode
  recallIndex: number           // vybavování
  recallRevealed: boolean       // je aktuální karta odkrytá?
  currentPlayerIndex: number    // round-robin
  scores: Record<string, number>
  teamScore: number
  reviewIndex: number           // prohlížení snu
  seed: string
  startedAt: number | null
  finishedAt: number | null
}
```

Přechody se dělají výhradně přes akce (`GameAction`), např. `NEXT_IMAGE`,
`REVEAL_RECALL`, `SCORE_RECALL`, `PLAY_AGAIN`. Reducer hlídá i pravidla:
bodovat nelze před odkrytím karty, zpět se nedá před první obrázek, hra se
nespustí bez obrázků.

---

## Jak přidat nový obrázek

1. Otevřete odpovídající soubor v `data/motifs/` (např. `animals.ts`).
2. Přidejte záznam:

   ```ts
   {
     id: 'squirrel',
     name: 'Veverka',
     tint: C.brown,
     art: `
   <ellipse cx="110" cy="150" rx="46" ry="40" fill="${C.brown}"/>
   <circle cx="150" cy="100" r="30" fill="${C.brown}"/>`,
   }
   ```

   Kresba používá souřadnice `0 0 240 240`, barvy výhradně z palety
   `data/motifs/palette.ts` a dědí obrys (`stroke`) z generátoru.
3. Spusťte `npm run images:build`. Vygeneruje se `public/game-images/squirrel.svg`
   a obrázek se sám objeví v katalogu i v balíčcích.

### Výměna za finální ilustrace

Knihovna má **232 obrázků** v deseti kategoriích (zvířata, příroda, obloha, místa,
doprava, jídlo, věci, fantazie, hudba, hry).

Assety jsou v `public/game-images/` a v datech jsou vedené jen cestou.
Až budou hotové ilustrace (`fox.webp` místo `fox.svg`), stačí soubory nahradit
a v `data/catalog.ts` změnit jedinou konstantu:

```ts
export const IMAGE_EXTENSION = 'webp';
```

Game engine se nemění.

**Doporučený vizuální styl finálních ilustrací:** jednoduchý rozpoznatelný objekt,
měkké zaoblené tvary, teplé moderní barvy, lehce ručně kreslené, minimální pozadí,
vycentrovaná kompozice, bez textu a rámečku, jednotný vizuální jazyk napříč sadou.
Každý obrázek musí být čitelný do půl vteřiny.

---

## Jak přidat nový balíček

`data/packs.ts`:

```ts
{
  id: 'winter',
  name: 'Zima',
  description: 'Sníh, svíčky a teplý čaj.',
  coverImage: '/game-images/snowflake.svg',
  images: imagesByCategories(['sky', 'nature']),   // nebo vlastní výběr obrázků
}
```

Balíček se hned objeví v nastavení hry. Počet obrázků se automaticky přizpůsobí
kapacitě balíčku.

---

## Jak změnit design

Všechny barvy jsou design tokeny v `app/globals.css` (`:root`) a do Tailwindu
se propisují přes `@theme inline`. Změna palety = změna jednoho bloku:

```css
:root {
  --background: #0f1330;
  --card: #fbf3e4;
  --primary: #a99be0;
  --secondary: #f5c765;
  --accent: #f2765c;
  /* … */
}
```

Písma se nastavují v `app/layout.tsx` (`next/font/google`) a mapují na
`--font-display` a `--font-sans`. Barvy ilustrací mají vlastní paletu v
`data/motifs/palette.ts` – po její změně spusťte `npm run images:build`.

---

## Jak funguje randomizace

- Seed je krátký čitelný kód (např. `AB47X2`) z `lib/game/rng.ts`.
- Z něj se vytvoří deterministický generátor (mulberry32) a míchá se
  Fisher–Yatesem – stejný seed tedy vždy dá stejný sen.
- `pickBalancedImages` rozdělí obrázky podle kategorií a odebírá je round-robin,
  takže z 20 karet nikdy nevznikne 15 zvířat a 5 aut. Výsledek se ještě promíchá,
  aby kategorie nešly v pravidelném cyklu.
- V rámci jednoho kola se žádný obrázek neopakuje.

Seed se zobrazuje na výsledkové obrazovce jako **Kód snu** – je připravený pro
budoucí funkci „sdílet hru“.

---

## Jak funguje PWA a offline režim

- `public/manifest.webmanifest` – název, barvy, `display: standalone`, ikony
  (včetně maskable).
- `public/sw.js` – service worker registrovaný v produkci
  (`components/ServiceWorkerRegistrar.tsx`).
  - Při instalaci předcachuje skořápku aplikace a **všechny herní obrázky**
    podle `public/game-images/index.json` (generuje se spolu s assety).
  - Navigace: network-first s fallbackem na uloženou skořápku.
  - Assety: cache-first s doplněním na pozadí.
- Díky tomu je hra po první návštěvě plně hratelná offline a jde ji přidat na
  plochu telefonu.

Po změně obsahu service workeru zvyšte `CACHE` (`dreamtale-v1` → `v2`).

---

## Jak připojit AI Image Provider

Zdroje obrázků stojí na jednom rozhraní (`types/images.ts`):

```ts
interface ImageProvider {
  capacity(packId?: string): Promise<number>
  getImages(request: ImageRequest): Promise<GameImage[]>
}
```

V repozitáři jsou tři implementace:

| Provider | Soubor | Stav |
| --- | --- | --- |
| `LocalImageProvider` | `lib/images/localProvider.ts` | výchozí, offline |
| `ExternalImageProvider` | `lib/images/externalProvider.ts` | JSON endpoint s vlastní sadou |
| `AiImageProvider` | `lib/images/aiProvider.ts` | připravené rozhraní pro generování balíčků |

Napojení AI:

1. Vytvořte serverovou route (např. `app/api/packs/route.ts`), která zavolá
   generátor obrázků a vrátí hotové `GameImage[]`.
2. Předejte ji do provideru:

   ```ts
   const provider = new AiImageProvider(async ({ theme, count, stylePrompt, signal }) => {
     const res = await fetch('/api/packs', {
       method: 'POST',
       body: JSON.stringify({ theme, count, stylePrompt }),
       signal,
     });
     return res.json();
   });
   ```
3. V `lib/images/index.ts` přepněte `imageProvider` na nový zdroj.

`AI_STYLE_PROMPT` drží popis vizuálního stylu, aby generované balíčky navazovaly
na zbytek hry. Hlavní hra na AI nikdy nezávisí – výchozí zdroj je lokální.

---

## Změna názvu produktu

Vše je v `lib/config.ts`:

```ts
export const APP_CONFIG = {
  name: 'DREAMTALE',
  tagline: 'Každý obrázek ukrývá příběh.',
  /* … */
};
```

Zbývá jen upravit texty v `public/manifest.webmanifest`.

---

## Jednosouborová verze ke sdílení

```bash
npm run build:single
```

Vznikne `dist/dreamtale.html` (~2,3 MB) – celá hra v jediném souboru včetně
stylů, skriptů, fontů i všech 232 obrázků. Nepotřebuje server ani síť, dá se
poslat e-mailem, otevřít z disku nebo nahrát kamkoliv.

Jak to funguje:

- statický export (`ARTIFACT_BUILD=1 next build`) → `scripts/build-single-file.ts`
  vloží CSS, JS, fonty a obrázky přímo do HTML;
- obrázky se předávají jako mapa `window.__DREAMTALE_ASSETS__`, kterou čte
  `lib/images/assets.ts` – běžný build ji nemá a používá normální cesty;
- runtime Next.js si odvozuje adresu chunku z `document.currentScript`, proto
  vložené skripty dostanou odpojený `<script>` element se správnou adresou.

## Testy a kontroly

```bash
npm test        # 28 unit testů: engine, fáze, skóre, round-robin, randomizace, seed
npm run lint
npm run typecheck
npm run build
```

Testy pokrývají vytvoření hry, změnu fází, recall index, neopakování obrázků,
vyváženost kategorií, determinismus seedu, bodování obou režimů a round-robin
střídání hráčů.

---

## Nasazení na Vercel

1. Nahrajte repozitář na GitHub.
2. Ve Vercelu zvolte **Add New → Project** a vyberte repozitář.
3. Nastavte **Root Directory** na `dreamtale` (aplikace je v podadresáři).
4. Framework preset **Next.js**, build `npm run build`, žádné proměnné prostředí
   nejsou potřeba.
5. Deploy.

Aplikace je plně statická (jedna stránka, žádné API), takže funguje i na jiném
hostingu s podporou Next.js.
