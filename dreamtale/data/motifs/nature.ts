import { C, type MotifArt } from './palette';

export const nature: MotifArt[] = [
  {
    id: 'tree',
    name: 'Strom',
    tint: C.green,
    art: `
<rect x="108" y="126" width="24" height="76" rx="10" fill="${C.brown}"/>
<circle cx="120" cy="94" r="58" fill="${C.green}"/>
<circle cx="82" cy="120" r="30" fill="${C.sage}"/>
<circle cx="158" cy="120" r="30" fill="${C.sage}"/>`,
  },
  {
    id: 'flower',
    name: 'Květina',
    tint: C.pink,
    art: `
<path d="M120 96 v106" stroke-width="8"/>
<path d="M120 150 q-34 -6 -40 -30 q30 -10 40 30 Z" fill="${C.sage}"/>
<circle cx="120" cy="56" r="24" fill="${C.pink}"/>
<circle cx="76" cy="88" r="24" fill="${C.pink}"/>
<circle cx="164" cy="88" r="24" fill="${C.pink}"/>
<circle cx="94" cy="132" r="24" fill="${C.pink}"/>
<circle cx="146" cy="132" r="24" fill="${C.pink}"/>
<circle cx="120" cy="96" r="26" fill="${C.yellow}"/>`,
  },
  {
    id: 'mushroom',
    name: 'Houba',
    tint: C.red,
    art: `
<path d="M84 128 q0 66 36 66 q36 0 36 -66 Z" fill="${C.cream}"/>
<path d="M30 128 q14 -80 90 -80 q76 0 90 80 Z" fill="${C.red}"/>
<circle cx="76" cy="98" r="12" fill="${C.cream}" stroke="none"/>
<circle cx="132" cy="82" r="14" fill="${C.cream}" stroke="none"/>
<circle cx="166" cy="112" r="10" fill="${C.cream}" stroke="none"/>`,
  },
  {
    id: 'leaf',
    name: 'List',
    tint: C.sage,
    art: `
<path d="M52 188 q-14 -122 136 -136 q16 132 -136 136 Z" fill="${C.sage}"/>
<path d="M60 180 q60 -66 128 -136" stroke-width="5"/>
<path d="M96 148 q6 -30 -6 -50 M132 118 q6 -30 -8 -48 M84 176 q-6 -28 -22 -40" stroke-width="4"/>`,
  },
  {
    id: 'cactus',
    name: 'Kaktus',
    tint: C.green,
    art: `
<rect x="98" y="44" width="44" height="150" rx="22" fill="${C.green}"/>
<path d="M98 108 h-24 q-18 0 -18 -20 v-16" fill="none" stroke-width="26" stroke="${C.green}"/>
<path d="M142 130 h22 q18 0 18 -20 v-24" fill="none" stroke-width="26" stroke="${C.green}"/>
<path d="M98 108 h-24 q-18 0 -18 -20 v-16 M142 130 h22 q18 0 18 -20 v-24" fill="none" stroke-width="5"/>
<rect x="98" y="44" width="44" height="150" rx="22" fill="none"/>
<path d="M74 194 h92" stroke-width="6"/>`,
  },
  {
    id: 'mountain',
    name: 'Hora',
    tint: C.navy,
    art: `
<path d="M28 186 L96 74 L152 154 L178 116 L214 186 Z" fill="${C.navy}"/>
<path d="M72 122 L96 74 L122 112 q-24 16 -50 10 Z" fill="${C.cream}"/>
<path d="M166 132 L178 116 L192 138 q-14 6 -26 -6 Z" fill="${C.cream}"/>`,
  },
  {
    id: 'sea',
    name: 'Moře',
    tint: C.teal,
    art: `
<path d="M32 96 q26 -22 52 0 t52 0 t52 0 t20 6" fill="none" stroke-width="8" stroke="${C.teal}"/>
<path d="M32 132 q26 -22 52 0 t52 0 t52 0 t20 6" fill="none" stroke-width="8" stroke="${C.blue}"/>
<path d="M32 168 q26 -22 52 0 t52 0 t52 0 t20 6" fill="none" stroke-width="8" stroke="${C.teal}"/>`,
  },
  {
    id: 'island',
    name: 'Ostrov',
    tint: C.sand,
    art: `
<path d="M40 174 q80 -34 160 0 q-40 24 -80 24 q-40 0 -80 -24 Z" fill="${C.sand}"/>
<path d="M120 168 v-62" stroke-width="9"/>
<path d="M120 106 q-40 -22 -52 4 q30 -6 52 12 Z" fill="${C.sage}"/>
<path d="M120 106 q40 -22 52 4 q-30 -6 -52 12 Z" fill="${C.sage}"/>
<path d="M120 100 q-8 -34 -34 -36 q16 26 34 42 Z" fill="${C.green}"/>
<path d="M120 100 q8 -34 34 -36 q-16 26 -34 42 Z" fill="${C.green}"/>`,
  },
  {
    id: 'conifer',
    name: 'Jehličnan',
    tint: C.green,
    art: `
<path d="M120 26 L164 96 h-88 Z" fill="${C.green}"/>
<path d="M120 72 L176 148 H64 Z" fill="${C.green}"/>
<path d="M120 120 L192 198 H48 Z" fill="${C.sage}"/>
<rect x="106" y="192" width="28" height="26" rx="6" fill="${C.brown}"/>`,
  },
  {
    id: 'feather',
    name: 'Pírko',
    tint: C.lavender,
    art: `
<path d="M172 44 q-92 20 -108 96 q-6 32 18 44 q60 -22 90 -140 Z" fill="${C.lavender}"/>
<path d="M172 44 q-70 74 -90 140" stroke-width="5"/>
<path d="M82 184 L48 210" stroke-width="6"/>`,
  },
  {
    id: 'acorn',
    name: 'Žalud',
    tint: C.brown,
    art: `
<path d="M78 96 q42 14 84 0 q-4 104 -42 104 q-38 0 -42 -104 Z" fill="${C.sand}"/>
<path d="M120 106 q-48 0 -48 -28 q0 -34 48 -34 q48 0 48 34 q0 28 -48 28 Z" fill="${C.brown}"/>
<path d="M96 54 l-8 42 M120 46 v56 M144 54 l8 42" stroke-width="3.5"/>
<path d="M120 46 v-20" stroke-width="6"/>`,
  },
  {
    id: 'stone',
    name: 'Kameny',
    tint: C.stone,
    art: `
<ellipse cx="120" cy="180" rx="68" ry="26" fill="${C.stone}"/>
<ellipse cx="112" cy="136" rx="48" ry="26" fill="${C.cream}"/>
<ellipse cx="122" cy="94" rx="33" ry="23" fill="${C.stone}"/>
<path d="M92 174 q26 -12 56 -2" fill="none" stroke-width="4"/>`,
  },

  {
    id: 'volcano',
    name: 'Sopka',
    tint: C.red,
    art: `
<path d="M24 194 L88 76 h64 l64 118 Z" fill="${C.stone}"/>
<path d="M88 76 h64 q-8 16 -32 16 q-24 0 -32 -16 Z" fill="${C.ink}"/>
<path d="M96 88 q-10 40 -30 52 q30 8 42 -44 Z" fill="${C.coral}"/>
<path d="M144 88 q10 46 34 60 q-32 6 -46 -52 Z" fill="${C.coral}"/>
<path d="M120 62 q-16 -22 2 -44 q6 24 26 26 q-14 8 -28 18 Z" fill="${C.red}"/>
<circle cx="86" cy="46" r="9" fill="${C.coral}"/>
<circle cx="162" cy="38" r="7" fill="${C.coral}"/>`,
  },
  {
    id: 'palm',
    name: 'Palma',
    tint: C.green,
    art: `
<path d="M108 206 q-18 -66 26 -104" fill="none" stroke-width="18" stroke="${C.brown}"/>
<path d="M108 206 q-18 -66 26 -104" fill="none" stroke-width="5"/>
<path d="M136 98 q-46 -34 -74 -6 q34 -4 74 6 Z" fill="${C.green}"/>
<path d="M136 98 q40 -40 74 -14 q-36 0 -74 14 Z" fill="${C.green}"/>
<path d="M136 98 q-22 -48 8 -66 q6 32 -8 66 Z" fill="${C.sage}"/>
<path d="M136 98 q46 -18 56 14 q-30 -18 -56 -14 Z" fill="${C.sage}"/>
<circle cx="122" cy="116" r="10" fill="${C.brown}"/>
<circle cx="146" cy="120" r="9" fill="${C.brown}"/>`,
  },
  {
    id: 'tulip',
    name: 'Tulipán',
    tint: C.red,
    art: `
<path d="M120 116 v92" stroke-width="8"/>
<path d="M120 164 q-38 -8 -44 -34 q34 -10 44 34 Z" fill="${C.sage}"/>
<path d="M120 172 q38 -8 44 -34 q-34 -10 -44 34 Z" fill="${C.sage}"/>
<path d="M76 66 q6 58 44 58 q38 0 44 -58 q-20 22 -30 -6 q-14 26 -28 0 q-10 28 -30 6 Z" fill="${C.red}"/>`,
  },
  {
    id: 'clover',
    name: 'Čtyřlístek',
    tint: C.green,
    art: `
<path d="M118 116 q4 60 -24 62 q-26 0 -6 -22" fill="none" stroke-width="7"/>
<path d="M114 112 q-42 -8 -44 -36 q-2 -26 24 -26 q26 0 22 62 Z" fill="${C.green}"/>
<path d="M126 112 q42 -8 44 -36 q2 -26 -24 -26 q-26 0 -22 62 Z" fill="${C.green}"/>
<path d="M114 124 q-42 8 -44 36 q-2 26 24 26 q26 0 22 -62 Z" fill="${C.sage}"/>
<path d="M126 124 q42 8 44 36 q2 26 -24 26 q-26 0 -22 -62 Z" fill="${C.sage}"/>`,
  },
  {
    id: 'pinecone',
    name: 'Šiška',
    tint: C.brown,
    art: `
<path d="M120 202 q-54 -36 -54 -94 q0 -52 54 -74 q54 22 54 74 q0 58 -54 94 Z" fill="${C.brown}"/>
<path d="M77 62 q24 -24 48 0 q-24 18 -48 0 Z" fill="${C.sand}"/>
<path d="M115 62 q24 -24 48 0 q-24 18 -48 0 Z" fill="${C.sand}"/>
<path d="M58 96 q24 -24 48 0 q-24 18 -48 0 Z" fill="${C.sand}"/>
<path d="M96 96 q24 -24 48 0 q-24 18 -48 0 Z" fill="${C.sand}"/>
<path d="M134 96 q24 -24 48 0 q-24 18 -48 0 Z" fill="${C.sand}"/>
<path d="M58 130 q24 -24 48 0 q-24 18 -48 0 Z" fill="${C.sand}"/>
<path d="M96 130 q24 -24 48 0 q-24 18 -48 0 Z" fill="${C.sand}"/>
<path d="M134 130 q24 -24 48 0 q-24 18 -48 0 Z" fill="${C.sand}"/>
<path d="M77 164 q24 -24 48 0 q-24 18 -48 0 Z" fill="${C.sand}"/>
<path d="M115 164 q24 -24 48 0 q-24 18 -48 0 Z" fill="${C.sand}"/>
<path d="M120 34 v-14" stroke-width="6"/>`,
  },
  {
    id: 'wheat',
    name: 'Klas',
    tint: C.sand,
    art: `
<path d="M120 214 V70" stroke-width="7"/>
<g fill="${C.yellow}">
<path d="M120 76 q-30 -6 -32 -26 q26 -6 32 26 Z"/><path d="M120 76 q30 -6 32 -26 q-26 -6 -32 26 Z"/>
<path d="M120 108 q-30 -6 -32 -26 q26 -6 32 26 Z"/><path d="M120 108 q30 -6 32 -26 q-26 -6 -32 26 Z"/>
<path d="M120 140 q-30 -6 -32 -26 q26 -6 32 26 Z"/><path d="M120 140 q30 -6 32 -26 q-26 -6 -32 26 Z"/>
</g>
<path d="M120 52 q-10 -22 0 -34 q10 12 0 34 Z" fill="${C.yellow}"/>`,
  },
  {
    id: 'waterfall',
    name: 'Vodopád',
    tint: C.blue,
    art: `
<path d="M26 48 h74 v142 H26 Z" fill="${C.stone}"/>
<path d="M140 48 h74 v142 h-74 Z" fill="${C.stone}"/>
<path d="M100 62 h40 v122 h-40 Z" fill="${C.blue}"/>
<path d="M100 62 h40" fill="none" stroke-width="5"/>
<path d="M112 84 v78 M128 84 v78" fill="none" stroke-width="4" stroke="${C.cream}"/>
<ellipse cx="120" cy="188" rx="58" ry="20" fill="${C.teal}"/>
<path d="M84 186 q16 -10 30 0 M132 190 q16 -10 30 0" fill="none" stroke-width="4" stroke="${C.cream}"/>
<path d="M40 74 h44 M156 96 h44" fill="none" stroke-width="4"/>`,
  },
  {
    id: 'nest',
    name: 'Hnízdo',
    tint: C.brown,
    art: `
<ellipse cx="92" cy="108" rx="25" ry="30" fill="${C.cream}"/>
<ellipse cx="148" cy="108" rx="25" ry="30" fill="${C.cream}"/>
<ellipse cx="120" cy="86" rx="25" ry="30" fill="${C.white}"/>
<path d="M36 142 q0 -20 22 -20 h124 q22 0 22 20 q0 62 -84 62 q-84 0 -84 -62 Z" fill="${C.brown}"/>
<path d="M44 162 h152 M54 184 h132" fill="none" stroke-width="4"/>`,
  },
  {
    id: 'fern',
    name: 'Kapradina',
    tint: C.sage,
    art: `
<path d="M120 214 q-8 -100 0 -168" fill="none" stroke-width="7"/>
<g fill="${C.sage}">
<path d="M120 74 q-32 -4 -34 -26 q28 -6 34 26 Z"/><path d="M120 74 q32 -4 34 -26 q-28 -6 -34 26 Z"/>
<path d="M120 116 q-42 -4 -46 -30 q36 -8 46 30 Z"/><path d="M120 116 q42 -4 46 -30 q-36 -8 -46 30 Z"/>
<path d="M122 162 q-50 -4 -56 -32 q44 -10 56 32 Z"/><path d="M122 162 q50 -4 56 -32 q-44 -10 -56 32 Z"/>
</g>
<path d="M120 46 q-14 -18 2 -28 q12 12 -2 28 Z" fill="${C.green}"/>`,
  },
  {
    id: 'stump',
    name: 'Pařez',
    tint: C.brown,
    art: `
<path d="M56 108 h128 v72 q-64 18 -128 0 Z" fill="${C.brown}"/>
<ellipse cx="120" cy="108" rx="64" ry="26" fill="${C.sand}"/>
<ellipse cx="120" cy="108" rx="40" ry="16" fill="none" stroke-width="4"/>
<ellipse cx="120" cy="108" rx="18" ry="7" fill="none" stroke-width="4"/>
<path d="M74 138 v34 M120 146 v38 M166 138 v34" fill="none" stroke-width="4"/>
<path d="M184 150 q30 -6 34 20 q-24 8 -34 -20 Z" fill="${C.sage}"/>`,
  },
  {
    id: 'bamboo',
    name: 'Bambus',
    tint: C.green,
    art: `
<rect x="70" y="34" width="30" height="180" rx="10" fill="${C.green}"/>
<rect x="128" y="60" width="30" height="154" rx="10" fill="${C.sage}"/>
<path d="M70 88 h30 M70 142 h30 M128 112 h30 M128 166 h30" stroke-width="5"/>
<path d="M100 96 q40 -22 58 -4 q-32 20 -58 4 Z" fill="${C.sage}"/>
<path d="M70 128 q-40 -22 -58 -4 q32 20 58 4 Z" fill="${C.green}"/>
<path d="M158 150 q36 -20 52 -4 q-30 18 -52 4 Z" fill="${C.green}"/>`,
  },
  {
    id: 'seashell',
    name: 'Mušle',
    tint: C.pink,
    art: `
<path d="M120 186 q-90 -6 -90 -76 q0 -60 90 -60 q90 0 90 60 q0 70 -90 76 Z" fill="${C.pink}"/>
<path d="M120 186 V50 M120 186 q-46 -40 -58 -108 M120 186 q46 -40 58 -108 M120 186 q-76 -34 -88 -72 M120 186 q76 -34 88 -72" fill="none" stroke-width="4"/>
<path d="M104 50 q16 -20 32 0 Z" fill="${C.peach}"/>`,
  },
  {
    id: 'iceberg',
    name: 'Ledovec',
    tint: C.blue,
    art: `
<path d="M56 132 L104 40 L138 92 L162 62 L206 132 Z" fill="${C.white}"/>
<path d="M104 40 L118 132 h-62 Z" fill="${C.stone}" opacity="0.5"/>
<path d="M20 132 h200" stroke-width="6" stroke="${C.blue}"/>
<path d="M56 132 L34 190 h180 l-24 -58 Z" fill="${C.blue}" opacity="0.55"/>
<path d="M56 132 L34 190 h180 l-24 -58 Z" fill="none" stroke-width="4"/>`,
  },
];
