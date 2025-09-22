"use client";

import { useEffect } from 'react';
import { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Target, 
  Users, 
  Award,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Globe,
  Heart,
  Brain,
  Zap
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'NEP 2020 - Himriti Public School | National Education Policy Implementation',
  description: 'Discover how Himriti Public School implements India\'s National Education Policy 2020. Holistic education, multidisciplinary learning, and future-ready curriculum in the Himalayas.',
  keywords: 'NEP 2020, National Education Policy, holistic education, multidisciplinary learning, competency-based education, Himriti Public School',
  openGraph: {
    title: 'NEP 2020 Implementation at Himriti Public School',
    description: 'Leading the way in implementing India\'s National Education Policy 2020 with innovative teaching methods and holistic development.',
    url: 'https://himriti.com/nep-2020',
    type: 'website',
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
              Future-Ready
              <br />
              <span className="text-[#1f514c]">Education</span>
            </h1>
            <p className="text-xl text-[#4a5568] mb-12 leading-relaxed max-w-3xl mx-auto">
              Himriti Public School is proud to be at the forefront of implementing India's National Education Policy 2020, 
              creating a transformative learning experience that prepares students for the challenges and opportunities of tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/admissions">
                <Button size="lg" className="bg-[#1f514c] hover:bg-[#2a6b65] text-white px-10 py-4 text-lg h-14 btn-interactive">
                  Join Our Vision
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/academics">
                <Button size="lg" variant="outline" className="border-[#1f514c] text-[#1f514c] hover:bg-[#1f514c] hover:text-white px-10 py-4 text-lg h-14 btn-interactive">
                  Explore Curriculum
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is NEP 2020 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-section">
              <Badge className="bg-[#2d5a27]/10 text-[#2d5a27] border-[#2d5a27]/20 mb-6 text-sm px-4 py-2">
                Understanding NEP 2020
              </Badge>
              <h2 className="text-4xl font-bold text-[#2d3748] mb-6">
                A Revolutionary Approach to Education
              </h2>
              <p className="text-lg text-[#4a5568] mb-6 leading-relaxed">
                The National Education Policy 2020 represents India's most comprehensive education reform in over three decades. 
                It envisions an education system that is more holistic, flexible, multidisciplinary, and aligned with the needs of the 21st century.
              </p>
              <p className="text-lg text-[#4a5568] mb-8 leading-relaxed">
                At Himriti Public School, we embrace this vision wholeheartedly, implementing innovative teaching methodologies 
                that foster critical thinking, creativity, and character development.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#2d5a27] flex-shrink-0" />
                  <span className="text-[#4a5568]">Holistic and multidisciplinary education</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#2d5a27] flex-shrink-0" />
                  <span className="text-[#4a5568]">Emphasis on foundational literacy and numeracy</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#2d5a27] flex-shrink-0" />
                  <span className="text-[#4a5568]">Flexible curriculum and pedagogical structure</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#2d5a27] flex-shrink-0" />
                  <span className="text-[#4a5568]">Integration of vocational education</span>
                </div>
              </div>
            </div>
            
            <div className="fade-in-section">
              <div className="bg-gradient-to-br from-[#1f514c] to-[#2d5a27] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Key Principles</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Heart className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Holistic Development</h4>
                      <p className="text-sm opacity-90">Nurturing all aspects of human potential</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Brain className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Critical Thinking</h4>
                      <p className="text-sm opacity-90">Developing analytical and reasoning skills</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Innovation</h4>
                      <p className="text-sm opacity-90">Fostering creativity and entrepreneurship</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Global Citizenship</h4>
                      <p className="text-sm opacity-90">Preparing students for a connected world</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation at Himriti */}
      <section className="py-20 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">NEP 2020 at Himriti</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              We have carefully designed our curriculum and teaching methodologies to align with 
              and exceed the expectations set by the National Education Policy 2020.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Foundational Stage */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden interactive-card fade-in-section">
              <CardHeader className="p-8 pb-6">
                <div className="w-16 h-16 bg-[#1f514c]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-[#1f514c]" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">Foundational Stage</CardTitle>
                <Badge className="bg-[#1f514c] text-white w-fit">Ages 3-8</Badge>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-[#4a5568] leading-relaxed mb-4">
                  Play-based learning with focus on developing foundational literacy, numeracy, 
                  and cognitive capacities.
                </p>
                <ul className="space-y-2 text-sm text-[#4a5568]">
                  <li>• Activity-based learning</li>
                  <li>• Mother tongue instruction</li>
                  <li>• Sensory development</li>
                  <li>• Social-emotional skills</li>
                </ul>
              </CardContent>
            </Card>

            {/* Preparatory Stage */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden interactive-card fade-in-section">
              <CardHeader className="p-8 pb-6">
                <div className="w-16 h-16 bg-[#2d5a27]/10 rounded-2xl flex items-center justify-center mb-6">
                  <BookOpen className="h-8 w-8 text-[#2d5a27]" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">Preparatory Stage</CardTitle>
                <Badge className="bg-[#2d5a27] text-white w-fit">Ages 8-11</Badge>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-[#4a5568] leading-relaxed mb-4">
                  Discovery of relations between abstract concepts and real-life situations 
                  through experiential learning.
                </p>
                <ul className="space-y-2 text-sm text-[#4a5568]">
                  <li>• Experiential learning</li>
                  <li>• Art-integrated education</li>
                  <li>• Sports integration</li>
                  <li>• Multilingual approach</li>
                </ul>
              </CardContent>
            </Card>

            {/* Middle Stage */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden interactive-card fade-in-section">
              <CardHeader className="p-8 pb-6">
                <div className="w-16 h-16 bg-[#d4831f]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-[#d4831f]" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">Middle Stage</CardTitle>
                <Badge className="bg-[#d4831f] text-white w-fit">Ages 11-14</Badge>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-[#4a5568] leading-relaxed mb-4">
                  Subject-oriented pedagogical and curricular style with greater depth, 
                  critical thinking, and life aspirations.
                </p>
                <ul className="space-y-2 text-sm text-[#4a5568]">
                  <li>• Abstract thinking development</li>
                  <li>• Vocational exposure</li>
                  <li>• Scientific temper</li>
                  <li>• Democratic participation</li>
                </ul>
              </CardContent>
            </Card>

            {/* Secondary Stage */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden interactive-card fade-in-section md:col-span-2 lg:col-span-3">
              <CardHeader className="p-8 pb-6">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-[#c44569]/10 rounded-2xl flex items-center justify-center">
                    <Award className="h-8 w-8 text-[#c44569]" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-[#2d3748] mb-2">Secondary Stage</CardTitle>
                    <Badge className="bg-[#c44569] text-white w-fit">Ages 14-18</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-[#4a5568] leading-relaxed mb-4">
                      Multidisciplinary study with greater depth, critical thinking, attention to life aspirations, 
                      and flexibility in subject choices with faculty and institutional support.
                    </p>
                    <ul className="space-y-2 text-sm text-[#4a5568]">
                      <li>• Multidisciplinary curriculum</li>
                      <li>• Choice-based credit system</li>
                      <li>• Research and innovation projects</li>
                      <li>• Career guidance and counseling</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2d3748] mb-3">Key Features:</h4>
                    <ul className="space-y-2 text-sm text-[#4a5568]">
                      <li>• No rigid separation between curricular and extracurricular</li>
                      <li>• Integration of vocational education</li>
                      <li>• Internships and community service</li>
                      <li>• Portfolio-based assessment</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Assessment and Evaluation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Assessment Revolution</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              Moving beyond traditional testing to comprehensive evaluation that measures 
              true learning and development.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-section">
              <h3 className="text-2xl font-bold text-[#2d3748] mb-6">Competency-Based Assessment</h3>
              <p className="text-lg text-[#4a5568] mb-6 leading-relaxed">
                Our assessment approach focuses on understanding, application, and analysis rather than rote memorization. 
                We evaluate students' progress through multiple methods that capture their true potential.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-[#1f514c] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#2d3748]">Continuous Assessment</h4>
                    <p className="text-[#4a5568] text-sm">Regular evaluation throughout the learning process</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-[#1f514c] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#2d3748]">Portfolio-Based Evaluation</h4>
                    <p className="text-[#4a5568] text-sm">Comprehensive collection of student work and progress</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-[#1f514c] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#2d3748]">Peer and Self-Assessment</h4>
                    <p className="text-[#4a5568] text-sm">Developing metacognitive skills and self-reflection</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-[#1f514c] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#2d3748]">Project-Based Assessment</h4>
                    <p className="text-[#4a5568] text-sm">Real-world application of knowledge and skills</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="fade-in-section">
              <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8">
                <h3 className="text-xl font-bold text-[#2d3748] mb-6">Assessment Components</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-[#4a5568]">Continuous Assessment</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-gray-200 rounded-full">
                        <div className="w-16 h-2 bg-[#1f514c] rounded-full"></div>
                      </div>
                      <span className="text-sm text-[#4a5568]">40%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#4a5568]">Project Work</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-gray-200 rounded-full">
                        <div className="w-12 h-2 bg-[#2d5a27] rounded-full"></div>
                      </div>
                      <span className="text-sm text-[#4a5568]">30%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#4a5568]">Periodic Tests</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-gray-200 rounded-full">
                        <div className="w-8 h-2 bg-[#d4831f] rounded-full"></div>
                      </div>
                      <span className="text-sm text-[#4a5568]">20%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#4a5568]">Portfolio & Participation</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-gray-200 rounded-full">
                        <div className="w-4 h-2 bg-[#c44569] rounded-full"></div>
                      </div>
                      <span className="text-sm text-[#4a5568]">10%</span>
                    </div>
                  </div>
                </div>
              </Card>
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
              The NEP 2020 framework ensures our students receive education that prepares them 
              for success in the 21st century and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center fade-in-section">
              <div className="w-16 h-16 bg-[#1f514c]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-[#1f514c]" />
              </div>
              <h3 className="text-lg font-semibold text-[#2d3748] mb-2">Creative Thinking</h3>
              <p className="text-[#4a5568] text-sm">Developing innovative problem-solving abilities</p>
            </div>

            <div className="text-center fade-in-section">
              <div className="w-16 h-16 bg-[#2d5a27]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-[#2d5a27]" />
              </div>
              <h3 className="text-lg font-semibold text-[#2d3748] mb-2">Collaboration</h3>
              <p className="text-[#4a5568] text-sm">Building teamwork and communication skills</p>
            </div>

            <div className="text-center fade-in-section">
              <div className="w-16 h-16 bg-[#d4831f]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-[#d4831f]" />
              </div>
              <h3 className="text-lg font-semibold text-[#2d3748] mb-2">Goal Setting</h3>
              <p className="text-[#4a5568] text-sm">Learning to set and achieve personal objectives</p>
            </div>

            <div className="text-center fade-in-section">
              <div className="w-16 h-16 bg-[#c44569]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-[#c44569]" />
              </div>
              <h3 className="text-lg font-semibold text-[#2d3748] mb-2">Global Awareness</h3>
              <p className="text-[#4a5568] text-sm">Understanding diverse cultures and perspectives</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-[#faf7f2] to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Experience NEP 2020 in Action</h2>
          <p className="text-xl text-[#4a5568] mb-12 leading-relaxed">
            Join Himriti Public School and be part of India's educational transformation. 
            Give your child the advantage of future-ready education.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/admissions">
              <Button size="lg" className="bg-[#1f514c] hover:bg-[#2a6b65] text-white px-10 py-4 text-lg h-14 btn-interactive">
                Apply for Admission
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/academics">
              <Button size="lg" variant="outline" className="border-[#1f514c] text-[#1f514c] hover:bg-[#1f514c] hover:text-white px-10 py-4 text-lg h-14 btn-interactive">
                Explore Curriculum
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}