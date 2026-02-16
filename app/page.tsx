import HeroSection from '@/components/home/HeroSection';
import MissionStatement from '@/components/home/MissionStatement';
import ProgramOverview from '@/components/home/ProgramOverview';
import WhatWeLearn from '@/components/home/WhatWeLearn';
import TestimonialQuote from '@/components/home/TestimonialQuote';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <MissionStatement />
      <ProgramOverview />
      <WhatWeLearn />
      <TestimonialQuote />
      <CTASection />
    </>
  );
}
