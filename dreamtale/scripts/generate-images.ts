/**
 * Vygeneruje SVG karty do public/cards/ z definic v data/cards.
 *
 * Spuštění: npm run images:build
 *
 * Každá karta je celoplošná ilustrace v poměru karty (240 × 364).
 * Kresby jednotlivých předmětů žijí v data/motifs a scény si je půjčují.
 */
import { mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { CARDS } from '../data/cards/index';
import { W, H, vignette } from '../data/cards/scene';

const OUT_DIR = join(process.cwd(), 'public', 'cards');

function renderSvg(art: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
${art.trim()}
${vignette()}
</svg>
`;
}

function main(): void {
  const seen = new Set<string>();
  for (const card of CARDS) {
    if (seen.has(card.id)) throw new Error(`Duplicitní id karty: ${card.id}`);
    seen.add(card.id);
  }

  mkdirSync(OUT_DIR, { recursive: true });
  for (const file of readdirSync(OUT_DIR)) {
    if (file.endsWith('.svg')) rmSync(join(OUT_DIR, file));
  }

  for (const card of CARDS) {
    writeFileSync(join(OUT_DIR, `${card.id}.svg`), renderSvg(card.art), 'utf8');
  }

  // Seznam assetů pro service worker – díky němu je hra po první návštěvě offline.
  writeFileSync(
    join(OUT_DIR, 'index.json'),
    `${JSON.stringify(CARDS.map((card) => `/cards/${card.id}.svg`), null, 2)}\n`,
    'utf8',
  );

  console.log(`Vygenerováno ${CARDS.length} karet do public/cards/`);
}

main();
