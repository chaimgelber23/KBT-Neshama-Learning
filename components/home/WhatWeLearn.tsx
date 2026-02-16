'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import { StaggerContainer, StaggerItem } from '@/components/ui/motion';

const limudim = [
  {
    title: 'Mishnayos',
    description:
      'Mishnayos learned by the letters of the niftar\'s name — the primary tikkun for the neshamah, illuminating the soul with its own letters.',
  },
  {
    title: 'Gemaras',
    description:
      'Specific sections from Brachos, Shabbos, Makkos, Sanhedrin, Zvachim, Menachos, and more — selected specially for a yahrtzeit.',
  },
  {
    title: 'Zohar HaKadosh',
    description:
      'Excerpts from the Zohar and Idra, which according to the mekubalim bring the greatest benefit to the neshamah — for it is called "Zohar" because it illuminates.',
  },
  {
    title: 'Tehillim',
    description:
      'Chapters of Tehillim including Perakim Mem-Beis through Nun, with special tefillos and the name of the niftar woven in.',
  },
  {
    title: 'Chumash & Navi',
    description:
      'Selections from Parshas Bereishis, Parshas Naso, V\'Zos HaBracha, and sections from Shmuel Alef and Yeshaya — as prescribed by the Chidah.',
  },
  {
    title: 'Additional Limudim',
    description:
      'Mishnayos from Maseches Mikvaos (Perek Zayin) and Maseches Keilim (Perek Chaf-Daled), chosen by the Chidah for their special significance.',
  },
] as const;

export default function WhatWeLearn() {
  return (
    <section className="section section--light">
      <div className="container">
        <SectionHeading
          label="YAHRTZEIT LIMUD"
          heading="What We Learn"
          subtitle="A comprehensive program of Torah study performed by chashuva avreichim and members of the shul, as prescribed by the Chidah"
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {limudim.map((item) => (
            <StaggerItem key={item.title}>
              <div className="card h-full">
                <h3
                  className="text-lg mb-3"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: 'var(--color-gold-dark)',
                  }}
                >
                  {item.title}
                </h3>
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
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
