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
import { Send, ArrowLeft, ArrowRight } from 'lucide-react';

const formSchema = z.object({
  studentFirstName: z.string().min(2, 'First name is required'),
  studentLastName: z.string().min(2, 'Last name is required'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  gender: z.string().min(1, 'Gender is required'),
  gradeApplyingFor: z.string().min(1, 'Grade level is required'),
  previousSchool: z.string().optional(),
  parentFirstName: z.string().min(2, 'Parent first name is required'),
  parentLastName: z.string().min(2, 'Parent last name is required'),
  relationship: z.string().min(1, 'Relationship is required'),
  phoneNumber: z.string().min(10, 'Valid phone number is required'),
  email: z.string().email('Valid email address is required').optional().or(z.literal('')),
  address: z.string().min(10, 'Complete address is required'),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State is required'),
  pincode: z.string().min(6, 'Valid pincode is required'),
  emergencyContactName: z.string().min(2, 'Emergency contact name is required'),
  emergencyContactPhone: z.string().min(10, 'Valid emergency contact phone is required'),
  medicalConditions: z.string().optional(),
  allergies: z.string().optional(),
  specialNeeds: z.string().optional(),
  extracurricular: z.string().optional(),
  whyHimriti: z.string().min(20, 'Please tell us why you want to join Himriti (min 20 characters)'),
});

type FormData = z.infer<typeof formSchema>;

interface ApplicationFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplicationFormModal({ isOpen, onClose }: ApplicationFormModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success(
          'Application submitted successfully! We will review your application and contact you within 48 hours.'
        );
        reset();
        setCurrentStep(1);
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

  const nextStep = async () => {
    let fieldsToValidate: (keyof FormData)[] = [];

    if (currentStep === 1) {
      fieldsToValidate = [
        'studentFirstName',
        'studentLastName',
        'dateOfBirth',
        'gender',
        'gradeApplyingFor',
      ];
    } else if (currentStep === 2) {
      fieldsToValidate = [
        'parentFirstName',
        'parentLastName',
        'relationship',
        'phoneNumber',
        'address',
        'city',
        'state',
        'pincode',
      ];
    } else if (currentStep === 3) {
      fieldsToValidate = ['emergencyContactName', 'emergencyContactPhone'];
    }

    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#2d3748]">
            Himriti Application
          </DialogTitle>
          <DialogDescription className="text-[#4a5568]">
            Step {currentStep} of 4 - Please fill in all required fields
          </DialogDescription>
        </DialogHeader>

        <div className="flex gap-2 mb-6">
          {[1, 2, 3, 4].map(step => (
            <div
              key={step}
              className={`flex-1 h-2 rounded-full transition-colors ${
                step <= currentStep ? 'bg-[#1f514c]' : 'bg-[#F2F2F2]'
              }`}
            />
          ))}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-[#2d3748]">Student Information</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#2d3748] mb-2">
                    First Name *
                  </label>
                  <input
                    {...register('studentFirstName')}
                    type="text"
                    className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors"
                    placeholder="Student first name"
                  />
                  {errors.studentFirstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.studentFirstName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2d3748] mb-2">
                    Last Name *
                  </label>
                  <input
                    {...register('studentLastName')}
                    type="text"
                    className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors"
                    placeholder="Student last name"
                  />
                  {errors.studentLastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.studentLastName.message}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#2d3748] mb-2">
                    Date of Birth *
                  </label>
                  <input
                    {...register('dateOfBirth')}
                    type="date"
                    className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors"
                  />
                  {errors.dateOfBirth && (
                    <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2d3748] mb-2">
                    Gender *
                  </label>
                  <select
                    {...register('gender')}
                    className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors"
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.gender && (
                    <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#2d3748] mb-2">
                    Grade Applying For *
                  </label>
                  <select
                    {...register('gradeApplyingFor')}
                    className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors"
                  >
                    <option value="">Select grade</option>
                    <option value="kindergarten">Kindergarten</option>
                    <option value="grade-1">Grade 1</option>
                    <option value="grade-2">Grade 2</option>
                    <option value="grade-3">Grade 3</option>
                    <option value="grade-4">Grade 4</option>
                    <option value="grade-5">Grade 5</option>
                    <option value="grade-6">Grade 6</option>
                    <option value="grade-7">Grade 7</option>
                    <option value="grade-8">Grade 8</option>
                    <option value="grade-9">Grade 9</option>
                    <option value="grade-10">Grade 10</option>
                    <option value="grade-11">Grade 11</option>
                    <option value="grade-12">Grade 12</option>
                  </select>
                  {errors.gradeApplyingFor && (
                    <p className="text-red-500 text-sm mt-1">{errors.gradeApplyingFor.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2d3748] mb-2">
                    Previous School
                  </label>
                  <input
                    {...register('previousSchool')}
                    type="text"
                    className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors"
                    placeholder="Name of previous school"
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-[#2d3748]">Parent/Guardian Information</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#2d3748] mb-2">
                    First Name *
                  </label>
                  <input
                    {...register('parentFirstName')}
                    type="text"
                    className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors"
                    placeholder="Parent first name"
                  />
                  {errors.parentFirstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.parentFirstName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2d3748] mb-2">
                    Last Name *
                  </label>
                  <input
                    {...register('parentLastName')}
                    type="text"
                    className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors"
                    placeholder="Parent last name"
                  />
                  {errors.parentLastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.parentLastName.message}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#2d3748] mb-2">
                    Relationship *
                  </label>
                  <select
                    {...register('relationship')}
                    className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors"
                  >
                    <option value="">Select relationship</option>
                    <option value="father">Father</option>
                    <option value="mother">Mother</option>
                    <option value="guardian">Legal Guardian</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.relationship && (
                    <p className="text-red-500 text-sm mt-1">{errors.relationship.message}</p>
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
                    placeholder="Contact number"
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2d3748] mb-2">
                  Email Address
                </label>
                <input
                  {...register('email')}
                  type="email"
                  className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors"
                  placeholder="Email address (optional)"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2d3748] mb-2">Address *</label>
                <input
                  {...register('address')}
                  type="text"
                  className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors"
                  placeholder="Street address"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                )}
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#2d3748] mb-2">City *</label>
                  <input
                    {...register('city')}
                    type="text"
                    className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors"
                    placeholder="City"
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2d3748] mb-2">State *</label>
                  <input
                    {...register('state')}
                    type="text"
                    className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors"
                    placeholder="State"
                  />
                  {errors.state && (
                    <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2d3748] mb-2">
                    Pincode *
                  </label>
                  <input
                    {...register('pincode')}
                    type="text"
                    className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors"
                    placeholder="Pincode"
                  />
                  {errors.pincode && (
                    <p className="text-red-500 text-sm mt-1">{errors.pincode.message}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-[#2d3748]">
                Emergency Contact & Medical Information
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#2d3748] mb-2">
                    Emergency Contact Name *
                  </label>
                  <input
                    {...register('emergencyContactName')}
                    type="text"
                    className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors"
                    placeholder="Full name"
                  />
                  {errors.emergencyContactName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.emergencyContactName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2d3748] mb-2">
                    Emergency Contact Phone *
                  </label>
                  <input
                    {...register('emergencyContactPhone')}
                    type="tel"
                    className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors"
                    placeholder="Phone number"
                  />
                  {errors.emergencyContactPhone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.emergencyContactPhone.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2d3748] mb-2">
                  Medical Conditions
                </label>
                <textarea
                  {...register('medicalConditions')}
                  rows={3}
                  className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors resize-none"
                  placeholder="Any medical conditions we should be aware of"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2d3748] mb-2">Allergies</label>
                <textarea
                  {...register('allergies')}
                  rows={3}
                  className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors resize-none"
                  placeholder="Any allergies (food, medication, etc.)"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2d3748] mb-2">
                  Special Educational Needs
                </label>
                <textarea
                  {...register('specialNeeds')}
                  rows={3}
                  className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors resize-none"
                  placeholder="Any special educational needs or accommodations required"
                ></textarea>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-[#2d3748]">Additional Information</h3>

              <div>
                <label className="block text-sm font-semibold text-[#2d3748] mb-2">
                  Extracurricular Interests
                </label>
                <textarea
                  {...register('extracurricular')}
                  rows={4}
                  className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors resize-none"
                  placeholder="Sports, arts, music, or other activities your child is interested in"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2d3748] mb-2">
                  Why Himriti? *
                </label>
                <textarea
                  {...register('whyHimriti')}
                  rows={5}
                  className="w-full px-4 py-3 border border-[#F2F2F2] rounded-lg focus:border-[#1f514c] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us why you want your child to join Himriti"
                ></textarea>
                {errors.whyHimriti && (
                  <p className="text-red-500 text-sm mt-1">{errors.whyHimriti.message}</p>
                )}
              </div>
            </div>
          )}

          <div className="flex gap-4 justify-between pt-4 border-t border-[#F2F2F2]">
            <div>
              {currentStep > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  className="border-[#F2F2F2] text-[#4a5568] hover:bg-[#F2F2F2]"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Previous
                </Button>
              )}
            </div>

            <div className="flex gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="border-[#F2F2F2] text-[#4a5568] hover:bg-[#F2F2F2]"
              >
                Cancel
              </Button>

              {currentStep < 4 ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="bg-[#1f514c] hover:bg-[#2a6b65] text-white"
                >
                  Next
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              ) : (
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
              )}
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
