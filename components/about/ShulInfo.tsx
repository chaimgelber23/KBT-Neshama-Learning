'use client';

import { SlideInLeft, SlideInRight } from '@/components/ui/motion';
import GoldDivider from '@/components/ui/GoldDivider';

/**
 * Two-column section about the KBT Neshama Learning program.
 * Left column: placeholder for shul image.
 * Right column: description text with gold divider.
 */
export default function ShulInfo() {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left column — Image placeholder */}
        <SlideInLeft>
          <div
            className="aspect-[4/3] rounded flex items-center justify-center"
            style={{
              background: 'var(--color-bg-tertiary)',
              border: '1px solid var(--color-gold-border)',
            }}
          >
            <span
              style={{
                color: 'var(--color-text-muted)',
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
              }}
            >
              Shul Photo
            </span>
          </div>
        </SlideInLeft>

        {/* Right column — Program description */}
        <SlideInRight>
          <h2
            className="text-2xl md:text-3xl mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            About KBT Neshama Learning
          </h2>

          <GoldDivider className="my-5 !mx-0" />

          <p
            className="mb-4 leading-relaxed"
            style={{
              color: 'var(--color-text-secondary)',
              fontFamily: 'var(--font-body)',
            }}
          >
            Our Neshama Learning program was established with a simple but
            profound mission &mdash; to provide a meaningful way for families to
            honor the memory of their loved ones through the timeless merit of
            Torah study.
          </p>

          <p
            className="mb-4 leading-relaxed"
            style={{
              color: 'var(--color-text-secondary)',
              fontFamily: 'var(--font-body)',
            }}
          >
            On the yahrzeit of your loved one, dedicated Torah learning is
            arranged in their memory. The merit of this learning brings an
            aliyah to the neshamah, elevating the soul to higher levels in Gan
            Eden.
          </p>

          <p
            className="leading-relaxed"
            style={{
              color: 'var(--color-text-secondary)',
              fontFamily: 'var(--font-body)',
            }}
          >
            This program is run by KBT Synagogue, a warm and welcoming community
            dedicated to Torah, prayer, and chesed.
          </p>
        </SlideInRight>
      </div>
    </div>
  );
}
