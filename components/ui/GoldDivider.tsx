'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { goldDividerExpand } from '@/lib/animations';

interface GoldDividerProps {
  /** Render the wider 120px variant */
  wide?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Animated gold horizontal divider that scales in from the center on scroll.
 * Uses the `.gold-divider` CSS class defined in globals.css.
 */
export default function GoldDivider({ wide = false, className = '' }: GoldDividerProps) {
  const prefersReducedMotion = useReducedMotion();

  const dividerClasses = [
    'gold-divider',
    wide ? 'gold-divider--wide' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (prefersReducedMotion) {
    return <div className={dividerClasses} />;
  }

  return (
    <motion.div
      className={dividerClasses}
      variants={goldDividerExpand}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      style={{ originX: 0.5 }}
    />
  );
}
