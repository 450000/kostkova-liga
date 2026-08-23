import { W, H, linear, radial, hatch, blur, line, shade, lit, frame, vignetteDeep, birds } from './detail';
import type { Card } from './types';

/* ── 001 Socha svobody ─────────────────────────────────────────────────── */
function sochaSvobody(): string {
  const [skyDef, skyFill] = linear([[0, '#8FBEE8'], [0.55, '#BCD9F0'], [1, '#E6F0F6']]);
  const [seaDef, seaFill] = linear([[0, '#5E9AC6'], [0.5, '#3F76A8'], [1, '#2C5480']]);
  const [stoneDef, stoneFill] = linear([[0, '#CDC2A8'], [1, '#8E836C']], 0, 0, 1, 0);
  const [patinaDef, patinaFill] = linear([[0, '#B3DECC'], [0.42, '#7FBAA8'], [1, '#457F70']], 0, 0, 1, 0);
  const [glowDef, glowFill] = radial([[0, '#FFF3D0', 0.5], [1, '#FFF3D0', 0]]);
  const [hazeDef, hazeFill] = linear([[0, '#E8F1F8', 0], [1, '#E8F1F8', 0.85]]);
  const [hatchDef, hatchFill] = hatch('#2E4A46', 5, -50, 1.1, 0.22);
  const [farDef, farBlur] = blur(1.1);

  return `<defs>${skyDef}${seaDef}${stoneDef}${patinaDef}${glowDef}${hazeDef}${hatchDef}${farDef}</defs>
<rect width="${W}" height="${H}" fill="${skyFill}"/>
<circle cx="190" cy="58" r="76" fill="${glowFill}"/>
<g fill="#FFFFFF" opacity="0.85">
<path d="M26 66 q-12 0 -12 -9 q0 -8 10 -9 q3 -12 16 -12 q12 0 15 11 q11 -2 13 8 q2 11 -11 11 Z"/>
<path d="M188 122 q-9 0 -9 -7 q0 -6 8 -7 q2 -9 12 -9 q9 0 11 8 q9 -1 10 6 q2 9 -8 9 Z" opacity="0.65"/></g>
${birds([[44, 118, 1], [58, 110, 0.8], [70, 120, 0.7]], '#3B5878', 0.4)}

<g filter="${farBlur}" opacity="0.5" fill="#8FA8C6">
<rect x="0" y="214" width="14" height="42"/><rect x="16" y="202" width="10" height="54"/>
<rect x="28" y="222" width="16" height="34"/><rect x="198" y="208" width="12" height="48"/>
<rect x="212" y="218" width="14" height="38"/><rect x="228" y="200" width="12" height="56"/></g>
<g opacity="0.7" fill="#6E88AC">
<rect x="4" y="228" width="18" height="28"/><rect x="24" y="218" width="12" height="38"/>
<rect x="38" y="234" width="16" height="22"/><rect x="184" y="230" width="14" height="26"/>
<rect x="200" y="220" width="16" height="36"/><rect x="220" y="232" width="12" height="24"/></g>
<g fill="#FFE9A8" opacity="0.7">
<rect x="27" y="224" width="3" height="4"/><rect x="27" y="234" width="3" height="4"/>
<rect x="205" y="228" width="3" height="4"/><rect x="205" y="238" width="3" height="4"/></g>
<rect x="0" y="198" width="${W}" height="58" fill="${hazeFill}"/>

<rect x="0" y="254" width="${W}" height="${H - 254}" fill="${seaFill}"/>
<g stroke="#CBE4F2" stroke-width="2" opacity="0.45" stroke-linecap="round">
<path d="M10 280 h26 M56 290 h30 M156 276 h30 M190 296 h34 M18 312 h38 M170 320 h44
 M34 340 h34 M132 334 h40 M188 352 h30"/></g>
<g opacity="0.9">
<path d="M24 272 l9 -16 v16 Z" fill="#FFFFFF" stroke="#2C5480" stroke-width="1"/>
<path d="M18 272 h19 l-4 5 h-11 Z" fill="#E8E2D2" stroke="#2C5480" stroke-width="1"/>
<path d="M202 288 l7 -13 v13 Z" fill="#FFFFFF" stroke="#2C5480" stroke-width="1"/>
<path d="M197 288 h15 l-3 4 h-9 Z" fill="#E8E2D2" stroke="#2C5480" stroke-width="1"/></g>

<path d="M48 312 q72 -24 144 0 q-30 16 -72 16 q-42 0 -72 -16 Z" fill="#5E6B4E" ${line(2, '#2A3327')}/>
<path d="M48 312 q72 -24 144 0" fill="none" stroke="#7E8C66" stroke-width="2"/>

<g>
<path d="M62 308 h116 l-8 -14 H70 Z" fill="${stoneFill}" ${line(2.2, '#4A4436')}/>
<path d="M70 294 h100 v-10 H70 Z" fill="#B4A98F" ${line(2.2, '#4A4436')}/>
<path d="M78 284 h84 l-5 -46 H83 Z" fill="${stoneFill}" ${line(2.2, '#4A4436')}/>
<path d="M78 284 h84 l-5 -46 H83 Z" fill="${hatchFill}"/>
<path d="M83 238 h74 l-4 -12 H87 Z" fill="#CDC2A8" ${line(2.2, '#4A4436')}/>
<g stroke="#6B6350" stroke-width="1.5" opacity="0.65"><path d="M92 258 h56 M92 268 h44"/></g>
<path d="M78 284 l5 -46" fill="none" stroke="#FFF6E2" stroke-width="2.5" opacity="0.4"/>
<path d="M162 284 l-5 -46" fill="none" stroke="#3F3A2E" stroke-width="4" opacity="0.3"/></g>

<g>
<path d="M92 228 q4 -44 10 -66 q6 -22 14 -36 l22 2 q8 20 14 46 q6 30 8 54 Z"
 fill="${patinaFill}" ${line(2.6, '#2E5A50')}/>
<path d="M92 228 q4 -44 10 -66 q6 -22 14 -36 l8 -1 q-12 40 -14 103 Z" ${shade(0.2, '#123E36')}/>
<g fill="none" stroke="#3E6E62" stroke-width="1.8" opacity="0.7">
<path d="M112 140 q-6 42 -8 86 M124 136 q2 46 4 90 M138 148 q6 38 8 78 M102 164 q-4 34 -6 62"/></g>
<path d="M92 228 q40 -10 56 0 l2 -8 q-30 -10 -60 0 Z" ${shade(0.24, '#123E36')}/>

<path d="M108 150 q-18 10 -26 28 l13 8 q10 -18 21 -26 Z" fill="#6FAE9C" ${line(2.2, '#2E5A50')}/>
<g transform="rotate(-26 82 190)">
<rect x="62" y="172" width="38" height="30" rx="3" fill="#CDC2A8" ${line(2.2, '#4A4436')}/>
<g stroke="#6B6350" stroke-width="1.3" opacity="0.8"><path d="M68 182 h26 M68 190 h26"/></g></g>

<path d="M140 140 L168 78" stroke="#7FBAA8" stroke-width="15" stroke-linecap="round"/>
<path d="M140 140 L168 78" fill="none" ${line(2.2, '#2E5A50')}/>
<path d="M143 138 L165 84" stroke="#B3DECC" stroke-width="4" opacity="0.65" stroke-linecap="round"/>
<circle cx="170" cy="74" r="9" fill="#8CC4B2" ${line(2.2, '#2E5A50')}/>
<path d="M158 70 h26 l-4 -13 h-18 Z" fill="#CDC2A8" ${line(2.2, '#4A4436')}/>
<path d="M162 57 h18 v-6 h-18 Z" fill="#A99A7E" ${line(1.8, '#4A4436')}/>
<path d="M171 50 q-17 -24 -1 -42 q16 18 1 42 Z" fill="#F2B23C" ${line(2.2, '#7A4A18')}/>
<path d="M171 46 q-9 -15 -1 -28 q9 13 1 28 Z" fill="#FFE08A"/>

<path d="M112 138 h20 v-14 h-20 Z" fill="#6FAE9C" ${line(2.2, '#2E5A50')}/>
<circle cx="122" cy="110" r="17" fill="${patinaFill}" ${line(2.4, '#2E5A50')}/>
<path d="M113 100 q9 -6 18 0 q-3 -10 -9 -10 q-6 0 -9 10 Z" ${shade(0.2, '#123E36')}/>
<g fill="#7FBAA8" stroke="#2E5A50" stroke-width="2">
<path d="M122 93 l-4 -16 l8 0 Z"/><path d="M110 97 l-11 -12 l7 -4 Z"/><path d="M134 97 l11 -12 l-7 -4 Z"/>
<path d="M115 94 l-8 -15 l8 -2 Z"/><path d="M129 94 l8 -15 l-8 -2 Z"/>
<path d="M104 106 l-15 -5 l3 -7 Z"/><path d="M140 106 l15 -5 l-3 -7 Z"/></g>
<circle cx="117" cy="110" r="2" fill="#2E5A50"/><circle cx="127" cy="110" r="2" fill="#2E5A50"/>
<path d="M119 117 q3 3 6 0" fill="none" stroke="#2E5A50" stroke-width="1.6"/>
<path d="M122 112 v4" fill="none" stroke="#2E5A50" stroke-width="1.4"/></g>

${vignetteDeep(0.3)}${frame()}`;
}

