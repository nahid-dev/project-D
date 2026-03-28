import { Droplet } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="border-b border-border bg-background sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                            <Droplet size={24} />
                        </div>
                        <h1 className="text-2xl font-bold text-foreground">GiveBlood</h1>
                    </Link>
                </div>
                <div className="text-sm text-muted-foreground">
                    Save Lives with Blood Donation
                </div>
            </div>
        </nav>
    );
}
