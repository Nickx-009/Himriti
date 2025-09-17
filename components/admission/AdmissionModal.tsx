"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { GraduationCap, Send } from 'lucide-react';
import { GRADE_OPTIONS } from '@/types/admission';

// Simple form schema with phone required instead of email
const simpleAdmissionSchema = z.object({
  studentName: z.string().min(2, 'Student name must be at least 2 characters'),
  gradeApplyingFor: z.string().min(1, 'Please select a grade'),
  parentName: z.string().min(2, 'Parent name must be at least 2 characters'),
  phoneNumber: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address').optional().or(z.literal('')),
  message: z.string().min(20, 'Please provide more details (minimum 20 characters)'),
});

type SimpleAdmissionData = z.infer<typeof simpleAdmissionSchema>;

interface AdmissionModalProps {
  schoolName?: string;
  triggerText?: string;
  triggerVariant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link' | 'destructive';
}

export default function AdmissionModal({
  schoolName = "Himriti Public School",
  triggerText = "Apply for Admission",
  triggerVariant = "default"
}: AdmissionModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<SimpleAdmissionData>({
    resolver: zodResolver(simpleAdmissionSchema),
  });

  const watchedGrade = watch('gradeApplyingFor');

  const onSubmit = async (data: SimpleAdmissionData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          parentName: data.parentName,
          email: data.email || data.phoneNumber + '@phone.contact', // Fallback for phone-only contacts
          phoneNumber: data.phoneNumber,
          gradeLevel: GRADE_OPTIONS.find(g => g.value === data.gradeApplyingFor)?.label || data.gradeApplyingFor,
          inquiryType: 'admissions',
          message: `ADMISSION APPLICATION

Student Name: ${data.studentName}
Grade Applying For: ${GRADE_OPTIONS.find(g => g.value === data.gradeApplyingFor)?.label || data.gradeApplyingFor}
Parent/Guardian: ${data.parentName}
Phone: ${data.phoneNumber}
${data.email ? `Email: ${data.email}` : ''}

Message:
${data.message}`,
        }),
      });

      if (response.ok) {
        toast.success('Application submitted successfully! We\'ll contact you within 24 hours.');
        reset();
        setIsOpen(false);
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

  const handleClose = () => {
    if (!isSubmitting) {
      reset();
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
            px-10 py-4 text-lg h-14 btn-interactive
          `}
        >
          <GraduationCap className="mr-2 h-5 w-5" />
          {triggerText}
        </Button>
      </DialogTrigger>
      
      <DialogContent 
        className="max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <DialogHeader>
          <DialogTitle>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#1f514c]/10 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-[#1f514c]" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#2d3748]">Apply for Admission</h2>
                <p className="text-sm text-[#4a5568] font-normal">{schoolName}</p>
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="studentName" className="text-sm font-semibold text-[#2d3748]">
                Student Name *
              </Label>
              <Input
                id="studentName"
                {...register('studentName')}
                placeholder="Enter student's full name"
                className="mt-1 focus:border-[#1f514c] focus:ring-[#1f514c]"
              />
              {errors.studentName && (
                <p className="text-red-500 text-sm mt-1">{errors.studentName.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="gradeApplyingFor" className="text-sm font-semibold text-[#2d3748]">
                Grade Applying For *
              </Label>
              <Select
                value={watchedGrade || ''}
                onValueChange={(value) => setValue('gradeApplyingFor', value)}
              >
                <SelectTrigger className="mt-1 focus:border-[#1f514c] focus:ring-[#1f514c]">
                  <SelectValue placeholder="Select grade" />
                </SelectTrigger>
                <SelectContent>
                  {GRADE_OPTIONS.map((grade) => (
                    <SelectItem key={grade.value} value={grade.value}>
                      {grade.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.gradeApplyingFor && (
                <p className="text-red-500 text-sm mt-1">{errors.gradeApplyingFor.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="parentName" className="text-sm font-semibold text-[#2d3748]">
                Parent/Guardian Name *
              </Label>
              <Input
                id="parentName"
                {...register('parentName')}
                placeholder="Enter parent/guardian name"
                className="mt-1 focus:border-[#1f514c] focus:ring-[#1f514c]"
              />
              {errors.parentName && (
                <p className="text-red-500 text-sm mt-1">{errors.parentName.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="phoneNumber" className="text-sm font-semibold text-[#2d3748]">
                Phone Number *
              </Label>
              <Input
                id="phoneNumber"
                type="tel"
                {...register('phoneNumber')}
                placeholder="Enter phone number"
                className="mt-1 focus:border-[#1f514c] focus:ring-[#1f514c]"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="email" className="text-sm font-semibold text-[#2d3748]">
              Email Address (Optional)
            </Label>
            <Input
              id="email"
              type="email"
              {...register('email')}
              placeholder="Enter email address"
              className="mt-1 focus:border-[#1f514c] focus:ring-[#1f514c]"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="message" className="text-sm font-semibold text-[#2d3748]">
              Tell us about your interest in our school *
            </Label>
            <Textarea
              id="message"
              {...register('message')}
              placeholder="Please share why you're interested in Himriti Public School and any specific questions you have..."
              className="mt-1 focus:border-[#1f514c] focus:ring-[#1f514c]"
              rows={4}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#1f514c] hover:bg-[#2a6b65] text-white flex-1 btn-interactive"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Submitting...
                </>
              ) : (
                <>
                  Submit Application
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={isSubmitting}
              className="border-[#1f514c] text-[#1f514c] hover:bg-[#1f514c] hover:text-white"
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}