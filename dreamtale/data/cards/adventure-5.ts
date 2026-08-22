import { P, SKIN, HAIR } from './palette';
import { sky, ground, water, hills, stars, cloud, moon, pine, sparkle, ink, W, H } from './scene';
import { person } from './people';
import { prop } from './props';
import type { Card } from './types';

export const adventure5: Card[] = [
  {
    id: 'malirka', name: 'Malířka', category: 'people', tint: P.coral,
    art: `${sky('warm')}
<rect x="0" y="288" width="${W}" height="${H - 288}" fill="${P.floor}"/><path d="M0 288 H${W}" ${ink(4)}/>
<path d="M148 290 L166 178 M204 290 L186 178 M176 214 v76" fill="none" ${ink(5)}/>
<rect x="140" y="150" width="72" height="66" rx="4" fill="${P.white}" ${ink(4)}/>
<path d="M150 200 q16 -26 32 -6 q10 12 22 6 v16 h-54 Z" fill="${P.sage}"/>
<circle cx="192" cy="170" r="9" fill="${P.yellow}"/>
${person({ x: 76, y: 316, s: 1.5, skin: SKIN[0], hair: HAIR[1], shirt: P.white, pants: P.coral, mood: 'happy', pose: 'point', hairStyle: 'bun' })}
${prop('paintbrush', 122, 246, 0.3)}`,
  },
  {
    id: 'provazochodec', name: 'Provazochodec', category: 'people', tint: P.coral,
    art: `${sky('dusk')}${cloud(46, 220, 0.6)}${cloud(198, 250, 0.5)}
${hills(320, P.rust)}
<path d="M18 148 v176 M222 148 v176" stroke="${P.woodDark}" stroke-width="11"/>
<path d="M18 148 v176 M222 148 v176" fill="none" ${ink(3)}/>
<path d="M18 216 q102 14 204 0" fill="none" stroke="${P.ink}" stroke-width="5"/>
${person({ x: 120, y: 214, s: 1.45, skin: SKIN[1], hair: HAIR[0], shirt: P.red, pants: P.navy, mood: 'calm', pose: 'armsOut' })}
${prop('umbrella', 168, 128, 0.42)}`,
  },
  {
    id: 'vcelar', name: 'Včelař', category: 'people', tint: P.yellow,
    art: `${sky('day')}${cloud(50, 58, 0.7)}
${ground(292, P.grass)}
<rect x="156" y="228" width="66" height="64" rx="6" fill="${P.sand}" ${ink(4)}/>
<path d="M152 228 h74 M156 250 h66 M156 270 h66" fill="none" ${ink(3.4)}/>
${person({ x: 92, y: 320, s: 1.6, skin: SKIN[0], hair: HAIR[3], shirt: P.white, pants: P.white, mood: 'calm', pose: 'hold', hairStyle: 'hat',
  extras: `<circle cx="0" cy="-100" r="30" fill="${P.cream}" opacity="0.5" stroke="${P.ink}" stroke-width="3.4"/>
<path d="M-30 -110 h60" stroke="${P.ink}" stroke-width="3"/>` })}
${prop('bee', 172, 168, 0.28)}${prop('bee', 66, 152, 0.22)}
<path d="M150 190 q22 -16 34 6" fill="none" ${ink(3)} stroke-dasharray="6 6"/>`,
  },
  {
    id: 'horska-chata', name: 'Horská chata', category: 'places', tint: P.navy,
    art: `${sky('night')}${stars(9)}${moon(48, 62, 20)}
<path d="M-10 250 L60 130 L120 232 L176 142 L250 258 V${H} H-10 Z" fill="${P.slate}" ${ink(4)}/>
<path d="M0 300 q30 -16 60 0 t60 0 t60 0 t60 0 V${H} H0 Z" fill="${P.snow}" ${ink(4)}/>
<rect x="76" y="252" width="94" height="56" fill="${P.wood}" ${ink(4)}/>
<path d="M62 254 L123 210 L184 254 Z" fill="${P.woodDark}" ${ink(4)}/>
<rect x="94" y="266" width="26" height="26" rx="4" fill="${P.yellow}" ${ink(3.4)}/>
<rect x="132" y="266" width="26" height="26" rx="4" fill="${P.yellow}" ${ink(3.4)}/>
${pine(34, 320, 0.7)}${pine(210, 326, 0.6)}`,
  },
  {
    id: 'kral', name: 'Král na trůně', category: 'fantasy', tint: P.gold,
    art: `<rect width="${W}" height="${H}" fill="#4A2E3A"/>
<rect x="0" y="296" width="${W}" height="${H - 296}" fill="${P.woodDark}"/><path d="M0 296 H${W}" ${ink(4)}/>
<path d="M72 298 V186 q0 -22 24 -22 h48 q24 0 24 22 v112 Z" fill="${P.gold}" ${ink(4)}/>
<path d="M96 164 v-26 l14 14 l10 -20 l10 20 l14 -14 v26 Z" fill="${P.gold}" ${ink(3.6)}/>
${person({ x: 120, y: 296, s: 1.35, skin: SKIN[1], hair: '#D8D4E2', shirt: P.red, pants: P.red, mood: 'proud', pose: 'sit', hairStyle: 'hat',
  extras: `<path d="M-26 -116 L-18 -142 l12 14 l12 -20 l12 20 l12 -14 l8 26 Z" fill="${P.yellow}" stroke="${P.ink}" stroke-width="3.4"/>
<path d="M-24 -78 q24 40 48 0 q10 44 -24 44 q-34 0 -24 -44 Z" fill="${P.white}" stroke="${P.ink}" stroke-width="3.4"/>` })}
${sparkle(48, 168, 10, P.yellow)}${sparkle(196, 196, 8, P.yellow)}`,
  },
  {
    id: 'mimozemstan', name: 'Setkání s mimozemšťanem', category: 'fantasy', tint: P.green,
    art: `${sky('space')}${stars(11)}
<path d="M0 300 q30 -22 60 0 t60 0 t60 0 t60 0 V${H} H0 Z" fill="${P.slate}" ${ink(4)}/>
${prop('ufo', 62, 118, 0.5)}
${person({ x: 88, y: 318, s: 1.35, skin: SKIN[0], hair: HAIR[4], shirt: P.white, pants: P.white, mood: 'surprised', pose: 'point', hairStyle: 'hat',
  extras: `<circle cx="0" cy="-100" r="30" fill="${P.seaFoam}" opacity="0.45" stroke="${P.ink}" stroke-width="3.6"/>` })}
${person({ x: 168, y: 318, s: 1.2, skin: P.green, hair: P.green, shirt: P.sage, pants: P.sage, mood: 'happy', pose: 'wave', hairStyle: 'hat',
  extras: `<ellipse cx="-11" cy="-104" rx="7" ry="10" fill="${P.ink}"/><ellipse cx="11" cy="-104" rx="7" ry="10" fill="${P.ink}"/>
<path d="M-12 -124 l-6 -18 M12 -124 l6 -18" stroke="${P.ink}" stroke-width="3"/>` })}
${sparkle(200, 96, 9, P.yellow)}`,
  },
  {
    id: 'skotsky-byk', name: 'Skotský býk', category: 'animals', tint: P.rust,
    art: `${sky('cool')}${cloud(52, 60, 0.7)}
${hills(238, P.hill)}${ground(288, P.grass)}
<g transform="translate(120 246)">
<ellipse cx="0" cy="18" rx="62" ry="42" fill="${P.rust}" ${ink(4)}/>
<path d="M-40 54 v22 M-12 58 v18 M14 58 v18 M40 54 v22" stroke="${P.rust}" stroke-width="14" stroke-linecap="round"/>
<path d="M-40 54 v22 M-12 58 v18 M14 58 v18 M40 54 v22" fill="none" ${ink(3.4)}/>
<circle cx="0" cy="-24" r="38" fill="${P.brown}" ${ink(4)}/>
<path d="M-38 -32 q-38 -14 -46 12 q26 12 46 2 Z" fill="${P.cream}" ${ink(3.6)}/>
<path d="M38 -32 q38 -14 46 12 q-26 12 -46 2 Z" fill="${P.cream}" ${ink(3.6)}/>
<path d="M-26 -46 q26 -20 52 0" fill="none" stroke="${P.woodDark}" stroke-width="7"/>
<circle cx="-13" cy="-20" r="4.6" fill="${P.ink}"/><circle cx="13" cy="-20" r="4.6" fill="${P.ink}"/>
<ellipse cx="0" cy="0" rx="16" ry="11" fill="${P.peach}" ${ink(3.2)}/></g>`,
  },
  {
    id: 'chobotnice-hlubina', name: 'Chobotnice', category: 'animals', tint: P.pink,
    art: `${sky('sea')}
<g fill="${P.seaFoam}" opacity="0.4"><circle cx="40" cy="64" r="7"/><circle cx="60" cy="38" r="5"/><circle cx="200" cy="98" r="6"/></g>
${prop('octopus', 118, 190, 1.26)}
<path d="M0 300 q30 -22 60 0 t60 0 t60 0 t60 0 V${H} H0 Z" fill="${P.seaDeep}" ${ink(4)}/>
${prop('seashell', 202, 320, 0.24)}`,
  },
  {
    id: 'cesta-pousti', name: 'Cesta pouští', category: 'adventure', tint: P.rust,
    art: `${sky('dusk')}${prop('sun', 120, 106, 0.32)}
<path d="M0 232 L52 178 L96 232 L146 168 L200 232 L240 200 V${H} H0 Z" fill="${P.rust}" ${ink(4)}/>
<path d="M0 268 q40 -14 80 -6 q40 8 80 -2 q40 -10 80 4 V${H} H0 Z" fill="${P.sand}" ${ink(4)}/>
<path d="M96 ${H} L112 276 h20 L152 ${H} Z" fill="${P.slate}" ${ink(4)}/>
<path d="M122 292 v14 M122 320 v14" stroke="${P.cream}" stroke-width="5"/>
${prop('car', 132, 288, 0.34)}`,
  },
  {
    id: 'pod-hvezdami', name: 'Pod hvězdami', category: 'family', tint: P.navy,
    art: `${sky('night')}${stars(12)}${moon(190, 58, 18)}
${ground(302, '#243055')}
${person({ x: 96, y: 322, s: 1.3, skin: SKIN[1], hair: HAIR[0], shirt: P.navy, pants: P.navy, mood: 'calm', pose: 'point' })}
${person({ x: 152, y: 322, s: 1.05, skin: SKIN[0], hair: HAIR[1], shirt: P.navy, pants: P.navy, mood: 'happy', pose: 'stand' })}
${sparkle(64, 128, 12, P.yellow)}${sparkle(148, 96, 9, P.cream)}`,
  },
  {
    id: 'santa', name: 'Santa', category: 'fantasy', tint: P.red,
    art: `${sky('night')}${stars(9)}
<path d="M0 292 q30 -16 60 0 t60 0 t60 0 t60 0 V${H} H0 Z" fill="${P.snow}" ${ink(4)}/>
${person({ x: 112, y: 320, s: 1.6, skin: SKIN[0], hair: '#F2F2F2', shirt: P.red, pants: P.red, mood: 'happy', pose: 'wave', hairStyle: 'hat',
  extras: `<path d="M-26 -110 q4 -34 26 -34 q26 0 30 30 q-28 12 -56 4 Z" fill="${P.red}" stroke="${P.ink}" stroke-width="3.4"/>
<circle cx="30" cy="-140" r="9" fill="${P.white}" stroke="${P.ink}" stroke-width="3"/>
<path d="M-28 -110 h56 v10 h-56 Z" fill="${P.white}" stroke="${P.ink}" stroke-width="3"/>
<path d="M-24 -76 q24 46 48 0 q10 46 -24 46 q-34 0 -24 -46 Z" fill="${P.white}" stroke="${P.ink}" stroke-width="3.4"/>
<path d="M-24 -34 h48 v12 h-48 Z" fill="${P.ink}"/>` })}
${prop('gift', 186, 300, 0.3)}
<g fill="${P.white}"><circle cx="44" cy="120" r="4"/><circle cx="200" cy="168" r="4"/><circle cx="86" cy="196" r="3"/></g>`,
  },
  {
    id: 'pohadkovy-zamek', name: 'Pohádkový zámek', category: 'places', tint: P.blue,
    art: `${sky('dusk')}${cloud(44, 66, 0.7)}
<path d="M-10 260 L52 176 L110 254 L164 168 L250 268 V${H} H-10 Z" fill="${P.hillDark}" ${ink(4)}/>
${ground(310, P.grassDark)}
${prop('castle', 120, 214, 1.0)}
<g fill="${P.yellow}"><rect x="98" y="238" width="12" height="16" rx="4"/><rect x="132" y="238" width="12" height="16" rx="4"/></g>`,
  },
  {
    id: 'podzemi', name: 'Průzkum podzemí', category: 'adventure', tint: P.soil,
    art: `<rect width="${W}" height="${H}" fill="#2A2130"/>
<path d="M0 96 q40 26 80 4 q44 -24 80 6 q36 26 80 0 V0 H0 Z" fill="${P.soilDark}" ${ink(4)}/>
<path d="M0 296 q40 -22 80 -4 q44 22 80 -6 q36 -22 80 2 V${H} H0 Z" fill="${P.soilDark}" ${ink(4)}/>
<circle cx="130" cy="216" r="72" fill="${P.yellow}" opacity="0.16"/>
${person({ x: 108, y: 306, s: 1.5, skin: SKIN[1], hair: HAIR[0], shirt: P.brown, pants: P.woodDark, mood: 'surprised', pose: 'point', hairStyle: 'hat',
  extras: `<path d="M-28 -114 h56 q6 0 6 6 h-68 q0 -6 6 -6 Z" fill="${P.woodDark}" stroke="${P.ink}" stroke-width="3.4"/>
<path d="M-20 -114 q0 -22 20 -22 q20 0 20 22 Z" fill="${P.woodDark}" stroke="${P.ink}" stroke-width="3.4"/>` })}
${prop('lantern', 182, 224, 0.36)}
<g fill="${P.stone}"><path d="M40 96 l8 34 l10 -32 Z"/><path d="M186 100 l6 28 l10 -26 Z"/></g>`,
  },
  {
    id: 'rybar', name: 'Rybář na molu', category: 'people', tint: P.teal,
    art: `${sky('warm')}${cloud(52, 58, 0.65)}
${water(238, P.teal)}
<path d="M20 238 h150 v14 H20 Z" fill="${P.wood}" ${ink(4)}/>
<path d="M40 252 v40 M96 252 v40 M152 252 v40" ${ink(5)}/>
${person({ x: 96, y: 238, s: 1.4, skin: SKIN[1], hair: HAIR[1], shirt: P.green, pants: P.woodDark, mood: 'calm', pose: 'hold', hairStyle: 'hat',
  extras: `<path d="M-28 -112 h56 q6 0 6 6 h-68 q0 -6 6 -6 Z" fill="${P.sand}" stroke="${P.ink}" stroke-width="3.4"/>
<path d="M-20 -112 q0 -20 20 -20 q20 0 20 20 Z" fill="${P.sand}" stroke="${P.ink}" stroke-width="3.4"/>` })}
<path d="M132 196 L206 262" fill="none" ${ink(4)}/>
<path d="M206 262 v40" fill="none" ${ink(3)}/>
${prop('fish', 206, 316, 0.24)}`,
  },
  {
    id: 'letajici-koberec', name: 'Létající koberec', category: 'fantasy', tint: P.coral,
    art: `${sky('night')}${stars(10)}${moon(50, 62, 18)}
<path d="M0 306 L40 250 L84 306 L128 244 L176 306 L224 262 L240 306 V${H} H0 Z" fill="#2A2450" ${ink(4)}/>
${prop('carpet', 120, 216, 0.98)}
${person({ x: 120, y: 200, s: 0.95, skin: SKIN[1], hair: HAIR[0], shirt: P.violet, pants: P.violet, mood: 'excited', pose: 'armsUp' })}
${sparkle(196, 150, 10, P.yellow)}`,
  },
  {
    id: 'bonsaj', name: 'Bonsaj', category: 'nature', tint: P.green,
    art: `${sky('warm')}
<rect x="0" y="284" width="${W}" height="${H - 284}" fill="${P.floor}"/><path d="M0 284 H${W}" ${ink(4)}/>
<path d="M66 284 h108 l-14 -34 H80 Z" fill="${P.rust}" ${ink(4)}/>
<path d="M120 250 q-8 -46 -34 -66 M120 250 q10 -40 40 -58" fill="none" stroke="${P.wood}" stroke-width="11" stroke-linecap="round"/>
<path d="M120 250 q-8 -46 -34 -66 M120 250 q10 -40 40 -58" fill="none" ${ink(3)}/>
<ellipse cx="74" cy="176" rx="42" ry="24" fill="${P.green}" ${ink(4)}/>
<ellipse cx="166" cy="184" rx="38" ry="22" fill="${P.grassDark}" ${ink(4)}/>
<ellipse cx="120" cy="136" rx="46" ry="26" fill="${P.green}" ${ink(4)}/>`,
  },
];
