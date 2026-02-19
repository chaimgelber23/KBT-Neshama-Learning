'use client';

import GoldDivider from '@/components/ui/GoldDivider';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/motion';

const limudim = [
  {
    icon: '\u05DE', // Mem
    title: 'Mishnayos',
    subtitle: 'By the Letters of the Name',
    description:
      'Mishnayos are learned according to the letters of the niftar\'s name — spelling out the neshamah\'s identity through Torah. This is considered the primary tikkun for the neshamah, as the Mishnayos illuminate the soul with its own letters.',
    detail:
      'The word "Mishnah" (משנה) has the same letters as "Neshamah" (נשמה), revealing the deep connection between Mishnah study and the soul.',
    sources: 'Based on the teachings of the Arizal and the Chidah',
  },
  {
    icon: '\u05D2', // Gimmel
    title: 'Gemaras',
    subtitle: 'Selected for Yahrtzeit',
    description:
      'Specific sections from Maseches Brachos, Shabbos, Makkos, Sanhedrin, Zvachim, Menachos, and additional masechtos — each one specially selected for their relevance to a yahrtzeit.',
    detail:
      'These particular gemaras deal with themes of the neshamah, olam haba, and the merit of Torah study — bringing direct benefit to the niftar.',
    sources: 'As prescribed by the Chidah in his seforim',
  },
  {
    icon: '\u05D6', // Zayin
    title: 'Zohar HaKadosh',
    subtitle: 'The Greatest Illumination',
    description:
      'Excerpts from the Zohar and the Idra are learned — according to the mekubalim, the study of Zohar provides the greatest possible benefit to the neshamah.',
    detail:
      'The Zohar is called "Zohar" because it illuminates. The study of its holy words sends a powerful light to the neshamah in the upper worlds, giving it tremendous nachas ruach.',
    sources: 'The Chidah emphasizes this based on the teachings of the mekubalim',
  },
  {
    icon: '\u05EA', // Tav
    title: 'Tehillim',
    subtitle: 'Chapters of Prayer',
    description:
      'Chapters of Tehillim including Perakim Mem-Beis (42) through Nun (50), along with special tefillos. The name of the niftar is woven into the recitation.',
    detail:
      'These specific kapitlach of Tehillim correspond to themes of longing for Hashem, trust in His mercy, and the soul\'s journey — particularly meaningful on a yahrtzeit.',
    sources: 'Following the minhag of gedolei Yisroel',
  },
  {
    icon: '\u05D7', // Ches
    title: 'Chumash & Navi',
    subtitle: 'Torah & Prophets',
    description:
      'Selections from Parshas Bereishis, Parshas Naso, V\'Zos HaBracha, and sections from Shmuel Alef and Yeshaya — as prescribed by the Chidah for a yahrtzeit.',
    detail:
      'These parshiyos and sections from Navi contain themes of creation, blessing, the neshamah, and the promise of eternal life through Torah and mitzvos.',
    sources: 'Specifically prescribed by the Chidah',
  },
  {
    icon: '\u05DB', // Kaf
    title: 'Additional Limudim',
    subtitle: 'Mikvaos & Keilim',
    description:
      'Mishnayos from Maseches Mikvaos and Maseches Keilim, chosen by the Chidah for their special significance for a yahrtzeit.',
    detail:
      'Mikvaos represents purification and tahara for the neshamah. Keilim represents the body as a vessel for the soul. Together they symbolize the complete tikun of the niftar.',
    sources: 'Selected by the Chidah for their spiritual significance',
  },
] as const;

export default function LimudimShowcase() {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: 'var(--color-bg-primary)' }}
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

      <div className="container relative z-10">
        <StaggerContainer className="space-y-8 md:space-y-10 max-w-4xl mx-auto">
          {limudim.map((item, index) => (
            <StaggerItem key={item.title}>
              <div
                className="relative rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: 'var(--color-bg-white)',
                  border: '1px solid var(--color-gold-border)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                }}
              >
                {/* Gold top accent bar */}
                <div
                  className="h-1"
                  style={{
                    background:
                      'linear-gradient(90deg, var(--color-gold-dark), var(--color-gold-light), var(--color-gold-dark))',
                  }}
                />

                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                    {/* Left: Icon + number */}
                    <div className="flex md:flex-col items-center md:items-center gap-4 md:gap-2 md:min-w-[80px]">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center shrink-0"
                        style={{
                          background: 'var(--color-gold-muted)',
                          border: '2px solid var(--color-gold-border)',
                        }}
                      >
                        <span
                          className="text-2xl leading-none"
                          style={{
                            fontFamily: 'var(--font-display)',
                            color: 'var(--color-gold-dark)',
                            fontWeight: 600,
                          }}
                        >
                          {item.icon}
                        </span>
                      </div>
                      <span
                        className="text-xs font-medium tracking-wider uppercase md:mt-1"
                        style={{
                          color: 'var(--color-gold)',
                          fontFamily: 'var(--font-body)',
                        }}
                      >
                        {index + 1} of {limudim.length}
                      </span>
                    </div>

                    {/* Right: Content */}
                    <div className="flex-1">
                      <p
                        className="text-xs font-medium tracking-[2px] uppercase mb-1"
                        style={{
                          color: 'var(--color-gold)',
                          fontFamily: 'var(--font-body)',
                        }}
                      >
                        {item.subtitle}
                      </p>

                      <h3
                        className="text-xl md:text-2xl mb-4"
                        style={{
                          fontFamily: 'var(--font-display)',
                          color: 'var(--color-text-primary)',
                        }}
                      >
                        {item.title}
                      </h3>

                      <p
                        className="leading-relaxed mb-4"
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '15px',
                          color: 'var(--color-text-secondary)',
                        }}
                      >
                        {item.description}
                      </p>

                      {/* Highlight box */}
                      <div
                        className="rounded-md p-4 mb-3"
                        style={{
                          background: 'var(--color-gold-muted)',
                          borderLeft: '3px solid var(--color-gold)',
                        }}
                      >
                        <p
                          className="text-sm leading-relaxed italic"
                          style={{
                            fontFamily: 'var(--font-display)',
                            color: 'var(--color-text-secondary)',
                          }}
                        >
                          {item.detail}
                        </p>
                      </div>

                      <p
                        className="text-xs"
                        style={{
                          fontFamily: 'var(--font-body)',
                          color: 'var(--color-text-muted)',
                        }}
                      >
                        {item.sources}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
