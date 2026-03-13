import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mraresearch.org'),
  title: {
    default: 'MRA Research LLC — Autonomous Systems & Aerospace R&D',
    template: '%s | MRA Research LLC',
  },
  description:
    'MRA Research LLC is a US-based scientific R&D firm specializing in autonomous UAV systems, artificial intelligence, IoT, and aerospace engineering. We publish open-access research and develop technology for defense and commercial applications.',
  openGraph: {
    siteName: 'MRA Research LLC',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
