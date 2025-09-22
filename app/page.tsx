"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronRight, 
  Mountain, 
  BookOpen, 
  Users, 
  Award,
  Globe,
  Heart,
  Target,
  Calendar,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

export default function HomePage() {
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
              Opening April 2026
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold text-[#2d3748] mb-8 leading-tight">
              Embracing Heritage,
              <br />
              <span className="text-[#1f514c]">Inspiring Future</span>
            </h1>
            <p className="text-xl text-[#4a5568] mb-12 leading-relaxed max-w-3xl mx-auto">
              Welcome to Himriti Public School, where exceptional education meets the serene beauty 
              of the Himalayas. We're creating a transformative learning environment that nurtures 
              young minds while honoring our rich cultural heritage.
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
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-section">
              <Badge className="bg-[#2d5a27]/10 text-[#2d5a27] border-[#2d5a27]/20 mb-6 text-sm px-4 py-2">
                Welcome to Himriti
              </Badge>
              <h2 className="text-4xl font-bold text-[#2d3748] mb-6">
                Where Education Meets Excellence
              </h2>
              <p className="text-lg text-[#4a5568] mb-6 leading-relaxed">
                Nestled in the pristine beauty of Rampur Bushahr, Shimla, Himriti Public School 
                represents a new paradigm in K-12 education. We combine world-class academic 
                standards with the wisdom of our Himalayan heritage.
              </p>
              <p className="text-lg text-[#4a5568] mb-8 leading-relaxed">
                Our school opens in April 2026, and we're now accepting applications for our 
                founding class. Join us in creating an educational legacy that will inspire 
                generations to come.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1f514c]/10 rounded-full flex items-center justify-center">
                  <Mountain className="h-6 w-6 text-[#1f514c]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#2d3748]">Himalayan Campus</h4>
                  <p className="text-[#4a5568]">Learning in nature's classroom</p>
                </div>
              </div>
            </div>
            
            <div className="fade-in-section">
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#1f514c] to-[#2d5a27] rounded-2xl p-8 text-white">
                  <div className="h-full flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4">🏔️ Himriti Public School</h3>
                    <p className="text-lg opacity-90 mb-6">
                      A premier K-12 educational institution in the heart of the Himalayas, 
                      where tradition meets innovation.
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
                      <div>
                        <div className="text-2xl font-bold">NEP</div>
                        <div className="opacity-80">2020 Aligned</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">Global</div>
                        <div className="opacity-80">Partnerships</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Why Choose Himriti?</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              Discover what makes Himriti Public School the perfect choice for your child's 
              educational journey in the Himalayas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden interactive-card fade-in-section">
              <CardHeader className="p-8 pb-6">
                <div className="w-16 h-16 bg-[#1f514c]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-[#1f514c]" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">Academic Excellence</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-[#4a5568] leading-relaxed">
                  NEP 2020 aligned curriculum with international standards, preparing students 
                  for global opportunities while honoring local heritage.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden interactive-card fade-in-section">
              <CardHeader className="p-8 pb-6">
                <div className="w-16 h-16 bg-[#2d5a27]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="h-8 w-8 text-[#2d5a27]" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">Holistic Development</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-[#4a5568] leading-relaxed">
                  Focus on intellectual, emotional, physical, and spiritual growth through 
                  comprehensive programs and personalized attention.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden interactive-card fade-in-section">
              <CardHeader className="p-8 pb-6">
                <div className="w-16 h-16 bg-[#d4831f]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Mountain className="h-8 w-8 text-[#d4831f]" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">Himalayan Setting</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-[#4a5568] leading-relaxed">
                  Learn in the serene beauty of the Himalayas, where nature becomes part of 
                  the curriculum and inspiration is found in every sunrise.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden interactive-card fade-in-section">
              <CardHeader className="p-8 pb-6">
                <div className="w-16 h-16 bg-[#c44569]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-[#c44569]" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">Small Class Sizes</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-[#4a5568] leading-relaxed">
                  Personalized attention with low student-teacher ratios, ensuring every child 
                  receives the support they need to thrive.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden interactive-card fade-in-section">
              <CardHeader className="p-8 pb-6">
                <div className="w-16 h-16 bg-[#1f514c]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-[#1f514c]" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">Global Partnerships</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-[#4a5568] leading-relaxed">
                  International collaborations and exchange programs that provide global 
                  perspectives and opportunities for cultural exchange.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden interactive-card fade-in-section">
              <CardHeader className="p-8 pb-6">
                <div className="w-16 h-16 bg-[#2d5a27]/10 rounded-2xl flex items-center justify-center mb-6">
                  <BookOpen className="h-8 w-8 text-[#2d5a27]" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">Innovative Curriculum</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-[#4a5568] leading-relaxed">
                  Modern teaching methodologies combined with traditional values, fostering 
                  critical thinking and creativity in every student.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Quick Information</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about Himriti Public School at a glance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 text-center interactive-card fade-in-section">
              <div className="w-16 h-16 bg-[#1f514c]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-[#1f514c]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2d3748] mb-4">Opening Date</h3>
              <p className="text-2xl font-bold text-[#1f514c] mb-2">April 2026</p>
              <p className="text-[#4a5568]">Applications now open for founding class</p>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 text-center interactive-card fade-in-section">
              <div className="w-16 h-16 bg-[#2d5a27]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-[#2d5a27]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2d3748] mb-4">Location</h3>
              <p className="text-lg font-semibold text-[#2d5a27] mb-2">Rampur Bushahr</p>
              <p className="text-[#4a5568]">Shimla, Himachal Pradesh, India</p>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 text-center interactive-card fade-in-section">
              <div className="w-16 h-16 bg-[#d4831f]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-[#d4831f]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2d3748] mb-4">Grade Levels</h3>
              <p className="text-lg font-semibold text-[#d4831f] mb-2">K-12</p>
              <p className="text-[#4a5568]">Kindergarten through Grade 12</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Get in Touch</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              Ready to learn more about Himriti Public School? We're here to answer your questions 
              and guide you through the admission process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white border-0 shadow-lg rounded-2xl p-8 interactive-card fade-in-section">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#1f514c]/10 rounded-xl flex items-center justify-center">
                  <Phone className="h-6 w-6 text-[#1f514c]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#2d3748]">Call or WhatsApp</h3>
                  <p className="text-[#4a5568]">+91 90154 17203</p>
                </div>
              </div>
              <p className="text-[#4a5568] text-sm">Available Mon-Fri, 9:00 AM - 5:00 PM IST</p>
            </Card>

            <Card className="bg-white border-0 shadow-lg rounded-2xl p-8 interactive-card fade-in-section">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#2d5a27]/10 rounded-xl flex items-center justify-center">
                  <Mail className="h-6 w-6 text-[#2d5a27]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#2d3748]">Email Us</h3>
                  <p className="text-[#4a5568]">himritihigh@gmail.com</p>
                </div>
              </div>
              <p className="text-[#4a5568] text-sm">Response within 24 hours</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-[#faf7f2] to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Join Our Founding Class</h2>
          <p className="text-xl text-[#4a5568] mb-12 leading-relaxed">
            Be part of something extraordinary. Help us create an educational legacy in the 
            heart of the Himalayas that will inspire generations to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/admissions">
              <Button size="lg" className="bg-[#1f514c] hover:bg-[#2a6b65] text-white px-10 py-4 text-lg h-14 btn-interactive">
                Apply for Admission
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-[#1f514c] text-[#1f514c] hover:bg-[#1f514c] hover:text-white px-10 py-4 text-lg h-14 btn-interactive">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}