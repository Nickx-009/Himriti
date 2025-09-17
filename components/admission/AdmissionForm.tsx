"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import FormSteps from './FormSteps';
import { 
  admissionFormSchema, 
  stepValidationSchemas,
  type AdmissionFormData 
} from '@/lib/validation/admission';
import { 
  GRADE_OPTIONS, 
  RELATIONSHIP_OPTIONS, 
  REFERRAL_SOURCE_OPTIONS 
} from '@/types/admission';

interface AdmissionFormProps {
  onSubmit: (data: AdmissionFormData) => Promise<void>;
  onClose: () => void;
  schoolName?: string;
}

const TOTAL_STEPS = 5;

export default function AdmissionForm({ 
  onSubmit, 
  onClose, 
  schoolName = "Himriti Public School" 
}: AdmissionFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
    watch,
    setValue,
    getValues,
  } = useForm<AdmissionFormData>({
    resolver: zodResolver(admissionFormSchema),
    mode: 'onChange',
    defaultValues: {
      student: {
        fullName: '',
        dateOfBirth: undefined,
        gradeApplyingFor: '',
        currentSchool: '',
        studentEmail: '',
      },
      parent: {
        primaryParentName: '',
        relationshipToStudent: '',
        email: '',
        phoneNumber: '',
        secondaryContactName: '',
        secondaryContactPhone: '',
      },
      address: {
        homeAddress: '',
        city: '',
        stateProvince: '',
        zipPostalCode: '',
        country: '',
      },
      academic: {
        reasonForApplication: '',
        specialNeeds: '',
        extracurricularInterests: [],
        previousAcademicRecords: [],
      },
      additional: {
        howDidYouHear: '',
        preferredStartDate: undefined,
        emergencyContactName: '',
        emergencyContactPhone: '',
      },
    },
  });

  const watchedValues = watch();

  const validateCurrentStep = async (): Promise<boolean> => {
    const stepKeys = ['student', 'parent', 'address', 'academic', 'additional'] as const;
    const currentStepKey = stepKeys[currentStep - 1];
    
    try {
      const currentStepData = getValues(currentStepKey);
      await stepValidationSchemas[currentStepKey].parseAsync(currentStepData);
      return true;
    } catch (error) {
      await trigger(currentStepKey);
      return false;
    }
  };

  const handleNext = async () => {
    const isStepValid = await validateCurrentStep();
    
    if (isStepValid && currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
    } else if (!isStepValid) {
      toast.error('Please fill in all required fields correctly before proceeding.');
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepChange = async (step: number) => {
    if (step <= currentStep) {
      setCurrentStep(step);
    }
  };

  const handleFormSubmit = async (data: AdmissionFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send-admission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(
          `Application submitted successfully! Reference: ${result.applicationRef}. Check your email for confirmation.`,
          { duration: 8000 }
        );
        await onSubmit(data); // Call the parent's onSubmit for any additional handling
      } else {
        throw new Error(result.error || 'Failed to submit application');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to submit application. Please try again.';
      toast.error(errorMessage, { duration: 6000 });
      throw error; // Re-throw to prevent modal from closing
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFormSubmitWrapper = async (data: AdmissionFormData) => {
    try {
      await handleFormSubmit(data);
      onClose();
    } catch (error) {
      // Error already handled in handleFormSubmit, don't close modal
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="student.fullName" className="text-sm font-semibold text-[#2d3748]">
                Student Full Name *
              </Label>
              <Input
                id="student.fullName"
                {...register('student.fullName')}
                placeholder="Enter student's full name"
                className="mt-1 focus:border-[#1f514c] focus:ring-[#1f514c]"
                aria-describedby={errors.student?.fullName ? 'student-name-error' : undefined}
              />
              {errors.student?.fullName && (
                <p id="student-name-error" className="text-red-500 text-sm mt-1">
                  {errors.student.fullName.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="student.gradeApplyingFor" className="text-sm font-semibold text-[#2d3748]">
                Grade Applying For
              </Label>
              <Select
                value={watchedValues.student?.gradeApplyingFor || ''}
                onValueChange={(value) => setValue('student.gradeApplyingFor', value)}
              >
                <SelectTrigger className="mt-1 focus:border-[#1f514c] focus:ring-[#1f514c]">
                  <SelectValue placeholder="Select grade level" />
                </SelectTrigger>
                <SelectContent>
                  {GRADE_OPTIONS.map((grade) => (
                    <SelectItem key={grade.value} value={grade.value}>
                      {grade.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="student.currentSchool" className="text-sm font-semibold text-[#2d3748]">
                Current School (Optional)
              </Label>
              <Input
                id="student.currentSchool"
                {...register('student.currentSchool')}
                placeholder="Enter current school name"
                className="mt-1 focus:border-[#1f514c] focus:ring-[#1f514c]"
              />
            </div>

            <div>
              <Label htmlFor="student.studentEmail" className="text-sm font-semibold text-[#2d3748]">
                Student Email (Optional)
              </Label>
              <Input
                id="student.studentEmail"
                type="email"
                {...register('student.studentEmail')}
                placeholder="Enter student's email address"
                className="mt-1 focus:border-[#1f514c] focus:ring-[#1f514c]"
              />
              {errors.student?.studentEmail && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.student.studentEmail.message}
                </p>
              )}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="parent.primaryParentName" className="text-sm font-semibold text-[#2d3748]">
                Primary Parent/Guardian Name *
              </Label>
              <Input
                id="parent.primaryParentName"
                {...register('parent.primaryParentName')}
                placeholder="Enter parent/guardian name"
                className="mt-1 focus:border-[#1f514c] focus:ring-[#1f514c]"
                aria-describedby={errors.parent?.primaryParentName ? 'parent-name-error' : undefined}
              />
              {errors.parent?.primaryParentName && (
                <p id="parent-name-error" className="text-red-500 text-sm mt-1">
                  {errors.parent.primaryParentName.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="parent.relationshipToStudent" className="text-sm font-semibold text-[#2d3748]">
                Relationship to Student
              </Label>
              <Select
                value={watchedValues.parent?.relationshipToStudent || ''}
                onValueChange={(value) => setValue('parent.relationshipToStudent', value)}
              >
                <SelectTrigger className="mt-1 focus:border-[#1f514c] focus:ring-[#1f514c]">
                  <SelectValue placeholder="Select relationship" />
                </SelectTrigger>
                <SelectContent>
                  {RELATIONSHIP_OPTIONS.map((relationship) => (
                    <SelectItem key={relationship.value} value={relationship.value}>
                      {relationship.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="parent.email" className="text-sm font-semibold text-[#2d3748]">
                Email Address *
              </Label>
              <Input
                id="parent.email"
                type="email"
                {...register('parent.email')}
                placeholder="Enter email address"
                className="mt-1 focus:border-[#1f514c] focus:ring-[#1f514c]"
                aria-describedby={errors.parent?.email ? 'parent-email-error' : undefined}
              />
              {errors.parent?.email && (
                <p id="parent-email-error" className="text-red-500 text-sm mt-1">
                  {errors.parent.email.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="parent.phoneNumber" className="text-sm font-semibold text-[#2d3748]">
                Phone Number
              </Label>
              <Input
                id="parent.phoneNumber"
                type="tel"
                {...register('parent.phoneNumber')}
                placeholder="Enter phone number"
                className="mt-1 focus:border-[#1f514c] focus:ring-[#1f514c]"
              />
              {errors.parent?.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.parent.phoneNumber.message}
                </p>
              )}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="address.homeAddress" className="text-sm font-semibold text-[#2d3748]">
                Home Address
              </Label>
              <Textarea
                id="address.homeAddress"
                {...register('address.homeAddress')}
                placeholder="Enter complete home address"
                className="mt-1 focus:border-[#1f514c] focus:ring-[#1f514c]"
                rows={3}
              />
              {errors.address?.homeAddress && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.address.homeAddress.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="address.city" className="text-sm font-semibold text-[#2d3748]">
                  City
                </Label>
                <Input
                  id="address.city"
                  {...register('address.city')}
                  placeholder="Enter city"
                  className="mt-1 focus:border-[#1f514c] focus:ring-[#1f514c]"
                />
                {errors.address?.city && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.address.city.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="address.stateProvince" className="text-sm font-semibold text-[#2d3748]">
                  State/Province
                </Label>
                <Input
                  id="address.stateProvince"
                  {...register('address.stateProvince')}
                  placeholder="Enter state/province"
                  className="mt-1 focus:border-[#1f514c] focus:ring-[#1f514c]"
                />
                {errors.address?.stateProvince && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.address.stateProvince.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="address.zipPostalCode" className="text-sm font-semibold text-[#2d3748]">
                  ZIP/Postal Code
                </Label>
                <Input
                  id="address.zipPostalCode"
                  {...register('address.zipPostalCode')}
                  placeholder="Enter ZIP/postal code"
                  className="mt-1 focus:border-[#1f514c] focus:ring-[#1f514c]"
                />
                {errors.address?.zipPostalCode && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.address.zipPostalCode.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="address.country" className="text-sm font-semibold text-[#2d3748]">
                  Country
                </Label>
                <Input
                  id="address.country"
                  {...register('address.country')}
                  placeholder="Enter country"
                  className="mt-1 focus:border-[#1f514c] focus:ring-[#1f514c]"
                />
                {errors.address?.country && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.address.country.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="academic.reasonForApplication" className="text-sm font-semibold text-[#2d3748]">
                Reason for Application / Personal Statement *
              </Label>
              <Textarea
                id="academic.reasonForApplication"
                {...register('academic.reasonForApplication')}
                placeholder="Please tell us why you are interested in applying to our school and what you hope to achieve... (minimum 100 characters)"
                className="mt-1 focus:border-[#1f514c] focus:ring-[#1f514c]"
                rows={6}
                aria-describedby={errors.academic?.reasonForApplication ? 'reason-error' : undefined}
              />
              <div className="flex justify-between items-center mt-1">
                {errors.academic?.reasonForApplication && (
                  <p id="reason-error" className="text-red-500 text-sm">
                    {errors.academic.reasonForApplication.message}
                  </p>
                )}
                <p className="text-sm text-[#4a5568] ml-auto">
                  {watchedValues.academic?.reasonForApplication?.length || 0}/2000 characters
                </p>
              </div>
            </div>

            <div>
              <Label htmlFor="academic.specialNeeds" className="text-sm font-semibold text-[#2d3748]">
                Special Needs or Accommodations (Optional)
              </Label>
              <Textarea
                id="academic.specialNeeds"
                {...register('academic.specialNeeds')}
                placeholder="Please describe any special needs or accommodations required..."
                className="mt-1 focus:border-[#1f514c] focus:ring-[#1f514c]"
                rows={3}
              />
              <p className="text-sm text-[#4a5568] mt-1">
                {watchedValues.academic?.specialNeeds?.length || 0}/500 characters
              </p>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="additional.howDidYouHear" className="text-sm font-semibold text-[#2d3748]">
                How did you hear about our school?
              </Label>
              <Select
                value={watchedValues.additional?.howDidYouHear || ''}
                onValueChange={(value) => setValue('additional.howDidYouHear', value)}
              >
                <SelectTrigger className="mt-1 focus:border-[#1f514c] focus:ring-[#1f514c]">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  {REFERRAL_SOURCE_OPTIONS.map((source) => (
                    <SelectItem key={source.value} value={source.value}>
                      {source.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="additional.emergencyContactName" className="text-sm font-semibold text-[#2d3748]">
                Emergency Contact Name
              </Label>
              <Input
                id="additional.emergencyContactName"
                {...register('additional.emergencyContactName')}
                placeholder="Enter emergency contact name"
                className="mt-1 focus:border-[#1f514c] focus:ring-[#1f514c]"
              />
            </div>

            <div>
              <Label htmlFor="additional.emergencyContactPhone" className="text-sm font-semibold text-[#2d3748]">
                Emergency Contact Phone
              </Label>
              <Input
                id="additional.emergencyContactPhone"
                type="tel"
                {...register('additional.emergencyContactPhone')}
                placeholder="Enter emergency contact phone"
                className="mt-1 focus:border-[#1f514c] focus:ring-[#1f514c]"
              />
              {errors.additional?.emergencyContactPhone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.additional.emergencyContactPhone.message}
                </p>
              )}
            </div>

            <div className="bg-[#faf7f2] p-6 rounded-lg border border-[#1f514c]/20">
              <h4 className="text-lg font-semibold text-[#2d3748] mb-3">Review Your Application</h4>
              <p className="text-[#4a5568] mb-4">
                Please review all the information you've provided before submitting your application. 
                You can go back to any previous step to make changes if needed.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Student:</strong> {watchedValues.student?.fullName}</p>
                <p><strong>Grade:</strong> {GRADE_OPTIONS.find(g => g.value === watchedValues.student?.gradeApplyingFor)?.label || 'Not specified'}</p>
                <p><strong>Parent/Guardian:</strong> {watchedValues.parent?.primaryParentName}</p>
                <p><strong>Email:</strong> {watchedValues.parent?.email}</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="shadow-xl border-0">
        <CardHeader className="bg-gradient-to-r from-[#1f514c] to-[#2d5a27] text-white rounded-t-lg">
          <CardTitle className="text-2xl font-bold text-center">
            {schoolName} - Admission Application
          </CardTitle>
          <p className="text-center opacity-90 mt-2">
            Please fill out all sections to complete your application
          </p>
        </CardHeader>
        
        <CardContent className="p-8">
          <form onSubmit={handleSubmit(handleFormSubmitWrapper)}>
            <FormSteps
              currentStep={currentStep}
              totalSteps={TOTAL_STEPS}
              onStepChange={handleStepChange}
              onPrevious={handlePrevious}
              onNext={currentStep === TOTAL_STEPS ? handleSubmit(handleFormSubmitWrapper) : handleNext}
              canProceed={true} // We'll validate on next/submit
              isFirstStep={currentStep === 1}
              isLastStep={currentStep === TOTAL_STEPS}
              isSubmitting={isSubmitting}
            />
            
            <div className="mt-8">
              {renderStepContent()}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}