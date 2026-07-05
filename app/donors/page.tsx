'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Droplet, Loader2, AlertCircle, Clock } from 'lucide-react';
import { useTranslation } from '@/lib/LanguageContext';

interface Donor {
  id: string;
  fullName: string;
  bloodType: string;
  phone: string;
  locationAddress: string | null;
  locationLat: number | null;
  locationLng: number | null;
  lastDonationDate: string | null;
  isAvailable: boolean;
  distanceKm: number | null;
}

interface BloodRequest {
  id: string;
  submittedAt: string;
  bloodGroup: string;
  location: { lat: number | null; lng: number | null; address: string };
  patientName: string;
  urgency: string;
  hospital?: string;
}

export default function DonorsPage() {
  const { t } = useTranslation();

  const [donors, setDonors] = useState<Donor[]>([]);
  const [latestRequest, setLatestRequest] = useState<BloodRequest | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDonors = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Read the latest blood request from localStorage
        const stored = localStorage.getItem('bloodRequests');
        const requests: BloodRequest[] = stored ? JSON.parse(stored) : [];
        const latest = requests.length > 0 ? requests[requests.length - 1] : null;
        setLatestRequest(latest);

        // Build query params based on the latest request
        const params = new URLSearchParams();
        if (latest?.bloodGroup) params.set('bloodGroup', latest.bloodGroup);
        if (latest?.location?.lat) params.set('lat', String(latest.location.lat));
        if (latest?.location?.lng) params.set('lng', String(latest.location.lng));

        const res = await fetch(`/api/donors?${params.toString()}`);
        const data = await res.json();

        if (data.success) {
          setDonors(data.data);
        } else {
          setError(data.message || 'Failed to load donors');
        }
      } catch (err) {
        console.error(err);
        setError('Something went wrong. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchDonors();
  }, []);

  const formatDistance = (km: number | null) => {
    if (km === null) return null;
    return km < 1 ? `${Math.round(km * 1000)} m` : `${km.toFixed(1)} km`;
  };

  const formatLastDonation = (date: string | null) => {
    if (!date) return null;
    return new Date(date).toLocaleDateString('en-BD', { year: 'numeric', month: 'short' });
  };

  return (
    <div className="max-w-4xl mx-auto w-full px-6 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">{t('view_nearby')}</h1>

        {latestRequest && (
          <div className="mt-4 flex flex-wrap items-center gap-3">
            {/* Blood group badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold">
              <Droplet size={14} />
              {latestRequest.bloodGroup}
            </span>

            {/* Location badge */}
            {latestRequest.location?.address && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-sm font-medium">
                <MapPin size={14} />
                {latestRequest.location.address}
              </span>
            )}

            {/* Urgency badge */}
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-bold ${
              latestRequest.urgency === 'urgent'
                ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
                : latestRequest.urgency === '24h'
                ? 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400'
                : 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
            }`}>
              <Clock size={14} />
              {latestRequest.urgency === 'urgent' ? t('urgent') : latestRequest.urgency === '24h' ? t('within_24h') : t('schedule')}
            </span>

            <p className="text-sm text-muted-foreground w-full mt-1">
              Showing available <span className="font-semibold text-foreground">{latestRequest.bloodGroup}</span> donors for <span className="font-semibold text-foreground">{latestRequest.patientName}</span>
            </p>
          </div>
        )}

        {!latestRequest && !isLoading && (
          <p className="text-muted-foreground mt-2">Showing all available donors</p>
        )}
      </div>

      {/* Loading */}
      {isLoading && (
        <div className="flex items-center justify-center py-24">
          <Loader2 className="size-8 animate-spin text-primary" />
        </div>
      )}

      {/* Error */}
      {!isLoading && error && (
        <div className="flex flex-col items-center justify-center py-24 text-center gap-3">
          <AlertCircle className="size-10 text-destructive" />
          <p className="text-destructive font-medium">{error}</p>
        </div>
      )}

      {/* Empty state */}
      {!isLoading && !error && donors.length === 0 && (
        <div className="flex flex-col items-center justify-center py-24 text-center gap-4">
          <div className="bg-muted/50 p-6 rounded-full">
            <Droplet className="size-10 text-muted-foreground" />
          </div>
          <div>
            <p className="text-lg font-bold text-foreground">No donors found</p>
            <p className="text-muted-foreground text-sm mt-1">
              {latestRequest
                ? `No available ${latestRequest.bloodGroup} donors are registered yet.`
                : 'No available donors are registered yet.'}
            </p>
          </div>
        </div>
      )}

      {/* Donor list */}
      {!isLoading && !error && donors.length > 0 && (
        <div className="grid gap-4">
          {donors.map((donor) => (
            <Card
              key={donor.id}
              className="overflow-hidden hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              <CardContent className="p-5">
                <div className="flex items-center justify-between gap-4">
                  {/* Left: blood badge + info */}
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-extrabold text-sm">
                      {donor.bloodType}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base font-bold text-foreground truncate">{donor.fullName}</h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                        {donor.locationAddress && (
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <MapPin size={12} />
                            <span className="truncate max-w-[180px]">{donor.locationAddress}</span>
                          </span>
                        )}
                        {formatDistance(donor.distanceKm) && (
                          <span className="text-xs font-semibold text-primary">
                            {formatDistance(donor.distanceKm)} away
                          </span>
                        )}
                        {formatLastDonation(donor.lastDonationDate) && (
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock size={12} />
                            Last donated {formatLastDonation(donor.lastDonationDate)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right: availability + contact */}
                  <div className="flex items-center gap-2 shrink-0">
                    <div className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${
                      donor.isAvailable
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                    }`}>
                      <div className={`size-1.5 rounded-full ${donor.isAvailable ? 'bg-green-500' : 'bg-yellow-500'}`} />
                      {donor.isAvailable ? 'Available' : 'Busy'}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1.5 font-sans text-xs h-9"
                      onClick={() => window.open(`tel:${donor.phone}`)}
                    >
                      <Phone size={13} />
                      {donor.phone}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
