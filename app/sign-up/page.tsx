import type { Metadata } from 'next';
import SectionHeading from '@/components/ui/SectionHeading';
import SignUpForm from '@/components/sign-up/SignUpForm';

export const metadata: Metadata = {
  title: 'Sign Up',
  description:
    'Sign up for KBT Neshama Learning to dedicate Torah learning in memory of your loved one on their yahrzeit.',
};

export default function SignUpPage() {
  return (
    <>
      {/* Hero header */}
      <section
        className="relative"
        style={{
          paddingTop: '120px',
          paddingBottom: '60px',
          background: `linear-gradient(180deg, var(--color-bg-primary) 0%, var(--color-bg-secondary) 100%)`,
        }}
      >
        <div className="container">
          <SectionHeading
            label="DEDICATE LEARNING"
            heading="Sign Up"
            subtitle="Fill out the form below to dedicate Torah learning in memory of your loved one"
            wideDivider
          />
        </div>
      </section>

      {/* Form section */}
      <section className="section">
        <div className="container container--narrow">
          <SignUpForm />
        </div>
      </section>
    </>
  );
}
