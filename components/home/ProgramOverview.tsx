'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import { StaggerContainer, StaggerItem } from '@/components/ui/motion';

/* -------------------------------------------------------
   Data for the three overview cards
   ------------------------------------------------------- */

const steps = [
  {
    number: '01',
    title: 'Reserve Your Date',
    description:
      'Choose the Hebrew yahrzeit date of your loved one. We learn for only one person each day, so reserve in advance to secure your date.',
  },
  {
    number: '02',
    title: 'Dedicated Torah Learning',
    description:
      'Chashuva avreichim and members of the shul learn mishnayos by name of the niftar, gemaras, Zohar, and limudim selected by the Chidah.',
  },
  {
    number: '03',
    title: 'The Neshamah is Elevated',
    description:
      'The merit of Torah learning brings a tremendous aliyah — uplifting the neshamah to ever higher levels in Gan Eden.',
  },
] as const;

/**
 * ProgramOverview — Three-card grid explaining how the KBT Neshama
 * Learning program works. Each card is numbered with a gold accent and
 * staggered-in on scroll.
 */
export default function ProgramOverview() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          label="THE PROGRAM"
          heading="How It Works"
          subtitle="A simple, meaningful way to honor your loved ones"
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="card text-center">
                {/* Gold step number */}
                <p
                  className="mb-4"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '40px',
                    lineHeight: 1,
                    color: 'var(--color-gold)',
                  }}
                >
                  {step.number}
                </p>

                {/* Step title */}
                <h3
                  className="text-xl mb-3"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {step.title}
                </h3>

                {/* Step description */}
                <p
                  className="leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '15px',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
