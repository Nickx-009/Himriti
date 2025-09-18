import PageLayout from '@/components/layout/PageLayout';

export default function AdmissionsPage() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-[#2d3748] mb-8">Admissions</h1>
          <p className="text-lg text-[#4a5568]">Learn about our admission process and requirements.</p>
        </div>
      </div>
    </PageLayout>
  );
}