import { describe, expect, it } from 'vitest';
import { ordinal } from '@/lib/game/ordinal';

describe('řadové číslovky', () => {
  it('používá slovní tvar pro celý rozsah hry', () => {
    expect(ordinal(1)).toBe('první');
    expect(ordinal(2)).toBe('druhý');
    expect(ordinal(9)).toBe('devátý');
    expect(ordinal(19)).toBe('devatenáctý');
    expect(ordinal(20)).toBe('dvacátý');
    expect(ordinal(23)).toBe('dvacátý třetí');
    expect(ordinal(60)).toBe('šedesátý');
  });
});
