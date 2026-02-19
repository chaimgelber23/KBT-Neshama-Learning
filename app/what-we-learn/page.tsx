import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import GoldDivider from '@/components/ui/GoldDivider';
import LimudimShowcase from '@/components/what-we-learn/LimudimShowcase';
import { FadeUp } from '@/components/ui/motion';

export const metadata: Metadata = {
  title: 'What We Learn',
  description:
    'Discover the comprehensive Torah study program performed on each yahrtzeit — Mishnayos, Gemaras, Zohar, Tehillim, Chumash, and more, as prescribed by the Chidah.',
};

export default function WhatWeLearnPage() {
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
            label="YAHRTZEIT LIMUD"
            heading="What We Learn"
            subtitle="A comprehensive program of Torah study as prescribed by the Chidah, performed by chashuva avreichim and members of the shul"
          />
        </div>
      </section>

      {/* ── Introduction ── */}
      <section className="section" style={{ background: 'var(--color-bg-cream)' }}>
        <div className="container">
          <FadeUp className="max-w-3xl mx-auto text-center">
            <p
              className="text-lg md:text-xl leading-relaxed mb-6"
              style={{
                fontFamily: 'var(--font-body)',
                color: 'var(--color-text-secondary)',
              }}
            >
              The great mekubal, the Chidah (Rav Chaim Yosef David Azulai zt&quot;l),
              laid out a specific program of limudim to be learned on a yahrtzeit for
              the maximum benefit to the neshamah. Our program follows his teachings
              faithfully.
            </p>
            <p
              className="text-base leading-relaxed italic"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--color-text-muted)',
              }}
            >
              Each limud was chosen for its unique ability to bring light and
              elevation to the neshamah of the niftar.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Detailed Limudim ── */}
      <LimudimShowcase />

      {/* ── Why This Matters ── */}
      <section className="section" style={{ background: 'var(--color-bg-cream)' }}>
        <div className="container">
          <FadeUp className="max-w-3xl mx-auto">
            <h2
              className="text-2xl md:text-3xl text-center mb-8"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Why This Program is Unique
            </h2>
            <GoldDivider className="mb-10" />

            <div
              className="space-y-6 text-base leading-relaxed"
              style={{
                fontFamily: 'var(--font-body)',
                color: 'var(--color-text-secondary)',
              }}
            >
              <p>
                Unlike other learning programs, our avreichim learn{' '}
                <strong style={{ color: 'var(--color-text-primary)' }}>
                  for only one person&apos;s yahrtzeit each day
                </strong>
                . This ensures that the full concentration and kavana of the
                learners is focused entirely on the neshamah of your loved one.
              </p>
              <p>
                The limudim are not generic — they are{' '}
                <strong style={{ color: 'var(--color-text-primary)' }}>
                  specifically selected for a yahrtzeit
                </strong>{' '}
                based on the writings of the Chidah and other gedolei Yisroel. Each
                selection has a particular reason and spiritual significance for
                elevating the neshamah on its special day.
              </p>
              <p>
                The Mishnayos are learned{' '}
                <strong style={{ color: 'var(--color-text-primary)' }}>
                  by the letters of the niftar&apos;s name
                </strong>
                , creating a personal and direct connection between the learning and
                the neshamah being elevated.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="section">
        <div className="container text-center">
          <FadeUp>
            <GoldDivider wide className="mb-10" />
            <h2
              className="text-3xl md:text-4xl mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Reserve Your Yahrtzeit Date
            </h2>
            <p
              className="mb-8 max-w-lg mx-auto"
              style={{
                color: 'var(--color-text-secondary)',
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
              }}
            >
              Since we learn for only one person per day, reserve your date far in
              advance to ensure it will be dedicated to your loved one.
            </p>
            <Link href="/sign-up" className="btn btn--gold btn--lg">
              Sign Up Now
            </Link>
            <GoldDivider wide className="mt-10" />
          </FadeUp>
        </div>
      </section>
    </>
  );
}
