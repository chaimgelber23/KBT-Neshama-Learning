'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { NAV_LINKS, SITE_NAME } from '@/lib/constants';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuVariants: Variants = {
  closed: {
    x: '100%',
    transition: {
      type: 'tween',
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  open: {
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const linkContainerVariants: Variants = {
  closed: {},
  open: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const linkVariants: Variants = {
  closed: {
    opacity: 0,
    x: 30,
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  const isActive = (href: string): boolean => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Slide-in Menu Panel */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-[#F5F0E8] flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Header with close button */}
            <div className="flex items-center justify-between px-6 h-20">
              <span
                className="text-[var(--color-gold-dark)] text-lg font-normal tracking-wide"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {SITE_NAME}
              </span>

              <button
                type="button"
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors duration-300"
                aria-label="Close navigation menu"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <motion.div
              variants={linkContainerVariants}
              initial="closed"
              animate="open"
              className="flex-1 flex flex-col items-center justify-center gap-8 px-6"
            >
              {NAV_LINKS.filter((link) => link.href !== '/sign-up').map((link) => (
                <motion.div key={link.href} variants={linkVariants}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`text-2xl font-normal tracking-wider uppercase transition-colors duration-300 ${
                      isActive(link.href)
                        ? 'text-[var(--color-gold)]'
                        : 'text-[var(--color-text-primary)] hover:text-[var(--color-gold)]'
                    }`}
                    style={{ fontFamily: 'var(--font-display)', letterSpacing: '3px' }}
                  >
                    {link.label}
                    {isActive(link.href) && (
                      <span className="block w-8 h-[2px] bg-[var(--color-gold)] mx-auto mt-2 rounded-full" />
                    )}
                  </Link>
                </motion.div>
              ))}

              {/* Sign Up CTA Button */}
              <motion.div variants={linkVariants} className="mt-4">
                <Link
                  href="/sign-up"
                  onClick={onClose}
                  className="btn btn--gold btn--lg"
                >
                  Sign Up
                </Link>
              </motion.div>
            </motion.div>

            {/* Decorative bottom element */}
            <div className="px-6 pb-8 flex justify-center">
              <div className="gold-divider" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
