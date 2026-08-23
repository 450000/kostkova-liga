# Zadání pro výrobu karet DREAMTALE

Tenhle soubor je všechno, co potřebuješ předat generátoru obrázků (Claude,
ChatGPT / GPT Image, Midjourney, Firefly…) a co potřebuju zpátky já, aby
karty šly rovnou nasadit do hry.

## A. Technické parametry (závazné)

| Parametr | Hodnota | Proč |
| --- | --- | --- |
| Poměr stran | **2 : 3** (svisle) | karta ve hře; upravím kartu z 0,659 na přesně 2/3 |
| Rozlišení | **1024 × 1536 px** (min. 896 × 1344) | karta má na retina displeji ~960 × 1440 px |
| Formát | **PNG** nebo **JPG** v plné kvalitě | do WebP si to převedu sám |
| Barevný prostor | sRGB | jinak barvy v prohlížeči ujedou |
| Ořez | ilustrace **na spad**, bez rámečku, bez bílých okrajů, bez zakulacených rohů | rohy zakulacuje sama hra |
| Bezpečná zóna | nic důležitého v krajních 6 % plochy (≈ 60 px) | hra kartu ořezává `object-cover` |
| Text | **žádný** – ani písmena, čísla, nápisy, loga, podpis, vodoznak | pravidlo hry: karta nesmí napovídat slovem |
| Motiv | **jeden** jasný, poznatelný i jako náhled 90 px | hráč si kartu musí zapamatovat |
| Název souboru | přesně `<id>.png` podle seznamu v části D | podle názvu se karta páruje s daty hry |
| Velikost souboru | je jedno (klidně 2 MB) | kompresi a zmenšení dělám já |

Nedělej: rámečky, popisky, mřížky více obrázků v jednom souboru, fotky,
3D rendery, poloprůhledné pozadí (žádné PNG s alfou – pozadí musí být plné).

## B. Prompt k vložení (anglicky, `{SUBJECT}` nahraď řádkem ze seznamu)

```text
Use the attached image ONLY as a style reference, never as content.

Create one original illustration in exactly that style: hand-painted digital
storybook illustration, visible soft brush texture, warm cinematic lighting,
clear readable shapes, gentle dark outlines, rich but slightly muted palette,
fine paper grain, shallow depth of field with a softly blurred background.

SUBJECT: {SUBJECT}

Composition: vertical card, aspect ratio 2:3. Full-bleed scene from edge to
edge. One single clear subject, centred, filling 60-75 % of the frame.
Simple, uncluttered background that supports the subject. Everything important
stays inside the central 88 % of the frame (nothing important within 6 % of any
edge). The subject must stay recognisable when the picture is shrunk to
thumbnail size.

Must NOT contain: any text, letters, numbers, signs, logos, watermark,
signature, frame, border, white margins, rounded corners, collage, grid,
multiple panels, photorealism, 3D render. Family friendly, no brands.

Output: 1024 x 1536 px PNG, sRGB.
```

**Negative prompt** (pokud to nástroj má):

```text
text, letters, numbers, words, watermark, signature, logo, frame, border, white margin, rounded corners, collage, grid, multiple panels, photo, photorealistic, 3d render, deformed hands, extra limbs, blurry subject, nsfw
```

**Midjourney varianta** – styl řeš přes `--sref` na první schválenou kartu:

```text
{SUBJECT}, hand-painted digital storybook illustration, soft brush texture,
warm cinematic light, clean readable shapes, gentle outlines, muted rich palette,
single centred subject, simple blurred background, full bleed
--ar 2:3 --style raw --sref <URL první schválené karty> --sw 120
--no text, letters, numbers, watermark, signature, frame, border, collage
```

## C. Postup, aby byla sada jednotná

1. Vygeneruj **jednu** kartu (doporučuju `socha-svobody` – má krajinu, stavbu i vodu).
2. Až se ti líbí, používej ji dál jako **stylovou referenci** (příloha / `--sref`)
   a blok stylu z části B měň **jen** v řádku `SUBJECT:`. Nic jiného nepřepisuj.
3. Generuj po dávkách ~20 karet, po každé dávce se koukni, jestli se styl nerozjel
   (barvy, tloušťka obrysu, míra detailu). Když ano, vrať se k referenci z bodu 2.
