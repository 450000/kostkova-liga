import { P, SKIN, HAIR } from './palette';
import { sky, ground, water, hills, stars, cloud, moon, sparkle, ink, W, H } from './scene';
import { person } from './people';
import { prop } from './props';
import type { Card } from './types';

export const adventure4: Card[] = [
  {
    id: 'gondola', name: 'Gondola', category: 'places', tint: P.teal,
    art: `${sky('warm')}
<g fill="${P.sand}" ${ink(4)}>
<rect x="8" y="150" width="58" height="112" rx="6"/><rect x="176" y="136" width="56" height="126" rx="6"/></g>
<g fill="${P.blue}" ${ink(3)}><rect x="22" y="172" width="16" height="24" rx="7"/><rect x="190" y="162" width="16" height="24" rx="7"/></g>
${water(262, P.teal)}
<path d="M52 288 q68 26 136 0 q-16 24 -68 24 q-52 0 -68 -24 Z" fill="${P.ink}"/>
${person({ x: 148, y: 288, s: 1.1, skin: SKIN[1], hair: HAIR[0], shirt: P.white, pants: P.navy, mood: 'calm', pose: 'hold' })}
<path d="M164 246 L196 324" stroke="${P.wood}" stroke-width="7" stroke-linecap="round"/>`,
  },
  {
    id: 'morska-panna', name: 'Mořská panna', category: 'fantasy', tint: P.teal,
    art: `${sky('sea')}
<g fill="${P.seaFoam}" opacity="0.4"><circle cx="44" cy="70" r="7"/><circle cx="188" cy="104" r="6"/></g>
${person({ x: 118, y: 250, s: 1.6, skin: SKIN[0], hair: '#C4693C', shirt: P.pink, pants: P.teal, mood: 'happy', pose: 'armsOut', hairStyle: 'long',
  extras: `<path d="M-20 -34 q20 34 40 0 q14 44 -20 60 q-34 -16 -20 -60 Z" fill="${P.teal}" stroke="${P.ink}" stroke-width="3.6"/>
<path d="M0 26 q-30 6 -34 -18 q34 -4 34 18 Z M0 26 q30 6 34 -18 q-34 -4 -34 18 Z" fill="${P.sage}" stroke="${P.ink}" stroke-width="3.4"/>` })}
<path d="M0 306 q30 -22 60 0 t60 0 t60 0 t60 0 V${H} H0 Z" fill="${P.seaDeep}" ${ink(4)}/>
${prop('seashell', 48, 326, 0.3)}`,
  },
  {
    id: 'parni-vlak', name: 'Parní vlak', category: 'adventure', tint: P.green,
    art: `${sky('day')}${cloud(48, 54, 0.7)}
${hills(240, P.hill)}${ground(288, P.grass)}
<g fill="${P.slate}" opacity="0.55"><circle cx="64" cy="140" r="20"/><circle cx="96" cy="116" r="16"/><circle cx="124" cy="98" r="12"/></g>
${prop('train', 122, 246, 1.14)}
<path d="M0 316 h${W}" stroke="${P.woodDark}" stroke-width="7"/>`,
  },
  {
    id: 'dalekohled-noc', name: 'Noc s dalekohledem', category: 'adventure', tint: P.navy,
    art: `${sky('night')}${stars(11)}${moon(190, 66, 22)}
${ground(300, P.grassDark)}

<path d="M96 306 L152 216" stroke="${P.slate}" stroke-width="15" stroke-linecap="round"/>
<path d="M96 306 L152 216" fill="none" ${ink(3.4)}/>
<path d="M150 222 l24 -14 l10 20 l-24 12 Z" fill="${P.stone}" ${ink(3.4)}/>
<path d="M84 310 l16 -8 M96 314 l14 -10" ${ink(4)}/>
${person({ x: 78, y: 320, s: 1.3, skin: SKIN[1], hair: HAIR[1], shirt: P.coral, pants: P.navy, mood: 'excited', pose: 'point' })}
${sparkle(56, 120, 10, P.yellow)}`,
  },
  {
    id: 'veterinarka', name: 'Veterinářka', category: 'people', tint: P.sage,
    art: `${sky('cool')}
<rect x="0" y="268" width="${W}" height="${H - 268}" fill="${P.wallCool}"/><path d="M0 268 H${W}" ${ink(4)}/>
<rect x="30" y="268" width="180" height="20" rx="6" fill="${P.white}" ${ink(4)}/>
${person({ x: 92, y: 268, s: 1.5, skin: SKIN[0], hair: HAIR[1], shirt: P.white, pants: P.sage, mood: 'calm', pose: 'hold', hairStyle: 'bun' })}
${prop('dog', 168, 236, 0.5)}
<path d="M56 190 q12 -14 24 0" fill="none" ${ink(3.4)}/>`,
  },
  {
    id: 'snezitko', name: 'Sněžítko', category: 'fantasy', tint: P.blue,
    art: `${sky('cool')}
<rect x="0" y="292" width="${W}" height="${H - 292}" fill="${P.floor}"/><path d="M0 292 H${W}" ${ink(4)}/>
<path d="M62 292 h116 q10 0 10 12 h-136 q0 -12 10 -12 Z" fill="${P.wood}" ${ink(4)}/>
<circle cx="120" cy="200" r="86" fill="${P.seaFoam}" opacity="0.55"/>
<circle cx="120" cy="200" r="86" fill="none" ${ink(4)}/>
${prop('castle', 120, 208, 0.62)}
<g fill="${P.white}"><circle cx="76" cy="152" r="5"/><circle cx="160" cy="140" r="4"/><circle cx="92" cy="238" r="4"/><circle cx="166" cy="226" r="5"/><circle cx="120" cy="128" r="4"/></g>
<path d="M92 82 q26 -20 52 0" fill="none" stroke="${P.white}" stroke-width="6" opacity="0.7"/>`,
  },
  {
    id: 'hrad-z-pisku', name: 'Hrad z písku', category: 'nature', tint: P.sand,
    art: `${sky('day')}${cloud(190, 58, 0.65)}
${water(212, P.sea)}
<path d="M0 258 q40 -14 80 -6 q40 8 80 -2 q40 -10 80 2 V${H} H0 Z" fill="${P.sand}" ${ink(4)}/>
${prop('castle', 118, 250, 0.86)}
${prop('seashell', 44, 320, 0.26)}${prop('crab', 196, 326, 0.24)}`,
  },
  {
    id: 'obri-zelva', name: 'Obří želva', category: 'animals', tint: P.sea,
    art: `${sky('sea')}
<g fill="${P.seaFoam}" opacity="0.4"><circle cx="42" cy="66" r="7"/><circle cx="196" cy="112" r="6"/></g>
${prop('turtle', 116, 208, 1.24)}
${person({ x: 116, y: 168, s: 0.72, skin: SKIN[1], hair: HAIR[0], shirt: P.yellow, pants: P.navy, mood: 'excited', pose: 'armsUp' })}
<path d="M0 306 q30 -22 60 0 t60 0 t60 0 t60 0 V${H} H0 Z" fill="${P.seaDeep}" ${ink(4)}/>`,
  },
  {
    id: 'mayska-pyramida', name: 'Mayská pyramida', category: 'places', tint: P.stone,
    art: `${sky('dusk')}
<g fill="${P.grassDark}" opacity="0.6"><circle cx="24" cy="196" r="46"/><circle cx="216" cy="212" r="42"/></g>
${ground(304, P.grassDark)}
<g fill="${P.stone}" ${ink(4)}>
<path d="M40 304 L86 108 h68 l46 196 Z"/></g>
<g fill="none" ${ink(3.4)}><path d="M52 254 h136 M64 204 h112 M76 154 h88"/></g>
<rect x="104" y="86" width="32" height="26" fill="${P.sand}" ${ink(3.6)}/>
<path d="M108 304 V240 h24 v64 Z" fill="${P.ink}" opacity="0.5"/>`,
  },
  {
    id: 'benatska-maska', name: 'Benátská maska', category: 'people', tint: P.violet,
    art: `<rect width="${W}" height="${H}" fill="#33254C"/>
<circle cx="120" cy="180" r="96" fill="${P.violet}" opacity="0.35"/>
${prop('mask', 120, 194, 1.16)}
<g fill="${P.yellow}"><circle cx="58" cy="104" r="6"/><circle cx="186" cy="126" r="5"/><circle cx="72" cy="278" r="5"/></g>
${sparkle(178, 84, 12, P.yellow)}${sparkle(54, 232, 8, P.pink)}`,
  },
  {
    id: 'cteni-v-kresle', name: 'Čtení v křesle', category: 'everyday', tint: P.brown,
    art: `<rect width="${W}" height="${H}" fill="${P.wall}"/>
<rect x="0" y="288" width="${W}" height="${H - 288}" fill="${P.floor}"/><path d="M0 288 H${W}" ${ink(4)}/>
<rect x="16" y="150" width="58" height="140" rx="6" fill="${P.wood}" ${ink(4)}/>
<g fill="${P.coral}"><rect x="24" y="164" width="12" height="30"/><rect x="40" y="160" width="12" height="34"/></g>
<g fill="${P.teal}"><rect x="56" y="166" width="12" height="28"/><rect x="24" y="214" width="12" height="30"/></g>
<path d="M96 290 v-58 q0 -26 30 -26 h34 q30 0 30 26 v58 Z" fill="${P.rust}" ${ink(4)}/>
<path d="M96 250 h94" fill="none" ${ink(3.4)}/>
${person({ x: 142, y: 258, s: 1.15, skin: SKIN[0], hair: HAIR[1], shirt: P.yellow, pants: P.navy, mood: 'calm', pose: 'hold' })}
${prop('book', 142, 232, 0.32)}
<circle cx="206" cy="120" r="20" fill="${P.yellow}" ${ink(3.6)}/>`,
  },
  {
    id: 'muchomurka', name: 'Domek z muchomůrky', category: 'fantasy', tint: P.red,
    art: `${sky('cool')}
${ground(300, P.grass)}
${prop('mushroom', 120, 210, 1.34)}
<rect x="104" y="248" width="32" height="52" rx="14" fill="${P.wood}" ${ink(4)}/>
<circle cx="86" cy="252" r="11" fill="${P.yellow}" ${ink(3.4)}/>
<circle cx="154" cy="252" r="11" fill="${P.yellow}" ${ink(3.4)}/>
${prop('flower', 40, 318, 0.24)}${prop('flower', 202, 322, 0.2)}`,
  },
  {
    id: 'hodinar', name: 'Hodinář', category: 'people', tint: P.teal,
    art: `<rect width="${W}" height="${H}" fill="#2C3B4A"/>
<rect x="0" y="286" width="${W}" height="${H - 286}" fill="${P.woodDark}"/><path d="M0 286 H${W}" ${ink(4)}/>
${prop('clock', 60, 150, 0.42)}${prop('watch', 190, 132, 0.34)}
${person({ x: 122, y: 316, s: 1.6, skin: SKIN[0], hair: '#D8D4E2', shirt: P.teal, pants: P.slate, mood: 'calm', pose: 'hold',
  extras: `<circle cx="-9" cy="-104" r="11" fill="none" stroke="${P.ink}" stroke-width="3"/>
<circle cx="12" cy="-106" r="14" fill="${P.seaFoam}" opacity="0.6" stroke="${P.ink}" stroke-width="3"/>` })}
${sparkle(178, 226, 8, P.yellow)}`,
  },
  {
    id: 'ohnostroj', name: 'Ohňostroj', category: 'places', tint: P.navy,
    art: `${sky('night')}${stars(8)}
${water(268, P.seaDeep)}
<g fill="${P.cream}" ${ink(4)}>
<path d="M40 268 q6 -52 46 -52 q40 0 46 52 Z" opacity="0.95"/>
<path d="M110 268 q6 -62 50 -62 q44 0 50 62 Z" opacity="0.95"/></g>
<g stroke-width="4" stroke-linecap="round">
<g stroke="${P.coral}"><path d="M68 116 v-34 M68 116 v34 M68 116 h-34 M68 116 h34 M68 116 l24 -24 M68 116 l-24 -24 M68 116 l24 24 M68 116 l-24 24"/></g>
<g stroke="${P.yellow}"><path d="M172 88 v-28 M172 88 v28 M172 88 h-28 M172 88 h28 M172 88 l20 -20 M172 88 l-20 -20 M172 88 l20 20 M172 88 l-20 20"/></g>
<g stroke="${P.pink}"><path d="M120 160 v-22 M120 160 v22 M120 160 h-22 M120 160 h22 M120 160 l16 -16 M120 160 l-16 -16"/></g></g>
<g fill="${P.cream}"><circle cx="68" cy="116" r="5"/><circle cx="172" cy="88" r="5"/><circle cx="120" cy="160" r="4"/></g>`,
  },
  {
    id: 'truhla-pokladu', name: 'Truhla pokladu', category: 'fantasy', tint: P.gold,
    art: `<rect width="${W}" height="${H}" fill="#2A2036"/>
<path d="M0 292 q30 -18 60 0 t60 0 t60 0 t60 0 V${H} H0 Z" fill="${P.soilDark}" ${ink(4)}/>
<circle cx="120" cy="212" r="88" fill="${P.yellow}" opacity="0.16"/>
${prop('treasure', 120, 236, 1.16)}
${sparkle(58, 168, 12, P.yellow)}${sparkle(190, 190, 9, P.yellow)}${sparkle(146, 138, 7, P.cream)}`,
  },
  {
    id: 'yeti', name: 'Yeti', category: 'fantasy', tint: P.snow,
    art: `${sky('cool')}
<path d="M-10 240 L52 128 L104 220 L150 148 L212 250 V${H} H-10 Z" fill="${P.snowShade}" ${ink(4)}/>
<path d="M0 296 q30 -18 60 0 t60 0 t60 0 t60 0 V${H} H0 Z" fill="${P.snow}" ${ink(4)}/>
<g transform="translate(120 254)">
<path d="M-52 40 q-14 -84 52 -84 q66 0 52 84 Z" fill="${P.white}" ${ink(4)}/>
<circle cx="0" cy="-58" r="34" fill="${P.white}" ${ink(4)}/>
<circle cx="-12" cy="-64" r="5" fill="${P.ink}"/><circle cx="12" cy="-64" r="5" fill="${P.ink}"/>
<path d="M-14 -44 q14 12 28 0" fill="none" ${ink(3.4)}/>
<path d="M-52 6 q-24 -6 -26 14 M52 6 q24 -6 26 14" fill="none" ${ink(5)}/></g>
<g fill="${P.white}"><circle cx="40" cy="96" r="4"/><circle cx="196" cy="128" r="4"/><circle cx="96" cy="70" r="3"/></g>`,
  },
];
