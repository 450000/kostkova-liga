// Build skript pro Kostkový Sportovec.
// Zminifikuje všechny HTML stránky (včetně inline CSS a JS) z kořene
// projektu do složky _site, kterou pak GitHub Actions nasadí na Pages.
import { minify } from 'html-minifier-terser';
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs';

const SRC = process.cwd();
const OUT = new URL('../_site/', import.meta.url).pathname;

const options = {
  collapseWhitespace: true,
  removeComments: true,
  minifyCSS: true,
  minifyJS: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  html5: true,
  sortAttributes: true,
  sortClassName: true
};

mkdirSync(OUT, { recursive: true });

const files = readdirSync(SRC).filter((f) => f.endsWith('.html'));
let before = 0;
let after = 0;

for (const file of files) {
  const input = readFileSync(`${SRC}/${file}`, 'utf8');
  const output = await minify(input, options);
  writeFileSync(`${OUT}/${file}`, output);
  const a = Buffer.byteLength(input);
  const b = Buffer.byteLength(output);
  before += a;
  after += b;
  console.log(
    `${file.padEnd(14)} ${(a / 1024).toFixed(1).padStart(6)} KB -> ` +
      `${(b / 1024).toFixed(1).padStart(6)} KB  (-${(100 - (100 * b) / a).toFixed(1)}%)`
  );
}

// Bez Jekyll zpracování – jde o čisté statické HTML.
writeFileSync(`${OUT}/.nojekyll`, '');

console.log('-'.repeat(48));
console.log(
  `${'CELKEM'.padEnd(14)} ${(before / 1024).toFixed(1).padStart(6)} KB -> ` +
    `${(after / 1024).toFixed(1).padStart(6)} KB  (-${(100 - (100 * after) / before).toFixed(1)}%)`
);

if (files.length === 0) {
  console.error('CHYBA: nenalezeny žádné .html soubory k minifikaci.');
  process.exit(1);
}
