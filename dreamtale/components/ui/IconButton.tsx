'use client';

import { motion } from 'framer-motion';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type NativeButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration' | 'onDrag' | 'onDragStart' | 'onDragEnd'
>;

type IconButtonProps = NativeButtonProps & {
  label: string;
  children: ReactNode;
};

export function IconButton({ label, className = '', children, ...props }: IconButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      aria-label={label}
      title={label}
      className={`glass flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:text-text ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
