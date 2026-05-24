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

    // TODO: Add Resend Cooldown and Max OTP Attempt Placeholders
    // Verify rate limiting and attempts here before checking DB

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

    // Mark OTP as used and Donor as verified in a transaction
    await prisma.$transaction([
      prisma.phoneOTP.update({
        where: { id: latestOTPRecord.id },
        data: { isUsed: true },
      }),
      prisma.donor.update({
        where: { phone },
        data: { isVerified: true },
      }),
    ]);

    // TODO: Generate JWT or Setup Session
    // For now, return a session-ready success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'OTP verified successfully. Donor is now active.',
        // Placeholder for future session/JWT token
        // token: 'jwt-token-placeholder'
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('[VERIFY_OTP_ERROR]', error);

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
