"use client";

import { useEffect } from 'react';
import { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Target, 
  Eye, 
  Users, 
  Mountain, 
  BookOpen,
  ChevronRight,
  Award,
  Globe,
  Lightbulb
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us - Himriti Public School | Our Story, Mission & Vision',
  description: 'Learn about Himriti Public School\'s mission to provide world-class education in the Himalayas. Discover our vision, values, and commitment to nurturing young minds in Rampur Bushahr, Shimla.',
  keywords: 'Himriti Public School about, school mission, vision, values, Himalayan education, Rampur Bushahr school, educational philosophy',
  openGraph: {
    title: 'About Himriti Public School - Embracing Heritage, Inspiring Future',
    description: 'Discover our mission to provide exceptional K-12 education in the heart of the Himalayas. Opening April 2026 in Rampur Bushahr, Shimla.',
    url: 'https://himriti.com/about',
    type: 'website',
  },
};

export default function AboutPage() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-section');
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-[#faf7f2] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-[#1f514c]/10 text-[#1f514c] border-[#1f514c]/20 mb-8 text-sm px-6 py-2 font-medium">
              About Himriti Public School
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-[#2d3748] mb-8 leading-tight">
              Embracing Heritage,
              <br />
              <span className="text-[#1f514c]">Inspiring Future</span>
            </h1>
            <p className="text-xl text-[#4a5568] mb-12 leading-relaxed max-w-3xl mx-auto">
              Nestled in the heart of the Himalayas, Himriti Public School is more than an educational institution—
              it's a place where tradition meets innovation, where young minds are nurtured to become global citizens 
              while staying rooted in their heritage.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/admissions">
                <Button size="lg" className="bg-[#1f514c] hover:bg-[#2a6b65] text-white px-10 py-4 text-lg h-14 btn-interactive">
                  Join Our Community
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-[#1f514c] text-[#1f514c] hover:bg-[#1f514c] hover:text-white px-10 py-4 text-lg h-14 btn-interactive">
                  Schedule Visit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-section">
              <Badge className="bg-[#2d5a27]/10 text-[#2d5a27] border-[#2d5a27]/20 mb-6 text-sm px-4 py-2">
                Our Story
              </Badge>
              <h2 className="text-4xl font-bold text-[#2d3748] mb-6">
                Born from a Vision of Excellence
              </h2>
              <p className="text-lg text-[#4a5568] mb-6 leading-relaxed">
                Himriti Public School was conceived with a singular vision: to create an educational sanctuary 
                in the pristine Himalayan landscape where students can flourish academically, emotionally, 
                and spiritually.
              </p>
              <p className="text-lg text-[#4a5568] mb-8 leading-relaxed">
                Our founders recognized the unique opportunity to blend the tranquility and wisdom of the 
                mountains with world-class educational practices, creating an environment where learning 
                transcends textbooks and becomes a transformative life experience.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1f514c]/10 rounded-full flex items-center justify-center">
                  <Mountain className="h-6 w-6 text-[#1f514c]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#2d3748]">Himalayan Setting</h4>
                  <p className="text-[#4a5568]">Learning in nature's classroom</p>
                </div>
              </div>
            </div>
            
            <div className="fade-in-section">
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#1f514c] to-[#2d5a27] rounded-2xl p-8 text-white">
                  <div className="h-full flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4">Opening April 2026</h3>
                    <p className="text-lg opacity-90 mb-6">
                      We're building something extraordinary in Rampur Bushahr, Shimla. 
                      A school that will redefine education in the Himalayas.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-2xl font-bold">K-12</div>
                        <div className="opacity-80">Complete Education</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">2026</div>
                        <div className="opacity-80">Opening Year</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Our Foundation</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              Everything we do is guided by our core mission, vision, and values that shape 
              the educational experience at Himriti Public School.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden interactive-card fade-in-section">
              <CardHeader className="p-8 pb-6 text-center">
                <div className="w-20 h-20 bg-[#1f514c]/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Target className="h-10 w-10 text-[#1f514c]" />
                </div>
                <CardTitle className="text-2xl text-[#2d3748] mb-2">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-[#4a5568] leading-relaxed text-center">
                  To provide holistic, world-class education that nurtures intellectual curiosity, 
                  emotional intelligence, and moral character while celebrating our rich cultural heritage 
                  and preparing students for global citizenship.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden interactive-card fade-in-section">
              <CardHeader className="p-8 pb-6 text-center">
                <div className="w-20 h-20 bg-[#2d5a27]/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-10 w-10 text-[#2d5a27]" />
                </div>
                <CardTitle className="text-2xl text-[#2d3748] mb-2">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-[#4a5568] leading-relaxed text-center">
                  To be a beacon of educational excellence in the Himalayas, creating confident, 
                  compassionate, and capable individuals who contribute meaningfully to society 
                  while preserving and promoting our cultural values.
                </p>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden interactive-card fade-in-section">
              <CardHeader className="p-8 pb-6 text-center">
                <div className="w-20 h-20 bg-[#d4831f]/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-10 w-10 text-[#d4831f]" />
                </div>
                <CardTitle className="text-2xl text-[#2d3748] mb-2">Our Values</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <ul className="text-[#4a5568] leading-relaxed space-y-2">
                  <li>• <strong>Excellence:</strong> Striving for the highest standards</li>
                  <li>• <strong>Integrity:</strong> Honesty in all our actions</li>
                  <li>• <strong>Respect:</strong> Valuing diversity and individuality</li>
                  <li>• <strong>Innovation:</strong> Embracing creative thinking</li>
                  <li>• <strong>Heritage:</strong> Celebrating our cultural roots</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">What Makes Us Different</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              Himriti Public School offers a unique educational experience that sets us apart 
              from traditional institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center fade-in-section">
              <div className="w-16 h-16 bg-[#1f514c]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mountain className="h-8 w-8 text-[#1f514c]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2d3748] mb-4">Himalayan Campus</h3>
              <p className="text-[#4a5568] leading-relaxed">
                Learn in the serene beauty of the Himalayas, where nature becomes part of the curriculum.
              </p>
            </div>

            <div className="text-center fade-in-section">
              <div className="w-16 h-16 bg-[#2d5a27]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-[#2d5a27]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2d3748] mb-4">NEP 2020 Aligned</h3>
              <p className="text-[#4a5568] leading-relaxed">
                Curriculum designed according to India's National Education Policy 2020 framework.
              </p>
            </div>

            <div className="text-center fade-in-section">
              <div className="w-16 h-16 bg-[#d4831f]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-[#d4831f]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2d3748] mb-4">Global Partnerships</h3>
              <p className="text-[#4a5568] leading-relaxed">
                International collaborations that provide global exposure and opportunities.
              </p>
            </div>

            <div className="text-center fade-in-section">
              <div className="w-16 h-16 bg-[#c44569]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-[#c44569]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2d3748] mb-4">Innovation Focus</h3>
              <p className="text-[#4a5568] leading-relaxed">
                Emphasis on creativity, critical thinking, and problem-solving skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Preview */}
      <section className="py-20 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Leadership Team</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              Our experienced leadership team brings together decades of educational expertise 
              and a shared passion for transformative learning.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg fade-in-section">
            <div className="text-center">
              <div className="w-24 h-24 bg-[#1f514c]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-12 w-12 text-[#1f514c]" />
              </div>
              <h3 className="text-2xl font-bold text-[#2d3748] mb-4">Meet Our Team</h3>
              <p className="text-[#4a5568] mb-8 max-w-2xl mx-auto leading-relaxed">
                Our leadership team is currently being assembled with renowned educators, 
                administrators, and visionaries who share our commitment to educational excellence. 
                Detailed profiles will be available soon.
              </p>
              <Link href="/about/work-with-us">
                <Button className="bg-[#1f514c] hover:bg-[#2a6b65] text-white">
                  Join Our Team
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-[#faf7f2] to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Ready to Be Part of Our Story?</h2>
          <p className="text-xl text-[#4a5568] mb-12 leading-relaxed">
            Join us in creating an educational legacy in the Himalayas. 
            Be among the founding families of Himriti Public School.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/admissions">
              <Button size="lg" className="bg-[#1f514c] hover:bg-[#2a6b65] text-white px-10 py-4 text-lg h-14 btn-interactive">
                Apply for Admission
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-[#1f514c] text-[#1f514c] hover:bg-[#1f514c] hover:text-white px-10 py-4 text-lg h-14 btn-interactive">
                Schedule Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}