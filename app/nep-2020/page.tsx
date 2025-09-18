"use client";

import { useEffect } from 'react';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PageLayout from '@/components/layout/PageLayout';
import { 
  BookOpen, 
  GraduationCap, 
  Users, 
  Award, 
  ChevronRight,
  ArrowRight,
  CheckCircle,
  Target,
  Lightbulb,
  Globe,
  Heart,
  Building,
  Palette,
  Music,
  Calculator,
  Languages,
  Atom,
  TreePine,
  Brain,
  Puzzle,
  Star
} from 'lucide-react';
import Link from 'next/link';
import AdmissionModal from '@/components/admission/AdmissionModal';

export const metadata: Metadata = {
  title: 'NEP 2020 Implementation - Transforming Education | Himriti Public School',
  description: 'Discover how Himriti Public School implements National Education Policy 2020 with holistic development, flexible curriculum, and competency-based assessment in Rampur Bushahr.',
  keywords: 'NEP 2020 implementation, National Education Policy, holistic education, flexible curriculum, competency-based assessment, Himriti NEP 2020, modern education framework',
  openGraph: {
    title: 'NEP 2020 Implementation - Transforming Education | Himriti Public School',
    description: 'Discover how Himriti Public School implements National Education Policy 2020 with holistic development, flexible curriculum, and competency-based assessment.',
    url: 'https://himriti.com/nep-2020',
  },
  twitter: {
    title: 'NEP 2020 Implementation - Transforming Education | Himriti Public School',
    description: 'Discover how Himriti Public School implements National Education Policy 2020 with holistic development, flexible curriculum, and competency-based assessment.',
  },
};

