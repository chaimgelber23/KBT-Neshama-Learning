import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import StepsTimeline from '@/components/how-it-works/StepsTimeline';
import { FadeUp } from '@/components/ui/motion';

export const metadata: Metadata = {
  title: 'How It Works',
  description:
    'Learn how KBT Neshama Learning works. Dedicate Torah learning in memory of loved ones in five simple steps.',
};

export default function HowItWorksPage() {
  return (
    <>
      {/* ── Hero Header ── */}
      <section
        className="relative py-24 md:py-32"
        style={{
          background:
            'linear-gradient(180deg, var(--color-bg-primary) 0%, var(--color-bg-secondary) 100%)',
        }}
      >
        <div className="container">
          <SectionHeading
            label="THE PROCESS"
            heading="How It Works"
            subtitle="A meaningful way to dedicate Torah learning in five simple steps"
          />
        </div>
      </section>

      {/* ── Steps Timeline ── */}
      <StepsTimeline />

      {/* ── CTA Section ── */}
      <section
        className="section"
        style={{ background: 'var(--color-bg-secondary)' }}
      >
        <div className="container text-center">
          <FadeUp>
            <h2
              className="text-3xl md:text-4xl mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Ready to Dedicate Learning?
            </h2>
            <Link href="/sign-up" className="btn btn--gold btn--lg">
              Sign Up Now
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
