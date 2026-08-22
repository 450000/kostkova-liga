'use client';

import { motion } from 'framer-motion';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';
type Size = 'md' | 'lg';

const VARIANTS: Record<Variant, string> = {
  primary:
    'bg-secondary text-card-ink shadow-[0_14px_30px_-14px_rgba(245,199,101,0.9)] hover:brightness-105',
  secondary: 'glass text-text hover:bg-surface-strong',
  ghost: 'text-muted hover:text-text',
  danger: 'bg-danger/90 text-white hover:bg-danger',
};

const SIZES: Record<Size, string> = {
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

/** Framer Motion má vlastní `onAnimation*`/`onDrag*` – nativní varianty proto vynecháváme. */
type NativeButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration' | 'onDrag' | 'onDragStart' | 'onDragEnd'
>;

type ButtonProps = NativeButtonProps & {
  variant?: Variant;
  size?: Size;
  full?: boolean;
  children: ReactNode;
};

export function Button({
  variant = 'primary',
  size = 'md',
  full = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      whileHover={{ y: -1 }}
      transition={{ type: 'spring', stiffness: 420, damping: 26 }}
      className={`inline-flex items-center justify-center gap-2 rounded-[var(--radius-control)] font-semibold tracking-wide transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${VARIANTS[variant]} ${SIZES[size]} ${full ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
