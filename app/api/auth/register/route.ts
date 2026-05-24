import { NextResponse } from 'next/server';
import { z } from 'zod';
import prisma from '@/lib/prisma';
import { registerSchema } from '@/validations/auth.schema';
import { generateOTP, hashData } from '@/lib/utils/otp';
import { sendOTP } from '@/services/sms.service';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate request body
    const validatedData = registerSchema.parse(body);

    const { 
      phone, password, fullName, dob, gender, bloodType, city, 
      email, healthConditions, locationLat, locationLng, 
      locationAddress, lastDonationDate, isAvailable 
    } = validatedData;

    // Check if phone already exists
    const existingDonor = await prisma.donor.findUnique({
      where: { phone },
    });

    if (existingDonor) {
      return NextResponse.json(
        { success: false, message: 'Phone number already registered' },
        { status: 409 }
      );
    }

    // Hash the password
    const hashedPassword = await hashData(password);

    // Save donor to database (unverified)
    const newDonor = await prisma.donor.create({
      data: {
        phone,
        password: hashedPassword,
        fullName,
        dob: new Date(dob),
        gender,
        bloodType,
        city,
        email: email || null,
        healthConditions: healthConditions || null,
        locationLat: locationLat ?? null,
        locationLng: locationLng ?? null,
        locationAddress: locationAddress || null,
        lastDonationDate: lastDonationDate ? new Date(lastDonationDate) : null,
        isAvailable: isAvailable ?? true,
        isVerified: false,
      },
    });

    // TODO: Add Basic Rate Limit Placeholder
    // Check if max OTP attempts exceeded within last X minutes

    // Generate and hash OTP
    const otp = generateOTP();
    const otpHash = await hashData(otp);

    // Set expiration (5 minutes from now)
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

    // Save OTP to database
    await prisma.phoneOTP.create({
      data: {
        phone,
        otpHash,
        expiresAt,
      },
    });

    // Simulated SMS Sending
    await sendOTP(phone, otp);

    // Return success response (NEVER return OTP in response in production)
    return NextResponse.json(
      { 
        success: true, 
        message: 'Registration successful. OTP sent for verification.' 
      },
      { status: 201 }
    );

  } catch (error: any) {
    console.error('[REGISTER_ERROR]', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: 'Validation failed', errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
