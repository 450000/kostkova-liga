#!/usr/bin/env python3
"""Převede dodané ilustrace z cards-src na herní assety.

Vstup:  cards-src/CDO_###.png  (1024 × 1536)
Výstup: public/cards/<id>.webp        720 × 1080  – co hraje web
        .cards-small/<id>.webp        512 × 768   – pro jednosouborovou verzi
        public/cards/index.json       seznam pro service worker
        data/cards/manifest.ts        id, název, kategorie a barva karty

Mapování číslo → karta je v scripts/cards-map.tsv (číslo, id, název, kategorie);
řádek bez id znamená vyřazený duplicitní motiv.

Spuštění: python3 scripts/build-cards.py   (potřebuje Pillow)
"""
from pathlib import Path
from PIL import Image
import json

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / 'cards-src'
OUT = ROOT / 'public' / 'cards'
SMALL = ROOT / '.cards-small'
MAP = ROOT / 'scripts' / 'cards-map.tsv'

BIG = (720, 1080)
TINY = (512, 768)


def tint(im: Image.Image) -> str:
    """Dominantní barva karty – používá se jako podklad při načítání."""
    small = im.resize((1, 1), Image.LANCZOS).convert('RGB')
    r, g, b = small.getpixel((0, 0))
    return f'#{r:02X}{g:02X}{b:02X}'


def main() -> None:
    rows = []
    for line in MAP.read_text(encoding='utf-8').splitlines():
        if not line.strip() or line.startswith('#'):
            continue
        parts = line.split('\t')
        if len(parts) < 4 or not parts[1]:
            continue
        rows.append((int(parts[0]), parts[1], parts[2], parts[3]))

    OUT.mkdir(parents=True, exist_ok=True)
    SMALL.mkdir(parents=True, exist_ok=True)
    for old in list(OUT.glob('*.svg')) + list(OUT.glob('*.webp')):
        old.unlink()

    cards = []
    for number, card_id, name, category in rows:
        src = SRC / f'CDO_{number:03d}.png'
        im = Image.open(src).convert('RGB')
        im.resize(BIG, Image.LANCZOS).save(OUT / f'{card_id}.webp', 'WEBP', quality=72, method=6)
        im.resize(TINY, Image.LANCZOS).save(SMALL / f'{card_id}.webp', 'WEBP', quality=60, method=6)
        cards.append({'id': card_id, 'name': name, 'category': category, 'tint': tint(im)})

    assets = ['/manifest.webmanifest', '/icons/icon-192.png', '/icons/icon-512.png']
    assets += [f'/cards/{card["id"]}.webp' for card in cards]
    (OUT / 'index.json').write_text(json.dumps(assets, ensure_ascii=False, indent=0), encoding='utf-8')

    lines = [
        '// Generováno scriptem scripts/build-cards.py – needituj ručně.',
        "import type { CardCategory } from './types';",
        '',
        'export type CardMeta = {',
        '  id: string;',
        '  /** Český název – jen pro alt text, ve hře se nikdy nezobrazuje. */',
        '  name: string;',
        '  category: CardCategory;',
        '  /** Dominantní barva ilustrace, drží místo než se karta načte. */',
        '  tint: string;',
        '};',
        '',
        'export const CARD_META: CardMeta[] = [',
    ]
    for card in cards:
        lines.append(
            f"  {{ id: '{card['id']}', name: '{card['name']}', "
            f"category: '{card['category']}', tint: '{card['tint']}' }},"
        )
    lines += ['];', '']
    (ROOT / 'data' / 'cards' / 'manifest.ts').write_text('\n'.join(lines), encoding='utf-8')
    print(f'karet: {len(cards)}')


if __name__ == '__main__':
    main()
