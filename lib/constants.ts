// Site-wide constants
export const SITE_NAME = 'KBT Neshama Learning';
export const SITE_TAGLINE = 'Elevate the Neshamah Through Torah Learning';
export const SITE_DESCRIPTION =
  'Dedicate Torah learning in memory of loved ones on their yahrzeit. A meaningful way to honor and elevate the neshamah through the merit of Torah study.';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://neshamalearning.com';

// Contact info
export const SHUL_NAME = 'Kahal Bais Tefila — Ramat Eshkol';
export const SHUL_LEADER = 'Under the leadership of Rav Dovid Steinhaur Shlit"a';
export const SHUL_EMAIL = 'kbtdraw@gmail.com';
export const SHUL_PHONE = '+972-53-463-1889';
export const SHUL_ADDRESS = 'Ramat Eshkol, Yerushalayim, Eretz Yisroel';
export const ADMIN_EMAIL = 'kbtdraw@gmail.com';
export const SUGGESTED_DONATION = 360;

// Payment link — update with real URL
export const PAYMENT_URL = process.env.NEXT_PUBLIC_PAYMENT_URL || '#';

// Navigation links
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Sign Up', href: '/sign-up' },
  { label: 'About', href: '/about' },
] as const;
