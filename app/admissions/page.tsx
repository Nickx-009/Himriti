"use client";

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PageLayout from '@/components/layout/PageLayout';
import { 
  Calendar, 
  FileText, 
  Users, 
  Award, 
  ChevronRight,
  ArrowRight,
  CheckCircle,
  Download,
  Phone,
  Mail,
  Clock,
  MapPin,
  GraduationCap,
  BookOpen,
  Heart,
  Target
} from 'lucide-react';
import Link from 'next/link';

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
              Admissions Open for 2026
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-[#2d3748] mb-8 leading-tight">
              Join Our
              <br />
              <span className="text-[#1f514c]">Founding Class</span>
            </h1>
            <p className="text-xl text-[#4a5568] mb-12 leading-relaxed max-w-3xl mx-auto">
              Be part of history as we welcome our first students to Himriti Public School. 
              Applications are now open for the 2026-27 academic year across all grade levels.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-[#1f514c] hover:bg-[#2a6b65] text-white px-10 py-4 text-lg h-14 btn-interactive">
                Start Application
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-[#1f514c] text-[#1f514c] hover:bg-[#1f514c] hover:text-white px-10 py-4 text-lg h-14 btn-interactive">
                Download Brochure
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Important Dates</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              Mark your calendar with these key dates for the admission process. 
              Early application is encouraged as spaces are limited.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 fade-in-section">
            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl text-center p-6 interactive-card">
              <div className="w-16 h-16 bg-[#c44569]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-[#c44569]" />
              </div>
              <h3 className="text-lg font-bold text-[#2d3748] mb-2">Applications Open</h3>
              <Badge className="bg-[#c44569] text-white px-4 py-2 mb-3">January 2025</Badge>
              <p className="text-sm text-[#4a5568]">Online application portal goes live</p>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl text-center p-6 interactive-card">
              <div className="w-16 h-16 bg-[#d4831f]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-[#d4831f]" />
              </div>
              <h3 className="text-lg font-bold text-[#2d3748] mb-2">Application Deadline</h3>
              <Badge className="bg-[#d4831f] text-white px-4 py-2 mb-3">March 2025</Badge>
              <p className="text-sm text-[#4a5568]">Final date for submission</p>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl text-center p-6 interactive-card">
              <div className="w-16 h-16 bg-[#2d5a27]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-[#2d5a27]" />
              </div>
              <h3 className="text-lg font-bold text-[#2d3748] mb-2">Admission Results</h3>
              <Badge className="bg-[#2d5a27] text-white px-4 py-2 mb-3">April 2025</Badge>
              <p className="text-sm text-[#4a5568]">Acceptance notifications sent</p>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl text-center p-6 interactive-card">
              <div className="w-16 h-16 bg-[#1f514c]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-[#1f514c]" />
              </div>
              <h3 className="text-lg font-bold text-[#2d3748] mb-2">School Opens</h3>
              <Badge className="bg-[#1f514c] text-white px-4 py-2 mb-3">April 2026</Badge>
              <p className="text-sm text-[#4a5568]">First day of classes</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-20 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Admission Requirements</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              Our admission process is designed to identify students who will thrive in our 
              collaborative learning environment and contribute to our school community.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 fade-in-section">
            <Card className="bg-white border-0 shadow-lg rounded-2xl p-8 interactive-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#1f514c]/10 rounded-2xl flex items-center justify-center">
                  <FileText className="h-8 w-8 text-[#1f514c]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2d3748]">Required Documents</h3>
                  <p className="text-[#4a5568]">Essential paperwork for application</p>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#1f514c] mt-0.5 flex-shrink-0" />
                  <span className="text-[#4a5568]">Completed application form with student photograph</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#1f514c] mt-0.5 flex-shrink-0" />
                  <span className="text-[#4a5568]">Birth certificate and age proof documents</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#1f514c] mt-0.5 flex-shrink-0" />
                  <span className="text-[#4a5568]">Academic transcripts from previous school (if applicable)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#1f514c] mt-0.5 flex-shrink-0" />
                  <span className="text-[#4a5568]">Transfer certificate from previous institution</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#1f514c] mt-0.5 flex-shrink-0" />
                  <span className="text-[#4a5568]">Medical records and immunization certificates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#1f514c] mt-0.5 flex-shrink-0" />
                  <span className="text-[#4a5568]">Parent/guardian identification documents</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-white border-0 shadow-lg rounded-2xl p-8 interactive-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#2d5a27]/10 rounded-2xl flex items-center justify-center">
                  <Users className="h-8 w-8 text-[#2d5a27]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2d3748]">Assessment Process</h3>
                  <p className="text-[#4a5568]">Evaluation and interview stages</p>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#2d5a27] mt-0.5 flex-shrink-0" />
                  <span className="text-[#4a5568]">Age-appropriate assessment for grade placement</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#2d5a27] mt-0.5 flex-shrink-0" />
                  <span className="text-[#4a5568]">Student interaction session with teachers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#2d5a27] mt-0.5 flex-shrink-0" />
                  <span className="text-[#4a5568]">Parent-student interview (virtual or in-person)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#2d5a27] mt-0.5 flex-shrink-0" />
                  <span className="text-[#4a5568]">School values alignment discussion</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#2d5a27] mt-0.5 flex-shrink-0" />
                  <span className="text-[#4a5568]">Campus tour and orientation session</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#2d5a27] mt-0.5 flex-shrink-0" />
                  <span className="text-[#4a5568]">Reference check from previous school (if applicable)</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Grade-wise Admission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Grade-wise Admission</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              We welcome students across all grade levels, with specific requirements 
              and expectations tailored to each developmental stage.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 fade-in-section">
            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 interactive-card">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#1f514c]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-[#1f514c]" />
                </div>
                <h3 className="text-2xl font-bold text-[#2d3748] mb-2">Primary School</h3>
                <Badge className="bg-[#1f514c]/10 text-[#1f514c]">Grades K-5</Badge>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#2d3748] mb-2">Age Requirements:</h4>
                  <p className="text-sm text-[#4a5568]">Kindergarten: 5+ years by April 1st</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2d3748] mb-2">Assessment Focus:</h4>
                  <ul className="text-sm text-[#4a5568] space-y-1">
                    <li>• Basic readiness skills</li>
                    <li>• Social interaction</li>
                    <li>• Communication abilities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2d3748] mb-2">Capacity:</h4>
                  <p className="text-sm text-[#4a5568]">25 students per grade</p>
                </div>
              </div>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 interactive-card">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#2d5a27]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-[#2d5a27]" />
                </div>
                <h3 className="text-2xl font-bold text-[#2d3748] mb-2">Middle School</h3>
                <Badge className="bg-[#2d5a27]/10 text-[#2d5a27]">Grades 6-8</Badge>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#2d3748] mb-2">Prerequisites:</h4>
                  <p className="text-sm text-[#4a5568]">Grade 5 completion certificate</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2d3748] mb-2">Assessment Focus:</h4>
                  <ul className="text-sm text-[#4a5568] space-y-1">
                    <li>• Academic proficiency</li>
                    <li>• Critical thinking</li>
                    <li>• Leadership potential</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2d3748] mb-2">Capacity:</h4>
                  <p className="text-sm text-[#4a5568]">30 students per grade</p>
                </div>
              </div>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 interactive-card">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#d4831f]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-[#d4831f]" />
                </div>
                <h3 className="text-2xl font-bold text-[#2d3748] mb-2">High School</h3>
                <Badge className="bg-[#d4831f]/10 text-[#d4831f]">Grades 9-12</Badge>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#2d3748] mb-2">Prerequisites:</h4>
                  <p className="text-sm text-[#4a5568]">Grade 8 completion with good standing</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2d3748] mb-2">Assessment Focus:</h4>
                  <ul className="text-sm text-[#4a5568] space-y-1">
                    <li>• Academic excellence</li>
                    <li>• College readiness</li>
                    <li>• Career aspirations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2d3748] mb-2">Capacity:</h4>
                  <p className="text-sm text-[#4a5568]">35 students per grade</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Application Process</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              Follow these simple steps to complete your application. Our admissions team 
              is here to guide you through every stage of the process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 fade-in-section">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#1f514c]/10 rounded-3xl flex items-center justify-center mx-auto mb-6 interactive-card">
                <span className="text-2xl font-bold text-[#1f514c]">1</span>
              </div>
              <h3 className="text-xl font-bold text-[#2d3748] mb-4">Submit Application</h3>
              <p className="text-[#4a5568] leading-relaxed">
                Complete the online application form with all required information and documents.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#2d5a27]/10 rounded-3xl flex items-center justify-center mx-auto mb-6 interactive-card">
                <span className="text-2xl font-bold text-[#2d5a27]">2</span>
              </div>
              <h3 className="text-xl font-bold text-[#2d3748] mb-4">Document Review</h3>
              <p className="text-[#4a5568] leading-relaxed">
                Our admissions team reviews your application and supporting documents.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#d4831f]/10 rounded-3xl flex items-center justify-center mx-auto mb-6 interactive-card">
                <span className="text-2xl font-bold text-[#d4831f]">3</span>
              </div>
              <h3 className="text-xl font-bold text-[#2d3748] mb-4">Assessment & Interview</h3>
              <p className="text-[#4a5568] leading-relaxed">
                Participate in age-appropriate assessment and family interview session.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#c44569]/10 rounded-3xl flex items-center justify-center mx-auto mb-6 interactive-card">
                <span className="text-2xl font-bold text-[#c44569]">4</span>
              </div>
              <h3 className="text-xl font-bold text-[#2d3748] mb-4">Admission Decision</h3>
              <p className="text-[#4a5568] leading-relaxed">
                Receive admission decision and complete enrollment process if accepted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fees & Financial Aid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Fees & Financial Aid</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              We believe quality education should be accessible to all deserving students. 
              Our fee structure is designed to be transparent and fair.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 fade-in-section">
            <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 interactive-card lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#1f514c]/10 rounded-2xl flex items-center justify-center">
                  <FileText className="h-8 w-8 text-[#1f514c]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2d3748]">Fee Structure</h3>
                  <p className="text-[#4a5568]">Academic year 2026-27</p>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/50">
                      <th className="text-left py-3 px-2 text-[#2d3748] font-semibold w-1/6">Class Level</th>
                      <th className="text-center py-3 px-2 text-[#2d3748] font-semibold w-1/6">Monthly Tuition (₹)</th>
                      <th className="text-center py-3 px-2 text-[#2d3748] font-semibold w-1/6">Annual Tuition (₹)</th>
                      <th className="text-center py-3 px-2 text-[#2d3748] font-semibold w-1/6">Admission + Security (₹)</th>
                      <th className="text-center py-3 px-2 text-[#2d3748] font-semibold w-1/6">Other Charges* (₹)</th>
                      <th className="text-center py-3 px-2 text-[#2d3748] font-semibold w-1/6">Total (1st Year) (₹)</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-2">
                    <tr className="border-b border-white/30">
                      <td className="py-3 px-2 text-[#4a5568] font-medium">Pre-Nursery</td>
                      <td className="text-center py-3 px-2 text-[#4a5568]">900</td>
                      <td className="text-center py-3 px-2 text-[#4a5568]">10,800</td>
                      <td className="text-center py-3 px-2 text-[#4a5568]">3,000</td>
                      <td className="text-center py-3 px-2 text-[#4a5568]">2,000</td>
                      <td className="text-center py-3 px-2">
                        <Badge className="bg-[#1f514c] text-white px-3 py-1 font-bold">15,800</Badge>
                      </td>
                    </tr>
                    <tr className="border-b border-white/30">
                      <td className="py-3 px-2 text-[#4a5568] font-medium">Kindergarten (Nur + KG)</td>
                      <td className="text-center py-3 px-2 text-[#4a5568]">1,200</td>
                      <td className="text-center py-3 px-2 text-[#4a5568]">14,400</td>
                      <td className="text-center py-3 px-2 text-[#4a5568]">3,500</td>
                      <td className="text-center py-3 px-2 text-[#4a5568]">2,200</td>
                      <td className="text-center py-3 px-2">
                        <Badge className="bg-[#1f514c] text-white px-3 py-1 font-bold">20,100</Badge>
                      </td>
                    </tr>
                    <tr className="border-b border-white/30">
                      <td className="py-3 px-2 text-[#4a5568] font-medium">Classes I–III</td>
                      <td className="text-center py-3 px-2 text-[#4a5568]">1,400</td>
                      <td className="text-center py-3 px-2 text-[#4a5568]">16,800</td>
                      <td className="text-center py-3 px-2 text-[#4a5568]">3,500</td>
                      <td className="text-center py-3 px-2 text-[#4a5568]">2,500</td>
                      <td className="text-center py-3 px-2">
                        <Badge className="bg-[#2d5a27] text-white px-3 py-1 font-bold">22,800</Badge>
                      </td>
                    </tr>
                    <tr className="border-b border-white/30">
                      <td className="py-3 px-2 text-[#4a5568] font-medium">Classes IV–V</td>
                      <td className="text-center py-3 px-2 text-[#4a5568]">1,600</td>
                      <td className="text-center py-3 px-2 text-[#4a5568]">19,200</td>
                      <td className="text-center py-3 px-2 text-[#4a5568]">3,500</td>
                      <td className="text-center py-3 px-2 text-[#4a5568]">2,800</td>
                      <td className="text-center py-3 px-2">
                        <Badge className="bg-[#2d5a27] text-white px-3 py-1 font-bold">25,500</Badge>
                      </td>
                    </tr>
                    <tr className="border-b border-white/30">
                      <td className="py-3 px-2 text-[#4a5568] font-medium">Classes VI–VIII</td>
                      <td className="text-center py-3 px-2 text-[#4a5568]">1,800</td>
                      <td className="text-center py-3 px-2 text-[#4a5568]">21,600</td>
                      <td className="text-center py-3 px-2 text-[#4a5568]">4,000</td>
                      <td className="text-center py-3 px-2 text-[#4a5568]">3,000</td>
                      <td className="text-center py-3 px-2">
                        <Badge className="bg-[#d4831f] text-white px-3 py-1 font-bold">28,600</Badge>
                      </td>
                    </tr>
                    <tr className="border-b border-white/30">
                      <td className="py-3 px-2 text-[#4a5568] font-medium">Classes IX–X</td>
                      <td className="text-center py-3 px-2 text-[#4a5568]">2,000</td>
                      <td className="text-center py-3 px-2 text-[#4a5568]">24,000</td>
                      <td className="text-center py-3 px-2 text-[#4a5568]">4,000</td>
                      <td className="text-center py-3 px-2 text-[#4a5568]">3,200</td>
                      <td className="text-center py-3 px-2">
                        <Badge className="bg-[#d4831f] text-white px-3 py-1 font-bold">31,200</Badge>
                      </td>
                    </tr>
                    <tr className="border-b border-white/30">
                      <td className="py-3 px-2 text-[#4a5568] font-medium">Classes XI–XII (Science)</td>
                      <td className="text-center py-3 px-2 text-[#4a5568]">2,400</td>
                      <td className="text-center py-3 px-2 text-[#4a5568]">28,800</td>
                      <td className="text-center py-3 px-2 text-[#4a5568]">5,000</td>
                      <td className="text-center py-3 px-2 text-[#4a5568]">3,500</td>
                      <td className="text-center py-3 px-2">
                        <Badge className="bg-[#c44569] text-white px-3 py-1 font-bold">37,300</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 text-[#4a5568] font-medium">Classes XI–XII (Commerce/Humanities)</td>
                      <td className="text-center py-3 px-2 text-[#4a5568]">2,200</td>
                      <td className="text-center py-3 px-2 text-[#4a5568]">26,400</td>
                      <td className="text-center py-3 px-2 text-[#4a5568]">5,000</td>
                      <td className="text-center py-3 px-2 text-[#4a5568]">3,000</td>
                      <td className="text-center py-3 px-2">
                        <Badge className="bg-[#c44569] text-white px-3 py-1 font-bold">34,400</Badge>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="mt-6 p-4 bg-[#1f514c]/10 rounded-lg">
                  <p className="text-sm text-[#1f514c] font-medium mb-2">
                    <strong>*Other Annual Charges include:</strong>
                  </p>
                  <ul className="text-xs text-[#1f514c] space-y-1">
                    <li>• Snacks and refreshments</li>
                    <li>• Extracurricular activities and sports</li>
                    <li>• Field trips and educational excursions</li>
                    <li>• Technology and lab usage fees</li>
                  </ul>
                </div>
              </div>
            </Card>

            <div className="lg:col-span-2 mt-12 fade-in-section">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 interactive-card">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-[#d4831f]/10 rounded-2xl flex items-center justify-center">
                      <Award className="h-8 w-8 text-[#d4831f]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#2d3748]">Annual Payment Discount</h3>
                      <p className="text-[#4a5568]">Save with advance payment</p>
                    </div>
                  </div>
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-[#d4831f]/10 px-4 py-2 rounded-full mb-4">
                      <span className="text-2xl font-bold text-[#d4831f]">20%</span>
                      <span className="text-[#2d3748] font-semibold text-sm">Discount</span>
                    </div>
                    <p className="text-[#4a5568] leading-relaxed text-sm">
                      Parents paying the entire year's tuition in advance will receive a 
                      <strong> 20% discount on tuition fees</strong>.
                    </p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-[#4a5568] text-sm">
                      <CheckCircle className="h-4 w-4 text-[#d4831f] flex-shrink-0" />
                      Significant savings on annual tuition
                    </li>
                    <li className="flex items-center gap-2 text-[#4a5568] text-sm">
                      <CheckCircle className="h-4 w-4 text-[#d4831f] flex-shrink-0" />
                      One-time payment convenience
                    </li>
                    <li className="flex items-center gap-2 text-[#4a5568] text-sm">
                      <CheckCircle className="h-4 w-4 text-[#d4831f] flex-shrink-0" />
                      No monthly payment hassles
                    </li>
                    <li className="flex items-center gap-2 text-[#4a5568] text-sm">
                      <CheckCircle className="h-4 w-4 text-[#d4831f] flex-shrink-0" />
                      Available for all grade levels
                    </li>
                  </ul>
                </Card>

                <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 interactive-card">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-[#2d5a27]/10 rounded-2xl flex items-center justify-center">
                      <Award className="h-8 w-8 text-[#2d5a27]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#2d3748]">Financial Aid</h3>
                      <p className="text-[#4a5568]">Supporting deserving students</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-[#4a5568]">
                      <CheckCircle className="h-5 w-5 text-[#2d5a27] flex-shrink-0" />
                      Merit-based scholarships available
                    </li>
                    <li className="flex items-center gap-3 text-[#4a5568]">
                      <CheckCircle className="h-5 w-5 text-[#2d5a27] flex-shrink-0" />
                      Need-based financial assistance
                    </li>
                    <li className="flex items-center gap-3 text-[#4a5568]">
                      <CheckCircle className="h-5 w-5 text-[#2d5a27] flex-shrink-0" />
                      Sibling discounts available
                    </li>
                    <li className="flex items-center gap-3 text-[#4a5568]">
                      <CheckCircle className="h-5 w-5 text-[#2d5a27] flex-shrink-0" />
                      Flexible payment plans
                    </li>
                  </ul>
                </Card>

                <Card className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 interactive-card">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-[#c44569]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-[#c44569]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#2d3748] mb-2">Our Commitment</h3>
                    <Badge className="bg-[#c44569] text-white px-4 py-2">Social Impact Initiative</Badge>
                  </div>
                  <div className="text-center">
                    <p className="text-[#4a5568] leading-relaxed mb-4">
                      We are committed to providing <strong>free education to 50 underprivileged students</strong> 
                      during our first 3 years of operation (2026-2029).
                    </p>
                    <p className="text-sm text-[#4a5568] leading-relaxed">
                      This initiative reflects our belief that every child deserves access to quality education, 
                      regardless of their economic background.
                    </p>
                  </div>
                </Card>
              </div>
            </div>

            <div className="mt-16 text-center fade-in-section">
            </div>
          </div>
        </div>
      </section>

      {/* Contact Admissions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Admissions Support</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              Our dedicated admissions team is here to help you through every step of the process. 
              Don't hesitate to reach out with any questions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 fade-in-section">
            <Card className="bg-[#faf7f2] border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl text-center p-8 interactive-card">
              <div className="w-16 h-16 bg-[#1f514c]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-[#1f514c]" />
              </div>
              <h3 className="text-xl font-bold text-[#2d3748] mb-4">Call Us</h3>
              <p className="text-[#4a5568] mb-4">
                +91 90154 17203<br />
                WhatsApp: +91 90154 17203<br />
                Mon-Fri: 9:00 AM - 5:00 PM
              </p>
              <Button className="bg-[#1f514c] hover:bg-[#2a6b65] text-white">
                Call Now
              </Button>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl text-center p-8 interactive-card">
              <div className="w-16 h-16 bg-[#2d5a27]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-[#2d5a27]" />
              </div>
              <h3 className="text-xl font-bold text-[#2d3748] mb-4">Email Us</h3>
              <p className="text-[#4a5568] mb-4">
                himritihigh@gmail.com<br />
                Response within 24 hours
              </p>
              <Button className="bg-[#2d5a27] hover:bg-[#3a7235] text-white">
                Send Email
              </Button>
            </Card>

            <Card className="bg-[#faf7f2] border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl text-center p-8 interactive-card">
              <div className="w-16 h-16 bg-[#d4831f]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-[#d4831f]" />
              </div>
              <h3 className="text-xl font-bold text-[#2d3748] mb-4">Visit Us</h3>
              <p className="text-[#4a5568] mb-4">
                Rampur Bushahr<br />
                Shimla, Himachal Pradesh
              </p>
              <Button className="bg-[#d4831f] hover:bg-[#b8721a] text-white">
                Schedule Visit
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-[#faf7f2] to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-[#4a5568] mb-12 leading-relaxed">
            Join us in creating something extraordinary. Be part of our founding class and 
            help shape the future of education in the Himalayas.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-[#1f514c] hover:bg-[#2a6b65] text-white px-10 py-4 text-lg h-14 btn-interactive">
              Apply Now
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-[#1f514c] text-[#1f514c] hover:bg-[#1f514c] hover:text-white px-10 py-4 text-lg h-14 btn-interactive">
                Ask Questions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}