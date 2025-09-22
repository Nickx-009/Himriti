"use client";

import { useEffect } from 'react';
import { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  Calendar, 
  FileText, 
  Users,
  ChevronRight,
  CheckCircle,
  Clock,
  Award,
  Heart,
  BookOpen,
  Target,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Admissions - Himriti Public School | Apply for K-12 Education',
  description: 'Apply for admission to Himriti Public School. K-12 education in the Himalayas opening April 2026. Learn about our admission process, requirements, and how to join our founding class.',
  keywords: 'Himriti admissions, school application, K-12 admission, Himachal Pradesh school admission, Rampur Bushahr school, Himalayan education admission',
  openGraph: {
    title: 'Admissions at Himriti Public School - Join Our Founding Class',
    description: 'Apply for admission to our premier K-12 school in the Himalayas. Opening April 2026 in Rampur Bushahr, Shimla.',
    url: 'https://himriti.com/admissions',
    type: 'website',
  },
};

export default function AdmissionsPage() {
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
              Admissions Open
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-[#2d3748] mb-8 leading-tight">
              Join Our
              <br />
              <span className="text-[#1f514c]">Founding Class</span>
            </h1>
            <p className="text-xl text-[#4a5568] mb-12 leading-relaxed max-w-3xl mx-auto">
              Be part of something extraordinary. Himriti Public School opens in April 2026, 
              and we're now accepting applications for our inaugural class. 
              Give your child the gift of exceptional education in the heart of the Himalayas.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-[#1f514c] hover:bg-[#2a6b65] text-white px-10 py-4 text-lg h-14 btn-interactive">
                  Start Application
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

      {/* Why Choose Himriti */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Why Choose Himriti?</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              Discover what makes Himriti Public School the perfect choice for your child's educational journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-[#faf7f2] border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden interactive-card fade-in-section">
              <CardHeader className="p-8 pb-6">
                <div className="w-16 h-16 bg-[#1f514c]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-[#1f514c]" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">Academic Excellence</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-[#4a5568] leading-relaxed">
                  NEP 2020 aligned curriculum with international standards, 
                  preparing students for global opportunities while honoring local heritage.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden interactive-card fade-in-section">
              <CardHeader className="p-8 pb-6">
                <div className="w-16 h-16 bg-[#2d5a27]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="h-8 w-8 text-[#2d5a27]" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">Holistic Development</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-[#4a5568] leading-relaxed">
                  Focus on intellectual, emotional, physical, and spiritual growth 
                  through comprehensive programs and personalized attention.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden interactive-card fade-in-section">
              <CardHeader className="p-8 pb-6">
                <div className="w-16 h-16 bg-[#d4831f]/10 rounded-2xl flex items-center justify-center mb-6">
                  <BookOpen className="h-8 w-8 text-[#d4831f]" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">Himalayan Setting</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-[#4a5568] leading-relaxed">
                  Learn in the serene beauty of the Himalayas, where nature becomes 
                  part of the curriculum and inspiration is found in every sunrise.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden interactive-card fade-in-section">
              <CardHeader className="p-8 pb-6">
                <div className="w-16 h-16 bg-[#c44569]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-[#c44569]" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">Small Class Sizes</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-[#4a5568] leading-relaxed">
                  Personalized attention with low student-teacher ratios, 
                  ensuring every child receives the support they need to thrive.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden interactive-card fade-in-section">
              <CardHeader className="p-8 pb-6">
                <div className="w-16 h-16 bg-[#1f514c]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-[#1f514c]" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">Global Partnerships</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-[#4a5568] leading-relaxed">
                  International collaborations and exchange programs that provide 
                  global perspectives and opportunities for cultural exchange.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden interactive-card fade-in-section">
              <CardHeader className="p-8 pb-6">
                <div className="w-16 h-16 bg-[#2d5a27]/10 rounded-2xl flex items-center justify-center mb-6">
                  <GraduationCap className="h-8 w-8 text-[#2d5a27]" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">Expert Faculty</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-[#4a5568] leading-relaxed">
                  Experienced educators passionate about innovative teaching methods 
                  and committed to nurturing each student's unique potential.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Admission Process</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              Our admission process is designed to understand your child's unique strengths 
              and ensure the best fit for their educational journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <Card className="bg-white border-0 shadow-lg rounded-2xl p-6 text-center interactive-card fade-in-section">
              <div className="w-16 h-16 bg-[#1f514c]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-[#1f514c]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2d3748] mb-4">1. Application</h3>
              <p className="text-[#4a5568] mb-4">
                Submit your online application with required documents and personal statement.
              </p>
              <Badge className="bg-[#1f514c] text-white">1-2 Days</Badge>
            </Card>

            <Card className="bg-white border-0 shadow-lg rounded-2xl p-6 text-center interactive-card fade-in-section">
              <div className="w-16 h-16 bg-[#2d5a27]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-[#2d5a27]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2d3748] mb-4">2. Assessment</h3>
              <p className="text-[#4a5568] mb-4">
                Student assessment and family interview to understand goals and expectations.
              </p>
              <Badge className="bg-[#2d5a27] text-white">3-5 Days</Badge>
            </Card>

            <Card className="bg-white border-0 shadow-lg rounded-2xl p-6 text-center interactive-card fade-in-section">
              <div className="w-16 h-16 bg-[#d4831f]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-[#d4831f]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2d3748] mb-4">3. Decision</h3>
              <p className="text-[#4a5568] mb-4">
                Admission decision communicated via email and phone call with next steps.
              </p>
              <Badge className="bg-[#d4831f] text-white">1-2 Weeks</Badge>
            </Card>

            <Card className="bg-white border-0 shadow-lg rounded-2xl p-6 text-center interactive-card fade-in-section">
              <div className="w-16 h-16 bg-[#c44569]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-8 w-8 text-[#c44569]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2d3748] mb-4">4. Enrollment</h3>
              <p className="text-[#4a5568] mb-4">
                Complete enrollment paperwork and secure your child's place for April 2026.
              </p>
              <Badge className="bg-[#c44569] text-white">Immediate</Badge>
            </Card>
          </div>
        </div>
      </section>

      {/* Grade Levels & Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Grade Levels & Requirements</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              We welcome students from Kindergarten through Grade 12, with age-appropriate 
              admission requirements for each level.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl overflow-hidden interactive-card fade-in-section">
              <CardHeader className="p-8 pb-6 bg-gradient-to-r from-[#1f514c] to-[#2d5a27] text-white">
                <CardTitle className="text-2xl mb-2">Primary School</CardTitle>
                <Badge className="bg-white/20 text-white w-fit">Grades K-5</Badge>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#2d3748] mb-2">Age Requirements:</h4>
                    <p className="text-[#4a5568] text-sm">Kindergarten: 5-6 years by April 1, 2026</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2d3748] mb-2">Required Documents:</h4>
                    <ul className="text-[#4a5568] text-sm space-y-1">
                      <li>• Birth certificate</li>
                      <li>• Previous school records (if applicable)</li>
                      <li>• Health records and immunizations</li>
                      <li>• Parent/guardian identification</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2d3748] mb-2">Assessment:</h4>
                    <p className="text-[#4a5568] text-sm">Play-based assessment focusing on readiness and social skills</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl overflow-hidden interactive-card fade-in-section">
              <CardHeader className="p-8 pb-6 bg-gradient-to-r from-[#2d5a27] to-[#d4831f] text-white">
                <CardTitle className="text-2xl mb-2">Middle School</CardTitle>
                <Badge className="bg-white/20 text-white w-fit">Grades 6-8</Badge>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#2d3748] mb-2">Age Requirements:</h4>
                    <p className="text-[#4a5568] text-sm">Grade 6: 11-12 years by April 1, 2026</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2d3748] mb-2">Required Documents:</h4>
                    <ul className="text-[#4a5568] text-sm space-y-1">
                      <li>• Academic transcripts (last 2 years)</li>
                      <li>• Teacher recommendations</li>
                      <li>• Extracurricular activity records</li>
                      <li>• Personal statement</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2d3748] mb-2">Assessment:</h4>
                    <p className="text-[#4a5568] text-sm">Academic assessment in core subjects and student interview</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl overflow-hidden interactive-card fade-in-section">
              <CardHeader className="p-8 pb-6 bg-gradient-to-r from-[#d4831f] to-[#c44569] text-white">
                <CardTitle className="text-2xl mb-2">High School</CardTitle>
                <Badge className="bg-white/20 text-white w-fit">Grades 9-12</Badge>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#2d3748] mb-2">Age Requirements:</h4>
                    <p className="text-[#4a5568] text-sm">Grade 9: 14-15 years by April 1, 2026</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2d3748] mb-2">Required Documents:</h4>
                    <ul className="text-[#4a5568] text-sm space-y-1">
                      <li>• Complete academic transcripts</li>
                      <li>• Standardized test scores (if available)</li>
                      <li>• Portfolio of achievements</li>
                      <li>• Career interest assessment</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2d3748] mb-2">Assessment:</h4>
                    <p className="text-[#4a5568] text-sm">Comprehensive academic evaluation and career counseling session</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Important Dates</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              Mark your calendar with these key dates for the admission process and school opening.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white border-0 shadow-lg rounded-2xl p-6 text-center interactive-card fade-in-section">
              <div className="w-16 h-16 bg-[#1f514c]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-[#1f514c]" />
              </div>
              <h3 className="text-lg font-semibold text-[#2d3748] mb-2">Applications Open</h3>
              <p className="text-2xl font-bold text-[#1f514c] mb-2">January 2026</p>
              <p className="text-[#4a5568] text-sm">Online applications begin</p>
            </Card>

            <Card className="bg-white border-0 shadow-lg rounded-2xl p-6 text-center interactive-card fade-in-section">
              <div className="w-16 h-16 bg-[#2d5a27]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-[#2d5a27]" />
              </div>
              <h3 className="text-lg font-semibold text-[#2d3748] mb-2">Priority Deadline</h3>
              <p className="text-2xl font-bold text-[#2d5a27] mb-2">February 2026</p>
              <p className="text-[#4a5568] text-sm">Early application deadline</p>
            </Card>

            <Card className="bg-white border-0 shadow-lg rounded-2xl p-6 text-center interactive-card fade-in-section">
              <div className="w-16 h-16 bg-[#d4831f]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-[#d4831f]" />
              </div>
              <h3 className="text-lg font-semibold text-[#2d3748] mb-2">Final Deadline</h3>
              <p className="text-2xl font-bold text-[#d4831f] mb-2">March 2026</p>
              <p className="text-[#4a5568] text-sm">Last date for applications</p>
            </Card>

            <Card className="bg-white border-0 shadow-lg rounded-2xl p-6 text-center interactive-card fade-in-section">
              <div className="w-16 h-16 bg-[#c44569]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-[#c44569]" />
              </div>
              <h3 className="text-lg font-semibold text-[#2d3748] mb-2">School Opens</h3>
              <p className="text-2xl font-bold text-[#c44569] mb-2">April 2026</p>
              <p className="text-[#4a5568] text-sm">First day of classes</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Get in Touch</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              Have questions about the admission process? Our admissions team is here to help 
              guide you through every step of the journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 text-center interactive-card fade-in-section">
              <div className="w-16 h-16 bg-[#1f514c]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-[#1f514c]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2d3748] mb-4">Call Us</h3>
              <p className="text-[#4a5568] mb-4">
                +91 90154 17203<br />
                WhatsApp: +91 90154 17203
              </p>
              <p className="text-sm text-[#4a5568]">Mon-Fri: 9:00 AM - 5:00 PM IST</p>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 text-center interactive-card fade-in-section">
              <div className="w-16 h-16 bg-[#2d5a27]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-[#2d5a27]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2d3748] mb-4">Email Us</h3>
              <p className="text-[#4a5568] mb-4">
                himritihigh@gmail.com
              </p>
              <p className="text-sm text-[#4a5568]">Response within 24 hours</p>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 text-center interactive-card fade-in-section">
              <div className="w-16 h-16 bg-[#d4831f]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-[#d4831f]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2d3748] mb-4">Visit Us</h3>
              <p className="text-[#4a5568] mb-4">
                Rampur Bushahr<br />
                Shimla, Himachal Pradesh<br />
                India - 172001
              </p>
              <p className="text-sm text-[#4a5568]">Opening April 2026</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-[#faf7f2] to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Ready to Begin?</h2>
          <p className="text-xl text-[#4a5568] mb-12 leading-relaxed">
            Take the first step towards your child's extraordinary educational journey. 
            Join the founding families of Himriti Public School.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-[#1f514c] hover:bg-[#2a6b65] text-white px-10 py-4 text-lg h-14 btn-interactive">
                Start Your Application
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-[#1f514c] text-[#1f514c] hover:bg-[#1f514c] hover:text-white px-10 py-4 text-lg h-14 btn-interactive">
                Schedule a Call
                <Phone className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}