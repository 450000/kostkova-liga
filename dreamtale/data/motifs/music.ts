import { C, type MotifArt } from './palette';

export const music: MotifArt[] = [
  {
    id: 'guitar',
    name: 'Kytara',
    tint: C.brown,
    art: `
<path d="M120 92 q46 0 46 44 q0 26 -18 38 q18 20 -4 36 q-24 16 -48 0 q-22 -16 -4 -36 q-18 -12 -18 -38 q0 -44 46 -44 Z" fill="${C.brown}"/>
<circle cx="120" cy="146" r="18" fill="${C.cream}"/>
<path d="M112 92 V34 h16 v58" fill="${C.brown}"/>
<rect x="98" y="16" width="44" height="22" rx="6" fill="${C.sand}"/>`,
  },
  {
    id: 'drum',
    name: 'Buben',
    tint: C.red,
    art: `
<ellipse cx="120" cy="98" rx="76" ry="26" fill="${C.cream}"/>
<path d="M44 98 v46 q0 26 76 26 q76 0 76 -26 V98" fill="${C.red}"/>
<path d="M44 98 q0 26 76 26 q76 0 76 -26" fill="none" stroke-width="5"/>
<path d="M64 116 l32 26 M120 124 v28 M176 116 l-32 26" stroke-width="5"/>
<path d="M78 62 L58 24 M162 62 l20 -38" stroke-width="7"/>
<circle cx="56" cy="20" r="10" fill="${C.sand}"/>
<circle cx="184" cy="20" r="10" fill="${C.sand}"/>`,
  },
  {
    id: 'trumpet',
    name: 'Trumpeta',
    tint: C.yellow,
    art: `
<path d="M42 100 h96 v52 H42 Z" fill="${C.yellow}"/>
<path d="M138 74 l60 -30 v128 l-60 -30 Z" fill="${C.yellow}"/>
<path d="M42 100 q-24 6 -24 26 q0 20 24 26 Z" fill="${C.sand}"/>
<path d="M66 100 V70 M98 100 V70 M130 100 V70" stroke-width="9"/>`,
  },
  {
    id: 'piano',
    name: 'Klavír',
    tint: C.cream,
    art: `
<rect x="34" y="70" width="172" height="102" rx="10" fill="${C.cream}"/>
<path d="M62 70 v102 M90 70 v102 M118 70 v102 M146 70 v102 M174 70 v102" stroke-width="4"/>
<g fill="${C.ink}" stroke="none">
<rect x="54" y="70" width="16" height="60" rx="3"/>
<rect x="82" y="70" width="16" height="60" rx="3"/>
<rect x="138" y="70" width="16" height="60" rx="3"/>
<rect x="166" y="70" width="16" height="60" rx="3"/>
</g>
<rect x="34" y="70" width="172" height="102" rx="10" fill="none"/>`,
  },
  {
    id: 'note',
    name: 'Nota',
    tint: C.lavender,
    art: `
<path d="M96 168 V50 l84 -22 v118" fill="none" stroke-width="10"/>
<path d="M96 66 l84 -22" stroke-width="10"/>
<ellipse cx="74" cy="172" rx="26" ry="20" fill="${C.lavender}" transform="rotate(-16 74 172)"/>
<ellipse cx="158" cy="146" rx="26" ry="20" fill="${C.lavender}" transform="rotate(-16 158 146)"/>`,
  },
  {
    id: 'bell',
    name: 'Zvonek',
    tint: C.yellow,
    art: `
<path d="M56 168 q0 -100 64 -100 q64 0 64 100 Z" fill="${C.yellow}"/>
<path d="M44 168 h152 q0 16 -16 16 H60 q-16 0 -16 -16 Z" fill="${C.sand}"/>
<circle cx="120" cy="200" r="14" fill="${C.yellow}"/>
<path d="M120 68 V46" stroke-width="6"/>
<circle cx="120" cy="38" r="10" fill="${C.sand}"/>`,
  },
  {
    id: 'headphones',
    name: 'Sluchátka',
    tint: C.navy,
    art: `
<path d="M46 148 v-24 q0 -74 74 -74 q74 0 74 74 v24" fill="none" stroke-width="14" stroke="${C.navy}"/>
<path d="M46 148 v-24 q0 -74 74 -74 q74 0 74 74 v24" fill="none" stroke-width="4"/>
<rect x="28" y="136" width="40" height="62" rx="18" fill="${C.coral}"/>
<rect x="172" y="136" width="40" height="62" rx="18" fill="${C.coral}"/>`,
  },
  {
    id: 'violin',
    name: 'Housle',
    tint: C.brown,
    art: `
<path d="M120 84 q40 0 40 34 q0 18 -14 28 q14 14 -2 32 q-24 22 -48 0 q-16 -18 -2 -32 q-14 -10 -14 -28 q0 -34 40 -34 Z" fill="${C.brown}"/>
<path d="M112 84 V30 h16 v54" fill="${C.brown}"/>
<path d="M120 30 q-18 -6 -12 -22" fill="none" stroke-width="6"/>
<path d="M112 96 v78 M128 96 v78" stroke-width="3"/>
<path d="M180 40 L206 190" stroke-width="7" stroke="${C.sand}"/>`,
  },
];
