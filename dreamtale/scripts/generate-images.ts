/**
 * Vygeneruje SVG assety do public/game-images/ z jediného zdroje pravdy (data/motifs).
 *
 * Spuštění: npm run images:build
 *
 * Až budou k dispozici finální ilustrace, stačí soubory nahradit
 * (např. fox.svg → fox.webp) a upravit příponu v data/catalog.ts.
 */
import { mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { MOTIFS, C } from '../data/motifs/index';

const OUT_DIR = join(process.cwd(), 'public', 'game-images');

function renderSvg(tint: string, art: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="240" height="240" fill="none">
  <circle cx="120" cy="122" r="108" fill="${tint}" opacity="0.14"/>
  <g fill="none" stroke="${C.ink}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" transform="translate(120 122) scale(1.12) translate(-120 -122)">${art.trim()}
  </g>
</svg>
`;
}

function main(): void {
  const seen = new Set<string>();
  for (const motif of MOTIFS) {
    if (seen.has(motif.id)) throw new Error(`Duplicitní id motivu: ${motif.id}`);
    seen.add(motif.id);
  }

  mkdirSync(OUT_DIR, { recursive: true });
  for (const file of readdirSync(OUT_DIR)) {
    if (file.endsWith('.svg')) rmSync(join(OUT_DIR, file));
  }

  for (const motif of MOTIFS) {
    writeFileSync(join(OUT_DIR, `${motif.id}.svg`), renderSvg(motif.tint, motif.art), 'utf8');
  }

  // Seznam assetů pro service worker – díky němu je hra po první návštěvě offline.
  writeFileSync(
    join(OUT_DIR, 'index.json'),
    `${JSON.stringify(MOTIFS.map((motif) => `/game-images/${motif.id}.svg`), null, 2)}\n`,
    'utf8',
  );

  console.log(`Vygenerováno ${MOTIFS.length} obrázků do public/game-images/`);
}

main();
