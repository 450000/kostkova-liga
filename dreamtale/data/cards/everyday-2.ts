import { P, SKIN, HAIR } from './palette';
import { sky, ground, cloud, stars, sparkle, ink, W, H } from './scene';
import { person } from './people';
import { prop, bubble } from './props';
import type { Card } from './types';

const roomWarm = `${sky('warm')}<rect x="0" y="284" width="${W}" height="${H - 284}" fill="${P.floor}"/><path d="M0 284 H${W}" ${ink(4)}/>`;
const roomCool = `${sky('cool')}<rect x="0" y="284" width="${W}" height="${H - 284}" fill="${P.wallCool}"/><path d="M0 284 H${W}" ${ink(4)}/>`;

export const everyday2: Card[] = [
  {
    id: 'houpaci-sit', name: 'Houpací síť', category: 'everyday', tint: P.green,
    art: `${sky('day')}${cloud(48, 54, 0.7)}
${ground(304, P.grass)}
<rect x="24" y="150" width="20" height="164" rx="8" fill="${P.wood}" ${ink(4)}/>
<rect x="196" y="150" width="20" height="164" rx="8" fill="${P.wood}" ${ink(4)}/>
<path d="M34 196 q86 88 172 0" fill="${P.teal}" ${ink(4)}/>
<path d="M34 196 q86 60 172 0" fill="none" ${ink(3)}/>
${person({ x: 120, y: 222, s: 1.05, skin: SKIN[1], hair: HAIR[1], shirt: P.yellow, pants: P.navy, mood: 'sleepy', pose: 'sit' })}`,
  },
  {
    id: 'strach-ve-tme', name: 'Strach ve tmě', category: 'feelings', tint: P.navy,
    art: `<rect width="${W}" height="${H}" fill="#1E2440"/>
<rect x="0" y="292" width="${W}" height="${H - 292}" fill="#2A3050"/><path d="M0 292 H${W}" ${ink(4)}/>
<path d="M44 294 q0 -100 76 -100 q76 0 76 100 Z" fill="${P.violet}" ${ink(4)}/>
<circle cx="120" cy="216" r="27" fill="${SKIN[0]}" ${ink(3.6)}/>
<circle cx="110" cy="212" r="6.5" fill="${P.white}" ${ink(2.4)}/><circle cx="130" cy="212" r="6.5" fill="${P.white}" ${ink(2.4)}/>
<circle cx="110" cy="212" r="3" fill="${P.ink}"/><circle cx="130" cy="212" r="3" fill="${P.ink}"/>
<path d="M112 230 q4 -5 8 0 t8 0" fill="none" ${ink(3)}/>
<circle cx="176" cy="248" r="12" fill="${P.yellow}" ${ink(3.4)}/>
<circle cx="176" cy="248" r="34" fill="${P.yellow}" opacity="0.18"/>`,
  },
  {
    id: 'rozsypane-papiry', name: 'Rozsypané papíry', category: 'school', tint: P.paper,
    art: `${roomWarm}
<g fill="${P.white}" ${ink(3.4)}>
<rect x="40" y="266" width="52" height="38" rx="3" transform="rotate(-12 66 285)"/>
<rect x="96" y="286" width="56" height="38" rx="3" transform="rotate(6 124 305)"/>
<rect x="146" y="258" width="52" height="38" rx="3" transform="rotate(16 172 277)"/></g>
<g stroke="${P.slate}" stroke-width="2.6"><path d="M52 280 h30 M108 300 h34 M158 274 h30"/></g>
${prop('backpack', 178, 216, 0.36)}
<g fill="${P.slate}"><circle cx="72" cy="234" r="4"/><circle cx="132" cy="222" r="3"/></g>`,
  },
  {
    id: 'tajemstvi', name: 'Tajemství', category: 'family', tint: P.pink,
    art: `${roomWarm}
${person({ x: 88, y: 322, s: 1.5, skin: SKIN[0], hair: HAIR[1], shirt: P.pink, pants: P.navy, mood: 'shy', pose: 'thinking', hairStyle: 'long' })}
${person({ x: 158, y: 322, s: 1.5, skin: SKIN[2], hair: HAIR[0], shirt: P.teal, pants: P.navy, mood: 'surprised', pose: 'stand' })}
<path d="M118 194 q16 -14 30 0" fill="none" ${ink(3.4)} stroke-dasharray="7 6"/>
${sparkle(178, 168, 8, P.yellow)}`,
  },
  {
    id: 'trofej', name: 'Trofej', category: 'school', tint: P.gold,
    art: `${sky('warm')}
<rect x="0" y="300" width="${W}" height="${H - 300}" fill="${P.floor}"/><path d="M0 300 H${W}" ${ink(4)}/>
${person({ x: 116, y: 324, s: 1.55, skin: SKIN[1], hair: HAIR[0], shirt: P.blue, pants: P.navy, mood: 'proud', pose: 'armsUp' })}
${prop('trophy', 168, 132, 0.44)}
${sparkle(64, 128, 11, P.yellow)}${sparkle(200, 196, 8, P.yellow)}`,
  },
  {
    id: 'spatna-znamka', name: 'Špatná známka', category: 'school', tint: P.red,
    art: `${roomCool}
<rect x="56" y="150" width="128" height="160" rx="6" fill="${P.white}" ${ink(4)}/>
<g stroke="${P.slate}" stroke-width="3"><path d="M74 186 h92 M74 208 h92 M74 230 h60"/></g>
<text x="132" y="290" text-anchor="middle" font-family="Georgia, serif" font-size="66" font-weight="700" fill="${P.red}">5</text>
<path d="M92 250 l40 40 M132 250 l-40 40" stroke="${P.red}" stroke-width="5"/>`,
  },
  {
    id: 'pozorovani', name: 'Pozorování dalekohledem', category: 'everyday', tint: P.teal,
    art: `${sky('cool')}
${ground(306, P.grass)}
${person({ x: 120, y: 330, s: 1.6, skin: SKIN[3], hair: HAIR[0], shirt: P.teal, pants: P.navy, mood: 'calm', pose: 'cover', hairStyle: 'bun' })}
${prop('binoculars', 120, 168, 0.38)}`,
  },
  {
    id: 'uschla-rostlina', name: 'Uschlá rostlina', category: 'nature', tint: P.sand,
    art: `${roomWarm}
<path d="M92 288 h56 l-10 -46 H102 Z" fill="${P.rust}" ${ink(4)}/>
<path d="M120 242 q-4 -46 -26 -62" fill="none" stroke="${P.sandDark}" stroke-width="6"/>
<path d="M120 242 q6 -40 26 -54" fill="none" stroke="${P.sandDark}" stroke-width="6"/>
<path d="M94 182 q-22 6 -20 22 q20 4 20 -22 Z" fill="${P.sandDark}" ${ink(3.4)}/>
<path d="M146 190 q22 8 20 24 q-20 4 -20 -24 Z" fill="${P.sandDark}" ${ink(3.4)}/>
<g fill="${P.sandDark}"><path d="M70 268 q10 -8 18 2 q-10 8 -18 -2 Z"/><path d="M162 274 q10 -8 18 2 q-10 8 -18 -2 Z"/></g>`,
  },
  {
    id: 'v-desti', name: 'V dešti', category: 'everyday', tint: P.blue,
    art: `${sky('storm')}
<rect x="0" y="298" width="${W}" height="${H - 298}" fill="${P.slate}"/><path d="M0 298 H${W}" ${ink(4)}/>
<g stroke="${P.seaFoam}" stroke-width="4" stroke-linecap="round" opacity="0.85">
<path d="M26 84 v22 M62 62 v24 M98 92 v22 M146 70 v24 M186 96 v22 M214 66 v22 M44 150 v20 M172 156 v20"/></g>
${person({ x: 120, y: 322, s: 1.6, skin: SKIN[0], hair: HAIR[1], shirt: P.yellow, pants: P.navy, mood: 'happy', pose: 'hold',
  extras: `<path d="M-26 -122 q26 -14 52 0 q-26 8 -52 0 Z" fill="${P.yellow}" stroke="${P.ink}" stroke-width="3.4"/>` })}
${prop('umbrella', 168, 190, 0.44)}
<g fill="${P.blue}" opacity="0.5"><ellipse cx="64" cy="330" rx="26" ry="7"/><ellipse cx="184" cy="338" rx="22" ry="6"/></g>`,
  },
  {
    id: 'telefon-zprava', name: 'Zpráva v telefonu', category: 'everyday', tint: P.navy,
    art: `<rect width="${W}" height="${H}" fill="#1F2540"/>
<circle cx="120" cy="182" r="86" fill="${P.blue}" opacity="0.18"/>
${prop('phone', 120, 186, 1.24)}
<g fill="${P.coral}"><circle cx="166" cy="112" r="14"/></g>
<text x="166" y="118" text-anchor="middle" font-family="Georgia, serif" font-size="18" font-weight="700" fill="${P.white}">1</text>
<path d="M0 320 q30 -14 60 0 t60 0 t60 0 t60 0 V${H} H0 Z" fill="#2A3050"/>`,
  },
  {
    id: 'seznam-ukolu', name: 'Seznam úkolů', category: 'school', tint: P.paper,
    art: `${roomWarm}
<rect x="52" y="132" width="136" height="182" rx="8" fill="${P.white}" ${ink(4)}/>
<g ${ink(3.4)}>
<rect x="70" y="164" width="20" height="20" rx="4" fill="${P.sage}"/>
<rect x="70" y="204" width="20" height="20" rx="4" fill="${P.sage}"/>
<rect x="70" y="244" width="20" height="20" rx="4" fill="${P.white}"/>
<rect x="70" y="284" width="20" height="20" rx="4" fill="${P.white}"/></g>
<g stroke="${P.slate}" stroke-width="4"><path d="M104 174 h62 M104 214 h52 M104 254 h64 M104 294 h44"/></g>
<g stroke="${P.white}" stroke-width="4"><path d="M74 174 l4 6 l8 -10 M74 214 l4 6 l8 -10"/></g>`,
  },
  {
    id: 'nerozhodnost', name: 'Nerozhodnost', category: 'feelings', tint: P.yellow,
    art: `${roomWarm}
${person({ x: 120, y: 326, s: 1.6, skin: SKIN[0], hair: HAIR[1], shirt: P.pink, pants: P.navy, mood: 'worried', pose: 'thinking', hairStyle: 'bun' })}
${bubble(64, 148, 0.62, '?')}
${bubble(178, 128, 0.5, '?')}`,
  },
  {
    id: 'tablet-ve-tme', name: 'Světlo displeje', category: 'everyday', tint: P.teal,
    art: `<rect width="${W}" height="${H}" fill="#20263C"/>
<rect x="0" y="300" width="${W}" height="${H - 300}" fill="#2C3350"/><path d="M0 300 H${W}" ${ink(4)}/>
<circle cx="120" cy="252" r="76" fill="${P.seaFoam}" opacity="0.2"/>
${person({ x: 120, y: 322, s: 1.5, skin: SKIN[1], hair: HAIR[0], shirt: P.navy, pants: P.navy, mood: 'sleepy', pose: 'hold' })}
<rect x="88" y="248" width="66" height="42" rx="6" fill="${P.seaFoam}" ${ink(4)}/>`,
  },
  {
    id: 'premysleni', name: 'Přemýšlení', category: 'feelings', tint: P.lavender,
    art: `${roomCool}
${person({ x: 120, y: 328, s: 1.7, skin: SKIN[1], hair: HAIR[0], shirt: P.lavender, pants: P.navy, mood: 'calm', pose: 'thinking' })}
<g fill="${P.white}" ${ink(3.4)}>
<circle cx="182" cy="120" r="28"/><circle cx="156" cy="158" r="12"/><circle cx="142" cy="180" r="7"/></g>
${sparkle(182, 120, 13, P.yellow)}`,
  },
  {
    id: 'odneseny-destnik', name: 'Odnesený deštník', category: 'everyday', tint: P.slate,
    art: `${sky('storm')}
<path d="M-10 250 L52 176 L112 246 L168 168 L250 258 V${H} H-10 Z" fill="${P.slate}" ${ink(4)}/>
${prop('umbrella', 158, 128, 0.5)}
<path d="M60 210 q40 -32 74 -46" fill="none" ${ink(3)} stroke-dasharray="8 7"/>
${person({ x: 68, y: 316, s: 1.4, skin: SKIN[0], hair: HAIR[1], shirt: P.coral, pants: P.navy, mood: 'surprised', pose: 'armsUp' })}`,
  },
  {
    id: 'nocni-obloha', name: 'Noční obloha', category: 'nature', tint: P.navy,
    art: `${sky('night')}${stars(12)}
${ground(310, '#243055')}
${person({ x: 120, y: 328, s: 1.45, skin: SKIN[1], hair: HAIR[1], shirt: P.navy, pants: P.navy, mood: 'calm', pose: 'point' })}
${prop('constellation', 76, 130, 0.42)}
${sparkle(186, 96, 11, P.yellow)}`,
  },
  {
    id: 'pokoj-s-plakaty', name: 'Vlastní pokoj', category: 'everyday', tint: P.coral,
    art: `${roomWarm}
<g ${ink(3.6)}>
<rect x="26" y="140" width="52" height="62" rx="4" fill="${P.coral}"/>
<rect x="94" y="128" width="52" height="62" rx="4" fill="${P.teal}"/>
<rect x="162" y="146" width="52" height="62" rx="4" fill="${P.yellow}"/></g>
<g fill="${P.white}" opacity="0.8"><circle cx="52" cy="166" r="12"/><path d="M108 166 h24 v14 h-24 Z"/><circle cx="188" cy="172" r="11"/></g>
${person({ x: 120, y: 322, s: 1.4, skin: SKIN[2], hair: HAIR[0], shirt: P.blue, pants: P.navy, mood: 'happy', pose: 'armsOut' })}`,
  },
  {
    id: 'kocka-a-obrazovka', name: 'Kočka a obrazovka', category: 'animals', tint: P.blue,
    art: `${roomCool}
<rect x="76" y="164" width="120" height="86" rx="8" fill="${P.navy}" ${ink(4)}/>
<rect x="88" y="176" width="96" height="62" rx="4" fill="${P.blue}"/>
<path d="M120 250 h32 v18 h-32 Z" fill="${P.slate}" ${ink(3.4)}/>
<path d="M104 268 h64" ${ink(4)}/>
${prop('cat', 58, 254, 0.56)}
${prop('fish', 136, 208, 0.2)}`,
  },
  {
    id: 'vyhled-na-hory', name: 'Výhled na hory', category: 'nature', tint: P.hill,
    art: `${sky('cool')}${cloud(52, 58, 0.7)}
<path d="M-10 236 L48 140 L110 232 L166 132 L250 244 V${H} H-10 Z" fill="${P.hill}" ${ink(4)}/>
<path d="M48 140 L74 180 q-26 12 -46 4 Z M166 132 L192 176 q-26 10 -44 0 Z" fill="${P.snow}" ${ink(3.4)}/>
${ground(322, P.grass)}
${person({ x: 118, y: 336, s: 1.2, skin: SKIN[1], hair: HAIR[1], shirt: P.coral, pants: P.navy, mood: 'proud', pose: 'armsUp' })}`,
  },
  {
    id: 'sazeni', name: 'Sázení', category: 'nature', tint: P.green,
    art: `${sky('day')}${cloud(190, 58, 0.6)}
${ground(288, P.soil)}
${person({ x: 88, y: 316, s: 1.4, skin: SKIN[2], hair: HAIR[0], shirt: P.green, pants: P.brown, mood: 'happy', pose: 'sit' })}
<path d="M164 306 q-4 -34 -20 -46 M164 306 q6 -30 24 -40" fill="none" stroke="${P.grassDark}" stroke-width="5"/>
<path d="M144 258 q-20 -6 -20 12 q18 6 20 -12 Z" fill="${P.green}" ${ink(3.2)}/>
<path d="M188 264 q20 -6 20 12 q-18 6 -20 -12 Z" fill="${P.green}" ${ink(3.2)}/>
<path d="M164 306 v10" ${ink(4)}/>
<ellipse cx="164" cy="316" rx="26" ry="8" fill="${P.soilDark}"/>`,
  },
  {
    id: 'svicka-na-dortu', name: 'Svíčka na dortu', category: 'family', tint: P.pink,
    art: `${roomWarm}
<rect x="30" y="286" width="180" height="16" rx="5" fill="${P.wood}" ${ink(4)}/>
${prop('cake', 156, 240, 0.52)}
${person({ x: 78, y: 286, s: 1.35, skin: SKIN[0], hair: HAIR[1], shirt: P.pink, pants: P.navy, mood: 'excited', pose: 'hold', hairStyle: 'long' })}
${sparkle(156, 168, 10, P.yellow)}`,
  },
  {
    id: 'bludiste', name: 'Bludiště', category: 'adventure', tint: P.green,
    art: `${sky('cool')}
${ground(316, P.grass)}
<g fill="${P.grassDark}" ${ink(4)}>
<rect x="16" y="118" width="208" height="18" rx="8"/>
<rect x="16" y="118" width="18" height="180" rx="8"/>
<rect x="206" y="118" width="18" height="180" rx="8"/>
<rect x="62" y="164" width="140" height="18" rx="8"/>
<rect x="62" y="164" width="18" height="86" rx="8"/>
<rect x="106" y="210" width="98" height="18" rx="8"/>
<rect x="106" y="254" width="18" height="44" rx="8"/>
<rect x="150" y="254" width="72" height="18" rx="8"/></g>
${person({ x: 54, y: 316, s: 1.15, skin: SKIN[1], hair: HAIR[0], shirt: P.coral, pants: P.navy, mood: 'worried', pose: 'stand' })}
<path d="M186 300 v-24 h-88 v-52 h88 v-52 h-88" fill="none" stroke="${P.cream}" stroke-width="4" stroke-dasharray="8 7"/>`,
  },
  {
    id: 'okno-v-noci', name: 'Okno v noci', category: 'feelings', tint: P.navy,
    art: `<rect width="${W}" height="${H}" fill="#242A46"/>
<rect x="56" y="112" width="128" height="164" rx="8" fill="${P.skyNight}" ${ink(4)}/>
<path d="M120 112 v164 M56 194 h128" ${ink(4)}/>
<g fill="${P.cream}"><circle cx="86" cy="146" r="3"/><circle cx="152" cy="160" r="3"/><circle cx="98" cy="228" r="3"/><circle cx="160" cy="240" r="2.5"/></g>
${prop('moon', 154, 148, 0.24)}
<path d="M40 276 h160 v14 H40 Z" fill="${P.wood}" ${ink(4)}/>
${person({ x: 120, y: 340, s: 1.15, skin: SKIN[1], hair: HAIR[0], shirt: P.violet, pants: P.navy, mood: 'calm', pose: 'stand' })}`,
  },
  {
    id: 'rodinna-pizza', name: 'Rodinná pizza', category: 'family', tint: P.coral,
    art: `${roomWarm}
<rect x="18" y="270" width="204" height="18" rx="6" fill="${P.wood}" ${ink(4)}/>
${prop('pizza', 120, 244, 0.42)}
${person({ x: 54, y: 270, s: 1.2, skin: SKIN[0], hair: HAIR[1], shirt: P.teal, pants: P.navy, mood: 'happy', pose: 'hold' })}
${person({ x: 120, y: 266, s: 1.3, skin: SKIN[2], hair: HAIR[0], shirt: P.coral, pants: P.navy, mood: 'excited', pose: 'hold' })}
${person({ x: 190, y: 270, s: 1.2, skin: SKIN[1], hair: HAIR[3], shirt: P.yellow, pants: P.navy, mood: 'happy', pose: 'hold', hairStyle: 'long' })}`,
  },
];
