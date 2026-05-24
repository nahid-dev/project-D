import { NextResponse } from 'next/server';
import { z } from 'zod';
import prisma from '@/lib/prisma';
import { verifyOtpSchema } from '@/validations/auth.schema';
import { compareData } from '@/lib/utils/otp';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate request body
    const validatedData = verifyOtpSchema.parse(body);
    const { phone, otp } = validatedData;

    // Find latest unused OTP for the phone number
    const latestOTPRecord = await prisma.phoneOTP.findFirst({
      where: {
        phone,
        isUsed: false,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    if (!latestOTPRecord) {
      return NextResponse.json(
        { success: false, message: 'No active OTP found for this phone number' },
        { status: 404 }
      );
    }

    // Check expiration
    if (new Date() > latestOTPRecord.expiresAt) {
      return NextResponse.json(
        { success: false, message: 'OTP has expired' },
        { status: 400 }
      );
    }

    // Compare hashed OTP
    const isValidOTP = await compareData(otp, latestOTPRecord.otpHash);

    if (!isValidOTP) {
      return NextResponse.json(
        { success: false, message: 'Invalid OTP' },
        { status: 400 }
      );
    }

    // Mark OTP as used
    await prisma.phoneOTP.update({
      where: { id: latestOTPRecord.id },
      data: { isUsed: true },
    });

    // Check if user exists
    const existingDonor = await prisma.donor.findUnique({
      where: { phone },
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'OTP verified successfully.',
        isNewUser: !existingDonor
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('[VERIFY_LOGIN_OTP_ERROR]', error);

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
