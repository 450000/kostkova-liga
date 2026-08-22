import { P, SKIN, HAIR } from './palette';
import { sky, ground, water, hills, stars, cloud, sun, moon, sparkle, ink, W, H } from './scene';
import { person } from './people';
import { prop } from './props';
import type { Card } from './types';

export const adventure2: Card[] = [
  {
    id: 'babicka', name: 'Babička s vnukem', category: 'family', tint: P.lavender,
    art: `${sky('warm')}
<rect x="0" y="272" width="${W}" height="${H - 272}" fill="${P.floor}"/><path d="M0 272 H${W}" ${ink(4)}/>
${person({ x: 150, y: 306, s: 1.6, skin: SKIN[0], hair: '#D8D4E2', shirt: P.lavender, pants: P.slate, mood: 'calm', pose: 'stand', hairStyle: 'bun',
  extras: `<circle cx="-9" cy="-104" r="10" fill="none" stroke="${P.ink}" stroke-width="2.8"/>
<circle cx="9" cy="-104" r="10" fill="none" stroke="${P.ink}" stroke-width="2.8"/><path d="M1 -104 h-2" stroke="${P.ink}" stroke-width="2.8"/>` })}
${person({ x: 84, y: 306, s: 1.05, skin: SKIN[1], hair: HAIR[1], shirt: P.blue, pants: P.navy, mood: 'happy', pose: 'wave' })}
${sparkle(44, 156, 8, P.yellow)}`,
  },
  {
    id: 'detektiv', name: 'Detektiv', category: 'people', tint: P.brown,
    art: `${sky('storm')}
<rect x="0" y="276" width="${W}" height="${H - 276}" fill="${P.slate}"/><path d="M0 276 H${W}" ${ink(4)}/>
<rect x="176" y="150" width="18" height="126" fill="${P.wood}" ${ink(3.6)}/>
<circle cx="185" cy="140" r="16" fill="${P.yellow}" ${ink(3.6)}/>
${person({ x: 106, y: 316, s: 1.7, skin: SKIN[1], hair: HAIR[0], shirt: P.brown, pants: P.woodDark, mood: 'calm', pose: 'hold', hairStyle: 'hat',
  extras: `<path d="M-30 -116 h60 q6 0 6 6 h-72 q0 -6 6 -6 Z" fill="${P.woodDark}" stroke="${P.ink}" stroke-width="3.4"/>
<path d="M-20 -116 q0 -22 20 -22 q20 0 20 22 Z" fill="${P.woodDark}" stroke="${P.ink}" stroke-width="3.4"/>` })}
${prop('magnifier', 168, 250, 0.42)}`,
  },
  {
    id: 'katedrala', name: 'Katedrála', category: 'places', tint: P.sand,
    art: `${sky('dusk')}
${ground(302, P.grassDark)}
<g fill="${P.sand}" ${ink(4)}>
<path d="M46 302 V190 q0 -46 16 -70 q16 24 16 70 v112 Z"/>
<path d="M162 302 V190 q0 -46 16 -70 q16 24 16 70 v112 Z"/>
<path d="M92 302 V150 q0 -56 28 -84 q28 28 28 84 v152 Z"/></g>
<path d="M120 66 v-22 M112 52 h16" ${ink(4)}/>
<g fill="${P.blue}" ${ink(3.2)}>
<rect x="110" y="180" width="20" height="34" rx="10"/>
<rect x="56" y="206" width="14" height="26" rx="7"/><rect x="170" y="206" width="14" height="26" rx="7"/></g>
<path d="M100 302 v-46 q20 -22 40 0 v46 Z" fill="${P.wood}" ${ink(4)}/>`,
  },
  {
    id: 'balonky', name: 'Kluk s balónky', category: 'feelings', tint: P.pink,
    art: `${sky('day')}${cloud(52, 62, 0.8)}${cloud(190, 110, 0.6)}
${ground(300, P.grass)}
<g ${ink(3)}><path d="M62 108 L69 162 M120 90 L112 162 M178 110 L171 162" fill="none"/></g>
<circle cx="62" cy="84" r="24" fill="${P.coral}" ${ink(4)}/>
<circle cx="120" cy="64" r="26" fill="${P.yellow}" ${ink(4)}/>
<circle cx="178" cy="86" r="23" fill="${P.pink}" ${ink(4)}/>
${person({ x: 120, y: 316, s: 1.5, skin: SKIN[1], hair: HAIR[1], shirt: P.blue, pants: P.navy, mood: 'excited', pose: 'armsUp' })}`,
  },
  {
    id: 'piratska-jeskyne', name: 'Pirátská jeskyně', category: 'fantasy', tint: P.soil,
    art: `${sky('night')}${stars(8)}
<path d="M0 300 q30 -22 60 0 t60 0 t60 0 t60 0 V${H} H0 Z" fill="${P.grassDark}" ${ink(4)}/>
<path d="M28 302 q10 -136 92 -136 q82 0 92 136 Z" fill="${P.soilDark}" ${ink(4)}/>
<path d="M86 302 q0 -70 34 -70 q34 0 34 70 Z" fill="${P.ink}"/>
<circle cx="120" cy="196" r="26" fill="${P.cream}" ${ink(4)}/>
<circle cx="110" cy="192" r="6" fill="${P.ink}"/><circle cx="130" cy="192" r="6" fill="${P.ink}"/>
<path d="M104 216 h32 v10 h-32 Z" fill="${P.cream}" ${ink(3)}/>
${prop('treasure', 120, 288, 0.4)}`,
  },
  {
    id: 'sakura', name: 'Rozkvetlá třešeň', category: 'nature', tint: P.pink,
    art: `${sky('cool')}${cloud(190, 66, 0.6)}
${ground(292, P.grass)}
<rect x="108" y="184" width="24" height="112" rx="8" fill="${P.wood}" ${ink(4)}/>
<path d="M120 214 L84 182 M120 232 L156 196" fill="none" ${ink(4)}/>
<circle cx="120" cy="140" r="46" fill="${P.pink}" ${ink(4)}/>
<circle cx="66" cy="170" r="30" fill="${P.pink}" ${ink(4)}/>
<circle cx="174" cy="172" r="30" fill="${P.pink}" ${ink(4)}/>
<g fill="${P.white}"><circle cx="104" cy="128" r="6"/><circle cx="140" cy="152" r="5"/><circle cx="72" cy="164" r="5"/></g>
<g fill="${P.pink}"><circle cx="58" cy="252" r="6"/><circle cx="182" cy="266" r="5"/><circle cx="94" cy="278" r="5"/></g>`,
  },
  {
    id: 'tucnak-kra', name: 'Tučňák na kře', category: 'animals', tint: P.snow,
    art: `${sky('cool')}${cloud(58, 58, 0.75)}${cloud(188, 98, 0.55)}
<path d="M0 218 q30 -26 58 -6 q26 18 48 -8 q30 -24 58 -2 q28 22 76 -2 V266 H0 Z" fill="${P.snowShade}" ${ink(4)}/>
${water(266, P.sea)}
<path d="M50 300 h140 l-24 30 H74 Z" fill="${P.snow}" ${ink(4)}/>
${prop('penguin', 120, 238, 1.02)}`,
  },
  {
    id: 'rover', name: 'Vozítko na Marsu', category: 'adventure', tint: P.rust,
    art: `${sky('dusk')}
<path d="M0 214 q40 -28 80 -6 q40 22 80 -8 q40 -30 80 -2 V${H} H0 Z" fill="${P.rust}" ${ink(4)}/>
<circle cx="196" cy="88" r="22" fill="${P.coral}" ${ink(4)}/>
<g transform="translate(118 226) scale(1.62)">
<rect x="-46" y="-26" width="92" height="46" rx="10" fill="${P.stone}" ${ink(4)}/>
<rect x="-38" y="-14" width="26" height="20" rx="5" fill="${P.blue}" ${ink(3.2)}/>
<path d="M-46 -10 h-30 v-26 h-22 M46 -10 h30 v-26 h22" fill="none" ${ink(4)}/>
<rect x="-104" y="-46" width="34" height="12" rx="4" fill="${P.navy}" ${ink(3.2)}/>
<rect x="70" y="-46" width="34" height="12" rx="4" fill="${P.navy}" ${ink(3.2)}/>
<path d="M20 -26 v-30 h20" fill="none" ${ink(4)}/>
<circle cx="42" cy="-58" r="9" fill="${P.yellow}" ${ink(3.4)}/>
<g fill="${P.ink}"><circle cx="-34" cy="30" r="14"/><circle cx="0" cy="30" r="14"/><circle cx="34" cy="30" r="14"/></g>
<g fill="${P.stone}"><circle cx="-34" cy="30" r="5"/><circle cx="0" cy="30" r="5"/><circle cx="34" cy="30" r="5"/></g></g>
<g fill="${P.soilDark}"><circle cx="44" cy="316" r="9"/><circle cx="196" cy="330" r="7"/><circle cx="96" cy="340" r="6"/></g>`,
  },
  {
    id: 'carodejka', name: 'Čarodějka', category: 'fantasy', tint: P.violet,
    art: `${sky('night')}${stars(9)}${moon(196, 62, 22)}
<rect x="0" y="292" width="${W}" height="${H - 292}" fill="#2A2450"/><path d="M0 292 H${W}" ${ink(4)}/>
${person({ x: 110, y: 318, s: 1.55, skin: SKIN[0], hair: HAIR[0], shirt: P.violet, pants: P.violet, mood: 'excited', pose: 'hold', hairStyle: 'long',
  extras: `<path d="M-32 -110 L0 -158 L32 -110 Z" fill="${P.violet}" stroke="${P.ink}" stroke-width="3.6"/>
<path d="M-40 -110 h80" stroke="${P.violet}" stroke-width="9"/><path d="M-40 -110 h80" stroke="${P.ink}" stroke-width="3.4"/>` })}
${prop('cauldron', 172, 300, 0.44)}
${sparkle(172, 246, 11, P.sage)}${sparkle(196, 220, 7, P.yellow)}`,
  },
  {
    id: 'moai', name: 'Sochy Moai', category: 'places', tint: P.stone,
    art: `${sky('dusk')}${sun(52, 96, 24, P.yellow)}
${ground(286, P.grassDark)}
<g fill="${P.stone}" ${ink(4)}>
<path d="M74 288 V186 q0 -46 26 -46 q26 0 26 46 v102 Z"/>
<path d="M148 288 V208 q0 -36 20 -36 q20 0 20 36 v80 Z"/></g>
<g fill="${P.ink}"><ellipse cx="88" cy="190" rx="6" ry="8"/><ellipse cx="112" cy="190" rx="6" ry="8"/>
<ellipse cx="160" cy="214" rx="5" ry="6"/><ellipse cx="178" cy="214" rx="5" ry="6"/></g>
<path d="M88 220 q12 8 24 0 M160 236 q10 6 20 0" fill="none" ${ink(3.4)}/>`,
  },
  {
    id: 'potopene-mesto', name: 'Potopené město', category: 'fantasy', tint: P.sea,
    art: `${sky('sea')}
<g fill="${P.seaFoam}" opacity="0.45"><circle cx="40" cy="70" r="7"/><circle cx="60" cy="44" r="5"/><circle cx="198" cy="96" r="6"/></g>
<g fill="${P.teal}" ${ink(4)}>
<path d="M54 300 V196 q0 -34 20 -34 q20 0 20 34 v104 Z"/>
<path d="M104 300 V152 q0 -46 26 -46 q26 0 26 46 v148 Z"/>
<path d="M164 300 V212 q0 -28 18 -28 q18 0 18 28 v88 Z"/></g>
<g fill="${P.seaDeep}"><rect x="120" y="150" width="20" height="26" rx="9"/><rect x="66" y="204" width="16" height="22" rx="8"/></g>
<path d="M0 300 q30 -20 60 0 t60 0 t60 0 t60 0 V${H} H0 Z" fill="${P.seaDeep}" ${ink(4)}/>
${prop('fish', 46, 128, 0.3)}${prop('fish', 200, 208, 0.24)}`,
  },
  {
    id: 'letajici-stroj', name: 'Létající stroj', category: 'adventure', tint: P.sand,
    art: `${sky('day')}${cloud(56, 78, 0.8)}${cloud(184, 130, 0.6)}
${hills(300, P.hill)}
<g transform="translate(120 168)">
<path d="M-4 -6 q-70 -44 -96 6 q46 22 92 8 Z" fill="${P.sand}" ${ink(4)}/>
<path d="M4 -6 q70 -44 96 6 q-46 22 -92 8 Z" fill="${P.sand}" ${ink(4)}/>
<path d="M-90 -12 L-4 -6 M90 -12 L4 -6" fill="none" ${ink(3)}/></g>
${person({ x: 120, y: 214, s: 0.92, skin: SKIN[1], hair: HAIR[1], shirt: P.brown, pants: P.woodDark, mood: 'excited', pose: 'armsOut' })}`,
  },
  {
    id: 'saxofonista', name: 'Saxofonista', category: 'people', tint: P.navy,
    art: `${sky('night')}
<rect x="0" y="286" width="${W}" height="${H - 286}" fill="#241F42"/><path d="M0 286 H${W}" ${ink(4)}/>
<circle cx="120" cy="120" r="66" fill="${P.yellow}" opacity="0.18"/>
${person({ x: 108, y: 316, s: 1.65, skin: SKIN[3], hair: HAIR[4], shirt: P.brown, pants: P.woodDark, mood: 'calm', pose: 'hold', hairStyle: 'hat',
  extras: `<path d="M-30 -116 h60 q6 0 6 6 h-72 q0 -6 6 -6 Z" fill="${P.ink}"/>
<path d="M-20 -116 q0 -20 20 -20 q20 0 20 20 Z" fill="${P.ink}"/>` })}
${prop('saxophone', 166, 252, 0.56)}
${sparkle(56, 176, 9, P.yellow)}${sparkle(198, 148, 7, P.yellow)}`,
  },
  {
    id: 'majak-boure', name: 'Maják v bouři', category: 'places', tint: P.stone,
    art: `${sky('storm')}
${water(266, P.seaDeep)}
<path d="M52 280 q32 -36 68 -32 q42 4 66 32 Z" fill="${P.slate}" ${ink(4)}/>
${prop('lighthouse', 120, 172, 0.98)}
<g stroke="${P.seaFoam}" stroke-width="4" stroke-linecap="round" opacity="0.85">
<path d="M22 92 l-12 30 M62 70 l-12 30 M198 86 l-12 30 M166 58 l-12 30 M40 148 l-10 24 M206 150 l-10 24"/></g>
<path d="M0 296 q22 -18 44 0 t44 0 t44 0 t44 0 t44 0" fill="none" stroke="${P.seaFoam}" stroke-width="5"/>`,
  },
  {
    id: 'baletka', name: 'Baletka', category: 'people', tint: P.pink,
    art: `<rect width="${W}" height="${H}" fill="#3A2340"/>
<path d="M0 0 h${W} v96 q-60 34 -120 0 Q60 130 0 96 Z" fill="${P.red}" ${ink(4)}/>
<rect x="0" y="290" width="${W}" height="${H - 290}" fill="${P.wood}"/><path d="M0 290 H${W}" ${ink(4)}/>
${person({ x: 120, y: 296, s: 1.55, skin: SKIN[0], hair: HAIR[3], shirt: P.pink, pants: P.pink, mood: 'proud', pose: 'armsOut', hairStyle: 'bun',
  extras: `<path d="M-34 -34 q34 -16 68 0 q-10 22 -34 22 q-24 0 -34 -22 Z" fill="${P.white}" stroke="${P.ink}" stroke-width="3.6"/>` })}
${sparkle(50, 172, 9, P.yellow)}${sparkle(196, 202, 7, P.yellow)}`,
  },
  {
    id: 'ledni-medved', name: 'Lední medvěd', category: 'animals', tint: P.snow,
    art: `${sky('cool')}${cloud(184, 62, 0.6)}
<path d="M0 236 q40 -22 80 -4 q40 18 80 -6 q40 -24 80 -4 V286 H0 Z" fill="${P.snowShade}" ${ink(4)}/>
${water(286, P.sea)}
<path d="M34 306 h172 l-26 32 H60 Z" fill="${P.snow}" ${ink(4)}/>
<g transform="translate(112 244)">
<ellipse cx="-14" cy="6" rx="60" ry="38" fill="${P.white}" ${ink(4)}/>
<path d="M-56 34 v18 M-16 38 v14 M20 36 v16" stroke="${P.white}" stroke-width="18" stroke-linecap="round"/>
<path d="M-56 34 v18 M-16 38 v14 M20 36 v16" fill="none" ${ink(3.4)}/>
<circle cx="36" cy="-34" r="14" fill="${P.white}" ${ink(3.6)}/><circle cx="70" cy="-32" r="14" fill="${P.white}" ${ink(3.6)}/>
<circle cx="54" cy="-14" r="38" fill="${P.white}" ${ink(4)}/>
<circle cx="44" cy="-20" r="4.6" fill="${P.ink}"/><circle cx="68" cy="-20" r="4.6" fill="${P.ink}"/>
<ellipse cx="58" cy="2" rx="12" ry="9" fill="${P.ink}"/>
<path d="M58 12 v8" ${ink(3.4)}/></g>`,
  },
];
