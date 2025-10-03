'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PageLayout from '@/components/layout/PageLayout';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  Send,
  MessageSquare,
  Calendar,
  Users,
  Building,
} from 'lucide-react';
import Link from 'next/link';

// Form validation schema
const formSchema = z.object({
  parentName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phoneNumber: z.string().optional(),
  gradeLevel: z.string().optional(),
  inquiryType: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent successfully! We'll get back to you within 24 hours.");
        reset();
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Contact Himriti Public School
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-[#2d3748] mb-8 leading-tight">
              Get in
              <br />
              <span className="text-[#1f514c]">Touch</span>
            </h1>
            <p className="text-xl text-[#4a5568] mb-12 leading-relaxed max-w-3xl mx-auto">
              We'd love to hear from you. Whether you have questions about our programs, want to
              schedule a visit, or are ready to begin the admission process, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-[#1f514c] hover:bg-[#2a6b65] text-white px-10 py-4 text-lg h-14 btn-interactive"
              >
                Schedule Visit
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#1f514c] text-[#1f514c] hover:bg-[#1f514c] hover:text-white px-10 py-4 text-lg h-14 btn-interactive"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Contact Information</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              Reach out to us through any of these channels. We're committed to responding promptly
              to all inquiries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 fade-in-section">
            <Card className="bg-[#faf7f2] border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden text-center interactive-card">
              <CardHeader className="p-8 pb-6">
                <div className="w-20 h-20 bg-[#1f514c]/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-10 w-10 text-[#1f514c]" />
                </div>
                <CardTitle className="text-2xl text-[#2d3748] mb-2">Visit Our Campus</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-[#4a5568] leading-relaxed mb-4">
                  Rampur Bushahr
                  <br />
                  Shimla, Himachal Pradesh
                  <br />
                  India - 172001
                </p>
                <Badge className="bg-[#1f514c] text-white px-4 py-2">Opening April 2026</Badge>
              </CardContent>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden text-center interactive-card">
              <CardHeader className="p-8 pb-6">
                <div className="w-20 h-20 bg-[#2d5a27]/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-10 w-10 text-[#2d5a27]" />
                </div>
                <CardTitle className="text-2xl text-[#2d3748] mb-2">Call Us</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-[#4a5568] leading-relaxed mb-4">
                  +91 90154 17203
                  <br />
                  WhatsApp: +91 90154 17203
                  <br />
                  <span className="text-sm">Mon-Fri: 9:00 AM - 5:00 PM</span>
                </p>
                <Badge className="bg-[#2d5a27] text-white px-4 py-2">Available Now</Badge>
              </CardContent>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden text-center interactive-card">
              <CardHeader className="p-8 pb-6">
                <div className="w-20 h-20 bg-[#d4831f]/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-10 w-10 text-[#d4831f]" />
                </div>
                <CardTitle className="text-2xl text-[#2d3748] mb-2">Email Us</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-[#4a5568] leading-relaxed mb-4">
                  hello@himriti.com
                  <br />
                  <span className="text-sm">General Inquiries & Admissions</span>
                  <br />
                  <span className="text-sm">Response within 24 hours</span>
                </p>
                <Badge className="bg-[#d4831f] text-white px-4 py-2">Quick Response</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-[#faf7f2]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Send Us a Message</h2>
            <p className="text-xl text-[#4a5568] leading-relaxed">
              Have specific questions? Fill out the form below and we'll get back to you soon.
            </p>
          </div>

          <Card className="bg-white border-0 shadow-lg rounded-2xl p-8 fade-in-section interactive-card">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#2d3748] mb-2">
                    Parent/Guardian Name *
                  </label>
                  <input
                    {...register('parentName')}
                    type="text"
                    className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                  {errors.parentName && (
                    <p className="text-red-500 text-sm mt-1">{errors.parentName.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#2d3748] mb-2">
                    Email Address *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors"
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
                    Phone Number
                  </label>
                  <input
                    {...register('phoneNumber')}
                    type="tel"
                    className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#2d3748] mb-2">
                    Student Grade Level
                  </label>
                  <select
                    {...register('gradeLevel')}
                    className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors"
                  >
                    <option value="">Select grade level</option>
                    <option value="k-2">Kindergarten - Grade 2</option>
                    <option value="3-5">Grades 3-5</option>
                    <option value="6-8">Grades 6-8</option>
                    <option value="9-12">Grades 9-12</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2d3748] mb-2">
                  Inquiry Type
                </label>
                <select
                  {...register('inquiryType')}
                  className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors"
                >
                  <option value="">Select inquiry type</option>
                  <option value="admissions">Admissions Information</option>
                  <option value="curriculum">Curriculum & Programs</option>
                  <option value="visit">Campus Visit</option>
                  <option value="fees">Fees & Financial Aid</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2d3748] mb-2">Message *</label>
                <textarea
                  {...register('message')}
                  rows={5}
                  className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your inquiry or any specific questions you have..."
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
                  className="bg-[#1f514c] hover:bg-[#2a6b65] text-white px-12 py-4 text-lg h-14 btn-interactive"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-[#4a5568] leading-relaxed">
              Quick answers to common questions about Himriti Public School.
            </p>
          </div>

          <div className="space-y-6 fade-in-section">
            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 interactive-card">
              <h3 className="text-xl font-bold text-[#2d3748] mb-4">When does the school open?</h3>
              <p className="text-[#4a5568] leading-relaxed">
                Himriti Public School is scheduled to open in April 2026. We are currently in the
                construction phase and accepting applications for our founding class.
              </p>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 interactive-card">
              <h3 className="text-xl font-bold text-[#2d3748] mb-4">What grades do you offer?</h3>
              <p className="text-[#4a5568] leading-relaxed">
                We offer comprehensive K-12 education, from Kindergarten through Grade 12, with
                age-appropriate curriculum and facilities for each grade level.
              </p>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 interactive-card">
              <h3 className="text-xl font-bold text-[#2d3748] mb-4">Can I visit the campus?</h3>
              <p className="text-[#4a5568] leading-relaxed">
                While our campus is under construction, we offer virtual tours and information
                sessions. Once construction is complete, we'll schedule in-person campus visits.
              </p>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 interactive-card">
              <h3 className="text-xl font-bold text-[#2d3748] mb-4">
                How do I apply for admission?
              </h3>
              <p className="text-[#4a5568] leading-relaxed">
                Applications will open in January 2026. You can contact us now to be added to our
                mailing list and receive updates about the application process.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-[#faf7f2] to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl text-[#4a5568] mb-12 leading-relaxed">
            Take the first step towards your child's exceptional educational journey in the heart of
            the Himalayas.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/admissions">
              <Button
                size="lg"
                className="bg-[#1f514c] hover:bg-[#2a6b65] text-white px-10 py-4 text-lg h-14 btn-interactive"
              >
                Start Application
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-[#1f514c] text-[#1f514c] hover:bg-[#1f514c] hover:text-white px-10 py-4 text-lg h-14 btn-interactive"
            >
              Schedule Call
              <Phone className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
