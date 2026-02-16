'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import CandleIcon from '@/components/ui/CandleIcon';

/**
 * HeroSection — Full-viewport opening section with a centered memorial candle,
 * headline, subtitle, and dual CTA buttons on a warm cream background
 * with subtle geometric patterns matching the flyer design.
 */
export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const transition = {
    duration: 0.8,
    ease: [0.25, 0.1, 0.25, 1] as const,
  };

  const wrap = (delay: number, children: React.ReactNode, key: string) =>
    prefersReducedMotion ? (
      <div key={key}>{children}</div>
    ) : (
      <motion.div
        key={key}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay }}
      >
        {children}
      </motion.div>
    );

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-pattern"
      style={{ background: 'var(--color-bg-cream)' }}
    >
      {/* Subtle warm radial overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255,248,232,0.6) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Decorative border lines (matching flyer geometric frame) */}
      <div
        className="pointer-events-none absolute inset-6 md:inset-12 border border-[var(--color-gold-border)]"
        style={{ borderRadius: '2px' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center px-6 py-24 text-center">
        {/* Memorial Candle */}
        {wrap(
          0,
          <CandleIcon size={140} className="mb-8" />,
          'candle',
        )}

        {/* Gold label */}
        {wrap(
          0.1,
          <p
            className="mb-4"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: 'var(--color-gold-dark)',
            }}
          >
            Neshama Learning Program
          </p>,
          'label',
        )}

        {/* Heading */}
        {wrap(
          0.2,
          <h1
            className="mx-auto max-w-3xl text-4xl md:text-6xl"
            style={{
              fontFamily: 'var(--font-display)',
              lineHeight: 1.15,
              color: 'var(--color-text-primary)',
            }}
          >
            Elevate the Neshamah Through the Power of Torah
          </h1>,
          'heading',
        )}

        {/* Subtitle */}
        {wrap(
          0.4,
          <p
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed"
            style={{
              fontFamily: 'var(--font-body)',
              color: 'var(--color-text-secondary)',
            }}
          >
            Dedicate Torah learning in memory of your loved ones on their
            yahrzeit — an eternal merit for the soul
          </p>,
          'subtitle',
        )}

        {/* CTA Buttons */}
        {wrap(
          0.6,
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/sign-up" className="btn btn--gold btn--lg">
              Sign Up Now
            </Link>
            <Link href="/how-it-works" className="btn btn--ghost btn--lg">
              How It Works
            </Link>
          </div>,
          'buttons',
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        {prefersReducedMotion ? (
          <ScrollChevron />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <ScrollChevron />
          </motion.div>
        )}
      </div>
    </section>
  );
}

function ScrollChevron() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="scroll-indicator"
      aria-hidden="true"
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="var(--color-gold)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
