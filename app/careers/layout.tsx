import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers - Join Our Team | Himriti',
  description:
    'Join our founding team! Teaching and administrative positions available at Himriti. Competitive salary, professional development, and work in the beautiful Himalayas.',
  keywords:
    'teaching jobs, school careers, teacher recruitment, administrative positions, education jobs Himachal Pradesh, school jobs Shimla, work in Himalayas',
  alternates: {
    canonical: 'https://himriti.com/careers',
  },
  openGraph: {
    title: 'Careers - Join Our Team | Himriti',
    description:
      'Join our founding team! Teaching and administrative positions available. Shape the future of education in the Himalayas.',
    url: 'https://himriti.com/careers',
    siteName: 'Himriti',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers - Join Our Team | Himriti',
    description:
      'Join our founding team! Multiple teaching and administrative positions available.',
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
