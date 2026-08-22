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

  {
    id: 'pyramid',
    name: 'Pyramida',
    tint: C.sand,
    art: `
<path d="M20 186 L120 40 L138 186 Z" fill="${C.sand}"/>
<path d="M138 186 L120 40 L220 186 Z" fill="${C.brown}"/>
<path d="M46 150 h150 M72 114 h108 M96 78 h58" fill="none" stroke-width="4"/>
<path d="M20 186 h200" stroke-width="6"/>
<circle cx="188" cy="62" r="16" fill="${C.yellow}"/>`,
  },
  {
    id: 'pier',
    name: 'Molo',
    tint: C.blue,
    art: `
<path d="M20 158 h200" stroke-width="10" stroke="${C.blue}"/>
<path d="M24 186 q26 -16 52 0 t52 0 t52 0 t28 0" fill="none" stroke-width="6" stroke="${C.blue}"/>
<path d="M30 120 h180 v22 H30 Z" fill="${C.brown}"/>
<path d="M54 142 v46 M120 142 v46 M186 142 v46" stroke-width="10" stroke="${C.brown}"/>
<path d="M54 142 v46 M120 142 v46 M186 142 v46" stroke-width="4"/>
<rect x="150" y="66" width="18" height="54" rx="6" fill="${C.brown}"/>
<path d="M168 74 q30 6 30 26" fill="none" stroke-width="5"/>
<circle cx="198" cy="106" r="9" fill="${C.coral}"/>`,
  },
  {
    id: 'treehouse',
    name: 'Domek na stromě',
    tint: C.green,
    art: `
<rect x="108" y="150" width="26" height="66" rx="8" fill="${C.brown}"/>
<circle cx="120" cy="58" r="46" fill="${C.green}"/>
<circle cx="70" cy="86" r="28" fill="${C.sage}"/>
<circle cx="170" cy="86" r="28" fill="${C.sage}"/>
<path d="M58 154 V116 h124 v38 Z" fill="${C.sand}"/>
<path d="M46 118 L120 84 L194 118 Z" fill="${C.brown}"/>
<rect x="104" y="126" width="32" height="28" rx="5" fill="${C.yellow}"/>
<path d="M78 154 v40 M162 154 v40" stroke-width="6"/>`,
  },
  {
    id: 'campfire',
    name: 'Táborák',
    tint: C.coral,
    art: `
<path d="M48 188 L192 158 M48 158 L192 188" stroke-width="14" stroke="${C.brown}"/>
<path d="M48 188 L192 158 M48 158 L192 188" stroke-width="5"/>
<path d="M120 34 q46 46 46 76 q0 42 -46 42 q-46 0 -46 -42 q0 -30 46 -76 Z" fill="${C.coral}"/>
<path d="M120 78 q24 28 24 46 q0 22 -24 22 q-24 0 -24 -22 q0 -18 24 -46 Z" fill="${C.yellow}"/>`,
  },
  {
    id: 'fountain',
    name: 'Fontána',
    tint: C.blue,
    art: `
<path d="M28 158 h184 q0 46 -92 46 q-92 0 -92 -46 Z" fill="${C.blue}"/>
<path d="M28 158 h184" stroke-width="6" stroke="${C.stone}"/>
<rect x="106" y="86" width="28" height="72" rx="8" fill="${C.stone}"/>
<ellipse cx="120" cy="86" rx="46" ry="16" fill="${C.stone}"/>
<path d="M120 76 q-6 -36 -34 -46 M120 76 q6 -36 34 -46" fill="none" stroke-width="6" stroke="${C.blue}"/>
<circle cx="86" cy="26" r="9" fill="${C.blue}"/>
<circle cx="154" cy="26" r="9" fill="${C.blue}"/>`,
  },
  {
    id: 'gate',
    name: 'Brána',
    tint: C.stone,
    art: `
<path d="M20 200 v-58 h34 v58 Z" fill="${C.stone}"/>
<path d="M186 200 v-58 h34 v58 Z" fill="${C.stone}"/>
<path d="M54 200 V96 q0 -56 66 -56 q66 0 66 56 v104 Z" fill="${C.stone}"/>
<path d="M82 200 V104 q0 -32 38 -32 q38 0 38 32 v96 Z" fill="${C.ink}"/>
<path d="M120 72 v128" stroke-width="5" stroke="${C.stone}"/>
<circle cx="106" cy="140" r="7" fill="${C.yellow}"/>
<circle cx="134" cy="140" r="7" fill="${C.yellow}"/>
<path d="M14 202 h212" stroke-width="8"/>`,
  },
  {
    id: 'greenhouse',
    name: 'Skleník',
    tint: C.sage,
    art: `
<path d="M46 196 V112 L120 52 L194 112 v84 Z" fill="${C.cream}"/>
<path d="M120 52 v144 M46 112 h148 M46 154 h148 M83 82 v114 M157 82 v114" fill="none" stroke-width="4"/>
<circle cx="70" cy="176" r="12" fill="${C.sage}"/>
<circle cx="120" cy="172" r="14" fill="${C.green}"/>
<circle cx="170" cy="176" r="12" fill="${C.sage}"/>`,
  },
  {
    id: 'bench',
    name: 'Lavička',
    tint: C.brown,
    art: `
<path d="M36 96 h168 M36 122 h168 M36 148 h168" stroke-width="14" stroke="${C.brown}"/>
<path d="M36 96 h168 M36 122 h168 M36 148 h168" stroke-width="4"/>
<path d="M56 148 v54 M184 148 v54" stroke-width="12" stroke="${C.brown}"/>
<path d="M56 148 v54 M184 148 v54" stroke-width="4"/>
<path d="M56 86 v-16 M184 86 v-16" stroke-width="10"/>`,
  },
  {
    id: 'fence',
    name: 'Plot',
    tint: C.sand,
    art: `
<path d="M46 84 l18 -22 l18 22 v122 H46 Z" fill="${C.sand}"/>
<path d="M102 84 l18 -22 l18 22 v122 h-36 Z" fill="${C.sand}"/>
<path d="M158 84 l18 -22 l18 22 v122 h-36 Z" fill="${C.sand}"/>
<path d="M32 116 h176 M32 162 h176" stroke-width="12" stroke="${C.sand}"/>
<path d="M32 116 h176 M32 162 h176" stroke-width="4"/>`,
  },
  {
    id: 'signpost',
    name: 'Rozcestník',
    tint: C.brown,
    art: `
<rect x="110" y="40" width="22" height="176" rx="8" fill="${C.brown}"/>
<path d="M110 60 H36 l-20 20 l20 20 h74 Z" fill="${C.coral}"/>
<path d="M132 116 h74 l20 20 l-20 20 h-74 Z" fill="${C.teal}"/>
<path d="M48 76 h44 M156 132 h44" stroke-width="5" stroke="${C.cream}"/>`,
  },
  {
    id: 'ruins',
    name: 'Zřícenina',
    tint: C.stone,
    art: `
<path d="M40 190 V78 h30 v112 Z" fill="${C.stone}"/>
<path d="M100 190 V70 h30 v120 Z" fill="${C.stone}"/>
<path d="M160 190 v-74 h30 v74 Z" fill="${C.stone}"/>
<path d="M30 78 h110 v-20 H30 Z" fill="${C.sand}"/>
<path d="M24 190 h192" stroke-width="8"/>
<path d="M52 96 v82 M112 88 v90 M172 130 v48" fill="none" stroke-width="4"/>
<path d="M186 182 q28 -20 28 -46" fill="none" stroke-width="6" stroke="${C.sage}"/>`,
  },
  {
    id: 'market',
    name: 'Stánek',
    tint: C.coral,
    art: `
<path d="M34 92 L60 44 h120 l26 48 Z" fill="${C.coral}"/>
<path d="M34 92 q18 22 36 0 t36 0 t36 0 t36 0 t28 0" fill="${C.cream}"/>
<path d="M34 92 q18 22 36 0 t36 0 t36 0 t36 0 t28 0" fill="none" stroke-width="4"/>
<path d="M50 200 v-84 M190 200 v-84" stroke-width="9"/>
<rect x="62" y="140" width="116" height="26" rx="6" fill="${C.sand}"/>
<circle cx="86" cy="128" r="12" fill="${C.red}"/>
<circle cx="120" cy="126" r="13" fill="${C.yellow}"/>
<circle cx="154" cy="128" r="12" fill="${C.green}"/>`,
  },
];
