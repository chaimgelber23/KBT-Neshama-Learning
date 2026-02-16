'use client';

import { FadeUp } from '@/components/ui/motion';
import GoldDivider from '@/components/ui/GoldDivider';

interface SectionHeadingProps {
  /** Small uppercase gold label above the heading */
  label?: string;
  /** Main heading text */
  heading: string;
  /** Subtitle text below the heading */
  subtitle?: string;
  /** Use the wider gold divider variant */
  wideDivider?: boolean;
  /** Center-align the heading block (default: true) */
  centered?: boolean;
  /** Additional CSS classes on the wrapper */
  className?: string;
}

/**
 * Standardized section header with optional label, heading,
 * subtitle, and animated gold divider. Wrapped in FadeUp for
 * scroll-triggered reveal.
 */
export default function SectionHeading({
  label,
  heading,
  subtitle,
  wideDivider = false,
  centered = true,
  className = '',
}: SectionHeadingProps) {
  return (
    <FadeUp
      className={[
        centered ? 'text-center' : '',
        'mb-12',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {/* Gold label */}
      {label && (
        <p
          className="mb-3"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: 'var(--color-gold-dark)',
          }}
        >
          {label}
        </p>
      )}

      {/* Main heading */}
      <h2
        className="text-3xl md:text-4xl mb-4"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {heading}
      </h2>

      {/* Gold divider */}
      <GoldDivider wide={wideDivider} className="my-5" />

      {/* Subtitle */}
      {subtitle && (
        <p
          className="mt-4 max-w-xl leading-relaxed"
          style={{
            color: 'var(--color-text-secondary)',
            fontFamily: 'var(--font-body)',
            fontSize: '16px',
            margin: centered ? '16px auto 0' : '16px 0 0',
          }}
        >
          {subtitle}
        </p>
      )}
    </FadeUp>
  );
}
