import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Academics - CBSE Curriculum & Programs | Himriti Public School',
  description:
    'Explore our comprehensive K-12 CBSE curriculum aligned with NEP 2020. Innovative teaching methods, holistic education, subject offerings, and academic excellence in the Himalayas.',
  keywords:
    'CBSE curriculum, K-12 education, academic programs, NEP 2020, primary education, secondary education, subject offerings, holistic learning, innovative teaching',
  alternates: {
    canonical: 'https://himriti.com/academics',
  },
  openGraph: {
    title: 'Academics - CBSE Curriculum & Programs | Himriti Public School',
    description:
      'Comprehensive K-12 CBSE curriculum aligned with NEP 2020. Innovative teaching and holistic education.',
    url: 'https://himriti.com/academics',
    siteName: 'Himriti Public School',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Academics - CBSE Curriculum & Programs | Himriti Public School',
    description: 'Comprehensive K-12 CBSE curriculum with innovative teaching methods.',
  },
};

export default function AcademicsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
