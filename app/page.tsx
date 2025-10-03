'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PageLayout from '@/components/layout/PageLayout';
import {
  GraduationCap,
  Users,
  BookOpen,
  Award,
  ChevronRight,
  ArrowRight,
  CircleCheck as CheckCircle,
  Target,
  Heart,
  Globe,
  Calendar,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
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
      <section
        id="home"
        className="pt-20 pb-32 bg-gradient-to-b from-[#faf7f2] to-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-[#1f514c]/10 text-[#1f514c] border-[#1f514c]/20 mb-8 text-sm px-6 py-2 font-medium">
              Opening April 2026
            </Badge>
            <h1 className="text-6xl lg:text-7xl font-bold text-[#2d3748] mb-8 leading-tight animate-fade-in-up">
              Embracing Heritage,
              <br />
              <span className="text-[#1f514c]">Inspiring Future</span>
            </h1>
            <p className="text-xl text-[#4a5568] mb-12 leading-relaxed max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
              Nestled in the heart of Rampur Bushahr, we're creating an educational institution
              where tradition meets innovation, preparing students for a global future.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[#1f514c] hover:bg-[#2a6b65] text-white px-10 py-4 text-lg h-14 btn-interactive"
                >
                  Schedule a Visit
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="mailto:hello@himriti.com?subject=Brochure Request">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#1f514c] text-[#1f514c] hover:bg-[#1f514c] hover:text-white px-10 py-4 text-lg h-14 btn-interactive"
                >
                  Download Brochure
                </Button>
              </a>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-8 mt-24 max-w-4xl mx-auto fade-in-section">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1f514c]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 interactive-card">
                <Users className="h-8 w-8 text-[#1f514c]" />
              </div>
              <div className="text-3xl font-bold text-[#2d3748] mb-2">250+</div>
              <div className="text-[#4a5568]">Student Capacity</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2d5a27]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 interactive-card">
                <GraduationCap className="h-8 w-8 text-[#2d5a27]" />
              </div>
              <div className="text-3xl font-bold text-[#2d3748] mb-2">10+</div>
              <div className="text-[#4a5568]">Expert Faculty</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#d4831f]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 interactive-card">
                <BookOpen className="h-8 w-8 text-[#d4831f]" />
              </div>
              <div className="text-3xl font-bold text-[#2d3748] mb-2">K-12</div>
              <div className="text-[#4a5568]">Grade Levels</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#c44569]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 interactive-card">
                <Award className="h-8 w-8 text-[#c44569]" />
              </div>
              <div className="text-3xl font-bold text-[#2d3748] mb-2">2026</div>
              <div className="text-[#4a5568]">Opening Year</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 fade-in-section">
            <h2 className="text-5xl font-bold text-[#2d3748] mb-6">Our Foundation</h2>
            <div className="max-w-2xl mx-auto mb-8">
              <p className="text-lg text-[#1f514c] font-semibold mb-4">
                <span className="text-[#d4831f]">Him</span>riti - Where{' '}
                <span className="text-[#d4831f]">Him</span>alayas Meet{' '}
                <span className="text-[#d4831f]">Riti</span> (Culture)
              </p>
              <p className="text-base text-[#4a5568] leading-relaxed">
                Our name reflects our essence: <strong>Him</strong> representing the majestic
                Himalayas that surround us, and <strong>Riti</strong> embodying the rich culture and
                customs we cherish. Together, Himriti symbolizes the perfect harmony between our
                natural heritage and cultural traditions.
              </p>
            </div>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              Built on the principles of excellence, tradition, and innovation, we're creating more
              than just a school – we're nurturing a community.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-20 fade-in-section">
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#1f514c]/10 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-[#1f514c] transition-all duration-300 interactive-card">
                <Heart className="h-10 w-10 text-[#1f514c] group-hover:text-white transition-all duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-2xl font-bold text-[#2d3748] mb-4">Heritage</h3>
              <p className="text-[#4a5568] leading-relaxed">
                Rooted in the rich cultural heritage of Himachal Pradesh, honoring traditional
                values while embracing modern educational methodologies.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[#2d5a27]/10 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-[#2d5a27] transition-all duration-300 interactive-card">
                <Target className="h-10 w-10 text-[#2d5a27] group-hover:text-white transition-all duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-2xl font-bold text-[#2d3748] mb-4">Excellence</h3>
              <p className="text-[#4a5568] leading-relaxed">
                Comprehensive K-12 curriculum combining rigorous academics with creative expression,
                critical thinking, and character development.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[#d4831f]/10 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-[#d4831f] transition-all duration-300 interactive-card">
                <Globe className="h-10 w-10 text-[#d4831f] group-hover:text-white transition-all duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-2xl font-bold text-[#2d3748] mb-4">Community</h3>
              <p className="text-[#4a5568] leading-relaxed">
                Building a strong community that supports every student's journey, fostering
                collaboration, empathy, and lifelong connections.
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-[#faf7f2] rounded-3xl p-12 text-center fade-in-section interactive-card">
            <h3 className="text-3xl font-bold text-[#2d3748] mb-6">Our Mission</h3>
            <p className="text-xl text-[#4a5568] leading-relaxed max-w-4xl mx-auto">
              To nurture young minds in the heart of the Himalayas, where the timeless wisdom of our
              mountains meets cutting-edge education, preparing students to become compassionate
              leaders and global citizens.
            </p>
          </div>
        </div>
      </section>

      {/* Academics Section */}
      <section id="academics" className="py-32 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 fade-in-section">
            <h2 className="text-5xl font-bold text-[#2d3748] mb-6">Academic Excellence</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              Our comprehensive curriculum nurtures intellectual curiosity, creativity, and critical
              thinking skills at every grade level.
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
                  through play-based and experiential learning.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-[#4a5568]">
                    <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                    Interactive learning environments
                  </li>
                  <li className="flex items-center gap-3 text-[#4a5568]">
                    <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                    Multilingual education
                  </li>
                  <li className="flex items-center gap-3 text-[#4a5568]">
                    <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                    Arts and physical education
                  </li>
                  <li className="flex items-center gap-3 text-[#4a5568]">
                    <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                    Character development
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
                  Transitional years emphasizing academic rigor, leadership development, and
                  exploration of individual interests and talents.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-[#4a5568]">
                    <CheckCircle className="h-5 w-5 text-[#2d5a27] flex-shrink-0" />
                    STEM integration
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
                    Community service
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
                  opportunities for specialization in chosen fields.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-[#4a5568]">
                    <CheckCircle className="h-5 w-5 text-[#d4831f] flex-shrink-0" />
                    Advanced placement courses
                  </li>
                  <li className="flex items-center gap-3 text-[#4a5568]">
                    <CheckCircle className="h-5 w-5 text-[#d4831f] flex-shrink-0" />
                    Career counseling
                  </li>
                  <li className="flex items-center gap-3 text-[#4a5568]">
                    <CheckCircle className="h-5 w-5 text-[#d4831f] flex-shrink-0" />
                    University preparation
                  </li>
                  <li className="flex items-center gap-3 text-[#4a5568]">
                    <CheckCircle className="h-5 w-5 text-[#d4831f] flex-shrink-0" />
                    Internship opportunities
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section id="admissions" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 fade-in-section">
            <h2 className="text-5xl font-bold text-[#2d3748] mb-6">Join Our Community</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              Be part of our founding class and help shape the future of education in the Himalayas.
              Applications are now being accepted.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start fade-in-section">
            <Card className="bg-[#faf7f2] border-0 rounded-2xl p-8 interactive-card">
              <CardHeader className="p-0 mb-8">
                <CardTitle className="text-3xl text-[#2d3748] flex items-center gap-4">
                  <Calendar className="h-8 w-8 text-[#1f514c]" />
                  Important Dates
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-6">
                <div className="flex justify-between items-center py-4 border-b border-white/50">
                  <span className="text-[#4a5568] font-medium">Application Opens</span>
                  <Badge className="bg-[#c44569] text-white px-4 py-2">January 2025</Badge>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-white/50">
                  <span className="text-[#4a5568] font-medium">Application Deadline</span>
                  <Badge className="bg-[#d4831f] text-white px-4 py-2">March 2025</Badge>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-white/50">
                  <span className="text-[#4a5568] font-medium">Admission Results</span>
                  <Badge className="bg-[#2d5a27] text-white px-4 py-2">April 2025</Badge>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="text-[#4a5568] font-medium">School Opens</span>
                  <Badge className="bg-[#1f514c] text-white px-4 py-2">April 2026</Badge>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#2d3748] mb-6">Admission Requirements</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-[#1f514c]/10 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-[#1f514c]" />
                    </div>
                    <span className="text-[#4a5568] leading-relaxed">
                      Completed application form with required documents
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-[#1f514c]/10 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-[#1f514c]" />
                    </div>
                    <span className="text-[#4a5568] leading-relaxed">
                      Academic transcripts from previous school
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-[#1f514c]/10 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-[#1f514c]" />
                    </div>
                    <span className="text-[#4a5568] leading-relaxed">
                      Student and parent interview (virtual or in-person)
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-[#1f514c]/10 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-[#1f514c]" />
                    </div>
                    <span className="text-[#4a5568] leading-relaxed">
                      Age-appropriate assessment for grade placement
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:hello@himriti.com?subject=Application Form Request"
                  className="flex-1"
                >
                  <Button className="bg-[#1f514c] hover:bg-[#2a6b65] text-white w-full h-12 btn-interactive">
                    Download Application
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <Link href="/contact" className="flex-1">
                  <Button
                    variant="outline"
                    className="border-[#1f514c] text-[#1f514c] hover:bg-[#1f514c] hover:text-white w-full h-12 btn-interactive"
                  >
                    Schedule Tour
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 fade-in-section">
            <h2 className="text-5xl font-bold text-[#2d3748] mb-6">Get in Touch</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              Have questions about our school? We'd love to hear from you. Contact us to learn more
              about joining the Himriti family.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 fade-in-section">
            <Card className="bg-white border-0 shadow-lg rounded-2xl text-center p-8 hover:shadow-xl transition-shadow duration-300 interactive-card">
              <div className="w-16 h-16 bg-[#1f514c]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-[#1f514c]" />
              </div>
              <h3 className="text-xl font-bold text-[#2d3748] mb-4">Visit Us</h3>
              <p className="text-[#4a5568] leading-relaxed">
                Rampur Bushahr
                <br />
                Shimla, Himachal Pradesh
                <br />
                India - 172001
              </p>
            </Card>

            <Card className="bg-white border-0 shadow-lg rounded-2xl text-center p-8 hover:shadow-xl transition-shadow duration-300 interactive-card">
              <div className="w-16 h-16 bg-[#2d5a27]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-[#2d5a27]" />
              </div>
              <h3 className="text-xl font-bold text-[#2d3748] mb-4">Call Us</h3>
              <p className="text-[#4a5568] leading-relaxed">
                +91 90154 17203
                <br />
                WhatsApp: +91 90154 17203
                <br />
                Mon-Fri: 9:00 AM - 5:00 PM
              </p>
            </Card>

            <Card className="bg-white border-0 shadow-lg rounded-2xl text-center p-8 hover:shadow-xl transition-shadow duration-300 interactive-card">
              <div className="w-16 h-16 bg-[#d4831f]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-[#d4831f]" />
              </div>
              <h3 className="text-xl font-bold text-[#2d3748] mb-4">Email Us</h3>
              <p className="text-[#4a5568] leading-relaxed">
                hello@himriti.com
                <br />
                WhatsApp: +91 90154 17203
                <br />
                We'll respond within 24 hours
              </p>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
