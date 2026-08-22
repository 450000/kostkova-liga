import { C, type MotifArt } from './palette';

export const play: MotifArt[] = [
  {
    id: 'kite',
    name: 'Drak (papírový)',
    tint: C.coral,
    art: `
<path d="M120 22 L192 96 L120 170 L48 96 Z" fill="${C.coral}"/>
<path d="M120 22 V170 M48 96 H192" stroke-width="5"/>
<path d="M120 170 q-30 24 -8 44 q22 20 -6 40" fill="none" stroke-width="5"/>
<path d="M100 190 h30 M92 220 h30" stroke-width="8" stroke="${C.yellow}"/>`,
  },
  {
    id: 'ball',
    name: 'Míč',
    tint: C.blue,
    art: `
<circle cx="120" cy="122" r="80" fill="${C.cream}"/>
<path d="M120 74 l38 28 -14 46 h-48 l-14 -46 Z" fill="${C.navy}"/>
<path d="M120 42 v32 M158 102 l30 -10 M144 148 l22 28 M96 148 l-22 28 M82 102 l-30 -10" stroke-width="6"/>`,
  },
  {
    id: 'dice',
    name: 'Kostka',
    tint: C.white,
    art: `
<rect x="48" y="48" width="144" height="144" rx="26" fill="${C.white}"/>
<g fill="${C.ink}" stroke="none">
<circle cx="88" cy="88" r="12"/><circle cx="152" cy="88" r="12"/>
<circle cx="120" cy="120" r="12"/>
<circle cx="88" cy="152" r="12"/><circle cx="152" cy="152" r="12"/>
</g>`,
  },
  {
    id: 'pawn',
    name: 'Figurka',
    tint: C.navy,
    art: `
<circle cx="120" cy="60" r="28" fill="${C.navy}"/>
<path d="M96 88 q24 20 48 0 q10 22 -8 40 q26 22 30 62 H74 q4 -40 30 -62 q-18 -18 -8 -40 Z" fill="${C.navy}"/>
<path d="M62 190 h116 q10 0 10 12 H52 q0 -12 10 -12 Z" fill="${C.navy}"/>`,
  },
  {
    id: 'puzzle',
    name: 'Puzzle',
    tint: C.sage,
    art: `
<path d="M56 56 h50 q-10 -26 14 -26 q24 0 14 26 h50 v50 q26 -10 26 14 q0 24 -26 14 v50 h-50 q10 26 -14 26 q-24 0 -14 -26 H56 v-50 q-26 10 -26 -14 q0 -24 26 -14 Z" fill="${C.sage}"/>`,
  },
  {
    id: 'partyballoon',
    name: 'Balónek',
    tint: C.pink,
    art: `
<path d="M120 26 q52 0 52 58 q0 54 -52 76 q-52 -22 -52 -76 q0 -58 52 -58 Z" fill="${C.pink}"/>
<path d="M110 160 h20 l-10 14 Z" fill="${C.pink}"/>
<path d="M120 174 q22 20 0 34 q-22 14 0 32" fill="none" stroke-width="5"/>
<path d="M96 62 q10 -18 26 -22" fill="none" stroke-width="6" stroke="${C.cream}"/>`,
  },
  {
    id: 'spinningtop',
    name: 'Káča',
    tint: C.teal,
    art: `
<path d="M40 96 h160 l-80 108 Z" fill="${C.teal}"/>
<path d="M40 96 h160" stroke-width="5"/>
<path d="M120 204 v18" stroke-width="7"/>
<rect x="104" y="56" width="32" height="40" rx="8" fill="${C.coral}"/>
<path d="M74 132 h92" stroke-width="6" stroke="${C.cream}"/>`,
  },
  {
    id: 'paperplane',
    name: 'Papírová vlaštovka',
    tint: C.blue,
    art: `
<path d="M26 78 L214 40 L128 196 L104 132 Z" fill="${C.cream}"/>
<path d="M26 78 L128 196 L214 40 Z" fill="${C.blue}" opacity="0.55"/>
<path d="M26 78 L214 40 L128 196 L104 132 Z M214 40 L104 132" fill="none" stroke-width="5"/>`,
  },
  {
    id: 'blocks',
    name: 'Kostky',
    tint: C.coral,
    art: `
<rect x="52" y="130" width="66" height="66" rx="12" fill="${C.coral}"/>
<rect x="124" y="130" width="66" height="66" rx="12" fill="${C.blue}"/>
<rect x="88" y="58" width="66" height="66" rx="12" fill="${C.yellow}"/>
<path d="M108 88 h26 M121 75 v26" stroke-width="6"/>`,
  },
  {
    id: 'lollipop',
    name: 'Lízátko',
    tint: C.pink,
    art: `
<circle cx="120" cy="94" r="62" fill="${C.pink}"/>
<path d="M120 94 m0 -40 a40 40 0 0 1 30 66 a30 30 0 1 1 -50 -46 a20 20 0 1 1 24 32" fill="none" stroke-width="7" stroke="${C.cream}"/>
<path d="M120 156 v62" stroke-width="9"/>`,
  },
];
