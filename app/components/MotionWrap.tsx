'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface MotionWrapProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}

const EASE_CUBIC = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE_CUBIC, delay },
  }),
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: EASE_CUBIC, delay },
  }),
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: EASE_CUBIC, delay },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut', delay },
  }),
};

export default function MotionWrap({ children, className = '', delay = 0, direction = 'up' }: MotionWrapProps) {
  const variantMap: Record<string, Variants> = {
    up: fadeUp,
    down: { hidden: { opacity: 0, y: -32 }, visible: fadeUp.visible as any },
    left: fadeLeft,
    right: fadeRight,
    fade: fadeIn,
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      custom={delay}
      variants={variantMap[direction]}
    >
      {children}
    </motion.div>
  );
}
