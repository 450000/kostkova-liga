import { C, type MotifArt } from './palette';

export const objects: MotifArt[] = [
  {
    id: 'key',
    name: 'Klíč',
    tint: C.yellow,
    art: `
<circle cx="80" cy="110" r="44" fill="none" stroke-width="16" stroke="${C.yellow}"/>
<circle cx="80" cy="110" r="44" fill="none" stroke-width="5"/>
<path d="M114 138 L188 206" stroke-width="16" stroke="${C.yellow}"/>
<path d="M114 138 L188 206" stroke-width="5"/>
<path d="M150 172 l22 -22 M170 192 l20 -20" stroke-width="12" stroke="${C.yellow}"/>
<path d="M150 172 l22 -22 M170 192 l20 -20" stroke-width="5"/>`,
  },
  {
    id: 'clock',
    name: 'Hodiny',
    tint: C.cream,
    art: `
<circle cx="120" cy="126" r="76" fill="${C.cream}"/>
<circle cx="120" cy="126" r="60" fill="none" stroke-width="4"/>
<path d="M120 126 V80 M120 126 l34 22" stroke-width="8"/>
<path d="M120 42 l-16 -18 h32 Z" fill="${C.coral}"/>`,
  },
  {
    id: 'glasses',
    name: 'Brýle',
    tint: C.navy,
    art: `
<circle cx="72" cy="130" r="38" fill="${C.blue}" opacity="0.5"/>
<circle cx="168" cy="130" r="38" fill="${C.blue}" opacity="0.5"/>
<circle cx="72" cy="130" r="38" fill="none" stroke-width="8"/>
<circle cx="168" cy="130" r="38" fill="none" stroke-width="8"/>
<path d="M110 126 q10 -12 20 0" fill="none" stroke-width="8"/>
<path d="M34 122 L20 100 M206 122 l14 -22" stroke-width="8"/>`,
  },
  {
    id: 'book',
    name: 'Kniha',
    tint: C.teal,
    art: `
<path d="M40 68 q40 -16 78 6 v112 q-38 -20 -78 -6 Z" fill="${C.cream}"/>
<path d="M200 68 q-40 -16 -78 6 v112 q38 -20 78 -6 Z" fill="${C.cream}"/>
<path d="M118 74 h4 v112 h-4 Z" fill="${C.teal}"/>
<path d="M58 100 h44 M58 126 h44 M138 100 h44 M138 126 h44" stroke-width="5"/>`,
  },
  {
    id: 'phone',
    name: 'Telefon',
    tint: C.navy,
    art: `
<rect x="72" y="34" width="96" height="176" rx="20" fill="${C.navy}"/>
<rect x="86" y="58" width="68" height="118" rx="8" fill="${C.cream}"/>
<circle cx="120" cy="192" r="9" fill="${C.cream}"/>
<path d="M108 46 h24" stroke-width="5" stroke="${C.cream}"/>`,
  },
  {
    id: 'umbrella',
    name: 'Deštník',
    tint: C.coral,
    art: `
<path d="M24 120 q10 -86 96 -86 q86 0 96 86 q-24 -20 -48 0 q-24 -20 -48 0 q-24 -20 -48 0 q-24 -20 -48 0 Z" fill="${C.coral}"/>
<path d="M120 118 v72 q0 22 -22 22 q-20 0 -20 -18" fill="none" stroke-width="8"/>`,
  },
  {
    id: 'hammer',
    name: 'Kladivo',
    tint: C.stone,
    art: `
<path d="M52 44 h116 q14 0 14 16 v20 q0 16 -14 16 H52 q-14 0 -14 -16 V60 q0 -16 14 -16 Z" fill="${C.stone}"/>
<path d="M104 96 v100 q0 14 14 14 q14 0 14 -14 V96" fill="${C.brown}"/>
<path d="M74 44 v52" stroke-width="4"/>`,
  },
  {
    id: 'candle',
    name: 'Svíčka',
    tint: C.cream,
    art: `
<rect x="88" y="96" width="64" height="112" rx="10" fill="${C.cream}"/>
<path d="M88 116 q16 -14 32 0 t32 0" fill="none" stroke-width="4"/>
<path d="M120 96 v-14" stroke-width="4"/>
<path d="M120 26 q30 32 0 56 q-30 -24 0 -56 Z" fill="${C.yellow}"/>
<path d="M120 44 q14 18 0 32 q-14 -14 0 -32 Z" fill="${C.coral}" stroke="none"/>`,
  },
  {
    id: 'lamp',
    name: 'Lampa',
    tint: C.yellow,
    art: `
<path d="M62 118 L92 46 h56 l30 72 Z" fill="${C.yellow}"/>
<path d="M120 118 v14" stroke-width="5"/>
<path d="M84 132 q36 34 72 0" fill="none" stroke-width="5" stroke="${C.yellow}"/>
<path d="M120 46 V24" stroke-width="5"/>
<circle cx="120" cy="150" r="10" fill="${C.cream}"/>`,
  },
  {
    id: 'scissors',
    name: 'Nůžky',
    tint: C.stone,
    art: `
<path d="M74 34 L142 148 q8 14 -6 20 q-14 6 -20 -8 L56 52 Z" fill="${C.stone}"/>
<path d="M166 34 L98 148 q-8 14 6 20 q14 6 20 -8 L184 52 Z" fill="${C.stone}"/>
<circle cx="84" cy="192" r="23" fill="none" stroke-width="10" stroke="${C.coral}"/>
<circle cx="156" cy="192" r="23" fill="none" stroke-width="10" stroke="${C.coral}"/>
<circle cx="120" cy="128" r="9" fill="${C.cream}"/>`,
  },
  {
    id: 'letter',
    name: 'Dopis',
    tint: C.cream,
    art: `
<rect x="34" y="70" width="172" height="108" rx="12" fill="${C.cream}"/>
<path d="M34 82 L120 142 L206 82" fill="none" stroke-width="6"/>
<path d="M34 170 L96 122 M206 170 L144 122" fill="none" stroke-width="5"/>
<circle cx="176" cy="98" r="14" fill="${C.coral}" stroke="none"/>`,
  },
  {
    id: 'camera',
    name: 'Fotoaparát',
    tint: C.navy,
    art: `
<rect x="30" y="80" width="180" height="112" rx="18" fill="${C.navy}"/>
<path d="M88 80 l12 -22 h40 l12 22 Z" fill="${C.navy}"/>
<circle cx="120" cy="136" r="40" fill="${C.cream}"/>
<circle cx="120" cy="136" r="20" fill="${C.blue}"/>
<circle cx="178" cy="104" r="9" fill="${C.yellow}" stroke="none"/>`,
  },
  {
    id: 'anchor',
    name: 'Kotva',
    tint: C.navy,
    art: `
<circle cx="120" cy="48" r="20" fill="none" stroke-width="9"/>
<path d="M120 68 v130" stroke-width="10"/>
<path d="M76 94 h88" stroke-width="10"/>
<path d="M42 130 q4 74 78 70 q74 4 78 -70" fill="none" stroke-width="10"/>
<path d="M42 130 l-16 12 l24 8 Z" fill="${C.ink}"/>
<path d="M198 130 l16 12 l-24 8 Z" fill="${C.ink}"/>`,
  },
  {
    id: 'gift',
    name: 'Dárek',
    tint: C.lavender,
    art: `
<rect x="42" y="98" width="156" height="102" rx="10" fill="${C.lavender}"/>
<rect x="34" y="72" width="172" height="34" rx="10" fill="${C.blue}"/>
<path d="M108 72 v128 h24 V72 Z" fill="${C.coral}" stroke="none"/>
<path d="M108 72 v128 M132 72 v128" stroke-width="4"/>
<path d="M120 72 q-40 -46 -6 -46 q22 0 6 46 Z" fill="${C.coral}"/>
<path d="M120 72 q40 -46 6 -46 q-22 0 -6 46 Z" fill="${C.coral}"/>`,
  },
];
