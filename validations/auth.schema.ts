import { z } from 'zod';

// Bangladeshi phone number regex: +8801 followed by 9 digits
const bdPhoneRegex = /^\+8801[3-9]\d{8}$/;

export const registerSchema = z.object({
  phone: z.string().regex(bdPhoneRegex, { message: "Invalid Bangladeshi phone number. Must start with +8801" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }).optional().or(z.literal('')),
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
  phone: z.string().regex(bdPhoneRegex, { message: "Invalid Bangladeshi phone number" })
});

export const verifyOtpSchema = z.object({
  phone: z.string().regex(bdPhoneRegex, { message: "Invalid Bangladeshi phone number" }),
  otp: z.string().length(6, { message: "OTP must be exactly 6 digits" }).regex(/^\d+$/, { message: "OTP must be numeric" }),
});

export const onboardingSchema = z.object({
  phone: z.string().regex(bdPhoneRegex, { message: "Invalid Bangladeshi phone number" }),
  name: z.string().min(2, { message: "Full name is required" }),
  bloodGroup: z.enum(['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'], { message: "Invalid blood type" }),
  
  // Optional location
  locationLat: z.number().nullable().optional(),
  locationLng: z.number().nullable().optional(),
  locationAddress: z.string().optional().or(z.literal('')),
  lastDonationDate: z.string().optional().or(z.literal('')),
  isAvailable: z.boolean().optional()
});
