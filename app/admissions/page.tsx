"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  Menu,
  X,
  ChevronRight,
  ArrowRight,
  Heart,
  BookOpen,
  Globe,
  Users
} from 'lucide-react';
import AdmissionModal from '@/components/admission/AdmissionModal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActiveLink = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  const isAboutActive = pathname === '/about' || pathname === '/nep-2020' || pathname === '/global-partnerships';

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl overflow-hidden">
              <img src="/Himriti.png" alt="Himriti Public School Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-[#2d3748]">Himriti</h1>
              <p className="text-sm text-[#4a5568] -mt-1">Public School</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`transition-colors font-medium ${isActiveLink('/') ? 'text-[#1f514c] font-semibold' : 'text-[#4a5568] hover:text-[#1f514c]'}`}>
              Home
            </Link>
                    </div>
                  </Link>
                  
                  <Link href="/global-partnerships" className="block p-3 rounded-xl hover:bg-[#faf7f2] transition-colors group/item">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#d4831f]/10 rounded-lg flex items-center justify-center">
                        <Globe className="h-4 w-4 text-[#d4831f]" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-[#2d3748] group-hover/item:text-[#d4831f]">Global Partnerships</h3>
                        <p className="text-xs text-[#4a5568]">International connections</p>
                      </div>
                    </div>
                  </Link>
                  
                  <Link href="/about/work-with-us" className="block p-3 rounded-xl hover:bg-[#faf7f2] transition-colors group/item">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#c44569]/10 rounded-lg flex items-center justify-center">
                        <Users className="h-4 w-4 text-[#c44569]" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-[#2d3748] group-hover/item:text-[#c44569]">Work with Us</h3>
                        <p className="text-xs text-[#4a5568]">Career opportunities</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            
            <Link href="/academics" className={`transition-colors font-medium ${isActiveLink('/academics') ? 'text-[#1f514c] font-semibold' : 'text-[#4a5568] hover:text-[#1f514c]'}`}>
              Academics
            </Link>
            <Link href="/admissions" className={`transition-colors font-medium ${isActiveLink('/admissions') ? 'text-[#1f514c] font-semibold' : 'text-[#4a5568] hover:text-[#1f514c]'}`}>
              Admissions
            </Link>
            <Link href="/contact" className={`transition-colors font-medium ${isActiveLink('/contact') ? 'text-[#1f514c] font-semibold' : 'text-[#4a5568] hover:text-[#1f514c]'}`}>
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" className="border-[#1f514c] text-[#1f514c] hover:bg-[#1f514c] hover:text-white">
              Schedule Visit
            </Button>
            <AdmissionModal 
              schoolName="Himriti Public School"
            <Link href="/contact">
              <Button size="lg" className="bg-[#1f514c] hover:bg-[#2a6b65] text-white px-10 py-4 text-lg h-14 btn-interactive">
                Apply Now
              </Button>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-[#1f514c] text-[#1f514c] hover:bg-[#1f514c] hover:text-white px-10 py-4 text-lg h-14 btn-interactive">
                Ask Questions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-100">
            <nav className="flex flex-col space-y-6">
              <Link href="/" onClick={toggleMenu} className={`transition-colors font-medium ${isActiveLink('/') ? 'text-[#1f514c] font-semibold' : 'text-[#4a5568] hover:text-[#1f514c]'}`}>
                Home
              </Link>
              <Link href="/about" onClick={toggleMenu} className={`transition-colors font-medium ${isActiveLink('/about') ? 'text-[#1f514c] font-semibold' : 'text-[#4a5568] hover:text-[#1f514c]'}`}>
                About
              </Link>
              <Link href="/academics" onClick={toggleMenu} className={`transition-colors font-medium ${isActiveLink('/academics') ? 'text-[#1f514c] font-semibold' : 'text-[#4a5568] hover:text-[#1f514c]'}`}>
                Academics
              </Link>
              <Link href="/nep-2020" onClick={toggleMenu} className={`transition-colors font-medium ${isActiveLink('/nep-2020') ? 'text-[#1f514c] font-semibold' : 'text-[#4a5568] hover:text-[#1f514c]'}`}>
                NEP 2020
              </Link>
              <Link href="/global-partnerships" onClick={toggleMenu} className={`transition-colors font-medium ${isActiveLink('/global-partnerships') ? 'text-[#1f514c] font-semibold' : 'text-[#4a5568] hover:text-[#1f514c]'}`}>
                Global Partnerships
              </Link>
              <Link href="/about/work-with-us" onClick={toggleMenu} className={`transition-colors font-medium ${isActiveLink('/about/work-with-us') ? 'text-[#1f514c] font-semibold' : 'text-[#4a5568] hover:text-[#1f514c]'}`}>
                Work with Us
              </Link>
              <Link href="/admissions" onClick={toggleMenu} className={`transition-colors font-medium ${isActiveLink('/admissions') ? 'text-[#1f514c] font-semibold' : 'text-[#4a5568] hover:text-[#1f514c]'}`}>
                Admissions
              </Link>
              <Link href="/admissions" onClick={toggleMenu}>
                <Button className="bg-[#1f514c] hover:bg-[#2a6b65] text-white w-full">
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}