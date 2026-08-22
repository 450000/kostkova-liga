import { P, SKIN, HAIR } from './palette';
import { sky, ground, cloud, stars, sparkle, ink, W, H } from './scene';
import { person } from './people';
import { prop, heart } from './props';
import type { Card } from './types';

const roomWarm = `${sky('warm')}<rect x="0" y="284" width="${W}" height="${H - 284}" fill="${P.floor}"/><path d="M0 284 H${W}" ${ink(4)}/>`;
const roomCool = `${sky('cool')}<rect x="0" y="284" width="${W}" height="${H - 284}" fill="${P.wallCool}"/><path d="M0 284 H${W}" ${ink(4)}/>`;

export const everyday4: Card[] = [
  {
    id: 'skok-do-louze', name: 'Skok do louže', category: 'everyday', tint: P.blue,
    art: `${sky('storm')}
<rect x="0" y="296" width="${W}" height="${H - 296}" fill="${P.slate}"/><path d="M0 296 H${W}" ${ink(4)}/>
<ellipse cx="120" cy="322" rx="76" ry="18" fill="${P.blue}" ${ink(4)}/>
${person({ x: 120, y: 300, s: 1.5, skin: SKIN[1], hair: HAIR[1], shirt: P.yellow, pants: P.navy, mood: 'excited', pose: 'jump' })}
<g fill="${P.seaFoam}"><circle cx="58" cy="292" r="7"/><circle cx="182" cy="286" r="6"/><circle cx="76" cy="266" r="5"/><circle cx="168" cy="258" r="4"/></g>`,
  },
  {
    id: 'kresleni-hvezd', name: 'Kreslení hvězd', category: 'school', tint: P.navy,
    art: `${sky('night')}${stars(10)}
${ground(316, '#243055')}
${person({ x: 96, y: 328, s: 1.4, skin: SKIN[1], hair: HAIR[0], shirt: P.violet, pants: P.navy, mood: 'calm', pose: 'point' })}
${sparkle(174, 132, 16, P.yellow)}
<path d="M138 190 q26 -28 34 -46" fill="none" ${ink(3)} stroke-dasharray="7 6"/>`,
  },
  {
    id: 'skok-pres-potok', name: 'Skok přes potok', category: 'adventure', tint: P.teal,
    art: `${sky('day')}${cloud(52, 56, 0.7)}
${ground(300, P.grass)}
<path d="M74 302 q46 -22 92 0 v${H} h-92 Z" fill="${P.teal}" ${ink(4)}/>
${person({ x: 120, y: 288, s: 1.4, skin: SKIN[2], hair: HAIR[0], shirt: P.coral, pants: P.navy, mood: 'excited', pose: 'run' })}
<g fill="${P.stone}"><ellipse cx="52" cy="316" rx="20" ry="8"/><ellipse cx="192" cy="320" rx="18" ry="7"/></g>`,
  },
  {
    id: 'duha', name: 'Duha', category: 'nature', tint: P.coral,
    art: `${sky('cool')}${cloud(46, 92, 0.7)}${cloud(196, 120, 0.6)}
${ground(310, P.grass)}
${prop('rainbow', 122, 208, 1.14)}
${person({ x: 120, y: 326, s: 1.15, skin: SKIN[1], hair: HAIR[1], shirt: P.yellow, pants: P.navy, mood: 'excited', pose: 'armsUp' })}`,
  },
  {
    id: 'uletly-balonek', name: 'Uletlý balónek', category: 'feelings', tint: P.coral,
    art: `${sky('day')}${cloud(56, 62, 0.75)}
${ground(312, P.grass)}
<circle cx="176" cy="86" r="24" fill="${P.coral}" ${ink(4)}/>
<path d="M176 110 q-14 26 -30 34" fill="none" ${ink(3)}/>
${person({ x: 96, y: 328, s: 1.5, skin: SKIN[0], hair: HAIR[3], shirt: P.teal, pants: P.navy, mood: 'sad', pose: 'point', hairStyle: 'long' })}`,
  },
  {
    id: 'napad', name: 'Nápad', category: 'feelings', tint: P.yellow,
    art: `${roomCool}
<circle cx="120" cy="140" r="66" fill="${P.yellow}" opacity="0.22"/>
${prop('lightbulb', 120, 136, 0.6)}
${person({ x: 120, y: 328, s: 1.5, skin: SKIN[2], hair: HAIR[0], shirt: P.coral, pants: P.navy, mood: 'excited', pose: 'point' })}
${sparkle(70, 108, 9, P.yellow)}${sparkle(178, 96, 7, P.yellow)}`,
  },
  {
    id: 'vahy', name: 'Váhy', category: 'school', tint: P.gold,
    art: `${roomWarm}
<g transform="translate(120 210)">
<path d="M0 -70 v130" ${ink(5)}/>
<path d="M-70 -60 h140" ${ink(5)}/>
<path d="M-70 -60 v20 M70 -60 v20" fill="none" ${ink(3)}/>
<path d="M-96 -40 h52 l-14 26 h-24 Z" fill="${P.gold}" ${ink(3.6)}/>
<path d="M44 -40 h52 l-14 26 h-24 Z" fill="${P.gold}" ${ink(3.6)}/>
<path d="M-40 60 h80 q10 0 10 12 h-100 q0 -12 10 -12 Z" fill="${P.wood}" ${ink(4)}/>
<circle cx="0" cy="-70" r="8" fill="${P.gold}" ${ink(3)}/></g>`,
  },
  {
    id: 'jednicka', name: 'Jednička', category: 'school', tint: P.sage,
    art: `${roomCool}
<rect x="56" y="140" width="128" height="164" rx="6" fill="${P.white}" ${ink(4)}/>
<g stroke="${P.slate}" stroke-width="3"><path d="M74 176 h92 M74 198 h92 M74 220 h60"/></g>
<text x="128" y="286" text-anchor="middle" font-family="Georgia, serif" font-size="66" font-weight="700" fill="${P.sage}">1</text>
${sparkle(66, 120, 11, P.yellow)}${sparkle(190, 136, 8, P.yellow)}`,
  },
  {
    id: 'zamceno', name: 'Zamčeno', category: 'everyday', tint: P.slate,
    art: `${roomCool}
${prop('padlock', 120, 200, 1.0)}
${prop('key', 176, 296, 0.32)}
<path d="M0 300 H${W}" ${ink(4)}/>`,
  },
  {
    id: 'prvni-snih', name: 'První sníh', category: 'nature', tint: P.snow,
    art: `${sky('cool')}
<path d="M0 300 q30 -18 60 0 t60 0 t60 0 t60 0 V${H} H0 Z" fill="${P.snow}" ${ink(4)}/>
${person({ x: 120, y: 322, s: 1.5, skin: SKIN[1], hair: HAIR[0], shirt: P.red, pants: P.navy, mood: 'excited', pose: 'armsUp', hairStyle: 'hat',
  extras: `<path d="M-26 -112 q26 -16 52 0 v10 q-26 8 -52 0 Z" fill="${P.red}" stroke="${P.ink}" stroke-width="3.4"/>
<circle cx="0" cy="-134" r="9" fill="${P.white}" stroke="${P.ink}" stroke-width="3"/>` })}
<g fill="${P.white}"><circle cx="46" cy="106" r="5"/><circle cx="188" cy="140" r="5"/><circle cx="88" cy="168" r="4"/>
<circle cx="164" cy="86" r="4"/><circle cx="62" cy="222" r="4"/><circle cx="204" cy="212" r="4"/></g>`,
  },
  {
    id: 'ranni-vstavani', name: 'Ranní vstávání', category: 'everyday', tint: P.lavender,
    art: `${roomWarm}
<path d="M32 292 h150 v-46 q0 -18 -22 -18 H54 q-22 0 -22 18 Z" fill="${P.lavender}" ${ink(4)}/>
<path d="M32 258 h150" fill="none" ${ink(3)}/>
<rect x="42" y="216" width="46" height="26" rx="8" fill="${P.white}" ${ink(3.4)}/>
${person({ x: 196, y: 296, s: 1.25, skin: SKIN[0], hair: HAIR[1], shirt: P.pink, pants: P.pink, mood: 'sleepy', pose: 'armsUp', hairStyle: 'curly' })}
${prop('clock', 206, 210, 0.28)}`,
  },
  {
    id: 'cesta-do-skoly', name: 'Cesta do školy', category: 'school', tint: P.green,
    art: `${sky('day')}${cloud(48, 54, 0.7)}
${ground(296, P.grass)}
<path d="M60 ${H} q40 -80 60 -108 q22 -30 60 -50" fill="none" stroke="${P.sand}" stroke-width="26"/>
<path d="M60 ${H} q40 -80 60 -108 q22 -30 60 -50" fill="none" ${ink(3)}/>
${person({ x: 104, y: 322, s: 1.4, skin: SKIN[1], hair: HAIR[0], shirt: P.teal, pants: P.navy, mood: 'happy', pose: 'run',
  extras: `<rect x="-40" y="-70" width="24" height="32" rx="8" fill="${P.coral}" stroke="${P.ink}" stroke-width="3.2"/>` })}
${prop('tree', 200, 268, 0.34)}`,
  },
  {
    id: 'cisteni-zubu', name: 'Čištění zubů', category: 'everyday', tint: P.teal,
    art: `${roomCool}
<rect x="46" y="196" width="148" height="88" rx="10" fill="${P.white}" ${ink(4)}/>
<ellipse cx="120" cy="238" rx="46" ry="24" fill="${P.seaFoam}" ${ink(3.6)}/>
<path d="M120 196 v-40 q0 -10 -14 -10" fill="none" ${ink(4)}/>
${person({ x: 120, y: 330, s: 1.5, skin: SKIN[2], hair: HAIR[0], shirt: P.teal, pants: P.navy, mood: 'happy', pose: 'hold' })}
<path d="M148 268 l22 -34" stroke="${P.coral}" stroke-width="8" stroke-linecap="round"/>
<path d="M170 234 l8 -12" stroke="${P.white}" stroke-width="9" stroke-linecap="round"/>`,
  },
  {
    id: 'snidane', name: 'Snídaně', category: 'family', tint: P.yellow,
    art: `${roomWarm}
<rect x="18" y="268" width="204" height="20" rx="6" fill="${P.wood}" ${ink(4)}/>
<circle cx="88" cy="256" r="24" fill="${P.white}" ${ink(3.6)}/>
<circle cx="88" cy="256" r="10" fill="${P.yellow}" ${ink(3)}/>
${prop('coffee', 160, 244, 0.3)}
${person({ x: 120, y: 330, s: 1.5, skin: SKIN[0], hair: HAIR[1], shirt: P.coral, pants: P.navy, mood: 'happy', pose: 'hold' })}`,
  },
  {
    id: 'uklid', name: 'Úklid', category: 'everyday', tint: P.sage,
    art: `${roomWarm}
${person({ x: 92, y: 322, s: 1.5, skin: SKIN[1], hair: HAIR[0], shirt: P.sage, pants: P.navy, mood: 'happy', pose: 'hold' })}
${prop('broom', 152, 240, 0.5)}
<g fill="${P.slate}" opacity="0.5"><circle cx="184" cy="308" r="7"/><circle cx="204" cy="316" r="5"/></g>`,
  },
  {
    id: 'ztracena-hracka', name: 'Ztracená hračka', category: 'feelings', tint: P.brown,
    art: `${roomWarm}
${person({ x: 92, y: 324, s: 1.5, skin: SKIN[0], hair: HAIR[1], shirt: P.blue, pants: P.navy, mood: 'sad', pose: 'stand' })}
${prop('blocks', 186, 292, 0.26)}
<path d="M140 250 q22 -18 40 8" fill="none" ${ink(3)} stroke-dasharray="7 6"/>
${bubbleQuestion()}`,
  },
  {
    id: 'nachlazeni', name: 'Nachlazení', category: 'everyday', tint: P.blue,
    art: `${roomCool}
<path d="M28 296 h158 v-44 q0 -18 -22 -18 H50 q-22 0 -22 18 Z" fill="${P.blue}" ${ink(4)}/>
<path d="M28 264 h158" fill="none" ${ink(3)}/>
${person({ x: 152, y: 250, s: 1.05, skin: SKIN[0], hair: HAIR[0], shirt: P.white, pants: P.white, mood: 'sad', pose: 'sit' })}
<circle cx="196" cy="238" r="16" fill="${P.white}" ${ink(3.4)}/>
<path d="M190 232 h12 M196 226 v12" stroke="${P.coral}" stroke-width="3.4"/>`,
  },
  {
    id: 'prochazka-se-psem', name: 'Procházka se psem', category: 'animals', tint: P.grass,
    art: `${sky('day')}${cloud(50, 56, 0.7)}
${ground(306, P.grass)}
${person({ x: 82, y: 324, s: 1.4, skin: SKIN[1], hair: HAIR[1], shirt: P.coral, pants: P.navy, mood: 'happy', pose: 'point' })}
${prop('dog', 176, 292, 0.46)}
<path d="M116 284 q30 6 44 0" fill="none" ${ink(3.4)}/>`,
  },
  {
    id: 'kamaradi-na-lavicce', name: 'Kamarádi na lavičce', category: 'family', tint: P.wood,
    art: `${sky('warm')}
${ground(316, P.grass)}
<path d="M40 262 h160 M40 284 h160" stroke="${P.wood}" stroke-width="14"/>
<path d="M40 262 h160 M40 284 h160" fill="none" ${ink(3.4)}/>
<path d="M56 294 v26 M184 294 v26" ${ink(6)}/>
${person({ x: 90, y: 264, s: 1.15, skin: SKIN[0], hair: HAIR[1], shirt: P.teal, pants: P.navy, mood: 'happy', pose: 'sit' })}
${person({ x: 152, y: 264, s: 1.15, skin: SKIN[2], hair: HAIR[0], shirt: P.yellow, pants: P.navy, mood: 'happy', pose: 'sit' })}`,
  },
  {
    id: 'deka-a-baterka', name: 'Deka a baterka', category: 'family', tint: P.violet,
    art: `<rect width="${W}" height="${H}" fill="#232847"/>
<rect x="0" y="298" width="${W}" height="${H - 298}" fill="#2E3454"/><path d="M0 298 H${W}" ${ink(4)}/>
<path d="M40 300 q0 -104 80 -104 q80 0 80 104 Z" fill="${P.violet}" ${ink(4)}/>
<circle cx="100" cy="240" r="22" fill="${SKIN[0]}" ${ink(3.4)}/>
<circle cx="92" cy="236" r="3.6" fill="${P.ink}"/><circle cx="108" cy="236" r="3.6" fill="${P.ink}"/>
<circle cx="150" cy="246" r="20" fill="${SKIN[2]}" ${ink(3.4)}/>
<circle cx="143" cy="242" r="3.4" fill="${P.ink}"/><circle cx="157" cy="242" r="3.4" fill="${P.ink}"/>
<circle cx="120" cy="200" r="44" fill="${P.yellow}" opacity="0.22"/>
<circle cx="120" cy="212" r="11" fill="${P.yellow}" ${ink(3.2)}/>`,
  },
  {
    id: 'nakupovani', name: 'Nakupování', category: 'everyday', tint: P.teal,
    art: `${roomCool}
<g transform="translate(150 250)">
<path d="M-40 -20 h72 l-10 52 h-52 Z" fill="${P.teal}" ${ink(4)}/>
<path d="M-40 -20 l-16 -22 h-14" fill="none" ${ink(4)}/>
<circle cx="-22" cy="44" r="9" fill="${P.ink}"/><circle cx="18" cy="44" r="9" fill="${P.ink}"/>
<circle cx="-16" cy="-30" r="12" fill="${P.coral}" ${ink(3)}/><circle cx="14" cy="-34" r="11" fill="${P.green}" ${ink(3)}/></g>
${person({ x: 66, y: 320, s: 1.4, skin: SKIN[1], hair: HAIR[0], shirt: P.yellow, pants: P.navy, mood: 'happy', pose: 'point' })}`,
  },
  {
    id: 'prvni-den-ve-skole', name: 'První den ve škole', category: 'school', tint: P.coral,
    art: `${sky('day')}${cloud(190, 58, 0.6)}
${ground(300, P.grass)}
<rect x="132" y="150" width="96" height="150" fill="${P.sand}" ${ink(4)}/>
<path d="M124 152 L180 112 L236 152 Z" fill="${P.rust}" ${ink(4)}/>
<rect x="164" y="240" width="34" height="60" rx="5" fill="${P.wood}" ${ink(3.6)}/>
<rect x="146" y="182" width="26" height="26" rx="4" fill="${P.blue}" ${ink(3)}/>
<rect x="190" y="182" width="26" height="26" rx="4" fill="${P.blue}" ${ink(3)}/>
${person({ x: 70, y: 322, s: 1.5, skin: SKIN[0], hair: HAIR[1], shirt: P.coral, pants: P.navy, mood: 'worried', pose: 'stand',
  extras: `<rect x="-40" y="-70" width="24" height="34" rx="8" fill="${P.green}" stroke="${P.ink}" stroke-width="3.2"/>` })}`,
  },
  {
    id: 'spolecna-fotka', name: 'Společná fotka', category: 'family', tint: P.peach,
    art: `${sky('warm')}
${ground(312, P.grass)}
${person({ x: 62, y: 322, s: 1.25, skin: SKIN[1], hair: HAIR[0], shirt: P.teal, pants: P.navy, mood: 'happy', pose: 'wave' })}
${person({ x: 120, y: 322, s: 1.45, skin: SKIN[2], hair: HAIR[1], shirt: P.coral, pants: P.navy, mood: 'proud', pose: 'stand' })}
${person({ x: 178, y: 322, s: 1.2, skin: SKIN[0], hair: HAIR[3], shirt: P.yellow, pants: P.navy, mood: 'excited', pose: 'armsUp', hairStyle: 'long' })}
${sparkle(120, 116, 12, P.yellow)}
${heart(200, 140, 0.5, P.pink)}`,
  },
];

function bubbleQuestion(): string {
  return `<g transform="translate(160 194) scale(0.6)">
<path d="M-30 -22 h60 q12 0 12 14 v20 q0 14 -12 14 h-22 l-12 14 v-14 h-26 q-12 0 -12 -14 v-20 q0 -14 12 -14 Z"
 fill="${P.white}" stroke="${P.ink}" stroke-width="6"/>
<text x="0" y="12" text-anchor="middle" font-family="Georgia, serif" font-size="34" font-weight="700" fill="${P.ink}">?</text></g>`;
}
