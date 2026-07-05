'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Droplet, Calendar, MapPin, User, LogOut, Loader2, CheckCircle2, Edit2 } from 'lucide-react';
import { useTranslation } from '@/lib/LanguageContext';
import { useUserLocation } from '@/hooks/useUserLocation';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Switch } from '@/components/ui/switch';

export default function DashboardPage() {
  const router = useRouter();
  const { t } = useTranslation();
  const [profile, setProfile] = useState<any>(null);
  const [isEditingLocation, setIsEditingLocation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);

  const {
    location: newLocation,
    loading: isLoadingLocation,
    error: locationError,
    getLocation,
    setLocation: setNewLocation
  } = useUserLocation();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const verifiedPhone = localStorage.getItem('verifiedPhone');
        const savedProfile = localStorage.getItem('donorProfile');

        // --- Tier 1: Fresh donor session (just logged in / completed onboarding) ---
        if (verifiedPhone) {
          const response = await fetch(`/api/profile?phone=${encodeURIComponent(verifiedPhone)}`);
          console.log('===> page.tsx ~ response', response);

          if (!response.ok) {
            // API failed, but we have a cached profile — use it rather than looping
            if (savedProfile) {
              setProfile(JSON.parse(savedProfile));
              localStorage.removeItem('verifiedPhone');
              return;
            }
            router.push('/onboarding');
            return;
          }

          const data = await response.json();
          if (data.success && data.data) {
            setProfile(data.data);
            // Clear verifiedPhone — it was kept alive through onboarding for this fetch.
            localStorage.removeItem('verifiedPhone');
          } else if (savedProfile) {
            // API returned no data but a cached profile exists — use the cache
            setProfile(JSON.parse(savedProfile));
            localStorage.removeItem('verifiedPhone');
          } else {
            router.push('/onboarding');
          }
          return;
        }

        // --- Tier 2: Returning donor OR post-request donor with cached profile ---
        // This prevents the infinite loop: onboarding redirects here because
        // donorProfile exists, but verifiedPhone is gone (e.g. a requester who is
        // also a donor). Use the localStorage cache instead of bouncing back.
        if (savedProfile) {
          try {
            setProfile(JSON.parse(savedProfile));
          } catch {
            router.push('/onboarding');
          }
          return;
        }

        // --- Tier 3: Pure requester (no donor profile at all) ---
        // They came here after submitting a blood request but have no donor account.
        // Redirect them home instead of onboarding to avoid a redirect loop.
        const bloodRequests = localStorage.getItem('bloodRequests');
        if (bloodRequests) {
          router.push('/');
          return;
        }

        // Completely unauthenticated — send to onboarding
        router.push('/onboarding');
      } catch (error) {
        console.error('Error fetching profile:', error);
        router.push('/onboarding');
      } finally {
        setIsLoadingProfile(false);
      }
    };

    fetchProfile();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('donorProfile');
    router.push('/');
  };

  const handleSaveLocation = () => {

    if (!newLocation?.address) return;

    const updatedProfile = {
      ...profile,
      location: newLocation
    };

    localStorage.setItem('donorProfile', JSON.stringify(updatedProfile));
    setProfile(updatedProfile);
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
      setIsEditingLocation(false);
    }, 2000);
  };

  console.log(profile)

  useEffect(() => {
    if (isEditingLocation && profile?.location) {
      setNewLocation(profile.location);
    }
  }, [isEditingLocation, profile]);

  const handleToggleAvailability = () => {
    const updatedProfile = {
      ...profile,
      isAvailable: !profile?.isAvailable
    };
    localStorage.setItem('donorProfile', JSON.stringify(updatedProfile));
    setProfile(updatedProfile);
  };

  if (isLoadingProfile) {
    return (
      <div className="max-w-4xl mx-auto w-full px-6 py-12 flex items-center justify-center min-h-screen">
        <Loader2 className="size-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!profile) return null;

  return (
    <div className="max-w-4xl mx-auto w-full px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">{t('dashboard_title')}</h1>
          <p className="text-muted-foreground">{t('welcome_back')}, {profile?.fullName}!</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <Button
            onClick={() => setIsEditingLocation(true)}
            className="gap-2 flex-1 md:flex-none shadow-lg shadow-primary/20 bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
          >
            <MapPin size={18} />
            {t('update_location')}
          </Button>
          <Button variant="outline" onClick={handleLogout} className="gap-2 flex-1 md:flex-none">
            <LogOut size={18} />
            {t('logout')}
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="text-primary" size={20} />
              {t('profile_overview')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-muted/30">
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">{t('blood_group')}</p>
                <p className="text-2xl font-bold text-primary font-sans">{profile?.bloodType}</p>
              </div>
              <div className="p-4 rounded-2xl bg-muted/30 flex justify-between items-center transition-all hover:bg-muted/40 cursor-pointer group" onClick={handleToggleAvailability}>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">{t('status')}</p>
                  <div className="flex items-center gap-2">
                    <div className={`size-2 rounded-full transition-colors ${profile?.isAvailable ? 'bg-green-500' : 'bg-yellow-500'}`} />
                    <p className="text-xl font-bold">{profile?.isAvailable ? t('available') : t('unavailable')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/20">
                <User className="text-muted-foreground shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-sm font-medium">{t('phone_number')}</p>
                  <p className="text-sm text-muted-foreground font-mono">{profile?.phone}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-3">
                  <MapPin className="text-muted-foreground shrink-0 mt-1" size={18} />
                  <div>
                    <p className="text-sm font-medium">{t('location')}</p>
                    {!isEditingLocation && (
                      <>
                        <p className="text-sm text-muted-foreground">{profile?.location?.address}</p>
                        {profile?.location?.lat && (
                          <p className="text-[10px] text-muted-foreground/60 font-sans">
                            {t('coordinates')}: {profile?.location?.lat?.toFixed(4)}, {profile?.location?.lng?.toFixed(4)}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                </div>
                {!isEditingLocation && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsEditingLocation(true)}
                    className="h-8 w-8 p-0"
                  >
                    <Edit2 size={14} />
                  </Button>
                )}
              </div>

              {isEditingLocation && (
                <div className="pl-7 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="space-y-3">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={getLocation}
                      disabled={isLoadingLocation}
                      className={cn(
                        "w-full h-10 gap-2 border-2 border-dashed transition-all duration-300 text-sm",
                        newLocation.lat
                          ? "border-primary/50 bg-primary/5 text-primary"
                          : "hover:border-primary hover:bg-primary/5"
                      )}
                    >
                      {isLoadingLocation ? (
                        <Loader2 className="size-4 animate-spin" />
                      ) : (
                        <MapPin className={cn("size-4", newLocation.lat ? "text-primary" : "text-muted-foreground")} />
                      )}
                      {isLoadingLocation ? t('fetching_location') : (newLocation.lat ? t('location_captured') : t('use_current_location'))}
                    </Button>

                    <div className="relative">
                      <Input
                        placeholder={t('manual_location_placeholder')}
                        value={newLocation.address}
                        onChange={(e) => setNewLocation(prev => ({ ...prev, address: e.target.value }))}
                        className="h-10 text-sm bg-background/50 focus:bg-background transition-all"
                      />
                      {locationError && (
                        <p className="text-[10px] text-destructive mt-1 font-medium">{locationError}</p>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="flex-1 h-9"
                        onClick={handleSaveLocation}
                        disabled={!newLocation.address || showSuccess}
                      >
                        {showSuccess ? <CheckCircle2 size={16} /> : t('submit')}
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="flex-1 h-9"
                        onClick={() => setIsEditingLocation(false)}
                      >
                        {t('cancel')}
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-start gap-3">
              <Calendar className="text-muted-foreground shrink-0 mt-1" size={18} />
              <div>
                <p className="text-sm font-medium">{t('last_donation')}</p>
                <p className="text-sm text-muted-foreground font-sans">
                  {profile?.lastDonationDate || t('no_donations')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Droplet className="text-primary" size={20} />
              {t('quick_actions')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              {t('find_recipients')}
            </Button>
            <div className="flex items-center justify-between p-3 rounded-2xl bg-muted/30 border border-transparent hover:border-primary/20 transition-all">
              <div className="flex items-center gap-2">
                <Droplet className="text-primary size-4" />
                <span className="text-sm font-medium">{t('update_availability')}</span>
              </div>
              <Switch
                checked={profile?.isAvailable || false}
                onCheckedChange={handleToggleAvailability}
                className="data-[state=checked]:bg-green-500"
              />
            </div>
            <Button className="w-full justify-start" variant="outline">
              {t('donation_history')}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div >
  );
}