/* ── 002 Sushi mistr ───────────────────────────────────────────────────── */
function sushiMistr(): string {
  const [bgDef, bgFill] = radial([[0, '#6A4A34'], [0.55, '#3A2A20'], [1, '#1C1510']], 0.66, 0.28, 0.9);
  const [woodDef, woodFill] = linear([[0, '#7A4E2C'], [1, '#40260F']]);
  const [coatDef, coatFill] = linear([[0, '#FFFFFF'], [0.55, '#F2EADD'], [1, '#C9BEAC']], 0, 0, 1, 0.4);
  const [skinDef, skinFill] = linear([[0, '#F4CBA2'], [0.55, '#E3AE7E'], [1, '#B87F52']], 0.1, 0, 0.9, 1);
  const [lampDef, lampFill] = radial([[0, '#FFD98A', 0.55], [1, '#FFD98A', 0]]);

  return `<defs>${bgDef}${woodDef}${coatDef}${skinDef}${lampDef}</defs>
<rect width="${W}" height="${H}" fill="${bgFill}"/>
<circle cx="198" cy="34" r="92" fill="${lampFill}"/>
<g opacity="0.5">
<rect x="10" y="88" width="72" height="7" rx="2" fill="#6B4A30"/>
<rect x="10" y="146" width="72" height="7" rx="2" fill="#6B4A30"/>
<path d="M20 60 h16 q3 0 3 4 v24 h-22 V64 q0 -4 3 -4 Z" fill="#8A6242"/>
<path d="M46 70 q10 -4 12 6 v12 h-14 V74 Z" fill="#A8794F"/>
<rect x="18" y="118" width="20" height="28" rx="4" fill="#8A6242"/>
<path d="M46 128 q9 -3 11 6 v12 h-13 Z" fill="#A8794F"/>
<rect x="170" y="120" width="58" height="7" rx="2" fill="#6B4A30"/>
<rect x="180" y="92" width="15" height="28" rx="4" fill="#8A6242"/>
<path d="M204 100 q10 -3 11 7 v13 h-13 Z" fill="#A8794F"/></g>
<g transform="rotate(-4 172 46)">
<rect x="140" y="30" width="66" height="24" rx="3" fill="#A8332A" opacity="0.7"/>
<g stroke="#FFE3B0" stroke-width="2" opacity="0.55" stroke-linecap="round">
<path d="M150 42 h9 M166 40 h11 M186 44 h8"/></g></g>

<g>
<path d="M28 364 q10 -78 92 -78 q82 0 92 78 Z" fill="${coatFill}" ${line(2.8, '#5C4A34')}/>
<path d="M28 364 q10 -78 92 -78 q26 0 44 8 q-72 12 -92 70 Z" ${lit(0.2)}/>
<path d="M120 286 q40 4 54 30 q-26 12 -54 12 q-28 0 -54 -12 q14 -26 54 -30 Z" fill="${coatFill}" ${line(2.6, '#5C4A34')}/>
<path d="M100 292 q20 26 40 0 l-7 -7 q-13 15 -26 0 Z" fill="#E8DCC6" ${line(2.2, '#5C4A34')}/>
<path d="M100 292 q20 26 40 0" fill="none" stroke="#B33A2E" stroke-width="4"/>
<g fill="none" stroke="#B0A38C" stroke-width="1.8" opacity="0.75">
<path d="M62 322 q10 24 6 42 M178 322 q-10 24 -6 42 M120 316 v48"/></g>

<path d="M62 306 q-34 16 -40 48 q-4 16 10 20 l14 -4 q-4 -20 24 -44 Z" fill="${coatFill}" ${line(2.6, '#5C4A34')}/>
<path d="M178 306 q34 16 40 48 q4 16 -10 20 l-14 -4 q4 -20 -24 -44 Z" fill="${coatFill}" ${line(2.6, '#5C4A34')}/>
<path d="M178 306 q34 16 40 48 q4 16 -10 20" fill="none" stroke="#FFF6E2" stroke-width="3" opacity="0.35"/>
<path d="M34 346 q-8 12 2 18 q12 6 22 -2 q8 -8 -2 -16 Z" fill="${skinFill}" ${line(2.4, '#7A4A2C')}/>
<path d="M206 346 q8 12 -2 18 q-12 6 -22 -2 q-8 -8 2 -16 Z" fill="${skinFill}" ${line(2.4, '#7A4A2C')}/>
<g fill="none" stroke="#B07A48" stroke-width="1.8" opacity="0.8">
<path d="M38 356 q10 -4 16 0 M42 362 q10 -4 16 0 M202 356 q-10 -4 -16 0 M198 362 q-10 -4 -16 0"/></g>

<circle cx="120" cy="212" r="54" fill="${skinFill}" ${line(2.8, '#7A4A2C')}/>
<path d="M120 158 q54 0 54 54 q0 18 -8 32 q-8 -46 -46 -46 q-38 0 -46 46 q-8 -14 -8 -32 q0 -54 54 -54 Z"
 fill="#241A14" opacity="0.14"/>
<path d="M72 182 q48 -34 96 0 q6 -44 -48 -44 q-54 0 -48 44 Z" fill="#231A14" ${line(2.4, '#150F0C')}/>
<g fill="#231A14"><path d="M74 186 q-8 -14 -4 -26 q8 10 10 20 Z"/><path d="M166 186 q8 -14 4 -26 q-8 10 -10 20 Z"/></g>
<path d="M64 184 h112 q8 0 8 11 v11 q0 8 -8 8 H64 q-8 0 -8 -8 v-11 q0 -11 8 -11 Z" fill="#FFFFFF" ${line(2.6, '#6B5A42')}/>
<path d="M64 206 h112" fill="none" stroke="#D8CDB6" stroke-width="2"/>
<circle cx="120" cy="200" r="10" fill="#C0392B" ${line(2, '#7A2016')}/>
<path d="M166 202 q14 26 -2 50" fill="none" stroke="#FFE3B0" stroke-width="4" opacity="0.4"/>
<g>
<path d="M92 220 q12 -10 24 0 q-12 8 -24 0 Z" fill="#FFFFFF" ${line(2, '#4A2E1C')}/>
<path d="M124 220 q12 -10 24 0 q-12 8 -24 0 Z" fill="#FFFFFF" ${line(2, '#4A2E1C')}/>
<circle cx="104" cy="220" r="4.4" fill="#2A1C16"/><circle cx="136" cy="220" r="4.4" fill="#2A1C16"/>
<circle cx="105.8" cy="218.2" r="1.5" fill="#FFFFFF"/><circle cx="137.8" cy="218.2" r="1.5" fill="#FFFFFF"/></g>
<g fill="none" stroke="#4A2E1C" stroke-width="2.4" opacity="0.85">
<path d="M88 210 q14 -7 26 -3 M126 207 q14 -4 26 3"/></g>
<path d="M120 228 q6 8 -3 11" fill="none" stroke="#8A5A38" stroke-width="2.2"/>
<path d="M106 246 q14 10 28 0" fill="none" ${line(2.4, '#7A4A2C')}/>
<ellipse cx="90" cy="236" rx="9" ry="5" fill="#E08A6A" opacity="0.32"/>
<ellipse cx="150" cy="236" rx="9" ry="5" fill="#E08A6A" opacity="0.32"/></g>

<rect x="0" y="322" width="${W}" height="${H - 322}" fill="${woodFill}"/>
<path d="M0 322 H${W}" stroke="#95632F" stroke-width="4"/>
<g stroke="#3A2212" stroke-width="1.4" opacity="0.45"><path d="M0 340 H${W} M0 354 H${W}"/></g>
<g>
<ellipse cx="66" cy="340" rx="46" ry="15" fill="#171210" ${line(2, '#0C0908')}/>
<ellipse cx="176" cy="348" rx="42" ry="14" fill="#171210" ${line(2, '#0C0908')}/>
<g>
<ellipse cx="50" cy="336" rx="14" ry="8.5" fill="#FBF3E4" ${line(1.8, '#6B5A42')}/>
<ellipse cx="50" cy="332" rx="12" ry="5.4" fill="#E8703C" ${line(1.4, '#9E4620')}/>
<ellipse cx="78" cy="340" rx="14" ry="8.5" fill="#FBF3E4" ${line(1.8, '#6B5A42')}/>
<ellipse cx="78" cy="336" rx="12" ry="5.4" fill="#D9482F" ${line(1.4, '#8E2A18')}/>
<ellipse cx="162" cy="346" rx="13" ry="8" fill="#FBF3E4" ${line(1.8, '#6B5A42')}/>
<ellipse cx="162" cy="342" rx="11" ry="5" fill="#E8703C" ${line(1.4, '#9E4620')}/>
<ellipse cx="190" cy="350" rx="13" ry="8" fill="#FBF3E4" ${line(1.8, '#6B5A42')}/>
<ellipse cx="190" cy="346" rx="11" ry="5" fill="#D9482F" ${line(1.4, '#8E2A18')}/></g>
<g stroke="#C79A5C" stroke-width="3.4" stroke-linecap="round"><path d="M104 358 L140 350 M104 364 L140 356"/></g></g>
${vignetteDeep(0.36)}${frame()}`;
}

