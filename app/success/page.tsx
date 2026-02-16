'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/motion';
import GoldDivider from '@/components/ui/GoldDivider';
import { PAYMENT_URL } from '@/lib/constants';

/* ───────────────────────────────────────────────────────────
   Inner component — reads search params (requires Suspense)
   ─────────────────────────────────────────────────────────── */

function SuccessContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const niftar = searchParams.get('niftar');

  return (
    <FadeIn>
      <div className="text-center">
        {/* Animated checkmark */}
        <div
          className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full"
          style={{ background: 'rgba(76, 175, 80, 0.15)' }}
        >
          <svg
            className="h-10 w-10"
            style={{ color: 'var(--color-success)' }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Heading */}
        <h1
          className="text-3xl md:text-4xl mb-4"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Thank You{name ? `, ${name}` : ''}!
        </h1>

        {/* Confirmation message */}
        <p
          className="text-lg leading-relaxed mb-2"
          style={{
            color: 'var(--color-text-secondary)',
            fontFamily: 'var(--font-body)',
          }}
        >
          Your sign-up for Neshama Learning
          {niftar ? ` in memory of ${niftar}` : ''} has been received.
        </p>

        <p
          className="mb-8"
          style={{
            color: 'var(--color-text-muted)',
            fontFamily: 'var(--font-body)',
            fontSize: '15px',
          }}
        >
          You will receive a confirmation email shortly.
        </p>

        <GoldDivider wide className="my-10" />

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href={PAYMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--gold btn--lg"
          >
            Complete Payment
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
          <Link
            href="/sign-up"
            className="btn btn--ghost"
          >
            Sign Up Another
          </Link>
          <Link
            href="/"
            className="btn btn--ghost"
          >
            Return Home
          </Link>
        </div>
      </div>
    </FadeIn>
  );
}

/* ───────────────────────────────────────────────────────────
   Page wrapper with Suspense boundary
   ─────────────────────────────────────────────────────────── */

export default function SuccessPage() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center section">
      <div className="container container--narrow">
        <Suspense
          fallback={
            <div className="text-center" style={{ color: 'var(--color-text-muted)' }}>
              Loading...
            </div>
          }
        >
          <SuccessContent />
        </Suspense>
      </div>
    </section>
  );
}
