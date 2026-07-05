import { z } from 'zod';

// Bangladeshi phone number regex: optionally starts with +88, followed by 01 and 9 digits
const bdPhoneRegex = /^(?:\+88)?01[3-9]\d{8}$/;

// Reusable phone schema that normalizes the phone number to always start with +88
const phoneSchema = z.string()
  .regex(bdPhoneRegex, { message: "Invalid Bangladeshi phone number" })
  .transform(val => val.startsWith('+88') ? val : `+88${val}`);

export const registerSchema = z.object({
  phone: phoneSchema,
  password: z.string().min(6, { message: "Password must be at least 6 characters" }).optional(),
  fullName: z.string().min(2, { message: "Full name is required" }),
  dob: z.string().refine((date) => !isNaN(Date.parse(date)), { message: "Invalid date of birth" }).optional().or(z.literal('')),
  gender: z.enum(['male', 'female', 'other'], { message: "Gender must be male, female, or other" }).optional().or(z.literal('')),
  bloodType: z.enum(['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'], { message: "Invalid blood type" }),
  city: z.string().min(2, { message: "City is required" }).optional().or(z.literal('')),
  email: z.string().email({ message: "Invalid email" }).optional().or(z.literal('')),
  healthConditions: z.string().optional(),
  
  // Optional onboarding fields
  locationLat: z.number().nullable().optional(),
  locationLng: z.number().nullable().optional(),
  locationAddress: z.string().optional(),
  lastDonationDate: z.string().optional().or(z.literal('')),
  isAvailable: z.boolean().optional()
});

export const loginOtpSchema = z.object({
  phone: phoneSchema
});

export const verifyOtpSchema = z.object({
  phone: phoneSchema,
  otp: z.string().length(6, { message: "OTP must be exactly 6 digits" }).regex(/^\d+$/, { message: "OTP must be numeric" }),
});

export const onboardingSchema = z.object({
  phone: phoneSchema,
  name: z.string().min(2, { message: "Full name is required" }),
  bloodGroup: z.enum(['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'], { message: "Invalid blood type" }),
  gender: z.enum(['male', 'female', 'other'], { message: "Gender is required" }),
  
  // Optional location
  locationLat: z.number().nullable().optional(),
  locationLng: z.number().nullable().optional(),
  locationAddress: z.string().optional().or(z.literal('')),
  lastDonationDate: z.string().optional().or(z.literal('')),
  isAvailable: z.boolean().optional()
});

export const bloodRequestSchema = z.object({
  requesterPhone: phoneSchema,
  patientName: z.string().min(2, { message: "Patient name is required" }),
  bloodGroup: z.enum(['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'], { message: "Invalid blood type" }),
  units: z.number().int().min(1).max(10, { message: "Units must be between 1 and 10" }),
  locationLat: z.number().nullable().optional(),
  locationLng: z.number().nullable().optional(),
  locationAddress: z.string().min(2, { message: "Location address is required" }),
  hospital: z.string().optional().or(z.literal('')),
  contact: phoneSchema,
  urgency: z.enum(['urgent', '24h', 'schedule']),
  requiredDate: z.string().optional().or(z.literal(''))
});
