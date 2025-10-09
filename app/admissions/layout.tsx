import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admissions 2026-27 - Apply Now | Himriti',
  description:
    'Admissions open for 2026-27 academic year at Himriti, Rampur Bushahr. K-12 enrollment, application process, fee structure, important dates, and financial aid information.',
  keywords:
    'school admissions 2026, CBSE admissions, K-12 enrollment, Himachal Pradesh school admission, school fees, application process, founding class',
  alternates: {
    canonical: 'https://himriti.com/admissions',
  },
  openGraph: {
    title: 'Admissions 2026-27 - Apply Now | Himriti',
    description:
      'Join our founding class! Admissions open for 2026-27. K-12 enrollment with transparent fee structure and financial aid available.',
    url: 'https://himriti.com/admissions',
    siteName: 'Himriti',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Admissions 2026-27 - Apply Now | Himriti',
    description: 'Join our founding class! Admissions open for 2026-27.',
  },
};

export default function AdmissionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
