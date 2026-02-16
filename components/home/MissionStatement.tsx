'use client';

import { FadeUp } from '@/components/ui/motion';
import GoldDivider from '@/components/ui/GoldDivider';

/**
 * MissionStatement — A centered blockquote section featuring a spiritual
 * teaching about the power of Torah learning for the neshamah. Rendered
 * on a slightly lighter dark background for visual rhythm.
 */
export default function MissionStatement() {
  return (
    <section
      className="section"
      style={{ background: 'var(--color-bg-white)' }}
    >
      <div className="container container--narrow text-center">
        <GoldDivider className="mb-10" />

        <FadeUp>
          <blockquote className="mx-auto max-w-2xl">
            <p
              className="text-2xl md:text-3xl leading-relaxed italic"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--color-gold-dark)',
              }}
            >
              &ldquo;When Torah is learned for the elevation of a neshamah, it
              brings a tremendous aliyah — uplifting the soul to ever higher
              levels in Gan Eden.&rdquo;
            </p>

            <footer className="mt-6">
              <cite
                className="not-italic"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  fontVariantCaps: 'small-caps',
                  color: 'var(--color-text-muted)',
                }}
              >
                — Based on the teachings of the Arizal
              </cite>
            </footer>
          </blockquote>
        </FadeUp>

        <GoldDivider className="mt-10" />
      </div>
    </section>
  );
}
