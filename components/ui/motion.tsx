'use client';

import { type ReactNode } from 'react';
import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from 'framer-motion';
import {
  fadeUp,
  fadeIn,
  slideInLeft,
  slideInRight,
  staggerContainer,
  fadeUp as staggerItemVariants,
} from '@/lib/animations';

/* -------------------------------------------------------
   Shared types & viewport config
   ------------------------------------------------------- */

interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
  /** Override the default transition duration (seconds) */
  delay?: number;
}

const DEFAULT_VIEWPORT = { once: true, margin: '-50px' as const };

/* -------------------------------------------------------
   FadeUp
   Fades in from below (y: 30 -> 0, opacity: 0 -> 1)
   ------------------------------------------------------- */

export function FadeUp({ children, className, delay }: MotionWrapperProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={DEFAULT_VIEWPORT}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------
   FadeIn
   Simple opacity transition
   ------------------------------------------------------- */

export function FadeIn({ children, className, delay }: MotionWrapperProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={DEFAULT_VIEWPORT}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------
   SlideInLeft
   Slides in from the left side
   ------------------------------------------------------- */

export function SlideInLeft({ children, className, delay }: MotionWrapperProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={slideInLeft}
      initial="hidden"
      whileInView="visible"
      viewport={DEFAULT_VIEWPORT}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------
   SlideInRight
   Slides in from the right side
   ------------------------------------------------------- */

export function SlideInRight({ children, className, delay }: MotionWrapperProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={slideInRight}
      initial="hidden"
      whileInView="visible"
      viewport={DEFAULT_VIEWPORT}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------
   StaggerContainer + StaggerItem
   Staggered children animations
   ------------------------------------------------------- */

interface StaggerContainerProps extends MotionWrapperProps {
  /** Additional motion props forwarded to the container */
  as?: keyof HTMLMotionProps<'div'>;
}

export function StaggerContainer({
  children,
  className,
  delay,
}: StaggerContainerProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={DEFAULT_VIEWPORT}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: Omit<MotionWrapperProps, 'delay'>) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={staggerItemVariants}>
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------
   ScaleOnHover
   Scales up slightly on hover and taps down on press
   ------------------------------------------------------- */

interface ScaleOnHoverProps extends MotionWrapperProps {
  /** Scale factor on hover (default: 1.03) */
  scale?: number;
  /** Scale factor on tap (default: 0.97) */
  tapScale?: number;
}

export function ScaleOnHover({
  children,
  className,
  scale = 1.03,
  tapScale = 0.97,
}: ScaleOnHoverProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      whileHover={{ scale }}
      whileTap={{ scale: tapScale }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      {children}
    </motion.div>
  );
}
