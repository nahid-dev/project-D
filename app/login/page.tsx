'use client';

import { Suspense, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTranslation } from '@/lib/LanguageContext';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Droplet } from 'lucide-react';

function LoginFormContent() {
  const router = useRouter();
  const { t } = useTranslation();
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
        setError(t('valid_phone_error'));
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
        
        // Flow Logic: Redirect based on userType
        if (userType === 'request') {
          router.push('/request-blood');
          return;
        }

        const donorProfile = localStorage.getItem('donorProfile');
        if (donorProfile) {
          router.push('/dashboard');
        } else {
          router.push('/onboarding');
        }
      } else {
        setError(t('valid_otp_error'));
      }
    }, 1000);
  };

  const getTitle = () => {
    if (userType === 'donor') {
      return t('donor_login');
    }
    return t('login_title');
  };

  const getDescription = () => {
    if (userType === 'donor') {
      return t('donor_login_description');
    }
    return t('login_description');
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
                  {t('phone_number')}
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={isLoading}
                  className="w-full font-sans"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full"
                size="lg"
              >
                {isLoading ? t('sending_otp') : t('send_otp')}
              </Button>

              <div className="px-2 py-4 text-sm text-muted-foreground text-center border-t">
                {t('no_account')}{' '}
                <Link
                  href={getSignupLink()}
                  className="font-medium text-primary hover:underline"
                >
                  {t('register_here')}
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
                  {t('enter_otp')} <span className="font-medium text-foreground font-sans">{phone}</span>
                </p>
                <Input
                  id="otp"
                  type="text"
                  placeholder="000000"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                  disabled={isLoading}
                  className="w-full text-center text-2xl tracking-widest font-sans"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full"
                size="lg"
              >
                {isLoading ? t('verifying') : t('verify_otp')}
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
                {t('different_number')}
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                {t('resend_otp_text')}{' '}
                <button
                  type="button"
                  onClick={handleResendOTP}
                  className="font-medium text-primary hover:underline"
                  disabled={isLoading}
                >
                  {t('resend_otp_btn')}
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
