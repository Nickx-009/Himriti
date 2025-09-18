import PageLayout from '@/components/layout/PageLayout';

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-[#2d3748] mb-8">About Himriti Public School</h1>
          <p className="text-lg text-[#4a5568]">Learn more about our school's mission, vision, and values.</p>
        </div>
      </div>
    </PageLayout>
  );
}