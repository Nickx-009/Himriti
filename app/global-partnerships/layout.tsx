import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Global Partnerships - International Connections | Himriti',
  description:
    'Explore our international partnerships and global collaborations. Student exchange programs, international curriculum integration, and global learning opportunities.',
  keywords:
    'international school partnerships, student exchange, global education, international collaboration, study abroad, cultural exchange, global curriculum',
  alternates: {
    canonical: 'https://himriti.com/global-partnerships',
  },
  openGraph: {
    title: 'Global Partnerships - International Connections | Himriti',
    description: 'International partnerships and global learning opportunities for our students.',
    url: 'https://himriti.com/global-partnerships',
    siteName: 'Himriti',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Partnerships - International Connections | Himriti',
    description: 'International partnerships and global learning opportunities.',
  },
};

export default function GlobalPartnershipsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
