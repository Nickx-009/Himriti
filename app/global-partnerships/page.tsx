"use client";

import { useEffect } from 'react';
import { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Globe, 
  Users, 
  Award, 
  BookOpen,
  ChevronRight,
  MapPin,
  Calendar,
  GraduationCap,
  Plane,
  Languages,
  Building,
  Heart
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Global Partnerships - Himriti Public School | International Collaborations',
  description: 'Discover Himriti Public School\'s global partnerships and international collaborations. Student exchange programs, global curriculum, and worldwide educational connections.',
  keywords: 'global partnerships, international education, student exchange, global curriculum, international schools, cultural exchange, Himriti partnerships',
  openGraph: {
    title: 'Global Partnerships at Himriti Public School',
    description: 'Connecting our students to the world through meaningful international partnerships and collaborative educational programs.',
    url: 'https://himriti.com/global-partnerships',
    type: 'website',
  },
};

export default function GlobalPartnershipsPage() {
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
              Global Partnerships
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-[#2d3748] mb-8 leading-tight">
              Connecting to the
              <br />
              <span className="text-[#1f514c]">World</span>
            </h1>
            <p className="text-xl text-[#4a5568] mb-12 leading-relaxed max-w-3xl mx-auto">
              At Himriti Public School, we believe education transcends borders. Our global partnerships 
              provide students with international perspectives, cultural exchange opportunities, 
              and connections that prepare them for success in our interconnected world.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/admissions">
                <Button size="lg" className="bg-[#1f514c] hover:bg-[#2a6b65] text-white px-10 py-4 text-lg h-14 btn-interactive">
                  Join Our Global Community
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-[#1f514c] text-[#1f514c] hover:bg-[#1f514c] hover:text-white px-10 py-4 text-lg h-14 btn-interactive">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision for Global Education */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-section">
              <Badge className="bg-[#2d5a27]/10 text-[#2d5a27] border-[#2d5a27]/20 mb-6 text-sm px-4 py-2">
                Global Vision
              </Badge>
              <h2 className="text-4xl font-bold text-[#2d3748] mb-6">
                Preparing Global Citizens
              </h2>
              <p className="text-lg text-[#4a5568] mb-6 leading-relaxed">
                In today's interconnected world, students need more than academic knowledge—they need 
                global competence, cultural awareness, and the ability to collaborate across borders. 
                Our international partnerships are designed to provide these essential 21st-century skills.
              </p>
              <p className="text-lg text-[#4a5568] mb-8 leading-relaxed">
                Through carefully curated partnerships with leading educational institutions worldwide, 
                we offer our students authentic opportunities to engage with diverse cultures, 
                perspectives, and educational approaches.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#1f514c] rounded-full"></div>
                  <span className="text-[#4a5568]">Cross-cultural communication skills</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#1f514c] rounded-full"></div>
                  <span className="text-[#4a5568]">Global perspective on local issues</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#1f514c] rounded-full"></div>
                  <span className="text-[#4a5568]">International collaboration experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#1f514c] rounded-full"></div>
                  <span className="text-[#4a5568]">Multilingual competency development</span>
                </div>
              </div>
            </div>
            
            <div className="fade-in-section">
              <div className="bg-gradient-to-br from-[#1f514c] to-[#2d5a27] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Global Impact</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">15+</div>
                    <div className="text-sm opacity-90">Partner Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div className="text-sm opacity-90">Partner Schools</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">100+</div>
                    <div className="text-sm opacity-90">Exchange Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">25+</div>
                    <div className="text-sm opacity-90">Global Projects</div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white/10 rounded-lg">
                  <p className="text-sm opacity-90">
                    <em>"Education is the most powerful weapon which you can use to change the world."</em>
                    <br />- Nelson Mandela
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Programs */}
      <section className="py-20 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Partnership Programs</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              Our diverse range of international programs provides students with multiple pathways 
              to global engagement and cultural exchange.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Student Exchange */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden interactive-card fade-in-section">
              <CardHeader className="p-8 pb-6">
                <div className="w-16 h-16 bg-[#1f514c]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Plane className="h-8 w-8 text-[#1f514c]" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">Student Exchange Programs</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-[#4a5568] leading-relaxed mb-4">
                  Immersive cultural and educational experiences through semester and year-long 
                  exchange programs with partner schools worldwide.
                </p>
                <ul className="space-y-2 text-sm text-[#4a5568]">
                  <li>• Semester abroad programs</li>
                  <li>• Summer cultural immersion</li>
                  <li>• Host family experiences</li>
                  <li>• Language immersion opportunities</li>
                </ul>
              </CardContent>
            </Card>

            {/* Virtual Collaborations */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden interactive-card fade-in-section">
              <CardHeader className="p-8 pb-6">
                <div className="w-16 h-16 bg-[#2d5a27]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-[#2d5a27]" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">Virtual Collaborations</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-[#4a5568] leading-relaxed mb-4">
                  Technology-enabled partnerships that connect our classrooms with students 
                  and educators around the world for collaborative learning.
                </p>
                <ul className="space-y-2 text-sm text-[#4a5568]">
                  <li>• Global classroom connections</li>
                  <li>• International project collaborations</li>
                  <li>• Virtual cultural exchanges</li>
                  <li>• Online language partnerships</li>
                </ul>
              </CardContent>
            </Card>

            {/* Teacher Exchange */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden interactive-card fade-in-section">
              <CardHeader className="p-8 pb-6">
                <div className="w-16 h-16 bg-[#d4831f]/10 rounded-2xl flex items-center justify-center mb-6">
                  <GraduationCap className="h-8 w-8 text-[#d4831f]" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">Educator Exchange</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-[#4a5568] leading-relaxed mb-4">
                  Professional development opportunities for our faculty through international 
                  teaching exchanges and collaborative research programs.
                </p>
                <ul className="space-y-2 text-sm text-[#4a5568]">
                  <li>• Faculty exchange programs</li>
                  <li>• International workshops</li>
                  <li>• Collaborative research projects</li>
                  <li>• Best practices sharing</li>
                </ul>
              </CardContent>
            </Card>

            {/* Global Curriculum */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden interactive-card fade-in-section">
              <CardHeader className="p-8 pb-6">
                <div className="w-16 h-16 bg-[#c44569]/10 rounded-2xl flex items-center justify-center mb-6">
                  <BookOpen className="h-8 w-8 text-[#c44569]" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">Global Curriculum Integration</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-[#4a5568] leading-relaxed mb-4">
                  Internationally benchmarked curriculum components that provide global 
                  perspectives on local and international issues.
                </p>
                <ul className="space-y-2 text-sm text-[#4a5568]">
                  <li>• International curriculum standards</li>
                  <li>• Global citizenship education</li>
                  <li>• Cross-cultural case studies</li>
                  <li>• World languages program</li>
                </ul>
              </CardContent>
            </Card>

            {/* Cultural Programs */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden interactive-card fade-in-section">
              <CardHeader className="p-8 pb-6">
                <div className="w-16 h-16 bg-[#1f514c]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="h-8 w-8 text-[#1f514c]" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">Cultural Exchange</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-[#4a5568] leading-relaxed mb-4">
                  Rich cultural exchange programs that celebrate diversity and promote 
                  understanding between different communities and traditions.
                </p>
                <ul className="space-y-2 text-sm text-[#4a5568]">
                  <li>• International festivals</li>
                  <li>• Cultural ambassador programs</li>
                  <li>• Traditional arts exchange</li>
                  <li>• Global cuisine experiences</li>
                </ul>
              </CardContent>
            </Card>

            {/* Research Partnerships */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden interactive-card fade-in-section">
              <CardHeader className="p-8 pb-6">
                <div className="w-16 h-16 bg-[#2d5a27]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-[#2d5a27]" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">Research Collaborations</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-[#4a5568] leading-relaxed mb-4">
                  Joint research initiatives with international institutions that engage 
                  students in real-world problem-solving and innovation.
                </p>
                <ul className="space-y-2 text-sm text-[#4a5568]">
                  <li>• International science fairs</li>
                  <li>• Collaborative research projects</li>
                  <li>• Global innovation challenges</li>
                  <li>• Sustainability initiatives</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner Regions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Our Global Network</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              We are building partnerships across continents to provide our students with 
              diverse perspectives and opportunities for global engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center fade-in-section">
              <div className="w-20 h-20 bg-[#1f514c]/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-10 w-10 text-[#1f514c]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2d3748] mb-2">Asia-Pacific</h3>
              <p className="text-[#4a5568] mb-4">Strong regional connections with leading schools across Asia-Pacific</p>
              <div className="text-sm text-[#4a5568] space-y-1">
                <div>Singapore • Japan</div>
                <div>Australia • South Korea</div>
                <div>Thailand • Malaysia</div>
              </div>
            </div>

            <div className="text-center fade-in-section">
              <div className="w-20 h-20 bg-[#2d5a27]/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Building className="h-10 w-10 text-[#2d5a27]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2d3748] mb-2">Europe</h3>
              <p className="text-[#4a5568] mb-4">Partnerships with prestigious European educational institutions</p>
              <div className="text-sm text-[#4a5568] space-y-1">
                <div>United Kingdom • Germany</div>
                <div>France • Netherlands</div>
                <div>Switzerland • Finland</div>
              </div>
            </div>

            <div className="text-center fade-in-section">
              <div className="w-20 h-20 bg-[#d4831f]/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Globe className="h-10 w-10 text-[#d4831f]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2d3748] mb-2">Americas</h3>
              <p className="text-[#4a5568] mb-4">Collaborations with innovative schools across North and South America</p>
              <div className="text-sm text-[#4a5568] space-y-1">
                <div>United States • Canada</div>
                <div>Brazil • Argentina</div>
                <div>Mexico • Chile</div>
              </div>
            </div>

            <div className="text-center fade-in-section">
              <div className="w-20 h-20 bg-[#c44569]/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-[#c44569]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2d3748] mb-2">Africa & Middle East</h3>
              <p className="text-[#4a5568] mb-4">Growing partnerships in emerging educational markets</p>
              <div className="text-sm text-[#4a5568] space-y-1">
                <div>South Africa • Kenya</div>
                <div>UAE • Qatar</div>
                <div>Egypt • Morocco</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for Students */}
      <section className="py-20 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Benefits for Our Students</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              Our global partnerships provide tangible benefits that prepare students for success 
              in an interconnected world.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-section">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1f514c]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Languages className="h-6 w-6 text-[#1f514c]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#2d3748] mb-2">Language Proficiency</h3>
                    <p className="text-[#4a5568] leading-relaxed">
                      Develop fluency in multiple languages through immersive experiences 
                      and native speaker interactions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2d5a27]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-[#2d5a27]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#2d3748] mb-2">Cultural Competence</h3>
                    <p className="text-[#4a5568] leading-relaxed">
                      Gain deep understanding and appreciation of different cultures, 
                      traditions, and worldviews.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d4831f]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-[#d4831f]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#2d3748] mb-2">Global Network</h3>
                    <p className="text-[#4a5568] leading-relaxed">
                      Build lifelong friendships and professional connections 
                      with peers from around the world.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c44569]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-[#c44569]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#2d3748] mb-2">College Readiness</h3>
                    <p className="text-[#4a5568] leading-relaxed">
                      Enhanced college applications and readiness for international 
                      higher education opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="fade-in-section">
              <Card className="bg-white border-0 shadow-lg rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-[#2d3748] mb-6">Student Success Stories</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-[#1f514c] pl-4">
                    <p className="text-[#4a5568] italic mb-2">
                      "The exchange program to Japan opened my eyes to different ways of learning 
                      and thinking. It completely changed my perspective on education and life."
                    </p>
                    <p className="text-sm text-[#2d3748] font-semibold">- Priya S., Grade 11</p>
                  </div>
                  
                  <div className="border-l-4 border-[#2d5a27] pl-4">
                    <p className="text-[#4a5568] italic mb-2">
                      "Working on the global sustainability project with students from five countries 
                      taught me the power of international collaboration."
                    </p>
                    <p className="text-sm text-[#2d3748] font-semibold">- Arjun M., Grade 10</p>
                  </div>
                  
                  <div className="border-l-4 border-[#d4831f] pl-4">
                    <p className="text-[#4a5568] italic mb-2">
                      "The virtual classroom connections helped me improve my English and make 
                      friends in three different countries before I even graduated."
                    </p>
                    <p className="text-sm text-[#2d3748] font-semibold">- Ananya K., Grade 12</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-[#faf7f2] to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Join Our Global Community</h2>
          <p className="text-xl text-[#4a5568] mb-12 leading-relaxed">
            Give your child the opportunity to become a true global citizen. 
            Experience education without borders at Himriti Public School.
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
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}