/* ── 007 Drak ──────────────────────────────────────────────────────────── */
function drak(): string {
  const [skyDef, skyFill] = linear([[0, '#CFE2EC'], [0.6, '#E8EFDE'], [1, '#F0E7CA']]);
  const [bodyDef, bodyFill] = linear([[0, '#93C96A'], [0.45, '#5F9E45'], [1, '#37682A']], 0.1, 0, 0.9, 1);
  const [grassDef, grassFill] = linear([[0, '#82AC50'], [1, '#476E30']]);
  const [farDef, farBlur] = blur(0.9);

  return `<defs>${skyDef}${bodyDef}${grassDef}${farDef}</defs>
<rect width="${W}" height="${H}" fill="${skyFill}"/>
<g fill="#FFFFFF" opacity="0.7">
<path d="M28 58 q-11 0 -11 -8 q0 -7 9 -8 q3 -11 15 -11 q11 0 14 10 q10 -2 12 7 q2 10 -10 10 Z"/>
<path d="M190 92 q-8 0 -8 -6 q0 -5 7 -6 q2 -8 11 -8 q8 0 10 7 q8 -1 9 5 q1 8 -7 8 Z" opacity="0.7"/></g>
<g filter="${farBlur}" opacity="0.45">
<path d="M-10 236 L38 172 L86 236 Z" fill="#93A9BE"/>
<path d="M62 238 L112 164 L164 238 Z" fill="#8399B0"/>
<path d="M150 236 L196 176 L250 236 Z" fill="#93A9BE"/></g>
<path d="M0 252 q40 -14 80 -6 q44 10 80 -4 q40 -16 80 -2 V${H} H0 Z" fill="${grassFill}"/>
<path d="M0 252 q40 -14 80 -6 q44 10 80 -4 q40 -16 80 -2" fill="none" stroke="#3E6029" stroke-width="2.4"/>
<g stroke="#88BC5E" stroke-width="2" stroke-linecap="round" opacity="0.8">
<path d="M14 288 v-11 M22 292 v-13 M30 288 v-10 M198 302 v-11 M206 306 v-13 M214 302 v-10
 M52 330 v-11 M60 334 v-13 M172 340 v-11 M180 344 v-12"/></g>
<g fill="#8E8778" stroke="#5A5449" stroke-width="1.8">
<ellipse cx="36" cy="322" rx="19" ry="9"/><ellipse cx="204" cy="336" rx="15" ry="7"/></g>
<ellipse cx="112" cy="322" rx="72" ry="14" fill="#2E4A22" opacity="0.22"/>

<g>
<path d="M64 262 q-40 8 -50 -18 q-6 -16 10 -20 q12 -3 15 10 q4 14 25 12 Z" fill="#4F8A38" ${line(2.6, '#254A1E')}/>
<g fill="#7FB259" stroke="#254A1E" stroke-width="1.8">
<path d="M30 236 l-6 -14 l12 6 Z"/><path d="M46 244 l-4 -14 l12 8 Z"/></g>

<path d="M92 268 q-8 34 2 48 h22 q-10 -20 -6 -44 Z" fill="#4F8A38" ${line(2.6, '#254A1E')}/>
<path d="M146 270 q-8 34 2 48 h22 q-10 -20 -6 -44 Z" fill="#5F9E45" ${line(2.6, '#254A1E')}/>
<g fill="#EFE0B4" stroke="#254A1E" stroke-width="1.6">
<path d="M94 312 l-7 8 h10 Z"/><path d="M105 312 l-7 8 h10 Z"/><path d="M116 312 l-7 8 h10 Z"/>
<path d="M150 314 l-7 8 h10 Z"/><path d="M161 314 l-7 8 h10 Z"/><path d="M172 314 l-7 8 h10 Z"/></g>

<ellipse cx="112" cy="234" rx="58" ry="48" fill="${bodyFill}" ${line(2.8, '#254A1E')}/>
<path d="M112 186 q-58 0 -58 48 q0 20 10 32 q-16 -46 12 -68 q14 -11 36 -12 Z" ${lit(0.16)}/>
<g fill="#EFD79A" stroke="#254A1E" stroke-width="1.6">
<path d="M92 268 h50 v-14 H92 Z"/><path d="M86 252 h56 v-14 H86 Z"/>
<path d="M86 236 h54 v-14 H86 Z"/><path d="M92 220 h46 v-14 H92 Z"/></g>

<path d="M96 196 q-6 -46 34 -52 q-18 30 -6 56 Z" fill="#4F8A38" ${line(2.4, '#254A1E')}/>
<path d="M104 190 q22 -34 52 -20 q26 12 20 40 q-6 26 -34 24 q-30 -2 -38 -44 Z" fill="#7FB259" ${line(2.6, '#254A1E')}/>
<g fill="none" stroke="#3E6E2E" stroke-width="2"><path d="M120 178 q22 -12 40 2 M116 200 q26 6 46 -8"/></g>

<g fill="#4F8A38" stroke="#254A1E" stroke-width="2">
<path d="M76 202 l-10 -18 l20 8 Z"/><path d="M96 184 l-8 -20 l20 12 Z"/>
<path d="M118 172 l-4 -22 l18 14 Z"/><path d="M142 166 l0 -22 l18 16 Z"/></g>

<path d="M150 152 q30 -22 56 4 q22 22 6 46 q-18 26 -50 14 q-28 -12 -24 -36 q4 -22 12 -28 Z"
 fill="${bodyFill}" ${line(2.8, '#254A1E')}/>
<path d="M196 176 q28 4 30 22 q2 20 -24 24 q-20 2 -26 -12 q-6 -16 20 -34 Z" fill="#93C96A" ${line(2.6, '#254A1E')}/>
<path d="M222 194 q12 2 12 10 M220 210 q12 0 12 8" fill="none" ${line(2, '#254A1E')}/>
<g fill="#FFFFFF" stroke="#254A1E" stroke-width="1.4">
<path d="M212 214 l4 9 l7 -9 Z"/><path d="M226 216 l4 9 l7 -9 Z"/></g>
<path d="M168 146 l-6 -24 l18 14 Z" fill="#EFD79A" ${line(2, '#254A1E')}/>
<path d="M188 142 l2 -24 l16 18 Z" fill="#EFD79A" ${line(2, '#254A1E')}/>
<circle cx="192" cy="180" r="11" fill="#FFFFFF" ${line(2.2, '#254A1E')}/>
<circle cx="194" cy="181" r="5.6" fill="#1F2A16"/>
<circle cx="196" cy="179" r="1.9" fill="#FFFFFF"/>
<circle cx="224" cy="192" r="2.4" fill="#254A1E"/>
<path d="M182 204 q20 10 38 2" fill="none" ${line(2.4, '#254A1E')}/>
<path d="M188 206 l3 8 l5 -8 Z M206 208 l3 8 l5 -8 Z" fill="#FFFFFF" stroke="#254A1E" stroke-width="1.2"/></g>
${vignetteDeep(0.3)}${frame()}`;
}

