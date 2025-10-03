import type { Metadata } from 'next';

interface PageMetadata {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

export function generateMetadata({
  title,
  description,
  keywords,
  ogImage = '/og-image.jpg',
  canonical,
}: PageMetadata): Metadata {
  const fullTitle = `${title} | Himriti Public School`;
  const baseUrl = 'https://himriti.com';

  return {
    title: fullTitle,
    description,
    keywords: keywords
      ? `${keywords}, Himriti Public School, Rampur Bushahr, Shimla, Himachal Pradesh, K-12 education`
      : 'Himriti Public School, Rampur Bushahr, Shimla, Himachal Pradesh, K-12 education',
    alternates: {
      canonical: canonical ? `${baseUrl}${canonical}` : undefined,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical ? `${baseUrl}${canonical}` : baseUrl,
      siteName: 'Himriti Public School',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Himriti Public School',
  alternateName: 'Himriti School',
  url: 'https://himriti.com',
  logo: 'https://himriti.com/Himriti.png',
  description:
    'Premier K-12 educational institution in Rampur Bushahr, Shimla, Himachal Pradesh. Opening April 2026.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rampur Bushahr',
    addressLocality: 'Shimla',
    addressRegion: 'Himachal Pradesh',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-90154-17203',
    contactType: 'Admissions',
    email: 'himritihigh@gmail.com',
    availableLanguage: ['English', 'Hindi'],
  },
  sameAs: [
    // Add social media URLs when available
  ],
  foundingDate: '2026-04',
  slogan: 'Embracing Heritage, Inspiring Future',
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'School',
  name: 'Himriti Public School',
  image: 'https://himriti.com/Himriti.png',
  '@id': 'https://himriti.com',
  url: 'https://himriti.com',
  telephone: '+91-90154-17203',
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rampur Bushahr',
    addressLocality: 'Shimla',
    addressRegion: 'Himachal Pradesh',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 31.4504,
    longitude: 77.6299,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00',
  },
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const courseSchema = (courseName: string, description: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: courseName,
  description: description,
  provider: {
    '@type': 'EducationalOrganization',
    name: 'Himriti Public School',
    url: 'https://himriti.com',
  },
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const jobPostingSchema = (
  title: string,
  description: string,
  employmentType: string,
  datePosted: string
) => ({
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: title,
  description: description,
  datePosted: datePosted,
  employmentType: employmentType,
  hiringOrganization: {
    '@type': 'Organization',
    name: 'Himriti Public School',
    sameAs: 'https://himriti.com',
    logo: 'https://himriti.com/Himriti.png',
  },
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rampur Bushahr',
      addressLocality: 'Shimla',
      addressRegion: 'Himachal Pradesh',
      addressCountry: 'IN',
    },
  },
});
