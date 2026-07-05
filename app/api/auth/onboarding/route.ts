import { NextResponse } from 'next/server';
import { z } from 'zod';
import prisma from '@/lib/prisma';
import { onboardingSchema } from '@/validations/auth.schema';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate request body
    const validatedData = onboardingSchema.parse(body);

    const { 
      phone, name, bloodGroup, gender, locationLat, locationLng, 
      locationAddress, lastDonationDate, isAvailable 
    } = validatedData;

    // Create or Update Donor
    const donor = await prisma.donor.upsert({
      where: { phone },
      update: {
        fullName: name,
        bloodType: bloodGroup,
        gender: gender || null,
        locationLat: locationLat ?? null,
        locationLng: locationLng ?? null,
        locationAddress: locationAddress || null,
        lastDonationDate: lastDonationDate ? new Date(lastDonationDate) : null,
        isAvailable: isAvailable ?? true,
        isVerified: true,
      },
      create: {
        phone,
        fullName: name,
        bloodType: bloodGroup,
        gender: gender || null,
        locationLat: locationLat ?? null,
        locationLng: locationLng ?? null,
        locationAddress: locationAddress || null,
        lastDonationDate: lastDonationDate ? new Date(lastDonationDate) : null,
        isAvailable: isAvailable ?? true,
        isVerified: true,
      },
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Onboarding completed successfully.' 
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('[ONBOARDING_ERROR]', error);

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
