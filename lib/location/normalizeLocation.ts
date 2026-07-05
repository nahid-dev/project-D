import { BangladeshLocation } from '@/components/location/BangladeshLocationSelector';

export interface NormalizedLocation {
  division: string;
  district: string;
  upazila: string;

  latitude: number;
  longitude: number;

  formattedAddress: string;
}

/**
 * Normalizes a BangladeshLocation (division, district, upazila) into a standardized object,
 * including a formatted address and geocoded coordinates (latitude, longitude).
 * 
 * It attempts to geocode using Nominatim (OpenStreetMap). If the exact location is not found,
 * it falls back gracefully to broader locations (e.g., district level).
 */
export async function normalizeLocation(
  location: BangladeshLocation | null | undefined
): Promise<NormalizedLocation | null> {
  if (!location || !location.division || !location.district || !location.upazila) {
    return null;
  }

  const { upazila, district, division } = location;
  const formattedAddress = `${upazila}, ${district}, ${division}, Bangladesh`;

  let latitude = 0;
  let longitude = 0;

  try {
    // Try to geocode the full address
    let geo = await geocodeAddress(formattedAddress);
    
    // Fallback to district if upazila fails
    if (!geo) {
      geo = await geocodeAddress(`${district}, ${division}, Bangladesh`);
    }
    
    // Fallback to division if district fails
    if (!geo) {
      geo = await geocodeAddress(`${division}, Bangladesh`);
    }

    if (geo) {
      latitude = geo.lat;
      longitude = geo.lng;
    }
  } catch (error) {
    console.error('Failed to normalize location coordinates:', error);
    // Ignore and leave lat/lng as 0 if network fails, preventing form submission failure
  }

  return {
    division,
    district,
    upazila,
    latitude,
    longitude,
    formattedAddress,
  };
}

async function geocodeAddress(query: string): Promise<{ lat: number; lng: number } | null> {
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1`;
  
  const response = await fetch(url, {
    // Adding headers as per Nominatim usage policy
    headers: {
      'User-Agent': 'GiveBlood-App',
      'Accept-Language': 'en'
    },
    // Don't cache to avoid stale lookups if something changes, though cache is fine
    cache: 'no-store'
  });

  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  if (Array.isArray(data) && data.length > 0) {
    return {
      lat: parseFloat(data[0].lat),
      lng: parseFloat(data[0].lon), // Nominatim uses 'lon' instead of 'lng'
    };
  }

  return null;
}
