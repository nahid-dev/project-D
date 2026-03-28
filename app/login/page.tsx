'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Droplet } from 'lucide-react';

function LoginFormContent() {
  const searchParams = useSearchParams();
  const userType = searchParams.get('type') || 'donor';

  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOTP = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate API call for sending OTP
    setTimeout(() => {
      setIsLoading(false);
      if (phone && phone.length >= 10) {
        setOtpSent(true);
        setStep('otp');
        console.log('OTP sent to:', phone);
      } else {
        setError('Please enter a valid phone number');
      }
    }, 1000);
  };

  const handleResendOTP = async () => {
    setError('');
    setIsLoading(true);

    // Simulate API call for resending OTP
    setTimeout(() => {
      setIsLoading(false);
      console.log('OTP resent to:', phone);
    }, 1000);
  };

  const handleVerifyOTP = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate API call for verifying OTP
    setTimeout(() => {
      setIsLoading(false);
      if (otp && otp.length === 6) {
        // Here would be actual authentication logic
        console.log('Login verified:', { phone, otp, userType });
      } else {
        setError('Please enter a valid 6-digit OTP');
      }
    }, 1000);
  };

  const getTitle = () => {
    if (userType === 'donor') {
      return 'Donor Login';
    }
    return 'Login';
  };

  const getDescription = () => {
    if (userType === 'donor') {
      return 'Sign in to your donor account to manage your donations and health information';
    }
    return 'Sign in to your account';
  };

  const getSignupLink = () => {
    if (userType === 'donor') {
      return '/register?type=donor';
    }
    return '/register';
  };

  return (
    <div className="max-w-md mx-auto w-full px-6 py-16">
      <Card>
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Droplet className="text-primary" size={32} />
          </div>
          <CardTitle className="text-2xl">{getTitle()}</CardTitle>
          <CardDescription>{getDescription()}</CardDescription>
        </CardHeader>
        <CardContent>
          {step === 'phone' ? (
            <form onSubmit={handleSendOTP} className="space-y-4">
              {error && (
                <div className="bg-destructive/10 text-destructive px-4 py-2 rounded-md text-sm">
                  {error}
                </div>
              )}
                          {/* Phone number field */}
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
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

              <div className="px-2 py-4 text-sm text-muted-foreground text-center border-t">
                Don&apos;t have an account?{' '}
                <Link
                  href={getSignupLink()}
                  className="font-medium text-primary hover:underline"
                >
                  Register here
                </Link>
              </div>
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
                {isLoading ? 'Verifying...' : 'Verify OTP'}
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

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <LoginFormContent />
    </Suspense>
  );
}
