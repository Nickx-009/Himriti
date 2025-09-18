"use client";

import { useEffect, useState } from 'react';
import type { Metadata } from 'next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PageLayout from '@/components/layout/PageLayout';
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  Award, 
  ChevronRight,
  ArrowRight,
  CheckCircle,
  Target,
  Heart,
  Building,
  Mail,
  Phone,
  Send,
  UserCheck,
  Briefcase,
  Clock,
  MapPin,
  Star,
  Handshake,
  FileText,
  Calendar,
  Globe
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Work with Us - Career Opportunities | Himriti Public School',
  description: 'Join Himriti Public School team in Rampur Bushahr. Teaching positions, support staff roles, internships, and partnership opportunities. Apply now for 2026 opening.',
  keywords: 'Himriti careers, teaching jobs Himachal Pradesh, school jobs Rampur Bushahr, education careers, teacher recruitment, school staff positions',
  openGraph: {
    title: 'Work with Us - Career Opportunities | Himriti Public School',
    description: 'Join Himriti Public School team in Rampur Bushahr. Teaching positions, support staff roles, internships, and partnership opportunities.',
    url: 'https://himriti.com/about/work-with-us',
    images: [
      {
        url: 'https://himriti.com/Himriti.png',
        width: 1200,
        height: 630,
        alt: 'Work with Himriti Public School - Career Opportunities',
      },
    ],
  },
  twitter: {
    title: 'Work with Us - Career Opportunities | Himriti Public School',
    description: 'Join Himriti Public School team in Rampur Bushahr. Teaching positions, support staff roles, internships, and partnership opportunities.',
    images: ['https://himriti.com/Himriti.png'],
  },
};

// Form validation schema
const applicationFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phoneNumber: z.string().min(10, 'Please enter a valid phone number'),
  position: z.string().min(1, 'Please select a position'),
  experience: z.string().optional(),
  qualifications: z.string().min(10, 'Please provide your qualifications'),
  message: z.string().min(20, 'Please provide more details about your interest'),
});

type ApplicationFormData = z.infer<typeof applicationFormSchema>;

