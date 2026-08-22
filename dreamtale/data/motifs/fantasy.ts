import { C, type MotifArt } from './palette';

export const fantasy: MotifArt[] = [
  {
    id: 'crown',
    name: 'Koruna',
    tint: C.yellow,
    art: `
<path d="M40 172 L28 66 L84 108 L120 44 L156 108 L212 66 L200 172 Z" fill="${C.yellow}"/>
<path d="M40 172 h160" stroke-width="6"/>
<circle cx="86" cy="142" r="10" fill="${C.red}"/>
<circle cx="120" cy="142" r="10" fill="${C.teal}"/>
<circle cx="154" cy="142" r="10" fill="${C.red}"/>`,
  },
  {
    id: 'sword',
    name: 'Meč',
    tint: C.stone,
    art: `
<path d="M120 20 L146 68 v88 h-52 V68 Z" fill="${C.stone}"/>
<path d="M64 158 h112" stroke-width="14" stroke="${C.yellow}"/>
<path d="M64 158 h112" stroke-width="5"/>
<rect x="106" y="166" width="28" height="42" rx="8" fill="${C.brown}"/>
<circle cx="120" cy="214" r="12" fill="${C.yellow}"/>`,
  },
  {
    id: 'treasure',
    name: 'Poklad',
    tint: C.brown,
    art: `
<path d="M38 108 q82 -46 164 0 v82 H38 Z" fill="${C.brown}"/>
<path d="M38 132 h164" stroke-width="6"/>
<rect x="102" y="122" width="36" height="42" rx="6" fill="${C.yellow}"/>
<circle cx="120" cy="140" r="7" fill="${C.ink}" stroke="none"/>
<circle cx="66" cy="76" r="14" fill="${C.yellow}"/>
<circle cx="120" cy="60" r="16" fill="${C.yellow}"/>
<circle cx="174" cy="76" r="14" fill="${C.yellow}"/>`,
  },
  {
    id: 'ghost',
    name: 'Duch',
    tint: C.lavender,
    art: `
<path d="M120 32 q58 0 58 68 v104 q-18 -18 -30 0 q-14 18 -28 0 q-14 18 -28 0 q-12 -18 -30 0 V100 q0 -68 58 -68 Z" fill="${C.white}"/>
<circle cx="100" cy="98" r="9" fill="${C.ink}" stroke="none"/>
<circle cx="142" cy="98" r="9" fill="${C.ink}" stroke="none"/>
<ellipse cx="121" cy="130" rx="14" ry="18" fill="${C.ink}" stroke="none"/>`,
  },
  {
    id: 'dragon',
    name: 'Drak',
    tint: C.green,
    art: `
<path d="M52 168 q-36 18 -46 -6 q24 -18 46 -8 Z" fill="${C.green}"/>
<ellipse cx="106" cy="160" rx="60" ry="36" fill="${C.green}"/>
<path d="M84 190 v16 M132 190 v16" stroke-width="14" stroke="${C.green}"/>
<path d="M150 156 q30 -26 26 -62" fill="none" stroke-width="30" stroke="${C.green}"/>
<path d="M150 156 q30 -26 26 -62" fill="none" stroke-width="5"/>
<path d="M148 88 q10 -32 42 -30 q34 2 38 24 q4 22 -26 26 q-40 6 -54 -20 Z" fill="${C.green}"/>
<path d="M180 58 l-4 -26 l20 22 Z" fill="${C.sand}"/>
<circle cx="188" cy="76" r="6" fill="${C.ink}" stroke="none"/>
<path d="M196 104 q18 6 30 0" fill="none" stroke-width="4"/>
<path d="M212 100 q30 -6 26 16 q-4 20 -28 12 q-16 -8 2 -28 Z" fill="${C.coral}"/>
<path d="M100 142 q-26 -46 -18 -86 q36 18 54 46 q16 -6 24 10 q-18 30 -60 30 Z" fill="${C.sage}"/>
<path d="M82 56 q22 34 34 76 M116 92 q4 24 2 42" fill="none" stroke-width="4"/>`,
  },
  {
    id: 'wizard',
    name: 'Kouzelník',
    tint: C.lavender,
    art: `
<circle cx="120" cy="134" r="40" fill="${C.sand}"/>
<circle cx="104" cy="128" r="7" fill="${C.ink}" stroke="none"/>
<circle cx="138" cy="128" r="7" fill="${C.ink}" stroke="none"/>
<path d="M86 152 q34 72 68 0 q6 66 -34 66 q-40 0 -34 -66 Z" fill="${C.cream}"/>
<path d="M58 90 L120 14 L182 90 Z" fill="${C.lavender}"/>
<path d="M44 90 h152" stroke-width="13" stroke="${C.lavender}"/>
<path d="M44 90 h152" stroke-width="5"/>
<path d="M120 46 l7 16 l16 7 l-16 7 l-7 16 l-7 -16 l-16 -7 l16 -7 Z" fill="${C.yellow}"/>`,
  },
  {
    id: 'robot',
    name: 'Robot',
    tint: C.stone,
    art: `
<rect x="62" y="70" width="116" height="94" rx="18" fill="${C.stone}"/>
<circle cx="96" cy="112" r="14" fill="${C.blue}"/>
<circle cx="146" cy="112" r="14" fill="${C.blue}"/>
<path d="M94 142 h52" stroke-width="6"/>
<path d="M120 70 V44" stroke-width="6"/>
<circle cx="120" cy="36" r="10" fill="${C.coral}"/>
<path d="M62 108 H38 v40 M178 108 h24 v40" fill="none" stroke-width="8"/>
<rect x="82" y="170" width="30" height="34" rx="6" fill="${C.stone}"/>
<rect x="128" y="170" width="30" height="34" rx="6" fill="${C.stone}"/>`,
  },
  {
    id: 'potion',
    name: 'Lektvar',
    tint: C.teal,
    art: `
<path d="M100 40 h40 v46 q46 26 46 74 q0 46 -66 46 q-66 0 -66 -46 q0 -48 46 -74 Z" fill="${C.cream}"/>
<path d="M64 140 q56 22 112 0 q10 66 -56 66 q-66 0 -56 -66 Z" fill="${C.teal}"/>
<rect x="94" y="24" width="52" height="22" rx="8" fill="${C.brown}"/>
<circle cx="102" cy="168" r="7" fill="${C.cream}" stroke="none"/>
<circle cx="140" cy="182" r="5" fill="${C.cream}" stroke="none"/>`,
  },
  {
    id: 'wand',
    name: 'Kouzelná hůlka',
    tint: C.yellow,
    art: `
<path d="M52 200 L146 106" stroke-width="16" stroke="${C.brown}"/>
<path d="M52 200 L146 106" stroke-width="5"/>
<path d="M162 30 l16 42 l44 16 l-44 16 l-16 42 l-16 -42 l-44 -16 l44 -16 Z" fill="${C.yellow}"/>
<circle cx="72" cy="66" r="8" fill="${C.lavender}" stroke="none"/>
<circle cx="196" cy="164" r="7" fill="${C.lavender}" stroke="none"/>`,
  },
  {
    id: 'unicorn',
    name: 'Jednorožec',
    tint: C.pink,
    art: `
<path d="M96 78 L104 44 L124 70 Z" fill="${C.white}"/>
<path d="M148 78 L140 44 L120 70 Z" fill="${C.white}"/>
<path d="M120 18 L134 76 h-28 Z" fill="${C.yellow}"/>
<circle cx="120" cy="126" r="54" fill="${C.white}"/>
<path d="M86 86 q34 -22 68 0 q-16 -28 -34 -28 q-18 0 -34 28 Z" fill="${C.pink}"/>
<path d="M74 112 q-12 30 4 54 q12 -26 10 -48 Z" fill="${C.pink}"/>
<circle cx="102" cy="120" r="7" fill="${C.ink}" stroke="none"/>
<circle cx="140" cy="120" r="7" fill="${C.ink}" stroke="none"/>
<path d="M108 154 q12 10 24 0" fill="none" stroke-width="5"/>`,
  },
  {
    id: 'mask',
    name: 'Maska',
    tint: C.coral,
    art: `
<path d="M40 84 q80 -22 160 0 q6 82 -46 106 q-34 16 -34 -8 q0 24 -34 8 q-52 -24 -46 -106 Z" fill="${C.coral}"/>
<path d="M66 112 q22 -18 44 0 q-22 22 -44 0 Z" fill="${C.cream}"/>
<path d="M130 112 q22 -18 44 0 q-22 22 -44 0 Z" fill="${C.cream}"/>
<path d="M40 84 q80 -22 160 0" fill="none" stroke-width="6"/>`,
  },
  {
    id: 'lantern',
    name: 'Lucerna',
    tint: C.yellow,
    art: `
<path d="M120 40 q-34 0 -34 22 h68 q0 -22 -34 -22 Z" fill="${C.brown}"/>
<path d="M86 62 h68 v26 q22 34 0 68 h-68 q-22 -34 0 -68 Z" fill="${C.yellow}"/>
<path d="M78 156 h84 v20 H78 Z" fill="${C.brown}"/>
<path d="M120 40 q0 -22 -20 -22" fill="none" stroke-width="6"/>
<path d="M120 88 v46" stroke-width="5"/>`,
  },
];
