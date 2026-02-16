'use client';

import Link from 'next/link';
import { FadeUp } from '@/components/ui/motion';
import GoldDivider from '@/components/ui/GoldDivider';
import { PAYMENT_URL } from '@/lib/constants';

/**
 * CTASection — Final call-to-action banner encouraging visitors to sign up
 * or make a payment. Sits on the secondary dark background to provide
 * visual weight at the bottom of the page.
 */
export default function CTASection() {
  return (
    <section
      className="section"
      style={{ background: 'var(--color-bg-cream)' }}
    >
      <div className="container text-center">
        <GoldDivider className="mb-12" />

        <FadeUp>
          <h2
            className="text-3xl md:text-4xl mx-auto max-w-2xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Honor Their Memory with the Gift of Torah
          </h2>

          <p
            className="mx-auto mt-5 mb-10 max-w-xl leading-relaxed"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: 'var(--color-text-secondary)',
            }}
          >
            Sign up today and bring an eternal merit to the neshamah of your
            loved ones
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/sign-up" className="btn btn--gold btn--lg">
              Sign Up Now
            </Link>
            <a
              href={PAYMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost btn--lg"
            >
              Make a Payment
            </a>
          </div>
        </FadeUp>

        <GoldDivider className="mt-16" />
      </div>
    </section>
  );
}
