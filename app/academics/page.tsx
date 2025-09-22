"use client";

import { useEffect } from 'react';
import { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Users, 
  Award, 
  Target,
  ChevronRight,
  Microscope,
  Calculator,
  Globe,
  Palette,
  Music,
  Dumbbell,
  Code,
  Languages
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Academics - Himriti Public School | K-12 Curriculum & Programs',
  description: 'Explore our comprehensive K-12 academic programs at Himriti Public School. NEP 2020 aligned curriculum, innovative teaching methods, and holistic education in the Himalayas.',
  keywords: 'Himriti academics, K-12 curriculum, NEP 2020, primary school, middle school, high school, STEM education, liberal arts, extracurricular activities',
  openGraph: {
    title: 'Academic Excellence at Himriti Public School',
    description: 'Discover our innovative K-12 curriculum designed to nurture critical thinking, creativity, and global citizenship in the heart of the Himalayas.',
    url: 'https://himriti.com/academics',
    type: 'website',
  },
};

export default function AcademicsPage() {
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
              Academic Excellence
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-[#2d3748] mb-8 leading-tight">
              Nurturing
              <br />
              <span className="text-[#1f514c]">Brilliant Minds</span>
            </h1>
            <p className="text-xl text-[#4a5568] mb-12 leading-relaxed max-w-3xl mx-auto">
              Our comprehensive K-12 curriculum combines academic rigor with creative exploration, 
              preparing students for success in an ever-changing world while fostering a lifelong love of learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/admissions">
                <Button size="lg" className="bg-[#1f514c] hover:bg-[#2a6b65] text-white px-10 py-4 text-lg h-14 btn-interactive">
                  Apply Now
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

      {/* Academic Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Academic Programs</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              Our curriculum is designed to challenge, inspire, and prepare students for the future 
              while honoring our cultural heritage and values.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Primary School */}
            <Card className="bg-[#faf7f2] border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden interactive-card fade-in-section" id="primary">
              <CardHeader className="p-8 pb-6">
                <div className="w-16 h-16 bg-[#1f514c]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-[#1f514c]" />
                </div>
                <CardTitle className="text-2xl text-[#2d3748] mb-2">Primary School</CardTitle>
                <Badge className="bg-[#1f514c] text-white w-fit">Grades K-5</Badge>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-[#4a5568] leading-relaxed mb-6">
                  Building strong foundations in literacy, numeracy, and social skills through 
                  play-based learning and hands-on exploration.
                </p>
                <ul className="space-y-2 text-sm text-[#4a5568]">
                  <li>• Foundational literacy and numeracy</li>
                  <li>• Creative arts and expression</li>
                  <li>• Environmental awareness</li>
                  <li>• Social-emotional learning</li>
                  <li>• Multilingual development</li>
                </ul>
              </CardContent>
            </Card>

            {/* Middle School */}
            <Card className="bg-[#faf7f2] border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden interactive-card fade-in-section" id="middle">
              <CardHeader className="p-8 pb-6">
                <div className="w-16 h-16 bg-[#2d5a27]/10 rounded-2xl flex items-center justify-center mb-6">
                  <BookOpen className="h-8 w-8 text-[#2d5a27]" />
                </div>
                <CardTitle className="text-2xl text-[#2d3748] mb-2">Middle School</CardTitle>
                <Badge className="bg-[#2d5a27] text-white w-fit">Grades 6-8</Badge>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-[#4a5568] leading-relaxed mb-6">
                  Developing critical thinking, research skills, and subject specialization 
                  while fostering independence and leadership qualities.
                </p>
                <ul className="space-y-2 text-sm text-[#4a5568]">
                  <li>• Advanced STEM curriculum</li>
                  <li>• Research and inquiry methods</li>
                  <li>• Leadership development</li>
                  <li>• Cultural studies</li>
                  <li>• Technology integration</li>
                </ul>
              </CardContent>
            </Card>

            {/* High School */}
            <Card className="bg-[#faf7f2] border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden interactive-card fade-in-section" id="high">
              <CardHeader className="p-8 pb-6">
                <div className="w-16 h-16 bg-[#d4831f]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-[#d4831f]" />
                </div>
                <CardTitle className="text-2xl text-[#2d3748] mb-2">High School</CardTitle>
                <Badge className="bg-[#d4831f] text-white w-fit">Grades 9-12</Badge>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-[#4a5568] leading-relaxed mb-6">
                  Preparing students for higher education and careers through rigorous academics, 
                  specialized tracks, and real-world applications.
                </p>
                <ul className="space-y-2 text-sm text-[#4a5568]">
                  <li>• College preparatory courses</li>
                  <li>• Career pathway programs</li>
                  <li>• Advanced placement options</li>
                  <li>• Internship opportunities</li>
                  <li>• Global citizenship projects</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Subjects */}
      <section className="py-20 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Core Subjects</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              Our comprehensive curriculum covers all essential subjects with innovative teaching methods 
              and real-world applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center fade-in-section">
              <div className="w-16 h-16 bg-[#1f514c]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-[#1f514c]" />
              </div>
              <h3 className="text-lg font-semibold text-[#2d3748] mb-2">Mathematics</h3>
              <p className="text-[#4a5568] text-sm">Problem-solving and analytical thinking</p>
            </div>

            <div className="text-center fade-in-section">
              <div className="w-16 h-16 bg-[#2d5a27]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Microscope className="h-8 w-8 text-[#2d5a27]" />
              </div>
              <h3 className="text-lg font-semibold text-[#2d3748] mb-2">Sciences</h3>
              <p className="text-[#4a5568] text-sm">Inquiry-based scientific exploration</p>
            </div>

            <div className="text-center fade-in-section">
              <div className="w-16 h-16 bg-[#d4831f]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Languages className="h-8 w-8 text-[#d4831f]" />
              </div>
              <h3 className="text-lg font-semibold text-[#2d3748] mb-2">Languages</h3>
              <p className="text-[#4a5568] text-sm">Multilingual communication skills</p>
            </div>

            <div className="text-center fade-in-section">
              <div className="w-16 h-16 bg-[#c44569]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-[#c44569]" />
              </div>
              <h3 className="text-lg font-semibold text-[#2d3748] mb-2">Social Studies</h3>
              <p className="text-[#4a5568] text-sm">Cultural awareness and global citizenship</p>
            </div>
          </div>
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section className="py-20 bg-white" id="extracurricular">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Beyond the Classroom</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              Our extensive extracurricular program helps students discover their passions, 
              develop leadership skills, and build lasting friendships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-6 interactive-card fade-in-section">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#1f514c]/10 rounded-xl flex items-center justify-center">
                  <Dumbbell className="h-6 w-6 text-[#1f514c]" />
                </div>
                <h3 className="text-xl font-semibold text-[#2d3748]">Sports & Athletics</h3>
              </div>
              <p className="text-[#4a5568] mb-4">Physical fitness, teamwork, and competitive spirit through various sports programs.</p>
              <ul className="text-sm text-[#4a5568] space-y-1">
                <li>• Mountain trekking and hiking</li>
                <li>• Traditional games</li>
                <li>• Team sports</li>
                <li>• Yoga and wellness</li>
              </ul>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-6 interactive-card fade-in-section">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#2d5a27]/10 rounded-xl flex items-center justify-center">
                  <Palette className="h-6 w-6 text-[#2d5a27]" />
                </div>
                <h3 className="text-xl font-semibold text-[#2d3748]">Arts & Culture</h3>
              </div>
              <p className="text-[#4a5568] mb-4">Creative expression through visual arts, performing arts, and cultural activities.</p>
              <ul className="text-sm text-[#4a5568] space-y-1">
                <li>• Traditional Himalayan arts</li>
                <li>• Music and dance</li>
                <li>• Drama and theater</li>
                <li>• Visual arts</li>
              </ul>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-6 interactive-card fade-in-section">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#d4831f]/10 rounded-xl flex items-center justify-center">
                  <Code className="h-6 w-6 text-[#d4831f]" />
                </div>
                <h3 className="text-xl font-semibold text-[#2d3748]">Technology & Innovation</h3>
              </div>
              <p className="text-[#4a5568] mb-4">21st-century skills through coding, robotics, and digital creativity.</p>
              <ul className="text-sm text-[#4a5568] space-y-1">
                <li>• Programming and coding</li>
                <li>• Robotics club</li>
                <li>• Digital media</li>
                <li>• Innovation projects</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* NEP 2020 Alignment */}
      <section className="py-20 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-section">
              <Badge className="bg-[#1f514c]/10 text-[#1f514c] border-[#1f514c]/20 mb-6 text-sm px-4 py-2">
                NEP 2020 Aligned
              </Badge>
              <h2 className="text-4xl font-bold text-[#2d3748] mb-6">
                Future-Ready Education
              </h2>
              <p className="text-lg text-[#4a5568] mb-6 leading-relaxed">
                Our curriculum is fully aligned with India's National Education Policy 2020, 
                ensuring students receive education that meets the highest national standards 
                while preparing them for global opportunities.
              </p>
              <ul className="space-y-3 text-[#4a5568] mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#1f514c] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Holistic and multidisciplinary approach</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#1f514c] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Critical thinking and creativity focus</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#1f514c] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Flexible curriculum structure</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#1f514c] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Continuous assessment and evaluation</span>
                </li>
              </ul>
              <Link href="/nep-2020">
                <Button className="bg-[#1f514c] hover:bg-[#2a6b65] text-white">
                  Learn More About NEP 2020
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="fade-in-section">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#2d3748] mb-6">Key Features</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#1f514c]/10 rounded-xl flex items-center justify-center">
                      <Target className="h-6 w-6 text-[#1f514c]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2d3748]">Competency-Based Learning</h4>
                      <p className="text-sm text-[#4a5568]">Focus on skills and understanding</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#2d5a27]/10 rounded-xl flex items-center justify-center">
                      <Users className="h-6 w-6 text-[#2d5a27]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2d3748]">Collaborative Learning</h4>
                      <p className="text-sm text-[#4a5568]">Peer-to-peer knowledge sharing</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#d4831f]/10 rounded-xl flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-[#d4831f]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2d3748]">Experiential Learning</h4>
                      <p className="text-sm text-[#4a5568]">Learning through experience and practice</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-[#faf7f2] to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Ready to Begin the Journey?</h2>
          <p className="text-xl text-[#4a5568] mb-12 leading-relaxed">
            Give your child the gift of exceptional education in the heart of the Himalayas. 
            Join our founding class opening in April 2026.
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
                Schedule Campus Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}