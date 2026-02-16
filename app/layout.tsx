import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'KBT Neshama Learning | Torah Study in Memory of Loved Ones',
    template: '%s | KBT Neshama Learning',
  },
  description:
    'Dedicate Torah learning in memory of loved ones on their yahrzeit. KBT Synagogue offers a meaningful way to honor and elevate the neshamah through the merit of Torah study.',
  keywords: [
    'yahrzeit learning',
    'neshama learning',
    'Torah study in memory',
    'yahrzeit program',
    'Jewish memorial learning',
    'neshamah elevation',
    'yahrzeit dedication',
    'Torah learning dedication',
    'Jewish remembrance',
    'synagogue yahrzeit program',
  ],
  openGraph: {
    title: 'KBT Neshama Learning | Torah Study in Memory of Loved Ones',
    description:
      'A meaningful way to honor and elevate the neshamah through dedicated Torah learning on the yahrzeit.',
    siteName: 'KBT Neshama Learning',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'KBT Neshama Learning',
  description:
    'Torah learning program dedicated to the memory of loved ones on their yahrzeit',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${playfair.variable} ${dmSans.variable} antialiased`}>
        <Navigation />
        <main className="pb-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
