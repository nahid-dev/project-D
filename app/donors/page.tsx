'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, MapPin, Phone, Droplet } from 'lucide-react';
import { useTranslation } from '@/lib/LanguageContext';

export default function DonorsPage() {
  const { t } = useTranslation();

  // Mock data for donors
  const donors = [
    { id: 1, name: 'Ariful Islam', bloodGroup: 'O+', distance: '0.8 km', phone: '01712345678' },
    { id: 2, name: 'Sumi Akter', bloodGroup: 'A+', distance: '1.2 km', phone: '01812345678' },
    { id: 3, name: 'Nahid Hasan', bloodGroup: 'B+', distance: '2.5 km', phone: '01912345678' },
  ];

  return (
    <div className="max-w-4xl mx-auto w-full px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-foreground">{t('view_nearby')}</h1>
      
      <div className="grid gap-6">
        {donors.map((donor) => (
          <Card key={donor.id} className="overflow-hidden hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                    {donor.bloodGroup}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{donor.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <MapPin size={14} />
                      {donor.distance}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                   <Button variant="outline" size="sm" className="gap-2 font-sans">
                     <Phone size={14} />
                     {donor.phone}
                   </Button>
                   <Button size="sm">
                     Request
                   </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
