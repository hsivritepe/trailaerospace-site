"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/contexts/LocaleContext";
import { getTranslations } from "@/lib/translations";
import { navLinks } from "@/lib/navLinks";
import { LanguageDropdown } from "@/components/LanguageDropdown";

export function Footer() {
  const pathname = usePathname();
  const { locale } = useLocale();
  const t = getTranslations(locale);

  return (
    <footer className="site-footer border-t-2 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm font-semibold text-[var(--color-footer-link)]">
            {t.footer.trailAerospace}
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-x-6">
            {navLinks.map(({ href, labelKey }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`nav-link text-sm font-medium transition-colors border-b-2 border-transparent hover:border-[var(--color-footer-link-hover)] ${
                    pathname === href
                      ? "border-[var(--color-footer-link-active)] text-[var(--color-footer-link-active)]"
                      : ""
                  }`}
                >
                  {t.nav[labelKey]}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageDropdown />
        </div>
        <p className="mt-6 text-center text-xs text-[var(--color-footer-link)] opacity-80">
          © {new Date().getFullYear()} {t.footer.trailAerospace}. {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
