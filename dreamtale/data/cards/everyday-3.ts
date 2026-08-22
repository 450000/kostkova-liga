import { P, SKIN, HAIR } from './palette';
import { sky, ground, water, cloud, stars, sparkle, ink, W, H } from './scene';
import { person } from './people';
import { prop, heart } from './props';
import type { Card } from './types';

const roomWarm = `${sky('warm')}<rect x="0" y="284" width="${W}" height="${H - 284}" fill="${P.floor}"/><path d="M0 284 H${W}" ${ink(4)}/>`;
const roomCool = `${sky('cool')}<rect x="0" y="284" width="${W}" height="${H - 284}" fill="${P.wallCool}"/><path d="M0 284 H${W}" ${ink(4)}/>`;

export const everyday3: Card[] = [
  {
    id: 'sbirani-minci', name: 'Sbírání mincí', category: 'everyday', tint: P.gold,
    art: `${roomWarm}
${person({ x: 88, y: 320, s: 1.4, skin: SKIN[1], hair: HAIR[0], shirt: P.teal, pants: P.navy, mood: 'excited', pose: 'sit' })}
${person({ x: 168, y: 320, s: 1.3, skin: SKIN[0], hair: HAIR[1], shirt: P.yellow, pants: P.navy, mood: 'happy', pose: 'sit', hairStyle: 'long' })}
<g fill="${P.gold}" ${ink(3.2)}>
<circle cx="120" cy="290" r="12"/><circle cx="142" cy="298" r="10"/><circle cx="104" cy="302" r="9"/></g>
${sparkle(120, 250, 9, P.yellow)}`,
  },
  {
    id: 'fotoaparat', name: 'Fotoaparát', category: 'everyday', tint: P.slate,
    art: `${sky('cool')}
<rect x="0" y="300" width="${W}" height="${H - 300}" fill="${P.wallCool}"/><path d="M0 300 H${W}" ${ink(4)}/>
${prop('camera', 120, 196, 1.16)}
${sparkle(190, 118, 12, P.yellow)}
<rect x="46" y="300" width="148" height="14" rx="5" fill="${P.wood}" ${ink(4)}/>`,
  },
  {
    id: 'lahev-s-dopisem', name: 'Láhev s dopisem', category: 'adventure', tint: P.sea,
    art: `${sky('cool')}${cloud(50, 56, 0.7)}
${water(214, P.sea)}
<g transform="translate(120 232) rotate(-18)">
<path d="M-16 -44 h32 v18 q18 12 18 40 v34 q0 14 -16 14 h-36 q-16 0 -16 -14 v-34 q0 -28 18 -40 Z" fill="${P.seaFoam}" opacity="0.85" ${ink(4)}/>
<rect x="-10" y="-58" width="20" height="16" rx="5" fill="${P.brown}" ${ink(3.4)}/>
<path d="M-14 8 h28 v24 h-28 Z" fill="${P.paper}" ${ink(3.2)}/></g>
<path d="M0 300 q24 -18 48 0 t48 0 t48 0 t48 0 t48 0" fill="none" stroke="${P.seaFoam}" stroke-width="5"/>`,
  },
  {
    id: 'baleni-batohu', name: 'Balení batohu', category: 'everyday', tint: P.green,
    art: `${roomWarm}
${prop('backpack', 168, 244, 0.52)}
${person({ x: 82, y: 320, s: 1.4, skin: SKIN[1], hair: HAIR[0], shirt: P.blue, pants: P.navy, mood: 'calm', pose: 'sit' })}
<g ${ink(3.2)}><rect x="100" y="286" width="26" height="18" rx="4" fill="${P.coral}"/>
<rect x="132" y="292" width="22" height="14" rx="4" fill="${P.yellow}"/></g>`,
  },
  {
    id: 'paleta-barev', name: 'Paleta barev', category: 'everyday', tint: P.coral,
    art: `${roomCool}
<g transform="translate(120 210)">
<path d="M-70 0 q0 -52 70 -52 q70 0 70 52 q0 40 -46 40 q-22 0 -22 16 q0 20 -24 20 q-48 0 -48 -76 Z" fill="${P.sand}" ${ink(4)}/>
<circle cx="-40" cy="-16" r="12" fill="${P.coral}" ${ink(3)}/>
<circle cx="-6" cy="-28" r="12" fill="${P.yellow}" ${ink(3)}/>
<circle cx="30" cy="-24" r="12" fill="${P.teal}" ${ink(3)}/>
<circle cx="54" cy="4" r="12" fill="${P.violet}" ${ink(3)}/></g>
${prop('paintbrush', 176, 288, 0.3)}`,
  },
  {
    id: 'padajici-listi', name: 'Padající listí', category: 'nature', tint: P.rust,
    art: `${sky('warm')}
${ground(302, P.grassDark)}
${person({ x: 120, y: 322, s: 1.5, skin: SKIN[1], hair: HAIR[1], shirt: P.rust, pants: P.navy, mood: 'happy', pose: 'armsUp' })}
<g fill="${P.rust}" ${ink(2.8)}>
<path d="M52 130 q16 -12 22 6 q-16 12 -22 -6 Z"/><path d="M186 168 q16 -12 22 6 q-16 12 -22 -6 Z"/>
<path d="M76 226 q16 -12 22 6 q-16 12 -22 -6 Z"/><path d="M168 244 q16 -12 22 6 q-16 12 -22 -6 Z"/>
<path d="M40 202 q16 -12 22 6 q-16 12 -22 -6 Z"/></g>`,
  },
  {
    id: 'lupa-badatel', name: 'Badatel s lupou', category: 'school', tint: P.sage,
    art: `${roomCool}
${person({ x: 106, y: 324, s: 1.6, skin: SKIN[1], hair: HAIR[0], shirt: P.sage, pants: P.navy, mood: 'surprised', pose: 'hold' })}
${prop('magnifier', 168, 226, 0.44)}
<g fill="${P.green}"><circle cx="176" cy="292" r="8"/><circle cx="196" cy="300" r="6"/></g>`,
  },
  {
    id: 'dilna-s-hrackami', name: 'Dílna s hračkami', category: 'family', tint: P.wood,
    art: `<rect width="${W}" height="${H}" fill="#3B2E28"/>
<rect x="0" y="288" width="${W}" height="${H - 288}" fill="${P.woodDark}"/><path d="M0 288 H${W}" ${ink(4)}/>
<rect x="24" y="266" width="192" height="22" rx="6" fill="${P.wood}" ${ink(4)}/>
${prop('blocks', 62, 232, 0.4)}${prop('spinningtop', 122, 236, 0.32)}${prop('yoyo', 178, 238, 0.32)}
<circle cx="120" cy="128" r="20" fill="${P.yellow}" ${ink(3.6)}/>
<path d="M120 108 v-24" ${ink(3.4)}/>`,
  },
  {
    id: 'snehulak', name: 'Sněhulák', category: 'nature', tint: P.snow,
    art: `${sky('cool')}
<path d="M0 292 q30 -18 60 0 t60 0 t60 0 t60 0 V${H} H0 Z" fill="${P.snow}" ${ink(4)}/>
<g transform="translate(126 250)">
<circle cx="0" cy="30" r="44" fill="${P.white}" ${ink(4)}/>
<circle cx="0" cy="-26" r="32" fill="${P.white}" ${ink(4)}/>
<circle cx="0" cy="-74" r="24" fill="${P.white}" ${ink(4)}/>
<circle cx="-8" cy="-80" r="3.6" fill="${P.ink}"/><circle cx="8" cy="-80" r="3.6" fill="${P.ink}"/>
<path d="M0 -74 l22 6 l-22 6 Z" fill="${P.coral}" ${ink(2.6)}/>
<path d="M-32 -30 L-64 -54 M32 -30 L64 -54" ${ink(5)}/>
<circle cx="0" cy="-34" r="4" fill="${P.ink}"/><circle cx="0" cy="-16" r="4" fill="${P.ink}"/>
<path d="M-24 -96 h48 v10 h-48 Z" fill="${P.red}" ${ink(3.2)}/>
<path d="M-16 -96 q16 -20 32 0 Z" fill="${P.red}" ${ink(3.2)}/></g>
<g fill="${P.white}"><circle cx="44" cy="120" r="4"/><circle cx="196" cy="152" r="4"/><circle cx="86" cy="86" r="3"/></g>`,
  },
  {
    id: 'penezenka', name: 'Peněženka', category: 'everyday', tint: P.brown,
    art: `${roomWarm}
<g transform="translate(120 214)">
<path d="M-70 -34 h124 q16 0 16 18 v52 q0 18 -16 18 h-124 q-16 0 -16 -18 v-52 q0 -18 16 -18 Z" fill="${P.brown}" ${ink(4)}/>
<path d="M28 6 h42 v26 h-42 q-14 0 -14 -13 q0 -13 14 -13 Z" fill="${P.woodDark}" ${ink(3.4)}/>
<circle cx="38" cy="19" r="5" fill="${P.gold}"/></g>
<g fill="${P.gold}" ${ink(3)}><circle cx="88" cy="292" r="11"/><circle cx="118" cy="300" r="9"/></g>`,
  },
  {
    id: 'trezor', name: 'Trezor', category: 'fantasy', tint: P.slate,
    art: `<rect width="${W}" height="${H}" fill="#262C40"/>
<rect x="0" y="300" width="${W}" height="${H - 300}" fill="#333A52"/><path d="M0 300 H${W}" ${ink(4)}/>
<rect x="48" y="128" width="144" height="168" rx="12" fill="${P.slate}" ${ink(4)}/>
<rect x="64" y="144" width="112" height="136" rx="8" fill="${P.stone}" ${ink(3.6)}/>
<circle cx="120" cy="212" r="30" fill="${P.slate}" ${ink(4)}/>
<g ${ink(4)}><path d="M120 182 v12 M120 230 v12 M90 212 h12 M138 212 h12"/></g>
<circle cx="120" cy="212" r="9" fill="${P.gold}" ${ink(3)}/>
${sparkle(190, 108, 9, P.yellow)}`,
  },
  {
    id: 'cekani-na-tramvaj', name: 'Čekání na tramvaj', category: 'everyday', tint: P.teal,
    art: `${sky('dusk')}
<rect x="0" y="284" width="${W}" height="${H - 284}" fill="${P.slate}"/><path d="M0 284 H${W}" ${ink(4)}/>
<rect x="16" y="176" width="72" height="110" rx="8" fill="${P.teal}" ${ink(4)}/>
<g fill="${P.cream}" ${ink(3)}><rect x="28" y="192" width="20" height="24" rx="4"/><rect x="56" y="192" width="20" height="24" rx="4"/></g>
<circle cx="34" cy="296" r="10" fill="${P.ink}"/><circle cx="72" cy="296" r="10" fill="${P.ink}"/>
${person({ x: 164, y: 316, s: 1.5, skin: SKIN[1], hair: HAIR[0], shirt: P.green, pants: P.navy, mood: 'calm', pose: 'stand',
  extras: `<rect x="-40" y="-70" width="24" height="32" rx="8" fill="${P.coral}" stroke="${P.ink}" stroke-width="3.2"/>` })}`,
  },
  {
    id: 'velka-vlna', name: 'Velká vlna', category: 'nature', tint: P.sea,
    art: `${sky('storm')}
<path d="M-10 200 q60 -96 130 -34 q46 42 8 62 q-30 16 -44 -12 q26 8 26 -14 q0 -26 -34 -20 q-46 8 -46 66 V${H} H-10 Z" fill="${P.sea}" ${ink(4)}/>
<path d="M0 268 q30 -22 60 0 t60 0 t60 0 t60 0 V${H} H0 Z" fill="${P.seaDeep}" ${ink(4)}/>
<g fill="${P.seaFoam}"><circle cx="152" cy="150" r="9"/><circle cx="176" cy="128" r="6"/><circle cx="196" cy="164" r="5"/></g>`,
  },
  {
    id: 'sdileni', name: 'Sdílení', category: 'family', tint: P.yellow,
    art: `${roomWarm}
${person({ x: 78, y: 320, s: 1.4, skin: SKIN[0], hair: HAIR[1], shirt: P.pink, pants: P.navy, mood: 'happy', pose: 'hold', hairStyle: 'long' })}
${person({ x: 164, y: 320, s: 1.4, skin: SKIN[2], hair: HAIR[0], shirt: P.green, pants: P.navy, mood: 'proud', pose: 'hold' })}
${prop('apple', 120, 258, 0.28)}
${heart(120, 170, 0.6, P.red)}`,
  },
  {
    id: 'nuda', name: 'Nuda', category: 'feelings', tint: P.sand,
    art: `${roomWarm}
<rect x="20" y="286" width="200" height="18" rx="6" fill="${P.wood}" ${ink(4)}/>
${person({ x: 120, y: 300, s: 1.6, skin: SKIN[0], hair: HAIR[3], shirt: P.red, pants: P.navy, mood: 'sleepy', pose: 'thinking', hairStyle: 'long' })}
<g fill="${P.slate}" opacity="0.6"><circle cx="188" cy="200" r="4"/><circle cx="200" cy="184" r="3"/><circle cx="210" cy="170" r="2.5"/></g>`,
  },
  {
    id: 'tricko', name: 'Tričko', category: 'everyday', tint: P.teal,
    art: `${roomCool}
<g transform="translate(120 206)">
<path d="M-26 -62 L-70 -34 l18 44 l20 -12 v100 h104 v-100 l20 12 l18 -44 L26 -62 Z" fill="${P.teal}" ${ink(4)}/>
<path d="M-26 -62 q26 26 52 0" fill="none" ${ink(3.4)}/>
<path d="M0 -50 v130" fill="none" ${ink(3.4)}/>
<g fill="${P.gold}"><circle cx="-8" cy="-20" r="4"/><circle cx="-8" cy="10" r="4"/><circle cx="-8" cy="40" r="4"/></g></g>`,
  },
  {
    id: 'horska-draha', name: 'Horská dráha', category: 'adventure', tint: P.coral,
    art: `${sky('dusk')}
${ground(316, P.grassDark)}
<g fill="${P.slate}"><rect x="44" y="176" width="10" height="140"/><rect x="118" y="132" width="10" height="184"/><rect x="192" y="160" width="10" height="156"/></g>
<path d="M-10 236 q60 -80 108 -104 q56 -28 142 42" fill="none" stroke="${P.coral}" stroke-width="14"/>
<path d="M-10 236 q60 -80 108 -104 q56 -28 142 42" fill="none" ${ink(3.4)}/>
<path d="M-10 250 q60 -80 108 -104 q56 -28 142 42" fill="none" stroke="${P.rust}" stroke-width="5"/>
<g transform="translate(120 122) rotate(-14)">
<rect x="-28" y="-20" width="56" height="30" rx="7" fill="${P.yellow}" ${ink(3.6)}/>
<circle cx="-12" cy="-28" r="8" fill="${SKIN[1]}" ${ink(2.8)}/><circle cx="12" cy="-28" r="8" fill="${SKIN[0]}" ${ink(2.8)}/>
<circle cx="-16" cy="14" r="6" fill="${P.ink}"/><circle cx="16" cy="14" r="6" fill="${P.ink}"/></g>`,
  },
  {
    id: 'astronaut', name: 'Astronaut', category: 'adventure', tint: P.navy,
    art: `${sky('space')}${stars(12)}
${prop('planet', 190, 268, 0.4)}
${person({ x: 116, y: 214, s: 1.5, skin: SKIN[0], hair: HAIR[4], shirt: P.white, pants: P.white, mood: 'excited', pose: 'armsUp', hairStyle: 'hat',
  extras: `<circle cx="0" cy="-100" r="32" fill="${P.seaFoam}" opacity="0.4" stroke="${P.ink}" stroke-width="3.6"/>
<rect x="-30" y="-76" width="16" height="34" rx="6" fill="${P.stone}" stroke="${P.ink}" stroke-width="3"/>` })}
${sparkle(56, 118, 11, P.yellow)}`,
  },
  {
    id: 'ostrov-s-palmou', name: 'Ostrov s palmou', category: 'nature', tint: P.sand,
    art: `${sky('dusk')}${prop('sun', 194, 92, 0.28)}
${water(252, P.teal)}
<path d="M56 296 q64 -30 128 0 q-30 22 -64 22 q-34 0 -64 -22 Z" fill="${P.sand}" ${ink(4)}/>
${prop('palm', 122, 226, 0.62)}
<path d="M0 330 q24 -14 48 0 t48 0 t48 0 t48 0 t48 0" fill="none" stroke="${P.seaFoam}" stroke-width="5"/>`,
  },
  {
    id: 'pocitani-minci', name: 'Počítání mincí', category: 'everyday', tint: P.gold,
    art: `<rect width="${W}" height="${H}" fill="#3A3242"/>
<rect x="0" y="286" width="${W}" height="${H - 286}" fill="${P.woodDark}"/><path d="M0 286 H${W}" ${ink(4)}/>
<rect x="24" y="268" width="192" height="20" rx="6" fill="${P.wood}" ${ink(4)}/>
<g fill="${P.gold}" ${ink(3.2)}>
<circle cx="150" cy="256" r="13"/><circle cx="178" cy="256" r="13"/><circle cx="164" cy="234" r="13"/></g>
${person({ x: 82, y: 286, s: 1.45, skin: SKIN[0], hair: '#D8D4E2', shirt: P.brown, pants: P.slate, mood: 'calm', pose: 'hold' })}
<circle cx="120" cy="130" r="18" fill="${P.yellow}" ${ink(3.4)}/>`,
  },
  {
    id: 'nastenka-s-fotkami', name: 'Nástěnka s fotkami', category: 'school', tint: P.paper,
    art: `${roomWarm}
<rect x="30" y="120" width="180" height="150" rx="6" fill="${P.paper}" ${ink(4)}/>
<g fill="${P.white}" ${ink(3.2)}>
<rect x="48" y="140" width="46" height="36" rx="3" transform="rotate(-6 71 158)"/>
<rect x="110" y="136" width="46" height="36" rx="3" transform="rotate(4 133 154)"/>
<rect x="160" y="150" width="42" height="34" rx="3" transform="rotate(-4 181 167)"/>
<rect x="62" y="200" width="46" height="36" rx="3" transform="rotate(5 85 218)"/>
<rect x="128" y="204" width="46" height="36" rx="3" transform="rotate(-5 151 222)"/></g>
<g stroke="${P.red}" stroke-width="3"><path d="M84 176 L134 204 M152 172 L120 200"/></g>
<g fill="${P.red}"><circle cx="84" cy="176" r="4"/><circle cx="134" cy="204" r="4"/><circle cx="152" cy="172" r="4"/></g>`,
  },
  {
    id: 'bryle-a-kniha', name: 'Brýle a kniha', category: 'everyday', tint: P.brown,
    art: `${roomWarm}
<rect x="20" y="270" width="200" height="18" rx="6" fill="${P.wood}" ${ink(4)}/>
${prop('book', 108, 232, 0.56)}
${prop('glasses', 176, 250, 0.34)}
<circle cx="60" cy="150" r="18" fill="${P.yellow}" ${ink(3.6)}/>`,
  },
  {
    id: 'promoce', name: 'Promoce', category: 'school', tint: P.navy,
    art: `${sky('warm')}
${ground(312, P.grass)}
${person({ x: 120, y: 322, s: 1.6, skin: SKIN[1], hair: HAIR[0], shirt: P.navy, pants: P.navy, mood: 'proud', pose: 'jump', hairStyle: 'hat',
  extras: `<path d="M-34 -122 h68 l-34 -16 Z" fill="${P.ink}"/>
<path d="M-24 -122 h48 v8 h-48 Z" fill="${P.ink}"/>
<path d="M28 -122 v22" stroke="${P.yellow}" stroke-width="3.4"/><circle cx="28" cy="-98" r="5" fill="${P.yellow}"/>` })}
${sparkle(56, 140, 11, P.yellow)}${sparkle(190, 168, 8, P.yellow)}`,
  },
  {
    id: 'krabice-prekvapeni', name: 'Krabice s překvapením', category: 'family', tint: P.sand,
    art: `${roomWarm}
<g transform="translate(120 232)">
<circle cx="0" cy="-40" r="26" fill="${P.coral}" ${ink(4)}/>
<circle cx="-9" cy="-44" r="4" fill="${P.ink}"/><circle cx="9" cy="-44" r="4" fill="${P.ink}"/>
<path d="M-8 -30 q8 6 16 0" fill="none" ${ink(3)}/>
<path d="M-56 -12 h112 v70 h-112 Z" fill="${P.sand}" ${ink(4)}/>
<path d="M-56 -12 l-14 -22 h140 l-14 22 Z" fill="${P.paper}" ${ink(4)}/>
<path d="M-56 20 h112" fill="none" ${ink(3)}/></g>
${sparkle(120, 160, 13, P.yellow)}${sparkle(78, 182, 8, P.coral)}${sparkle(166, 186, 8, P.teal)}`,
  },
];