export default function NEP2020Page() {
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
              National Education Policy 2020
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-[#2d3748] mb-8 leading-tight">
              Transforming Education
              <br />
              <span className="text-[#1f514c]">for the Future</span>
            </h1>
            <p className="text-xl text-[#4a5568] mb-12 leading-relaxed max-w-3xl mx-auto">
              At Himriti Public School, we are proud to be at the forefront of implementing 
              India's National Education Policy 2020, creating a holistic and flexible 
              learning environment that prepares students for the 21st century.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-[#1f514c] hover:bg-[#2a6b65] text-white px-10 py-4 text-lg h-14 btn-interactive">
                Learn More
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/academics">
                <Button size="lg" variant="outline" className="border-[#1f514c] text-[#1f514c] hover:bg-[#1f514c] hover:text-white px-10 py-4 text-lg h-14 btn-interactive">
                  View Academics
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEP 2020 Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">What is NEP 2020?</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              The National Education Policy 2020 is India's comprehensive framework for 
              transforming education, emphasizing holistic development, critical thinking, 
              and preparing students for a rapidly changing world.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center fade-in-section">
            <div>
              <h3 className="text-3xl font-bold text-[#2d3748] mb-8">Key Principles of NEP 2020</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1f514c]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Brain className="h-6 w-6 text-[#1f514c]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#2d3748] mb-2">Holistic Development</h4>
                    <p className="text-[#4a5568] leading-relaxed">
                      Focus on cognitive, physical, social, emotional, and moral development 
                      of every student through integrated learning approaches.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2d5a27]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Puzzle className="h-6 w-6 text-[#2d5a27]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#2d3748] mb-2">Flexibility & Choice</h4>
                    <p className="text-[#4a5568] leading-relaxed">
                      Multiple pathways and flexible curriculum allowing students to 
                      choose subjects based on their interests and career aspirations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d4831f]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Lightbulb className="h-6 w-6 text-[#d4831f]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#2d3748] mb-2">Critical Thinking</h4>
                    <p className="text-[#4a5568] leading-relaxed">
                      Emphasis on analytical thinking, creativity, and problem-solving 
                      skills rather than rote memorization.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c44569]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="h-6 w-6 text-[#c44569]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#2d3748] mb-2">Cultural Rootedness</h4>
                    <p className="text-[#4a5568] leading-relaxed">
                      Deep connection to Indian culture, values, and traditions while 
                      maintaining a global outlook and perspective.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 interactive-card">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-[#1f514c]/10 rounded-3xl flex items-center justify-center mx-auto mb-4">
                    <Target className="h-10 w-10 text-[#1f514c]" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#2d3748] mb-2">Our Commitment</h4>
                </div>
                <p className="text-[#4a5568] leading-relaxed text-center">
                  Himriti Public School is fully committed to implementing NEP 2020 
                  principles from day one, ensuring our students receive education 
                  that is relevant, engaging, and future-ready.
                </p>
              </Card>

              <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 interactive-card">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-[#2d5a27]/10 rounded-3xl flex items-center justify-center mx-auto mb-4">
                    <Star className="h-10 w-10 text-[#2d5a27]" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#2d3748] mb-2">Innovation Focus</h4>
                </div>
                <p className="text-[#4a5568] leading-relaxed text-center">
                  We embrace innovative teaching methods, technology integration, 
                  and experiential learning to make education more effective and enjoyable.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* NEP Implementation at Himriti */}
      <section className="py-20 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">NEP 2020 Implementation at Himriti</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              We have carefully designed our curriculum and teaching methodologies 
              to align with NEP 2020 guidelines, ensuring comprehensive implementation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-section">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden group interactive-card">
              <CardHeader className="p-8 pb-6 text-center">
                <div className="w-20 h-20 bg-[#1f514c]/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1f514c] transition-all duration-300">
                  <BookOpen className="h-10 w-10 text-[#1f514c] group-hover:text-white transition-all duration-300 group-hover:scale-110" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">5+3+3+4 Structure</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 text-center">
                <p className="text-[#4a5568] leading-relaxed mb-4">
                  Foundational Stage (3-8 years), Preparatory (8-11), Middle (11-14), 
                  and Secondary Stage (14-18) with age-appropriate pedagogy.
                </p>
                <ul className="text-sm text-[#4a5568] space-y-2">
                  <li>• Play-based early learning</li>
                  <li>• Experiential learning</li>
                  <li>• Subject flexibility</li>
                  <li>• Skill development focus</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden group interactive-card">
              <CardHeader className="p-8 pb-6 text-center">
                <div className="w-20 h-20 bg-[#2d5a27]/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#2d5a27] transition-all duration-300">
                  <Languages className="h-10 w-10 text-[#2d5a27] group-hover:text-white transition-all duration-300 group-hover:scale-110" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">Multilingual Education</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 text-center">
                <p className="text-[#4a5568] leading-relaxed mb-4">
                  English as primary medium of instruction along with Hindi, 
                  with strong foundation in multiple languages.
                </p>
                <ul className="text-sm text-[#4a5568] space-y-2">
                  <li>• English as primary medium</li>
                  <li>• Hindi language development</li>
                  <li>• Sanskrit studies</li>
                  <li>• Foreign language options</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden group interactive-card">
              <CardHeader className="p-8 pb-6 text-center">
                <div className="w-20 h-20 bg-[#d4831f]/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#d4831f] transition-all duration-300">
                  <Palette className="h-10 w-10 text-[#d4831f] group-hover:text-white transition-all duration-300 group-hover:scale-110" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">Arts Integration</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 text-center">
                <p className="text-[#4a5568] leading-relaxed mb-4">
                  Integration of arts, crafts, and sports in curriculum to develop 
                  creativity, aesthetic sense, and physical fitness.
                </p>
                <ul className="text-sm text-[#4a5568] space-y-2">
                  <li>• Visual arts programs</li>
                  <li>• Music and dance</li>
                  <li>• Traditional crafts</li>
                  <li>• Sports and yoga</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden group interactive-card">
              <CardHeader className="p-8 pb-6 text-center">
                <div className="w-20 h-20 bg-[#c44569]/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#c44569] transition-all duration-300">
                  <Atom className="h-10 w-10 text-[#c44569] group-hover:text-white transition-all duration-300 group-hover:scale-110" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">STEM Focus</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 text-center">
                <p className="text-[#4a5568] leading-relaxed mb-4">
                  Strong emphasis on Science, Technology, Engineering, and Mathematics 
                  with hands-on learning and practical applications.
                </p>
                <ul className="text-sm text-[#4a5568] space-y-2">
                  <li>• Modern laboratories</li>
                  <li>• Coding and robotics</li>
                  <li>• Scientific method</li>
                  <li>• Innovation projects</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden group interactive-card">
              <CardHeader className="p-8 pb-6 text-center">
                <div className="w-20 h-20 bg-[#1f514c]/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1f514c] transition-all duration-300">
                  <Award className="h-10 w-10 text-[#1f514c] group-hover:text-white transition-all duration-300 group-hover:scale-110" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">Competency-Based Assessment</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 text-center">
                <p className="text-[#4a5568] leading-relaxed mb-4">
                  Regular and formative assessment focusing on learning outcomes 
                  rather than high-stakes examinations.
                </p>
                <ul className="text-sm text-[#4a5568] space-y-2">
                  <li>• Continuous evaluation</li>
                  <li>• Portfolio assessment</li>
                  <li>• Peer assessment</li>
                  <li>• Self-reflection</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden group interactive-card">
              <CardHeader className="p-8 pb-6 text-center">
                <div className="w-20 h-20 bg-[#2d5a27]/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#2d5a27] transition-all duration-300">
                  <TreePine className="h-10 w-10 text-[#2d5a27] group-hover:text-white transition-all duration-300 group-hover:scale-110" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">Environmental Education</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 text-center">
                <p className="text-[#4a5568] leading-relaxed mb-4">
                  Strong focus on environmental awareness, sustainability, 
                  and connection with nature through our Himalayan setting.
                </p>
                <ul className="text-sm text-[#4a5568] space-y-2">
                  <li>• Outdoor learning</li>
                  <li>• Sustainability projects</li>
                  <li>• Nature conservation</li>
                  <li>• Eco-friendly practices</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits for Students */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Benefits for Our Students</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              NEP 2020 implementation at Himriti ensures our students receive education 
              that is comprehensive, relevant, and prepares them for future success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 fade-in-section">
            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 interactive-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#1f514c]/10 rounded-2xl flex items-center justify-center">
                  <Users className="h-8 w-8 text-[#1f514c]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2d3748]">Holistic Development</h3>
                  <p className="text-[#4a5568]">Complete personality development</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                  Cognitive and emotional intelligence
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                  Social and communication skills
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                  Physical fitness and wellness
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                  Ethical and moral values
                </li>
              </ul>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 interactive-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#2d5a27]/10 rounded-2xl flex items-center justify-center">
                  <Globe className="h-8 w-8 text-[#2d5a27]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2d3748]">Global Competence</h3>
                  <p className="text-[#4a5568]">21st-century skills development</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#2d5a27] flex-shrink-0" />
                  Critical thinking and problem-solving
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#2d5a27] flex-shrink-0" />
                  Digital literacy and technology skills
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#2d5a27] flex-shrink-0" />
                  Cross-cultural understanding
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#2d5a27] flex-shrink-0" />
                  Innovation and creativity
                </li>
              </ul>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 interactive-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#d4831f]/10 rounded-2xl flex items-center justify-center">
                  <Target className="h-8 w-8 text-[#d4831f]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2d3748]">Personalized Learning</h3>
                  <p className="text-[#4a5568]">Individual growth focus</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#d4831f] flex-shrink-0" />
                  Learning at individual pace
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#d4831f] flex-shrink-0" />
                  Multiple intelligence recognition
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#d4831f] flex-shrink-0" />
                  Choice in subjects and activities
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#d4831f] flex-shrink-0" />
                  Career guidance and counseling
                </li>
              </ul>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 interactive-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#c44569]/10 rounded-2xl flex items-center justify-center">
                  <Heart className="h-8 w-8 text-[#c44569]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2d3748]">Cultural Pride</h3>
                  <p className="text-[#4a5568]">Rooted in Indian values</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#c44569] flex-shrink-0" />
                  Deep understanding of Indian heritage
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#c44569] flex-shrink-0" />
                  Respect for diversity and traditions
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#c44569] flex-shrink-0" />
                  Strong moral and ethical foundation
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#c44569] flex-shrink-0" />
                  Connection to local community
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-[#faf7f2] to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Experience NEP 2020 at Himriti</h2>
          <p className="text-xl text-[#4a5568] mb-12 leading-relaxed">
            Join us in this educational transformation. Give your child the advantage 
            of learning in an environment designed for the future.
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