import type { Metadata } from 'next';
import SectionHeading from '@/components/ui/SectionHeading';
import { FadeUp } from '@/components/ui/motion';
import SignUpForm from '@/components/sign-up/SignUpForm';
import { SUGGESTED_DONATION } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Sign Up',
  description:
    'Sign up for KBT Neshama Learning to dedicate Torah learning in memory of your loved one on their yahrzeit.',
};

export default function SignUpPage() {
  return (
    <>
      {/* Hero header */}
      <section
        className="relative"
        style={{
          paddingTop: '120px',
          paddingBottom: '60px',
          background: `linear-gradient(180deg, var(--color-bg-primary) 0%, var(--color-bg-secondary) 100%)`,
        }}
      >
        <div className="container">
          <SectionHeading
            label="DEDICATE LEARNING"
            heading="Sign Up"
            subtitle="Fill out the form below to dedicate Torah learning in memory of your loved one"
            wideDivider
          />
        </div>
      </section>

      {/* Pricing note */}
      <section style={{ background: 'var(--color-bg-cream)' }}>
        <div className="container container--narrow py-8">
          <FadeUp>
            <div
              className="rounded-lg p-6 text-center"
              style={{
                background: 'var(--color-bg-white)',
                border: '1px solid var(--color-gold-border)',
              }}
            >
              <p
                className="text-sm leading-relaxed"
                style={{
                  fontFamily: 'var(--font-body)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                Suggested donation:{' '}
                <span
                  className="text-lg font-semibold"
                  style={{ color: 'var(--color-gold-dark)' }}
                >
                  ${SUGGESTED_DONATION}
                </span>{' '}
                per yahrtzeit.{' '}
                <span style={{ color: 'var(--color-text-muted)' }}>
                  Payment is completed after sign-up via our secure payment link.
                </span>
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Form section */}
      <section className="section">
        <div className="container container--narrow">
          <SignUpForm />
        </div>
      </section>
    </>
  );
}