/* ── 122 Ustaraný ──────────────────────────────────────────────────────── */
function ustaranyDetail(): string {
  const [bgDef, bgFill] = radial([[0, '#EDE2C8'], [0.68, '#D8C9A8'], [1, '#B5A382']], 0.5, 0.38, 0.82);
  const [skinDef, skinFill] = linear([[0, '#F8D6B0'], [0.55, '#EBBB8C'], [1, '#C48C5C']], 0.15, 0, 0.85, 1);
  const [handDef, handFill] = linear([[0, '#F8D6B0'], [0.6, '#E7B384'], [1, '#C98F5E']], 0, 0, 0.6, 1);
  const [hairDef, hairFill] = linear([[0, '#4E362A'], [0.45, '#2C1F19'], [1, '#171010']], 0.2, 0, 0.8, 1);
  const [shirtDef, shirtFill] = linear([[0, '#EDBB3E'], [0.55, '#D49C22'], [1, '#9F7015']], 0.1, 0, 0.7, 1);

  return `<defs>${bgDef}${skinDef}${handDef}${hairDef}${shirtDef}</defs>
<rect width="${W}" height="${H}" fill="${bgFill}"/>
<g fill="#C6B694" opacity="0.45">
<circle cx="34" cy="66" r="16"/><circle cx="200" cy="48" r="10"/><circle cx="214" cy="146" r="13"/>
<circle cx="24" cy="200" r="9"/><circle cx="208" cy="252" r="11"/><circle cx="46" cy="300" r="8"/></g>
<g fill="#F2EAD4" opacity="0.45"><circle cx="62" cy="124" r="6"/><circle cx="178" cy="92" r="4"/><circle cx="38" cy="252" r="4"/></g>

<path d="M30 364 q4 -76 90 -76 q86 0 90 76 Z" fill="${shirtFill}" ${line(3, '#6B4A0E')}/>
<path d="M30 364 q4 -76 90 -76 q22 0 38 6 q-64 12 -80 70 Z" ${lit(0.16)}/>
<path d="M86 292 q34 26 68 0 l-9 -8 q-25 20 -50 0 Z" fill="#C08F12" ${line(2.4, '#6B4A0E')}/>
<g fill="none" stroke="#8A6110" stroke-width="2.2" opacity="0.55">
<path d="M56 334 q16 18 12 30 M184 334 q-16 18 -12 30 M120 322 q-5 24 0 42"/></g>

<path d="M120 74 q68 0 68 82 q0 66 -68 66 q-68 0 -68 -66 q0 -82 68 -82 Z" fill="${skinFill}" ${line(3, '#8A5A34')}/>
<path d="M120 74 q68 0 68 82 q0 34 -18 52 q12 -38 6 -72 q-10 -48 -56 -48 Z" ${shade(0.15)}/>

<path d="M120 46 q80 0 80 88 q0 22 -8 36 q-4 -32 -18 -44 q-18 22 -36 10 q-14 -10 -24 -2
 q-14 10 -28 -2 q-16 -12 -26 6 q-12 14 -14 32 q-6 -14 -6 -36 q0 -88 74 -88 Z" fill="${hairFill}" ${line(2.6, '#110C0A')}/>
<g fill="${hairFill}" stroke="#110C0A" stroke-width="2">
<path d="M48 138 q-16 -14 -8 -34 q6 16 14 28 Z"/><path d="M192 142 q18 -12 12 -34 q-8 16 -18 28 Z"/>
<path d="M72 56 q-8 -18 6 -28 q-2 14 2 24 Z"/><path d="M166 58 q10 -16 -2 -28 q0 14 -4 24 Z"/>
<path d="M112 34 q14 -12 26 -2 q-14 2 -20 10 Z"/></g>
<g fill="none" stroke="#5F4436" stroke-width="2.2" opacity="0.5">
<path d="M74 96 q24 -22 50 -20 M92 74 q30 -8 50 10 M60 128 q10 -28 34 -38 M150 82 q22 12 28 34"/></g>

<g>
<ellipse cx="94" cy="152" rx="20" ry="23" fill="#FFFFFF" ${line(2.6, '#6E4526')}/>
<ellipse cx="148" cy="152" rx="20" ry="23" fill="#FFFFFF" ${line(2.6, '#6E4526')}/>
<circle cx="97" cy="155" r="11" fill="#4A3428"/><circle cx="145" cy="155" r="11" fill="#4A3428"/>
<circle cx="97" cy="155" r="5" fill="#120D0B"/><circle cx="145" cy="155" r="5" fill="#120D0B"/>
<circle cx="101" cy="150" r="3.6" fill="#FFFFFF"/><circle cx="149" cy="150" r="3.6" fill="#FFFFFF"/>
<circle cx="92" cy="161" r="1.8" fill="#FFFFFF" opacity="0.65"/><circle cx="140" cy="161" r="1.8" fill="#FFFFFF" opacity="0.65"/></g>
<g fill="none" stroke="#2E211B" stroke-width="4.4" stroke-linecap="round">
<path d="M70 124 q22 -14 42 -2"/><path d="M172 124 q-22 -14 -42 -2"/></g>
<path d="M120 168 q7 12 -4 16" fill="none" ${line(2.4, '#A06A3A')}/>
<ellipse cx="70" cy="180" rx="12" ry="7" fill="#E08A6A" opacity="0.38"/>
<ellipse cx="172" cy="180" rx="12" ry="7" fill="#E08A6A" opacity="0.38"/>

<g transform="translate(0 34)">
<path d="M18 364 q-2 -66 34 -86 q18 -10 32 4 l10 14 q-30 16 -34 68 Z" fill="${skinFill}" ${line(2.8, '#8A5A34')}/>
<path d="M222 364 q2 -66 -34 -86 q-18 -10 -32 4 l-10 14 q30 16 34 68 Z" fill="${skinFill}" ${line(2.8, '#8A5A34')}/>
<path d="M60 244 q-8 -34 8 -46 q14 -10 28 -2 l24 14 q12 8 6 22 l-10 26 q-6 14 -22 12 l-22 -4 q-10 -2 -12 -22 Z"
 fill="${handFill}" ${line(2.6, '#8A5A34')}/>
<path d="M180 244 q8 -34 -8 -46 q-14 -10 -28 -2 l-24 14 q-12 8 -6 22 l10 26 q6 14 22 12 l22 -4 q10 -2 12 -22 Z"
 fill="${handFill}" ${line(2.6, '#8A5A34')}/>
<g fill="${handFill}" stroke="#8A5A34" stroke-width="2.4">
<rect x="70" y="150" width="15" height="58" rx="7.5" transform="rotate(-8 77 179)"/>
<rect x="87" y="144" width="15" height="62" rx="7.5" transform="rotate(-3 94 175)"/>
<rect x="104" y="146" width="15" height="60" rx="7.5" transform="rotate(2 111 176)"/>
<rect x="121" y="152" width="15" height="56" rx="7.5" transform="rotate(6 128 180)"/>
<rect x="138" y="146" width="15" height="60" rx="7.5" transform="rotate(-2 145 176)"/>
<rect x="155" y="150" width="15" height="58" rx="7.5" transform="rotate(-6 162 179)"/></g>
<g fill="none" stroke="#B57C4A" stroke-width="2" opacity="0.85" stroke-linecap="round">
<path d="M74 176 h11 M91 172 h11 M108 174 h11 M125 178 h11 M142 174 h11 M159 176 h11"/></g>
<path d="M60 244 q-8 -34 8 -46 q10 -8 20 -4 q-22 12 -18 50 Z" ${lit(0.2)}/>
<path d="M180 244 q8 -34 -8 -46 q-10 -8 -20 -4 q22 12 18 50 Z" ${shade(0.1)}/>
<g fill="#3A6EA8" stroke="#1F3E62" stroke-width="1.8">
<rect x="34" y="306" width="30" height="11" rx="5"/><rect x="176" y="306" width="30" height="11" rx="5"/></g></g>
${vignetteDeep(0.3)}${frame()}`;
}

