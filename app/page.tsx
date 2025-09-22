import { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  ChevronRight,
  BookOpen,
  Users,
  Globe,
  Award,
  Heart,
  Star
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Himriti Public School - Excellence in Education',
  description: 'Himriti Public School offers world-class education with a focus on holistic development, NEP 2020 implementation, and global partnerships. Nurturing young minds for a bright future.',
  keywords: 'Himriti Public School, education, NEP 2020, holistic development, CBSE, admissions, global partnerships',
  openGraph: {
    title: 'Himriti Public School - Excellence in Education',
    description: 'World-class education with holistic development and global partnerships',
    type: 'website',
    locale: 'en_US',
  },
};

export default function HomePage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1f514c] to-[#2d5a27] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Excellence in
                  <span className="block text-[#d4831f]">Education</span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  Nurturing young minds with world-class education, innovative teaching methods, 
                  and a commitment to holistic development aligned with NEP 2020.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/admissions">
                  <Button size="lg" className="bg-[#d4831f] hover:bg-[#b8721a] text-white px-8 py-4 text-lg h-14">
                    Apply for Admission
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-[#1f514c] px-8 py-4 text-lg h-14"
                >
                  Schedule Campus Visit
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#d4831f]">15+</div>
                    <div className="text-sm text-white/80">Years of Excellence</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#d4831f]">1000+</div>
                    <div className="text-sm text-white/80">Happy Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#d4831f]">50+</div>
                    <div className="text-sm text-white/80">Expert Faculty</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#d4831f]">98%</div>
                    <div className="text-sm text-white/80">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-4">
              Why Choose Himriti Public School?
            </h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto">
              We provide a comprehensive educational experience that prepares students 
              for success in the 21st century.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#f8f9fa] rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#1f514c]/10 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="h-6 w-6 text-[#1f514c]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2d3748] mb-4">NEP 2020 Aligned</h3>
              <p className="text-[#4a5568]">
                Our curriculum is fully aligned with the National Education Policy 2020, 
                focusing on holistic and multidisciplinary education.
              </p>
            </div>
            
            <div className="bg-[#f8f9fa] rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#2d5a27]/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-[#2d5a27]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2d3748] mb-4">Expert Faculty</h3>
              <p className="text-[#4a5568]">
                Our dedicated team of experienced educators brings passion and expertise 
                to every classroom, ensuring quality learning.
              </p>
            </div>
            
            <div className="bg-[#f8f9fa] rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#d4831f]/10 rounded-lg flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-[#d4831f]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2d3748] mb-4">Global Partnerships</h3>
              <p className="text-[#4a5568]">
                Through our international partnerships, students gain global perspectives 
                and opportunities for cultural exchange.
              </p>
            </div>
            
            <div className="bg-[#f8f9fa] rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#c44569]/10 rounded-lg flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-[#c44569]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2d3748] mb-4">Academic Excellence</h3>
              <p className="text-[#4a5568]">
                Consistent high performance in board examinations and competitive exams 
                with personalized attention to each student.
              </p>
            </div>
            
            <div className="bg-[#f8f9fa] rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#1f514c]/10 rounded-lg flex items-center justify-center mb-6">
                <Heart className="h-6 w-6 text-[#1f514c]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2d3748] mb-4">Holistic Development</h3>
              <p className="text-[#4a5568]">
                Beyond academics, we focus on character building, life skills, and 
                emotional intelligence for well-rounded development.
              </p>
            </div>
            
            <div className="bg-[#f8f9fa] rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#2d5a27]/10 rounded-lg flex items-center justify-center mb-6">
                <Star className="h-6 w-6 text-[#2d5a27]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2d3748] mb-4">Modern Infrastructure</h3>
              <p className="text-[#4a5568]">
                State-of-the-art facilities including smart classrooms, laboratories, 
                library, and sports facilities for comprehensive learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#2d3748] mb-6">
            Ready to Join Our School Family?
          </h2>
          <p className="text-xl text-[#4a5568] mb-8">
            Take the first step towards your child's bright future. Apply now or schedule 
            a campus visit to experience our educational excellence firsthand.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions">
              <Button size="lg" className="bg-[#1f514c] hover:bg-[#2a6b65] text-white px-8 py-4 text-lg h-14">
                Start Application Process
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-[#1f514c] text-[#1f514c] hover:bg-[#1f514c] hover:text-white px-8 py-4 text-lg h-14"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}