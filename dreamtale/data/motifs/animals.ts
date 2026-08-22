import { C, type MotifArt } from './palette';

export const animals: MotifArt[] = [
  {
    id: 'cat',
    name: 'Kočka',
    tint: C.stone,
    art: `
<path d="M78 104 L84 50 L120 80 Z" fill="${C.stone}"/>
<path d="M162 104 L156 50 L120 80 Z" fill="${C.stone}"/>
<circle cx="120" cy="132" r="56" fill="${C.stone}"/>
<circle cx="100" cy="124" r="7" fill="${C.ink}" stroke="none"/>
<circle cx="140" cy="124" r="7" fill="${C.ink}" stroke="none"/>
<path d="M112 148 L128 148 L120 158 Z" fill="${C.pink}"/>
<path d="M64 140 H88 M64 160 H88 M176 140 H152 M176 160 H152" stroke-width="4"/>`,
  },
  {
    id: 'dog',
    name: 'Pes',
    tint: C.sand,
    art: `
<ellipse cx="66" cy="126" rx="21" ry="46" fill="${C.brown}" transform="rotate(-10 66 126)"/>
<ellipse cx="174" cy="126" rx="21" ry="46" fill="${C.brown}" transform="rotate(10 174 126)"/>
<circle cx="120" cy="112" r="54" fill="${C.sand}"/>
<circle cx="100" cy="102" r="7" fill="${C.ink}" stroke="none"/>
<circle cx="140" cy="102" r="7" fill="${C.ink}" stroke="none"/>
<ellipse cx="120" cy="148" rx="30" ry="23" fill="${C.cream}"/>
<ellipse cx="120" cy="138" rx="12" ry="9" fill="${C.ink}" stroke="none"/>
<path d="M120 147 v10 M120 157 q-11 8 -18 0 M120 157 q11 8 18 0" stroke-width="4"/>`,
  },
  {
    id: 'fox',
    name: 'Liška',
    tint: C.coral,
    art: `
<path d="M74 108 L72 52 L114 82 Z" fill="${C.coral}"/>
<path d="M166 108 L168 52 L126 82 Z" fill="${C.coral}"/>
<path d="M120 74 q56 12 52 62 q-4 46 -52 58 q-48 -12 -52 -58 q-4 -50 52 -62 Z" fill="${C.coral}"/>
<path d="M120 150 q-32 6 -34 30 q22 14 34 14 q12 0 34 -14 q-2 -24 -34 -30 Z" fill="${C.cream}"/>
<circle cx="98" cy="132" r="7" fill="${C.ink}" stroke="none"/>
<circle cx="142" cy="132" r="7" fill="${C.ink}" stroke="none"/>
<circle cx="120" cy="166" r="8" fill="${C.ink}" stroke="none"/>`,
  },
  {
    id: 'bear',
    name: 'Medvěd',
    tint: C.brown,
    art: `
<circle cx="76" cy="82" r="24" fill="${C.brown}"/>
<circle cx="164" cy="82" r="24" fill="${C.brown}"/>
<circle cx="120" cy="130" r="60" fill="${C.brown}"/>
<ellipse cx="120" cy="152" rx="30" ry="24" fill="${C.sand}"/>
<circle cx="100" cy="118" r="7" fill="${C.ink}" stroke="none"/>
<circle cx="140" cy="118" r="7" fill="${C.ink}" stroke="none"/>
<ellipse cx="120" cy="144" rx="10" ry="8" fill="${C.ink}" stroke="none"/>`,
  },
  {
    id: 'owl',
    name: 'Sova',
    tint: C.lavender,
    art: `
<path d="M120 44 q54 0 54 66 q0 70 -54 70 q-54 0 -54 -70 q0 -66 54 -66 Z" fill="${C.lavender}"/>
<circle cx="98" cy="106" r="22" fill="${C.cream}"/>
<circle cx="142" cy="106" r="22" fill="${C.cream}"/>
<circle cx="98" cy="106" r="8" fill="${C.ink}" stroke="none"/>
<circle cx="142" cy="106" r="8" fill="${C.ink}" stroke="none"/>
<path d="M110 126 L120 142 L130 126 Z" fill="${C.yellow}"/>
<path d="M96 158 q24 18 48 0" stroke-width="4"/>
<path d="M72 50 L94 66 M168 50 L146 66" stroke-width="5"/>`,
  },
  {
    id: 'elephant',
    name: 'Slon',
    tint: C.stone,
    art: `
<ellipse cx="60" cy="112" rx="34" ry="44" fill="${C.stone}"/>
<ellipse cx="180" cy="112" rx="34" ry="44" fill="${C.stone}"/>
<path d="M92 68 h56 q24 0 24 26 v40 q0 34 -32 34 h-40 q-32 0 -32 -34 V94 q0 -26 24 -26 Z" fill="${C.stone}"/>
<path d="M120 168 v22 q0 22 22 22 q18 0 18 -18" fill="none" stroke-width="26" stroke="${C.stone}"/>
<path d="M120 168 v22 q0 22 22 22 q18 0 18 -18" fill="none" stroke-width="5"/>
<circle cx="102" cy="108" r="7" fill="${C.ink}" stroke="none"/>
<circle cx="138" cy="108" r="7" fill="${C.ink}" stroke="none"/>
<path d="M96 158 q-8 24 -22 24 M144 158 q8 24 22 24" fill="none" stroke-width="7" stroke="${C.cream}"/>`,
  },
  {
    id: 'fish',
    name: 'Ryba',
    tint: C.teal,
    art: `
<path d="M56 120 q46 -56 100 0 q-54 56 -100 0 Z" fill="${C.teal}"/>
<path d="M156 120 l40 -32 v64 Z" fill="${C.blue}"/>
<circle cx="88" cy="112" r="7" fill="${C.ink}" stroke="none"/>
<path d="M116 92 q10 28 0 56" stroke-width="4"/>
<path d="M132 100 q10 20 0 40" stroke-width="4"/>`,
  },
  {
    id: 'butterfly',
    name: 'Motýl',
    tint: C.pink,
    art: `
<path d="M116 120 q-56 -56 -74 -24 q-16 30 22 46 q-30 22 6 44 q30 18 46 -30 Z" fill="${C.pink}"/>
<path d="M124 120 q56 -56 74 -24 q16 30 -22 46 q30 22 -6 44 q-30 18 -46 -30 Z" fill="${C.lavender}"/>
<rect x="112" y="76" width="16" height="92" rx="8" fill="${C.ink}"/>
<path d="M114 76 q-14 -20 -26 -26 M126 76 q14 -20 26 -26" stroke-width="4"/>`,
  },
  {
    id: 'rabbit',
    name: 'Králík',
    tint: C.cream,
    art: `
<path d="M96 92 q-14 -60 4 -60 q18 0 12 60 Z" fill="${C.cream}"/>
<path d="M144 92 q14 -60 -4 -60 q-18 0 -12 60 Z" fill="${C.cream}"/>
<circle cx="120" cy="138" r="50" fill="${C.cream}"/>
<circle cx="102" cy="130" r="7" fill="${C.ink}" stroke="none"/>
<circle cx="138" cy="130" r="7" fill="${C.ink}" stroke="none"/>
<path d="M112 152 h16 l-8 10 Z" fill="${C.pink}"/>
<path d="M120 162 v8 M120 170 q-10 8 -18 0 M120 170 q10 8 18 0" stroke-width="4"/>`,
  },
  {
    id: 'frog',
    name: 'Žába',
    tint: C.green,
    art: `
<circle cx="88" cy="86" r="22" fill="${C.green}"/>
<circle cx="152" cy="86" r="22" fill="${C.green}"/>
<circle cx="88" cy="88" r="8" fill="${C.ink}" stroke="none"/>
<circle cx="152" cy="88" r="8" fill="${C.ink}" stroke="none"/>
<path d="M52 128 q68 -32 136 0 q0 60 -68 60 q-68 0 -68 -60 Z" fill="${C.green}"/>
<path d="M92 154 q28 22 56 0" stroke-width="5"/>`,
  },
  {
    id: 'whale',
    name: 'Velryba',
    tint: C.blue,
    art: `
<path d="M36 128 q8 -56 80 -56 q68 0 82 56 q-16 48 -82 48 q-70 0 -80 -48 Z" fill="${C.blue}"/>
<path d="M196 128 q20 -32 32 -16 q-6 16 -6 16 q0 0 6 16 q-12 16 -32 -16 Z" fill="${C.navy}"/>
<path d="M48 152 q56 28 114 8" fill="none" stroke-width="8" stroke="${C.cream}"/>
<circle cx="80" cy="116" r="7" fill="${C.ink}" stroke="none"/>
<path d="M112 72 q-6 -32 -26 -42 M116 72 q6 -32 26 -42" fill="none" stroke-width="6"/>`,
  },
  {
    id: 'bee',
    name: 'Včela',
    tint: C.yellow,
    art: `
<ellipse cx="120" cy="136" rx="52" ry="42" fill="${C.yellow}"/>
<path d="M104 98 v76 M132 96 v80" stroke-width="12" stroke="${C.ink}"/>
<ellipse cx="120" cy="136" rx="52" ry="42" fill="none"/>
<ellipse cx="86" cy="86" rx="26" ry="18" fill="${C.white}" transform="rotate(-24 86 86)"/>
<ellipse cx="154" cy="86" rx="26" ry="18" fill="${C.white}" transform="rotate(24 154 86)"/>
<path d="M172 132 l24 6" stroke-width="5"/>`,
  },
  {
    id: 'snail',
    name: 'Šnek',
    tint: C.peach,
    art: `
<path d="M62 176 q-14 0 -14 -14 q0 -14 22 -14 h74" fill="${C.peach}" stroke-width="5"/>
<path d="M60 176 h100 q22 0 22 -18" fill="none" stroke-width="5"/>
<circle cx="128" cy="118" r="46" fill="${C.peach}"/>
<path d="M128 118 m0 -26 a26 26 0 1 1 -18 44 a16 16 0 1 1 18 -30" fill="none" stroke-width="5"/>
<path d="M64 148 q-6 -30 6 -40 q14 -10 22 2" fill="${C.sand}"/>
<path d="M70 108 v-22 M84 106 v-22" stroke-width="4"/>
<circle cx="70" cy="82" r="5" fill="${C.ink}" stroke="none"/>
<circle cx="84" cy="82" r="5" fill="${C.ink}" stroke="none"/>`,
  },
  {
    id: 'penguin',
    name: 'Tučňák',
    tint: C.navy,
    art: `
<path d="M120 40 q54 0 54 76 q0 68 -54 68 q-54 0 -54 -68 q0 -76 54 -76 Z" fill="${C.navy}"/>
<path d="M120 76 q30 0 30 46 q0 46 -30 46 q-30 0 -30 -46 q0 -46 30 -46 Z" fill="${C.cream}"/>
<circle cx="106" cy="82" r="6" fill="${C.ink}" stroke="none"/>
<circle cx="134" cy="82" r="6" fill="${C.ink}" stroke="none"/>
<path d="M110 98 L120 110 L130 98 Z" fill="${C.yellow}"/>
<path d="M92 190 q-20 8 -6 14 h34 M148 190 q20 8 6 14 h-34" fill="${C.yellow}"/>`,
  },

  {
    id: 'lion',
    name: 'Lev',
    tint: C.yellow,
    art: `
<path d="M120 70 Q140 46 146 76 Q174 65 166 94 Q197 97 176 119 Q201 136 172 146 Q187 173 157 168 Q158 199 133 180 Q120 208 107 180 Q82 199 83 168 Q53 173 68 146 Q39 136 64 119 Q43 97 74 94 Q66 65 94 76 Q100 46 120 70 Z" fill="${C.yellow}"/>
<circle cx="120" cy="126" r="50" fill="${C.sand}"/>
<circle cx="102" cy="116" r="7" fill="${C.ink}" stroke="none"/>
<circle cx="138" cy="116" r="7" fill="${C.ink}" stroke="none"/>
<path d="M106 140 h28 l-14 14 Z" fill="${C.ink}"/>
<path d="M120 154 q-14 14 -24 2 M120 154 q14 14 24 2" stroke-width="4"/>`,
  },
  {
    id: 'giraffe',
    name: 'Žirafa',
    tint: C.yellow,
    art: `
<rect x="94" y="98" width="42" height="116" rx="20" fill="${C.yellow}"/>
<path d="M96 112 q28 -34 64 -14 q24 14 10 34 q-18 22 -56 10 Z" fill="${C.yellow}"/>
<ellipse cx="164" cy="126" rx="18" ry="13" fill="${C.sand}"/>
<circle cx="140" cy="112" r="6" fill="${C.ink}" stroke="none"/>
<circle cx="168" cy="124" r="4" fill="${C.ink}" stroke="none"/>
<path d="M106 96 v-22 M130 92 v-22" stroke-width="6"/>
<circle cx="106" cy="68" r="9" fill="${C.sand}"/>
<circle cx="130" cy="64" r="9" fill="${C.sand}"/>
<g fill="${C.brown}" stroke="none">
<circle cx="106" cy="146" r="10"/><circle cx="126" cy="170" r="9"/><circle cx="104" cy="192" r="10"/>
</g>`,
  },
  {
    id: 'monkey',
    name: 'Opice',
    tint: C.brown,
    art: `
<circle cx="62" cy="116" r="26" fill="${C.brown}"/>
<circle cx="178" cy="116" r="26" fill="${C.brown}"/>
<circle cx="120" cy="122" r="58" fill="${C.brown}"/>
<ellipse cx="120" cy="138" rx="42" ry="36" fill="${C.sand}"/>
<circle cx="102" cy="110" r="7" fill="${C.ink}" stroke="none"/>
<circle cx="138" cy="110" r="7" fill="${C.ink}" stroke="none"/>
<ellipse cx="112" cy="134" rx="4" ry="6" fill="${C.ink}" stroke="none"/>
<ellipse cx="128" cy="134" rx="4" ry="6" fill="${C.ink}" stroke="none"/>
<path d="M100 154 q20 18 40 0" fill="none" stroke-width="5"/>`,
  },
  {
    id: 'panda',
    name: 'Panda',
    tint: C.stone,
    art: `
<circle cx="72" cy="76" r="24" fill="${C.ink}"/>
<circle cx="168" cy="76" r="24" fill="${C.ink}"/>
<circle cx="120" cy="128" r="60" fill="${C.white}"/>
<ellipse cx="96" cy="118" rx="17" ry="22" fill="${C.ink}" transform="rotate(-18 96 118)"/>
<ellipse cx="144" cy="118" rx="17" ry="22" fill="${C.ink}" transform="rotate(18 144 118)"/>
<circle cx="96" cy="118" r="6" fill="${C.cream}" stroke="none"/>
<circle cx="144" cy="118" r="6" fill="${C.cream}" stroke="none"/>
<ellipse cx="120" cy="150" rx="12" ry="9" fill="${C.ink}" stroke="none"/>
<path d="M120 159 v8 M120 167 q-11 8 -17 0 M120 167 q11 8 17 0" stroke-width="4"/>`,
  },
  {
    id: 'dolphin',
    name: 'Delfín',
    tint: C.blue,
    art: `
<path d="M50 160 q6 -68 78 -76 q54 -6 80 24 q-24 8 -46 4 q14 22 -14 36 q-48 22 -98 12 Z" fill="${C.blue}"/>
<path d="M108 88 q6 -34 32 -34 q-8 20 -8 36 Z" fill="${C.blue}"/>
<path d="M50 160 q-32 18 -40 -6 q22 -14 40 6 Z" fill="${C.navy}"/>
<path d="M64 152 q42 18 84 0" fill="none" stroke-width="7" stroke="${C.cream}"/>
<circle cx="152" cy="112" r="6" fill="${C.ink}" stroke="none"/>`,
  },
  {
    id: 'crab',
    name: 'Krab',
    tint: C.red,
    art: `
<path d="M66 166 l-28 28 M174 166 l28 28 M58 146 h-34 M182 146 h34 M64 126 l-32 -8 M176 126 l32 -8" stroke-width="7"/>
<ellipse cx="120" cy="142" rx="64" ry="44" fill="${C.red}"/>
<path d="M56 96 q-32 -14 -36 8 q-2 20 20 20 q16 0 22 -14 Z" fill="${C.red}"/>
<path d="M184 96 q32 -14 36 8 q2 20 -20 20 q-16 0 -22 -14 Z" fill="${C.red}"/>
<path d="M28 106 q14 4 20 -6 M212 106 q-14 4 -20 -6" fill="none" stroke-width="4"/>
<circle cx="100" cy="128" r="8" fill="${C.cream}"/>
<circle cx="140" cy="128" r="8" fill="${C.cream}"/>
<path d="M96 158 q24 14 48 0" fill="none" stroke-width="4"/>`,
  },
  {
    id: 'octopus',
    name: 'Chobotnice',
    tint: C.lavender,
    art: `
<path d="M64 128 q-16 42 6 64 M96 132 q-12 46 4 68 M144 132 q12 46 -4 68 M176 128 q16 42 -6 64" fill="none" stroke-width="16" stroke="${C.lavender}"/>
<path d="M64 128 q-16 42 6 64 M96 132 q-12 46 4 68 M144 132 q12 46 -4 68 M176 128 q16 42 -6 64" fill="none" stroke-width="5"/>
<path d="M120 40 q58 0 58 64 v26 q-58 14 -116 0 v-26 q0 -64 58 -64 Z" fill="${C.lavender}"/>
<circle cx="100" cy="102" r="14" fill="${C.cream}"/>
<circle cx="142" cy="102" r="14" fill="${C.cream}"/>
<circle cx="100" cy="102" r="6" fill="${C.ink}" stroke="none"/>
<circle cx="142" cy="102" r="6" fill="${C.ink}" stroke="none"/>`,
  },
  {
    id: 'jellyfish',
    name: 'Medúza',
    tint: C.pink,
    art: `
<path d="M44 124 q0 -84 76 -84 q76 0 76 84 q-20 18 -38 0 t-38 0 t-38 0 t-38 0 Z" fill="${C.pink}"/>
<path d="M74 140 q-8 32 8 46 q14 12 4 34 M108 142 q-8 34 4 52 M136 142 q8 34 -4 52 M168 140 q8 32 -8 46 q-14 12 -4 34" fill="none" stroke-width="5"/>
<circle cx="102" cy="96" r="6" fill="${C.ink}" stroke="none"/>
<circle cx="140" cy="96" r="6" fill="${C.ink}" stroke="none"/>`,
  },
  {
    id: 'snake',
    name: 'Had',
    tint: C.green,
    art: `
<path d="M50 194 q84 8 62 -42 q-20 -46 44 -56" fill="none" stroke-width="30" stroke="${C.green}"/>
<path d="M50 194 q84 8 62 -42 q-20 -46 44 -56" fill="none" stroke-width="5"/>
<ellipse cx="180" cy="88" rx="30" ry="24" fill="${C.green}"/>
<circle cx="186" cy="80" r="6" fill="${C.ink}" stroke="none"/>
<path d="M208 96 l20 8 m-20 -8 l18 -12" stroke-width="4" stroke="${C.coral}"/>`,
  },
  {
    id: 'turtle',
    name: 'Želva',
    tint: C.green,
    art: `
<rect x="54" y="158" width="30" height="30" rx="12" fill="${C.sage}"/>
<rect x="152" y="158" width="30" height="30" rx="12" fill="${C.sage}"/>
<circle cx="192" cy="122" r="24" fill="${C.sage}"/>
<circle cx="200" cy="114" r="5" fill="${C.ink}" stroke="none"/>
<ellipse cx="112" cy="132" rx="76" ry="52" fill="${C.green}"/>
<path d="M112 80 v104 M40 118 q72 -22 144 0 M40 148 q72 22 144 0" fill="none" stroke-width="4"/>`,
  },
  {
    id: 'ladybug',
    name: 'Beruška',
    tint: C.red,
    art: `
<path d="M104 78 q-16 -20 -30 -24 M136 78 q16 -20 30 -24" fill="none" stroke-width="5"/>
<ellipse cx="120" cy="140" rx="66" ry="58" fill="${C.red}"/>
<path d="M120 82 v116" stroke-width="5"/>
<path d="M120 84 q-34 0 -34 -22 q0 -20 34 -20 q34 0 34 20 q0 22 -34 22 Z" fill="${C.ink}"/>
<g fill="${C.ink}" stroke="none">
<circle cx="90" cy="126" r="11"/><circle cx="150" cy="126" r="11"/>
<circle cx="96" cy="166" r="9"/><circle cx="144" cy="166" r="9"/>
</g>`,
  },
  {
    id: 'mouse',
    name: 'Myš',
    tint: C.stone,
    art: `
<circle cx="66" cy="88" r="32" fill="${C.pink}"/>
<circle cx="174" cy="88" r="32" fill="${C.pink}"/>
<circle cx="66" cy="88" r="18" fill="${C.peach}"/>
<circle cx="174" cy="88" r="18" fill="${C.peach}"/>
<circle cx="120" cy="132" r="52" fill="${C.stone}"/>
<circle cx="104" cy="126" r="6" fill="${C.ink}" stroke="none"/>
<circle cx="136" cy="126" r="6" fill="${C.ink}" stroke="none"/>
<ellipse cx="120" cy="152" rx="9" ry="7" fill="${C.pink}"/>
<path d="M70 148 h26 M70 166 h26 M170 148 h-26 M170 166 h-26" stroke-width="4"/>`,
  },
  {
    id: 'cow',
    name: 'Kráva',
    tint: C.white,
    art: `
<path d="M62 118 q-32 -12 -34 12 q-2 24 30 20 Z" fill="${C.white}"/>
<path d="M178 118 q32 -12 34 12 q2 24 -30 20 Z" fill="${C.white}"/>
<path d="M88 78 q-14 -26 4 -30 q10 14 10 26 Z" fill="${C.sand}"/>
<path d="M152 78 q14 -26 -4 -30 q-10 14 -10 26 Z" fill="${C.sand}"/>
<circle cx="120" cy="124" r="58" fill="${C.white}"/>
<path d="M84 90 q24 -16 38 4 q-20 18 -38 -4 Z" fill="${C.ink}"/>
<path d="M152 150 q24 -6 26 14 q-20 10 -26 -14 Z" fill="${C.ink}"/>
<circle cx="102" cy="114" r="6" fill="${C.ink}" stroke="none"/>
<circle cx="140" cy="114" r="6" fill="${C.ink}" stroke="none"/>
<ellipse cx="120" cy="158" rx="34" ry="26" fill="${C.pink}"/>
<circle cx="108" cy="154" r="5" fill="${C.ink}" stroke="none"/>
<circle cx="132" cy="154" r="5" fill="${C.ink}" stroke="none"/>`,
  },
  {
    id: 'pig',
    name: 'Prase',
    tint: C.pink,
    art: `
<path d="M74 78 L68 40 L106 62 Z" fill="${C.pink}"/>
<path d="M166 78 L172 40 L134 62 Z" fill="${C.pink}"/>
<circle cx="120" cy="128" r="58" fill="${C.pink}"/>
<circle cx="100" cy="110" r="7" fill="${C.ink}" stroke="none"/>
<circle cx="140" cy="110" r="7" fill="${C.ink}" stroke="none"/>
<ellipse cx="120" cy="152" rx="32" ry="25" fill="${C.peach}"/>
<ellipse cx="108" cy="152" rx="6" ry="8" fill="${C.ink}" stroke="none"/>
<ellipse cx="132" cy="152" rx="6" ry="8" fill="${C.ink}" stroke="none"/>`,
  },
  {
    id: 'sheep',
    name: 'Ovce',
    tint: C.cream,
    art: `
<path d="M84 196 v16 M156 196 v16" stroke-width="10"/>
<path d="M120 56 q44 -6 50 26 q34 4 30 32 q26 18 2 38 q2 28 -30 24 q-18 22 -52 12 q-34 10 -52 -12 q-32 4 -30 -24 q-24 -20 2 -38 q-4 -28 30 -32 q6 -32 50 -26 Z" fill="${C.cream}"/>
<ellipse cx="46" cy="140" rx="18" ry="24" fill="${C.stone}"/>
<ellipse cx="194" cy="140" rx="18" ry="24" fill="${C.stone}"/>
<ellipse cx="120" cy="150" rx="34" ry="30" fill="${C.stone}"/>
<circle cx="108" cy="144" r="6" fill="${C.ink}" stroke="none"/>
<circle cx="132" cy="144" r="6" fill="${C.ink}" stroke="none"/>`,
  },
  {
    id: 'duck',
    name: 'Kachna',
    tint: C.yellow,
    art: `
<ellipse cx="108" cy="152" rx="70" ry="46" fill="${C.yellow}"/>
<circle cx="166" cy="92" r="36" fill="${C.yellow}"/>
<path d="M196 88 q30 -6 30 12 q0 16 -30 10 Z" fill="${C.coral}"/>
<circle cx="174" cy="82" r="6" fill="${C.ink}" stroke="none"/>
<path d="M80 142 q34 -14 58 8 q-26 26 -58 -8 Z" fill="${C.sand}"/>
<path d="M40 176 q-26 12 -30 -8" fill="none" stroke-width="6"/>`,
  },
  {
    id: 'parrot',
    name: 'Papoušek',
    tint: C.green,
    art: `
<path d="M118 68 q46 0 46 58 q0 58 -46 74 q-46 -16 -46 -74 q0 -58 46 -58 Z" fill="${C.green}"/>
<circle cx="118" cy="82" r="36" fill="${C.red}"/>
<path d="M148 78 q26 2 22 18 q-4 18 -24 10 Z" fill="${C.yellow}"/>
<circle cx="128" cy="72" r="6" fill="${C.ink}" stroke="none"/>
<path d="M100 116 q28 -6 34 24 q-26 26 -42 0 Z" fill="${C.yellow}"/>
<path d="M104 194 l14 42 l14 -42 Z" fill="${C.blue}"/>`,
  },
  {
    id: 'bat',
    name: 'Netopýr',
    tint: C.navy,
    art: `
<path d="M104 106 q-38 -34 -76 -26 q12 20 0 36 q28 -6 36 10 q18 -6 40 -20 Z" fill="${C.navy}"/>
<path d="M136 106 q38 -34 76 -26 q-12 20 0 36 q-28 -6 -36 10 q-18 -6 -40 -20 Z" fill="${C.navy}"/>
<ellipse cx="120" cy="126" rx="28" ry="36" fill="${C.navy}"/>
<path d="M100 96 L98 62 L118 84 Z M140 96 L142 62 L122 84 Z" fill="${C.navy}"/>
<circle cx="110" cy="118" r="6" fill="${C.cream}" stroke="none"/>
<circle cx="130" cy="118" r="6" fill="${C.cream}" stroke="none"/>`,
  },
  {
    id: 'squirrel',
    name: 'Veverka',
    tint: C.coral,
    art: `
<path d="M158 196 q66 -18 46 -86 q-18 -50 -64 -34 q38 22 28 62 q-10 36 -34 46 Z" fill="${C.coral}"/>
<path d="M92 198 q-26 -34 -6 -72 q18 -34 54 -24 q32 10 26 48 q-6 34 -26 48 Z" fill="${C.brown}"/>
<circle cx="98" cy="100" r="34" fill="${C.brown}"/>
<path d="M84 70 q-8 -28 14 -24 q8 12 4 26 Z" fill="${C.brown}"/>
<circle cx="92" cy="94" r="7" fill="${C.ink}" stroke="none"/>
<circle cx="66" cy="108" r="6" fill="${C.ink}" stroke="none"/>
<path d="M74 118 q12 10 22 2" fill="none" stroke-width="4"/>`,
  },
  {
    id: 'hedgehog',
    name: 'Ježek',
    tint: C.brown,
    art: `
<path d="M40 168 L54 116 L72 154 L88 106 L106 148 L122 100 L140 146 L156 110 L174 152 L188 132 L196 168 Z" fill="${C.brown}"/>
<path d="M36 160 q0 34 44 34 h84 q40 0 44 -34 Z" fill="${C.sand}"/>
<path d="M186 150 q36 4 36 24 q0 18 -36 20 q-30 0 -30 -22 q0 -22 30 -22 Z" fill="${C.sand}"/>
<circle cx="192" cy="162" r="5" fill="${C.ink}" stroke="none"/>
<circle cx="220" cy="174" r="7" fill="${C.ink}" stroke="none"/>
<path d="M74 194 v14 M134 194 v14" stroke-width="9"/>`,
  },
  {
    id: 'deer',
    name: 'Jelen',
    tint: C.brown,
    art: `
<path d="M98 94 L76 52 M76 52 L52 42 M76 52 L84 24 M142 94 L164 52 M164 52 L188 42 M164 52 L156 24" fill="none" stroke-width="6"/>
<path d="M78 106 q-28 4 -32 26 q24 12 36 -8 Z" fill="${C.brown}"/>
<path d="M162 106 q28 4 32 26 q-24 12 -36 -8 Z" fill="${C.brown}"/>
<path d="M120 86 q42 0 42 42 q0 46 -42 58 q-42 -12 -42 -58 q0 -42 42 -42 Z" fill="${C.brown}"/>
<circle cx="102" cy="124" r="7" fill="${C.ink}" stroke="none"/>
<circle cx="138" cy="124" r="7" fill="${C.ink}" stroke="none"/>
<ellipse cx="120" cy="162" rx="22" ry="17" fill="${C.sand}"/>
<ellipse cx="120" cy="158" rx="8" ry="6" fill="${C.ink}" stroke="none"/>`,
  },
  {
    id: 'shark',
    name: 'Žralok',
    tint: C.stone,
    art: `
<path d="M40 138 q28 -54 98 -54 q66 0 88 40 q-18 34 -88 38 q-72 4 -98 -24 Z" fill="${C.stone}"/>
<path d="M112 84 q4 -42 36 -44 q-10 26 -8 46 Z" fill="${C.stone}"/>
<path d="M42 136 L10 100 v76 Z" fill="${C.navy}"/>
<path d="M120 152 h84" stroke-width="4"/>
<path d="M132 152 l8 12 l8 -12 l8 12 l8 -12 l8 12 l8 -12" fill="none" stroke-width="4"/>
<circle cx="176" cy="120" r="6" fill="${C.ink}" stroke="none"/>
<path d="M96 170 q10 20 -6 30" fill="none" stroke-width="6"/>`,
  },
];
