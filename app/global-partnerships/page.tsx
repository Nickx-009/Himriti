"use client";

import { useEffect } from 'react';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PageLayout from '@/components/layout/PageLayout';
import { 
  Globe, 
  GraduationCap, 
  Users, 
  Award, 
  ChevronRight,
  ArrowRight,
  CheckCircle,
  Target,
  Lightbulb,
  Heart,
  Building,
  BookOpen,
  Languages,
  Plane,
  Video,
  Mail,
  Calendar,
  MapPin,
  Star,
  Handshake
} from 'lucide-react';
import Link from 'next/link';
import AdmissionModal from '@/components/admission/AdmissionModal';

export const metadata: Metadata = {
  title: 'Global Partnerships - International Education | Himriti Public School',
  description: 'Explore Himriti Public School\'s global partnerships for international education, cultural exchange, sister schools, and university collaborations from the Himalayas.',
  keywords: 'global partnerships, international education, sister schools, cultural exchange, university collaborations, global citizenship, international school partnerships',
  openGraph: {
    title: 'Global Partnerships - International Education | Himriti Public School',
    description: 'Explore Himriti Public School\'s global partnerships for international education, cultural exchange, sister schools, and university collaborations.',
    url: 'https://himriti.com/global-partnerships',
  },
  twitter: {
    title: 'Global Partnerships - International Education | Himriti Public School',
    description: 'Explore Himriti Public School\'s global partnerships for international education, cultural exchange, sister schools, and university collaborations.',
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
              Connecting
              <br />
              <span className="text-[#1f514c]">Across Borders</span>
            </h1>
            <p className="text-xl text-[#4a5568] mb-12 leading-relaxed max-w-3xl mx-auto">
              At Himriti Public School, we believe in preparing our students for a globalized world 
              through meaningful partnerships with educational institutions and organizations worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-[#1f514c] hover:bg-[#2a6b65] text-white px-10 py-4 text-lg h-14 btn-interactive">
                Explore Partnerships
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-[#1f514c] text-[#1f514c] hover:bg-[#1f514c] hover:text-white px-10 py-4 text-lg h-14 btn-interactive">
                  Partner With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision for Global Education */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Our Vision for Global Education</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              We envision a world where students from the Himalayas can connect, collaborate, 
              and learn alongside peers from diverse cultures and backgrounds.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center fade-in-section">
            <div>
              <h3 className="text-3xl font-bold text-[#2d3748] mb-8">Why Global Partnerships Matter</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1f514c]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="h-6 w-6 text-[#1f514c]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#2d3748] mb-2">Cultural Exchange</h4>
                    <p className="text-[#4a5568] leading-relaxed">
                      Students gain exposure to different cultures, perspectives, and ways of thinking, 
                      fostering global citizenship and cultural sensitivity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2d5a27]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Languages className="h-6 w-6 text-[#2d5a27]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#2d3748] mb-2">Language Development</h4>
                    <p className="text-[#4a5568] leading-relaxed">
                      Real-world opportunities to practice and improve language skills through 
                      authentic communication with native speakers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d4831f]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Lightbulb className="h-6 w-6 text-[#d4831f]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#2d3748] mb-2">Innovation & Collaboration</h4>
                    <p className="text-[#4a5568] leading-relaxed">
                      Joint projects and collaborative learning experiences that spark creativity 
                      and innovative problem-solving approaches.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c44569]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="h-6 w-6 text-[#c44569]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#2d3748] mb-2">Future Readiness</h4>
                    <p className="text-[#4a5568] leading-relaxed">
                      Preparation for higher education and careers in an increasingly 
                      interconnected and globalized world.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 interactive-card">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-[#1f514c]/10 rounded-3xl flex items-center justify-center mx-auto mb-4">
                    <Handshake className="h-10 w-10 text-[#1f514c]" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#2d3748] mb-2">Partnership Goals</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-[#4a5568]">
                    <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                    Student exchange programs
                  </li>
                  <li className="flex items-center gap-3 text-[#4a5568]">
                    <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                    Virtual classroom collaborations
                  </li>
                  <li className="flex items-center gap-3 text-[#4a5568]">
                    <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                    Joint research projects
                  </li>
                  <li className="flex items-center gap-3 text-[#4a5568]">
                    <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                    Teacher professional development
                  </li>
                  <li className="flex items-center gap-3 text-[#4a5568]">
                    <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                    Cultural immersion experiences
                  </li>
                  <li className="flex items-center gap-3 text-[#4a5568]">
                    <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                    International certification programs
                  </li>
                </ul>
              </Card>

              <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 text-center interactive-card">
                <div className="w-16 h-16 bg-[#2d5a27]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-[#2d5a27]" />
                </div>
                <h4 className="text-xl font-bold text-[#2d3748] mb-2">Coming Soon</h4>
                <p className="text-[#4a5568] mb-4">Partnership announcements</p>
                <Badge className="bg-[#2d5a27] text-white px-4 py-2">2027 Launch</Badge>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Types of Global Partnerships</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              We are actively developing various types of partnerships to provide 
              diverse global learning opportunities for our students.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-section">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden group interactive-card">
              <CardHeader className="p-8 pb-6 text-center">
                <div className="w-20 h-20 bg-[#1f514c]/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1f514c] transition-all duration-300">
                  <GraduationCap className="h-10 w-10 text-[#1f514c] group-hover:text-white transition-all duration-300 group-hover:scale-110" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">Sister Schools</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 text-center">
                <p className="text-[#4a5568] leading-relaxed mb-4">
                  Long-term partnerships with schools worldwide for regular student 
                  and teacher exchanges, joint curricula, and shared learning experiences.
                </p>
                <ul className="text-sm text-[#4a5568] space-y-2">
                  <li>• Regular video conferences</li>
                  <li>• Student pen pal programs</li>
                  <li>• Joint virtual projects</li>
                  <li>• Annual exchange visits</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden group interactive-card">
              <CardHeader className="p-8 pb-6 text-center">
                <div className="w-20 h-20 bg-[#2d5a27]/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#2d5a27] transition-all duration-300">
                  <BookOpen className="h-10 w-10 text-[#2d5a27] group-hover:text-white transition-all duration-300 group-hover:scale-110" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">University Collaborations</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 text-center">
                <p className="text-[#4a5568] leading-relaxed mb-4">
                  Partnerships with international universities for advanced coursework, 
                  research opportunities, and streamlined admission pathways.
                </p>
                <ul className="text-sm text-[#4a5568] space-y-2">
                  <li>• Dual enrollment programs</li>
                  <li>• Research mentorships</li>
                  <li>• University preparation</li>
                  <li>• Scholarship opportunities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden group interactive-card">
              <CardHeader className="p-8 pb-6 text-center">
                <div className="w-20 h-20 bg-[#d4831f]/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#d4831f] transition-all duration-300">
                  <Globe className="h-10 w-10 text-[#d4831f] group-hover:text-white transition-all duration-300 group-hover:scale-110" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">Cultural Organizations</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 text-center">
                <p className="text-[#4a5568] leading-relaxed mb-4">
                  Collaborations with cultural institutions, museums, and organizations 
                  to provide authentic cultural learning experiences.
                </p>
                <ul className="text-sm text-[#4a5568] space-y-2">
                  <li>• Virtual museum tours</li>
                  <li>• Cultural workshops</li>
                  <li>• Art exchange programs</li>
                  <li>• Festival celebrations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden group interactive-card">
              <CardHeader className="p-8 pb-6 text-center">
                <div className="w-20 h-20 bg-[#c44569]/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#c44569] transition-all duration-300">
                  <Languages className="h-10 w-10 text-[#c44569] group-hover:text-white transition-all duration-300 group-hover:scale-110" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">Language Institutes</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 text-center">
                <p className="text-[#4a5568] leading-relaxed mb-4">
                  Partnerships with language learning institutions for immersive 
                  language programs and international certification preparation.
                </p>
                <ul className="text-sm text-[#4a5568] space-y-2">
                  <li>• Native speaker sessions</li>
                  <li>• Language immersion camps</li>
                  <li>• Certification programs</li>
                  <li>• Cultural language context</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden group interactive-card">
              <CardHeader className="p-8 pb-6 text-center">
                <div className="w-20 h-20 bg-[#1f514c]/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1f514c] transition-all duration-300">
                  <Building className="h-10 w-10 text-[#1f514c] group-hover:text-white transition-all duration-300 group-hover:scale-110" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">International Organizations</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 text-center">
                <p className="text-[#4a5568] leading-relaxed mb-4">
                  Collaborations with UNESCO, UNICEF, and other international bodies 
                  for global citizenship and sustainable development programs.
                </p>
                <ul className="text-sm text-[#4a5568] space-y-2">
                  <li>• Global citizenship education</li>
                  <li>• Sustainability projects</li>
                  <li>• Model UN participation</li>
                  <li>• International competitions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden group interactive-card">
              <CardHeader className="p-8 pb-6 text-center">
                <div className="w-20 h-20 bg-[#2d5a27]/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#2d5a27] transition-all duration-300">
                  <Video className="h-10 w-10 text-[#2d5a27] group-hover:text-white transition-all duration-300 group-hover:scale-110" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">Virtual Exchanges</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 text-center">
                <p className="text-[#4a5568] leading-relaxed mb-4">
                  Technology-enabled partnerships that connect our students with peers 
                  worldwide through virtual classrooms and collaborative projects.
                </p>
                <ul className="text-sm text-[#4a5568] space-y-2">
                  <li>• Virtual reality field trips</li>
                  <li>• Online collaborative projects</li>
                  <li>• Digital pen pal programs</li>
                  <li>• Global classroom sessions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Benefits for Our Students</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              Our global partnerships provide tangible benefits that enhance learning 
              and prepare students for success in an interconnected world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 fade-in-section">
            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 interactive-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#1f514c]/10 rounded-2xl flex items-center justify-center">
                  <Users className="h-8 w-8 text-[#1f514c]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2d3748]">Personal Development</h3>
                  <p className="text-[#4a5568]">Character and confidence building</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                  Enhanced cultural sensitivity and empathy
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                  Improved communication and social skills
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                  Greater self-confidence and independence
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                  Broader worldview and perspective
                </li>
              </ul>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 interactive-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#2d5a27]/10 rounded-2xl flex items-center justify-center">
                  <Award className="h-8 w-8 text-[#2d5a27]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2d3748]">Academic Excellence</h3>
                  <p className="text-[#4a5568]">Enhanced learning outcomes</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#2d5a27] flex-shrink-0" />
                  Access to diverse teaching methodologies
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#2d5a27] flex-shrink-0" />
                  Exposure to different academic systems
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#2d5a27] flex-shrink-0" />
                  International certification opportunities
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#2d5a27] flex-shrink-0" />
                  Enhanced college application profiles
                </li>
              </ul>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 interactive-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#d4831f]/10 rounded-2xl flex items-center justify-center">
                  <Target className="h-8 w-8 text-[#d4831f]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2d3748]">Career Preparation</h3>
                  <p className="text-[#4a5568]">Future-ready skills development</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#d4831f] flex-shrink-0" />
                  Global network of contacts and friendships
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#d4831f] flex-shrink-0" />
                  International work experience opportunities
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#d4831f] flex-shrink-0" />
                  Enhanced employability in global markets
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#d4831f] flex-shrink-0" />
                  Leadership and adaptability skills
                </li>
              </ul>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 interactive-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#c44569]/10 rounded-2xl flex items-center justify-center">
                  <Heart className="h-8 w-8 text-[#c44569]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2d3748]">Lifelong Connections</h3>
                  <p className="text-[#4a5568]">Building global friendships</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#c44569] flex-shrink-0" />
                  International friendships and connections
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#c44569] flex-shrink-0" />
                  Alumni network across continents
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#c44569] flex-shrink-0" />
                  Cultural exchange opportunities
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#c44569] flex-shrink-0" />
                  Global citizenship mindset
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Development Timeline */}
      <section className="py-20 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Partnership Development Timeline</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              Our strategic approach to building meaningful global partnerships 
              that will benefit our students from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 fade-in-section">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#c44569]/10 rounded-3xl flex items-center justify-center mx-auto mb-6 interactive-card">
                <span className="text-2xl font-bold text-[#c44569]">2025</span>
              </div>
              <h3 className="text-xl font-bold text-[#2d3748] mb-4">School Opening</h3>
              <p className="text-[#4a5568] leading-relaxed">
                Himriti Public School opens with foundational programs and local community focus.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#1f514c]/10 rounded-3xl flex items-center justify-center mx-auto mb-6 interactive-card">
                <span className="text-2xl font-bold text-[#1f514c]">2026</span>
              </div>
              <h3 className="text-xl font-bold text-[#2d3748] mb-4">Partnership Planning</h3>
              <p className="text-[#4a5568] leading-relaxed">
                Identifying and establishing initial partnerships with schools and organizations worldwide.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#2d5a27]/10 rounded-3xl flex items-center justify-center mx-auto mb-6 interactive-card">
                <span className="text-2xl font-bold text-[#2d5a27]">2027</span>
              </div>
              <h3 className="text-xl font-bold text-[#2d3748] mb-4">Launch Programs</h3>
              <p className="text-[#4a5568] leading-relaxed">
                Implementing virtual exchanges and collaborative projects with our students.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#d4831f]/10 rounded-3xl flex items-center justify-center mx-auto mb-6 interactive-card">
                <span className="text-2xl font-bold text-[#d4831f]">2028+</span>
              </div>
              <h3 className="text-xl font-bold text-[#2d3748] mb-4">Expand & Integrate</h3>
              <p className="text-[#4a5568] leading-relaxed">
                Growing partnership network and comprehensive global education program.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-[#faf7f2] to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Join Our Global Community</h2>
          <p className="text-xl text-[#4a5568] mb-12 leading-relaxed">
            Give your child the opportunity to be part of a truly global educational experience. 
            Our partnerships will open doors to a world of possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/admissions">
              <AdmissionModal 
                schoolName="Himriti Public School"
                triggerText="Apply for Admission"
                triggerVariant="default"
              />
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-[#1f514c] text-[#1f514c] hover:bg-[#1f514c] hover:text-white px-10 py-4 text-lg h-14 btn-interactive">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}