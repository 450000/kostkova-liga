'use client';

import { motion } from 'framer-motion';

type StepperProps = {
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
  label: string;
  suffix?: (value: number) => string;
};

export function Stepper({ value, min, max, onChange, label, suffix }: StepperProps) {
  const text = suffix ? suffix(value) : String(value);

  return (
    <div className="flex items-center justify-between gap-4">
      <StepButton
        label={`Ubrat – ${label}`}
        disabled={value <= min}
        onClick={() => onChange(Math.max(min, value - 1))}
      >
        −
      </StepButton>

      <div
        className="min-w-0 flex-1 text-center"
        role="spinbutton"
        aria-label={label}
        aria-valuenow={value}
        aria-valuemin={min}
        aria-valuemax={max}
      >
        <motion.span
          key={value}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display block text-3xl font-semibold text-text"
        >
          {text}
        </motion.span>
      </div>

      <StepButton
        label={`Přidat – ${label}`}
        disabled={value >= max}
        onClick={() => onChange(Math.min(max, value + 1))}
      >
        +
      </StepButton>
    </div>
  );
}

function StepButton({
  children,
  label,
  disabled,
  onClick,
}: {
  children: string;
  label: string;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.88 }}
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="glass flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-2xl font-semibold text-text transition-opacity disabled:opacity-30"
    >
      {children}
    </motion.button>
  );
}
