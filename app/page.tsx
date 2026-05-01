'use client';

import { Heart, Zap } from 'lucide-react';
import HomeCard from '@/components/HomeCard';
import StatCard from '@/components/StatCard';
import { useTranslation } from '@/lib/LanguageContext';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="max-w-6xl mx-auto w-full px-6 py-20">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4 text-foreground">
          {t('hero_title')}
        </h2>
        <p className="text-xl text-muted-foreground mb-12">
          {t('hero_subtitle')}
        </p>

        {/* Two Options */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <HomeCard
            title={t('i_am_donor')}
            description={t('donor_description')}
            buttonText={t('login_as_donor')}
            icon={<Heart size={32} />}
            variant="default"
            href="/login?type=donor"
          />

          <HomeCard
            title={t('i_need_blood')}
            description={t('need_blood_description')}
            buttonText={t('request_blood')}
            icon={<Zap size={32} />}
            variant="destructive"
            href="/login?type=request"
          />
        </div>
      </section>

      {/* Info Section */}
      <section className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto font-sans">
        <StatCard value="100K+" label={t('active_donors')} />
        <StatCard value="50K+" label={t('lives_saved')} />
        <StatCard value="24/7" label={t('emergency_support')} />
      </section>
    </div>
  );
}
