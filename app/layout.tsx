import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Himriti Public School - Embracing Heritage, Inspiring Future',
  description: 'Premier K-12 educational institution in Rampur Bushahr, Shimla, Himachal Pradesh. Opening April 2026. Embracing Heritage, Inspiring Future.',
  keywords: 'Himriti Public School, Rampur Bushahr, Shimla, Himachal Pradesh, K-12 education, school admissions, Himalayan education',
  metadataBase: new URL('https://www.himriti.com'),
  alternates: {
    canonical: 'https://himriti.com',
  },
  openGraph: {
    title: 'Himriti Public School - Embracing Heritage, Inspiring Future',
    description: 'Premier K-12 educational institution in Rampur Bushahr, Shimla, Himachal Pradesh. Opening April 2026. Embracing Heritage, Inspiring Future.',
    url: 'https://himriti.com',
    siteName: 'Himriti Public School',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://himriti.com/Himriti.png',
        width: 1200,
        height: 630,
        alt: 'Himriti Public School Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Himriti Public School - Embracing Heritage, Inspiring Future',
    description: 'Premier K-12 educational institution in Rampur Bushahr, Shimla, Himachal Pradesh. Opening April 2026. Embracing Heritage, Inspiring Future.',
    images: ['https://himriti.com/Himriti.png'],
    site: '@himritischool',
    creator: '@himritipublicschool',
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
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}