4. Karty ze stejné kategorie dělej za sebou – snáz udržíš stejnou paletu.
5. U čtyř karet je motiv „textový“, tak jsem ho přepsal na obrazový:
   `hollywood` (reflektory + červený koberec místo nápisu), `jednicka`
   (velká červená hvězda v sešitě), `spatna-znamka` (červeně poznámkovaný test),
   `seznam-ukolu` (odškrtaná políčka bez písmen). Kdyby generátor přesto písmena
   přidal, karta se dá použít jen když jdou přemalovat.

## D. Seznam všech 190 karet

Sloupec `soubor` je **povinný název**. Sloupec `SUBJECT` vlož do promptu.
Strojově čitelná verze: `docs/karty-seznam.csv`.

| # | soubor | česky | kategorie | SUBJECT (do promptu) |
| --- | --- | --- | --- | --- |
| 1 | `socha-svobody.png` | Socha svobody | places | the Statue of Liberty above the bay, city skyline behind her |
| 2 | `sushi-mistr.png` | Sushi mistr | people | a sushi chef with a headband placing nigiri on a plate at his counter |
| 3 | `flamenco.png` | Flamenco | people | a flamenco dancer in a red ruffled dress mid-spin |
| 4 | `balony.png` | Horkovzdušné balóny | adventure | several hot-air balloons drifting over morning hills |
| 5 | `vetrny-mlyn.png` | Větrný mlýn | places | an old windmill on a green hill, sails turning |
| 6 | `maly-vedec.png` | Malý vědec | people | a child scientist in goggles watching a bubbling flask |
| 7 | `drak-hory.png` | Drak nad horami | fantasy | a dragon flying above mountain peaks |
| 8 | `potapec.png` | Potápěč | adventure | a scuba diver among coral and tropical fish |
| 9 | `cirkus.png` | Cirkusový stan | places | a striped circus tent with flags at dusk |
| 10 | `rytir.png` | Rytíř | people | a knight in shining armour with shield and sword |
| 11 | `indian.png` | Indián | people | a Native American man in traditional feathered regalia by a campfire |
| 12 | `stonehenge.png` | Stonehenge | places | the Stonehenge stone circle at sunrise |
| 13 | `babicka.png` | Babička s vnukem | family | a grandmother reading a book to her grandchild in an armchair |
| 14 | `detektiv.png` | Detektiv | people | a detective in a trench coat and hat with a magnifying glass |
| 15 | `katedrala.png` | Katedrála | places | a gothic cathedral with a rose window seen from the square |
| 16 | `balonky.png` | Kluk s balónky | feelings | a happy boy holding a bunch of colourful balloons, looking up |
| 17 | `piratska-jeskyne.png` | Pirátská jeskyně | fantasy | a pirate cave with a small boat and treasure chests |
| 18 | `sakura.png` | Rozkvetlá třešeň | nature | a blooming cherry tree with petals floating in the air |
| 19 | `tucnak-kra.png` | Tučňák na kře | animals | a penguin standing on a small ice floe |
| 20 | `rover.png` | Vozítko na Marsu | adventure | a Mars rover on red rocky ground |
| 21 | `carodejka.png` | Čarodějka | fantasy | a witch in a pointed hat stirring a bubbling cauldron |
| 22 | `moai.png` | Sochy Moai | places | the Moai stone heads on a grassy slope |
| 23 | `potopene-mesto.png` | Potopené město | fantasy | a sunken city under the sea, fish swimming among columns |
| 24 | `letajici-stroj.png` | Létající stroj | adventure | a whimsical wooden flying machine with flapping wings above clouds |
| 25 | `saxofonista.png` | Saxofonista | people | a saxophone player under a street lamp at night |
| 26 | `majak-boure.png` | Maják v bouři | places | a lighthouse struck by stormy waves |
| 27 | `baletka.png` | Baletka | people | a ballerina on pointe in a spotlight |
| 28 | `ledni-medved.png` | Lední medvěd | animals | a polar bear walking on ice |
| 29 | `hvezdarna.png` | Hvězdárna | places | an observatory dome open to a starry sky |
| 30 | `bojovnik.png` | Bojovník | people | a martial arts fighter mid kick |
| 31 | `piratska-lod.png` | Pirátská loď | adventure | a pirate ship with black sails on the open sea |
| 32 | `svatba.png` | Svatba | family | a bride and groom holding hands under an arch of flowers |
| 33 | `kouzelnik.png` | Kouzelník | fantasy | a magician pulling a rabbit out of a top hat |
| 34 | `basket-vozik.png` | Basketbal na vozíku | people | a wheelchair basketball player shooting the ball |
| 35 | `ponorka.png` | Ponorka | adventure | a yellow submarine deep underwater |
| 36 | `samuraj.png` | Samuraj | people | a samurai with a katana under falling leaves |
| 37 | `domek-na-strome.png` | Domek na stromě | places | a wooden treehouse with a rope ladder |
| 38 | `start-rakety.png` | Start rakety | adventure | a rocket lifting off in smoke and flame |
| 39 | `velbloud.png` | Velbloud v poušti | animals | a camel on a desert dune |
| 40 | `kovar.png` | Kovář | people | a blacksmith hammering glowing iron at the forge |
| 41 | `vanoce.png` | Vánoce u krbu | family | a decorated Christmas tree by a fireplace with presents |
| 42 | `krabice-hra.png` | Hra v krabici | family | children playing a board game on the floor |
| 43 | `papousek.png` | Papoušek v džungli | animals | a colourful parrot on a jungle branch |
| 44 | `brankar.png` | Hokejový brankář | people | an ice hockey goalie catching a puck |
| 45 | `gondola.png` | Gondola | places | a gondola on a Venetian canal |
| 46 | `morska-panna.png` | Mořská panna | fantasy | a mermaid sitting on a rock above the waves |
| 47 | `parni-vlak.png` | Parní vlak | adventure | a steam train crossing a stone viaduct |
| 48 | `dalekohled-noc.png` | Noc s dalekohledem | adventure | a child at a telescope under a starry night sky |
| 49 | `veterinarka.png` | Veterinářka | people | a vet examining a puppy |
| 50 | `snezitko.png` | Sněžítko | fantasy | a snow globe with a tiny house inside |
| 51 | `hrad-z-pisku.png` | Hrad z písku | nature | a sandcastle on the beach with a small flag |
| 52 | `obri-zelva.png` | Obří želva | animals | a giant tortoise walking on grass |
| 53 | `mayska-pyramida.png` | Mayská pyramida | places | a Mayan step pyramid in the jungle |
| 54 | `benatska-maska.png` | Benátská maska | people | a person wearing an ornate Venetian carnival mask |
| 55 | `cteni-v-kresle.png` | Čtení v křesle | everyday | someone curled up in an armchair reading a book |
| 56 | `muchomurka.png` | Domek z muchomůrky | fantasy | a tiny house built inside a red fly-agaric mushroom |
| 57 | `hodinar.png` | Hodinář | people | a watchmaker with an eye loupe repairing a pocket watch |
| 58 | `ohnostroj.png` | Ohňostroj | places | fireworks bursting over a night town |
| 59 | `truhla-pokladu.png` | Truhla pokladu | fantasy | an open treasure chest full of gold coins |
| 60 | `yeti.png` | Yeti | fantasy | a shaggy white yeti in a snowy forest |
| 61 | `malirka.png` | Malířka | people | a woman painting at an easel |
| 62 | `provazochodec.png` | Provazochodec | people | a tightrope walker high in the air with a balancing pole |
| 63 | `vcelar.png` | Včelař | people | a beekeeper in a veil holding a honeycomb frame |
| 64 | `horska-chata.png` | Horská chata | places | a mountain cabin in the snow with a lit window |
| 65 | `kral.png` | Král na trůně | fantasy | a king on a throne with a crown and sceptre |
| 66 | `mimozemstan.png` | Setkání s mimozemšťanem | fantasy | a friendly little alien beside a flying saucer at night |
| 67 | `skotsky-byk.png` | Skotský býk | animals | a shaggy highland bull in a meadow |
| 68 | `chobotnice-hlubina.png` | Chobotnice | animals | an octopus in the deep sea |
| 69 | `cesta-pousti.png` | Cesta pouští | adventure | a caravan crossing desert dunes at sunset |
| 70 | `pod-hvezdami.png` | Pod hvězdami | family | a family lying on a blanket watching the stars |
| 71 | `santa.png` | Santa | fantasy | Santa Claus with his sack on a snowy roof |
| 72 | `pohadkovy-zamek.png` | Pohádkový zámek | places | a fairy-tale castle with tall towers on a cliff |
| 73 | `podzemi.png` | Průzkum podzemí | adventure | cavers exploring an underground cave with lamps |
| 74 | `rybar.png` | Rybář na molu | people | a fisherman sitting on a wooden pier at dawn |
| 75 | `letajici-koberec.png` | Létající koberec | fantasy | a flying carpet above desert domes |
| 76 | `bonsaj.png` | Bonsaj | nature | a bonsai tree in a ceramic pot |
| 77 | `lano-nad-kanonem.png` | Lano nad kaňonem | adventure | a rope bridge over a deep canyon |
| 78 | `morska-zelva.png` | Mořská želva | animals | a sea turtle gliding through clear water |
| 79 | `rybareni.png` | Rybaření | everyday | a child fishing from a river bank |
| 80 | `robot-z-krabice.png` | Robot z krabice | family | a child wearing a cardboard-box robot costume |
| 81 | `svetlusky.png` | Světlušky | nature | fireflies glowing in a dark meadow |
| 82 | `sochar.png` | Sochař | people | a sculptor chiselling a stone bust |
| 83 | `stavitel.png` | Stavitel z kostek | everyday | a child building a tall tower of wooden blocks |
| 84 | `jeskyne-lucerna.png` | Jeskyně s lucernou | adventure | a lantern lighting a narrow cave passage |
| 85 | `superhrdina.png` | Superhrdina | fantasy | a child in a homemade superhero cape on a rooftop |
| 86 | `peceni.png` | Pečení dortu | family | baking a cake together in a kitchen |
| 87 | `drevena-loutka.png` | Dřevěná loutka | fantasy | a wooden marionette on strings |
| 88 | `houslista.png` | Houslista | people | a violinist playing on a stage |
| 89 | `klid-v-sede.png` | Klid v sedě | feelings | a person sitting cross-legged with closed eyes, calm |
| 90 | `puzzle-vecer.png` | Puzzle | everyday | hands finishing a jigsaw puzzle on a table |
| 91 | `hollywood.png` | Hollywood | places | spotlights sweeping over a red carpet with old film cameras |
| 92 | `letajici-zamek.png` | Létající zámek | fantasy | a castle floating in the sky among clouds |
| 93 | `vodopad-dzungle.png` | Vodopád v džungli | nature | a jungle waterfall falling into a turquoise pool |
| 94 | `papirovy-drak.png` | Papírový drak | adventure | a child flying a kite on a windy hill |
| 95 | `klavir.png` | Klavír | people | a pianist at a grand piano |
| 96 | `majak-ostrov.png` | Maják na ostrově | places | a lighthouse on a small rocky island |
| 97 | `hrncirsky-kruh.png` | Hrnčířský kruh | everyday | hands shaping clay on a potter's wheel |
| 98 | `ustarany.png` | Ustaraný | feelings | a worried boy with both hands covering his mouth, wide eyes |
| 99 | `spadla-zmrzlina.png` | Spadlá zmrzlina | feelings | a dropped ice cream cone on the pavement, a sad child above it |
| 100 | `hadka.png` | Hádka | feelings | two children sitting back to back after an argument |
| 101 | `lampion-prani.png` | Lampion přání | feelings | releasing a glowing paper lantern into the night sky |
| 102 | `zlomene-srdce.png` | Zlomené srdce | feelings | a paper heart torn in two |
| 103 | `odrene-koleno.png` | Odřené koleno | everyday | a child with a plaster on a scraped knee |
| 104 | `zmeskany-autobus.png` | Zmeškaný autobus | everyday | someone running after a departing bus |
| 105 | `domaci-ukol.png` | Domácí úkol | school | a child doing homework at a desk |
| 106 | `pod-dekami.png` | Pod dekami | feelings | a child hiding inside a blanket fort |
| 107 | `zamotana-sluchatka.png` | Zamotaná sluchátka | everyday | badly tangled earphones held in a hand |
| 108 | `kolo.png` | Kolo | everyday | a bicycle leaning against a fence |
| 109 | `tajemne-dvere.png` | Tajemné dveře | fantasy | a mysterious glowing door in a dark wall |
| 110 | `rozbita-vaza.png` | Rozbitá váza | feelings | a broken vase in pieces on the floor |
| 111 | `kos-pradla.png` | Koš s prádlem | everyday | an overflowing laundry basket |
| 112 | `kocka-akvarium.png` | Kočka u akvária | animals | a cat staring at a fish tank |
| 113 | `sluchatka-hudba.png` | Hudba do sluchátek | everyday | a teenager with big headphones lost in music |
| 114 | `odchod-s-batohem.png` | Odchod s batohem | feelings | a child walking away down a path with a backpack |
| 115 | `promin.png` | Promiň | feelings | a child offering a picked flower as an apology |
| 116 | `darek.png` | Dárek | family | hands holding a wrapped gift with a ribbon |
| 117 | `objeti.png` | Objetí | family | two people hugging warmly |
| 118 | `budik.png` | Budík | everyday | an alarm clock ringing on a bedside table |
| 119 | `uceni-do-noci.png` | Učení do noci | school | studying late at night by a desk lamp |
| 120 | `houpaci-sit.png` | Houpací síť | everyday | a hammock between two trees |
| 121 | `strach-ve-tme.png` | Strach ve tmě | feelings | a child in bed frightened by a shadow in the dark room |
| 122 | `rozsypane-papiry.png` | Rozsypané papíry | school | loose papers scattered across the floor |
| 123 | `tajemstvi.png` | Tajemství | family | two children whispering a secret |
| 124 | `trofej.png` | Trofej | school | a golden trophy held up high |
| 125 | `spatna-znamka.png` | Špatná známka | school | a downcast child looking at a test paper marked in red |
| 126 | `pozorovani.png` | Pozorování dalekohledem | everyday | watching birds through binoculars |
| 127 | `uschla-rostlina.png` | Uschlá rostlina | nature | a wilted plant in a pot |
| 128 | `v-desti.png` | V dešti | everyday | walking in the rain under an umbrella |
| 129 | `telefon-zprava.png` | Zpráva v telefonu | everyday | a phone glowing in a hand with a message bubble on screen |
| 130 | `seznam-ukolu.png` | Seznam úkolů | school | a checklist on a clipboard with ticked boxes |
| 131 | `nerozhodnost.png` | Nerozhodnost | feelings | a child standing at a fork in the path, unsure which way to go |
| 132 | `tablet-ve-tme.png` | Světlo displeje | everyday | a face lit by a tablet screen in a dark room |
| 133 | `premysleni.png` | Přemýšlení | feelings | a person thinking with a hand under the chin |
| 134 | `odneseny-destnik.png` | Odnesený deštník | everyday | an umbrella blown inside out by the wind |
| 135 | `nocni-obloha.png` | Noční obloha | nature | the Milky Way over dark hills |
| 136 | `pokoj-s-plakaty.png` | Vlastní pokoj | everyday | a teenager's room with posters and fairy lights |
| 137 | `kocka-a-obrazovka.png` | Kočka a obrazovka | animals | a cat sitting on a laptop keyboard |
| 138 | `vyhled-na-hory.png` | Výhled na hory | nature | a hiker looking out over a mountain panorama |
| 139 | `sazeni.png` | Sázení | nature | hands planting a seedling in dark soil |
| 140 | `svicka-na-dortu.png` | Svíčka na dortu | family | a birthday cake with one lit candle |
| 141 | `bludiste.png` | Bludiště | adventure | a hedge maze seen from above |
| 142 | `okno-v-noci.png` | Okno v noci | feelings | a person standing at a window at night, looking out |
| 143 | `rodinna-pizza.png` | Rodinná pizza | family | a family sharing a pizza at the table |
| 144 | `sbirani-minci.png` | Sbírání mincí | everyday | coins collected in a glass jar |
| 145 | `fotoaparat.png` | Fotoaparát | everyday | an old camera on a leather strap |
| 146 | `lahev-s-dopisem.png` | Láhev s dopisem | adventure | a bottle with a rolled-up note washed up on the shore |
| 147 | `baleni-batohu.png` | Balení batohu | everyday | packing a backpack for a trip |
| 148 | `paleta-barev.png` | Paleta barev | everyday | a painter's palette with fresh paint and brushes |
| 149 | `padajici-listi.png` | Padající listí | nature | autumn leaves falling in a park |
| 150 | `lupa-badatel.png` | Badatel s lupou | school | a child examining a leaf through a magnifying glass |
| 151 | `dilna-s-hrackami.png` | Dílna s hračkami | family | a workshop full of handmade wooden toys |
| 152 | `snehulak.png` | Sněhulák | nature | a snowman with a scarf and carrot nose |
| 153 | `penezenka.png` | Peněženka | everyday | an open wallet with a few coins |
| 154 | `trezor.png` | Trezor | fantasy | a heavy steel safe with a dial |
| 155 | `cekani-na-tramvaj.png` | Čekání na tramvaj | everyday | waiting at a tram stop in the evening |
| 156 | `velka-vlna.png` | Velká vlna | nature | a huge curling ocean wave with white foam |
| 157 | `sdileni.png` | Sdílení | family | two children sharing one sandwich |
| 158 | `nuda.png` | Nuda | feelings | a bored child lying on the floor staring at the ceiling |
| 159 | `tricko.png` | Tričko | everyday | a folded t-shirt lying on a bed |
| 160 | `horska-draha.png` | Horská dráha | adventure | a roller coaster loop with a cart racing through it |
| 161 | `astronaut.png` | Astronaut | adventure | an astronaut floating above the Earth |
| 162 | `ostrov-s-palmou.png` | Ostrov s palmou | nature | a tiny island with a single palm tree |
| 163 | `pocitani-minci.png` | Počítání mincí | everyday | counting coins on a table |
| 164 | `nastenka-s-fotkami.png` | Nástěnka s fotkami | school | a pin board covered with photographs |
| 165 | `bryle-a-kniha.png` | Brýle a kniha | everyday | glasses resting on an open book |
| 166 | `promoce.png` | Promoce | school | a graduate throwing a cap in the air |
| 167 | `krabice-prekvapeni.png` | Krabice s překvapením | family | a box bursting open with light and confetti |
| 168 | `skok-do-louze.png` | Skok do louže | everyday | a child in rubber boots jumping into a puddle |
| 169 | `kresleni-hvezd.png` | Kreslení hvězd | school | a child drawing stars on paper |
| 170 | `skok-pres-potok.png` | Skok přes potok | adventure | leaping across a forest stream |
| 171 | `duha.png` | Duha | nature | a rainbow over a wet meadow |
| 172 | `uletly-balonek.png` | Uletlý balónek | feelings | a red balloon escaping into the sky, a child watching it |
| 173 | `napad.png` | Nápad | feelings | a child with a glowing light bulb above the head |
| 174 | `vahy.png` | Váhy | school | an old brass balance scale |
| 175 | `jednicka.png` | Jednička | school | a school exercise book with a big red star drawn on it |
| 176 | `zamceno.png` | Zamčeno | everyday | a padlock on a closed door |
| 177 | `prvni-snih.png` | První sníh | nature | the first snowflakes falling on a quiet street |
| 178 | `ranni-vstavani.png` | Ranní vstávání | everyday | stretching and getting up in the morning light |
| 179 | `cesta-do-skoly.png` | Cesta do školy | school | children walking to school with backpacks |
| 180 | `cisteni-zubu.png` | Čištění zubů | everyday | brushing teeth in front of a mirror |
| 181 | `snidane.png` | Snídaně | family | a breakfast table with cocoa and bread |
| 182 | `uklid.png` | Úklid | everyday | tidying up a room with a broom |
| 183 | `ztracena-hracka.png` | Ztracená hračka | feelings | a lost teddy bear lying on a path |
| 184 | `nachlazeni.png` | Nachlazení | everyday | a child in bed with a blanket, tea and a red nose |
| 185 | `prochazka-se-psem.png` | Procházka se psem | animals | walking a dog in a park |
| 186 | `kamaradi-na-lavicce.png` | Kamarádi na lavičce | family | two friends sitting together on a bench |
| 187 | `deka-a-baterka.png` | Deka a baterka | family | a blanket den lit from inside by a torch |
| 188 | `nakupovani.png` | Nakupování | everyday | pushing a shopping trolley through a store |
| 189 | `prvni-den-ve-skole.png` | První den ve škole | school | a child standing in a classroom doorway on the first school day |
| 190 | `spolecna-fotka.png` | Společná fotka | family | a family posing together for a photo |

## E. Jak mi hotové karty předat

Nejlepší je ZIP se soubory pojmenovanými podle seznamu. Můžeš mi ho
poslat sem do chatu, nahrát na Disk, nebo commitnout do repa do složky
`dreamtale/public/cards-src/`. Nemusí to být najednou – klidně po dávkách,
hra mezitím jede na stávajících kartách.

Co udělám já, až dorazí:

1. Zkontroluju rozměry, poměr a že nikde není text.
2. Převedu na WebP ve dvou velikostech (720 × 1080 pro web, 512 × 768 pro
   jednosouborovou verzi) a pohlídám limit 16 MB pro sdílený odkaz –
   vychází to na ~45 kB na kartu, což WebP v pohodě zvládne.
3. Z každé karty spočítám dominantní barvu (`tint`, používá se při načítání).
4. Přepnu `IMAGE_EXTENSION` v `data/catalog.ts` na `webp`, upravím poměr karty
   na 2:3, přegeneruju seznam assetů pro offline režim a smažu staré SVG.
5. Projedu QA scénář, přestavím jednosouborovou verzi a pošlu nový odkaz.

Když dodáš jen část karet, zbytek zůstane ve stávajícím stylu a hra půjde
hrát dál – sada se dá vyměňovat po kusech.
