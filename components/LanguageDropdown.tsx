'use client';

import { useLocale } from '@/contexts/LocaleContext';
import type { Locale } from '@/lib/translations';

const options: { value: Locale; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "fr", label: "FR" },
];

export function LanguageDropdown() {
    const { locale, setLocale } = useLocale();

    return (
        <div className="relative inline-block text-[var(--color-nav-link)]">
            <select
                value={locale}
                onChange={(e) => setLocale(e.target.value as Locale)}
                className="dropdown-select appearance-none rounded border-2 border-[var(--color-nav-link-active)] bg-transparent py-1.5 pl-3 pr-8 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[var(--color-nav-link-active)] focus:ring-offset-1 cursor-pointer [color:var(--color-nav-link)]"
                aria-label="Select language"
            >
                {options.map(({ value, label }) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </select>
            <svg className="pointer-events-none absolute right-2 top-1/2 h-5 w-5 -translate-y-1/2 select-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
        </div>
    );
}
