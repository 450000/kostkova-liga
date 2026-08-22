import { C, type MotifArt } from './palette';

export const animals: MotifArt[] = [
  {
    id: 'cat',
    name: 'Kočka',
    tint: C.stone,
    art: `
<path d="M78 104 L84 50 L120 80 Z" fill="${C.stone}"/>
<path d="M162 104 L156 50 L120 80 Z" fill="${C.stone}"/>
<circle cx="120" cy="132" r="56" fill="${C.stone}"/>
<circle cx="100" cy="124" r="7" fill="${C.ink}" stroke="none"/>
<circle cx="140" cy="124" r="7" fill="${C.ink}" stroke="none"/>
<path d="M112 148 L128 148 L120 158 Z" fill="${C.pink}"/>
<path d="M64 140 H88 M64 160 H88 M176 140 H152 M176 160 H152" stroke-width="4"/>`,
  },
  {
    id: 'dog',
    name: 'Pes',
    tint: C.sand,
    art: `
<ellipse cx="66" cy="126" rx="21" ry="46" fill="${C.brown}" transform="rotate(-10 66 126)"/>
<ellipse cx="174" cy="126" rx="21" ry="46" fill="${C.brown}" transform="rotate(10 174 126)"/>
<circle cx="120" cy="112" r="54" fill="${C.sand}"/>
<circle cx="100" cy="102" r="7" fill="${C.ink}" stroke="none"/>
<circle cx="140" cy="102" r="7" fill="${C.ink}" stroke="none"/>
<ellipse cx="120" cy="148" rx="30" ry="23" fill="${C.cream}"/>
<ellipse cx="120" cy="138" rx="12" ry="9" fill="${C.ink}" stroke="none"/>
<path d="M120 147 v10 M120 157 q-11 8 -18 0 M120 157 q11 8 18 0" stroke-width="4"/>`,
  },
  {
    id: 'fox',
    name: 'Liška',
    tint: C.coral,
    art: `
<path d="M74 108 L72 52 L114 82 Z" fill="${C.coral}"/>
<path d="M166 108 L168 52 L126 82 Z" fill="${C.coral}"/>
<path d="M120 74 q56 12 52 62 q-4 46 -52 58 q-48 -12 -52 -58 q-4 -50 52 -62 Z" fill="${C.coral}"/>
<path d="M120 150 q-32 6 -34 30 q22 14 34 14 q12 0 34 -14 q-2 -24 -34 -30 Z" fill="${C.cream}"/>
<circle cx="98" cy="132" r="7" fill="${C.ink}" stroke="none"/>
<circle cx="142" cy="132" r="7" fill="${C.ink}" stroke="none"/>
<circle cx="120" cy="166" r="8" fill="${C.ink}" stroke="none"/>`,
  },
  {
    id: 'bear',
    name: 'Medvěd',
    tint: C.brown,
    art: `
<circle cx="76" cy="82" r="24" fill="${C.brown}"/>
<circle cx="164" cy="82" r="24" fill="${C.brown}"/>
<circle cx="120" cy="130" r="60" fill="${C.brown}"/>
<ellipse cx="120" cy="152" rx="30" ry="24" fill="${C.sand}"/>
<circle cx="100" cy="118" r="7" fill="${C.ink}" stroke="none"/>
<circle cx="140" cy="118" r="7" fill="${C.ink}" stroke="none"/>
<ellipse cx="120" cy="144" rx="10" ry="8" fill="${C.ink}" stroke="none"/>`,
  },
  {
    id: 'owl',
    name: 'Sova',
    tint: C.lavender,
    art: `
<path d="M120 44 q54 0 54 66 q0 70 -54 70 q-54 0 -54 -70 q0 -66 54 -66 Z" fill="${C.lavender}"/>
<circle cx="98" cy="106" r="22" fill="${C.cream}"/>
<circle cx="142" cy="106" r="22" fill="${C.cream}"/>
<circle cx="98" cy="106" r="8" fill="${C.ink}" stroke="none"/>
<circle cx="142" cy="106" r="8" fill="${C.ink}" stroke="none"/>
<path d="M110 126 L120 142 L130 126 Z" fill="${C.yellow}"/>
<path d="M96 158 q24 18 48 0" stroke-width="4"/>
<path d="M72 50 L94 66 M168 50 L146 66" stroke-width="5"/>`,
  },
  {
    id: 'elephant',
    name: 'Slon',
    tint: C.stone,
    art: `
<ellipse cx="60" cy="112" rx="34" ry="44" fill="${C.stone}"/>
<ellipse cx="180" cy="112" rx="34" ry="44" fill="${C.stone}"/>
<path d="M92 68 h56 q24 0 24 26 v40 q0 34 -32 34 h-40 q-32 0 -32 -34 V94 q0 -26 24 -26 Z" fill="${C.stone}"/>
<path d="M120 168 v22 q0 22 22 22 q18 0 18 -18" fill="none" stroke-width="26" stroke="${C.stone}"/>
<path d="M120 168 v22 q0 22 22 22 q18 0 18 -18" fill="none" stroke-width="5"/>
<circle cx="102" cy="108" r="7" fill="${C.ink}" stroke="none"/>
<circle cx="138" cy="108" r="7" fill="${C.ink}" stroke="none"/>
<path d="M96 158 q-8 24 -22 24 M144 158 q8 24 22 24" fill="none" stroke-width="7" stroke="${C.cream}"/>`,
  },
  {
    id: 'fish',
    name: 'Ryba',
    tint: C.teal,
    art: `
<path d="M56 120 q46 -56 100 0 q-54 56 -100 0 Z" fill="${C.teal}"/>
<path d="M156 120 l40 -32 v64 Z" fill="${C.blue}"/>
<circle cx="88" cy="112" r="7" fill="${C.ink}" stroke="none"/>
<path d="M116 92 q10 28 0 56" stroke-width="4"/>
<path d="M132 100 q10 20 0 40" stroke-width="4"/>`,
  },
  {
    id: 'butterfly',
    name: 'Motýl',
    tint: C.pink,
    art: `
<path d="M116 120 q-56 -56 -74 -24 q-16 30 22 46 q-30 22 6 44 q30 18 46 -30 Z" fill="${C.pink}"/>
<path d="M124 120 q56 -56 74 -24 q16 30 -22 46 q30 22 -6 44 q-30 18 -46 -30 Z" fill="${C.lavender}"/>
<rect x="112" y="76" width="16" height="92" rx="8" fill="${C.ink}"/>
<path d="M114 76 q-14 -20 -26 -26 M126 76 q14 -20 26 -26" stroke-width="4"/>`,
  },
  {
    id: 'rabbit',
    name: 'Králík',
    tint: C.cream,
    art: `
<path d="M96 92 q-14 -60 4 -60 q18 0 12 60 Z" fill="${C.cream}"/>
<path d="M144 92 q14 -60 -4 -60 q-18 0 -12 60 Z" fill="${C.cream}"/>
<circle cx="120" cy="138" r="50" fill="${C.cream}"/>
<circle cx="102" cy="130" r="7" fill="${C.ink}" stroke="none"/>
<circle cx="138" cy="130" r="7" fill="${C.ink}" stroke="none"/>
<path d="M112 152 h16 l-8 10 Z" fill="${C.pink}"/>
<path d="M120 162 v8 M120 170 q-10 8 -18 0 M120 170 q10 8 18 0" stroke-width="4"/>`,
  },
  {
    id: 'frog',
    name: 'Žába',
    tint: C.green,
    art: `
<circle cx="88" cy="86" r="22" fill="${C.green}"/>
<circle cx="152" cy="86" r="22" fill="${C.green}"/>
<circle cx="88" cy="88" r="8" fill="${C.ink}" stroke="none"/>
<circle cx="152" cy="88" r="8" fill="${C.ink}" stroke="none"/>
<path d="M52 128 q68 -32 136 0 q0 60 -68 60 q-68 0 -68 -60 Z" fill="${C.green}"/>
<path d="M92 154 q28 22 56 0" stroke-width="5"/>`,
  },
  {
    id: 'whale',
    name: 'Velryba',
    tint: C.blue,
    art: `
<path d="M36 128 q8 -56 80 -56 q68 0 82 56 q-16 48 -82 48 q-70 0 -80 -48 Z" fill="${C.blue}"/>
<path d="M196 128 q20 -32 32 -16 q-6 16 -6 16 q0 0 6 16 q-12 16 -32 -16 Z" fill="${C.navy}"/>
<path d="M48 152 q56 28 114 8" fill="none" stroke-width="8" stroke="${C.cream}"/>
<circle cx="80" cy="116" r="7" fill="${C.ink}" stroke="none"/>
<path d="M112 72 q-6 -32 -26 -42 M116 72 q6 -32 26 -42" fill="none" stroke-width="6"/>`,
  },
  {
    id: 'bee',
    name: 'Včela',
    tint: C.yellow,
    art: `
<ellipse cx="120" cy="136" rx="52" ry="42" fill="${C.yellow}"/>
<path d="M104 98 v76 M132 96 v80" stroke-width="12" stroke="${C.ink}"/>
<ellipse cx="120" cy="136" rx="52" ry="42" fill="none"/>
<ellipse cx="86" cy="86" rx="26" ry="18" fill="${C.white}" transform="rotate(-24 86 86)"/>
<ellipse cx="154" cy="86" rx="26" ry="18" fill="${C.white}" transform="rotate(24 154 86)"/>
<path d="M172 132 l24 6" stroke-width="5"/>`,
  },
  {
    id: 'snail',
    name: 'Šnek',
    tint: C.peach,
    art: `
<path d="M62 176 q-14 0 -14 -14 q0 -14 22 -14 h74" fill="${C.peach}" stroke-width="5"/>
<path d="M60 176 h100 q22 0 22 -18" fill="none" stroke-width="5"/>
<circle cx="128" cy="118" r="46" fill="${C.peach}"/>
<path d="M128 118 m0 -26 a26 26 0 1 1 -18 44 a16 16 0 1 1 18 -30" fill="none" stroke-width="5"/>
<path d="M64 148 q-6 -30 6 -40 q14 -10 22 2" fill="${C.sand}"/>
<path d="M70 108 v-22 M84 106 v-22" stroke-width="4"/>
<circle cx="70" cy="82" r="5" fill="${C.ink}" stroke="none"/>
<circle cx="84" cy="82" r="5" fill="${C.ink}" stroke="none"/>`,
  },
  {
    id: 'penguin',
    name: 'Tučňák',
    tint: C.navy,
    art: `
<path d="M120 40 q54 0 54 76 q0 68 -54 68 q-54 0 -54 -68 q0 -76 54 -76 Z" fill="${C.navy}"/>
<path d="M120 76 q30 0 30 46 q0 46 -30 46 q-30 0 -30 -46 q0 -46 30 -46 Z" fill="${C.cream}"/>
<circle cx="106" cy="82" r="6" fill="${C.ink}" stroke="none"/>
<circle cx="134" cy="82" r="6" fill="${C.ink}" stroke="none"/>
<path d="M110 98 L120 110 L130 98 Z" fill="${C.yellow}"/>
<path d="M92 190 q-20 8 -6 14 h34 M148 190 q20 8 6 14 h-34" fill="${C.yellow}"/>`,
  },
];
