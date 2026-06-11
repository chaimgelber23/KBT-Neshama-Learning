'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, SITE_NAME } from '@/lib/constants';
import MobileMenu from './MobileMenu';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial scroll position (sync state with actual DOM scroll on mount)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const isActive = (href: string): boolean => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F5F0E8]/95 backdrop-blur-md shadow-md shadow-black/5'
            : 'bg-transparent'
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Site Name / Logo */}
            <Link
              href="/"
              className="text-[var(--color-gold-dark)] hover:text-[var(--color-gold)] transition-colors duration-300"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span className="text-xl font-normal tracking-wide">
                {SITE_NAME}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) =>
                link.href === '/sign-up' ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="btn btn--gold btn--sm"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                      isActive(link.href)
                        ? 'text-[var(--color-gold)]'
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-gold)]'
                    }`}
                    style={{ fontFamily: 'var(--font-body)', letterSpacing: '1.5px', fontSize: '12px' }}
                  >
                    {link.label}
                    {isActive(link.href) && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[var(--color-gold)] rounded-full" />
                    )}
                  </Link>
                )
              )}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center text-[var(--color-text-primary)] hover:text-[var(--color-gold)] transition-colors duration-300"
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="flex flex-col items-center justify-center gap-[5px]">
                <span className="block w-6 h-[2px] bg-current transition-transform duration-300" />
                <span className="block w-6 h-[2px] bg-current transition-opacity duration-300" />
                <span className="block w-6 h-[2px] bg-current transition-transform duration-300" />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
