// TypeScript interfaces for School Admission Application

export interface StudentInformation {
  fullName: string;
  dateOfBirth?: Date;
  gradeApplyingFor?: string;
  currentSchool?: string;
  studentEmail?: string;
}

export interface ParentGuardianInformation {
  primaryParentName: string;
  relationshipToStudent?: string;
  email: string;
  phoneNumber?: string;
  secondaryContactName?: string;
  secondaryContactPhone?: string;
}

export interface AddressInformation {
  homeAddress?: string;
  city?: string;
  stateProvince?: string;
  zipPostalCode?: string;
  country?: string;
}

export interface AcademicDetails {
  reasonForApplication: string;
  specialNeeds?: string;
  extracurricularInterests?: string[];
  previousAcademicRecords?: File[];
}

export interface AdditionalInformation {
  howDidYouHear?: string;
  preferredStartDate?: Date;
  emergencyContactName?: string;
  emergencyContactPhone?: string;
}

export interface AdmissionFormData {
  student: StudentInformation;
  parent: ParentGuardianInformation;
  address: AddressInformation;
  academic: AcademicDetails;
  additional: AdditionalInformation;
}

export interface FormStepProps {
  currentStep: number;
  totalSteps: number;
  onStepChange: (step: number) => void;
  canProceed: boolean;
}

export interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  schoolName?: string;
  schoolLogo?: string;
}

export type FormStep = 'student' | 'parent' | 'address' | 'academic' | 'additional';

export interface FormStepConfig {
  id: FormStep;
  title: string;
  description: string;
  fields: string[];
}

// Grade options for school admission
export const GRADE_OPTIONS = [
  { value: 'pre-k', label: 'Pre-Kindergarten' },
  { value: 'k', label: 'Kindergarten' },
  { value: '1', label: 'Grade 1' },
  { value: '2', label: 'Grade 2' },
  { value: '3', label: 'Grade 3' },
  { value: '4', label: 'Grade 4' },
  { value: '5', label: 'Grade 5' },
  { value: '6', label: 'Grade 6' },
  { value: '7', label: 'Grade 7' },
  { value: '8', label: 'Grade 8' },
  { value: '9', label: 'Grade 9' },
  { value: '10', label: 'Grade 10' },
  { value: '11', label: 'Grade 11' },
  { value: '12', label: 'Grade 12' },
] as const;

// Relationship options
export const RELATIONSHIP_OPTIONS = [
  { value: 'mother', label: 'Mother' },
  { value: 'father', label: 'Father' },
  { value: 'guardian', label: 'Guardian' },
  { value: 'other', label: 'Other' },
] as const;

// How did you hear about us options
export const REFERRAL_SOURCE_OPTIONS = [
  { value: 'website', label: 'School Website' },
  { value: 'referral', label: 'Referral' },
  { value: 'social-media', label: 'Social Media' },
  { value: 'advertisement', label: 'Advertisement' },
  { value: 'school-event', label: 'School Event' },
  { value: 'other', label: 'Other' },
] as const;