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

  {
    id: 'helicopter',
    name: 'Vrtulník',
    tint: C.teal,
    art: `
<path d="M20 56 h200" stroke-width="8"/>
<path d="M116 56 v22" stroke-width="8"/>
<path d="M62 132 q0 -54 58 -54 q52 0 60 40 l38 14 v34 q0 14 -18 14 H82 q-20 0 -20 -22 Z" fill="${C.teal}"/>
<path d="M172 148 h56" stroke-width="10" stroke="${C.teal}"/>
<path d="M172 148 h56" stroke-width="4"/>
<path d="M220 128 v40" stroke-width="7"/>
<circle cx="98" cy="108" r="22" fill="${C.cream}"/>
<path d="M74 190 h100" stroke-width="8"/>
<path d="M92 172 v18 M156 172 v18" stroke-width="6"/>`,
  },
  {
    id: 'motorcycle',
    name: 'Motorka',
    tint: C.red,
    art: `
<circle cx="58" cy="158" r="40" fill="${C.ink}"/>
<circle cx="58" cy="158" r="17" fill="${C.stone}"/>
<circle cx="182" cy="158" r="40" fill="${C.ink}"/>
<circle cx="182" cy="158" r="17" fill="${C.stone}"/>
<path d="M58 158 h44 l16 -30 h48 l16 30" fill="none" stroke-width="11" stroke="${C.red}"/>
<path d="M92 112 h54 q12 0 10 16 l-4 14 h-66 Z" fill="${C.red}"/>
<rect x="104" y="140" width="48" height="26" rx="6" fill="${C.stone}"/>
<path d="M148 112 l28 -22 h24" fill="none" stroke-width="7"/>
<path d="M92 112 q-26 -2 -34 -18" fill="none" stroke-width="7"/>`,
  },
  {
    id: 'truck',
    name: 'Kamion',
    tint: C.blue,
    art: `
<path d="M24 84 h108 v76 H24 Z" fill="${C.blue}"/>
<path d="M140 108 h40 l28 34 v18 h-68 Z" fill="${C.navy}"/>
<path d="M148 116 h26 l18 22 h-44 Z" fill="${C.cream}"/>
<path d="M20 160 h192" stroke-width="6"/>
<circle cx="62" cy="176" r="20" fill="${C.ink}"/>
<circle cx="176" cy="176" r="20" fill="${C.ink}"/>
<circle cx="62" cy="176" r="7" fill="${C.cream}" stroke="none"/>
<circle cx="176" cy="176" r="7" fill="${C.cream}" stroke="none"/>`,
  },
  {
    id: 'firetruck',
    name: 'Hasičské auto',
    tint: C.red,
    art: `
<path d="M24 106 h124 v56 H24 Z" fill="${C.red}"/>
<path d="M148 118 h32 l26 26 v18 h-58 Z" fill="${C.red}"/>
<path d="M154 124 h22 l16 18 h-38 Z" fill="${C.cream}"/>
<path d="M40 96 L188 60" stroke-width="10" stroke="${C.stone}"/>
<path d="M40 96 L188 60" stroke-width="4"/>
<circle cx="66" cy="176" r="19" fill="${C.ink}"/>
<circle cx="172" cy="176" r="19" fill="${C.ink}"/>
<rect x="52" y="122" width="40" height="24" rx="5" fill="${C.cream}"/>
<circle cx="120" cy="94" r="10" fill="${C.blue}"/>`,
  },
  {
    id: 'canoe',
    name: 'Kánoe',
    tint: C.brown,
    art: `
<path d="M20 128 q100 42 200 0 q-40 52 -100 52 q-60 0 -100 -52 Z" fill="${C.brown}"/>
<path d="M20 128 q100 42 200 0" fill="none" stroke-width="5"/>
<path d="M64 60 L176 176" stroke-width="9" stroke="${C.sand}"/>
<path d="M64 60 L176 176" stroke-width="4"/>
<path d="M50 44 q28 -8 30 20 q-26 8 -30 -20 Z" fill="${C.sand}"/>
<path d="M20 196 q26 -16 52 0 t52 0 t52 0 t28 0" fill="none" stroke-width="6" stroke="${C.blue}"/>`,
  },
  {
    id: 'skateboard',
    name: 'Skateboard',
    tint: C.lavender,
    art: `
<path d="M26 128 q0 -18 26 -18 h136 q26 0 26 18 q0 18 -26 18 H52 q-26 0 -26 -18 Z" fill="${C.lavender}"/>
<path d="M70 146 v14 M170 146 v14" stroke-width="8"/>
<circle cx="70" cy="172" r="16" fill="${C.yellow}"/>
<circle cx="170" cy="172" r="16" fill="${C.yellow}"/>
<path d="M96 128 h48" stroke-width="5" stroke="${C.cream}"/>`,
  },
  {
    id: 'cablecar',
    name: 'Lanovka',
    tint: C.coral,
    art: `
<path d="M14 40 L226 84" stroke-width="6"/>
<path d="M116 76 v22" stroke-width="7"/>
<path d="M96 68 h44 l-22 -18 Z" fill="${C.stone}"/>
<rect x="62" y="98" width="112" height="86" rx="18" fill="${C.coral}"/>
<rect x="80" y="116" width="76" height="40" rx="8" fill="${C.cream}"/>
<path d="M62 168 h112" stroke-width="4"/>`,
  },
  {
    id: 'wheelbarrow',
    name: 'Trakař',
    tint: C.sand,
    art: `
<path d="M46 96 h140 l-26 62 H74 Z" fill="${C.sand}"/>
<path d="M186 96 l34 -12" stroke-width="8"/>
<path d="M74 158 l-26 34 M160 158 l24 26" stroke-width="7"/>
<circle cx="88" cy="182" r="24" fill="${C.stone}"/>
<circle cx="88" cy="182" r="8" fill="${C.cream}" stroke="none"/>
<circle cx="108" cy="84" r="14" fill="${C.brown}"/>
<circle cx="140" cy="80" r="16" fill="${C.brown}"/>`,
  },
  {
    id: 'sailboat',
    name: 'Plachetnice',
    tint: C.teal,
    art: `
<path d="M30 156 h180 l-32 42 H62 Z" fill="${C.brown}"/>
<path d="M118 150 V28" stroke-width="7"/>
<path d="M128 42 L178 146 h-50 Z" fill="${C.teal}"/>
<path d="M108 70 L64 146 h44 Z" fill="${C.cream}"/>
<path d="M24 210 q26 -16 52 0 t52 0 t52 0 t28 0" fill="none" stroke-width="6" stroke="${C.blue}"/>`,
  },
  {
    id: 'rollerskate',
    name: 'Brusle',
    tint: C.pink,
    art: `
<path d="M60 60 h58 q0 62 34 74 l32 12 q22 8 22 26 h-146 Z" fill="${C.pink}"/>
<path d="M52 172 h158 q10 0 10 12 h-178 q0 -12 10 -12 Z" fill="${C.stone}"/>
<circle cx="82" cy="198" r="16" fill="${C.yellow}"/>
<circle cx="178" cy="198" r="16" fill="${C.yellow}"/>
<path d="M70 86 h40 M70 110 h44 M74 134 h50" stroke-width="4"/>`,
  },
  {
    id: 'airship',
    name: 'Vzducholoď',
    tint: C.sand,
    art: `
<ellipse cx="118" cy="106" rx="94" ry="54" fill="${C.sand}"/>
<path d="M118 52 v108 M74 60 q-16 46 0 92 M162 60 q16 46 0 92" fill="none" stroke-width="4"/>
<path d="M212 106 l24 -22 v44 Z" fill="${C.coral}"/>
<rect x="92" y="160" width="52" height="30" rx="10" fill="${C.brown}"/>
<path d="M104 160 v-14 M132 160 v-14" stroke-width="4"/>`,
  },
  {
    id: 'surfboard',
    name: 'Surf',
    tint: C.coral,
    art: `
<path d="M120 24 q48 44 48 100 q0 76 -48 88 q-48 -12 -48 -88 q0 -56 48 -100 Z" fill="${C.cream}"/>
<path d="M76 106 h88 M78 146 h84" stroke-width="12" stroke="${C.coral}"/>
<path d="M120 24 v188" stroke-width="4"/>
<path d="M124 208 q22 8 26 30 q-26 2 -30 -22 Z" fill="${C.coral}"/>`,
  },
];
