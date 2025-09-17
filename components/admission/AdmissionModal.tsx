"use client";

import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, GraduationCap, Users, FileText, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import AdmissionForm from './AdmissionForm';
import { AdmissionFormData } from '@/lib/validation/admission';

interface AdmissionModalProps {
  schoolName?: string;
  schoolLogo?: string;
  triggerText?: string;
  triggerVariant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link' | 'destructive';
}

export default function AdmissionModal({
  schoolName = "Himriti Public School",
  schoolLogo,
  triggerText = "Apply for Admission",
  triggerVariant = "default"
}: AdmissionModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = async (data: AdmissionFormData): Promise<void> => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call - replace with actual submission logic
      console.log('Admission Application Data:', data);
      
      // Here you would typically:
      // 1. Send data to your API endpoint
      // 2. Upload any files
      // 3. Send confirmation emails
      // 4. Store in database
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For now, we'll just show success
      toast.success(
        `Application submitted successfully! We'll contact you at ${data.parent.email} within 24 hours.`,
        {
          duration: 5000,
        }
      );
      
      setIsOpen(false);
      
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Failed to submit application. Please try again or contact us directly.');
      throw error; // Re-throw to let the form handle it
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant={triggerVariant}
          size="lg"
          className={`
            ${triggerVariant === 'default' ? 'bg-[#1f514c] hover:bg-[#2a6b65] text-white' : ''}
            ${triggerVariant === 'outline' ? 'border-[#1f514c] text-[#1f514c] hover:bg-[#1f514c] hover:text-white' : ''}
            font-semibold px-8 py-3 rounded-lg transition-all duration-200 
            shadow-lg hover:shadow-xl transform hover:scale-105
            focus:outline-none focus:ring-2 focus:ring-[#1f514c] focus:ring-offset-2
          `}
          aria-label={`Open ${schoolName} admission application form`}
        >
          <GraduationCap className="mr-2 h-5 w-5" />
          {triggerText}
        </Button>
      </DialogTrigger>
      
      <DialogContent 
        className="max-w-6xl w-full max-h-[90vh] overflow-hidden p-0 gap-0"
        aria-describedby="admission-modal-description"
      >
        <DialogHeader className="sr-only">
          <DialogTitle>
            {schoolName} Admission Application
          </DialogTitle>
        </DialogHeader>
        
        <div id="admission-modal-description" className="sr-only">
          Complete admission application form for {schoolName}. 
          Fill out student information, parent details, and academic requirements.
        </div>

        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#1f514c] to-[#2d5a27] text-white p-6 relative">
          <button
            onClick={handleClose}
            disabled={isSubmitting}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Close admission application"
          >
            <X className="h-5 w-5" />
          </button>
          
          <div className="flex items-center gap-4 mb-4">
            {schoolLogo ? (
              <img 
                src={schoolLogo} 
                alt={`${schoolName} logo`}
                className="w-12 h-12 rounded-lg bg-white/10 p-1"
              />
            ) : (
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                <GraduationCap className="h-6 w-6" />
              </div>
            )}
            <div>
              <h1 className="text-2xl font-bold">{schoolName}</h1>
              <p className="opacity-90">Admission Application</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 text-sm">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Users className="mr-1 h-3 w-3" />
              K-12 Education
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <FileText className="mr-1 h-3 w-3" />
              5-Step Process
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <CheckCircle className="mr-1 h-3 w-3" />
              Secure & Confidential
            </Badge>
          </div>
        </div>

        {/* Modal Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-200px)]">
          <AdmissionForm
            onSubmit={handleSubmit}
            onClose={handleClose}
            schoolName={schoolName}
          />
        </div>

        {/* Modal Footer */}
        <div className="bg-[#faf7f2] p-4 border-t border-gray-200">
          <div className="flex items-center justify-between text-sm text-[#4a5568]">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-[#1f514c]" />
              <span>Your information is secure and confidential</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Need help? Contact us at himritihigh@gmail.com</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}