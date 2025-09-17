import { z } from 'zod';

// Student Information Schema
export const studentInformationSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Student name must be at least 2 characters')
    .max(100, 'Student name must be less than 100 characters')
    .regex(/^[a-zA-Z\s\-']+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),
  
  dateOfBirth: z
    .date()
    .optional()
    .refine((date) => {
      if (!date) return true;
      const today = new Date();
      const age = today.getFullYear() - date.getFullYear();
      return age >= 3 && age <= 19;
    }, 'Student must be between 3 and 19 years old'),
  
  gradeApplyingFor: z
    .string()
    .optional(),
  
  currentSchool: z
    .string()
    .max(200, 'Current school name must be less than 200 characters')
    .optional(),
  
  studentEmail: z
    .string()
    .email('Please enter a valid email address')
    .optional()
    .or(z.literal('')),
});

// Parent/Guardian Information Schema
export const parentGuardianInformationSchema = z.object({
  primaryParentName: z
    .string()
    .min(2, 'Parent/Guardian name must be at least 2 characters')
    .max(100, 'Parent/Guardian name must be less than 100 characters')
    .regex(/^[a-zA-Z\s\-']+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),
  
  relationshipToStudent: z
    .string()
    .optional(),
  
  email: z
    .string()
    .email('Please enter a valid email address')
    .min(1, 'Email address is required'),
  
  phoneNumber: z
    .string()
    .regex(/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number')
    .optional()
    .or(z.literal('')),
  
  secondaryContactName: z
    .string()
    .max(100, 'Secondary contact name must be less than 100 characters')
    .optional()
    .or(z.literal('')),
  
  secondaryContactPhone: z
    .string()
    .regex(/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number')
    .optional()
    .or(z.literal('')),
});

// Address Information Schema
export const addressInformationSchema = z.object({
  homeAddress: z
    .string()
    .min(10, 'Home address must be at least 10 characters')
    .max(500, 'Home address must be less than 500 characters')
    .optional(),
  
  city: z
    .string()
    .min(2, 'City must be at least 2 characters')
    .max(100, 'City must be less than 100 characters')
    .optional(),
  
  stateProvince: z
    .string()
    .min(2, 'State/Province must be at least 2 characters')
    .max(100, 'State/Province must be less than 100 characters')
    .optional(),
  
  zipPostalCode: z
    .string()
    .min(3, 'ZIP/Postal code must be at least 3 characters')
    .max(20, 'ZIP/Postal code must be less than 20 characters')
    .optional(),
  
  country: z
    .string()
    .min(2, 'Country must be at least 2 characters')
    .max(100, 'Country must be less than 100 characters')
    .optional(),
});

// Academic Details Schema
export const academicDetailsSchema = z.object({
  reasonForApplication: z
    .string()
    .min(100, 'Personal statement must be at least 100 characters')
    .max(2000, 'Personal statement must be less than 2000 characters'),
  
  specialNeeds: z
    .string()
    .max(500, 'Special needs description must be less than 500 characters')
    .optional()
    .or(z.literal('')),
  
  extracurricularInterests: z
    .array(z.string())
    .optional(),
  
  previousAcademicRecords: z
    .array(z.instanceof(File))
    .optional(),
});

// Additional Information Schema
export const additionalInformationSchema = z.object({
  howDidYouHear: z
    .string()
    .optional(),
  
  preferredStartDate: z
    .date()
    .optional(),
  
  emergencyContactName: z
    .string()
    .min(2, 'Emergency contact name must be at least 2 characters')
    .max(100, 'Emergency contact name must be less than 100 characters')
    .optional(),
  
  emergencyContactPhone: z
    .string()
    .regex(/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number')
    .optional(),
});

// Complete Admission Form Schema
export const admissionFormSchema = z.object({
  student: studentInformationSchema,
  parent: parentGuardianInformationSchema,
  address: addressInformationSchema,
  academic: academicDetailsSchema,
  additional: additionalInformationSchema,
});

// Individual step validation schemas for multi-step form
export const stepValidationSchemas = {
  student: studentInformationSchema,
  parent: parentGuardianInformationSchema,
  address: addressInformationSchema,
  academic: academicDetailsSchema,
  additional: additionalInformationSchema,
};

export type AdmissionFormData = z.infer<typeof admissionFormSchema>;
export type StudentInformation = z.infer<typeof studentInformationSchema>;
export type ParentGuardianInformation = z.infer<typeof parentGuardianInformationSchema>;
export type AddressInformation = z.infer<typeof addressInformationSchema>;
export type AcademicDetails = z.infer<typeof academicDetailsSchema>;
export type AdditionalInformation = z.infer<typeof additionalInformationSchema>;