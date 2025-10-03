'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#faf7f2] flex items-center justify-center px-6">
      <div className="max-w-md mx-auto text-center">
        <div className="w-16 h-16 bg-[#c44569]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="h-8 w-8 text-[#c44569]" />
        </div>
        <h1 className="text-2xl font-bold text-[#2d3748] mb-4">
          Something went wrong
        </h1>
        <p className="text-[#4a5568] mb-8 leading-relaxed">
          We're sorry, but there was an error loading this page. 
          Please try refreshing or contact us if the problem continues.
        </p>
        <div className="space-y-4">
          <Button 
            onClick={reset}
            className="bg-[#1f514c] hover:bg-[#2a6b65] text-white"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Try Again
          </Button>
          <p className="text-sm text-[#4a5568]">
            Contact us: <a href="mailto:himritihigh@gmail.com" className="text-[#1f514c] hover:underline">himritihigh@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}