/**
 * Složí celou hru do jediného HTML souboru, který jde poslat nebo hostovat kdekoliv.
 *
 * Spuštění: npm run build:single
 *
 * Postup: statický export Next.js → vložení CSS, JS, fontů a všech obrázků
 * přímo do HTML jako inline obsah, resp. data URI. Výsledek nepotřebuje
 * žádný server ani síť.
 */
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const APP_NAME = 'DREAMTALE';
const ROOT = process.cwd();
const OUT_DIR = join(ROOT, 'out');
const DIST_DIR = join(ROOT, 'dist');
const DIST_FILE = join(DIST_DIR, 'dreamtale.html');

/** První argument registrace chunku v runtime Turbopacku. */
const CURRENT_SCRIPT_ARG = '"object"==typeof document?document.currentScript:void 0';

const MIME: Record<string, string> = {
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
};

function readAsset(urlPath: string): Buffer {
  return readFileSync(join(OUT_DIR, urlPath.replace(/^\//, '').split('?')[0]));
}

function dataUri(urlPath: string): string {
  const extension = urlPath.slice(urlPath.lastIndexOf('.')).split('?')[0];
  const mime = MIME[extension] ?? 'application/octet-stream';
  return `data:${mime};base64,${readAsset(urlPath).toString('base64')}`;
}

/** Vložený skript nesmí obsahovat `</script>` – prohlížeč by ho ukončil uprostřed kódu. */
function escapeScript(code: string): string {
  return code.replace(/<\/(script)/gi, '<\\/$1').replace(/<!--/g, '<\\!--');
}

function inlineCss(css: string, cssPath: string): string {
  // Fonty si Next hostuje sám – v jednom souboru musí být přímo v CSS.
  const cssDir = cssPath.slice(0, cssPath.lastIndexOf('/'));
  return css.replace(/url\(\s*['"]?([^)'"]+\.(?:woff2?|png|svg|webp))['"]?\s*\)/g, (match, url: string) => {
    if (url.startsWith('data:')) return match;
    const resolved = url.startsWith('/') ? url : join(cssDir, url);
    return `url(${dataUri(resolved)})`;
  });
}

function main(): void {
  if (!existsSync(OUT_DIR)) {
    throw new Error('Chybí složka out/. Spusťte nejdřív `ARTIFACT_BUILD=1 next build`.');
  }

  let html = readFileSync(join(OUT_DIR, 'index.html'), 'utf8');

  // 1) Stylesheety → <style>
  html = html.replace(
    /<link[^>]+rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/g,
    (_, href: string) => `<style>${inlineCss(readAsset(href).toString('utf8'), href)}</style>`,
  );

  // 2) Skripty → inline <script>
  //
  // Runtime Next.js si z `document.currentScript` odvozuje, odkud se načetl.
  // Vložený skript žádný `src` nemá, proto mu podstrčíme odpojený <script>
  // element se správnou adresou – jinak runtime skončí chybou a hra se nespustí.
  let chunkIndex = 0;
  html = html.replace(/<script[^>]*src="([^"]+)"[^>]*><\/script>/g, (tag, src: string) => {
    // `noModule` polyfill je pro prohlížeče bez ES modulů – ty tuhle hru stejně nespustí.
    if (/\bnoModule\b/i.test(tag)) return '';
    const marker = `__dreamtaleChunk${chunkIndex++}`;
    const relative = JSON.stringify(src.replace(/^\//, ''));
    const preamble =
      `var ${marker}=(function(){var s=document.createElement("script");` +
      `s.src=new URL(${relative},document.baseURI).href;return s;})();`;
    // Turbopack se identifikuje elementem skriptu; jako řetězec s cestou k chunku
    // vyjde stejný klíč, jaký používají závislosti mezi chunky.
    const chunkPath = JSON.stringify(src.replace(/^\/_next\//, ''));
    const code = escapeScript(readAsset(src).toString('utf8'))
      .split(CURRENT_SCRIPT_ARG)
      .join(chunkPath)
      .split('document.currentScript')
      .join(marker);
    return `<script>${preamble}${code}</script>`;
  });

  // 3) Odkazy, které bez serveru nedávají smysl (manifest, preloady, ikony)
  html = html.replace(/<link\b[^>]*>/g, (tag) => {
    const isServerBound = /rel="(preload|prefetch|manifest|icon|apple-touch-icon)"/.test(tag);
    const pointsToNext = /href="\/_next\//.test(tag);
    return isServerBound || pointsToNext ? '' : tag;
  });

  // 4) Obrázky hry → mapa data URI, kterou si aplikace vyzvedne přes resolveAsset()
  const catalog = JSON.parse(readAsset('/cards/index.json').toString('utf8')) as string[];
  const assets = Object.fromEntries(catalog.map((path) => [path, dataUri(path)]));
  // Obálky balíčků jsou v HTML jako obyčejné cesty – ty stačí nahradit přímo.
  // Musí to proběhnout dřív, než se vloží mapa, jinak by se přepsaly i její klíče.
  for (const path of catalog) html = html.split(`"${path}"`).join(`"${assets[path]}"`);

  const assetScript = `<script>window.__DREAMTALE_ASSETS__=${escapeScript(JSON.stringify(assets))}</script>`;
  html = html.replace('</head>', `${assetScript}</head>`);
  const inlined = catalog.length;

  // 5) Runtime Next.js si z RSC payloadu doplňuje styly, fonty a ikony.
  //    Nahradíme je data URI, aby jednosouborová verze nikam nesahala.
  const runtimeAssets = new Set<string>();
  for (const match of html.matchAll(/\/_next\/static\/media\/[\w.-]+\.(?:woff2?|png|svg)/g)) {
    runtimeAssets.add(match[0]);
  }
  for (const path of runtimeAssets) html = html.split(path).join(dataUri(path));

  // Styly už jsou v <style>; runtime na ně jen odkazuje, takže odkaz vede „naprázdno“.
  const emptyStylesheet = 'data:text/css;base64,';
  for (const match of [...html.matchAll(/\/_next\/static\/chunks\/[\w.-]+\.css/g)].map((m) => m[0])) {
    html = html.split(match).join(emptyStylesheet);
  }

  for (const icon of ['/icons/icon.svg', '/icons/apple-touch-icon.png']) {
    if (existsSync(join(OUT_DIR, icon.slice(1)))) html = html.split(icon).join(dataUri(icon));
  }

  // Sdílený soubor se pozná podle názvu hry, ne podle celého titulku s podtitulem.
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${APP_NAME}</title>`);

  mkdirSync(DIST_DIR, { recursive: true });
  writeFileSync(DIST_FILE, html, 'utf8');

  const megabytes = (statSync(DIST_FILE).size / 1024 / 1024).toFixed(2);
  console.log(`Hotovo: dist/dreamtale.html (${megabytes} MB, ${inlined}/${catalog.length} obrázků vloženo)`);
}

main();
