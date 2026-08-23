# Sem patří hotové ilustrace karet

Do téhle složky nahraj vygenerované karty. Očekávaný stav:

- jeden soubor na kartu, `<id>.png` (nebo `.jpg` / `.webp`) podle `docs/karty-seznam.csv`
- svisle, poměr 2 : 3, ideálně 1024 × 1536 px, sRGB, bez průhlednosti
- bez textu, rámečku a zakulacených rohů

Nahrát se dají i po dávkách. Zpracování (převod na WebP, dopočet barvy,
přepnutí hry na nové karty) běží ze složky `cards-src` – originály tu
zůstávají, hra používá vygenerované soubory v `public/cards/`.
