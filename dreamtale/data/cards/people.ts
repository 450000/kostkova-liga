import { P } from './palette';
import { ink } from './scene';

export type Mood =
  | 'happy' | 'sad' | 'worried' | 'surprised' | 'angry'
  | 'calm' | 'proud' | 'sleepy' | 'excited' | 'shy';

export type Pose =
  | 'stand' | 'armsUp' | 'armsOut' | 'run' | 'jump' | 'sit'
  | 'hold' | 'thinking' | 'cover' | 'wave' | 'point';

export type HairStyle = 'short' | 'curly' | 'long' | 'bun' | 'hat';

export type PersonOptions = {
  x: number;
  /** Y souřadnice chodidel. */
  y: number;
  s?: number;
  skin?: string;
  hair?: string;
  shirt?: string;
  pants?: string;
  mood?: Mood;
  pose?: Pose;
  hairStyle?: HairStyle;
  /** Doplňky kreslené nad postavou v jejích souřadnicích (klobouk, plášť…). */
  extras?: string;
  /** Otočení celé postavy kolem chodidel. */
  rotate?: number;
};

const HEAD_Y = -100;
const HEAD_R = 24;

function eyes(mood: Mood): string {
  const y = HEAD_Y - 4;
  const dot = (cx: number) => `<circle cx="${cx}" cy="${y}" r="3.4" fill="${P.ink}"/>`;
  const wide = (cx: number) =>
    `<circle cx="${cx}" cy="${y}" r="6.5" fill="${P.white}" ${ink(2.4)}/><circle cx="${cx}" cy="${y}" r="3" fill="${P.ink}"/>`;
  const closed = (cx: number, up: boolean) =>
    `<path d="M${cx - 6} ${y + (up ? 2 : 0)} q6 ${up ? -7 : 7} 12 0" fill="none" stroke="${P.ink}" stroke-width="3" stroke-linecap="round"/>`;

  switch (mood) {
    case 'surprised':
    case 'excited':
      return wide(-9) + wide(9);
    case 'worried':
      return (
        wide(-9) + wide(9) +
        `<path d="M-16 ${y - 12} q7 -5 13 -2 M16 ${y - 12} q-7 -5 -13 -2" fill="none" stroke="${P.ink}" stroke-width="3" stroke-linecap="round"/>`
      );
    case 'angry':
      return (
        dot(-9) + dot(9) +
        `<path d="M-16 ${y - 12} q7 3 12 6 M16 ${y - 12} q-7 3 -12 6" fill="none" stroke="${P.ink}" stroke-width="3.4" stroke-linecap="round"/>`
      );
    case 'sad':
      return (
        dot(-9) + dot(9) +
        `<path d="M-16 ${y - 11} q7 -4 12 -1 M16 ${y - 11} q-7 -4 -12 -1" fill="none" stroke="${P.ink}" stroke-width="3" stroke-linecap="round"/>`
      );
    case 'calm':
    case 'sleepy':
      return closed(-9, false) + closed(9, false);
    case 'proud':
    case 'shy':
      return closed(-9, true) + closed(9, true);
    default:
      return dot(-9) + dot(9);
  }
}

function mouth(mood: Mood): string {
  const y = HEAD_Y + 10;
  const line = (d: string, w = 3.2) =>
    `<path d="${d}" fill="none" stroke="${P.ink}" stroke-width="${w}" stroke-linecap="round"/>`;
  switch (mood) {
    case 'sad':
      return line(`M-9 ${y + 4} q9 -8 18 0`);
    case 'worried':
      return line(`M-9 ${y + 2} q4.5 -5 9 0 t9 0`);
    case 'angry':
      return line(`M-9 ${y + 3} q9 -6 18 0`);
    case 'surprised':
      return `<ellipse cx="0" cy="${y}" rx="6" ry="8" fill="${P.ink}"/>`;
    case 'excited':
      return `<path d="M-11 ${y - 3} q11 16 22 0 Z" fill="${P.ink}"/>`;
    case 'proud':
      return line(`M-11 ${y - 2} q11 12 22 0`, 3.4);
    case 'sleepy':
      return line(`M-5 ${y} q5 4 10 0`);
    case 'shy':
      return line(`M-7 ${y} q7 6 14 0`);
    default:
      return line(`M-10 ${y - 1} q10 10 20 0`);
  }
}

function blush(mood: Mood): string {
  if (mood !== 'shy' && mood !== 'excited' && mood !== 'proud' && mood !== 'happy') return '';
  return `<ellipse cx="-17" cy="${HEAD_Y + 6}" rx="6" ry="4" fill="${P.pink}" opacity="0.75"/>
<ellipse cx="17" cy="${HEAD_Y + 6}" rx="6" ry="4" fill="${P.pink}" opacity="0.75"/>`;
}

function tears(mood: Mood): string {
  if (mood !== 'sad') return '';
  return `<path d="M-9 ${HEAD_Y + 2} q-3 10 2 12 q5 -4 2 -12 Z" fill="${P.blue}"/>`;
}

