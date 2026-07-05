import { NextResponse } from 'next/server';
import { z } from 'zod';
import prisma from '@/lib/prisma';
import { loginOtpSchema } from '@/validations/auth.schema';
import { generateOTP, hashData } from '@/lib/utils/otp';
import { sendOTP } from '@/services/sms.service';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate request body
    const validatedData = loginOtpSchema.parse(body);
    const { phone } = validatedData;

    // TODO: Add Rate Limit Placeholder
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

    // Send SMS via service
    await sendOTP(phone, otp);

    // Return success response (NEVER return OTP in response in production)
    return NextResponse.json(
      { 
        success: true, 
        message: 'OTP sent successfully.' 
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('[LOGIN_OTP_ERROR]', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: 'Validation failed', errors: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
