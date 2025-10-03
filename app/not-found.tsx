import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Chrome as Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#faf7f2] flex items-center justify-center px-6">
      <div className="max-w-md mx-auto text-center">
        <div className="w-16 h-16 bg-[#1f514c]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Search className="h-8 w-8 text-[#1f514c]" />
        </div>
        <h1 className="text-6xl font-bold text-[#1f514c] mb-4">404</h1>
        <h2 className="text-2xl font-bold text-[#2d3748] mb-4">
          Page Not Found
        </h2>
        <p className="text-[#4a5568] mb-8 leading-relaxed">
          Sorry, we couldn't find the page you're looking for. 
          It might have been moved, deleted, or you entered the wrong URL.
        </p>
        <div className="space-y-4">
          <Link href="/">
            <Button className="bg-[#1f514c] hover:bg-[#2a6b65] text-white">
              <Home className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <div className="space-y-2">
            <p className="text-sm text-[#4a5568] font-semibold">Quick Links:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link href="/about" className="text-[#1f514c] hover:underline text-sm">About</Link>
              <Link href="/academics" className="text-[#1f514c] hover:underline text-sm">Academics</Link>
              <Link href="/admissions" className="text-[#1f514c] hover:underline text-sm">Admissions</Link>
              <Link href="/contact" className="text-[#1f514c] hover:underline text-sm">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}