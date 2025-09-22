import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Himriti Public School - Excellence in Himalayan Education',
  description: 'Premier K-12 educational institution in Rampur Bushahr, Shimla, Himachal Pradesh. Opening April 2026. Where Himalayan tradition meets modern education.',
  keywords: 'Himriti Public School, Rampur Bushahr, Shimla, Himachal Pradesh, K-12 education, school admissions, Himalayan education',
  metadataBase: new URL('https://www.himriti.com'),
  alternates: {
    canonical: 'https://himriti.com',
  },
  openGraph: {
    title: 'Himriti Public School - Excellence in Himalayan Education',
    description: 'Premier K-12 educational institution in Rampur Bushahr, Shimla, Himachal Pradesh. Opening April 2026.',
    url: 'https://himriti.com',
    siteName: 'Himriti Public School',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Himriti Public School - Excellence in Himalayan Education',
    description: 'Premier K-12 educational institution in Rampur Bushahr, Shimla, Himachal Pradesh. Opening April 2026.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}