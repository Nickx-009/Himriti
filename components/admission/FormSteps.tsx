"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronLeft, 
  ChevronRight, 
  User, 
  Users, 
  MapPin, 
  BookOpen, 
  FileText 
} from 'lucide-react';
import { FormStepProps } from '@/types/admission';

interface FormStepsConfig {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  key: string;
}

const FORM_STEPS: FormStepsConfig[] = [
  {
    id: 1,
    title: 'Student Information',
    description: 'Basic student details',
    icon: <User className="h-4 w-4" />,
    key: 'student',
  },
  {
    id: 2,
    title: 'Parent/Guardian',
    description: 'Contact information',
    icon: <Users className="h-4 w-4" />,
    key: 'parent',
  },
  {
    id: 3,
    title: 'Address',
    description: 'Home address details',
    icon: <MapPin className="h-4 w-4" />,
    key: 'address',
  },
  {
    id: 4,
    title: 'Academic Details',
    description: 'Academic information',
    icon: <BookOpen className="h-4 w-4" />,
    key: 'academic',
  },
  {
    id: 5,
    title: 'Additional Info',
    description: 'Final details',
    icon: <FileText className="h-4 w-4" />,
    key: 'additional',
  },
];

interface FormStepsProps extends FormStepProps {
  onPrevious: () => void;
  onNext: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  isSubmitting?: boolean;
}

export default function FormSteps({
  currentStep,
  totalSteps,
  onStepChange,
  onPrevious,
  onNext,
  canProceed,
  isFirstStep,
  isLastStep,
  isSubmitting = false,
}: FormStepsProps) {
  return (
    <div className="w-full">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-[#2d3748]">
            Step {currentStep} of {totalSteps}
          </h3>
          <Badge variant="outline" className="text-[#1f514c] border-[#1f514c]">
            {Math.round((currentStep / totalSteps) * 100)}% Complete
          </Badge>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div 
            className="bg-[#1f514c] h-2 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Step Navigation - Desktop */}
      <div className="hidden md:flex items-center justify-between mb-8">
        {FORM_STEPS.map((step, index) => (
          <React.Fragment key={step.id}>
            <button
              onClick={() => onStepChange(step.id)}
              disabled={step.id > currentStep}
              className={`flex flex-col items-center p-4 rounded-lg transition-all duration-200 ${
                step.id === currentStep
                  ? 'bg-[#1f514c] text-white shadow-lg'
                  : step.id < currentStep
                  ? 'bg-[#faf7f2] text-[#1f514c] hover:bg-[#1f514c]/10 cursor-pointer'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              <div className={`p-2 rounded-full mb-2 ${
                step.id === currentStep
                  ? 'bg-white/20'
                  : step.id < currentStep
                  ? 'bg-[#1f514c]/10'
                  : 'bg-gray-200'
              }`}>
                {step.icon}
              </div>
              <span className="text-sm font-medium text-center">{step.title}</span>
              <span className="text-xs opacity-80 text-center">{step.description}</span>
            </button>
            
            {index < FORM_STEPS.length - 1 && (
              <div className={`flex-1 h-0.5 mx-2 ${
                step.id < currentStep ? 'bg-[#1f514c]' : 'bg-gray-200'
              }`} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Step Navigation - Mobile */}
      <div className="md:hidden mb-8">
        <div className="flex items-center justify-center space-x-2 mb-4">
          {FORM_STEPS.map((step) => (
            <div
              key={step.id}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                step.id === currentStep
                  ? 'bg-[#1f514c] scale-125'
                  : step.id < currentStep
                  ? 'bg-[#1f514c]/60'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        
        <div className="text-center">
          <h4 className="text-lg font-semibold text-[#2d3748] mb-1">
            {FORM_STEPS[currentStep - 1]?.title}
          </h4>
          <p className="text-sm text-[#4a5568]">
            {FORM_STEPS[currentStep - 1]?.description}
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-6 border-t border-gray-200">
        <Button
          type="button"
          variant="outline"
          onClick={onPrevious}
          disabled={isFirstStep || isSubmitting}
          className="flex items-center gap-2 border-[#1f514c] text-[#1f514c] hover:bg-[#1f514c] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        <div className="flex items-center gap-2 text-sm text-[#4a5568]">
          <span>Step {currentStep} of {totalSteps}</span>
        </div>

        <Button
          type="button"
          onClick={onNext}
          disabled={!canProceed || isSubmitting}
          className="flex items-center gap-2 bg-[#1f514c] hover:bg-[#2a6b65] text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLastStep ? (
            isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                Submitting...
              </>
            ) : (
              'Submit Application'
            )
          ) : (
            <>
              Next
              <ChevronRight className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}