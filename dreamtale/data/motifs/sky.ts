import { C, type MotifArt } from './palette';

export const sky: MotifArt[] = [
  {
    id: 'moon',
    name: 'Měsíc',
    tint: C.yellow,
    art: `
<path d="M156 34 q-96 12 -96 88 q0 78 96 84 q-56 -44 -56 -88 q0 -46 56 -84 Z" fill="${C.yellow}"/>
<circle cx="182" cy="60" r="8" fill="${C.cream}" stroke="none"/>
<circle cx="198" cy="122" r="6" fill="${C.cream}" stroke="none"/>`,
  },
  {
    id: 'sun',
    name: 'Slunce',
    tint: C.yellow,
    art: `
<circle cx="120" cy="120" r="52" fill="${C.yellow}"/>
<path d="M120 32 v-16 M120 208 v16 M32 120 h-16 M208 120 h16 M58 58 L46 46 M182 182 l12 12 M182 58 l12 -12 M58 182 l-12 12" stroke-width="8"/>`,
  },
  {
    id: 'star',
    name: 'Hvězda',
    tint: C.yellow,
    art: `
<path d="M120 30 L146 96 L216 100 L162 144 L180 212 L120 174 L60 212 L78 144 L24 100 L94 96 Z" fill="${C.yellow}"/>`,
  },
  {
    id: 'cloud',
    name: 'Mrak',
    tint: C.stone,
    art: `
<path d="M70 168 q-34 0 -34 -30 q0 -28 30 -30 q4 -42 46 -42 q36 0 44 34 q34 -4 40 26 q6 42 -34 42 Z" fill="${C.white}"/>`,
  },
  {
    id: 'lightning',
    name: 'Blesk',
    tint: C.yellow,
    art: `
<path d="M78 148 q-30 0 -30 -28 q0 -26 28 -28 q4 -38 42 -38 q34 0 40 32 q30 -4 36 24 q6 38 -32 38 Z" fill="${C.stone}"/>
<path d="M126 128 L88 190 h28 l-12 46 l50 -70 h-30 l16 -46 Z" fill="${C.yellow}"/>`,
  },
  {
    id: 'rainbow',
    name: 'Duha',
    tint: C.coral,
    art: `
<path d="M32 182 a88 88 0 0 1 176 0" fill="none" stroke-width="18" stroke="${C.coral}"/>
<path d="M52 182 a68 68 0 0 1 136 0" fill="none" stroke-width="18" stroke="${C.yellow}"/>
<path d="M72 182 a48 48 0 0 1 96 0" fill="none" stroke-width="18" stroke="${C.sage}"/>
<path d="M92 182 a28 28 0 0 1 56 0" fill="none" stroke-width="18" stroke="${C.blue}"/>
<path d="M32 182 a88 88 0 0 1 176 0" fill="none" stroke-width="5"/>
<path d="M32 182 h176" stroke-width="5"/>`,
  },
  {
    id: 'comet',
    name: 'Kometa',
    tint: C.lavender,
    art: `
<path d="M28 196 q60 -20 96 -66" stroke-width="10" stroke="${C.lavender}"/>
<path d="M44 214 q76 -22 116 -84" stroke-width="8" stroke="${C.blue}"/>
<circle cx="164" cy="76" r="34" fill="${C.yellow}"/>
<path d="M196 44 l16 -16 M186 96 l24 8 M156 34 l6 -22" stroke-width="5"/>`,
  },
  {
    id: 'planet',
    name: 'Planeta',
    tint: C.blue,
    art: `
<circle cx="120" cy="118" r="56" fill="${C.blue}"/>
<circle cx="102" cy="98" r="12" fill="${C.navy}" stroke="none"/>
<circle cx="140" cy="136" r="16" fill="${C.navy}" stroke="none"/>
<ellipse cx="120" cy="126" rx="98" ry="26" fill="none" stroke-width="9" stroke="${C.sand}" transform="rotate(-16 120 126)"/>
<ellipse cx="120" cy="126" rx="98" ry="26" fill="none" stroke-width="4" transform="rotate(-16 120 126)"/>`,
  },
  {
    id: 'snowflake',
    name: 'Vločka',
    tint: C.blue,
    art: `
<g stroke="${C.blue}" stroke-width="10">
<path d="M120 26 v188 M38 73 L202 167 M38 167 L202 73"/>
</g>
<g stroke-width="7">
<path d="M120 60 l-20 -20 M120 60 l20 -20 M120 180 l-20 20 M120 180 l20 20"/>
<path d="M70 90 l-28 2 M70 90 l-8 -26 M170 150 l28 -2 M170 150 l8 26"/>
<path d="M70 150 l-28 -2 M70 150 l-8 26 M170 90 l28 2 M170 90 l8 -26"/>
</g>`,
  },
  {
    id: 'wind',
    name: 'Vítr',
    tint: C.teal,
    art: `
<path d="M36 82 h108 q30 0 30 -22 q0 -20 -22 -20 q-18 0 -20 16" fill="none" stroke-width="9"/>
<path d="M36 128 h134 q30 0 30 22 q0 22 -24 22 q-20 0 -22 -18" fill="none" stroke-width="9"/>
<path d="M36 174 h74 q26 0 26 18" fill="none" stroke-width="9"/>`,
  },
];
