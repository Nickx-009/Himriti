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
import { Send, X } from 'lucide-react';

const formSchema = z.object({
  parentName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address').optional().or(z.literal('')),
  phoneNumber: z.string().min(10, 'Phone number must be at least 10 digits'),
  gradeLevel: z.string().optional(),
  inquiryType: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultInquiryType?: string;
}

export default function ContactFormModal({
  isOpen,
  onClose,
  defaultInquiryType,
}: ContactFormModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      inquiryType: defaultInquiryType || '',
    },
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
        onClose();
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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#2d3748]">Get in Touch</DialogTitle>
          <DialogDescription className="text-[#4a5568]">
            Fill out the form below and we'll get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4">
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
                Email Address
              </label>
              <input
                {...register('email')}
                type="email"
                className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors"
                placeholder="Enter your email (optional)"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-[#2d3748] mb-2">
                Phone Number *
              </label>
              <input
                {...register('phoneNumber')}
                type="tel"
                className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors"
                placeholder="Enter your phone number"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
              )}
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
            <label className="block text-sm font-semibold text-[#2d3748] mb-2">Inquiry Type</label>
            <select
              {...register('inquiryType')}
              className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors"
            >
              <option value="">Select inquiry type</option>
              <option value="admissions">Admissions Information</option>
              <option value="curriculum">Curriculum & Programs</option>
              <option value="visit">Campus Visit</option>
              <option value="fees">Fees & Financial Aid</option>
              <option value="brochure">Brochure Request</option>
              <option value="application">Application Form Request</option>
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

          <div className="flex gap-4 justify-end">
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
      </DialogContent>
    </Dialog>
  );
}
