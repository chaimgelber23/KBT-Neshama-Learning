'use client';

import { StaggerContainer, StaggerItem, FadeUp } from '@/components/ui/motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { SHUL_EMAIL, SHUL_PHONE, SHUL_ADDRESS } from '@/lib/constants';

/* -------------------------------------------------------
   Inline SVG icons
   ------------------------------------------------------- */

function EnvelopeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color: 'var(--color-gold)' }}
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 4L12 13 2 4" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color: 'var(--color-gold)' }}
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color: 'var(--color-gold)' }}
    >
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

/* -------------------------------------------------------
   Contact items data
   ------------------------------------------------------- */

const contactItems = [
  {
    icon: <EnvelopeIcon />,
    label: 'Email',
    value: SHUL_EMAIL,
    href: `mailto:${SHUL_EMAIL}`,
  },
  {
    icon: <PhoneIcon />,
    label: 'Phone',
    value: SHUL_PHONE,
    href: `tel:${SHUL_PHONE.replace(/[^+\d]/g, '')}`,
  },
  {
    icon: <MapPinIcon />,
    label: 'Address',
    value: SHUL_ADDRESS,
    href: null,
  },
];

/* -------------------------------------------------------
   ContactInfo component
   ------------------------------------------------------- */

/**
 * Contact details section with three items (email, phone, address)
 * displayed in a responsive row with staggered entrance animation.
 */
export default function ContactInfo() {
  return (
    <div className="container container--narrow text-center">
      <SectionHeading label="GET IN TOUCH" heading="Contact Us" />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {contactItems.map((item) => (
          <StaggerItem key={item.label}>
            <div className="flex flex-col items-center gap-3">
              {/* Icon */}
              {item.icon}

              {/* Label */}
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: 'var(--color-gold)',
                }}
              >
                {item.label}
              </span>

              {/* Value */}
              {item.href ? (
                <a
                  href={item.href}
                  style={{
                    color: 'var(--color-text-secondary)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '15px',
                  }}
                >
                  {item.value}
                </a>
              ) : (
                <span
                  style={{
                    color: 'var(--color-text-secondary)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '15px',
                  }}
                >
                  {item.value}
                </span>
              )}
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeUp>
        <p
          className="leading-relaxed"
          style={{
            color: 'var(--color-text-muted)',
            fontFamily: 'var(--font-body)',
            fontSize: '15px',
          }}
        >
          We&apos;d love to hear from you. Reach out with any questions about
          our Neshama Learning program.
        </p>
      </FadeUp>
    </div>
  );
}
