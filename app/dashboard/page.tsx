'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Droplet, Calendar, MapPin, User, LogOut } from 'lucide-react';
import { useTranslation } from '@/lib/LanguageContext';

export default function DashboardPage() {
  const router = useRouter();
  const { t } = useTranslation();
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const donorProfile = localStorage.getItem('donorProfile');
    if (!donorProfile) {
      router.push('/onboarding');
      return;
    }
    setProfile(JSON.parse(donorProfile));
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('donorProfile');
    router.push('/');
  };

  if (!profile) return null;

  return (
    <div className="max-w-4xl mx-auto w-full px-6 py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">{t('dashboard_title')}</h1>
          <p className="text-muted-foreground">{t('welcome_back')}, {profile.name}!</p>
        </div>
        <Button variant="outline" onClick={handleLogout} className="gap-2">
          <LogOut size={18} />
          {t('logout')}
        </Button>
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
                <p className="text-2xl font-bold text-primary font-sans">{profile.bloodGroup}</p>
              </div>
              <div className="p-4 rounded-2xl bg-muted/30">
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">{t('status')}</p>
                <div className="flex items-center gap-2">
                  <div className={`size-2 rounded-full ${profile.isAvailable ? 'bg-green-500' : 'bg-yellow-500'}`} />
                  <p className="text-xl font-bold">{profile.isAvailable ? t('available') : t('unavailable')}</p>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <MapPin className="text-muted-foreground shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-sm font-medium">{t('location')}</p>
                  <p className="text-sm text-muted-foreground">{profile.location.address}</p>
                  {profile.location.lat && (
                    <p className="text-[10px] text-muted-foreground/60 font-sans">
                      {t('coordinates')}: {profile.location.lat.toFixed(4)}, {profile.location.lng.toFixed(4)}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="text-muted-foreground shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-sm font-medium">{t('last_donation')}</p>
                  <p className="text-sm text-muted-foreground font-sans">
                    {profile.lastDonationDate || t('no_donations')}
                  </p>
                </div>
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
            <Button className="w-full justify-start" variant="outline">
              {t('update_availability')}
            </Button>
            <Button className="w-full justify-start" variant="outline">
              {t('donation_history')}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
