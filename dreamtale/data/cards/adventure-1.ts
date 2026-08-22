import { P, SKIN, HAIR } from './palette';
import { sky, ground, water, hills, stars, cloud, sun, tree, sparkle, ink, W, H } from './scene';
import { person } from './people';
import { prop } from './props';
import type { Card } from './types';

export const adventure1: Card[] = [
  {
    id: 'socha-svobody', name: 'Socha svobody', category: 'places', tint: P.sage,
    art: `${sky('day')}${cloud(44, 54, 0.75)}${cloud(196, 100, 0.55)}
<g fill="${P.navy}" opacity="0.4">
<rect x="2" y="206" width="30" height="56"/><rect x="38" y="186" width="22" height="76"/>
<rect x="188" y="196" width="26" height="66"/><rect x="218" y="214" width="22" height="48"/></g>
${water(262, P.sea)}
<path d="M70 266 h100 l-12 -28 H82 Z" fill="${P.soilDark}" ${ink(4)}/>
<rect x="92" y="212" width="56" height="28" fill="${P.soil}" ${ink(4)}/>
<path d="M96 212 q6 -60 16 -76 h16 q10 16 16 76 Z" fill="${P.sage}" ${ink(4)}/>
<path d="M104 178 h32 M100 196 h40" fill="none" ${ink(3)}/>
<path d="M104 156 L82 172 l3 18 l20 -12 Z" fill="${P.sand}" ${ink(3.4)}/>
<path d="M134 142 L162 84" stroke="${P.sage}" stroke-width="13" stroke-linecap="round"/>
<path d="M134 142 L162 84" fill="none" ${ink(3.2)}/>
<path d="M150 86 h26 l-7 -16 h-12 Z" fill="${P.sand}" ${ink(3.4)}/>
<path d="M163 70 q-13 -20 0 -32 q13 12 0 32 Z" fill="${P.yellow}" ${ink(3.4)}/>
<circle cx="120" cy="118" r="17" fill="${P.sage}" ${ink(4)}/>
<g ${ink(3.6)}><path d="M120 101 v-14 M105 107 l-12 -11 M135 107 l12 -11 M110 102 l-7 -15 M130 102 l7 -15"/></g>
<circle cx="114" cy="117" r="2.6" fill="${P.ink}"/><circle cx="126" cy="117" r="2.6" fill="${P.ink}"/>`,
  },
  {
    id: 'sushi-mistr', name: 'Sushi mistr', category: 'people', tint: P.paper,
    art: `${sky('warm')}
<rect x="0" y="248" width="${W}" height="${H - 248}" fill="${P.wood}"/>
<path d="M0 248 H${W}" ${ink(4)}/>
${person({ x: 120, y: 250, s: 1.55, skin: SKIN[1], hair: HAIR[0], shirt: P.white, pants: P.stone, mood: 'proud', pose: 'hold',
  extras: `<path d="M-26 -120 h52 q7 0 7 9 h-66 q0 -9 7 -9 Z" fill="${P.white}" stroke="${P.ink}" stroke-width="3.4"/>
<path d="M-26 -116 h52" stroke="${P.red}" stroke-width="5"/>` })}
<rect x="34" y="286" width="172" height="22" rx="8" fill="${P.paper}" ${ink(4)}/>
<g>
<rect x="56" y="268" width="30" height="18" rx="8" fill="${P.white}" ${ink(3.2)}/>
<rect x="56" y="266" width="30" height="8" rx="4" fill="${P.coral}" ${ink(3)}/>
<rect x="104" y="268" width="30" height="18" rx="8" fill="${P.white}" ${ink(3.2)}/>
<rect x="104" y="266" width="30" height="8" rx="4" fill="${P.red}" ${ink(3)}/>
<rect x="152" y="268" width="30" height="18" rx="8" fill="${P.white}" ${ink(3.2)}/>
<rect x="152" y="266" width="30" height="8" rx="4" fill="${P.sage}" ${ink(3)}/></g>`,
  },
  {
    id: 'flamenco', name: 'Flamenco', category: 'people', tint: P.red,
    art: `${sky('dusk')}
<rect x="0" y="292" width="${W}" height="${H - 292}" fill="${P.soil}"/>
<path d="M0 292 H${W}" ${ink(4)}/>
${person({ x: 118, y: 294, s: 1.6, skin: SKIN[1], hair: HAIR[4], shirt: P.red, pants: P.red, mood: 'proud', pose: 'armsUp', hairStyle: 'bun',
  extras: `<path d="M-22 -34 q22 -12 44 0 q16 40 -22 40 q-38 0 -22 -40 Z" fill="${P.red}" stroke="${P.ink}" stroke-width="3.6"/>
<path d="M-30 6 q30 -16 60 0 q10 22 -30 22 q-40 0 -30 -22 Z" fill="${P.coral}" stroke="${P.ink}" stroke-width="3.6"/>
<circle cx="-16" cy="-124" r="7" fill="${P.coral}" stroke="${P.ink}" stroke-width="3"/>` })}
${sparkle(48, 132, 10, P.yellow)}${sparkle(196, 168, 8, P.yellow)}`,
  },
  {
    id: 'balony', name: 'Horkovzdušné balóny', category: 'adventure', tint: P.coral,
    art: `${sky('dusk')}${cloud(44, 236, 0.6)}
${hills(282, P.rust)}
${prop('balloon', 94, 130, 1.0)}
${prop('balloon', 180, 206, 0.6)}
${prop('balloon', 42, 220, 0.46)}`,
  },
  {
    id: 'vetrny-mlyn', name: 'Větrný mlýn', category: 'places', tint: P.sand,
    art: `${sky('day')}${cloud(186, 62, 0.7)}
${ground(272, P.grass)}
${prop('windmill', 120, 190, 1.08)}
${tree(202, 300, 0.8)}${tree(34, 306, 0.6)}`,
  },
  {
    id: 'maly-vedec', name: 'Malý vědec', category: 'people', tint: P.sage,
    art: `${sky('cool')}
<rect x="0" y="262" width="${W}" height="${H - 262}" fill="${P.wallCool}"/>
<path d="M0 262 H${W}" ${ink(4)}/>
${person({ x: 118, y: 300, s: 1.7, skin: SKIN[0], hair: HAIR[3], shirt: P.white, pants: P.blue, mood: 'excited', pose: 'hold', hairStyle: 'curly',
  extras: `<circle cx="-9" cy="-104" r="11" fill="none" stroke="${P.ink}" stroke-width="3"/>
<circle cx="9" cy="-104" r="11" fill="none" stroke="${P.ink}" stroke-width="3"/>
<path d="M2 -104 h-4" stroke="${P.ink}" stroke-width="3"/>` })}
<g transform="translate(158 212) scale(0.78)">
<path d="M-15 -40 h30 v14 l17 32 q6 13 -9 13 h-46 q-15 0 -9 -13 l17 -32 Z" fill="${P.white}" ${ink(5)}/>
<path d="M-27 -2 q27 -10 54 0 q4 21 -27 21 q-31 0 -27 -21 Z" fill="${P.sage}" ${ink(5)}/>
<path d="M-16 -40 h32" ${ink(5)}/></g>
${sparkle(160, 190, 9, P.yellow)}${sparkle(78, 176, 7, P.yellow)}`,
  },
  {
    id: 'drak-hory', name: 'Drak nad horami', category: 'fantasy', tint: P.green,
    art: `${sky('dusk')}${cloud(50, 74, 0.7)}
${hills(268, P.rust)}
${prop('dragon', 124, 168, 1.06)}`,
  },
  {
    id: 'potapec', name: 'Potápěč', category: 'adventure', tint: P.sea,
    art: `${sky('sea')}
<g fill="${P.seaFoam}" opacity="0.5">
<circle cx="42" cy="80" r="7"/><circle cx="58" cy="52" r="5"/><circle cx="196" cy="118" r="6"/></g>
${person({ x: 120, y: 236, s: 1.5, skin: SKIN[2], hair: HAIR[4], shirt: P.navy, pants: P.navy, mood: 'excited', pose: 'armsOut', hairStyle: 'hat',
  extras: `<circle cx="0" cy="-100" r="30" fill="${P.seaFoam}" opacity="0.45"/>
<circle cx="0" cy="-100" r="30" fill="none" stroke="${P.ink}" stroke-width="3.6"/>
<rect x="16" y="-84" width="16" height="30" rx="6" fill="${P.yellow}" stroke="${P.ink}" stroke-width="3"/>` })}
<path d="M0 300 q28 -22 58 0 t58 0 t58 0 t70 0 V${H} H0 Z" fill="${P.seaDeep}" ${ink(4)}/>
${prop('seashell', 52, 322, 0.3)}${prop('crab', 190, 326, 0.26)}`,
  },
  {
    id: 'cirkus', name: 'Cirkusový stan', category: 'places', tint: P.red,
    art: `${sky('dusk')}${stars(6, P.cream)}
${ground(292, P.grassDark)}
<path d="M120 78 L34 232 h172 Z" fill="${P.red}" ${ink(4)}/>
<path d="M120 78 L74 232 M120 78 L166 232" fill="none" ${ink(3.5)}/>
<path d="M92 232 q28 -34 56 0 Z" fill="${P.cream}" ${ink(4)}/>
<rect x="34" y="232" width="172" height="60" fill="${P.cream}" ${ink(4)}/>
<path d="M62 232 v60 M92 232 v60 M148 232 v60 M178 232 v60" stroke="${P.red}" stroke-width="14"/>
<rect x="34" y="232" width="172" height="60" fill="none" ${ink(4)}/>
<path d="M120 78 v-20 l20 8 Z" fill="${P.yellow}" ${ink(3.5)}/>`,
  },
  {
    id: 'rytir', name: 'Rytíř', category: 'people', tint: P.stone,
    art: `${sky('day')}${cloud(44, 56, 0.75)}
${hills(238, P.hill)}${ground(280, P.grass)}
${person({ x: 112, y: 316, s: 1.7, skin: SKIN[0], hair: HAIR[4], shirt: P.stone, pants: P.slate, mood: 'proud', pose: 'hold', hairStyle: 'hat',
  extras: `<path d="M-25 -104 q0 -28 25 -28 q25 0 25 28 v16 q-25 9 -50 0 Z" fill="${P.stone}" stroke="${P.ink}" stroke-width="3.6"/>
<rect x="-17" y="-104" width="34" height="8" fill="${P.ink}"/>
<path d="M0 -132 v-16 l12 7 Z" fill="${P.coral}" stroke="${P.ink}" stroke-width="3"/>
<path d="M-26 -34 h52 v10 h-52 Z" fill="${P.slate}" stroke="${P.ink}" stroke-width="3"/>` })}
${prop('sword', 176, 244, 0.56)}
${prop('shield', 58, 268, 0.46)}`,
  },
  {
    id: 'indian', name: 'Indián', category: 'people', tint: P.rust,
    art: `${sky('dusk')}
${hills(250, P.rust)}${ground(292, P.sand)}
${person({ x: 120, y: 322, s: 1.7, skin: SKIN[2], hair: HAIR[4], shirt: P.rust, pants: P.brown, mood: 'calm', pose: 'stand', hairStyle: 'hat',
  extras: `<path d="M-26 -112 q26 -14 52 0 v10 q-26 10 -52 0 Z" fill="${P.brown}" stroke="${P.ink}" stroke-width="3.4"/>
<g stroke="${P.ink}" stroke-width="2.6">
<path d="M-22 -118 l-6 -26 l10 6 Z" fill="${P.red}"/><path d="M-8 -122 l-3 -30 l9 8 Z" fill="${P.white}"/>
<path d="M6 -122 l3 -30 l-9 8 Z" fill="${P.white}"/><path d="M22 -118 l6 -26 l-10 6 Z" fill="${P.red}"/></g>` })}`,
  },
  {
    id: 'stonehenge', name: 'Stonehenge', category: 'places', tint: P.stone,
    art: `${sky('dusk')}${sun(180, 96, 30, P.yellow)}
${ground(276, P.grassDark)}
<g fill="${P.stone}" stroke="${P.ink}" stroke-width="4">
<rect x="30" y="176" width="34" height="106" rx="5"/><rect x="88" y="168" width="34" height="114" rx="5"/>
<rect x="146" y="176" width="34" height="106" rx="5"/><rect x="196" y="188" width="30" height="94" rx="5"/>
<rect x="24" y="152" width="104" height="26" rx="6"/><rect x="140" y="158" width="92" height="24" rx="6"/></g>`,
  },
];
