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

  {
    id: 'ufo',
    name: 'Létající talíř',
    tint: C.teal,
    art: `
<path d="M78 106 q0 -40 42 -40 q42 0 42 40 Z" fill="${C.cream}"/>
<path d="M20 122 q0 -22 100 -22 q100 0 100 22 q0 26 -100 26 q-100 0 -100 -26 Z" fill="${C.teal}"/>
<circle cx="62" cy="128" r="8" fill="${C.yellow}"/>
<circle cx="120" cy="134" r="8" fill="${C.yellow}"/>
<circle cx="178" cy="128" r="8" fill="${C.yellow}"/>
<path d="M92 150 L64 214 h112 L148 150 Z" fill="${C.yellow}" opacity="0.55"/>
<path d="M92 150 L64 214 h112 L148 150" fill="none" stroke-width="4"/>`,
  },
  {
    id: 'alien',
    name: 'Mimozemšťan',
    tint: C.green,
    art: `
<path d="M78 42 q-14 -22 4 -30 q16 -6 20 22 M162 42 q14 -22 -4 -30 q-16 -6 -20 22" fill="none" stroke-width="5"/>
<circle cx="82" cy="26" r="9" fill="${C.yellow}"/>
<circle cx="158" cy="26" r="9" fill="${C.yellow}"/>
<path d="M120 44 q68 0 68 68 q0 78 -68 92 q-68 -14 -68 -92 q0 -68 68 -68 Z" fill="${C.green}"/>
<ellipse cx="94" cy="112" rx="18" ry="26" fill="${C.ink}" transform="rotate(-18 94 112)"/>
<ellipse cx="146" cy="112" rx="18" ry="26" fill="${C.ink}" transform="rotate(18 146 112)"/>
<path d="M104 160 q16 12 32 0" fill="none" stroke-width="5"/>`,
  },
  {
    id: 'skull',
    name: 'Lebka',
    tint: C.white,
    art: `
<path d="M120 34 q74 0 74 76 q0 40 -26 56 v20 q0 14 -18 14 h-60 q-18 0 -18 -14 v-20 q-26 -16 -26 -56 q0 -76 74 -76 Z" fill="${C.white}"/>
<ellipse cx="94" cy="112" rx="20" ry="24" fill="${C.ink}"/>
<ellipse cx="146" cy="112" rx="20" ry="24" fill="${C.ink}"/>
<path d="M110 148 l10 -18 l10 18 Z" fill="${C.ink}"/>
<path d="M100 174 v26 M120 174 v26 M140 174 v26" fill="none" stroke-width="5"/>`,
  },
  {
    id: 'fairy',
    name: 'Víla',
    tint: C.pink,
    art: `
<path d="M100 122 q-46 -36 -62 -8 q-12 26 24 34 q-22 20 6 30 q24 8 38 -28 Z" fill="${C.lavender}"/>
<path d="M140 122 q46 -36 62 -8 q12 26 -24 34 q22 20 -6 30 q-24 8 -38 -28 Z" fill="${C.lavender}"/>
<path d="M120 104 q32 0 32 48 q0 48 -32 66 q-32 -18 -32 -66 q0 -48 32 -48 Z" fill="${C.pink}"/>
<circle cx="120" cy="76" r="28" fill="${C.sand}"/>
<circle cx="111" cy="72" r="4" fill="${C.ink}" stroke="none"/>
<circle cx="129" cy="72" r="4" fill="${C.ink}" stroke="none"/>
<path d="M110 84 q10 8 20 0" fill="none" stroke-width="4"/>
<path d="M96 46 q24 -16 48 0" fill="none" stroke-width="6" stroke="${C.yellow}"/>
<path d="M150 140 l34 -30" stroke-width="6"/>
<path d="M190 92 l5 14 14 5 -14 5 -5 14 -5 -14 -14 -5 14 -5 Z" fill="${C.yellow}"/>`,
  },
  {
    id: 'cauldron',
    name: 'Kotlík',
    tint: C.navy,
    art: `
<path d="M34 124 h172 q0 82 -86 82 q-86 0 -86 -82 Z" fill="${C.navy}"/>
<ellipse cx="120" cy="124" rx="86" ry="22" fill="${C.sage}"/>
<path d="M34 124 q0 -22 86 -22 q86 0 86 22" fill="none" stroke-width="5"/>
<path d="M86 96 q-10 -24 6 -36 M120 92 q-12 -28 4 -44 M154 96 q10 -24 -6 -36" fill="none" stroke-width="5" stroke="${C.sage}"/>
<circle cx="88" cy="46" r="8" fill="${C.sage}"/>
<circle cx="152" cy="52" r="7" fill="${C.sage}"/>
<path d="M60 206 l-14 20 M180 206 l14 20" stroke-width="6"/>`,
  },
  {
    id: 'crystalball',
    name: 'Křišťálová koule',
    tint: C.lavender,
    art: `
<circle cx="120" cy="112" r="72" fill="${C.lavender}"/>
<path d="M84 76 q14 -20 36 -24" fill="none" stroke-width="8" stroke="${C.cream}"/>
<path d="M62 186 q0 -18 58 -18 q58 0 58 18 q0 18 -58 18 q-58 0 -58 -18 Z" fill="${C.brown}"/>
<path d="M78 168 q42 -14 84 0" fill="none" stroke-width="4"/>
<circle cx="150" cy="80" r="6" fill="${C.cream}" stroke="none"/>
<circle cx="98" cy="132" r="5" fill="${C.cream}" stroke="none"/>`,
  },
  {
    id: 'carpet',
    name: 'Létající koberec',
    tint: C.coral,
    art: `
<path d="M34 96 q56 -26 92 0 q36 26 88 0 v58 q-52 26 -88 0 q-36 -26 -92 0 Z" fill="${C.coral}"/>
<path d="M34 114 q56 -26 92 0 q36 26 88 0 M34 138 q56 -26 92 0 q36 26 88 0" fill="none" stroke-width="4" stroke="${C.cream}"/>
<path d="M34 96 l-20 -8 M34 116 h-22 M34 136 h-22 M34 154 l-20 8" stroke-width="4"/>
<path d="M214 96 l20 -8 M214 116 h22 M214 136 h22 M214 154 l20 8" stroke-width="4"/>
<path d="M66 186 q26 -14 40 6 M136 180 q26 -14 40 6" fill="none" stroke-width="5" stroke="${C.lavender}"/>`,
  },
  {
    id: 'genielamp',
    name: 'Kouzelná lampa',
    tint: C.yellow,
    art: `
<path d="M50 168 q-14 -66 60 -66 h40 q34 0 34 26 q0 40 -60 40 h-74 Z" fill="${C.yellow}"/>
<path d="M44 168 h132 q10 0 10 14 H34 q0 -14 10 -14 Z" fill="${C.yellow}"/>
<path d="M176 122 q40 -8 44 22 q-24 14 -44 -22 Z" fill="${C.yellow}"/>
<circle cx="112" cy="94" r="14" fill="${C.yellow}"/>
<path d="M50 140 h120" fill="none" stroke-width="4"/>
<path d="M188 92 q10 -22 -6 -34 q26 6 22 34 Z" fill="${C.teal}"/>`,
  },
  {
    id: 'shield',
    name: 'Štít',
    tint: C.blue,
    art: `
<path d="M120 26 l82 26 v66 q0 66 -82 96 q-82 -30 -82 -96 V52 Z" fill="${C.blue}"/>
<path d="M120 52 l56 18 v52 q0 46 -56 68 q-56 -22 -56 -68 V70 Z" fill="${C.cream}"/>
<path d="M120 78 l14 30 32 4 -24 22 6 32 -28 -16 -28 16 6 -32 -24 -22 32 -4 Z" fill="${C.coral}"/>`,
  },
  {
    id: 'bow',
    name: 'Luk',
    tint: C.brown,
    art: `
<path d="M78 24 q76 42 76 104 q0 62 -76 104" fill="none" stroke-width="14" stroke="${C.brown}"/>
<path d="M78 24 q76 42 76 104 q0 62 -76 104" fill="none" stroke-width="4"/>
<path d="M78 24 L78 232" fill="none" stroke-width="4"/>
<path d="M78 128 h132" stroke-width="7"/>
<path d="M210 128 l-22 -14 v28 Z" fill="${C.stone}"/>
<path d="M92 116 l-16 12 16 12" fill="none" stroke-width="5"/>`,
  },
  {
    id: 'scroll',
    name: 'Svitek',
    tint: C.sand,
    art: `
<path d="M62 62 h116 v132 H62 Z" fill="${C.cream}"/>
<path d="M62 62 q-24 0 -24 -20 q0 -20 24 -20 h116 q24 0 24 20 q0 20 -24 20" fill="${C.sand}"/>
<path d="M62 194 q-24 0 -24 20 q0 20 24 20 h116 q24 0 24 -20 q0 -20 -24 -20" fill="${C.sand}"/>
<path d="M84 100 h72 M84 128 h72 M84 156 h48" fill="none" stroke-width="5"/>`,
  },
  {
    id: 'dinosaur',
    name: 'Dinosaurus',
    tint: C.sage,
    art: `
<path d="M40 178 q-32 6 -34 -14 q22 -16 40 -6 Z" fill="${C.sage}"/>
<ellipse cx="106" cy="164" rx="66" ry="38" fill="${C.sage}"/>
<path d="M84 194 v18 M132 194 v18" stroke-width="14" stroke="${C.sage}"/>
<path d="M150 156 q30 -52 24 -96" fill="none" stroke-width="28" stroke="${C.sage}"/>
<path d="M150 156 q30 -52 24 -96" fill="none" stroke-width="5"/>
<path d="M148 60 q14 -30 46 -22 q28 8 18 32 q-12 26 -44 18 Z" fill="${C.sage}"/>
<circle cx="182" cy="52" r="6" fill="${C.ink}" stroke="none"/>
<path d="M96 126 l10 -20 l12 20 Z M124 122 l10 -22 l12 22 Z" fill="${C.green}"/>`,
  },
];