function hairShape(style: HairStyle, color: string): string {
  switch (style) {
    case 'curly':
      return `<path d="M-24 ${HEAD_Y - 4} q-4 -22 14 -24 q6 -12 20 -6 q16 -8 22 8 q14 4 8 22 q-14 -14 -32 -12 q-20 2 -32 12 Z" fill="${color}" ${ink(3.4)}/>
<circle cx="-18" cy="${HEAD_Y - 18}" r="9" fill="${color}" ${ink(3)}/>
<circle cx="2" cy="${HEAD_Y - 26}" r="10" fill="${color}" ${ink(3)}/>
<circle cx="20" cy="${HEAD_Y - 16}" r="9" fill="${color}" ${ink(3)}/>`;
    case 'long':
      return `<path d="M-26 ${HEAD_Y + 22} q-8 -50 26 -50 q34 0 26 50 q-8 -22 -26 -22 q-18 0 -26 22 Z" fill="${color}" ${ink(3.4)}/>
<path d="M-26 ${HEAD_Y + 4} q-10 30 -4 44 q10 4 14 -8 M26 ${HEAD_Y + 4} q10 30 4 44 q-10 4 -14 -8" fill="${color}" ${ink(3.4)}/>`;
    case 'bun':
      return `<circle cx="0" cy="${HEAD_Y - 30}" r="12" fill="${color}" ${ink(3.2)}/>
<path d="M-25 ${HEAD_Y - 2} q0 -30 25 -30 q25 0 25 30 q-10 -18 -25 -18 q-15 0 -25 18 Z" fill="${color}" ${ink(3.4)}/>`;
    case 'hat':
      return '';
    default:
      return `<path d="M-25 ${HEAD_Y - 2} q0 -30 25 -30 q25 0 25 30 q-6 -20 -25 -20 q-19 0 -25 20 Z" fill="${color}" ${ink(3.4)}/>`;
  }
}

function limbs(pose: Pose, shirt: string, pants: string, skin: string): string {
  const arm = (d: string) =>
    `<path d="${d}" fill="none" stroke="${shirt}" stroke-width="13" stroke-linecap="round"/>
<path d="${d}" fill="none" stroke="${P.ink}" stroke-width="3.4" stroke-linecap="round" opacity="0.28"/>`;
  const hand = (x: number, y: number) => `<circle cx="${x}" cy="${y}" r="7.5" fill="${skin}" ${ink(3)}/>`;
  const leg = (d: string) =>
    `<path d="${d}" fill="none" stroke="${pants}" stroke-width="14" stroke-linecap="round"/>`;
  const shoe = (x: number, y: number) => `<ellipse cx="${x}" cy="${y}" rx="9" ry="5.5" fill="${P.ink}"/>`;

  const standLegs = leg('M-10 -34 V-6') + leg('M10 -34 V-6') + shoe(-10, -4) + shoe(10, -4);

  switch (pose) {
    case 'armsUp':
      return standLegs + arm('M-20 -70 L-34 -102') + arm('M20 -70 L34 -102') + hand(-34, -102) + hand(34, -102);
    case 'armsOut':
      return standLegs + arm('M-20 -68 L-42 -74') + arm('M20 -68 L42 -74') + hand(-42, -74) + hand(42, -74);
    case 'wave':
      return standLegs + arm('M-20 -68 L-32 -50') + arm('M20 -70 L36 -98') + hand(-32, -50) + hand(36, -98);
    case 'point':
      return standLegs + arm('M-20 -68 L-32 -50') + arm('M20 -68 L46 -80') + hand(-32, -50) + hand(46, -80);
    case 'run':
      return (
        leg('M-8 -34 L-24 -8') + leg('M8 -34 L26 -14') + shoe(-27, -6) + shoe(29, -12) +
        arm('M-20 -66 L-38 -78') + arm('M20 -66 L36 -50') + hand(-38, -78) + hand(36, -50)
      );
    case 'jump':
      return (
        leg('M-10 -36 L-26 -18') + leg('M10 -36 L26 -18') + shoe(-28, -16) + shoe(28, -16) +
        arm('M-20 -70 L-36 -100') + arm('M20 -70 L36 -100') + hand(-36, -100) + hand(36, -100)
      );
    case 'sit':
      return (
        leg('M-8 -30 L-30 -22') + leg('M8 -30 L30 -22') + shoe(-33, -20) + shoe(33, -20) +
        arm('M-20 -62 L-30 -34') + arm('M20 -62 L30 -34') + hand(-30, -34) + hand(30, -34)
      );
    case 'hold':
      return standLegs + arm('M-20 -68 L-24 -46') + arm('M20 -68 L24 -46') + hand(-24, -46) + hand(24, -46);
    case 'thinking':
      return standLegs + arm('M-20 -68 L-30 -48') + arm('M20 -68 L10 -84') + hand(-30, -48) + hand(10, -84);
    case 'cover':
      return standLegs + arm('M-20 -70 L-20 -92') + arm('M20 -70 L20 -92') + hand(-20, -92) + hand(20, -92);
    default:
      return standLegs + arm('M-20 -68 L-28 -46') + arm('M20 -68 L28 -46') + hand(-28, -46) + hand(28, -46);
  }
}

/**
 * Postava složená z hlavy, těla a končetin.
 * Výraz i póza jsou parametry – díky tomu drží všechny karty stejný rukopis.
 */
export function person({
  x,
  y,
  s = 1,
  skin = '#E0A87C',
  hair = '#3A2A22',
  shirt = P.coral,
  pants = P.navy,
  mood = 'happy',
  pose = 'stand',
  hairStyle = 'short',
  extras = '',
  rotate = 0,
}: PersonOptions): string {
  const body = `<path d="M-21 -34 V-64 q0 -16 21 -16 q21 0 21 16 v30 Z" fill="${shirt}" ${ink(3.6)}/>`;
  const neck = `<rect x="-6" y="-84" width="12" height="10" fill="${skin}"/>`;
  const head = `<circle cx="0" cy="${HEAD_Y}" r="${HEAD_R}" fill="${skin}" ${ink(3.6)}/>`;

  return `<g transform="translate(${x} ${y}) scale(${s})${rotate ? ` rotate(${rotate})` : ''}">
${limbs(pose, shirt, pants, skin)}
${body}${neck}${head}
${hairShape(hairStyle, hair)}
${eyes(mood)}${mouth(mood)}${blush(mood)}${tears(mood)}
${extras}</g>`;
}
