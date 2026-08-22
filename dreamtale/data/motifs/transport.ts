import { C, type MotifArt } from './palette';

export const transport: MotifArt[] = [
  {
    id: 'car',
    name: 'Auto',
    tint: C.coral,
    art: `
<path d="M34 152 v-24 q0 -12 16 -16 l22 -30 q6 -8 18 -8 h60 q12 0 18 8 l22 30 q16 4 16 16 v24 Z" fill="${C.coral}"/>
<path d="M84 82 h20 v28 H68 Z" fill="${C.blue}"/>
<path d="M120 82 h30 l18 28 h-48 Z" fill="${C.blue}"/>
<circle cx="76" cy="154" r="20" fill="${C.ink}"/>
<circle cx="164" cy="154" r="20" fill="${C.ink}"/>
<circle cx="76" cy="154" r="7" fill="${C.cream}" stroke="none"/>
<circle cx="164" cy="154" r="7" fill="${C.cream}" stroke="none"/>`,
  },
  {
    id: 'train',
    name: 'Vlak',
    tint: C.teal,
    art: `
<path d="M46 166 V92 q0 -12 14 -12 h50 v86 Z" fill="${C.teal}"/>
<rect x="118" y="60" width="76" height="106" rx="10" fill="${C.teal}"/>
<rect x="132" y="76" width="48" height="34" rx="6" fill="${C.cream}"/>
<rect x="62" y="104" width="34" height="30" rx="5" fill="${C.cream}"/>
<rect x="60" y="52" width="26" height="30" rx="6" fill="${C.navy}"/>
<path d="M40 176 h164" stroke-width="8"/>
<circle cx="76" cy="186" r="13" fill="${C.ink}"/>
<circle cx="128" cy="186" r="13" fill="${C.ink}"/>
<circle cx="176" cy="186" r="13" fill="${C.ink}"/>`,
  },
  {
    id: 'ship',
    name: 'Loď',
    tint: C.navy,
    art: `
<path d="M40 148 h160 l-24 44 H64 Z" fill="${C.red}"/>
<path d="M120 140 V44" stroke-width="7"/>
<path d="M126 52 q52 22 0 46 Z" fill="${C.cream}"/>
<path d="M114 60 q-46 26 0 48 Z" fill="${C.cream}"/>
<path d="M32 196 q26 -16 52 0 t52 0 t52 0" fill="none" stroke-width="6" stroke="${C.blue}"/>`,
  },
  {
    id: 'plane',
    name: 'Letadlo',
    tint: C.blue,
    art: `
<path d="M42 128 q0 -18 24 -18 h56 l40 -52 h26 l-20 52 h44 q16 0 16 18 q0 18 -16 18 h-44 l20 52 h-26 l-40 -52 H66 q-24 0 -24 -18 Z" fill="${C.blue}"/>
<circle cx="196" cy="128" r="7" fill="${C.cream}" stroke="none"/>`,
  },
  {
    id: 'bicycle',
    name: 'Kolo',
    tint: C.sage,
    art: `
<circle cx="66" cy="156" r="38" fill="none" stroke-width="8" stroke="${C.sage}"/>
<circle cx="174" cy="156" r="38" fill="none" stroke-width="8" stroke="${C.sage}"/>
<circle cx="66" cy="156" r="38" fill="none" stroke-width="4"/>
<circle cx="174" cy="156" r="38" fill="none" stroke-width="4"/>
<path d="M66 156 L108 156 L136 96 L174 156 M108 156 L136 96 M136 96 h26" stroke-width="6"/>
<circle cx="120" cy="156" r="10" fill="${C.ink}" stroke="none"/>
<path d="M92 118 h26" stroke-width="8" stroke="${C.coral}"/>`,
  },
  {
    id: 'rocket',
    name: 'Raketa',
    tint: C.red,
    art: `
<path d="M120 22 q42 44 42 106 v22 H78 v-22 q0 -62 42 -106 Z" fill="${C.cream}"/>
<circle cx="120" cy="94" r="18" fill="${C.blue}"/>
<path d="M78 132 L46 176 l32 -8 Z" fill="${C.red}"/>
<path d="M162 132 l32 44 l-32 -8 Z" fill="${C.red}"/>
<path d="M100 150 h40 l-8 26 h-24 Z" fill="${C.stone}"/>
<path d="M120 180 q-14 20 0 40 q14 -20 0 -40 Z" fill="${C.yellow}"/>`,
  },
  {
    id: 'balloon',
    name: 'Horkovzdušný balón',
    tint: C.coral,
    art: `
<path d="M120 24 q60 0 60 62 q0 44 -60 76 q-60 -32 -60 -76 q0 -62 60 -62 Z" fill="${C.coral}"/>
<path d="M120 24 v138 M92 34 q-18 62 8 122 M148 34 q18 62 -8 122" stroke-width="4"/>
<path d="M100 162 L106 190 M140 162 L134 190" stroke-width="4"/>
<rect x="100" y="188" width="40" height="30" rx="6" fill="${C.brown}"/>`,
  },
  {
    id: 'bus',
    name: 'Autobus',
    tint: C.yellow,
    art: `
<rect x="36" y="66" width="168" height="102" rx="16" fill="${C.yellow}"/>
<rect x="52" y="84" width="40" height="34" rx="5" fill="${C.blue}"/>
<rect x="100" y="84" width="40" height="34" rx="5" fill="${C.blue}"/>
<rect x="148" y="84" width="40" height="34" rx="5" fill="${C.blue}"/>
<path d="M36 140 h168" stroke-width="4"/>
<circle cx="76" cy="176" r="18" fill="${C.ink}"/>
<circle cx="164" cy="176" r="18" fill="${C.ink}"/>`,
  },
  {
    id: 'tractor',
    name: 'Traktor',
    tint: C.green,
    art: `
<path d="M60 150 v-40 h56 l14 -34 h34 v74 Z" fill="${C.green}"/>
<rect x="130" y="76" width="34" height="34" rx="6" fill="${C.cream}"/>
<circle cx="76" cy="164" r="26" fill="${C.ink}"/>
<circle cx="166" cy="156" r="38" fill="${C.ink}"/>
<circle cx="76" cy="164" r="9" fill="${C.cream}" stroke="none"/>
<circle cx="166" cy="156" r="14" fill="${C.cream}" stroke="none"/>`,
  },
  {
    id: 'submarine',
    name: 'Ponorka',
    tint: C.yellow,
    art: `
<ellipse cx="118" cy="140" rx="82" ry="44" fill="${C.yellow}"/>
<circle cx="96" cy="140" r="16" fill="${C.blue}"/>
<circle cx="140" cy="140" r="16" fill="${C.blue}"/>
<path d="M104 96 h28 v-28 h-14 v28" fill="${C.red}"/>
<path d="M200 140 l26 -22 v44 Z" fill="${C.red}"/>
<circle cx="52" cy="60" r="9" fill="none" stroke-width="4"/>
<circle cx="76" cy="36" r="6" fill="none" stroke-width="4"/>`,
  },
  {
    id: 'scooter',
    name: 'Koloběžka',
    tint: C.pink,
    art: `
<circle cx="62" cy="166" r="26" fill="none" stroke-width="7" stroke="${C.pink}"/>
<circle cx="182" cy="166" r="26" fill="none" stroke-width="7" stroke="${C.pink}"/>
<circle cx="62" cy="166" r="26" fill="none" stroke-width="4"/>
<circle cx="182" cy="166" r="26" fill="none" stroke-width="4"/>
<path d="M62 166 h120" stroke-width="9"/>
<path d="M182 166 V64" stroke-width="9"/>
<path d="M152 60 h58" stroke-width="9"/>`,
  },
  {
    id: 'sled',
    name: 'Sáňky',
    tint: C.brown,
    art: `
<path d="M52 118 h136 q12 0 12 14 t-12 14 H52 q-12 0 -12 -14 t12 -14 Z" fill="${C.sand}"/>
<path d="M72 146 v26 M168 146 v26" stroke-width="8"/>
<path d="M40 196 q0 -18 20 -18 h132 q26 0 22 -30" fill="none" stroke-width="10" stroke="${C.red}"/>
<path d="M78 118 v-22 h18 v22 M144 118 v-22 h18 v22" fill="none" stroke-width="6"/>`,
  },
];
