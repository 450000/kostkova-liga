import { C, type MotifArt } from './palette';

export const food: MotifArt[] = [
  {
    id: 'apple',
    name: 'Jablko',
    tint: C.red,
    art: `
<path d="M120 76 q-52 -30 -68 22 q-16 52 26 96 q22 24 42 4 q20 20 42 -4 q42 -44 26 -96 q-16 -52 -68 -22 Z" fill="${C.red}"/>
<path d="M120 76 V44" stroke-width="7"/>
<path d="M122 56 q30 -30 52 -14 q-12 30 -52 22 Z" fill="${C.green}"/>`,
  },
  {
    id: 'banana',
    name: 'Banán',
    tint: C.yellow,
    art: `
<path d="M52 68 q6 92 76 112 q60 16 80 -22 q-16 6 -30 -6 q-60 -14 -84 -50 q-16 -22 -14 -38 Z" fill="${C.yellow}"/>
<path d="M52 68 q-8 -18 8 -20 q14 -2 14 20" fill="${C.brown}"/>
<path d="M204 162 q10 12 -6 16" fill="${C.brown}"/>`,
  },
  {
    id: 'cake',
    name: 'Dort',
    tint: C.pink,
    art: `
<rect x="48" y="118" width="144" height="76" rx="12" fill="${C.cream}"/>
<path d="M48 132 q22 22 36 0 t36 0 t36 0 t36 0" fill="${C.pink}" stroke="none"/>
<path d="M48 132 q22 22 36 0 t36 0 t36 0 t36 0" fill="none" stroke-width="5"/>
<path d="M48 158 h144" stroke-width="4"/>
<path d="M96 118 V78 M120 118 V70 M144 118 V78" stroke-width="8" stroke="${C.coral}"/>
<path d="M96 74 q6 -14 0 -18 M120 66 q6 -14 0 -18 M144 74 q6 -14 0 -18" stroke-width="5" stroke="${C.yellow}" fill="none"/>`,
  },
  {
    id: 'pizza',
    name: 'Pizza',
    tint: C.coral,
    art: `
<path d="M120 30 L214 194 H26 Z" fill="${C.sand}"/>
<path d="M120 62 L188 182 H52 Z" fill="${C.coral}"/>
<circle cx="120" cy="122" r="12" fill="${C.red}"/>
<circle cx="88" cy="160" r="11" fill="${C.red}"/>
<circle cx="152" cy="158" r="11" fill="${C.red}"/>
<circle cx="120" cy="176" r="9" fill="${C.red}"/>`,
  },
  {
    id: 'icecream',
    name: 'Zmrzlina',
    tint: C.pink,
    art: `
<path d="M76 134 h88 L120 216 Z" fill="${C.sand}"/>
<path d="M92 152 l40 22 M110 176 l22 12" stroke-width="4"/>
<circle cx="94" cy="112" r="30" fill="${C.pink}"/>
<circle cx="146" cy="112" r="30" fill="${C.cream}"/>
<circle cx="120" cy="76" r="30" fill="${C.teal}"/>
<circle cx="120" cy="42" r="9" fill="${C.red}"/>`,
  },
  {
    id: 'coffee',
    name: 'Káva',
    tint: C.brown,
    art: `
<path d="M52 92 h116 v54 q0 40 -58 40 q-58 0 -58 -40 Z" fill="${C.cream}"/>
<path d="M52 106 h116" stroke-width="5"/>
<path d="M52 92 h116 v18 H52 Z" fill="${C.brown}" stroke="none"/>
<path d="M52 92 h116 v54 q0 40 -58 40 q-58 0 -58 -40 Z" fill="none"/>
<path d="M168 106 h18 q22 0 22 22 q0 22 -22 22 h-18" fill="none" stroke-width="8"/>
<path d="M92 66 q-10 -14 0 -28 M120 62 q-10 -16 0 -30 M148 66 q-10 -14 0 -28" fill="none" stroke-width="5"/>`,
  },
  {
    id: 'cherry',
    name: 'Třešně',
    tint: C.red,
    art: `
<path d="M86 156 q10 -74 46 -110 M154 152 q6 -62 -22 -110" fill="none" stroke-width="7"/>
<path d="M132 46 q30 -18 46 4 q-30 12 -46 -4 Z" fill="${C.green}"/>
<circle cx="82" cy="170" r="34" fill="${C.red}"/>
<circle cx="158" cy="166" r="30" fill="${C.red}"/>
<circle cx="72" cy="158" r="7" fill="${C.cream}" stroke="none"/>`,
  },
  {
    id: 'carrot',
    name: 'Mrkev',
    tint: C.peach,
    art: `
<path d="M92 88 L120 206 L164 100 Z" fill="${C.coral}"/>
<path d="M110 122 l24 -10 M120 152 l22 -12" stroke-width="4"/>
<path d="M104 90 q-20 -46 6 -52 q14 24 8 48 Z" fill="${C.green}"/>
<path d="M126 92 q28 -40 44 -22 q-14 26 -40 30 Z" fill="${C.green}"/>`,
  },
  {
    id: 'bread',
    name: 'Chleba',
    tint: C.sand,
    art: `
<path d="M40 132 q0 -60 80 -60 q80 0 80 60 v34 q0 12 -14 12 H54 q-14 0 -14 -12 Z" fill="${C.sand}"/>
<path d="M68 82 q10 26 0 46 M104 74 q10 30 0 54 M140 74 q10 30 0 54 M176 84 q10 24 0 44" fill="none" stroke-width="5"/>`,
  },
  {
    id: 'donut',
    name: 'Kobliha',
    tint: C.pink,
    art: `
<circle cx="120" cy="126" r="76" fill="${C.sand}"/>
<path d="M120 50 q76 0 76 76 q0 20 -8 36 q-24 -18 -42 6 q-30 34 -70 12 q-30 -18 -30 -54 q0 -76 74 -76 Z" fill="${C.pink}"/>
<circle cx="120" cy="126" r="26" fill="${C.cream}"/>
<g stroke="${C.yellow}" stroke-width="6">
<path d="M84 82 l10 12 M150 74 l-8 14 M172 122 l-14 4 M96 168 l12 -10 M156 158 l10 12"/>
</g>`,
  },
  {
    id: 'egg',
    name: 'Vejce',
    tint: C.cream,
    art: `
<path d="M120 30 q56 46 56 100 q0 52 -56 52 q-56 0 -56 -52 q0 -54 56 -100 Z" fill="${C.white}"/>
<ellipse cx="120" cy="132" rx="30" ry="26" fill="${C.yellow}"/>`,
  },
  {
    id: 'strawberry',
    name: 'Jahoda',
    tint: C.red,
    art: `
<path d="M120 76 q66 0 66 50 q0 66 -66 84 q-66 -18 -66 -84 q0 -50 66 -50 Z" fill="${C.red}"/>
<g fill="${C.cream}" stroke="none">
<circle cx="98" cy="112" r="5"/><circle cx="140" cy="110" r="5"/><circle cx="120" cy="138" r="5"/>
<circle cx="90" cy="150" r="5"/><circle cx="150" cy="148" r="5"/><circle cx="120" cy="176" r="5"/>
</g>
<path d="M76 72 q44 -22 88 0 q-16 20 -44 20 q-28 0 -44 -20 Z" fill="${C.green}"/>
<path d="M120 68 V38" stroke-width="6"/>`,
  },
];
