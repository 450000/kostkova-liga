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

  {
    id: 'grapes',
    name: 'Hrozny',
    tint: C.lavender,
    art: `
<path d="M120 76 q6 -30 34 -40" fill="none" stroke-width="7"/>
<path d="M154 40 q30 -14 42 4 q-28 16 -42 -4 Z" fill="${C.sage}"/>
<g fill="${C.lavender}">
<circle cx="96" cy="94" r="22"/><circle cx="144" cy="94" r="22"/>
<circle cx="72" cy="132" r="22"/><circle cx="120" cy="132" r="22"/><circle cx="168" cy="132" r="22"/>
<circle cx="96" cy="170" r="22"/><circle cx="144" cy="170" r="22"/>
<circle cx="120" cy="204" r="22"/>
</g>`,
  },
  {
    id: 'watermelon',
    name: 'Meloun',
    tint: C.red,
    art: `
<path d="M22 168 a98 98 0 0 1 196 0 Z" fill="${C.red}"/>
<path d="M22 168 a98 98 0 0 1 196 0" fill="none" stroke-width="16" stroke="${C.green}"/>
<path d="M22 168 a98 98 0 0 1 196 0 Z" fill="none" stroke-width="5"/>
<g fill="${C.ink}" stroke="none">
<ellipse cx="86" cy="132" rx="6" ry="9"/><ellipse cx="120" cy="112" rx="6" ry="9"/>
<ellipse cx="154" cy="132" rx="6" ry="9"/><ellipse cx="104" cy="152" rx="6" ry="9"/>
<ellipse cx="138" cy="152" rx="6" ry="9"/>
</g>`,
  },
  {
    id: 'lemon',
    name: 'Citron',
    tint: C.yellow,
    art: `
<path d="M40 128 q0 -56 80 -56 q80 0 80 56 q0 56 -80 56 q-80 0 -80 -56 Z" fill="${C.yellow}"/>
<path d="M200 118 q26 -6 28 10 q-26 8 -28 -10 Z" fill="${C.yellow}"/>
<path d="M40 118 q-26 -6 -28 10 q26 8 28 -10 Z" fill="${C.yellow}"/>
<path d="M120 84 v88 M64 128 h112 M76 96 l88 64 M76 160 l88 -64" fill="none" stroke-width="4" stroke="${C.cream}"/>`,
  },
  {
    id: 'pear',
    name: 'Hruška',
    tint: C.sage,
    art: `
<path d="M120 62 q34 22 22 56 q22 22 22 54 q0 44 -44 44 q-44 0 -44 -44 q0 -32 22 -54 q-12 -34 22 -56 Z" fill="${C.sage}"/>
<path d="M120 62 V32" stroke-width="7"/>
<path d="M122 44 q28 -26 46 -12 q-12 26 -46 12 Z" fill="${C.green}"/>`,
  },
  {
    id: 'pineapple',
    name: 'Ananas',
    tint: C.yellow,
    art: `
<path d="M120 88 q52 0 52 56 q0 66 -52 66 q-52 0 -52 -66 q0 -56 52 -56 Z" fill="${C.yellow}"/>
<path d="M74 118 l92 62 M74 180 l92 -62" fill="none" stroke-width="4"/>
<path d="M120 88 q-14 -56 -44 -60 q6 40 30 60 Z" fill="${C.green}"/>
<path d="M120 88 q14 -56 44 -60 q-6 40 -30 60 Z" fill="${C.green}"/>
<path d="M120 84 q-6 -50 0 -62 q6 12 0 62 Z" fill="${C.sage}"/>`,
  },
  {
    id: 'avocado',
    name: 'Avokádo',
    tint: C.green,
    art: `
<path d="M120 34 q56 40 56 100 q0 74 -56 74 q-56 0 -56 -74 q0 -60 56 -100 Z" fill="${C.green}"/>
<path d="M120 62 q38 34 38 78 q0 54 -38 54 q-38 0 -38 -54 q0 -44 38 -78 Z" fill="${C.sage}"/>
<circle cx="120" cy="144" r="28" fill="${C.brown}"/>`,
  },
  {
    id: 'tomato',
    name: 'Rajče',
    tint: C.red,
    art: `
<circle cx="120" cy="140" r="72" fill="${C.red}"/>
<path d="M120 74 q-16 -22 -46 -22 q10 20 30 26 q-30 4 -36 -8 q0 24 52 20 Z" fill="${C.green}"/>
<path d="M120 74 q16 -22 46 -22 q-10 20 -30 26 q30 4 36 -8 q0 24 -52 20 Z" fill="${C.green}"/>
<path d="M120 68 v-24" stroke-width="6"/>
<path d="M86 110 q-10 18 -6 34" fill="none" stroke-width="6" stroke="${C.cream}"/>`,
  },
  {
    id: 'cheese',
    name: 'Sýr',
    tint: C.yellow,
    art: `
<path d="M30 108 L188 68 l24 34 v72 H30 Z" fill="${C.yellow}"/>
<path d="M30 108 h182" fill="none" stroke-width="5"/>
<g fill="${C.sand}">
<circle cx="70" cy="140" r="14"/><circle cx="126" cy="126" r="11"/>
<circle cx="164" cy="150" r="13"/><circle cx="98" cy="166" r="10"/>
</g>`,
  },
  {
    id: 'fries',
    name: 'Hranolky',
    tint: C.coral,
    art: `
<g fill="${C.yellow}">
<rect x="66" y="46" width="22" height="86" rx="6" transform="rotate(-10 77 89)"/>
<rect x="106" y="34" width="22" height="98" rx="6"/>
<rect x="146" y="46" width="22" height="86" rx="6" transform="rotate(10 157 89)"/>
</g>
<path d="M60 116 h124 l-16 90 H76 Z" fill="${C.red}"/>
<path d="M60 116 h124" fill="none" stroke-width="5"/>
<path d="M96 150 h48" stroke-width="6" stroke="${C.cream}"/>`,
  },
  {
    id: 'burger',
    name: 'Hamburger',
    tint: C.brown,
    art: `
<path d="M34 116 q0 -60 86 -60 q86 0 86 60 Z" fill="${C.sand}"/>
<path d="M30 132 q22 -20 46 0 t46 0 t46 0 t42 0 v6 H30 Z" fill="${C.sage}"/>
<path d="M32 152 h176 v20 H32 Z" fill="${C.brown}"/>
<path d="M34 172 q0 34 86 34 q86 0 86 -34 Z" fill="${C.sand}"/>
<g fill="${C.cream}" stroke="none">
<circle cx="80" cy="90" r="5"/><circle cx="120" cy="78" r="5"/><circle cx="158" cy="92" r="5"/>
</g>`,
  },
  {
    id: 'pancakes',
    name: 'Palačinky',
    tint: C.sand,
    art: `
<ellipse cx="120" cy="176" rx="80" ry="24" fill="${C.sand}"/>
<ellipse cx="120" cy="146" rx="80" ry="24" fill="${C.sand}"/>
<ellipse cx="120" cy="116" rx="80" ry="24" fill="${C.sand}"/>
<path d="M42 112 q30 -34 78 -34 q48 0 78 34 q-34 22 -78 22 q-44 0 -78 -22 Z" fill="${C.brown}"/>
<circle cx="120" cy="70" r="16" fill="${C.yellow}"/>`,
  },
  {
    id: 'cookie',
    name: 'Sušenka',
    tint: C.brown,
    art: `
<circle cx="120" cy="128" r="80" fill="${C.sand}"/>
<g fill="${C.brown}" stroke="none">
<circle cx="90" cy="96" r="11"/><circle cx="146" cy="88" r="10"/><circle cx="120" cy="132" r="12"/>
<circle cx="80" cy="150" r="10"/><circle cx="158" cy="146" r="11"/><circle cx="112" cy="180" r="10"/>
</g>`,
  },
  {
    id: 'chocolate',
    name: 'Čokoláda',
    tint: C.brown,
    art: `
<path d="M46 60 h148 v136 H46 Z" fill="${C.brown}"/>
<path d="M46 60 L74 34 h148 l-28 26 M194 60 l28 -26 v136 l-28 26" fill="${C.sand}"/>
<path d="M46 106 h148 M46 150 h148 M96 60 v136 M144 60 v136" fill="none" stroke-width="4"/>`,
  },
  {
    id: 'popcorn',
    name: 'Popcorn',
    tint: C.red,
    art: `
<g fill="${C.cream}">
<circle cx="86" cy="80" r="22"/><circle cx="124" cy="60" r="24"/><circle cx="160" cy="84" r="22"/>
<circle cx="104" cy="106" r="20"/><circle cx="144" cy="108" r="20"/>
</g>
<path d="M56 108 h128 l-16 100 H72 Z" fill="${C.red}"/>
<path d="M56 108 h128" fill="none" stroke-width="5"/>
<path d="M92 116 l-8 88 M124 116 v88 M156 116 l8 88" fill="none" stroke-width="6" stroke="${C.cream}"/>`,
  },
];
