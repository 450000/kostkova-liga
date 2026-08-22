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
];
