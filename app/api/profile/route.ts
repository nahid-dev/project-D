import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    let phone = searchParams.get('phone');

    if (!phone) {
      return NextResponse.json(
        { success: false, message: 'Phone number is required' },
        { status: 400 }
      );
    }

    if (!phone.startsWith('+88')) {
      phone = '+88' + phone;
    }

    
    console.log('===> route.ts:21 ~ phone', phone);

    // Fetch donor profile by phone
    const donor = await prisma.donor.findUnique({
      where: { phone },
      select: {
        id: true,
        phone: true,
        fullName: true,
        bloodType: true,
        email: true,
        gender: true,
        dob: true,
        city: true,
        healthConditions: true,
        locationLat: true,
        locationLng: true,
        locationAddress: true,
        lastDonationDate: true,
        isAvailable: true,
        createdAt: true
      }
    });

    
    console.log('===> route.ts:46 ~ donor', donor);

    if (!donor) {
      return NextResponse.json(
        { success: false, message: 'Donor profile not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: donor },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching profile:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
