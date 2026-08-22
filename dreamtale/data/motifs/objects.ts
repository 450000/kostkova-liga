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

  {
    id: 'flashlight',
    name: 'Baterka',
    tint: C.yellow,
    art: `
<rect x="44" y="98" width="122" height="60" rx="16" fill="${C.navy}"/>
<path d="M166 86 h32 q16 0 16 18 v48 q0 18 -16 18 h-32 Z" fill="${C.yellow}"/>
<path d="M166 86 v86" fill="none" stroke-width="5"/>
<rect x="72" y="112" width="24" height="16" rx="6" fill="${C.coral}"/>
<path d="M120 98 v60" fill="none" stroke-width="4"/>
<path d="M222 104 l14 -12 M226 128 h14 M222 152 l14 12" stroke-width="5" stroke="${C.yellow}"/>`,
  },
  {
    id: 'suitcase',
    name: 'Kufr',
    tint: C.brown,
    art: `
<path d="M92 74 q0 -18 28 -18 q28 0 28 18 v16 h-14 v-14 q0 -8 -14 -8 q-14 0 -14 8 v14 H92 Z" fill="${C.ink}"/>
<rect x="34" y="90" width="172" height="110" rx="16" fill="${C.brown}"/>
<path d="M34 128 h172 M34 162 h172" fill="none" stroke-width="4"/>
<rect x="98" y="112" width="44" height="26" rx="6" fill="${C.sand}"/>`,
  },
  {
    id: 'backpack',
    name: 'Batoh',
    tint: C.teal,
    art: `
<path d="M78 78 q0 -34 42 -34 q42 0 42 34" fill="none" stroke-width="10" stroke="${C.teal}"/>
<path d="M56 96 q0 -26 64 -26 q64 0 64 26 v82 q0 22 -24 22 H80 q-24 0 -24 -22 Z" fill="${C.teal}"/>
<path d="M84 152 h72 v48 H84 Z" fill="${C.sand}"/>
<path d="M56 140 h128" fill="none" stroke-width="4"/>
<rect x="106" y="164" width="28" height="14" rx="6" fill="${C.brown}"/>`,
  },
  {
    id: 'hat',
    name: 'Klobouk',
    tint: C.navy,
    art: `
<path d="M78 148 V56 q0 -14 42 -14 q42 0 42 14 v92 Z" fill="${C.navy}"/>
<path d="M22 156 q0 -18 98 -18 q98 0 98 18 q0 18 -98 18 q-98 0 -98 -18 Z" fill="${C.navy}"/>
<path d="M78 120 q42 14 84 0" fill="none" stroke-width="14" stroke="${C.coral}"/>`,
  },
  {
    id: 'shoe',
    name: 'Bota',
    tint: C.blue,
    art: `
<path d="M28 168 V104 q0 -18 22 -18 h20 v26 q0 16 24 22 q52 14 84 28 q24 10 24 28 H42 q-14 0 -14 -22 Z" fill="${C.blue}"/>
<ellipse cx="50" cy="102" rx="24" ry="12" fill="${C.cream}"/>
<path d="M18 168 h204 q12 0 12 20 H18 q-12 0 -12 -20 Z" fill="${C.cream}"/>
<path d="M70 152 q46 -30 108 -10" fill="none" stroke-width="8" stroke="${C.cream}"/>
<path d="M84 116 l16 22 M104 122 l16 22 M124 130 l16 20" fill="none" stroke-width="5" stroke="${C.cream}"/>`,
  },
  {
    id: 'tshirt',
    name: 'Tričko',
    tint: C.coral,
    art: `
<path d="M84 52 L38 82 l24 40 22 -12 v96 h112 v-96 l22 12 24 -40 -46 -30 Z" fill="${C.coral}"/>
<path d="M84 52 q36 30 72 0" fill="none" stroke-width="5"/>
<path d="M84 158 h112" fill="none" stroke-width="4"/>`,
  },
  {
    id: 'watch',
    name: 'Hodinky',
    tint: C.stone,
    art: `
<path d="M92 62 h56 v40 H92 Z M92 154 h56 v40 H92 Z" fill="${C.brown}"/>
<circle cx="120" cy="128" r="52" fill="${C.stone}"/>
<circle cx="120" cy="128" r="38" fill="${C.cream}"/>
<path d="M120 128 V102 M120 128 l20 14" fill="none" stroke-width="6"/>
<path d="M172 118 h12 v20 h-12" fill="${C.stone}"/>`,
  },
  {
    id: 'compass',
    name: 'Kompas',
    tint: C.teal,
    art: `
<circle cx="120" cy="128" r="76" fill="${C.stone}"/>
<circle cx="120" cy="128" r="58" fill="${C.cream}"/>
<path d="M120 76 L142 128 L120 180 L98 128 Z" fill="${C.red}"/>
<path d="M120 180 L98 128 L120 128 Z" fill="${C.white}"/>
<path d="M120 68 v-14 M120 188 v14 M60 128 h-14 M180 128 h14" stroke-width="5"/>`,
  },
  {
    id: 'map',
    name: 'Mapa',
    tint: C.sand,
    art: `
<path d="M26 76 L92 54 l56 22 66 -22 v112 l-66 22 -56 -22 -66 22 Z" fill="${C.sand}"/>
<path d="M92 54 v134 M148 76 v134" fill="none" stroke-width="4"/>
<path d="M46 128 q30 -26 58 -6 q30 22 62 -8" fill="none" stroke-width="4" stroke="${C.coral}" stroke-dasharray="10 8"/>
<path d="M166 106 l8 14 h-16 Z" fill="${C.red}"/>
<circle cx="46" cy="132" r="7" fill="${C.red}"/>`,
  },
  {
    id: 'binoculars',
    name: 'Dalekohled',
    tint: C.navy,
    art: `
<rect x="34" y="76" width="62" height="112" rx="24" fill="${C.navy}"/>
<rect x="144" y="76" width="62" height="112" rx="24" fill="${C.navy}"/>
<path d="M96 108 h48 v34 H96 Z" fill="${C.brown}"/>
<circle cx="65" cy="164" r="18" fill="${C.blue}"/>
<circle cx="175" cy="164" r="18" fill="${C.blue}"/>
<path d="M34 106 h62 M144 106 h62" fill="none" stroke-width="4"/>`,
  },
  {
    id: 'magnifier',
    name: 'Lupa',
    tint: C.blue,
    art: `
<circle cx="112" cy="106" r="62" fill="${C.blue}" opacity="0.45"/>
<circle cx="112" cy="106" r="62" fill="none" stroke-width="10"/>
<path d="M64 156 L26 202" stroke-width="20" stroke="${C.brown}"/>
<path d="M64 156 L26 202" stroke-width="5"/>
<path d="M84 82 q10 -22 32 -26" fill="none" stroke-width="7" stroke="${C.cream}"/>`,
  },
  {
    id: 'pencil',
    name: 'Tužka',
    tint: C.yellow,
    art: `
<path d="M46 202 l14 -50 106 -106 34 34 -106 106 Z" fill="${C.yellow}"/>
<path d="M60 152 l34 34" fill="none" stroke-width="4"/>
<path d="M46 202 l14 -50 20 20 Z" fill="${C.sand}"/>
<path d="M46 202 l6 -22 16 16 Z" fill="${C.ink}"/>
<path d="M166 46 l34 34 14 -14 q10 -10 0 -20 l-14 -14 q-10 -10 -20 0 Z" fill="${C.pink}"/>`,
  },
  {
    id: 'paintbrush',
    name: 'Štětec',
    tint: C.coral,
    art: `
<path d="M108 36 h24 v96 h-24 Z" fill="${C.brown}"/>
<path d="M98 132 h44 v26 H98 Z" fill="${C.stone}"/>
<path d="M96 158 h48 q0 46 -24 52 q-24 -6 -24 -52 Z" fill="${C.coral}"/>
<path d="M120 158 v46" fill="none" stroke-width="4"/>`,
  },
  {
    id: 'lightbulb',
    name: 'Žárovka',
    tint: C.yellow,
    art: `
<path d="M120 30 q56 0 56 54 q0 34 -26 52 v18 h-60 v-18 q-26 -18 -26 -52 q0 -54 56 -54 Z" fill="${C.yellow}"/>
<path d="M90 154 h60 v18 H90 Z" fill="${C.stone}"/>
<path d="M96 172 h48 q0 22 -24 22 q-24 0 -24 -22 Z" fill="${C.stone}"/>
<path d="M104 82 q16 24 32 0" fill="none" stroke-width="5"/>
<path d="M120 106 v34" fill="none" stroke-width="5"/>
<path d="M32 60 l20 10 M208 60 l-20 10 M40 130 h-22 M200 130 h22" stroke-width="5"/>`,
  },
  {
    id: 'broom',
    name: 'Koště',
    tint: C.brown,
    art: `
<path d="M112 24 h20 v112 h-20 Z" fill="${C.brown}"/>
<path d="M84 136 h72 l16 34 H68 Z" fill="${C.sand}"/>
<path d="M68 170 h104 l-8 46 H76 Z" fill="${C.yellow}"/>
<path d="M92 176 v36 M120 176 v40 M148 176 v36" fill="none" stroke-width="4"/>`,
  },
  {
    id: 'padlock',
    name: 'Zámek',
    tint: C.stone,
    art: `
<path d="M78 110 V84 q0 -42 42 -42 q42 0 42 42 v26" fill="none" stroke-width="16" stroke="${C.stone}"/>
<path d="M78 110 V84 q0 -42 42 -42 q42 0 42 42 v26" fill="none" stroke-width="5"/>
<rect x="46" y="108" width="148" height="98" rx="18" fill="${C.yellow}"/>
<circle cx="120" cy="146" r="15" fill="${C.ink}"/>
<path d="M120 158 v26" stroke-width="9" stroke="${C.ink}"/>`,
  },
];
