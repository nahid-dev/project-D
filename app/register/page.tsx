'use client';

import { Suspense, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import CustomSelect from '@/components/ui/CustomSelect';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Droplet } from 'lucide-react';
import BangladeshLocationSelector, { BangladeshLocation } from '@/components/location/BangladeshLocationSelector';
import { useTranslation } from '@/lib/LanguageContext';
import { normalizeLocation } from '@/lib/location/normalizeLocation';

function RegisterFormContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const userType = searchParams.get('type') || 'donor';

  const [step, setStep] = useState<'details' | 'phone' | 'otp'>(
    'details'
  );
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    gender: '',
    bloodType: '',
    email: '',
    healthConditions: '',
    password: '',
  });

  const [location, setLocation] = useState<BangladeshLocation>({
    division: '',
    district: '',
    upazila: '',
  });

  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleDetailsSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!formData.fullName || !formData.dob || !formData.gender || !formData.bloodType || !location.division || !location.district || !location.upazila || !formData.password) {
      setError('Please fill in all required fields (including password and full location)');
      return;
    }

    setStep('phone');
  };

  const handleSendOTP = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const normalized = await normalizeLocation(location);

      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone,
          ...formData,
          city: normalized?.formattedAddress || `${location.upazila}, ${location.district}, ${location.division}`,
          locationLat: normalized?.latitude || null,
          locationLng: normalized?.longitude || null,
          locationAddress: normalized?.formattedAddress || null,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStep('otp');
        console.log('OTP sent to:', phone);
      } else {
        setError(data.message || 'Failed to register. Please check your inputs.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      console.log('OTP resent to:', phone);
    }, 1000);
  };

  const handleVerifyOTP = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, otp }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        console.log('Registration completed:', { ...formData, phone, userType });
        router.push('/dashboard');
      } else {
        setError(data.message || 'Invalid OTP');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getTitle = () => {
    if (userType === 'donor') {
      return 'Register as Donor';
    }
    return 'Register';
  };

  const getDescription = () => {
    if (userType === 'donor') {
      return 'Create your donor account and start saving lives';
    }
    return 'Create your account';
  };

  return (
    <div className="max-w-2xl mx-auto w-full px-6 py-16">
      <Card>
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Droplet className="text-primary" size={32} />
          </div>
          <CardTitle className="text-2xl">{getTitle()}</CardTitle>
          <CardDescription>{getDescription()}</CardDescription>
        </CardHeader>
        <CardContent>
          {step === 'details' ? (
            <form onSubmit={handleDetailsSubmit} className="space-y-4">
              {error && (
                <div className="bg-destructive/10 text-destructive px-4 py-2 rounded-md text-sm">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="fullName" className="text-sm font-medium text-foreground">
                  Full Name *
                </label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="dob" className="text-sm font-medium text-foreground">
                    Date of Birth *
                  </label>
                  <Input
                    id="dob"
                    name="dob"
                    type="date"
                    value={formData.dob}
                    onChange={handleInputChange}
                    className="w-full"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="gender" className="text-sm font-medium text-foreground">
                    Gender *
                  </label>
                  <CustomSelect
                    value={formData.gender}
                    onChange={(value) => handleSelectChange('gender', value)}
                    options={[
                      { value: 'male', label: 'Male' },
                      { value: 'female', label: 'Female' },
                      { value: 'other', label: 'Other' },
                    ]}
                    placeholder="Select gender"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="bloodType" className="text-sm font-medium text-foreground">
                    Blood Type *
                  </label>
                  <CustomSelect
                    value={formData.bloodType}
                    onChange={(value) => handleSelectChange('bloodType', value)}
                    options={[
                      { value: 'O+', label: 'O+' },
                      { value: 'O-', label: 'O-' },
                      { value: 'A+', label: 'A+' },
                      { value: 'A-', label: 'A-' },
                      { value: 'B+', label: 'B+' },
                      { value: 'B-', label: 'B-' },
                      { value: 'AB+', label: 'AB+' },
                      { value: 'AB-', label: 'AB-' },
                    ]}
                    placeholder="Select blood type"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-foreground">
                    Location *
                  </label>
                  <BangladeshLocationSelector
                    value={location}
                    onChange={setLocation}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-foreground">
                  Password *
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter a secure password (min 6 chars)"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email (Optional)
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="healthConditions" className="text-sm font-medium text-foreground">
                  Health Conditions (Optional)
                </label>
                <textarea
                  id="healthConditions"
                  name="healthConditions"
                  placeholder="Any allergies or medical conditions we should know about?"
                  value={formData.healthConditions}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  rows={3}
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Continue
              </Button>

              <div className="px-2 py-3 text-sm text-muted-foreground text-center border-t">
                Already have an account?{' '}
                <Link
                  href={userType === 'donor' ? '/login?type=donor' : '/login'}
                  className="font-medium text-primary hover:underline"
                >
                  Login here
                </Link>
              </div>
            </form>
          ) : step === 'phone' ? (
            <form onSubmit={handleSendOTP} className="space-y-4">
              {error && (
                <div className="bg-destructive/10 text-destructive px-4 py-2 rounded-md text-sm">
                  {error}
                </div>
              )}

              <div className="bg-primary/10 p-4 rounded-md text-sm text-foreground mb-4">
                <p className="font-medium mb-2">Contact Information</p>
                <p>Name: {formData.fullName}</p>
                <p>Blood Type: {formData.bloodType}</p>
                <p>Location: {`${location.upazila}, ${location.district}`}</p>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Phone Number *
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+8801XXXXXXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={isLoading}
                  className="w-full"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full"
                size="lg"
              >
                {isLoading ? 'Sending OTP...' : 'Send OTP'}
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={() => setStep('details')}
                className="w-full"
              >
                Back
              </Button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOTP} className="space-y-4">
              {error && (
                <div className="bg-destructive/10 text-destructive px-4 py-2 rounded-md text-sm">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Enter the 6-digit OTP sent to <span className="font-medium text-foreground">{phone}</span>
                </p>
                <Input
                  id="otp"
                  type="text"
                  placeholder="000000"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                  disabled={isLoading}
                  className="w-full text-center text-2xl tracking-widest"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full"
                size="lg"
              >
                {isLoading ? 'Verifying...' : 'Complete Registration'}
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setStep('phone');
                  setOtp('');
                  setError('');
                }}
                className="w-full"
              >
                Use Different Number
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                Didn&apos;t receive the OTP?{' '}
                <button
                  type="button"
                  onClick={handleResendOTP}
                  className="font-medium text-primary hover:underline"
                  disabled={isLoading}
                >
                  Resend OTP
                </button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <RegisterFormContent />
    </Suspense>
  );
}
