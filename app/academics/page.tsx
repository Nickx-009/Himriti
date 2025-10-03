'use client';

import { useEffect } from 'react';
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
  Microscope,
  Palette,
  Music,
  Calculator,
  Languages,
  Atom,
  TreePine,
  Heart,
  Building,
} from 'lucide-react';
import Link from 'next/link';

export default function AcademicsPage() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-section');
    fadeElements.forEach(el => observer.observe(el));

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
              Comprehensive
              <br />
              <span className="text-[#1f514c]">K-12 Education</span>
            </h1>
            <p className="text-xl text-[#4a5568] mb-12 leading-relaxed max-w-3xl mx-auto">
              Our rigorous academic program combines traditional excellence with innovative teaching
              methods, preparing students for success in higher education and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-[#1f514c] hover:bg-[#2a6b65] text-white px-10 py-4 text-lg h-14 btn-interactive"
              >
                Download Curriculum
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#1f514c] text-[#1f514c] hover:bg-[#1f514c] hover:text-white px-10 py-4 text-lg h-14 btn-interactive"
                >
                  Schedule Visit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Grade Levels Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">
              Academic Programs by Grade Level
            </h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              Each grade level is carefully designed to build upon previous learning while
              introducing age-appropriate challenges and opportunities for growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 fade-in-section">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden interactive-card">
              <CardHeader className="p-8 pb-6">
                <div className="w-16 h-16 bg-[#1f514c]/10 rounded-2xl flex items-center justify-center mb-6">
                  <BookOpen className="h-8 w-8 text-[#1f514c]" />
                </div>
                <CardTitle className="text-2xl text-[#2d3748] mb-4">Primary School</CardTitle>
                <Badge className="bg-[#1f514c]/10 text-[#1f514c] w-fit">Grades K-5</Badge>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-[#4a5568] mb-6 leading-relaxed">
                  Foundation years focused on building strong literacy, numeracy, and social skills
                  through play-based and experiential learning approaches.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-[#4a5568]">
                    <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                    Phonics-based reading program
                  </li>
                  <li className="flex items-center gap-3 text-[#4a5568]">
                    <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                    Hands-on mathematics learning
                  </li>
                  <li className="flex items-center gap-3 text-[#4a5568]">
                    <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                    Science exploration activities
                  </li>
                  <li className="flex items-center gap-3 text-[#4a5568]">
                    <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                    Creative arts integration
                  </li>
                  <li className="flex items-center gap-3 text-[#4a5568]">
                    <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                    Social-emotional learning
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden interactive-card">
              <CardHeader className="p-8 pb-6">
                <div className="w-16 h-16 bg-[#2d5a27]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-[#2d5a27]" />
                </div>
                <CardTitle className="text-2xl text-[#2d3748] mb-4">Middle School</CardTitle>
                <Badge className="bg-[#2d5a27]/10 text-[#2d5a27] w-fit">Grades 6-8</Badge>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-[#4a5568] mb-6 leading-relaxed">
                  Transitional years emphasizing academic rigor, critical thinking, and exploration
                  of individual interests through specialized programs.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-[#4a5568]">
                    <CheckCircle className="h-5 w-5 text-[#2d5a27] flex-shrink-0" />
                    Advanced STEM curriculum
                  </li>
                  <li className="flex items-center gap-3 text-[#4a5568]">
                    <CheckCircle className="h-5 w-5 text-[#2d5a27] flex-shrink-0" />
                    Project-based learning
                  </li>
                  <li className="flex items-center gap-3 text-[#4a5568]">
                    <CheckCircle className="h-5 w-5 text-[#2d5a27] flex-shrink-0" />
                    Leadership development
                  </li>
                  <li className="flex items-center gap-3 text-[#4a5568]">
                    <CheckCircle className="h-5 w-5 text-[#2d5a27] flex-shrink-0" />
                    Foreign language studies
                  </li>
                  <li className="flex items-center gap-3 text-[#4a5568]">
                    <CheckCircle className="h-5 w-5 text-[#2d5a27] flex-shrink-0" />
                    Community service projects
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden interactive-card">
              <CardHeader className="p-8 pb-6">
                <div className="w-16 h-16 bg-[#d4831f]/10 rounded-2xl flex items-center justify-center mb-6">
                  <GraduationCap className="h-8 w-8 text-[#d4831f]" />
                </div>
                <CardTitle className="text-2xl text-[#2d3748] mb-4">High School</CardTitle>
                <Badge className="bg-[#d4831f]/10 text-[#d4831f] w-fit">Grades 9-12</Badge>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-[#4a5568] mb-6 leading-relaxed">
                  College preparatory program with advanced coursework, career guidance, and
                  opportunities for specialization in chosen academic fields.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-[#4a5568]">
                    <CheckCircle className="h-5 w-5 text-[#d4831f] flex-shrink-0" />
                    Advanced Placement courses
                  </li>
                  <li className="flex items-center gap-3 text-[#4a5568]">
                    <CheckCircle className="h-5 w-5 text-[#d4831f] flex-shrink-0" />
                    University preparation
                  </li>
                  <li className="flex items-center gap-3 text-[#4a5568]">
                    <CheckCircle className="h-5 w-5 text-[#d4831f] flex-shrink-0" />
                    Career counseling
                  </li>
                  <li className="flex items-center gap-3 text-[#4a5568]">
                    <CheckCircle className="h-5 w-5 text-[#d4831f] flex-shrink-0" />
                    Research opportunities
                  </li>
                  <li className="flex items-center gap-3 text-[#4a5568]">
                    <CheckCircle className="h-5 w-5 text-[#d4831f] flex-shrink-0" />
                    Internship programs
                  </li>
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
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Core Academic Subjects</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              Our comprehensive curriculum covers all essential subjects with depth and rigor,
              ensuring students develop strong foundational knowledge and critical thinking skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 fade-in-section">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl text-center p-6 group interactive-card">
              <div className="w-16 h-16 bg-[#1f514c]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1f514c] transition-all duration-300">
                <Languages className="h-8 w-8 text-[#1f514c] group-hover:text-white transition-all duration-300" />
              </div>
              <h3 className="text-lg font-bold text-[#2d3748] mb-2">English & Hindi</h3>
              <p className="text-sm text-[#4a5568]">
                Primary instruction languages with literature and communication
              </p>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl text-center p-6 group interactive-card">
              <div className="w-16 h-16 bg-[#2d5a27]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#2d5a27] transition-all duration-300">
                <Calculator className="h-8 w-8 text-[#2d5a27] group-hover:text-white transition-all duration-300" />
              </div>
              <h3 className="text-lg font-bold text-[#2d3748] mb-2">Mathematics</h3>
              <p className="text-sm text-[#4a5568]">
                From basic arithmetic to advanced calculus and statistics
              </p>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl text-center p-6 group interactive-card">
              <div className="w-16 h-16 bg-[#d4831f]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#d4831f] transition-all duration-300">
                <Atom className="h-8 w-8 text-[#d4831f] group-hover:text-white transition-all duration-300" />
              </div>
              <h3 className="text-lg font-bold text-[#2d3748] mb-2">Sciences</h3>
              <p className="text-sm text-[#4a5568]">
                Biology, chemistry, physics, and environmental science
              </p>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl text-center p-6 group interactive-card">
              <div className="w-16 h-16 bg-[#c44569]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#c44569] transition-all duration-300">
                <Globe className="h-8 w-8 text-[#c44569] group-hover:text-white transition-all duration-300" />
              </div>
              <h3 className="text-lg font-bold text-[#2d3748] mb-2">Social Studies</h3>
              <p className="text-sm text-[#4a5568]">
                History, geography, civics, and cultural studies
              </p>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl text-center p-6 group interactive-card">
              <div className="w-16 h-16 bg-[#1f514c]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1f514c] transition-all duration-300">
                <Languages className="h-8 w-8 text-[#1f514c] group-hover:text-white transition-all duration-300" />
              </div>
              <h3 className="text-lg font-bold text-[#2d3748] mb-2">
                Sanskrit & Regional Languages
              </h3>
              <p className="text-sm text-[#4a5568]">
                Classical studies and local language appreciation
              </p>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl text-center p-6 group interactive-card">
              <div className="w-16 h-16 bg-[#2d5a27]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#2d5a27] transition-all duration-300">
                <Palette className="h-8 w-8 text-[#2d5a27] group-hover:text-white transition-all duration-300" />
              </div>
              <h3 className="text-lg font-bold text-[#2d3748] mb-2">Visual Arts</h3>
              <p className="text-sm text-[#4a5568]">
                Drawing, painting, sculpture, and digital arts
              </p>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl text-center p-6 group interactive-card">
              <div className="w-16 h-16 bg-[#d4831f]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#d4831f] transition-all duration-300">
                <Music className="h-8 w-8 text-[#d4831f] group-hover:text-white transition-all duration-300" />
              </div>
              <h3 className="text-lg font-bold text-[#2d3748] mb-2">Music & Dance</h3>
              <p className="text-sm text-[#4a5568]">
                Classical and contemporary music, traditional dance
              </p>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl text-center p-6 group interactive-card">
              <div className="w-16 h-16 bg-[#c44569]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#c44569] transition-all duration-300">
                <Heart className="h-8 w-8 text-[#c44569] group-hover:text-white transition-all duration-300" />
              </div>
              <h3 className="text-lg font-bold text-[#2d3748] mb-2">Physical Education</h3>
              <p className="text-sm text-[#4a5568]">
                Sports, fitness, health, and outdoor activities
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Special Academic Programs</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              Beyond our core curriculum, we offer specialized programs that enhance learning and
              provide unique opportunities for academic and personal growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 fade-in-section">
            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 interactive-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#1f514c]/10 rounded-2xl flex items-center justify-center">
                  <Microscope className="h-8 w-8 text-[#1f514c]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2d3748]">STEM Excellence Program</h3>
                  <p className="text-[#4a5568]">Advanced Science, Technology, Engineering & Math</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                  State-of-the-art science laboratories
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                  Robotics and coding workshops
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                  Science fair and competition participation
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                  Research mentorship opportunities
                </li>
              </ul>
              <div className="mt-6 p-4 bg-[#1f514c]/10 rounded-lg">
                <p className="text-sm text-[#1f514c] font-medium text-center">
                  * All STEM facilities will be fully operational by mid school year, October 2026
                </p>
              </div>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 interactive-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#2d5a27]/10 rounded-2xl flex items-center justify-center">
                  <TreePine className="h-8 w-8 text-[#2d5a27]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2d3748]">Environmental Studies</h3>
                  <p className="text-[#4a5568]">Sustainability & Conservation Focus</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#2d5a27] flex-shrink-0" />
                  Organic gardening and farming
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#2d5a27] flex-shrink-0" />
                  Himalayan ecology field studies
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#2d5a27] flex-shrink-0" />
                  Renewable energy projects
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#2d5a27] flex-shrink-0" />
                  Wildlife conservation awareness
                </li>
              </ul>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 interactive-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#d4831f]/10 rounded-2xl flex items-center justify-center">
                  <Globe className="h-8 w-8 text-[#d4831f]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2d3748]">Global Languages</h3>
                  <p className="text-[#4a5568]">Multilingual Communication Skills</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[#d4831f]">
                  <CheckCircle className="h-5 w-5 text-[#d4831f] flex-shrink-0" />
                  English as primary medium with Hindi
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#d4831f] flex-shrink-0" />
                  Sanskrit and French, German, Korean, or Spanish as additional languages
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#d4831f] flex-shrink-0" />
                  Cultural exchange programs
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#d4831f] flex-shrink-0" />
                  International certification preparation
                </li>
              </ul>
              <div className="mt-6 p-4 bg-[#d4831f]/10 rounded-lg">
                <p className="text-sm text-[#d4831f] font-medium text-center">
                  * Global Languages program will be implemented starting from the 2027 academic
                  session
                </p>
              </div>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 interactive-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#c44569]/10 rounded-2xl flex items-center justify-center">
                  <Users className="h-8 w-8 text-[#c44569]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2d3748]">Leadership Development</h3>
                  <p className="text-[#4a5568]">Character & Life Skills Building</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#c44569] flex-shrink-0" />
                  Student government participation
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#c44569] flex-shrink-0" />
                  Public speaking and debate
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#c44569] flex-shrink-0" />
                  Community service projects
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#c44569] flex-shrink-0" />
                  Peer mentoring programs
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Assessment & Evaluation */}
      <section className="py-20 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Assessment & Evaluation</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              Our comprehensive assessment approach focuses on holistic development, providing
              meaningful feedback to support each student's growth journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 fade-in-section">
            <Card className="bg-white border-0 shadow-lg rounded-2xl p-8 text-center interactive-card">
              <div className="w-16 h-16 bg-[#1f514c]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-[#1f514c]" />
              </div>
              <h3 className="text-xl font-bold text-[#2d3748] mb-4">Continuous Assessment</h3>
              <p className="text-[#4a5568] leading-relaxed">
                Regular formative assessments track progress and provide timely feedback for
                improvement and growth.
              </p>
            </Card>

            <Card className="bg-white border-0 shadow-lg rounded-2xl p-8 text-center interactive-card">
              <div className="w-16 h-16 bg-[#2d5a27]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-[#2d5a27]" />
              </div>
              <h3 className="text-xl font-bold text-[#2d3748] mb-4">Portfolio-Based</h3>
              <p className="text-[#4a5568] leading-relaxed">
                Student portfolios showcase learning journey, creativity, and achievement across
                multiple subjects and projects.
              </p>
            </Card>

            <Card className="bg-white border-0 shadow-lg rounded-2xl p-8 text-center interactive-card">
              <div className="w-16 h-16 bg-[#d4831f]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-[#d4831f]" />
              </div>
              <h3 className="text-xl font-bold text-[#2d3748] mb-4">Competency-Based</h3>
              <p className="text-[#4a5568] leading-relaxed">
                Focus on mastery of skills and knowledge rather than just grades, ensuring deep
                understanding and application.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Extracurricular Activities</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              Beyond academics, we offer a rich variety of extracurricular activities that help
              students discover their passions, develop new skills, and build lasting friendships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 fade-in-section">
            <Card className="bg-[#faf7f2] border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl text-center p-6 group interactive-card">
              <div className="w-16 h-16 bg-[#1f514c]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1f514c] transition-all duration-300">
                <Heart className="h-8 w-8 text-[#1f514c] group-hover:text-white transition-all duration-300" />
              </div>
              <h3 className="text-lg font-bold text-[#2d3748] mb-2">Sports & Fitness</h3>
              <p className="text-sm text-[#4a5568]">
                Cricket, football, basketball, badminton, athletics, and yoga
              </p>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl text-center p-6 group interactive-card">
              <div className="w-16 h-16 bg-[#2d5a27]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#2d5a27] transition-all duration-300">
                <Palette className="h-8 w-8 text-[#2d5a27] group-hover:text-white transition-all duration-300" />
              </div>
              <h3 className="text-lg font-bold text-[#2d3748] mb-2">Creative Arts</h3>
              <p className="text-sm text-[#4a5568]">
                Painting, sculpture, photography, drama, and creative writing
              </p>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl text-center p-6 group interactive-card">
              <div className="w-16 h-16 bg-[#d4831f]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#d4831f] transition-all duration-300">
                <Music className="h-8 w-8 text-[#d4831f] group-hover:text-white transition-all duration-300" />
              </div>
              <h3 className="text-lg font-bold text-[#2d3748] mb-2">Music & Dance</h3>
              <p className="text-sm text-[#4a5568]">
                Classical music, folk dance, choir, and instrumental ensembles
              </p>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl text-center p-6 group interactive-card">
              <div className="w-16 h-16 bg-[#c44569]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#c44569] transition-all duration-300">
                <Users className="h-8 w-8 text-[#c44569] group-hover:text-white transition-all duration-300" />
              </div>
              <h3 className="text-lg font-bold text-[#2d3748] mb-2">Clubs & Societies</h3>
              <p className="text-sm text-[#4a5568]">
                Debate club, science club, environmental club, and student council
              </p>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 fade-in-section">
            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 interactive-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#1f514c]/10 rounded-2xl flex items-center justify-center">
                  <Target className="h-8 w-8 text-[#1f514c]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2d3748]">Competitive Programs</h3>
                  <p className="text-[#4a5568]">Excellence in competition</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                  Inter-school sports tournaments
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                  Regional and national debate competitions
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                  Science olympiads and fairs
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                  Cultural festivals and art exhibitions
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                  Model United Nations conferences
                </li>
              </ul>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 interactive-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#2d5a27]/10 rounded-2xl flex items-center justify-center">
                  <TreePine className="h-8 w-8 text-[#2d5a27]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2d3748]">Community Service</h3>
                  <p className="text-[#4a5568]">Giving back to society</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#2d5a27] flex-shrink-0" />
                  Environmental conservation projects
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#2d5a27] flex-shrink-0" />
                  Local community outreach programs
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#2d5a27] flex-shrink-0" />
                  Teaching assistance for younger students
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#2d5a27] flex-shrink-0" />
                  Cultural preservation initiatives
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#2d5a27] flex-shrink-0" />
                  Disaster relief and awareness campaigns
                </li>
              </ul>
            </Card>
          </div>

          <div className="mt-16 text-center fade-in-section">
            <Card className="bg-gradient-to-r from-[#1f514c]/5 to-[#2d5a27]/5 border-0 shadow-lg rounded-2xl p-8 interactive-card">
              <h3 className="text-2xl font-bold text-[#2d3748] mb-4">Benefits of Participation</h3>
              <p className="text-[#4a5568] leading-relaxed mb-6 max-w-3xl mx-auto">
                Our extracurricular programs are designed to complement academic learning, helping
                students develop leadership skills, build confidence, and discover their unique
                talents and interests.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#1f514c]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Award className="h-6 w-6 text-[#1f514c]" />
                  </div>
                  <h4 className="font-semibold text-[#2d3748] mb-2">Leadership Development</h4>
                  <p className="text-sm text-[#4a5568]">Build confidence and leadership skills</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#2d5a27]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Users className="h-6 w-6 text-[#2d5a27]" />
                  </div>
                  <h4 className="font-semibold text-[#2d3748] mb-2">Social Skills</h4>
                  <p className="text-sm text-[#4a5568]">Develop teamwork and communication</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#d4831f]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Lightbulb className="h-6 w-6 text-[#d4831f]" />
                  </div>
                  <h4 className="font-semibold text-[#2d3748] mb-2">Creative Expression</h4>
                  <p className="text-sm text-[#4a5568]">Explore talents and interests</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-[#faf7f2] to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#2d3748] mb-6">
            Ready to Explore Our Academics?
          </h2>
          <p className="text-xl text-[#4a5568] mb-12 leading-relaxed">
            Discover how our comprehensive academic program can nurture your child's intellectual
            curiosity and prepare them for future success.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-[#1f514c] hover:bg-[#2a6b65] text-white px-10 py-4 text-lg h-14 btn-interactive"
            >
              Download Curriculum Guide
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Link href="/admissions">
              <Button
                size="lg"
                variant="outline"
                className="border-[#1f514c] text-[#1f514c] hover:bg-[#1f514c] hover:text-white px-10 py-4 text-lg h-14 btn-interactive"
              >
                Apply for Admission
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
