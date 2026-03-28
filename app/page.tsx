'use client';

import { Heart, Zap } from 'lucide-react';
import HomeCard from '@/components/HomeCard';
import StatCard from '@/components/StatCard';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto w-full px-6 py-20">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4 text-foreground">
          Be a Hero
        </h2>
        <p className="text-xl text-muted-foreground mb-12">
          Whether you want to donate blood or find it, you&apos;re in the right place
        </p>

        {/* Two Options */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <HomeCard
            title="I am a Donor"
            description="Login to your donor account or register to start your blood donation journey"
            buttonText="Login as Donor"
            icon={<Heart size={32} />}
            variant="default"
            href="/login?type=donor"
          />

          <HomeCard
            title="I need Blood"
            description="Find available blood donors near you or request blood in emergency situations"
            buttonText="Request Blood"
            icon={<Zap size={32} />}
            variant="destructive"
            href="/request-blood"
          />
        </div>
      </section>

      {/* Info Section */}
      <section className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <StatCard value="100K+" label="Active Donors" />
        <StatCard value="50K+" label="Lives Saved" />
        <StatCard value="24/7" label="Emergency Support" />
      </section>
    </div>
  );
}
