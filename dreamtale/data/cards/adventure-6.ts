import { P, SKIN, HAIR } from './palette';
import { sky, ground, water, hills, stars, cloud, pine, sparkle, ink, W, H } from './scene';
import { person } from './people';
import { prop } from './props';
import type { Card } from './types';

export const adventure6: Card[] = [
  {
    id: 'lano-nad-kanonem', name: 'Lano nad kaňonem', category: 'adventure', tint: P.rust,
    art: `${sky('dusk')}
<path d="M0 168 h72 v${H - 168} H0 Z" fill="${P.rust}" ${ink(4)}/>
<path d="M168 148 h72 v${H - 148} h-72 Z" fill="${P.rust}" ${ink(4)}/>
<path d="M72 196 q48 24 96 -20" fill="none" ${ink(5)}/>
${person({ x: 120, y: 200, s: 1.15, skin: SKIN[1], hair: HAIR[0], shirt: P.coral, pants: P.navy, mood: 'worried', pose: 'armsOut' })}
<path d="M0 330 q30 -14 60 0 t60 0 t60 0 t60 0 V${H} H0 Z" fill="${P.soilDark}" opacity="0.7"/>`,
  },
  {
    id: 'morska-zelva', name: 'Mořská želva', category: 'animals', tint: P.sage,
    art: `${sky('sea')}
<g fill="${P.seaFoam}" opacity="0.4"><circle cx="42" cy="72" r="7"/><circle cx="196" cy="112" r="6"/></g>
${prop('turtle', 118, 196, 1.2)}
<path d="M0 302 q30 -22 60 0 t60 0 t60 0 t60 0 V${H} H0 Z" fill="${P.seaDeep}" ${ink(4)}/>
${prop('seashell', 52, 328, 0.24)}`,
  },
  {
    id: 'rybareni', name: 'Rybaření', category: 'everyday', tint: P.teal,
    art: `${sky('day')}${cloud(184, 60, 0.65)}
${water(252, P.teal)}
<path d="M0 252 q40 -18 80 -6 V${H} H0 Z" fill="${P.grass}" ${ink(4)}/>
${person({ x: 58, y: 292, s: 1.35, skin: SKIN[2], hair: HAIR[1], shirt: P.yellow, pants: P.navy, mood: 'calm', pose: 'hold' })}
<path d="M86 250 L188 214" fill="none" ${ink(4)}/>
<path d="M188 214 v54" fill="none" ${ink(3)}/>
<circle cx="188" cy="270" r="7" fill="${P.coral}" ${ink(3)}/>
${prop('fish', 200, 316, 0.24)}`,
  },
  {
    id: 'robot-z-krabice', name: 'Robot z krabice', category: 'family', tint: P.sand,
    art: `${sky('warm')}
<rect x="0" y="292" width="${W}" height="${H - 292}" fill="${P.floor}"/><path d="M0 292 H${W}" ${ink(4)}/>
${person({ x: 120, y: 314, s: 1.5, skin: SKIN[0], hair: HAIR[1], shirt: P.sand, pants: P.navy, mood: 'excited', pose: 'armsOut', hairStyle: 'hat',
  extras: `<rect x="-30" y="-134" width="60" height="56" rx="6" fill="${P.sand}" stroke="${P.ink}" stroke-width="3.6"/>
<rect x="-18" y="-118" width="14" height="12" rx="4" fill="${P.ink}"/><rect x="4" y="-118" width="14" height="12" rx="4" fill="${P.ink}"/>
<path d="M-12 -94 h24" stroke="${P.ink}" stroke-width="3.4"/>
<path d="M0 -134 v-14" stroke="${P.ink}" stroke-width="3.4"/><circle cx="0" cy="-152" r="7" fill="${P.coral}" stroke="${P.ink}" stroke-width="3"/>
<rect x="-26" y="-64" width="52" height="34" rx="5" fill="${P.paper}" stroke="${P.ink}" stroke-width="3.4"/>` })}`,
  },
  {
    id: 'svetlusky', name: 'Světlušky', category: 'nature', tint: P.green,
    art: `${sky('night')}${stars(8)}
${pine(34, 300, 0.9)}${pine(206, 306, 0.8)}
${ground(304, '#20402E')}
${person({ x: 118, y: 322, s: 1.35, skin: SKIN[1], hair: HAIR[1], shirt: P.teal, pants: P.navy, mood: 'excited', pose: 'armsUp' })}
<g fill="${P.yellow}"><circle cx="70" cy="182" r="6"/><circle cx="164" cy="150" r="7"/><circle cx="196" cy="216" r="5"/>
<circle cx="52" cy="252" r="5"/><circle cx="142" cy="204" r="5"/><circle cx="96" cy="126" r="4"/></g>
<g fill="${P.yellow}" opacity="0.25"><circle cx="70" cy="182" r="16"/><circle cx="164" cy="150" r="18"/><circle cx="196" cy="216" r="14"/></g>`,
  },
  {
    id: 'sochar', name: 'Sochař', category: 'people', tint: P.stone,
    art: `<rect width="${W}" height="${H}" fill="${P.wall}"/>
<rect x="0" y="290" width="${W}" height="${H - 290}" fill="${P.floor}"/><path d="M0 290 H${W}" ${ink(4)}/>
<rect x="140" y="252" width="72" height="40" rx="5" fill="${P.wood}" ${ink(4)}/>
<path d="M158 252 V190 q0 -22 18 -22 q18 0 18 22 v62 Z" fill="${P.stone}" ${ink(4)}/>
<circle cx="176" cy="152" r="22" fill="${P.stone}" ${ink(4)}/>
${person({ x: 78, y: 318, s: 1.5, skin: SKIN[2], hair: HAIR[0], shirt: P.paper, pants: P.slate, mood: 'calm', pose: 'point' })}
${prop('hammer', 122, 236, 0.26)}
<g fill="${P.stone}"><circle cx="130" cy="298" r="5"/><circle cx="112" cy="306" r="4"/></g>`,
  },
  {
    id: 'stavitel', name: 'Stavitel z kostek', category: 'everyday', tint: P.coral,
    art: `${sky('warm')}
<rect x="0" y="286" width="${W}" height="${H - 286}" fill="${P.floor}"/><path d="M0 286 H${W}" ${ink(4)}/>
${person({ x: 84, y: 300, s: 1.35, skin: SKIN[0], hair: HAIR[1], shirt: P.teal, pants: P.navy, mood: 'happy', pose: 'sit' })}
<g ${ink(3.6)}>
<rect x="140" y="252" width="36" height="34" rx="5" fill="${P.coral}"/>
<rect x="178" y="252" width="36" height="34" rx="5" fill="${P.blue}"/>
<rect x="158" y="216" width="36" height="34" rx="5" fill="${P.yellow}"/>
<rect x="176" y="180" width="36" height="34" rx="5" fill="${P.green}"/></g>`,
  },
  {
    id: 'jeskyne-lucerna', name: 'Jeskyně s lucernou', category: 'adventure', tint: P.navy,
    art: `<rect width="${W}" height="${H}" fill="#1E2436"/>
<path d="M0 76 q46 30 92 6 q46 -24 88 8 q30 22 60 -6 V0 H0 Z" fill="${P.slate}" ${ink(4)}/>
<path d="M0 306 q46 -26 92 -6 q46 20 88 -8 q30 -20 60 6 V${H} H0 Z" fill="${P.slate}" ${ink(4)}/>
<circle cx="146" cy="212" r="80" fill="${P.yellow}" opacity="0.18"/>
${person({ x: 100, y: 312, s: 1.5, skin: SKIN[1], hair: HAIR[0], shirt: P.blue, pants: P.navy, mood: 'surprised', pose: 'hold' })}
${prop('lantern', 152, 250, 0.34)}
${sparkle(196, 178, 9, P.seaFoam)}${sparkle(56, 148, 7, P.seaFoam)}`,
  },
  {
    id: 'superhrdina', name: 'Superhrdina', category: 'fantasy', tint: P.blue,
    art: `${sky('day')}${cloud(46, 60, 0.75)}${cloud(196, 118, 0.6)}
${ground(310, P.grass)}
${person({ x: 120, y: 316, s: 1.7, skin: SKIN[1], hair: HAIR[0], shirt: P.blue, pants: P.blue, mood: 'proud', pose: 'armsUp',
  extras: `<path d="M-22 -74 q-34 30 -26 66 q22 -6 30 -30 Z" fill="${P.red}" stroke="${P.ink}" stroke-width="3.4"/>
<path d="M22 -74 q34 30 26 66 q-22 -6 -30 -30 Z" fill="${P.red}" stroke="${P.ink}" stroke-width="3.4"/>
<path d="M-14 -60 l14 -14 l14 14 l-14 16 Z" fill="${P.yellow}" stroke="${P.ink}" stroke-width="3"/>` })}
${sparkle(56, 160, 10, P.yellow)}`,
  },
  {
    id: 'peceni', name: 'Pečení dortu', category: 'family', tint: P.pink,
    art: `<rect width="${W}" height="${H}" fill="${P.wall}"/>
<rect x="0" y="272" width="${W}" height="${H - 272}" fill="${P.paper}"/><path d="M0 272 H${W}" ${ink(4)}/>
<rect x="26" y="272" width="188" height="18" rx="6" fill="${P.wood}" ${ink(4)}/>
${prop('cake', 168, 232, 0.44)}
${person({ x: 92, y: 272, s: 1.5, skin: SKIN[0], hair: HAIR[1], shirt: P.pink, pants: P.white, mood: 'excited', pose: 'hold', hairStyle: 'bun',
  extras: `<path d="M-24 -34 h48 v14 h-48 Z" fill="${P.white}" stroke="${P.ink}" stroke-width="3"/>` })}
<g fill="${P.cream}"><circle cx="48" cy="184" r="6"/><circle cx="196" cy="160" r="5"/></g>`,
  },
  {
    id: 'drevena-loutka', name: 'Dřevěná loutka', category: 'fantasy', tint: P.wood,
    art: `${sky('warm')}
<rect x="0" y="292" width="${W}" height="${H - 292}" fill="${P.floor}"/><path d="M0 292 H${W}" ${ink(4)}/>
<path d="M62 0 v96 M120 0 v78 M178 0 v96" fill="none" ${ink(3)}/>
${person({ x: 120, y: 316, s: 1.55, skin: P.sand, hair: P.wood, shirt: P.wood, pants: P.woodDark, mood: 'happy', pose: 'armsOut',
  extras: `<path d="M-21 -52 h42 M-8 -84 v10 M8 -84 v10" stroke="${P.ink}" stroke-width="2.6"/>` })}
<path d="M62 96 L96 178 M178 96 L146 178" fill="none" ${ink(3)}/>`,
  },
  {
    id: 'houslista', name: 'Houslista', category: 'people', tint: P.brown,
    art: `<rect width="${W}" height="${H}" fill="#33283C"/>
<circle cx="120" cy="150" r="80" fill="${P.yellow}" opacity="0.14"/>
<rect x="0" y="292" width="${W}" height="${H - 292}" fill="${P.wood}"/><path d="M0 292 H${W}" ${ink(4)}/>
${person({ x: 112, y: 318, s: 1.6, skin: SKIN[0], hair: HAIR[1], shirt: P.navy, pants: P.navy, mood: 'calm', pose: 'hold' })}
${prop('violin', 164, 240, 0.5)}
${sparkle(56, 168, 9, P.yellow)}${sparkle(196, 130, 7, P.yellow)}`,
  },
  {
    id: 'klid-v-sede', name: 'Klid v sedě', category: 'feelings', tint: P.sage,
    art: `${sky('cool')}
${ground(300, P.sage)}
${person({ x: 120, y: 306, s: 1.6, skin: SKIN[1], hair: HAIR[0], shirt: P.sage, pants: P.teal, mood: 'sleepy', pose: 'sit' })}
<g fill="none" stroke="${P.white}" stroke-width="4" opacity="0.7">
<circle cx="120" cy="196" r="54"/><circle cx="120" cy="196" r="76"/></g>
${sparkle(56, 128, 9, P.yellow)}${sparkle(190, 158, 7, P.yellow)}`,
  },
  {
    id: 'puzzle-vecer', name: 'Puzzle', category: 'everyday', tint: P.sage,
    art: `<rect width="${W}" height="${H}" fill="${P.wall}"/>
<rect x="0" y="276" width="${W}" height="${H - 276}" fill="${P.floor}"/><path d="M0 276 H${W}" ${ink(4)}/>
<rect x="26" y="276" width="188" height="16" rx="5" fill="${P.wood}" ${ink(4)}/>
${prop('puzzle', 168, 240, 0.44)}
${prop('puzzle', 62, 250, 0.3)}
${person({ x: 106, y: 276, s: 1.45, skin: SKIN[0], hair: HAIR[0], shirt: P.blue, pants: P.navy, mood: 'calm', pose: 'hold' })}
<circle cx="206" cy="118" r="18" fill="${P.yellow}" ${ink(3.6)}/>`,
  },
  {
    id: 'hollywood', name: 'Hollywood', category: 'places', tint: P.sand,
    art: `${sky('dusk')}
<path d="M-10 226 L46 160 L104 224 L160 152 L250 240 V${H} H-10 Z" fill="${P.hillDark}" ${ink(4)}/>
<g fill="${P.white}" ${ink(3.4)}>
<rect x="34" y="188" width="18" height="30" rx="3"/><rect x="58" y="180" width="18" height="30" rx="3"/>
<rect x="82" y="176" width="18" height="30" rx="3"/><rect x="106" y="172" width="18" height="30" rx="3"/>
<rect x="130" y="168" width="18" height="30" rx="3"/><rect x="154" y="172" width="18" height="30" rx="3"/>
<rect x="178" y="182" width="18" height="30" rx="3"/></g>
${ground(320, P.grassDark)}
${sparkle(206, 96, 11, P.yellow)}`,
  },
  {
    id: 'letajici-zamek', name: 'Létající zámek', category: 'fantasy', tint: P.lavender,
    art: `${sky('dusk')}${cloud(44, 250, 0.7)}${cloud(200, 286, 0.6)}
<path d="M56 244 q64 34 128 0 q-24 62 -64 62 q-40 0 -64 -62 Z" fill="${P.hillDark}" ${ink(4)}/>
${prop('castle', 120, 178, 0.92)}
<g fill="${P.cream}" opacity="0.7"><circle cx="46" cy="140" r="5"/><circle cx="198" cy="176" r="4"/></g>
${sparkle(190, 122, 10, P.yellow)}`,
  },
  {
    id: 'vodopad-dzungle', name: 'Vodopád v džungli', category: 'nature', tint: P.green,
    art: `${sky('cool')}
<g fill="${P.grassDark}"><circle cx="26" cy="120" r="58"/><circle cx="216" cy="150" r="62"/><circle cx="40" cy="240" r="46"/></g>
<path d="M84 84 h72 v168 H84 Z" fill="${P.seaFoam}" ${ink(4)}/>
<path d="M104 104 v134 M136 104 v134" stroke="${P.white}" stroke-width="5"/>
<ellipse cx="120" cy="270" rx="72" ry="26" fill="${P.teal}" ${ink(4)}/>
<path d="M0 296 q30 -18 60 0 t60 0 t60 0 t60 0 V${H} H0 Z" fill="${P.teal}" ${ink(4)}/>
${prop('leaf', 46, 302, 0.3)}${prop('flower', 202, 306, 0.24)}`,
  },
  {
    id: 'papirovy-drak', name: 'Papírový drak', category: 'adventure', tint: P.coral,
    art: `${sky('day')}${cloud(52, 74, 0.75)}${cloud(196, 128, 0.6)}
${hills(288, P.hill)}${ground(316, P.grass)}
${prop('kite', 166, 108, 0.62)}
<path d="M154 142 q-24 44 -46 62" fill="none" ${ink(3)}/>
${person({ x: 96, y: 330, s: 1.45, skin: SKIN[1], hair: HAIR[1], shirt: P.yellow, pants: P.navy, mood: 'excited', pose: 'armsUp' })}`,
  },
  {
    id: 'klavir', name: 'Klavír', category: 'people', tint: P.navy,
    art: `<rect width="${W}" height="${H}" fill="#241F3A"/>
<circle cx="120" cy="160" r="82" fill="${P.yellow}" opacity="0.12"/>
<rect x="0" y="298" width="${W}" height="${H - 298}" fill="${P.wood}"/><path d="M0 298 H${W}" ${ink(4)}/>
${prop('piano', 138, 240, 0.86)}
${person({ x: 64, y: 320, s: 1.3, skin: SKIN[1], hair: HAIR[0], shirt: P.navy, pants: P.navy, mood: 'calm', pose: 'hold' })}
${sparkle(196, 128, 10, P.yellow)}${sparkle(48, 176, 7, P.yellow)}`,
  },
  {
    id: 'majak-ostrov', name: 'Maják na ostrově', category: 'places', tint: P.teal,
    art: `${sky('dusk')}${cloud(48, 66, 0.65)}
${water(268, P.seaDeep)}
<path d="M60 282 q28 -30 60 -28 q38 2 60 28 Z" fill="${P.soilDark}" ${ink(4)}/>
${prop('lighthouse', 120, 186, 0.88)}
<path d="M150 140 l58 -20 M150 156 l58 22" stroke="${P.yellow}" stroke-width="6" opacity="0.8"/>
<path d="M0 306 q24 -16 48 0 t48 0 t48 0 t48 0 t48 0" fill="none" stroke="${P.seaFoam}" stroke-width="5"/>`,
  },
];
