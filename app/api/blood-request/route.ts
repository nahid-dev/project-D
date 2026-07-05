import { NextResponse } from 'next/server';
import { z } from 'zod';
import prisma from '@/lib/prisma';
import { bloodRequestSchema } from '@/validations/auth.schema';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate request body
    const validatedData = bloodRequestSchema.parse(body);

    const { 
      requesterPhone, patientName, bloodGroup, units, locationLat, locationLng, 
      locationAddress, hospital, contact, urgency, requiredDate 
    } = validatedData;

    // Create Blood Request
    const request = await prisma.bloodRequest.create({
      data: {
        requesterPhone,
        patientName,
        bloodGroup,
        units,
        locationLat: locationLat ?? null,
        locationLng: locationLng ?? null,
        locationAddress,
        hospital: hospital || null,
        contact,
        urgency,
        requiredDate: requiredDate ? new Date(requiredDate) : null,
      },
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Blood request created successfully.',
        data: request
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('[BLOOD_REQUEST_ERROR]', error);

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
