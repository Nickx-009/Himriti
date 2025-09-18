import PageLayout from '@/components/layout/PageLayout';
import AdmissionModal from '@/components/admission/AdmissionModal';
import { Button } from '@/components/ui/button';
import { 
  GraduationCap, 
  Calendar, 
  FileText, 
  Users, 
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import Link from 'next/link';

export default function AdmissionsPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1f514c] to-[#2d5a27] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">
              Join Our Learning Community
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Begin your child's educational journey at Himriti Public School. We're committed to nurturing young minds and preparing them for a bright future through innovative teaching methods and holistic development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <AdmissionModal />
              <Link href="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#1f514c]">
                  Ask Questions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-4">
              Simple Admission Process
            </h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto">
              Our streamlined admission process makes it easy for families to join our school community
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: FileText,
                title: "Submit Application",
                description: "Complete our online application form with your child's details and academic history",
                step: "01"
              },
              {
                icon: Calendar,
                title: "Schedule Visit",
                description: "Book a campus tour to experience our facilities and meet our dedicated faculty",
                step: "02"
              },
              {
                icon: Users,
                title: "Assessment",
                description: "Your child will participate in a friendly assessment to help us understand their learning needs",
                step: "03"
              },
              {
                icon: CheckCircle,
                title: "Enrollment",
                description: "Upon acceptance, complete the enrollment process and welcome to our school family",
                step: "04"
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-[#F2F2F2] rounded-2xl p-8 text-center h-full">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-[#1f514c] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-[#1f514c]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4">
                    <item.icon className="h-8 w-8 text-[#1f514c]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2d3748] mb-4">{item.title}</h3>
                  <p className="text-[#4a5568] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#2d3748] mb-6">
                Admission Requirements
              </h2>
              <p className="text-xl text-[#4a5568] mb-8">
                We welcome students from diverse backgrounds who are eager to learn and grow in our nurturing environment.
              </p>
              
              <div className="space-y-6">
                {[
                  "Completed application form",
                  "Previous academic records",
                  "Birth certificate copy",
                  "Recent passport-size photographs",
                  "Transfer certificate (if applicable)",
                  "Medical fitness certificate"
                ].map((requirement, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-[#1f514c] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-[#2d3748] font-medium">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <GraduationCap className="h-16 w-16 text-[#1f514c] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#2d3748] mb-2">Ready to Apply?</h3>
                <p className="text-[#4a5568]">Start your child's journey with us today</p>
              </div>
              
              <div className="space-y-4">
                <AdmissionModal />
                <Link href="/contact" className="block">
                  <Button variant="outline" className="w-full border-[#1f514c] text-[#1f514c] hover:bg-[#1f514c] hover:text-white">
                    Schedule Campus Visit
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto">
              Have questions about admissions? Our team is here to help guide you through the process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: "Call Us",
                info: "+91 98765 43210",
                description: "Mon-Fri, 9:00 AM - 5:00 PM"
              },
              {
                icon: Mail,
                title: "Email Us",
                info: "admissions@himriti.edu",
                description: "We'll respond within 24 hours"
              },
              {
                icon: MapPin,
                title: "Visit Us",
                info: "Himriti Public School Campus",
                description: "Schedule a tour anytime"
              }
            ].map((contact, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-[#F2F2F2]">
                <div className="w-16 h-16 bg-[#1f514c]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <contact.icon className="h-8 w-8 text-[#1f514c]" />
                </div>
                <h3 className="text-xl font-bold text-[#2d3748] mb-2">{contact.title}</h3>
                <p className="text-[#1f514c] font-semibold mb-2">{contact.info}</p>
                <p className="text-[#4a5568] text-sm">{contact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}