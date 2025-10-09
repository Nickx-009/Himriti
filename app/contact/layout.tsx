import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch | Himriti',
  description:
    'Contact Himriti in Rampur Bushahr, Shimla. Phone: +91 90154 17203, Email: hello@himriti.com. Schedule a visit or inquire about admissions.',
  keywords:
    'contact school, school address, phone number, email, visit school, Rampur Bushahr, Shimla school contact, admissions inquiry',
  alternates: {
    canonical: 'https://himriti.com/contact',
  },
  openGraph: {
    title: 'Contact Us - Get in Touch | Himriti',
    description:
      'Get in touch with us. Phone: +91 90154 17203. Schedule a visit or inquire about admissions.',
    url: 'https://himriti.com/contact',
    siteName: 'Himriti',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Get in Touch | Himriti',
    description: 'Get in touch with us. Schedule a visit or inquire about admissions.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
