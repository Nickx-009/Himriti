import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Our Story & Vision | Himriti',
  description:
    'Discover the story behind Himriti. Learn about our mission to provide world-class education in the Himalayas, our values, leadership team, and commitment to academic excellence.',
  keywords:
    'about Himriti School, school mission, vision, values, leadership team, educational philosophy, Himachal Pradesh school, mountain education',
  alternates: {
    canonical: 'https://himriti.com/about',
  },
  openGraph: {
    title: 'About Us - Our Story & Vision | Himriti',
    description:
      'Learn about our mission to provide world-class education in the Himalayas. Meet our leadership team and discover our commitment to academic excellence.',
    url: 'https://himriti.com/about',
    siteName: 'Himriti',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Our Story & Vision | Himriti',
    description: 'Learn about our mission to provide world-class education in the Himalayas.',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
