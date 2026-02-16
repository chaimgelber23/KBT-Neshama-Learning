import type { Metadata } from 'next';
import Link from 'next/link';

import SectionHeading from '@/components/ui/SectionHeading';
import GoldDivider from '@/components/ui/GoldDivider';
import { FadeUp } from '@/components/ui/motion';
import ShulInfo from '@/components/about/ShulInfo';
import ContactInfo from '@/components/about/ContactInfo';

/* -------------------------------------------------------
   Metadata
   ------------------------------------------------------- */

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about KBT Neshama Learning program — a meaningful way for families to honor the memory of loved ones through the timeless merit of Torah study.',
};

/* -------------------------------------------------------
   About Page
   ------------------------------------------------------- */

export default function AboutPage() {
  return (
    <>
      {/* ── Hero header ─────────────────────────────────── */}
      <section
        className="py-24 md:py-32"
        style={{ background: 'var(--color-bg-primary)' }}
      >
        <div className="container">
          <SectionHeading
            label="OUR MISSION"
            heading="About Us"
            subtitle="A community dedicated to Torah and remembrance"
          />
        </div>
      </section>

      {/* ── Shul Info ───────────────────────────────────── */}
      <section className="section">
        <ShulInfo />
      </section>

      {/* ── Contact Info ────────────────────────────────── */}
      <section
        className="section"
        style={{ background: 'var(--color-bg-secondary)' }}
      >
        <ContactInfo />
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="section">
        <div className="container text-center">
          <FadeUp>
            <GoldDivider wide className="mb-10" />

            <h2
              className="text-3xl md:text-4xl mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Ready to Honor a Loved One?
            </h2>

            <p
              className="mb-8"
              style={{
                color: 'var(--color-text-secondary)',
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
              }}
            >
              Sign up for our Neshama Learning program today
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
