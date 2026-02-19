'use client';

import { StaggerContainer } from '@/components/ui/motion';
import StepCard from './StepCard';

const STEPS = [
  {
    number: 1,
    title: 'Sign Up',
    description:
      'Fill out a simple form with the details of your loved one and the yahrzeit date.',
  },
  {
    number: 2,
    title: 'Choose the Hebrew Date',
    description:
      'Use our Hebrew calendar picker to select the exact yahrzeit date.',
  },
  {
    number: 3,
    title: 'Make a Payment',
    description:
      'Complete your payment of $360 (suggested donation) through our secure payment link to confirm your dedication.',
  },
  {
    number: 4,
    title: 'Torah Learning is Arranged',
    description:
      'Our team coordinates dedicated Torah study to be completed on the yahrzeit.',
  },
  {
    number: 5,
    title: 'The Neshamah is Elevated',
    description:
      'On the yahrzeit, the merit of Torah learning brings an aliyah to the neshamah in Gan Eden.',
  },
] as const;

/**
 * Vertical timeline displaying all five steps of the process.
 * Left side: gold numbered circles connected by a vertical gold line.
 * Right side: step title and description.
 */
export default function StepsTimeline() {
  return (
    <section className="section">
      <div className="container container--narrow">
        <StaggerContainer className="relative">
          {/* Vertical gold connecting line behind the step circles */}
          <div
            className="absolute top-0 bottom-0"
            style={{
              left: '1.75rem', /* center of the 3.5rem (w-14) circle */
              width: '1px',
              background: 'var(--color-gold-border)',
            }}
            aria-hidden="true"
          />

          {/* Steps */}
          <div className="flex flex-col gap-16 relative">
            {STEPS.map((step) => (
              <StepCard
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
