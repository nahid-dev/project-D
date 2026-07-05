'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { MapPin, Loader2, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/lib/LanguageContext';
import { useUserLocation } from '@/hooks/useUserLocation';
import BangladeshLocationSelector, { BangladeshLocation } from '@/components/location/BangladeshLocationSelector';
import { normalizeLocation } from '@/lib/location/normalizeLocation';

export default function OnboardingPage() {
  const router = useRouter();
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    name: '',
    bloodGroup: '',
    gender: '',
    location: {
      lat: null as number | null,
      lng: null as number | null,
      address: '',
    },
    lastDonationDate: '',
    isAvailable: true,
  });

  const {
    location: detectedLocation,
    loading: isLoadingLocation,
    error: locationError,
    getLocation,
    setLocation: setDetectedLocation
  } = useUserLocation();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [bdLocation, setBdLocation] = useState<BangladeshLocation>({
    division: '',
    district: '',
    upazila: '',
  });

  // Sync bdLocation to formData — geocode for lat/lng
  useEffect(() => {
    if (bdLocation.division && bdLocation.district && bdLocation.upazila) {
      normalizeLocation(bdLocation).then(normalized => {
        if (normalized) {
          setFormData(prev => ({
            ...prev,
            location: {
              lat: normalized.latitude,
              lng: normalized.longitude,
              address: normalized.formattedAddress,
            }
          }));
        }
      });
    }
  }, [bdLocation]);

  // Sync detected location to formData
  useEffect(() => {
    if (detectedLocation.lat || detectedLocation.address) {
      setFormData(prev => ({
        ...prev,
        location: detectedLocation
      }));
    }
  }, [detectedLocation]);

  // Sync blood group from login
  useEffect(() => {
    const bg = localStorage.getItem('verifiedBloodGroup');
    if (bg) {
      setFormData(prev => ({ ...prev, bloodGroup: bg }));
    }
  }, []);

  // Check if user already has a profile
  useEffect(() => {
    const donorProfile = localStorage.getItem('donorProfile');
    if (donorProfile) {
      router.push('/dashboard');
    }
  }, [router]);

  // Ensure user came from login OTP verification
  useEffect(() => {
    const phone = localStorage.getItem('verifiedPhone');
    if (!phone && !localStorage.getItem('donorProfile')) {
      router.push('/login');
    }
  }, [router]);

  const handleLocationFetch = () => {
    getLocation();
  };

  const isFormValid = formData.name && formData.bloodGroup && formData.gender;

  const handleSkip = async () => {
    setIsSubmitting(true);
    const phone = localStorage.getItem('verifiedPhone');
    if (!phone) {
      router.push('/login');
      return;
    }

    try {
      const response = await fetch('/api/auth/onboarding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone,
          name: 'Anonymous Donor',
          bloodGroup: formData.bloodGroup || 'A+',
          gender: '',
          locationLat: null,
          locationLng: null,
          locationAddress: '',
          lastDonationDate: '',
          isAvailable: true,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        localStorage.setItem('donorProfile', JSON.stringify({ phone, name: 'Anonymous Donor', bloodGroup: formData.bloodGroup }));
        // Do NOT remove verifiedPhone here — the dashboard needs it to fetch the profile from the API.
        // It will be cleared by the dashboard after a successful fetch.
        localStorage.removeItem('verifiedBloodGroup');
        setShowSuccess(true);
        setTimeout(() => router.push('/dashboard'), 2000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) {
      return;
    }

    setIsSubmitting(true);
    
    const phone = localStorage.getItem('verifiedPhone');
    if (!phone) {
      router.push('/login');
      return;
    }

    try {
      const response = await fetch('/api/auth/onboarding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone,
          name: formData.name,
          bloodGroup: formData.bloodGroup,
          gender: formData.gender,
          locationLat: formData.location.lat,
          locationLng: formData.location.lng,
          locationAddress: formData.location.address,
          lastDonationDate: formData.lastDonationDate,
          isAvailable: formData.isAvailable,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        localStorage.setItem('donorProfile', JSON.stringify({ phone, ...formData }));
        // Do NOT remove verifiedPhone here — the dashboard needs it to fetch the profile from the API.
        // It will be cleared by the dashboard after a successful fetch.
        localStorage.removeItem('verifiedBloodGroup');
        setShowSuccess(true);
        setTimeout(() => router.push('/dashboard'), 2000);
      } else {
        console.error(data.message);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
        <div className="bg-primary/10 p-6 rounded-full mb-6 animate-in zoom-in duration-500">
          <CheckCircle2 className="text-primary size-16" />
        </div>
        <h2 className="text-3xl font-bold mb-3 text-foreground">{t('success_title')}</h2>
        <p className="text-muted-foreground text-lg max-w-sm">
          {t('success_subtitle')}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto w-full px-6 py-12 md:py-20">
      <Card className="border-none shadow bg-card/60 backdrop-blur-md ring-1 ring-foreground/5">
        <CardHeader className="text-center space-y-4">
          <div className="space-y-2">
            <CardTitle className="text-3xl font-bold tracking-tight text-foreground">
              {t('onboarding_title')}
            </CardTitle>
            <CardDescription className="text-base max-w-md mx-auto">
              {t('onboarding_subtitle')}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="mt-4">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Full Name */}
            <div className="space-y-3">
              <label htmlFor="name" className="text-sm font-semibold text-foreground/80 flex items-center gap-1.5 px-1">
                {t('full_name')} <span className="text-primary">*</span>
              </label>
              <Input
                id="name"
                placeholder="e.g. John Doe"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required
                className="h-12 text-base bg-background/50 focus:bg-background transition-all"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Gender */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground/80 flex items-center gap-1.5 px-1">
                  {t('gender') || 'Gender'} <span className="text-primary">*</span>
                </label>
                <Select 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, gender: value }))}
                  value={formData.gender}
                >
                  <SelectTrigger className="h-12 w-full text-base bg-background/50 focus:bg-background transition-all">
                    <SelectValue placeholder={t('select_gender') || 'Select gender'} />
                  </SelectTrigger>
                  <SelectContent>
                    {['male', 'female', 'other'].map((g) => (
                      <SelectItem key={g} value={g} className="py-3 font-sans capitalize">
                        {t(g) || g}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Last Donation Month */}
              <div className="space-y-3">
                <label htmlFor="lastDonation" className="text-sm font-semibold text-foreground/80 px-1">
                  {t('last_donation_optional')}
                </label>
                <Input
                  id="lastDonation"
                  type="month"
                  value={formData.lastDonationDate}
                  onChange={(e) => setFormData(prev => ({ ...prev, lastDonationDate: e.target.value }))}
                  className="h-12 text-base bg-background/50 focus:bg-background transition-all"
                />
              </div>
            </div>

            {/* Location */}
            <div className="space-y-4">
              <label className="text-sm font-semibold text-foreground/80 flex items-center gap-1.5 px-1">
                {t('location')} <span className="text-muted-foreground text-xs font-normal">(Optional)</span>
              </label>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleLocationFetch}
                    disabled={isLoadingLocation}
                    className={cn(
                      "flex-1 h-12 gap-2 border-2 border-dashed transition-all duration-300",
                      formData.location.lat 
                        ? "border-primary/50 bg-primary/5 text-primary" 
                        : "hover:border-primary hover:bg-primary/5"
                    )}
                  >
                    {isLoadingLocation ? (
                      <Loader2 className="size-5 animate-spin" />
                    ) : (
                      <MapPin className={cn("size-5", formData.location.lat ? "text-primary" : "text-muted-foreground")} />
                    )}
                    {isLoadingLocation ? t('fetching_location') : (formData.location.lat ? t('location_captured') : t('use_current_location'))}
                  </Button>
                </div>
                
                <div className="relative">
                  <BangladeshLocationSelector
                    value={bdLocation}
                    onChange={setBdLocation}
                  />
                  {locationError && (
                    <p className="text-xs text-destructive mt-1.5 font-medium px-1">{locationError}</p>
                  )}
                  {formData.location.lat && !locationError && (
                    <div className="flex items-center gap-1.5 mt-1.5 text-xs text-primary font-medium px-1">
                      <div className="size-1.5 rounded-full bg-primary animate-pulse" />
                      {t('gps_active')}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Availability Toggle */}
            <div className="flex items-center justify-between p-5 rounded-3xl bg-primary/5 border border-primary/10 transition-all hover:bg-primary/10">
              <div className="space-y-1">
                <label className="text-base font-bold text-foreground cursor-pointer select-none" htmlFor="availability">
                  {t('availability')}
                </label>
                <p className="text-sm text-muted-foreground max-w-[240px]">
                  {t('availability_helper')}
                </p>
              </div>
              <button
                type="button"
                id="availability"
                onClick={() => setFormData(prev => ({ ...prev, isAvailable: !prev.isAvailable }))}
                className={cn(
                  "relative inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 shadow-inner",
                  formData.isAvailable ? "bg-primary" : "bg-muted"
                )}
              >
                <span
                  className={cn(
                    "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-xl ring-0 transition-all duration-300",
                    formData.isAvailable ? "translate-x-6 scale-110" : "translate-x-1"
                  )}
                />
              </button>
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex flex-col gap-3">
              <Button
                type="submit"
                className="w-full h-14 text-lg font-bold shadow-primary/20 hover:shadow-primary/30 transition-all active:scale-[0.98]"
                disabled={!isFormValid || isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                    {t('saving') || 'Saving...'}
                  </>
                ) : (
                  t('submit') || 'Submit'
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleSkip}
                disabled={isSubmitting}
                className="w-full h-14 text-lg font-bold"
              >
                {t('skip') || 'Skip for now'}
              </Button>
              <p className="text-center text-xs text-muted-foreground mt-2">
                {t('terms_text')}
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
