import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const bloodGroup = searchParams.get('bloodGroup');
    const lat = searchParams.get('lat');
    const lng = searchParams.get('lng');

    // Build where clause — only return available donors
    const where: any = { isAvailable: true };
    if (bloodGroup) {
      where.bloodType = bloodGroup;
    }

    const donors = await prisma.donor.findMany({
      where,
      select: {
        id: true,
        fullName: true,
        bloodType: true,
        phone: true,
        locationLat: true,
        locationLng: true,
        locationAddress: true,
        lastDonationDate: true,
        isAvailable: true,
      },
      orderBy: { createdAt: 'desc' },
      take: 50,
    });

    // If requester provided coordinates, compute distance (km) and sort by proximity
    const requestLat = lat ? parseFloat(lat) : null;
    const requestLng = lng ? parseFloat(lng) : null;

    const withDistance = donors.map((d) => {
      let distanceKm: number | null = null;

      if (requestLat !== null && requestLng !== null && d.locationLat && d.locationLng) {
        const R = 6371; // Earth radius in km
        const dLat = ((d.locationLat - requestLat) * Math.PI) / 180;
        const dLng = ((d.locationLng - requestLng) * Math.PI) / 180;
        const a =
          Math.sin(dLat / 2) ** 2 +
          Math.cos((requestLat * Math.PI) / 180) *
            Math.cos((d.locationLat * Math.PI) / 180) *
            Math.sin(dLng / 2) ** 2;
        distanceKm = R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      }

      return { ...d, distanceKm };
    });

    // Sort by distance if available, otherwise keep DB order
    withDistance.sort((a, b) => {
      if (a.distanceKm !== null && b.distanceKm !== null) return a.distanceKm - b.distanceKm;
      if (a.distanceKm !== null) return -1;
      if (b.distanceKm !== null) return 1;
      return 0;
    });

    return NextResponse.json({ success: true, data: withDistance }, { status: 200 });
  } catch (error) {
    console.error('[DONORS_GET_ERROR]', error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}
