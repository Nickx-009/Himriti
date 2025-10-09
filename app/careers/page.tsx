'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PageLayout from '@/components/layout/PageLayout';
import {
  Briefcase,
  Users,
  Heart,
  TrendingUp,
  MapPin,
  Clock,
  DollarSign,
  CircleCheck as CheckCircle,
  GraduationCap,
  BookOpen,
  Target,
  Award,
  Globe,
  Lightbulb,
  UserCheck,
  Calendar,
  FileText,
  Mail,
  Phone,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import JobApplicationModal from '@/components/JobApplicationModal';

export default function CareersPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<{ title: string; department: string } | null>(
    null
  );

  const openApplicationModal = (jobTitle: string, department: string) => {
    setSelectedJob({ title: jobTitle, department });
    setIsApplicationModalOpen(true);
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

    setTimeout(() => {
      const fadeElements = document.querySelectorAll('.fade-in-section');
      fadeElements.forEach(el => observer.observe(el));
    }, 0);

    return () => observer.disconnect();
  }, [selectedCategory]);

  const teachingPositions = [
    {
      title: 'Primary Teacher',
      department: 'Teaching',
      level: 'Grades K-5',
      type: 'Full-time',
      location: 'Rampur Bushahr',
      experience: '3-5 years',
      positions: 3,
      description:
        'Shape young minds in our founding primary school. Must have excellent English communication skills and teaching experience in reputable schools.',
      responsibilities: [
        'Develop and deliver age-appropriate curriculum',
        'Foster a nurturing and inclusive classroom environment',
        'Assess student progress and provide constructive feedback',
        'Collaborate with colleagues on integrated learning projects',
        'Communicate regularly with parents about student development',
      ],
      qualifications: [
        "Bachelor's degree in Education or related field",
        'B.Ed or equivalent teaching certification (recognized by Himachal Pradesh Govt.)',
        '3-5 years of teaching experience in reputable schools',
        'Excellent command over English language',
        'Knowledge of local curriculum requirements in Himachal Pradesh',
        'Experience with NEP 2020 framework preferred',
      ],
    },
    {
      title: 'Music & Performing Arts Teacher',
      department: 'Teaching',
      level: 'All Grades',
      type: 'Full-time (Shared)',
      location: 'Rampur Bushahr',
      experience: '2-5 years',
      positions: 1,
      description:
        'Cultivate musical talent and performing arts appreciation. Teach vocal, instrumental music, and organize school events.',
      responsibilities: [
        'Teach vocal and instrumental music across grade levels',
        'Conduct choir and ensemble performances',
        'Organize school concerts and cultural programs',
        'Plan and execute performing arts events',
        'Integrate traditional Himalayan music and arts',
      ],
      qualifications: [
        "Bachelor's or Master's degree in Music or Performing Arts",
        'Proficiency in vocal and instrumental music',
        'Experience in organizing school events and performances',
        'Knowledge of both Indian and Western music traditions',
        'Teaching certification preferred',
      ],
    },
    {
      title: 'Physical Education (PE) Teacher',
      department: 'Teaching',
      level: 'All Grades',
      type: 'Full-time (Shared)',
      location: 'Rampur Bushahr',
      experience: '2-5 years',
      positions: 1,
      description:
        'Promote physical fitness, sportsmanship, and healthy lifestyles. Lead games, fitness programs, and yoga sessions.',
      responsibilities: [
        'Design and implement comprehensive PE curriculum',
        'Coach school sports teams and lead fitness programs',
        'Teach yoga and wellness practices',
        'Organize sports events and competitions',
        'Promote holistic wellness and mental health',
      ],
      qualifications: [
        "Bachelor's or Master's degree in Physical Education",
        'B.P.Ed or equivalent certification',
        'Experience in games, fitness training, and yoga',
        'First aid and CPR certified',
        'Mountaineering or outdoor education experience preferred',
      ],
    },
    {
      title: 'Computer / STEM Basics Teacher',
      department: 'Teaching',
      level: 'Primary & Middle',
      type: 'Full-time (Shared)',
      location: 'Rampur Bushahr',
      experience: '2-4 years',
      positions: 1,
      description:
        'Introduce students to coding, robotics, and digital literacy. Foster computational thinking and innovation.',
      responsibilities: [
        'Teach computer basics and digital literacy',
        'Introduce coding and programming fundamentals',
        'Facilitate robotics and STEM projects',
        'Maintain innovation lab and equipment',
        'Integrate technology across curriculum',
      ],
      qualifications: [
        "Bachelor's degree in Computer Science, IT, or Education",
        'Experience with coding platforms for kids (Scratch, Python basics)',
        'Knowledge of robotics kits and STEM tools',
        'Teaching certification or relevant experience',
        'Passion for technology education',
      ],
    },
    {
      title: 'English Teacher',
      department: 'Teaching',
      level: 'Middle Section (Grades 6-8)',
      type: 'Full-time',
      location: 'Rampur Bushahr',
      experience: '3-6 years',
      positions: 1,
      description:
        'Develop language proficiency and literary appreciation. Can also handle literature for Grade 5.',
      responsibilities: [
        'Teach English language and literature for Grades 5-8',
        'Develop reading, writing, speaking, and listening skills',
        'Guide students in creative writing and public speaking',
        'Organize debates and literary activities',
        'Prepare students for board examinations',
      ],
      qualifications: [
        "Master's degree in English Literature or Linguistics",
        'B.Ed or equivalent teaching certification',
        'Excellent command of English language',
        'Experience teaching middle school students',
        'Strong communication and classroom management skills',
      ],
    },
    {
      title: 'Hindi Teacher',
      department: 'Teaching',
      level: 'Middle Section (Grades 6-8)',
      type: 'Full-time',
      location: 'Rampur Bushahr',
      experience: '3-6 years',
      positions: 1,
      description:
        'Teach Hindi language and grammar. Foster appreciation for Hindi literature and linguistic skills.',
      responsibilities: [
        'Teach Hindi language, grammar, and literature',
        'Develop language proficiency in reading and writing',
        'Encourage creative expression in Hindi',
        'Organize Hindi cultural activities',
        'Prepare students for board examinations',
      ],
      qualifications: [
        "Master's degree in Hindi or related field",
        'B.Ed with Hindi specialization',
        'Strong command of Hindi language and grammar',
        'Experience teaching middle school students',
        'Knowledge of regional Hindi dialects preferred',
      ],
    },
    {
      title: 'Mathematics Teacher',
      department: 'Teaching',
      level: 'Middle Section (Grades 6-8)',
      type: 'Full-time',
      location: 'Rampur Bushahr',
      experience: '3-7 years',
      positions: 1,
      description:
        'Inspire mathematical thinking and problem-solving in middle school students. Make mathematics relevant and engaging.',
      responsibilities: [
        'Teach mathematics curriculum for Grades 6-8 aligned with CBSE',
        'Develop hands-on activities and real-world applications',
        'Use technology to enhance mathematical understanding',
        'Prepare students for competitive examinations',
        'Lead math enrichment activities',
      ],
      qualifications: [
        "Master's degree in Mathematics or related field",
        'B.Ed with mathematics specialization',
        'Strong subject knowledge and pedagogical skills',
        'Experience with differentiated instruction',
        'Proficiency in educational technology tools',
      ],
    },
    {
      title: 'Science Teacher',
      department: 'Teaching',
      level: 'Middle Section (Grades 6-8)',
      type: 'Full-time',
      location: 'Rampur Bushahr',
      experience: '3-7 years',
      positions: 1,
      description:
        'Teach integrated science covering physics, chemistry, and biology. Make science engaging through experiments and inquiry.',
      responsibilities: [
        'Teach integrated science curriculum for Grades 6-8',
        'Conduct laboratory experiments and demonstrations',
        'Foster scientific inquiry and critical thinking',
        'Organize science fairs and projects',
        'Prepare students for higher science education',
      ],
      qualifications: [
        "Master's degree in Physics, Chemistry, Biology, or General Science",
        'B.Ed with science specialization',
        'Strong knowledge of physics, chemistry, and biology integration',
        'Laboratory management experience',
        'Ability to make science concepts accessible and exciting',
      ],
    },
    {
      title: 'Social Studies Teacher',
      department: 'Teaching',
      level: 'Middle Section (Grades 6-8)',
      type: 'Full-time',
      location: 'Rampur Bushahr',
      experience: '3-6 years',
      positions: 1,
      description:
        'Teach history, geography, and civics. Help students understand their role as informed citizens.',
      responsibilities: [
        'Teach integrated social studies curriculum',
        'Use inquiry-based and experiential learning methods',
        'Organize field trips and heritage walks',
        'Connect local context to global perspectives',
        'Foster civic awareness and social responsibility',
      ],
      qualifications: [
        "Master's degree in History, Geography, or Political Science",
        'B.Ed with social studies specialization',
        'Strong knowledge of Indian history, geography, and civics',
        'Ability to make social studies engaging and relevant',
        'Digital literacy and multimedia skills',
      ],
    },
    {
      title: 'Computer / STEM Teacher',
      department: 'Teaching',
      level: 'Middle & Primary (Overlap)',
      type: 'Full-time (Shared)',
      location: 'Rampur Bushahr',
      experience: '3-5 years',
      positions: 1,
      description:
        'Lead robotics, coding, and innovation lab activities. Can overlap with primary STEM education.',
      responsibilities: [
        'Teach advanced coding and robotics for middle school',
        'Manage innovation lab and STEM equipment',
        'Guide students in technology projects and competitions',
        'Integrate computational thinking across subjects',
        'Support primary STEM education as needed',
      ],
      qualifications: [
        "Bachelor's or Master's degree in Computer Science or Engineering",
        'Experience with coding languages (Python, JavaScript, etc.)',
        'Knowledge of robotics platforms and maker education',
        'Teaching certification or relevant experience',
        'Passion for innovation and creative problem-solving',
      ],
    },
  ];

  const administrativePositions = [
    {
      title: 'Principal / Headmistress',
      department: 'Leadership',
      level: 'School-wide',
      type: 'Full-time',
      location: 'Rampur Bushahr',
      experience: '10+ years',
      positions: 1,
      description:
        'Lead our founding school as Principal. Academic and operations head, shaping the vision, culture, and excellence of Himriti.',
      responsibilities: [
        'Provide strategic leadership and vision for the school',
        'Oversee both academic programs and daily operations',
        'Lead faculty recruitment, development, and evaluation',
        'Build relationships with parents, community, and partners',
        'Ensure compliance with educational standards and regulations',
        'Manage school operations, budget, and resources',
      ],
      qualifications: [
        "Master's degree in Education or Educational Leadership",
        '10+ years of teaching and administrative experience',
        'Proven track record of academic excellence and operational management',
        'Deep understanding of NEP 2020 and CBSE framework',
        'Strong leadership, communication, and interpersonal skills',
        'Experience establishing or leading schools preferred',
      ],
    },
    {
      title: 'Academic Coordinator',
      department: 'Academics',
      level: 'School-wide',
      type: 'Full-time',
      location: 'Rampur Bushahr',
      experience: '5-8 years',
      positions: 1,
      description:
        'Coordinate curriculum, teacher training, and scheduling across all grade levels. Support academic excellence.',
      responsibilities: [
        'Coordinate curriculum implementation across all grades',
        'Organize and lead teacher training and professional development',
        'Manage academic scheduling and timetables',
        'Monitor teaching quality and student learning outcomes',
        'Support teachers with lesson planning and resources',
        'Supervise 2-3 administrative helpers',
      ],
      qualifications: [
        "Master's degree in Education or subject specialization",
        '5-8 years of teaching and coordination experience',
        'Strong organizational and leadership skills',
        'Experience with curriculum design and teacher training',
        'Excellent communication and interpersonal abilities',
        'Proficiency with educational technology and scheduling tools',
      ],
    },
    {
      title: 'Admissions Manager',
      department: 'Admissions',
      level: 'School-wide',
      type: 'Full-time',
      location: 'Rampur Bushahr',
      experience: '3-5 years',
      positions: 1,
      description:
        'Lead admissions strategy and operations. Build our founding class and ensure a smooth enrollment process.',
      responsibilities: [
        'Manage end-to-end admissions process',
        'Conduct school tours and information sessions',
        'Review applications and coordinate assessments',
        'Maintain admissions records and database',
        'Develop marketing and outreach strategies',
      ],
      qualifications: [
        "Bachelor's degree in any field (Master's preferred)",
        '3+ years experience in admissions or marketing',
        'Excellent interpersonal and presentation skills',
        'Strong organizational and multitasking abilities',
        'Proficiency in CRM and database management',
      ],
    },
    {
      title: 'Library & Resource Coordinator',
      department: 'Resources',
      level: 'School-wide',
      type: 'Full-time',
      location: 'Rampur Bushahr',
      experience: '2-5 years',
      positions: 1,
      description:
        'Build and manage our school library and learning resources. Foster a love of reading and research.',
      responsibilities: [
        'Develop and manage school library collection',
        'Organize reading programs and literary events',
        'Teach information literacy and research skills',
        'Maintain digital resources and e-library',
        'Collaborate with teachers on curriculum support',
      ],
      qualifications: [
        "Bachelor's or Master's degree in Library Science",
        'B.Lib or equivalent certification',
        '2+ years library management experience',
        'Knowledge of library classification and cataloging',
        'Proficiency in digital library systems',
      ],
    },
    {
      title: 'IT Coordinator',
      department: 'Technology',
      level: 'School-wide',
      type: 'Full-time',
      location: 'Rampur Bushahr',
      experience: '3-5 years',
      positions: 1,
      description:
        'Manage school technology infrastructure and digital learning tools. Support teachers and students with technology.',
      responsibilities: [
        'Maintain school network, computers, and AV equipment',
        'Support teachers in integrating educational technology',
        'Manage school website and digital platforms',
        'Ensure data security and student online safety',
        'Provide technical training and troubleshooting',
      ],
      qualifications: [
        "Bachelor's degree in Computer Science or IT",
        '3+ years experience in educational technology',
        'Knowledge of learning management systems',
        'Strong troubleshooting and problem-solving skills',
        'Experience in school IT management preferred',
      ],
    },
    {
      title: 'Administrative Officer',
      department: 'Administration',
      level: 'School-wide',
      type: 'Full-time',
      location: 'Rampur Bushahr',
      experience: '3-5 years',
      positions: 2,
      description:
        'Handle daily administrative operations and office management. Ensure efficient school administration.',
      responsibilities: [
        'Manage office operations and correspondence',
        'Maintain student and staff records',
        'Coordinate meetings, events, and schedules',
        'Handle procurement and vendor management',
        'Support HR and payroll administration',
      ],
      qualifications: [
        "Bachelor's degree in any field",
        '3+ years administrative experience',
        'Proficiency in MS Office and management software',
        'Strong organizational and communication skills',
        'Attention to detail and multitasking ability',
      ],
    },
    {
      title: 'HR & Recruitment Specialist',
      department: 'Human Resources',
      level: 'School-wide',
      type: 'Full-time',
      location: 'Rampur Bushahr',
      experience: '3-5 years',
      positions: 1,
      description:
        'Build our exceptional team. Recruit, onboard, and support faculty and staff as we grow.',
      responsibilities: [
        'Lead recruitment for teaching and non-teaching positions',
        'Coordinate onboarding and orientation programs',
        'Manage employee records and documentation',
        'Support professional development initiatives',
        'Handle employee relations and welfare',
      ],
      qualifications: [
        "Bachelor's or Master's degree in HR or related field",
        '3+ years HR experience (education sector preferred)',
        'Strong recruitment and interviewing skills',
        'Knowledge of labor laws and HR best practices',
        'Empathetic and people-oriented approach',
      ],
    },
    {
      title: 'Accounts & Finance Officer',
      department: 'Finance',
      level: 'School-wide',
      type: 'Full-time',
      location: 'Rampur Bushahr',
      experience: '3-5 years',
      positions: 1,
      description:
        'Manage school finances, budgeting, and accounting. Ensure financial transparency and sustainability.',
      responsibilities: [
        'Maintain accounts and financial records',
        'Process fee collection and payments',
        'Prepare budgets and financial reports',
        'Ensure compliance with tax and audit requirements',
        'Manage payroll and vendor payments',
      ],
      qualifications: [
        "Bachelor's degree in Commerce or Accounting (M.Com/CA preferred)",
        '3+ years accounting experience',
        'Proficiency in Tally and accounting software',
        'Strong numerical and analytical skills',
        'Integrity, accuracy, and attention to detail',
      ],
    },
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Industry-leading salary packages with performance incentives',
      color: '#1f514c',
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs',
      color: '#c44569',
    },
    {
      icon: GraduationCap,
      title: 'Professional Development',
      description: 'Continuous learning opportunities and certification support',
      color: '#2d5a27',
    },
    {
      icon: Calendar,
      title: 'Work-Life Balance',
      description: 'Reasonable working hours with generous leave policies',
      color: '#d4831f',
    },
    {
      icon: Award,
      title: 'Recognition & Growth',
      description: 'Clear career progression paths and merit-based advancement',
      color: '#1f514c',
    },
    {
      icon: Globe,
      title: 'Inspiring Location',
      description: 'Live and work in the beautiful Himalayas',
      color: '#2d5a27',
    },
  ];

  const filteredPositions =
    selectedCategory === 'all'
      ? [...teachingPositions, ...administrativePositions]
      : selectedCategory === 'teaching'
        ? teachingPositions
        : administrativePositions;

  return (
    <PageLayout>
      <section className="pt-20 pb-16 bg-gradient-to-b from-[#faf7f2] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-[#1f514c]/10 text-[#1f514c] border-[#1f514c]/20 mb-8 text-sm px-6 py-2 font-medium">
              Join Our Founding Team
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-[#2d3748] mb-8 leading-tight">
              Build the Future of
              <br />
              <span className="text-[#1f514c]">Education with Us</span>
            </h1>
            <p className="text-xl text-[#4a5568] mb-12 leading-relaxed max-w-3xl mx-auto">
              Be part of something extraordinary. Join Himriti as we create a
              world-class educational institution in the heart of the Himalayas. Shape young minds
              and make a lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-[#1f514c] hover:bg-[#2a6b65] text-white px-10 py-4 text-lg h-14 btn-interactive"
              >
                View Open Positions
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#1f514c] text-[#1f514c] hover:bg-[#1f514c] hover:text-white px-10 py-4 text-lg h-14 btn-interactive"
              >
                Submit Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Why Work With Us</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              Join a mission-driven team committed to educational excellence and innovation. We
              offer more than just a job – we offer a chance to make history.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-section">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="bg-[#faf7f2] border-0 shadow-lg rounded-2xl p-8 interactive-card"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${benefit.color}15` }}
                  >
                    <Icon className="h-8 w-8" style={{ color: benefit.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-[#2d3748] mb-3">{benefit.title}</h3>
                  <p className="text-[#4a5568] leading-relaxed">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Open Positions</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed mb-8">
              Explore opportunities across teaching and administrative roles. Join our founding team
              and shape the future of education.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Button
                onClick={() => setSelectedCategory('all')}
                className={`${
                  selectedCategory === 'all'
                    ? 'bg-[#1f514c] text-white'
                    : 'bg-white text-[#1f514c] hover:bg-[#1f514c] hover:text-white'
                } px-8 py-3`}
              >
                All Positions ({teachingPositions.length + administrativePositions.length})
              </Button>
              <Button
                onClick={() => setSelectedCategory('teaching')}
                className={`${
                  selectedCategory === 'teaching'
                    ? 'bg-[#2d5a27] text-white'
                    : 'bg-white text-[#2d5a27] hover:bg-[#2d5a27] hover:text-white'
                } px-8 py-3`}
              >
                Teaching ({teachingPositions.length})
              </Button>
              <Button
                onClick={() => setSelectedCategory('administrative')}
                className={`${
                  selectedCategory === 'administrative'
                    ? 'bg-[#d4831f] text-white'
                    : 'bg-white text-[#d4831f] hover:bg-[#d4831f] hover:text-white'
                } px-8 py-3`}
              >
                Administrative ({administrativePositions.length})
              </Button>
            </div>
          </div>

          <div className="space-y-6 fade-in-section">
            {filteredPositions.map((position, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-lg rounded-2xl p-8 interactive-card hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 bg-[#1f514c]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        {position.department === 'Teaching' ? (
                          <GraduationCap className="h-7 w-7 text-[#1f514c]" />
                        ) : position.department === 'Leadership' ? (
                          <Target className="h-7 w-7 text-[#c44569]" />
                        ) : (
                          <Briefcase className="h-7 w-7 text-[#2d5a27]" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#2d3748] mb-2">{position.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge className="bg-[#1f514c]/10 text-[#1f514c]">
                            {position.department}
                          </Badge>
                          <Badge className="bg-[#2d5a27]/10 text-[#2d5a27]">{position.level}</Badge>
                          {position.positions > 1 && (
                            <Badge className="bg-[#d4831f]/10 text-[#d4831f]">
                              {position.positions} Openings
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>

                    <p className="text-[#4a5568] mb-6 leading-relaxed">{position.description}</p>

                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm text-[#4a5568]">
                        <Briefcase className="h-4 w-4 text-[#1f514c]" />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#4a5568]">
                        <MapPin className="h-4 w-4 text-[#1f514c]" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#4a5568]">
                        <Clock className="h-4 w-4 text-[#1f514c]" />
                        <span>{position.experience} experience</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#4a5568]">
                        <Users className="h-4 w-4 text-[#1f514c]" />
                        <span>
                          {position.positions} {position.positions === 1 ? 'Position' : 'Positions'}
                        </span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-[#2d3748] mb-3 flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-[#1f514c]" />
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {position.responsibilities.map((item, i) => (
                            <li key={i} className="text-sm text-[#4a5568] flex items-start gap-2">
                              <span className="text-[#1f514c] mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#2d3748] mb-3 flex items-center gap-2">
                          <Award className="h-5 w-5 text-[#2d5a27]" />
                          Qualifications
                        </h4>
                        <ul className="space-y-2">
                          {position.qualifications.map((item, i) => (
                            <li key={i} className="text-sm text-[#4a5568] flex items-start gap-2">
                              <span className="text-[#2d5a27] mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 lg:w-48">
                    <Button
                      onClick={() => openApplicationModal(position.title, position.department)}
                      className="bg-[#1f514c] hover:bg-[#2a6b65] text-white w-full"
                    >
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold text-[#2d3748] mb-6">Application Process</h2>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
              Our hiring process is designed to find the best fit for both you and our school. Here
              is what to expect.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 fade-in-section">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#1f514c]/10 rounded-3xl flex items-center justify-center mx-auto mb-6 interactive-card">
                <span className="text-2xl font-bold text-[#1f514c]">1</span>
              </div>
              <h3 className="text-xl font-bold text-[#2d3748] mb-4">Submit Application</h3>
              <p className="text-[#4a5568] leading-relaxed">
                Apply online with your resume, cover letter, and relevant documents.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#2d5a27]/10 rounded-3xl flex items-center justify-center mx-auto mb-6 interactive-card">
                <span className="text-2xl font-bold text-[#2d5a27]">2</span>
              </div>
              <h3 className="text-xl font-bold text-[#2d3748] mb-4">Initial Screening</h3>
              <p className="text-[#4a5568] leading-relaxed">
                Our HR team reviews applications and conducts phone screenings.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#d4831f]/10 rounded-3xl flex items-center justify-center mx-auto mb-6 interactive-card">
                <span className="text-2xl font-bold text-[#d4831f]">3</span>
              </div>
              <h3 className="text-xl font-bold text-[#2d3748] mb-4">Interview & Demo</h3>
              <p className="text-[#4a5568] leading-relaxed">
                Participate in interviews and teaching demonstrations (for teachers).
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#c44569]/10 rounded-3xl flex items-center justify-center mx-auto mb-6 interactive-card">
                <span className="text-2xl font-bold text-[#c44569]">4</span>
              </div>
              <h3 className="text-xl font-bold text-[#2d3748] mb-4">Offer & Onboarding</h3>
              <p className="text-[#4a5568] leading-relaxed">
                Receive offer, complete documentation, and join our orientation program.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#faf7f2]">
        <div className="max-w-4xl mx-auto px-6">
          <Card className="bg-white border-0 shadow-lg rounded-2xl p-8 md:p-12 fade-in-section">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#2d3748] mb-4">Ready to Make an Impact?</h2>
              <p className="text-lg text-[#4a5568] leading-relaxed">
                Join our founding team and help build a world-class educational institution. We are
                looking for passionate, dedicated professionals who share our vision.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-[#faf7f2] border-0 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#1f514c]/10 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-[#1f514c]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2d3748]">Email Your Application</h3>
                    <p className="text-sm text-[#4a5568]">careers@himritischool.com</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-[#faf7f2] border-0 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#2d5a27]/10 rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-[#2d5a27]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2d3748]">Call Us</h3>
                    <p className="text-sm text-[#4a5568]">+91 90154 17203</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-[#1f514c] hover:bg-[#2a6b65] text-white px-12 py-4 text-lg h-14"
              >
                Submit Your Application
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <JobApplicationModal
        isOpen={isApplicationModalOpen}
        onClose={() => setIsApplicationModalOpen(false)}
        jobTitle={selectedJob?.title || ''}
        department={selectedJob?.department || ''}
      />
    </PageLayout>
  );
}
