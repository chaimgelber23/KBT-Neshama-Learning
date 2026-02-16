'use client';

import { FadeUp } from '@/components/ui/motion';
import GoldDivider from '@/components/ui/GoldDivider';

/**
 * TestimonialQuote — A light-background contrast section featuring a
 * sacred text about the value of Torah learning for the neshamah.
 * Provides visual breathing room between the darker sections.
 */
export default function TestimonialQuote() {
  return (
    <section className="section section--light">
      <div className="container container--narrow text-center">
        <FadeUp>
          <GoldDivider className="mb-10" />

          <blockquote className="mx-auto max-w-2xl">
            <p
              className="text-xl md:text-2xl leading-relaxed italic"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--color-text-dark)',
              }}
            >
              &ldquo;There is nothing more precious for the neshamah than Torah
              learned in its merit. It is a gift that transcends all
              worlds.&rdquo;
            </p>

            <footer className="mt-6">
              <cite
                className="not-italic text-sm"
                style={{
                  fontFamily: 'var(--font-body)',
                  color: 'var(--color-text-dark-secondary)',
                }}
              >
                — Zohar HaKadosh
              </cite>
            </footer>
          </blockquote>

          <GoldDivider className="mt-10" />
        </FadeUp>
      </div>
    </section>
  );
}
