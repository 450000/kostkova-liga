import { P, SKIN, HAIR } from './palette';
import { sky, ground, cloud, stars, sparkle, ink, W, H } from './scene';
import { person } from './people';
import { prop, heart } from './props';
import type { Card } from './types';

/** Pokojová scéna – opakuje se ve většině karet každodenní sady. */
const roomWarm = `${sky('warm')}<rect x="0" y="284" width="${W}" height="${H - 284}" fill="${P.floor}"/><path d="M0 284 H${W}" ${ink(4)}/>`;
const roomCool = `${sky('cool')}<rect x="0" y="284" width="${W}" height="${H - 284}" fill="${P.wallCool}"/><path d="M0 284 H${W}" ${ink(4)}/>`;

export const everyday1: Card[] = [
  {
    id: 'hrncirsky-kruh', name: 'Hrnčířský kruh', category: 'everyday', tint: P.brown,
    art: `${roomWarm}
${person({ x: 120, y: 300, s: 1.5, skin: SKIN[1], hair: HAIR[0], shirt: P.teal, pants: P.brown, mood: 'calm', pose: 'hold', hairStyle: 'bun' })}
<rect x="74" y="288" width="92" height="18" rx="6" fill="${P.woodDark}" ${ink(4)}/>
<path d="M88 288 q32 -58 64 0 Z" fill="${P.brown}" ${ink(4)}/>
<path d="M98 254 q22 -16 44 0" fill="none" ${ink(3.4)}/>`,
  },
  {
    id: 'ustarany', name: 'Ustaraný', category: 'feelings', tint: P.yellow,
    art: `${roomWarm}
${person({ x: 120, y: 330, s: 2.0, skin: SKIN[1], hair: HAIR[0], shirt: P.yellow, pants: P.navy, mood: 'worried', pose: 'cover' })}`,
  },
  {
    id: 'spadla-zmrzlina', name: 'Spadlá zmrzlina', category: 'feelings', tint: P.pink,
    art: `${sky('warm')}
<rect x="0" y="292" width="${W}" height="${H - 292}" fill="${P.paper}"/><path d="M0 292 H${W}" ${ink(4)}/>
<g transform="translate(120 236) rotate(150)">
<path d="M-22 -30 h44 L0 44 Z" fill="${P.sand}" ${ink(5)}/>
<circle cx="0" cy="-40" r="26" fill="${P.pink}" ${ink(5)}/></g>
<ellipse cx="128" cy="298" rx="52" ry="14" fill="${P.pink}" ${ink(4)}/>
<ellipse cx="98" cy="306" rx="18" ry="7" fill="${P.pink}" ${ink(3.4)}/>
<g fill="${P.slate}"><circle cx="62" cy="200" r="4"/><circle cx="184" cy="228" r="4"/></g>`,
  },
  {
    id: 'hadka', name: 'Hádka', category: 'feelings', tint: P.coral,
    art: `${roomWarm}
${person({ x: 74, y: 320, s: 1.5, skin: SKIN[0], hair: HAIR[1], shirt: P.coral, pants: P.navy, mood: 'angry', pose: 'point' })}
${person({ x: 168, y: 320, s: 1.5, skin: SKIN[2], hair: HAIR[0], shirt: P.teal, pants: P.navy, mood: 'angry', pose: 'point', rotate: 0 })}
<g stroke="${P.red}" stroke-width="5" stroke-linecap="round">
<path d="M108 158 l-14 -18 M120 150 v-22 M132 158 l14 -18"/></g>`,
  },
  {
    id: 'lampion-prani', name: 'Lampion přání', category: 'feelings', tint: P.violet,
    art: `${sky('night')}${stars(9)}
<path d="M0 306 q30 -18 60 0 t60 0 t60 0 t60 0 V${H} H0 Z" fill="#2A2450" ${ink(4)}/>
<g transform="translate(126 128)">
<path d="M-28 -30 h56 l10 44 q-38 16 -76 0 Z" fill="${P.coral}" ${ink(4)}/>
<path d="M-28 -30 q28 -22 56 0" fill="none" ${ink(3.4)}/>
<circle cx="0" cy="26" r="9" fill="${P.yellow}"/></g>
<circle cx="126" cy="128" r="66" fill="${P.yellow}" opacity="0.14"/>
${person({ x: 92, y: 320, s: 1.3, skin: SKIN[1], hair: HAIR[1], shirt: P.violet, pants: P.navy, mood: 'calm', pose: 'armsUp' })}`,
  },
  {
    id: 'zlomene-srdce', name: 'Zlomené srdce', category: 'feelings', tint: P.red,
    art: `${sky('warm')}
<g transform="translate(94 186) rotate(-12)">${heart(0, -20, 1.5, P.red)}</g>
<g transform="translate(152 196) rotate(16)">${heart(0, -20, 1.4, P.red)}</g>
<path d="M120 108 l-16 40 l20 24 l-14 44" fill="none" stroke="${P.paper}" stroke-width="7"/>
<path d="M0 302 q30 -18 60 0 t60 0 t60 0 t60 0 V${H} H0 Z" fill="${P.paper}" ${ink(4)}/>`,
  },
  {
    id: 'odrene-koleno', name: 'Odřené koleno', category: 'everyday', tint: P.blue,
    art: `${sky('day')}${cloud(50, 56, 0.7)}
<rect x="0" y="278" width="${W}" height="${H - 278}" fill="${P.slate}"/><path d="M0 278 H${W}" ${ink(4)}/>
${person({ x: 120, y: 320, s: 1.7, skin: SKIN[0], hair: HAIR[1], shirt: P.blue, pants: P.navy, mood: 'sad', pose: 'sit' })}
<path d="M92 300 h16 v10 h-16 Z" fill="${P.coral}" ${ink(3)}/>
<path d="M56 268 h20 M164 268 h20" stroke="${P.cream}" stroke-width="5"/>`,
  },
  {
    id: 'zmeskany-autobus', name: 'Zmeškaný autobus', category: 'everyday', tint: P.slate,
    art: `${sky('day')}${cloud(56, 52, 0.75)}
<rect x="0" y="250" width="${W}" height="${H - 250}" fill="${P.slate}"/><path d="M0 250 H${W}" ${ink(4)}/>
<path d="M22 306 h40 M96 306 h40 M170 306 h40" stroke="${P.cream}" stroke-width="6"/>
${prop('bus', 176, 210, 0.74)}
${person({ x: 74, y: 302, s: 1.55, skin: SKIN[2], hair: HAIR[1], shirt: P.coral, pants: P.navy, mood: 'surprised', pose: 'run' })}`,
  },
  {
    id: 'domaci-ukol', name: 'Domácí úkol', category: 'school', tint: P.sand,
    art: `${roomCool}
<rect x="34" y="272" width="172" height="18" rx="5" fill="${P.wood}" ${ink(4)}/>
<path d="M52 290 v40 M188 290 v40" ${ink(5)}/>
<rect x="86" y="252" width="66" height="22" rx="3" fill="${P.white}" ${ink(3.6)}/>
<path d="M96 262 h44 M96 268 h30" stroke="${P.slate}" stroke-width="2.6"/>
${person({ x: 120, y: 272, s: 1.45, skin: SKIN[0], hair: HAIR[1], shirt: P.teal, pants: P.navy, mood: 'calm', pose: 'hold', hairStyle: 'bun' })}`,
  },
  {
    id: 'pod-dekami', name: 'Pod dekami', category: 'feelings', tint: P.lavender,
    art: `${roomCool}
<path d="M46 292 q0 -96 74 -96 q74 0 74 96 Z" fill="${P.lavender}" ${ink(4)}/>
<path d="M58 258 q62 -22 124 0 M52 276 q68 -18 136 0" fill="none" ${ink(3.2)}/>
<circle cx="120" cy="214" r="26" fill="${SKIN[1]}" ${ink(3.6)}/>
<circle cx="111" cy="210" r="4" fill="${P.ink}"/><circle cx="129" cy="210" r="4" fill="${P.ink}"/>
<path d="M112 226 q8 6 16 0" fill="none" ${ink(3)}/>`,
  },
  {
    id: 'zamotana-sluchatka', name: 'Zamotaná sluchátka', category: 'everyday', tint: P.teal,
    art: `${roomWarm}
${person({ x: 120, y: 322, s: 1.5, skin: SKIN[0], hair: HAIR[1], shirt: P.teal, pants: P.navy, mood: 'worried', pose: 'hold', hairStyle: 'long' })}
<g fill="none" stroke="${P.ink}" stroke-width="5">
<path d="M96 246 q-28 22 4 34 q34 10 8 30 q-28 20 12 26 q40 4 22 -26 q-16 -30 18 -34 q30 -4 12 -30"/></g>
<circle cx="90" cy="238" r="9" fill="${P.white}" ${ink(3.4)}/>
<circle cx="152" cy="242" r="9" fill="${P.white}" ${ink(3.4)}/>`,
  },
  {
    id: 'kolo', name: 'Kolo', category: 'everyday', tint: P.coral,
    art: `${sky('cool')}
<path d="M-10 226 L46 176 L104 224 L162 168 L250 236 V${H} H-10 Z" fill="${P.hill}" opacity="0.55"/>
<rect x="0" y="288" width="${W}" height="${H - 288}" fill="${P.sand}"/><path d="M0 288 H${W}" ${ink(4)}/>
${prop('bicycle', 120, 232, 1.16)}`,
  },
  {
    id: 'tajemne-dvere', name: 'Tajemné dveře', category: 'fantasy', tint: P.wood,
    art: `<rect width="${W}" height="${H}" fill="${P.woodDark}"/>
<path d="M56 330 V148 q0 -64 64 -64 q64 0 64 64 v182 Z" fill="${P.wood}" ${ink(5)}/>
<path d="M120 84 v246" fill="none" ${ink(3.4)}/>
<path d="M72 168 h96 M72 220 h96 M72 272 h96" fill="none" ${ink(3)}/>
<circle cx="146" cy="230" r="11" fill="${P.gold}" ${ink(3.4)}/>
<path d="M104 228 a10 10 0 1 1 0 -0.1 M104 236 l-4 16 h8 Z" fill="${P.ink}"/>
<circle cx="120" cy="252" r="72" fill="${P.yellow}" opacity="0.12"/>`,
  },
  {
    id: 'rozbita-vaza', name: 'Rozbitá váza', category: 'feelings', tint: P.blue,
    art: `${roomWarm}
${person({ x: 148, y: 320, s: 1.45, skin: SKIN[1], hair: HAIR[0], shirt: P.green, pants: P.navy, mood: 'worried', pose: 'cover' })}
<g fill="${P.blue}" ${ink(3.4)}>
<path d="M46 296 l18 -34 l16 18 Z"/><path d="M72 300 l20 -22 l10 22 Z"/><path d="M28 306 l14 -12 l6 12 Z"/></g>
<g fill="${P.blue}" opacity="0.6"><circle cx="96" cy="308" r="4"/><circle cx="58" cy="312" r="3"/></g>`,
  },
  {
    id: 'kos-pradla', name: 'Koš s prádlem', category: 'everyday', tint: P.teal,
    art: `${roomWarm}
${person({ x: 120, y: 320, s: 1.5, skin: SKIN[2], hair: HAIR[0], shirt: P.blue, pants: P.navy, mood: 'happy', pose: 'hold' })}
<g transform="translate(120 268)">
<path d="M-42 -6 h84 l-8 46 h-68 Z" fill="${P.teal}" ${ink(4)}/>
<path d="M-30 8 h60 M-28 26 h56" fill="none" ${ink(3)}/>
<path d="M-30 -6 q18 -24 34 -6 q14 -18 28 6 Z" fill="${P.white}" ${ink(3.4)}/></g>`,
  },
  {
    id: 'kocka-akvarium', name: 'Kočka u akvária', category: 'animals', tint: P.sea,
    art: `${roomCool}
<rect x="24" y="284" width="150" height="14" rx="4" fill="${P.wood}" ${ink(4)}/>
<rect x="48" y="196" width="104" height="88" rx="8" fill="${P.seaFoam}" opacity="0.75" ${ink(4)}/>
<path d="M48 220 h104" fill="none" ${ink(3)}/>
${prop('fish', 96, 250, 0.28)}${prop('fish', 132, 268, 0.2)}
${prop('cat', 190, 268, 0.5)}`,
  },
  {
    id: 'sluchatka-hudba', name: 'Hudba do sluchátek', category: 'everyday', tint: P.violet,
    art: `${sky('warm')}
<rect x="0" y="300" width="${W}" height="${H - 300}" fill="${P.floor}"/><path d="M0 300 H${W}" ${ink(4)}/>
${person({ x: 120, y: 326, s: 1.75, skin: SKIN[1], hair: HAIR[1], shirt: P.violet, pants: P.navy, mood: 'calm', pose: 'stand', hairStyle: 'long',
  extras: `<path d="M-30 -108 q0 -22 30 -22 q30 0 30 22" fill="none" stroke="${P.ink}" stroke-width="5"/>
<rect x="-40" y="-110" width="18" height="26" rx="8" fill="${P.coral}" stroke="${P.ink}" stroke-width="3"/>
<rect x="22" y="-110" width="18" height="26" rx="8" fill="${P.coral}" stroke="${P.ink}" stroke-width="3"/>` })}
${prop('note', 52, 156, 0.26)}${prop('note', 190, 190, 0.2)}`,
  },
  {
    id: 'odchod-s-batohem', name: 'Odchod s batohem', category: 'feelings', tint: P.sage,
    art: `${sky('dusk')}
${ground(300, P.grassDark)}
${person({ x: 132, y: 322, s: 1.55, skin: SKIN[1], hair: HAIR[0], shirt: P.coral, pants: P.navy, mood: 'sad', pose: 'stand',
  extras: `<rect x="-42" y="-72" width="26" height="36" rx="8" fill="${P.green}" stroke="${P.ink}" stroke-width="3.4"/>` })}
<path d="M0 340 q60 -14 120 -12 q60 -2 120 12" fill="none" stroke="${P.sand}" stroke-width="8"/>`,
  },
  {
    id: 'promin', name: 'Promiň', category: 'feelings', tint: P.pink,
    art: `${roomWarm}
${person({ x: 120, y: 326, s: 1.6, skin: SKIN[0], hair: HAIR[1], shirt: P.blue, pants: P.navy, mood: 'shy', pose: 'hold' })}
<rect x="72" y="222" width="96" height="52" rx="6" fill="${P.white}" ${ink(4)}/>
<path d="M88 244 h64 M88 258 h44" stroke="${P.slate}" stroke-width="4"/>
${heart(178, 172, 0.7, P.pink)}`,
  },
  {
    id: 'darek', name: 'Dárek', category: 'family', tint: P.coral,
    art: `${roomWarm}
${person({ x: 120, y: 320, s: 1.5, skin: SKIN[0], hair: HAIR[3], shirt: P.pink, pants: P.navy, mood: 'excited', pose: 'hold', hairStyle: 'long' })}
${prop('gift', 120, 258, 0.42)}
${sparkle(58, 168, 10, P.yellow)}${sparkle(190, 196, 8, P.yellow)}`,
  },
  {
    id: 'objeti', name: 'Objetí', category: 'family', tint: P.peach,
    art: `${roomWarm}
${person({ x: 148, y: 322, s: 1.75, skin: SKIN[2], hair: HAIR[0], shirt: P.brown, pants: P.navy, mood: 'calm', pose: 'stand' })}
${person({ x: 92, y: 322, s: 1.15, skin: SKIN[0], hair: HAIR[1], shirt: P.coral, pants: P.navy, mood: 'happy', pose: 'armsOut', hairStyle: 'long' })}
${heart(120, 150, 0.8, P.red)}`,
  },
  {
    id: 'budik', name: 'Budík', category: 'everyday', tint: P.red,
    art: `${roomCool}
<rect x="34" y="284" width="172" height="16" rx="5" fill="${P.wood}" ${ink(4)}/>
${prop('clock', 118, 216, 0.94)}
<g stroke="${P.coral}" stroke-width="5" stroke-linecap="round">
<path d="M44 168 l-16 -14 M40 196 h-20 M196 168 l16 -14 M200 196 h20"/></g>`,
  },
  {
    id: 'uceni-do-noci', name: 'Učení do noci', category: 'school', tint: P.navy,
    art: `<rect width="${W}" height="${H}" fill="#242A46"/>
<rect x="0" y="286" width="${W}" height="${H - 286}" fill="${P.woodDark}"/><path d="M0 286 H${W}" ${ink(4)}/>
<rect x="24" y="270" width="192" height="16" rx="5" fill="${P.wood}" ${ink(4)}/>
<circle cx="180" cy="220" r="58" fill="${P.yellow}" opacity="0.16"/>
${prop('lamp', 184, 208, 0.42)}
${person({ x: 92, y: 270, s: 1.45, skin: SKIN[1], hair: HAIR[0], shirt: P.blue, pants: P.navy, mood: 'sleepy', pose: 'hold' })}
${prop('book', 128, 258, 0.26)}`,
  },
];
