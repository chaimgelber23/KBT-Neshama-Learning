import Link from 'next/link';
import {
  NAV_LINKS,
  SITE_NAME,
  SHUL_NAME,
  SHUL_EMAIL,
  SHUL_PHONE,
  SHUL_ADDRESS,
} from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg-tertiary)] border-t border-[var(--color-gold-border)]">
      {/* Gold accent line at top */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent" />

      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Left Column: Brand */}
          <div>
            <Link
              href="/"
              className="text-[var(--color-gold-dark)] hover:text-[var(--color-gold)] transition-colors duration-300 inline-block"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span className="text-xl font-normal tracking-wide">
                {SITE_NAME}
              </span>
            </Link>
            <p
              className="mt-4 text-[var(--color-text-muted)] text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Dedicate Torah learning in memory of loved ones on their yahrzeit.
              A meaningful way to honor and elevate the neshamah through the
              merit of Torah study.
            </p>
          </div>

          {/* Center Column: Quick Links */}
          <div>
            <h3
              className="text-xs font-medium tracking-[2px] uppercase text-[var(--color-gold-dark)] mb-6"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors duration-300 text-sm"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Right Column: Contact Info */}
          <div>
            <h3
              className="text-xs font-medium tracking-[2px] uppercase text-[var(--color-gold-dark)] mb-6"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Contact
            </h3>
            <address
              className="not-italic space-y-3 text-sm text-[var(--color-text-muted)]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <p className="text-[var(--color-text-secondary)]">{SHUL_NAME}</p>

              <p>
                <a
                  href={`mailto:${SHUL_EMAIL}`}
                  className="text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors duration-300"
                >
                  {SHUL_EMAIL}
                </a>
              </p>

              <p>
                <a
                  href={`tel:${SHUL_PHONE.replace(/[^\d+]/g, '')}`}
                  className="text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors duration-300"
                >
                  {SHUL_PHONE}
                </a>
              </p>

              <p className="leading-relaxed">{SHUL_ADDRESS}</p>
            </address>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-[var(--color-gold-border)]">
        <div className="container py-8 flex items-center justify-center">
          <p
            className="text-xs text-[var(--color-text-muted)] tracking-wide"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
