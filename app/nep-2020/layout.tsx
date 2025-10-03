import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NEP 2020 - National Education Policy | Himriti Public School',
  description:
    'Learn how Himriti Public School implements NEP 2020 framework. Holistic development, multidisciplinary learning, vocational education, and competency-based assessment approach.',
  keywords:
    'NEP 2020, National Education Policy, holistic education, multidisciplinary learning, competency based education, vocational training, skill development',
  alternates: {
    canonical: 'https://himriti.com/nep-2020',
  },
  openGraph: {
    title: 'NEP 2020 - National Education Policy | Himriti Public School',
    description:
      'Discover how we implement NEP 2020 for holistic development and multidisciplinary learning.',
    url: 'https://himriti.com/nep-2020',
    siteName: 'Himriti Public School',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEP 2020 - National Education Policy | Himriti Public School',
    description: 'How we implement NEP 2020 for holistic student development.',
  },
};

export default function NEP2020Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
