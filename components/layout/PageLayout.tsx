import Header from './Header';
import Footer from './Footer';
import WhatsAppWidget from '@/components/ui/whatsapp-widget';
import StructuredData from '@/components/StructuredData';
import { organizationSchema, localBusinessSchema } from '@/lib/metadata';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={localBusinessSchema} />
      <div className="min-h-screen bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppWidget />
      </div>
    </>
  );
}
