'use client';

import { Droplet } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/lib/LanguageContext';

export default function Navbar() {
  const { lang, setLang } = useTranslation();

  return (
    <nav className="border-b border-border bg-background sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
              <Droplet size={24} />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-bold text-foreground">GiveBlood</h1>
              <p className="text-xs text-muted-foreground md:hidden">
                Save Lives with Blood Donation
              </p>
            </div>
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <p className="text-sm text-muted-foreground hidden md:block">
            Save Lives with Blood Donation
          </p>
          
          <div className="flex items-center bg-muted/50 rounded-full p-1 border border-border/50">
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 text-[10px] md:text-xs font-bold rounded-full transition-all cursor-pointer ${
                lang === 'en' ? 'bg-background text-primary shadow-sm' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('bn')}
              className={`px-3 py-1 text-[10px] md:text-xs font-bold rounded-full transition-all cursor-pointer ${
                lang === 'bn' ? 'bg-background text-primary shadow-sm' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              বাংলা
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