export default function WorkWithUsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationFormSchema),
  });

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true);
    
    try {
      const requestBody = {
        parentName: data.fullName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        gradeLevel: data.position,
        inquiryType: 'career-application',
        message: `CAREER APPLICATION

Position Applied For: ${data.position}
Full Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phoneNumber}
Experience: ${data.experience || 'Not specified'}

Qualifications:
${data.qualifications}

Message:
${data.message}`,
      };
      
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        toast.success('Application submitted successfully! We\'ll get back to you within 48 hours.');
        reset();
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || 'Failed to submit application. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Join Our Team
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-[#2d3748] mb-8 leading-tight">
              Work with
              <br />
              <span className="text-[#1f514c]">Himriti</span>
            </h1>
            <p className="text-xl text-[#4a5568] mb-12 leading-relaxed max-w-3xl mx-auto">
              Join us in creating something extraordinary. Be part of our founding team and help 
              shape the future of education in the heart of the Himalayas.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-[#1f514c] hover:bg-[#2a6b65] text-white px-10 py-4 text-lg h-14 btn-interactive">
                View Openings
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-[#1f514c] text-[#1f514c] hover:bg-[#1f514c] hover:text-white px-10 py-4 text-lg h-14 btn-interactive">
                Partnership Inquiry
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work with Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Why Work with Himriti?</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              We're not just building a school – we're creating a community of passionate educators 
              and professionals dedicated to transforming education in the Himalayas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 fade-in-section">
            <Card className="bg-[#faf7f2] border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl text-center p-6 group interactive-card">
              <div className="w-16 h-16 bg-[#1f514c]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1f514c] transition-all duration-300">
                <Heart className="h-8 w-8 text-[#1f514c] group-hover:text-white transition-all duration-300" />
              </div>
              <h3 className="text-lg font-bold text-[#2d3748] mb-2">Meaningful Impact</h3>
              <p className="text-sm text-[#4a5568]">Shape young minds and contribute to educational excellence</p>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl text-center p-6 group interactive-card">
              <div className="w-16 h-16 bg-[#2d5a27]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#2d5a27] transition-all duration-300">
                <Target className="h-8 w-8 text-[#2d5a27] group-hover:text-white transition-all duration-300" />
              </div>
              <h3 className="text-lg font-bold text-[#2d3748] mb-2">Professional Growth</h3>
              <p className="text-sm text-[#4a5568]">Continuous learning and career development opportunities</p>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl text-center p-6 group interactive-card">
              <div className="w-16 h-16 bg-[#d4831f]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#d4831f] transition-all duration-300">
                <Globe className="h-8 w-8 text-[#d4831f] group-hover:text-white transition-all duration-300" />
              </div>
              <h3 className="text-lg font-bold text-[#2d3748] mb-2">Unique Environment</h3>
              <p className="text-sm text-[#4a5568]">Work in the beautiful Himalayan setting with clean air</p>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl text-center p-6 group interactive-card">
              <div className="w-16 h-16 bg-[#c44569]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#c44569] transition-all duration-300">
                <Users className="h-8 w-8 text-[#c44569] group-hover:text-white transition-all duration-300" />
              </div>
              <h3 className="text-lg font-bold text-[#2d3748] mb-2">Collaborative Culture</h3>
              <p className="text-sm text-[#4a5568]">Join a supportive team of dedicated professionals</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-20 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Career Opportunities</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              We're actively recruiting passionate educators and support staff to join our founding team. 
              All positions start from April 2026.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 fade-in-section">
            <Card className="bg-white border-0 shadow-lg rounded-2xl p-8 interactive-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#1f514c]/10 rounded-2xl flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-[#1f514c]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2d3748]">Teaching Staff</h3>
                  <p className="text-[#4a5568]">Shape the future of education</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#2d3748] mb-3">Available Positions:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    <Badge variant="outline" className="justify-start p-3 text-sm">Kindergarten Teacher</Badge>
                    <Badge variant="outline" className="justify-start p-3 text-sm">Primary Teacher (Grades 1–5)</Badge>
                    <Badge variant="outline" className="justify-start p-3 text-sm">Middle School Teacher (Grades 6–8)</Badge>
                    <Badge variant="outline" className="justify-start p-3 text-sm">High School Teacher (Grades 9–10)</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2d3748] mb-3">Subject Specialists:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <Badge variant="outline" className="justify-start p-2 text-xs">English</Badge>
                    <Badge variant="outline" className="justify-start p-2 text-xs">Mathematics</Badge>
                    <Badge variant="outline" className="justify-start p-2 text-xs">Science</Badge>
                    <Badge variant="outline" className="justify-start p-2 text-xs">Social Studies</Badge>
                    <Badge variant="outline" className="justify-start p-2 text-xs">Hindi</Badge>
                    <Badge variant="outline" className="justify-start p-2 text-xs">Sanskrit</Badge>
                    <Badge variant="outline" className="justify-start p-2 text-xs">Computer Science</Badge>
                    <Badge variant="outline" className="justify-start p-2 text-xs">Art</Badge>
                    <Badge variant="outline" className="justify-start p-2 text-xs">Music</Badge>
                    <Badge variant="outline" className="justify-start p-2 text-xs">Physical Education</Badge>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-white border-0 shadow-lg rounded-2xl p-8 interactive-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#2d5a27]/10 rounded-2xl flex items-center justify-center">
                  <Building className="h-8 w-8 text-[#2d5a27]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2d3748]">Support Staff</h3>
                  <p className="text-[#4a5568]">Essential team members</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#2d3748] mb-3">Administrative Positions:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    <Badge variant="outline" className="justify-start p-3 text-sm">Administrative Officer</Badge>
                    <Badge variant="outline" className="justify-start p-3 text-sm">Office Assistant / Clerk</Badge>
                    <Badge variant="outline" className="justify-start p-3 text-sm">Librarian</Badge>
                    <Badge variant="outline" className="justify-start p-3 text-sm">Lab Assistant</Badge>
                    <Badge variant="outline" className="justify-start p-3 text-sm">Receptionist</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2d3748] mb-3">Operations & Support:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <Badge variant="outline" className="justify-start p-2 text-xs">Peon / Helper</Badge>
                    <Badge variant="outline" className="justify-start p-2 text-xs">Security Guard</Badge>
                    <Badge variant="outline" className="justify-start p-2 text-xs">Bus Driver</Badge>
                    <Badge variant="outline" className="justify-start p-2 text-xs">Bus Conductor</Badge>
                    <Badge variant="outline" className="justify-start p-2 text-xs">Housekeeping</Badge>
                    <Badge variant="outline" className="justify-start p-2 text-xs">Cleaning Staff</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits & Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Benefits & Culture</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              We believe in taking care of our team members and creating an environment 
              where everyone can thrive and grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 fade-in-section">
            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 interactive-card">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#1f514c]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-[#1f514c]" />
                </div>
                <h3 className="text-xl font-bold text-[#2d3748] mb-2">Competitive Package</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                  Competitive salary packages
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                  Performance-based incentives
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                  Annual bonus structure
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#1f514c] flex-shrink-0" />
                  Festival bonuses
                </li>
              </ul>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 interactive-card">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#2d5a27]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-[#2d5a27]" />
                </div>
                <h3 className="text-xl font-bold text-[#2d3748] mb-2">Health & Wellness</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#2d5a27] flex-shrink-0" />
                  Health insurance coverage
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#2d5a27] flex-shrink-0" />
                  Annual health check-ups
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#2d5a27] flex-shrink-0" />
                  Mental health support
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#2d5a27] flex-shrink-0" />
                  Work-life balance
                </li>
              </ul>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 interactive-card">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#d4831f]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-[#d4831f]" />
                </div>
                <h3 className="text-xl font-bold text-[#2d3748] mb-2">Growth & Development</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#d4831f] flex-shrink-0" />
                  Professional development programs
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#d4831f] flex-shrink-0" />
                  Training and workshops
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#d4831f] flex-shrink-0" />
                  Career advancement opportunities
                </li>
                <li className="flex items-center gap-3 text-[#4a5568]">
                  <CheckCircle className="h-5 w-5 text-[#d4831f] flex-shrink-0" />
                  Educational support
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Partnership Opportunities</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              We welcome partnerships with organizations that share our vision of 
              educational excellence and community development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-section">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl text-center p-8 interactive-card">
              <div className="w-16 h-16 bg-[#1f514c]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Handshake className="h-8 w-8 text-[#1f514c]" />
              </div>
              <h3 className="text-xl font-bold text-[#2d3748] mb-4">Business Partnerships</h3>
              <p className="text-[#4a5568] leading-relaxed mb-4">
                Strategic alliances with businesses for mutual growth and community development.
              </p>
              <ul className="text-sm text-[#4a5568] space-y-2">
                <li>• Corporate social responsibility</li>
                <li>• Skill development programs</li>
                <li>• Internship opportunities</li>
                <li>• Community projects</li>
              </ul>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl text-center p-8 interactive-card">
              <div className="w-16 h-16 bg-[#2d5a27]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Building className="h-8 w-8 text-[#2d5a27]" />
              </div>
              <h3 className="text-xl font-bold text-[#2d3748] mb-4">Vendor Relationships</h3>
              <p className="text-[#4a5568] leading-relaxed mb-4">
                Quality suppliers and service providers to support our operations.
              </p>
              <ul className="text-sm text-[#4a5568] space-y-2">
                <li>• Educational materials</li>
                <li>• Technology solutions</li>
                <li>• Facility management</li>
                <li>• Transportation services</li>
              </ul>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl text-center p-8 interactive-card">
              <div className="w-16 h-16 bg-[#d4831f]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-[#d4831f]" />
              </div>
              <h3 className="text-xl font-bold text-[#2d3748] mb-4">Educational Collaborations</h3>
              <p className="text-[#4a5568] leading-relaxed mb-4">
                Partnerships with educational institutions and organizations.
              </p>
              <ul className="text-sm text-[#4a5568] space-y-2">
                <li>• Teacher training programs</li>
                <li>• Curriculum development</li>
                <li>• Research initiatives</li>
                <li>• Student exchange programs</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Apply Now</h2>
            <p className="text-xl text-[#4a5568] leading-relaxed">
              Ready to join our team? Submit your application and we'll get back to you soon.
            </p>
          </div>

          <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 fade-in-section interactive-card">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#2d3748] mb-2">
                    Full Name *
                  </label>
                  <input
                    {...register('fullName')}
                    type="text"
                    className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors bg-white"
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#2d3748] mb-2">
                    Email Address *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors bg-white"
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#2d3748] mb-2">
                    Phone Number *
                  </label>
                  <input
                    {...register('phoneNumber')}
                    type="tel"
                    className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors bg-white"
                    placeholder="Enter your phone number"
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#2d3748] mb-2">
                    Position Applied For *
                  </label>
                  <select 
                    {...register('position')}
                    className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors bg-white"
                  >
                    <option value="">Select position</option>
                    <optgroup label="Teaching Staff">
                      <option value="kindergarten-teacher">Kindergarten Teacher</option>
                      <option value="primary-teacher">Primary Teacher (Grades 1-5)</option>
                      <option value="middle-school-teacher">Middle School Teacher (Grades 6-8)</option>
                      <option value="high-school-teacher">High School Teacher (Grades 9-10)</option>
                      <option value="english-teacher">English Teacher</option>
                      <option value="mathematics-teacher">Mathematics Teacher</option>
                      <option value="science-teacher">Science Teacher</option>
                      <option value="social-studies-teacher">Social Studies Teacher</option>
                      <option value="hindi-teacher">Hindi Teacher</option>
                      <option value="sanskrit-teacher">Sanskrit Teacher</option>
                      <option value="computer-science-teacher">Computer Science Teacher</option>
                      <option value="art-teacher">Art Teacher</option>
                      <option value="music-teacher">Music Teacher</option>
                      <option value="physical-education-teacher">Physical Education Teacher</option>
                    </optgroup>
                    <optgroup label="Support Staff">
                      <option value="administrative-officer">Administrative Officer</option>
                      <option value="office-assistant">Office Assistant / Clerk</option>
                      <option value="librarian">Librarian</option>
                      <option value="lab-assistant">Lab Assistant</option>
                      <option value="receptionist">Receptionist</option>
                      <option value="peon-helper">Peon / Helper</option>
                      <option value="security-guard">Security Guard</option>
                      <option value="bus-driver">Bus Driver</option>
                      <option value="bus-conductor">Bus Conductor</option>
                      <option value="housekeeping">Housekeeping / Cleaning Staff</option>
                    </optgroup>
                  </select>
                  {errors.position && (
                    <p className="text-red-500 text-sm mt-1">{errors.position.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2d3748] mb-2">
                  Years of Experience
                </label>
                <input
                  {...register('experience')}
                  type="text"
                  className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors bg-white"
                  placeholder="e.g., 5 years in primary education"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2d3748] mb-2">
                  Qualifications & Certifications *
                </label>
                <textarea
                  {...register('qualifications')}
                  rows={3}
                  className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors resize-none bg-white"
                  placeholder="List your educational qualifications, certifications, and relevant training..."
                ></textarea>
                {errors.qualifications && (
                  <p className="text-red-500 text-sm mt-1">{errors.qualifications.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2d3748] mb-2">
                  Why do you want to work with Himriti? *
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors resize-none bg-white"
                  placeholder="Tell us about your passion for education and why you'd like to join our team..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <div className="text-center">
                <Button 
                  type="submit"
                  size="lg" 
                  disabled={isSubmitting}
                  className="bg-[#1f514c] hover:bg-[#2a6b65] text-white px-12 py-4 text-lg h-14 btn-interactive disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Get in Touch</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              Have questions about working with us? We're here to help and answer any queries you may have.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 fade-in-section">
            <Card className="bg-white border-0 shadow-lg rounded-2xl text-center p-8 hover:shadow-xl transition-shadow duration-300 interactive-card">
              <div className="w-16 h-16 bg-[#1f514c]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-[#1f514c]" />
              </div>
              <h3 className="text-xl font-bold text-[#2d3748] mb-4">Call Us</h3>
              <p className="text-[#4a5568] leading-relaxed">
                +91 90154 17203<br />
                WhatsApp: +91 90154 17203<br />
                Mon-Fri: 9:00 AM - 5:00 PM
              </p>
            </Card>

            <Card className="bg-white border-0 shadow-lg rounded-2xl text-center p-8 hover:shadow-xl transition-shadow duration-300 interactive-card">
              <div className="w-16 h-16 bg-[#2d5a27]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-[#2d5a27]" />
              </div>
              <h3 className="text-xl font-bold text-[#2d3748] mb-4">Email Us</h3>
              <p className="text-[#4a5568] leading-relaxed">
                himritihigh@gmail.com<br />
                HR & Recruitment<br />
                Response within 48 hours
              </p>
            </Card>

            <Card className="bg-white border-0 shadow-lg rounded-2xl text-center p-8 hover:shadow-xl transition-shadow duration-300 interactive-card">
              <div className="w-16 h-16 bg-[#d4831f]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-[#d4831f]" />
              </div>
              <h3 className="text-xl font-bold text-[#2d3748] mb-4">Visit Us</h3>
              <p className="text-[#4a5568] leading-relaxed">
                Rampur Bushahr<br />
                Shimla, Himachal Pradesh<br />
                India - 172001
              </p>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}