/* ── 194 Velká vlna ────────────────────────────────────────────────────── */
function velkaVlna(): string {
  const [skyDef, skyFill] = linear([[0, '#0D2242'], [0.5, '#1C4270'], [1, '#39779F']]);
  const [faceDef, faceFill] = linear([[0, '#5FB0D8'], [0.35, '#2C79B0'], [1, '#0E3358']], 0.2, 0, 0.9, 1);
  const [barrelDef, barrelFill] = radial([[0, '#CFF0FA'], [0.4, '#63ADD6'], [1, '#154A79']], 0.44, 0.5, 0.66);
  const [deepDef, deepFill] = linear([[0, '#215688'], [1, '#0A2440']]);
  const [foamDef, foamFill] = linear([[0, '#FFFFFF'], [1, '#C8E7F6']]);

  return `<defs>${skyDef}${faceDef}${barrelDef}${deepDef}${foamDef}</defs>
<rect width="${W}" height="${H}" fill="${skyFill}"/>
<g fill="#A8D6EC" opacity="0.3">
<circle cx="30" cy="30" r="2.6"/><circle cx="64" cy="18" r="2"/><circle cx="196" cy="22" r="2.4"/>
<circle cx="18" cy="72" r="2"/><circle cx="146" cy="16" r="1.8"/></g>

<path d="M-10 364 V292 C24 250 52 206 96 166 C140 126 190 96 222 118 C250 138 250 186 224 212
 C198 238 158 234 144 210 C132 190 144 168 166 164 C142 164 124 188 134 216 C146 248 196 258 226 228
 C246 208 252 176 250 150 V364 Z" fill="${faceFill}"/>
<path d="M96 166 C140 126 190 96 222 118 C250 138 250 186 224 212 C198 238 158 234 144 210
 C132 190 144 168 166 164 C146 172 140 194 156 208 C176 226 208 218 220 190 C234 156 210 128 178 126
 C146 124 118 142 96 166 Z" fill="${barrelFill}" opacity="0.95"/>

<path d="M-10 292 C24 250 52 206 96 166 C140 126 190 96 222 118 C196 84 148 96 106 134
 C62 174 20 236 -10 282 Z" fill="${foamFill}"/>
<path d="M-10 316 C22 268 54 218 100 176 C56 226 18 280 -10 330 Z" fill="#E8F6FC" opacity="0.75"/>
<g fill="#FFFFFF">
<path d="M236 132 C258 168 250 208 220 230 C192 250 158 242 144 218 C166 240 202 240 222 216
 C244 190 246 158 236 132 Z"/>
<path d="M104 142 C142 112 186 100 216 116 C184 108 144 118 110 148 Z" opacity="0.85"/></g>
<g fill="none" stroke="#F4FBFE" stroke-width="3.6" opacity="0.75" stroke-linecap="round">
<path d="M6 292 C40 240 76 194 122 156 M-6 330 C32 268 74 216 122 178 M46 268 C74 226 106 192 140 168"/></g>
<g fill="none" stroke="#CFEAF6" stroke-width="2.2" opacity="0.55" stroke-linecap="round">
<path d="M168 148 q30 -4 40 20 M162 186 q30 10 46 -10 M180 132 q26 0 34 16"/></g>

<path d="M0 300 q34 -22 68 -4 q36 20 70 -2 q36 -24 72 -2 q18 10 30 4 V${H} H0 Z" fill="${deepFill}"/>
<g fill="none" stroke="#8FCCE6" stroke-width="2.6" opacity="0.45" stroke-linecap="round">
<path d="M12 322 q32 -14 62 0 M94 336 q32 -14 62 0 M150 352 q32 -14 62 0 M28 352 q28 -12 54 0"/></g>
<g fill="#FFFFFF" opacity="0.9">
<circle cx="212" cy="92" r="4.4"/><circle cx="230" cy="72" r="3"/><circle cx="196" cy="66" r="2.8"/>
<circle cx="234" cy="110" r="2.4"/><circle cx="176" cy="52" r="2.2"/><circle cx="152" cy="72" r="2.6"/>
<circle cx="124" cy="94" r="2.2"/><circle cx="92" cy="120" r="2"/><circle cx="66" cy="150" r="1.8"/></g>
${vignetteDeep(0.3)}${frame()}`;
}

export const SHOWCASE_CARDS: Card[] = [
  { id: 'x-socha-svobody', name: 'Socha svobody', category: 'places', tint: '#5E9AC6', art: sochaSvobody() },
  { id: 'x-sushi-mistr', name: 'Sushi mistr', category: 'people', tint: '#3A2A20', art: sushiMistr() },
  { id: 'x-drak', name: 'Drak', category: 'fantasy', tint: '#5F9E45', art: drak() },
  { id: 'x-ustarany', name: 'Ustaraný', category: 'feelings', tint: '#D6C7A6', art: ustaranyDetail() },
  { id: 'x-velka-vlna', name: 'Velká vlna', category: 'nature', tint: '#1E4472', art: velkaVlna() },
];
