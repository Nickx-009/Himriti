import Header from './Header';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}