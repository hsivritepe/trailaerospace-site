'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLocale } from '@/contexts/LocaleContext';
import { getTranslations } from '@/lib/translations';
import { navLinks } from '@/lib/navLinks';
import { LanguageDropdown } from '@/components/LanguageDropdown';

export function Navbar() {
    const pathname = usePathname();
    const { locale } = useLocale();
    const t = getTranslations(locale);

    return (
        <header className="site-header fixed top-0 left-0 right-0 z-50 border-b-1 shadow-[0_2px_12px_rgba(0,0,0,0.08)] backdrop-blur-sm">
            <nav className="mx-auto flex min-h-16 max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo/logo-with-name-transparent.png"
                        alt="Trail Aerospace"
                        width={220}
                        height={54}
                        className="h-9 w-auto object-contain sm:h-10"
                        priority
                    />
                </Link>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                    <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
                        {navLinks.map(({ href, labelKey }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={`nav-link text-sm font-medium transition-colors border-b-2 border-transparent hover:border-[var(--color-nav-link-active)] ${
                                        pathname === href
                                            ? 'border-[var(--color-nav-link-active)] text-[var(--color-nav-link-active)]'
                                            : 'text-[var(--color-nav-link)]'
                                    }`}
                                >
                                    {t.nav[labelKey]}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <LanguageDropdown />
                </div>
            </nav>
        </header>
    );
}
