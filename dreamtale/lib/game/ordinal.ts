const UNITS = [
  '',
  'první',
  'druhý',
  'třetí',
  'čtvrtý',
  'pátý',
  'šestý',
  'sedmý',
  'osmý',
  'devátý',
  'desátý',
  'jedenáctý',
  'dvanáctý',
  'třináctý',
  'čtrnáctý',
  'patnáctý',
  'šestnáctý',
  'sedmnáctý',
  'osmnáctý',
  'devatenáctý',
];

const TENS: Record<number, string> = {
  2: 'dvacátý',
  3: 'třicátý',
  4: 'čtyřicátý',
  5: 'padesátý',
  6: 'šedesátý',
};

/** České řadové číslovky v mužském rodě: „první“, „dvacátý třetí“. */
export function ordinal(value: number): string {
  if (value < 1) return String(value);
  if (value < 20) return UNITS[value];

  const tens = Math.floor(value / 10);
  const unit = value % 10;
  const tensWord = TENS[tens];
  if (!tensWord) return `${value}.`;
  return unit === 0 ? tensWord : `${tensWord} ${UNITS[unit]}`;
}
