import { P, SKIN, HAIR } from './palette';
import { sky, ground, water, hills, stars, cloud, moon, sparkle, ink, W, H } from './scene';
import { person } from './people';
import { prop } from './props';
import type { Card } from './types';

export const adventure3: Card[] = [
  {
    id: 'hvezdarna', name: 'Hvězdárna', category: 'places', tint: P.navy,
    art: `${sky('night')}${stars(10)}${moon(46, 64, 20)}
${ground(292, P.grassDark)}
<path d="M74 296 V236 h92 v60 Z" fill="${P.cream}" ${ink(4)}/>
<path d="M70 236 a50 44 0 0 1 100 0 Z" fill="${P.stone}" ${ink(4)}/>
<path d="M126 214 L196 158" stroke="${P.slate}" stroke-width="17" stroke-linecap="round"/>
<path d="M126 214 L196 158" fill="none" ${ink(3.4)}/>
<rect x="98" y="256" width="24" height="40" rx="6" fill="${P.wood}" ${ink(3.4)}/>
${sparkle(206, 108, 10, P.yellow)}`,
  },
  {
    id: 'bojovnik', name: 'Bojovník', category: 'people', tint: P.red,
    art: `${sky('dusk')}
${hills(258, P.rust)}${ground(298, P.sand)}
${person({ x: 108, y: 326, s: 1.75, skin: SKIN[3], hair: HAIR[4], shirt: P.red, pants: P.red, mood: 'proud', pose: 'hold',
  extras: `<path d="M-24 -46 h48 v10 h-48 Z" fill="${P.navy}" stroke="${P.ink}" stroke-width="3"/>
<circle cx="0" cy="-72" r="12" fill="none" stroke="${P.yellow}" stroke-width="4"/>` })}
<path d="M196 132 V318" stroke="${P.wood}" stroke-width="9" stroke-linecap="round"/>
<path d="M196 132 l-10 -22 h20 Z" fill="${P.stone}" ${ink(3.4)}/>
<circle cx="52" cy="106" r="22" fill="${P.coral}" ${ink(4)}/>`,
  },
  {
    id: 'piratska-lod', name: 'Pirátská loď', category: 'adventure', tint: P.wood,
    art: `${sky('dusk')}${cloud(52, 62, 0.7)}
${water(274, P.seaDeep)}
${prop('sailboat', 120, 216, 1.3)}
<path d="M118 96 h44 v26 h-44 Z" fill="${P.ink}"/>
<circle cx="134" cy="106" r="5" fill="${P.cream}"/><circle cx="148" cy="106" r="5" fill="${P.cream}"/>
<path d="M134 112 h14" stroke="${P.cream}" stroke-width="3"/>
<path d="M0 306 q24 -18 48 0 t48 0 t48 0 t48 0 t48 0" fill="none" stroke="${P.seaFoam}" stroke-width="5"/>`,
  },
  {
    id: 'svatba', name: 'Svatba', category: 'family', tint: P.pink,
    art: `${sky('warm')}
<rect x="0" y="292" width="${W}" height="${H - 292}" fill="${P.floor}"/><path d="M0 292 H${W}" ${ink(4)}/>
${person({ x: 88, y: 316, s: 1.5, skin: SKIN[0], hair: HAIR[3], shirt: P.white, pants: P.white, mood: 'shy', pose: 'hold', hairStyle: 'long',
  extras: `<path d="M-30 -32 q30 -14 60 0 q12 32 -30 32 q-42 0 -30 -32 Z" fill="${P.white}" stroke="${P.ink}" stroke-width="3.6"/>` })}
${person({ x: 154, y: 316, s: 1.5, skin: SKIN[1], hair: HAIR[0], shirt: P.navy, pants: P.navy, mood: 'happy', pose: 'hold',
  extras: `<path d="M-8 -78 h16 l-8 22 Z" fill="${P.white}" stroke="${P.ink}" stroke-width="2.6"/>` })}
<g fill="${P.pink}"><circle cx="42" cy="120" r="7"/><circle cx="200" cy="146" r="6"/><circle cx="72" cy="176" r="5"/><circle cx="176" cy="98" r="5"/></g>
${sparkle(120, 96, 12, P.yellow)}`,
  },
  {
    id: 'kouzelnik', name: 'Kouzelník', category: 'fantasy', tint: P.violet,
    art: `${sky('night')}${stars(9)}
<rect x="0" y="300" width="${W}" height="${H - 300}" fill="#2A2450"/><path d="M0 300 H${W}" ${ink(4)}/>
${person({ x: 116, y: 322, s: 1.7, skin: SKIN[0], hair: '#E8E4EE', shirt: P.violet, pants: P.violet, mood: 'calm', pose: 'point', hairStyle: 'hat',
  extras: `<path d="M-34 -108 L0 -160 L34 -108 Z" fill="${P.violet}" stroke="${P.ink}" stroke-width="3.6"/>
<path d="M-42 -108 h84" stroke="${P.violet}" stroke-width="10"/><path d="M-42 -108 h84" stroke="${P.ink}" stroke-width="3.4"/>
<path d="M-18 -78 q18 46 36 0 q6 44 -18 44 q-24 0 -18 -44 Z" fill="${P.white}" stroke="${P.ink}" stroke-width="3.4"/>` })}
${sparkle(196, 178, 13, P.yellow)}${sparkle(214, 148, 8, P.sage)}${sparkle(178, 146, 7, P.pink)}`,
  },
  {
    id: 'basket-vozik', name: 'Basketbal na vozíku', category: 'people', tint: P.coral,
    art: `${sky('warm')}
<rect x="0" y="284" width="${W}" height="${H - 284}" fill="${P.floorDark}"/><path d="M0 284 H${W}" ${ink(4)}/>
<g transform="translate(112 300)">
<circle cx="-6" cy="0" r="34" fill="none" stroke="${P.ink}" stroke-width="6"/>
<circle cx="-6" cy="0" r="8" fill="${P.slate}" ${ink(3)}/>
<circle cx="34" cy="14" r="13" fill="none" stroke="${P.ink}" stroke-width="5"/>
<path d="M-24 -22 h44 v10 h-44 Z" fill="${P.coral}" ${ink(3.6)}/>
<path d="M20 -22 v-24" fill="none" ${ink(4)}/></g>
${person({ x: 104, y: 270, s: 1.35, skin: SKIN[2], hair: HAIR[0], shirt: P.coral, pants: P.navy, mood: 'excited', pose: 'armsUp' })}
<circle cx="176" cy="120" r="26" fill="${P.rust}" ${ink(4)}/>
<path d="M150 120 h52 M176 94 v52 M158 102 q18 18 0 36 M194 102 q-18 18 0 36" fill="none" ${ink(3)}/>`,
  },
  {
    id: 'ponorka', name: 'Ponorka', category: 'adventure', tint: P.sea,
    art: `${sky('sea')}
<g fill="${P.seaFoam}" opacity="0.4"><circle cx="46" cy="76" r="8"/><circle cx="66" cy="46" r="5"/><circle cx="196" cy="106" r="6"/></g>
${prop('submarine', 118, 176, 1.0)}
<path d="M0 292 q30 -22 60 0 t60 0 t60 0 t60 0 V${H} H0 Z" fill="${P.seaDeep}" ${ink(4)}/>
${prop('seashell', 56, 318, 0.28)}${prop('fish', 190, 268, 0.26)}`,
  },
  {
    id: 'samuraj', name: 'Samuraj', category: 'people', tint: P.red,
    art: `${sky('dusk')}
${hills(268, P.rust)}${ground(304, P.grassDark)}
${person({ x: 112, y: 330, s: 1.7, skin: SKIN[1], hair: HAIR[4], shirt: P.red, pants: P.woodDark, mood: 'calm', pose: 'hold', hairStyle: 'hat',
  extras: `<path d="M-26 -104 q0 -30 26 -30 q26 0 26 30 v10 q-26 8 -52 0 Z" fill="${P.woodDark}" stroke="${P.ink}" stroke-width="3.6"/>
<path d="M-30 -128 q10 -18 26 -12 M30 -128 q-10 -18 -26 -12" fill="none" stroke="${P.yellow}" stroke-width="6" stroke-linecap="round"/>
<path d="M-34 -114 q34 -20 68 0" fill="none" stroke="${P.yellow}" stroke-width="5"/>
<path d="M-24 -40 h48 v12 h-48 Z" fill="${P.ink}"/>` })}
${prop('sword', 180, 244, 0.5)}
<circle cx="52" cy="106" r="24" fill="${P.red}" opacity="0.7"/>`,
  },
  {
    id: 'domek-na-strome', name: 'Domek na stromě', category: 'places', tint: P.green,
    art: `${sky('day')}${cloud(50, 56, 0.7)}
${ground(310, P.grass)}
<rect x="104" y="196" width="32" height="118" rx="10" fill="${P.wood}" ${ink(4)}/>
<circle cx="120" cy="96" r="52" fill="${P.green}" ${ink(4)}/>
<circle cx="58" cy="132" r="32" fill="${P.grassDark}" ${ink(4)}/>
<circle cx="182" cy="132" r="32" fill="${P.grassDark}" ${ink(4)}/>
<rect x="60" y="196" width="120" height="52" rx="6" fill="${P.sand}" ${ink(4)}/>
<path d="M48 198 L120 154 L192 198 Z" fill="${P.wood}" ${ink(4)}/>
<rect x="102" y="212" width="36" height="36" rx="6" fill="${P.yellow}" ${ink(3.4)}/>
<path d="M78 248 v42 M162 248 v42" ${ink(5)}/>
<path d="M120 248 l-14 42 M120 248 l14 42" fill="none" ${ink(3.4)}/>`,
  },
  {
    id: 'start-rakety', name: 'Start rakety', category: 'adventure', tint: P.red,
    art: `${sky('night')}${stars(10)}
${prop('rocket', 118, 158, 1.06)}
<path d="M96 250 q24 66 48 0 q10 62 -24 62 q-34 0 -24 -62 Z" fill="${P.coral}" ${ink(4)}/>
<path d="M104 262 q16 44 32 0 q6 42 -16 42 q-22 0 -16 -42 Z" fill="${P.yellow}"/>
<g fill="${P.slate}" opacity="0.5"><circle cx="58" cy="312" r="26"/><circle cx="182" cy="318" r="22"/><circle cx="120" cy="336" r="24"/></g>`,
  },
  {
    id: 'velbloud', name: 'Velbloud v poušti', category: 'animals', tint: P.sand,
    art: `${sky('dusk')}${prop('sun', 190, 84, 0.28)}
<path d="M0 258 q40 -26 80 -6 q40 20 80 -6 q40 -26 80 -4 V${H} H0 Z" fill="${P.sand}" ${ink(4)}/>
<g transform="translate(108 244)">
<path d="M-46 10 v44 M-18 14 v40 M14 14 v40 M42 10 v44" stroke="${P.sandDark}" stroke-width="11" stroke-linecap="round"/>
<path d="M-46 10 v44 M-18 14 v40 M14 14 v40 M42 10 v44" fill="none" ${ink(3.2)}/>
<path d="M-54 8 q-6 -30 20 -30 q12 -26 30 0 q26 -6 28 30 q-38 14 -78 0 Z" fill="${P.sand}" ${ink(4)}/>
<path d="M22 -18 q26 -10 26 -46" stroke="${P.sand}" stroke-width="16" stroke-linecap="round"/>
<path d="M22 -18 q26 -10 26 -46" fill="none" ${ink(3.4)}/>
<path d="M38 -66 q24 -10 32 8 q-6 16 -28 10 Z" fill="${P.sand}" ${ink(3.6)}/>
<circle cx="54" cy="-62" r="3.4" fill="${P.ink}"/>
<path d="M44 -76 l4 -12 M56 -74 l6 -10" ${ink(3)}/>
<path d="M-54 4 q-16 4 -16 22" fill="none" ${ink(4)}/></g>
${prop('palm', 206, 236, 0.44)}`,
  },
  {
    id: 'kovar', name: 'Kovář', category: 'people', tint: P.rust,
    art: `<rect width="${W}" height="${H}" fill="#3A2B26"/>
<rect x="0" y="288" width="${W}" height="${H - 288}" fill="${P.woodDark}"/><path d="M0 288 H${W}" ${ink(4)}/>
<circle cx="176" cy="242" r="42" fill="${P.coral}" opacity="0.5"/>
<rect x="140" y="252" width="72" height="38" rx="8" fill="${P.slate}" ${ink(4)}/>
<path d="M152 252 q24 -30 48 0 Z" fill="${P.yellow}" ${ink(3.4)}/>
${person({ x: 92, y: 318, s: 1.6, skin: SKIN[2], hair: HAIR[0], shirt: P.brown, pants: P.woodDark, mood: 'proud', pose: 'point',
  extras: `<path d="M-24 -40 h48 v14 h-48 Z" fill="${P.sand}" stroke="${P.ink}" stroke-width="3"/>` })}
${prop('hammer', 158, 214, 0.4)}
${sparkle(176, 224, 9, P.yellow)}${sparkle(200, 208, 6, P.coral)}`,
  },
  {
    id: 'vanoce', name: 'Vánoce u krbu', category: 'family', tint: P.red,
    art: `<rect width="${W}" height="${H}" fill="${P.wall}"/>
<rect x="0" y="290" width="${W}" height="${H - 290}" fill="${P.floor}"/><path d="M0 290 H${W}" ${ink(4)}/>
<rect x="132" y="180" width="96" height="110" rx="8" fill="${P.stone}" ${ink(4)}/>
<path d="M148 290 v-58 q32 -26 64 0 v58 Z" fill="${P.ink}"/>
<path d="M162 290 q18 -44 36 0 Z" fill="${P.coral}"/>
<path d="M170 290 q10 -28 20 0 Z" fill="${P.yellow}"/>
${prop('conifer', 66, 226, 0.72)}
<g fill="${P.coral}"><circle cx="50" cy="236" r="6"/><circle cx="82" cy="212" r="5"/><circle cx="66" cy="264" r="5"/></g>
${prop('gift', 60, 302, 0.28)}${prop('gift', 100, 306, 0.22)}`,
  },
  {
    id: 'krabice-hra', name: 'Hra v krabici', category: 'family', tint: P.sand,
    art: `${sky('warm')}
<rect x="0" y="286" width="${W}" height="${H - 286}" fill="${P.floor}"/><path d="M0 286 H${W}" ${ink(4)}/>
<path d="M46 288 V206 h148 v82 Z" fill="${P.sand}" ${ink(4)}/>
<path d="M46 206 l-18 -30 h184 l-18 30 Z" fill="${P.paper}" ${ink(4)}/>
${person({ x: 88, y: 210, s: 1.05, skin: SKIN[0], hair: HAIR[1], shirt: P.coral, pants: P.navy, mood: 'excited', pose: 'armsUp' })}
${person({ x: 154, y: 210, s: 1.05, skin: SKIN[2], hair: HAIR[0], shirt: P.teal, pants: P.navy, mood: 'happy', pose: 'wave' })}
<path d="M46 288 V206 h148 v82 Z" fill="none" ${ink(4)}/>`,
  },
  {
    id: 'papousek', name: 'Papoušek v džungli', category: 'animals', tint: P.green,
    art: `${sky('day')}
<g fill="${P.grassDark}" opacity="0.6"><circle cx="30" cy="90" r="40"/><circle cx="212" cy="140" r="46"/><circle cx="46" cy="228" r="38"/></g>
<path d="M40 240 q80 -20 168 -6" stroke="${P.wood}" stroke-width="14" stroke-linecap="round"/>
<path d="M40 240 q80 -20 168 -6" fill="none" ${ink(3.4)}/>
${prop('parrot', 122, 168, 0.92)}
${prop('leaf', 200, 268, 0.3)}`,
  },
  {
    id: 'brankar', name: 'Hokejový brankář', category: 'people', tint: P.blue,
    art: `${sky('cool')}
<rect x="0" y="266" width="${W}" height="${H - 266}" fill="${P.snow}"/><path d="M0 266 H${W}" ${ink(4)}/>
<path d="M40 268 V150 h160 v118" fill="none" stroke="${P.red}" stroke-width="7"/>
<g stroke="${P.slate}" stroke-width="2" opacity="0.7">
<path d="M52 156 v106 M76 156 v106 M100 156 v106 M124 156 v106 M148 156 v106 M172 156 v106 M188 156 v106"/>
<path d="M42 176 h156 M42 202 h156 M42 228 h156 M42 254 h156"/></g>
${person({ x: 120, y: 300, s: 1.6, skin: SKIN[0], hair: HAIR[4], shirt: P.blue, pants: P.navy, mood: 'proud', pose: 'armsOut', hairStyle: 'hat',
  extras: `<circle cx="0" cy="-100" r="27" fill="${P.white}" stroke="${P.ink}" stroke-width="3.6"/>
<path d="M-16 -104 h32 M-10 -92 h20" stroke="${P.ink}" stroke-width="3"/>
<rect x="-46" y="-84" width="20" height="34" rx="6" fill="${P.red}" stroke="${P.ink}" stroke-width="3"/>
<rect x="26" y="-84" width="20" height="34" rx="6" fill="${P.red}" stroke="${P.ink}" stroke-width="3"/>` })}
<circle cx="196" cy="316" r="9" fill="${P.ink}"/>`,
  },
];
