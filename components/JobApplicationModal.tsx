'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Valid email address is required'),
  phoneNumber: z.string().min(10, 'Valid phone number is required'),
  currentLocation: z.string().min(2, 'Current location is required'),
  qualification: z.string().min(2, 'Highest qualification is required'),
  experience: z.string().min(1, 'Years of experience is required'),
  coverLetter: z.string().min(50, 'Please tell us why you are a good fit (min 50 characters)'),
  resumeUrl: z.string().url('Valid resume URL is required').optional().or(z.literal('')),
});

type FormData = z.infer<typeof formSchema>;

interface JobApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
  department: string;
}

export default function JobApplicationModal({
  isOpen,
  onClose,
  jobTitle,
  department,
}: JobApplicationModalProps) {
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
      const response = await fetch('/api/send-job-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          jobTitle,
          department,
        }),
      });

      if (response.ok) {
        toast.success(
          'Application submitted successfully! We will review your application and contact you soon.'
        );
        reset();
        onClose();
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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#2d3748]">
            Apply for {jobTitle}
          </DialogTitle>
          <DialogDescription className="text-[#4a5568]">
            {department} - Please fill in all required fields
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-[#2d3748] mb-2">
              Full Name *
            </label>
            <input
              {...register('fullName')}
              type="text"
              className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors"
              placeholder="Your full name"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-[#2d3748] mb-2">
                Email Address *
              </label>
              <input
                {...register('email')}
                type="email"
                className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors"
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#2d3748] mb-2">
                Phone Number *
              </label>
              <input
                {...register('phoneNumber')}
                type="tel"
                className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors"
                placeholder="Your contact number"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#2d3748] mb-2">
              Current Location *
            </label>
            <input
              {...register('currentLocation')}
              type="text"
              className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors"
              placeholder="City, State"
            />
            {errors.currentLocation && (
              <p className="text-red-500 text-sm mt-1">{errors.currentLocation.message}</p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-[#2d3748] mb-2">
                Highest Qualification *
              </label>
              <input
                {...register('qualification')}
                type="text"
                className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors"
                placeholder="e.g., M.Ed, B.Ed, M.A."
              />
              {errors.qualification && (
                <p className="text-red-500 text-sm mt-1">{errors.qualification.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#2d3748] mb-2">
                Years of Experience *
              </label>
              <input
                {...register('experience')}
                type="text"
                className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors"
                placeholder="e.g., 5 years"
              />
              {errors.experience && (
                <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#2d3748] mb-2">
              Resume URL (Google Drive, Dropbox, etc.)
            </label>
            <input
              {...register('resumeUrl')}
              type="url"
              className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors"
              placeholder="https://drive.google.com/..."
            />
            {errors.resumeUrl && (
              <p className="text-red-500 text-sm mt-1">{errors.resumeUrl.message}</p>
            )}
            <p className="text-xs text-[#4a5568] mt-1">
              Please share a public link to your resume
            </p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#2d3748] mb-2">
              Cover Letter / Why are you a good fit? *
            </label>
            <textarea
              {...register('coverLetter')}
              rows={6}
              className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors resize-none"
              placeholder="Tell us about your experience, skills, and why you'd be a great addition to our team..."
            ></textarea>
            {errors.coverLetter && (
              <p className="text-red-500 text-sm mt-1">{errors.coverLetter.message}</p>
            )}
          </div>

          <div className="flex gap-4 justify-end pt-4 border-t border-[#F2F2F2]">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="border-[#F2F2F2] text-[#4a5568] hover:bg-[#F2F2F2]"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#1f514c] hover:bg-[#2a6b65] text-white"
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
      </DialogContent>
    </Dialog>
  );
}
