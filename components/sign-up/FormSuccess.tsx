'use client';

import { motion } from 'framer-motion';
import { FadeIn } from '@/components/ui/motion';
import GoldDivider from '@/components/ui/GoldDivider';
import { PAYMENT_URL, SUGGESTED_DONATION } from '@/lib/constants';

interface FormSuccessProps {
  /** Name of the person who signed up */
  name: string;
  /** Name of the niftar (English) */
  niftarName: string;
  /** Reset the form to allow another sign-up */
  onReset: () => void;
}

/**
 * Success state displayed after a successful form submission.
 * Shows an animated checkmark, thank-you message, payment link,
 * and option to sign up again.
 */
export default function FormSuccess({ name, niftarName, onReset }: FormSuccessProps) {
  return (
    <FadeIn className="text-center py-12">
      {/* Animated checkmark */}
      <div className="flex justify-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="flex items-center justify-center rounded-full"
          style={{
            width: 80,
            height: 80,
            background: 'rgba(76, 175, 80, 0.2)',
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--color-success)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </motion.div>
      </div>

      {/* Thank you heading */}
      <h3
        className="text-2xl mb-4"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Thank You, {name}
      </h3>

      {/* Confirmation message */}
      <p
        className="max-w-md mx-auto mb-8 leading-relaxed"
        style={{
          color: 'var(--color-text-secondary)',
          fontFamily: 'var(--font-body)',
          fontSize: '16px',
        }}
      >
        Your dedication of Torah learning in memory of{' '}
        <span style={{ color: 'var(--color-gold)' }}>{niftarName}</span>{' '}
        has been received. You will receive a confirmation email shortly.
      </p>

      {/* Gold divider */}
      <GoldDivider className="my-8" />

      {/* Payment CTA */}
      <div className="mt-8">
        <p
          className="mb-4 text-sm"
          style={{
            fontFamily: 'var(--font-body)',
            color: 'var(--color-text-muted)',
          }}
        >
          Suggested donation: <strong style={{ color: 'var(--color-gold-dark)' }}>${SUGGESTED_DONATION}</strong> per yahrtzeit
        </p>
        <a
          href={PAYMENT_URL}
          className="btn btn--gold btn--lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Complete Payment
        </a>
      </div>

      {/* Sign up again link */}
      <div className="mt-6">
        <button
          type="button"
          onClick={onReset}
          className="text-sm cursor-pointer bg-transparent border-none"
          style={{
            color: 'var(--color-gold)',
            fontFamily: 'var(--font-body)',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLButtonElement).style.textDecoration = 'underline';
            (e.target as HTMLButtonElement).style.color = 'var(--color-gold-light)';
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLButtonElement).style.textDecoration = 'none';
            (e.target as HTMLButtonElement).style.color = 'var(--color-gold)';
          }}
        >
          Sign up for another yahrzeit
        </button>
      </div>
    </FadeIn>
  );
}
