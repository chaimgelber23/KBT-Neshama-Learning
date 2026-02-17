'use client';

import GoldDivider from '@/components/ui/GoldDivider';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/motion';

const limudim = [
  {
    icon: '\u05DE', // Mem - for Mishnayos
    title: 'Mishnayos',
    description:
      'Learned by the letters of the niftar\'s name — the primary tikkun for the neshamah, illuminating the soul with its own letters.',
  },
  {
    icon: '\u05D2', // Gimmel - for Gemaras
    title: 'Gemaras',
    description:
      'Specific sections from Brachos, Shabbos, Makkos, Sanhedrin, Zvachim, Menachos, and more — selected specially for a yahrtzeit.',
  },
  {
    icon: '\u05D6', // Zayin - for Zohar
    title: 'Zohar HaKadosh',
    description:
      'Excerpts from the Zohar and Idra — according to the mekubalim, the greatest benefit to the neshamah. It is called "Zohar" because it illuminates.',
  },
  {
    icon: '\u05EA', // Tav - for Tehillim
    title: 'Tehillim',
    description:
      'Chapters of Tehillim including Perakim Mem-Beis through Nun, with special tefillos and the name of the niftar woven in.',
  },
  {
    icon: '\u05D7', // Ches - for Chumash
    title: 'Chumash & Navi',
    description:
      'Selections from Parshas Bereishis, Naso, V\'Zos HaBracha, and sections from Shmuel Alef and Yeshaya — as prescribed by the Chidah.',
  },
  {
    icon: '\u05DB', // Kaf - for Keilim/additional
    title: 'Additional Limudim',
    description:
      'Mishnayos from Maseches Mikvaos and Maseches Keilim, chosen by the Chidah for their special significance for a yahrtzeit.',
  },
] as const;

export default function WhatWeLearn() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'var(--color-bg-cream)' }}
    >
      {/* Subtle geometric background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(45deg, rgba(184, 148, 62, 0.04) 1px, transparent 1px), linear-gradient(-45deg, rgba(184, 148, 62, 0.04) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
        aria-hidden="true"
      />

      {/* Decorative border frame */}
      <div
        className="pointer-events-none absolute inset-4 md:inset-8"
        style={{
          border: '1px solid var(--color-gold-border)',
          borderRadius: '4px',
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        {/* Section heading */}
        <FadeUp className="text-center mb-16">
          <p
            className="mb-3"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: 'var(--color-gold-dark)',
            }}
          >
            YAHRTZEIT LIMUD
          </p>

          <h2
            className="text-3xl md:text-5xl mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            What We Learn
          </h2>

          <GoldDivider wide className="my-6" />

          <p
            className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed"
            style={{
              fontFamily: 'var(--font-body)',
              color: 'var(--color-text-secondary)',
            }}
          >
            A comprehensive program of Torah study as prescribed by the Chidah,
            performed by chashuva avreichim and members of the shul
          </p>
        </FadeUp>

        {/* Limudim grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {limudim.map((item) => (
            <StaggerItem key={item.title}>
              <div
                className="relative h-full rounded overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'var(--color-bg-white)',
                  border: '1px solid var(--color-gold-border)',
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
                }}
              >
                {/* Gold top accent bar */}
                <div
                  className="h-1"
                  style={{
                    background: 'linear-gradient(90deg, var(--color-gold-dark), var(--color-gold-light), var(--color-gold-dark))',
                  }}
                />

                <div className="p-7">
                  {/* Hebrew letter icon */}
                  <div
                    className="mb-4 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: 'var(--color-gold-muted)',
                      border: '1px solid var(--color-gold-border)',
                    }}
                  >
                    <span
                      className="text-xl leading-none"
                      style={{
                        fontFamily: 'var(--font-display)',
                        color: 'var(--color-gold-dark)',
                        fontWeight: 600,
                      }}
                    >
                      {item.icon}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg mb-3"
                    style={{
                      fontFamily: 'var(--font-display)',
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="leading-relaxed"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom note */}
        <FadeUp className="text-center mt-14">
          <GoldDivider className="mb-8" />
          <p
            className="mx-auto max-w-xl text-sm leading-relaxed italic"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--color-text-muted)',
            }}
          >
            As we learn for only one person&apos;s yahrtzeit each day, you can reserve
            your date far in advance to make sure it will be reserved for your loved one.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
