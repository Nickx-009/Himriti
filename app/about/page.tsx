"use client";

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PageLayout from '@/components/layout/PageLayout';
import { 
  Mountain, 
  GraduationCap, 
  Users, 
  BookOpen, 
  Award, 
  ChevronRight,
  ArrowRight,
  CheckCircle,
  Globe,
  Target,
  Heart,
  TreePine,
  Compass,
  Shield,
  Lightbulb,
  UserCheck,
  Building,
  MapPin,
  Calendar,
  Leaf,
  Sun,
  Wind
} from 'lucide-react';
import Link from 'next/link';
import AdmissionModal from '@/components/admission/AdmissionModal';

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
              Our Story of
              <br />
              <span className="text-[#1f514c]">Educational Excellence</span>
            </h1>
            <p className="text-xl text-[#4a5568] mb-12 leading-relaxed max-w-3xl mx-auto">
              Founded on the principles of holistic education and rooted in the majestic 
              Himalayas, we are creating an institution where tradition meets innovation, 
              and every student discovers their unique potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-[#1f514c] hover:bg-[#2a6b65] text-white px-10 py-4 text-lg h-14 btn-interactive">
                Contact Us
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-[#1f514c] text-[#1f514c] hover:bg-[#1f514c] hover:text-white px-10 py-4 text-lg h-14 btn-interactive">
                  Email Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center fade-in-section">
            <div>
              <h2 className="text-4xl font-bold text-[#2d3748] mb-8">Our Vision & Mission</h2>
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#1f514c]/10 rounded-xl flex items-center justify-center">
                      <Target className="h-6 w-6 text-[#1f514c]" />
                    </div>
                    <h3 className="text-2xl font-semibold text-[#2d3748]">Vision</h3>
                  </div>
                  <p className="text-[#4a5568] leading-relaxed text-lg">
                    To be a beacon of educational excellence in the Himalayas, nurturing 
                    globally competent citizens who are deeply rooted in Indian values, 
                    environmentally conscious, and committed to making a positive impact on the world.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#2d5a27]/10 rounded-xl flex items-center justify-center">
                      <Compass className="h-6 w-6 text-[#2d5a27]" />
                    </div>
                    <h3 className="text-2xl font-semibold text-[#2d3748]">Mission</h3>
                  </div>
                  <p className="text-[#4a5568] leading-relaxed text-lg">
                    To provide transformative education that combines academic rigor with 
                    character development, fostering critical thinking, creativity, and 
                    compassion while celebrating our rich cultural heritage and natural environment.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 interactive-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#1f514c]/10 rounded-2xl flex items-center justify-center">
                    <Mountain className="h-8 w-8 text-[#1f514c]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#2d3748]">Himalayan Heritage</h4>
                    <p className="text-[#4a5568]">Rooted in mountain wisdom</p>
                  </div>
                </div>
                <p className="text-[#4a5568] leading-relaxed">
                  Drawing inspiration from the timeless wisdom of the Himalayas, we integrate 
                  environmental consciousness and cultural values into every aspect of learning.
                </p>
              </Card>

              <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 interactive-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#2d5a27]/10 rounded-2xl flex items-center justify-center">
                    <Globe className="h-8 w-8 text-[#2d5a27]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#2d3748]">Global Perspective</h4>
                    <p className="text-[#4a5568]">Preparing world citizens</p>
                  </div>
                </div>
                <p className="text-[#4a5568] leading-relaxed">
                  While honoring our roots, we prepare students for a globalized world with 
                  21st-century skills, international perspectives, and cross-cultural competence.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Our Core Values</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              These fundamental principles guide everything we do, shaping our educational 
              approach and community culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-section">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden group interactive-card">
              <CardHeader className="p-8 pb-6 text-center">
                <div className="w-20 h-20 bg-[#1f514c]/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1f514c] transition-all duration-300">
                  <Heart className="h-10 w-10 text-[#1f514c] group-hover:text-white transition-all duration-300 group-hover:scale-110" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">Compassion</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 text-center">
                <p className="text-[#4a5568] leading-relaxed">
                  Fostering empathy, kindness, and understanding in all interactions, 
                  creating a caring community where everyone feels valued and supported.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden group interactive-card">
              <CardHeader className="p-8 pb-6 text-center">
                <div className="w-20 h-20 bg-[#2d5a27]/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#2d5a27] transition-all duration-300">
                  <Award className="h-10 w-10 text-[#2d5a27] group-hover:text-white transition-all duration-300 group-hover:scale-110" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">Excellence</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 text-center">
                <p className="text-[#4a5568] leading-relaxed">
                  Pursuing the highest standards in academics, character, and personal growth, 
                  inspiring students to reach their full potential in all endeavors.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden group interactive-card">
              <CardHeader className="p-8 pb-6 text-center">
                <div className="w-20 h-20 bg-[#d4831f]/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#d4831f] transition-all duration-300">
                  <Shield className="h-10 w-10 text-[#d4831f] group-hover:text-white transition-all duration-300 group-hover:scale-110" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">Integrity</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 text-center">
                <p className="text-[#4a5568] leading-relaxed">
                  Upholding honesty, transparency, and ethical behavior in all aspects of 
                  school life, building trust and respect within our community.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden group interactive-card">
              <CardHeader className="p-8 pb-6 text-center">
                <div className="w-20 h-20 bg-[#c44569]/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#c44569] transition-all duration-300">
                  <Lightbulb className="h-10 w-10 text-[#c44569] group-hover:text-white transition-all duration-300 group-hover:scale-110" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">Innovation</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 text-center">
                <p className="text-[#4a5568] leading-relaxed">
                  Embracing creativity, critical thinking, and new approaches to learning, 
                  preparing students for an ever-changing world with adaptability and vision.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden group interactive-card">
              <CardHeader className="p-8 pb-6 text-center">
                <div className="w-20 h-20 bg-[#2d5a27]/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#2d5a27] transition-all duration-300">
                  <Leaf className="h-10 w-10 text-[#2d5a27] group-hover:text-white transition-all duration-300 group-hover:scale-110" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">Sustainability</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 text-center">
                <p className="text-[#4a5568] leading-relaxed">
                  Promoting environmental stewardship and sustainable practices, teaching 
                  students to be responsible guardians of our planet and natural resources.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden group interactive-card">
              <CardHeader className="p-8 pb-6 text-center">
                <div className="w-20 h-20 bg-[#1f514c]/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1f514c] transition-all duration-300">
                  <Users className="h-10 w-10 text-[#1f514c] group-hover:text-white transition-all duration-300 group-hover:scale-110" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">Community</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 text-center">
                <p className="text-[#4a5568] leading-relaxed">
                  Building strong connections between students, families, and the broader 
                  community, fostering collaboration and mutual support in all endeavors.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Location & Environment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Our Himalayan Campus</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              Nestled in the breathtaking landscape of Rampur Bushahr, our campus provides 
              an inspiring environment where learning comes alive through nature.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center fade-in-section">
            <div>
              <h3 className="text-3xl font-bold text-[#2d3748] mb-8">Why Rampur Bushahr?</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1f514c]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="h-6 w-6 text-[#1f514c]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#2d3748] mb-2">Strategic Location</h4>
                    <p className="text-[#4a5568] leading-relaxed">
                      Located in the heart of Himachal Pradesh, offering easy accessibility 
                      while maintaining the serenity of mountain life.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2d5a27]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <TreePine className="h-6 w-6 text-[#2d5a27]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#2d3748] mb-2">Natural Learning Environment</h4>
                    <p className="text-[#4a5568] leading-relaxed">
                      Surrounded by pristine forests, rivers, and mountains that serve as 
                      outdoor classrooms for experiential learning.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d4831f]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Wind className="h-6 w-6 text-[#d4831f]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#2d3748] mb-2">Clean & Healthy Air</h4>
                    <p className="text-[#4a5568] leading-relaxed">
                      Pure mountain air and pollution-free environment promoting physical 
                      health and mental well-being for optimal learning.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c44569]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Sun className="h-6 w-6 text-[#c44569]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#2d3748] mb-2">Cultural Heritage</h4>
                    <p className="text-[#4a5568] leading-relaxed">
                      Rich local traditions and cultural practices that enrich the educational 
                      experience and connect students to their roots.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 interactive-card">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-[#1f514c]/10 rounded-3xl flex items-center justify-center mx-auto mb-4">
                    <Building className="h-10 w-10 text-[#1f514c]" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#2d3748] mb-2">Campus Features</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-[#4a5568]">
                    <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                    State-of-the-art classrooms with mountain views
                  </li>
                  <li className="flex items-center gap-3 text-[#4a5568]">
                    <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                    Outdoor amphitheater for cultural programs
                  </li>
                  <li className="flex items-center gap-3 text-[#4a5568]">
                    <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                    Organic garden and greenhouse facilities
                  </li>
                  <li className="flex items-center gap-3 text-[#4a5568]">
                    <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                    Adventure sports and trekking trails
                  </li>
                  <li className="flex items-center gap-3 text-[#4a5568]">
                    <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                    Solar-powered sustainable infrastructure
                  </li>
                  <li className="flex items-center gap-3 text-[#4a5568]">
                    <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                    Traditional craft workshops and studios
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-[#1f514c]/10 rounded-lg">
                  <p className="text-sm text-[#1f514c] font-medium text-center">
                    * Some amenities and facilities will be available by October 2026 and early 2027
                  </p>
                </div>
              </Card>

              <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 text-center interactive-card">
                <div className="w-16 h-16 bg-[#2d5a27]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-[#2d5a27]" />
                </div>
                <h4 className="text-xl font-bold text-[#2d3748] mb-2">Opening Soon</h4>
                <Badge className="bg-[#2d5a27] text-white px-4 py-2">April 2026</Badge>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Leadership Team</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              Our experienced leadership team brings together decades of educational expertise, 
              passion for student development, and commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 fade-in-section">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden text-center interactive-card">
              <CardHeader className="p-8 pb-6">
                <div className="w-24 h-24 bg-[#1f514c]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <UserCheck className="h-12 w-12 text-[#1f514c]" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">Principal</CardTitle>
                <p className="text-[#4a5568] text-sm">Educational Leadership</p>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-[#4a5568] leading-relaxed mb-4">
                  Leading with vision and experience in progressive education, 
                  committed to nurturing every student's potential.
                </p>
                <Badge className="bg-[#1f514c]/10 text-[#1f514c]">25+ Years Experience</Badge>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden text-center interactive-card">
              <CardHeader className="p-8 pb-6">
                <div className="w-24 h-24 bg-[#2d5a27]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-12 w-12 text-[#2d5a27]" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">Academic Director</CardTitle>
                <p className="text-[#4a5568] text-sm">Curriculum & Instruction</p>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-[#4a5568] leading-relaxed mb-4">
                  Expert in NEP 2020 implementation and innovative teaching 
                  methodologies for holistic student development.
                </p>
                <Badge className="bg-[#2d5a27]/10 text-[#2d5a27]">NEP 2020 Specialist</Badge>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden text-center interactive-card">
              <CardHeader className="p-8 pb-6">
                <div className="w-24 h-24 bg-[#d4831f]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-12 w-12 text-[#d4831f]" />
                </div>
                <CardTitle className="text-xl text-[#2d3748] mb-2">Student Affairs Director</CardTitle>
                <p className="text-[#4a5568] text-sm">Student Development</p>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-[#4a5568] leading-relaxed mb-4">
                  Dedicated to student welfare, character development, and 
                  creating a supportive learning environment.
                </p>
                <Badge className="bg-[#d4831f]/10 text-[#d4831f]">Student-Centered Approach</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-[#faf7f2] to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Join the Himriti Family</h2>
          <p className="text-xl text-[#4a5568] mb-12 leading-relaxed">
            Be part of our founding community and help shape the future of education 
            in the Himalayas. Together, we'll create something extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <AdmissionModal 
              schoolName="Himriti Public School"
              triggerText="Apply for Admission"
              triggerVariant="default"
            />
            />
            <Link href="/admissions">
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