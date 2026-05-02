import { useState } from 'react';
import { useTranslation } from '@/lib/LanguageContext';

export interface LocationData {
  lat: number | null;
  lng: number | null;
  address: string;
}

export const useUserLocation = () => {
  const { t } = useTranslation();
  const [location, setLocation] = useState<LocationData>({
    lat: null,
    lng: null,
    address: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getLocation = async () => {
    setLoading(true);
    setError(null);

    if (typeof window === 'undefined' || !navigator.geolocation) {
      setError(t('location_unavailable'));
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        
        try {
          // Nominatim Reverse Geocoding
          // Identifying as 'GiveBlood-App' as per Nominatim Policy
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&accept-language=bn,en`
          );
          
          if (!response.ok) throw new Error('Geocoding failed');
          
          const data = await response.json();
          const address = data.display_name || '';
          
          const newLocation = {
            lat: latitude,
            lng: longitude,
            address,
          };
          
          setLocation(newLocation);
          setLoading(false);
          return newLocation;
        } catch (err) {
          console.error('Reverse geocoding error:', err);
          // Fallback to just coordinates if geocoding fails
          const coordsOnly = {
            lat: latitude,
            lng: longitude,
            address: location.address, // Keep existing address if any
          };
          setLocation(coordsOnly);
          setError(t('failed_location'));
          setLoading(false);
          return coordsOnly;
        }
      },
      (err) => {
        let msgKey = 'failed_location';
        if (err.code === err.PERMISSION_DENIED) {
          msgKey = 'location_denied';
        } else if (err.code === err.POSITION_UNAVAILABLE) {
          msgKey = 'location_unavailable';
        } else if (err.code === err.TIMEOUT) {
          msgKey = 'location_timeout';
        }
        setError(t(msgKey));
        setLoading(false);
      },
      { 
        timeout: 10000,
        enableHighAccuracy: true 
      }
    );
  };

  return {
    location,
    loading,
    error,
    getLocation,
    setLocation,
  };
};
