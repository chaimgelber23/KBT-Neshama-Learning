'use client';

import Link from 'next/link';
import { FadeIn } from '@/components/ui/motion';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <FadeIn>
        <div className="text-center">
          {/* Large 404 display */}
          <h1
            className="text-8xl md:text-9xl font-normal mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--color-gold)',
              lineHeight: 1,
            }}
          >
            404
          </h1>

          {/* Heading */}
          <h2
            className="text-2xl md:text-3xl mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Page Not Found
          </h2>

          {/* Subtitle */}
          <p
            className="mb-10"
            style={{
              color: 'var(--color-text-muted)',
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
            }}
          >
            The page you&apos;re looking for doesn&apos;t exist.
          </p>

          {/* CTA */}
          <Link href="/" className="btn btn--gold">
            Return Home
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
