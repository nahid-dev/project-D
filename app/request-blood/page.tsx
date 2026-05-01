'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Droplet, MapPin, Loader2, CheckCircle2, Clock, Hospital, Phone, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/lib/LanguageContext';

export default function RequestBloodPage() {
  const router = useRouter();
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    patientName: '',
    bloodGroup: '',
    units: '1',
    location: {
      lat: null as number | null,
      lng: null as number | null,
      address: '',
    },
    hospital: '',
    contact: '',
    urgency: 'urgent',
    requiredDate: '',
  });

  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [locationError, setLocationError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Prefill contact from donorProfile if available
    const savedProfile = localStorage.getItem('donorProfile');
    if (savedProfile) {
      try {
        const profile = JSON.parse(savedProfile);
        if (profile.phone) {
          setFormData(prev => ({ ...prev, contact: profile.phone }));
        }
      } catch (e) {
        console.error('Failed to parse donorProfile');
      }
    }
  }, []);

  const handleLocationFetch = () => {
    setIsLoadingLocation(true);
    setLocationError('');
    
    if (!navigator.geolocation) {
      setLocationError(t('location_unavailable'));
      setIsLoadingLocation(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setFormData(prev => ({
          ...prev,
          location: {
            ...prev.location,
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }
        }));
        setIsLoadingLocation(false);
      },
      (error) => {
        let msgKey = 'failed_location';
        if (error.code === error.PERMISSION_DENIED) {
          msgKey = 'location_denied';
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          msgKey = 'location_unavailable';
        }
        setLocationError(t(msgKey));
        setIsLoadingLocation(false);
      },
      { timeout: 10000 }
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.patientName || !formData.bloodGroup || !formData.units || !formData.location.address || !formData.contact) {
      return;
    }

    setIsSubmitting(true);
    
    const requestObject = {
      ...formData,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString(),
    };

    // Simulate API call
    setTimeout(() => {
      const existingRequests = JSON.parse(localStorage.getItem('bloodRequests') || '[]');
      localStorage.setItem('bloodRequests', JSON.stringify([requestObject, ...existingRequests]));
      
      setShowSuccess(true);
      setIsSubmitting(false);
    }, 1500);
  };

  const isFormValid = formData.patientName && formData.bloodGroup && formData.units && formData.location.address && formData.contact;

  if (showSuccess) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
        <div className="bg-primary/10 p-6 rounded-full mb-6 animate-in zoom-in duration-500">
          <CheckCircle2 className="text-primary size-16" />
        </div>
        <h2 className="text-3xl font-bold mb-3 text-foreground">{t('request_success')}</h2>
        <p className="text-muted-foreground text-lg max-w-sm mb-10">
          {t('notifying_donors')}
        </p>
        
        <div className="flex flex-col w-full max-w-xs gap-4">
          <Button size="lg" className="h-14 font-bold" onClick={() => router.push('/donors')}>
            {t('view_nearby')}
          </Button>
          <Button variant="outline" size="lg" className="h-14 font-bold" onClick={() => router.push('/dashboard')}>
            {t('go_to_dashboard')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto w-full px-6 py-10 md:py-16">
      <Card className="border-none shadow-2xl bg-card/60 backdrop-blur-md ring-1 ring-foreground/5">
        <CardHeader className="text-center space-y-3">
          <div className="flex justify-center">
            <div className="bg-primary/10 p-3 rounded-2xl">
              <Droplet className="text-primary" size={32} />
            </div>
          </div>
          <div className="space-y-1">
            <CardTitle className="text-3xl font-bold tracking-tight text-foreground">
              {t('blood_request_title')}
            </CardTitle>
            <CardDescription className="text-base max-w-sm mx-auto">
              {t('blood_request_subtitle')}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="mt-4">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Patient Name */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground/80 flex items-center gap-2 px-1">
                <User size={16} className="text-primary" />
                {t('patient_name')} <span className="text-primary">*</span>
              </label>
              <Input
                placeholder={t('patient_name_placeholder')}
                value={formData.patientName}
                onChange={(e) => setFormData(prev => ({ ...prev, patientName: e.target.value }))}
                required
                className="h-12 text-base bg-background/50 focus:bg-background transition-all"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Blood Group */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground/80 flex items-center gap-2 px-1">
                  <Droplet size={16} className="text-primary" />
                  {t('blood_group')} <span className="text-primary">*</span>
                </label>
                <Select 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, bloodGroup: value }))}
                  value={formData.bloodGroup}
                >
                  <SelectTrigger className="h-12 w-full text-base bg-background/50 focus:bg-background transition-all font-sans">
                    <SelectValue placeholder={t('select_group')} />
                  </SelectTrigger>
                  <SelectContent>
                    {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((group) => (
                      <SelectItem key={group} value={group} className="py-3 font-sans font-bold">
                        {group}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Units */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground/80 px-1">
                  {t('units_needed')} <span className="text-primary">*</span>
                </label>
                <Input
                  type="number"
                  min="1"
                  max="10"
                  value={formData.units}
                  onChange={(e) => setFormData(prev => ({ ...prev, units: e.target.value }))}
                  required
                  className="h-12 text-base bg-background/50 focus:bg-background transition-all font-sans"
                />
              </div>
            </div>

            {/* Location */}
            <div className="space-y-4">
              <label className="text-sm font-semibold text-foreground/80 flex items-center gap-2 px-1">
                <MapPin size={16} className="text-primary" />
                {t('location')} <span className="text-primary">*</span>
              </label>
              <div className="space-y-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleLocationFetch}
                  disabled={isLoadingLocation}
                  className={cn(
                    "w-full h-12 gap-2 border-2 border-dashed transition-all duration-300",
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
                  {formData.location.lat ? t('location_captured') : t('use_current_location')}
                </Button>
                
                <div className="relative">
                  <Input
                    placeholder={t('manual_location_placeholder')}
                    value={formData.location.address}
                    onChange={(e) => setFormData(prev => ({ 
                      ...prev, 
                      location: { ...prev.location, address: e.target.value } 
                    }))}
                    className="h-12 text-base bg-background/50 focus:bg-background transition-all"
                    required
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

            {/* Hospital & Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground/80 flex items-center gap-2 px-1">
                  <Hospital size={16} className="text-primary" />
                  {t('hospital_optional')}
                </label>
                <Input
                  placeholder="e.g. Apollo Hospital"
                  value={formData.hospital}
                  onChange={(e) => setFormData(prev => ({ ...prev, hospital: e.target.value }))}
                  className="h-12 text-base bg-background/50 focus:bg-background transition-all"
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground/80 flex items-center gap-2 px-1">
                  <Phone size={16} className="text-primary" />
                  {t('contact_number')} <span className="text-primary">*</span>
                </label>
                <Input
                  type="tel"
                  value={formData.contact}
                  onChange={(e) => setFormData(prev => ({ ...prev, contact: e.target.value }))}
                  required
                  className="h-12 text-base bg-background/50 focus:bg-background transition-all font-sans"
                />
              </div>
            </div>

            {/* Urgency */}
            <div className="space-y-4">
              <label className="text-sm font-semibold text-foreground/80 flex items-center gap-2 px-1">
                <Clock size={16} className="text-primary" />
                {t('required_time')}
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'urgent', label: t('urgent') },
                  { id: '24h', label: t('within_24h') },
                  { id: 'schedule', label: t('schedule') },
                ].map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, urgency: option.id }))}
                    className={cn(
                      "px-2 py-4 rounded-2xl border-2 text-xs font-bold transition-all duration-300 shadow-sm",
                      formData.urgency === option.id 
                        ? "bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-[1.02]" 
                        : "bg-background border-border hover:border-primary/50 text-foreground/70"
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              
              {formData.urgency === 'schedule' && (
                <div className="pt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                  <label className="text-xs font-bold mb-2 block text-foreground/60 px-1">{t('schedule_date')}</label>
                  <Input
                    type="date"
                    value={formData.requiredDate}
                    onChange={(e) => setFormData(prev => ({ ...prev, requiredDate: e.target.value }))}
                    className="h-12 text-base bg-background/50 focus:bg-background transition-all font-sans"
                    required={formData.urgency === 'schedule'}
                  />
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className="w-full h-14 text-lg font-bold shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                    {t('submitting')}
                  </>
                ) : (
                  t('submit_request')
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
