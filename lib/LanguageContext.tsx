'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { en, TranslationKeys } from '@/translations/en';
import { bn } from '@/translations/bn';

type Language = 'en' | 'bn';

const translations = {
  en,
  bn
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: TranslationKeys | string, params?: Record<string, string>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('bn');
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'bn')) {
      setLangState(savedLang);
    } else {
      const browserLang = typeof navigator !== 'undefined' ? navigator.language.split('-')[0] : 'bn';
      const detectedLang: Language = browserLang === 'en' ? 'en' : 'bn';
      setLangState(detectedLang);
    }
    setIsInitialized(true);
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('lang', newLang);
  };

  const t = (key: TranslationKeys | string, params?: Record<string, string>) => {
    const translationSet = translations[lang] || translations.en;
    let text = (translationSet as any)[key] || key;
    
    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        text = text.replace(`{${k}}`, v);
      });
    }
    
    return text;
  };

  // Prevent flicker during initialization if possible, 
  // but for SSR compatibility we just render.
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}
