import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#2d3748] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 relative">
                <Image
                  src="/Himriti copy.png"
                  alt="Himriti Public School Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Himriti Public School</h3>
                <p className="text-sm opacity-80">Embracing Heritage, Inspiring Future</p>
              </div>
            </Link>
            <p className="text-sm opacity-80 leading-relaxed">
              Nurturing young minds in the heart of the Himalayas, where tradition meets innovation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li>
                <Link href="/" className="hover:text-[#d4831f] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#d4831f] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-[#d4831f] transition-colors">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/nep-2020" className="hover:text-[#d4831f] transition-colors">
                  NEP 2020
                </Link>
              </li>
              <li>
                <Link
                  href="/global-partnerships"
                  className="hover:text-[#d4831f] transition-colors"
                >
                  Global Partnerships
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-[#d4831f] transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#d4831f] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-lg">Programs</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li>
                <Link href="/academics#primary" className="hover:text-[#d4831f] transition-colors">
                  Primary School (K-5)
                </Link>
              </li>
              <li>
                <Link href="/academics#middle" className="hover:text-[#d4831f] transition-colors">
                  Middle School (6-8)
                </Link>
              </li>
              <li>
                <Link href="/academics#high" className="hover:text-[#d4831f] transition-colors">
                  High School (9-12)
                </Link>
              </li>
              <li>
                <Link
                  href="/academics#extracurricular"
                  className="hover:text-[#d4831f] transition-colors"
                >
                  Extracurricular Activities
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-lg">Connect</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li>Newsletter Signup</li>
              <li>Parent Portal</li>
              <li>Alumni Network</li>
              <li>Community Events</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2025 Himriti Public School. All rights reserved. | Made with ❤️ by
            <a href="https://masarna.co" className="text-[#d4831f] hover:underline ml-1">
              Masarna
            </a>{' '}
            |<span className="text-[#d4831f]"> Opening April 2026</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
