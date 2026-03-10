"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/contexts/LocaleContext";
import { getTranslations } from "@/lib/translations";
import { navLinks } from "@/lib/navLinks";

export function Footer() {
  const pathname = usePathname();
  const { locale, setLocale } = useLocale();
  const t = getTranslations(locale);

  return (
    <footer
      className="border-t-2 py-10"
      style={{
        color: "var(--color-foreground)",
        backgroundColor: "var(--color-footer-bg)",
        borderColor: "var(--color-accent)",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p
            className="text-sm font-semibold text-[var(--color-nav-link-active)]"
          >
            {t.footer.trailAerospace}
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-x-6">
            {navLinks.map(({ href, labelKey }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`nav-link text-sm font-medium transition-colors border-b-2 border-transparent hover:border-[var(--color-nav-link-active)] ${
                    pathname === href
                      ? "border-[var(--color-nav-link-active)] text-[var(--color-nav-link-active)]"
                      : "text-[var(--color-nav-link)]"
                  }`}
                >
                  {t.nav[labelKey]}
                </Link>
              </li>
            ))}
          </ul>
          <span className="text-[var(--color-nav-link)] text-sm font-medium">
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`px-1.5 py-0.5 rounded transition-colors ${
                locale === "en"
                  ? "text-[var(--color-nav-link-active)] font-semibold underline"
                  : "hover:text-[var(--color-nav-link-hover)]"
              }`}
            >
              EN
            </button>
            <span className="mx-1 opacity-60">|</span>
            <button
              type="button"
              onClick={() => setLocale("tr")}
              className={`px-1.5 py-0.5 rounded transition-colors ${
                locale === "tr"
                  ? "text-[var(--color-nav-link-active)] font-semibold underline"
                  : "hover:text-[var(--color-nav-link-hover)]"
              }`}
            >
              TR
            </button>
          </span>
        </div>
        <p className="mt-6 text-center text-xs opacity-70">
          © {new Date().getFullYear()} {t.footer.trailAerospace}. {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
