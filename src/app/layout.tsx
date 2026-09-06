import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mraresearch.org'),
  title: {
    default: 'MRA Research LLC — Healthcare, Legal & Software Technology Consulting',
    template: '%s | MRA Research LLC',
  },
  description:
    'MRA Research LLC is a US-based (Delaware) technology research and consulting firm operating across healthcare technology, legal technology, software infrastructure, and autonomous systems. We publish open-access research and provide fractional engineering and domain consulting for early-stage startups.',
  openGraph: {
    siteName: 'MRA Research LLC',
    title: 'MRA Research LLC — Healthcare, Legal & Software Technology Consulting',
    description:
      'US-based technology research and consulting firm operating across healthcare technology, legal technology, software infrastructure, and autonomous systems.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.mraresearch.org',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'MRA Research LLC',
  alternateName: 'MRA Research',
  url: 'https://www.mraresearch.org',
  description:
    'US-based technology research and consulting firm operating across healthcare technology, legal technology, software infrastructure, and autonomous systems.',
  email: 'contact@mraresearch.org',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '34 Brier Ave #712',
    addressLocality: 'Wilmington',
    addressRegion: 'DE',
    postalCode: '19805',
    addressCountry: 'US',
  },
  knowsAbout: [
    'Healthcare Technology',
    'Legal Technology',
    'Software Infrastructure',
    'Autonomous Systems',
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'MRA Research LLC',
  url: 'https://www.mraresearch.org',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
