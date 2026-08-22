import { C, type MotifArt } from './palette';

export const places: MotifArt[] = [
  {
    id: 'house',
    name: 'Dům',
    tint: C.coral,
    art: `
<rect x="62" y="112" width="116" height="86" rx="8" fill="${C.cream}"/>
<path d="M44 116 L120 48 L196 116 Z" fill="${C.coral}"/>
<rect x="102" y="150" width="36" height="48" rx="6" fill="${C.brown}"/>
<rect x="72" y="128" width="26" height="26" rx="5" fill="${C.blue}"/>
<rect x="142" y="128" width="26" height="26" rx="5" fill="${C.blue}"/>`,
  },
  {
    id: 'castle',
    name: 'Hrad',
    tint: C.stone,
    art: `
<path d="M42 96 h24 v-20 h20 v20 h24 v102 H42 Z" fill="${C.stone}"/>
<path d="M130 96 h24 v-20 h20 v20 h24 v102 h-68 Z" fill="${C.stone}"/>
<rect x="96" y="120" width="48" height="78" fill="${C.sand}"/>
<path d="M96 142 q24 -30 48 0" fill="${C.navy}"/>
<rect x="106" y="150" width="28" height="48" rx="14" fill="${C.brown}"/>
<path d="M120 76 v-26 l26 12 Z" fill="${C.coral}"/>`,
  },
  {
    id: 'church',
    name: 'Kostel',
    tint: C.cream,
    art: `
<rect x="52" y="120" width="76" height="78" fill="${C.cream}"/>
<path d="M44 122 L90 84 L136 122 Z" fill="${C.coral}"/>
<rect x="140" y="86" width="52" height="112" fill="${C.cream}"/>
<path d="M132 88 L166 46 L200 88 Z" fill="${C.coral}"/>
<path d="M166 46 v-24 M154 32 h24" stroke-width="6"/>
<rect x="154" y="106" width="24" height="24" rx="4" fill="${C.blue}"/>
<path d="M78 156 q12 -18 24 0 v42 H78 Z" fill="${C.brown}"/>`,
  },
  {
    id: 'lighthouse',
    name: 'Maják',
    tint: C.red,
    art: `
<path d="M84 196 L96 78 h48 l12 118 Z" fill="${C.cream}"/>
<path d="M92 118 h56 M88 156 h64" stroke-width="16" stroke="${C.red}"/>
<path d="M84 196 L96 78 h48 l12 118 Z" fill="none"/>
<rect x="88" y="52" width="64" height="28" rx="6" fill="${C.yellow}"/>
<path d="M120 52 l-14 -22 h28 Z" fill="${C.red}"/>
<path d="M162 66 l40 -14 M162 66 l40 14 M78 66 l-40 -14 M78 66 l-40 14" stroke-width="5"/>
<path d="M56 200 h128" stroke-width="8"/>`,
  },
  {
    id: 'bridge',
    name: 'Most',
    tint: C.brown,
    art: `
<path d="M26 168 q94 -104 188 0" fill="none" stroke-width="12" stroke="${C.brown}"/>
<path d="M26 168 h188" stroke-width="10" stroke="${C.brown}"/>
<path d="M62 168 v-30 M98 168 v-46 M136 168 v-46 M172 168 v-30" stroke-width="6"/>
<path d="M26 168 v40 M214 168 v40" stroke-width="10" stroke="${C.brown}"/>`,
  },
  {
    id: 'tower',
    name: 'Věž',
    tint: C.navy,
    art: `
<path d="M92 200 V92 h56 v108 Z" fill="${C.cream}"/>
<path d="M78 92 L120 30 L162 92 Z" fill="${C.navy}"/>
<circle cx="120" cy="122" r="18" fill="${C.yellow}"/>
<path d="M120 110 v12 h10" stroke-width="4"/>
<rect x="106" y="164" width="28" height="36" rx="14" fill="${C.brown}"/>
<path d="M74 204 h92" stroke-width="8"/>`,
  },
  {
    id: 'tent',
    name: 'Stan',
    tint: C.teal,
    art: `
<path d="M34 186 L120 46 L206 186 Z" fill="${C.teal}"/>
<path d="M120 46 L86 186 M120 46 L154 186" stroke-width="5"/>
<path d="M120 96 L156 186 h-72 Z" fill="${C.cream}"/>
<path d="M120 46 v-20" stroke-width="5"/>`,
  },
  {
    id: 'windmill',
    name: 'Větrný mlýn',
    tint: C.sand,
    art: `
<path d="M86 200 L100 112 h40 l14 88 Z" fill="${C.sand}"/>
<path d="M88 112 L120 76 L152 112 Z" fill="${C.brown}"/>
<path d="M120 96 L62 38 M120 96 L178 38 M120 96 L178 154 M120 96 L62 154" stroke-width="16" stroke="${C.cream}"/>
<path d="M120 96 L62 38 M120 96 L178 38 M120 96 L178 154 M120 96 L62 154" stroke-width="4"/>
<circle cx="120" cy="96" r="11" fill="${C.coral}"/>
<path d="M74 204 h96" stroke-width="7"/>`,
  },
  {
    id: 'igloo',
    name: 'Iglú',
    tint: C.blue,
    art: `
<path d="M32 178 a88 74 0 0 1 176 0 Z" fill="${C.white}"/>
<path d="M96 178 v-30 a24 24 0 0 1 48 0 v30 Z" fill="${C.blue}"/>
<path d="M52 148 h44 M144 148 h44 M78 118 h84" stroke-width="4"/>
<path d="M32 178 h176" stroke-width="6"/>`,
  },
  {
    id: 'barn',
    name: 'Stodola',
    tint: C.red,
    art: `
<path d="M50 108 h140 v92 H50 Z" fill="${C.red}"/>
<path d="M38 110 L120 52 L202 110 Z" fill="${C.brown}"/>
<rect x="98" y="142" width="44" height="58" fill="${C.cream}"/>
<path d="M98 142 L142 200 M142 142 L98 200" stroke-width="5"/>
<circle cx="120" cy="88" r="12" fill="${C.cream}"/>`,
  },
  {
    id: 'city',
    name: 'Město',
    tint: C.navy,
    art: `
<rect x="40" y="110" width="46" height="92" fill="${C.navy}"/>
<rect x="94" y="62" width="52" height="140" fill="${C.blue}"/>
<rect x="154" y="128" width="46" height="74" fill="${C.navy}"/>
<g fill="${C.yellow}" stroke="none">
<rect x="52" y="126" width="12" height="14"/><rect x="52" y="154" width="12" height="14"/>
<rect x="108" y="82" width="12" height="14"/><rect x="126" y="82" width="12" height="14"/>
<rect x="108" y="118" width="12" height="14"/><rect x="126" y="118" width="12" height="14"/>
<rect x="166" y="146" width="12" height="14"/><rect x="166" y="174" width="12" height="14"/>
</g>`,
  },
  {
    id: 'well',
    name: 'Studna',
    tint: C.stone,
    art: `
<path d="M68 132 h104 v66 q-52 12 -104 0 Z" fill="${C.stone}"/>
<ellipse cx="120" cy="132" rx="52" ry="14" fill="${C.navy}"/>
<path d="M76 128 L120 56 L164 128" fill="none" stroke-width="8"/>
<path d="M62 62 h116" stroke-width="8" stroke="${C.brown}"/>
<path d="M120 62 v30" stroke-width="4"/>
<rect x="106" y="92" width="28" height="22" rx="4" fill="${C.brown}"/>
<path d="M78 158 h84 M78 178 h84" stroke-width="4"/>`,
  },
];
