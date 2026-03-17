import Link from "next/link";
import { portalHighlights } from "@/content/siteContent";

export const metadata = {
  title: "Customer Portal",
  description: "Customer portal sign-in placeholder for Trail Aerospace.",
};

export default function PortalPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] pb-20 pt-28">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="cta-panel rounded-4xl border border-[var(--color-border)] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.1)] sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              Customer portal
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl">Current sign-in placeholder</h1>
            <p className="mt-5 text-sm leading-7 text-white/82 sm:text-base">
              This page holds the portal entrance for customer access, document
              review, order follow-up, or support workflows.
            </p>
            <div className="mt-8 space-y-3 text-sm leading-7 text-white/85">
              {portalHighlights.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_18px_45px_rgba(0,0,0,0.08)] sm:p-10">
            <h2 className="text-2xl text-[var(--color-foreground)]">Sign in</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
              Placeholder form for your existing sign-in flow.
            </p>

            <form className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="portal-email"
                  className="block text-sm font-medium text-[var(--color-foreground)]"
                >
                  Email
                </label>
                <input
                  id="portal-email"
                  type="email"
                  placeholder="name@company.com"
                  className="mt-2 block w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                />
              </div>
              <div>
                <label
                  htmlFor="portal-password"
                  className="block text-sm font-medium text-[var(--color-foreground)]"
                >
                  Password
                </label>
                <input
                  id="portal-password"
                  type="password"
                  placeholder="••••••••"
                  className="mt-2 block w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                />
              </div>
              <button
                type="button"
                className="inline-flex rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Sign in
              </button>
            </form>

            <div className="mt-8 border-t border-[var(--color-border)] pt-6">
              <p className="text-sm leading-7 text-[var(--color-muted)]">
                Need direct support before portal access is connected?
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex rounded-full border border-[var(--color-border-strong)] px-5 py-3 text-sm font-semibold text-[var(--color-foreground)] transition hover:bg-[var(--color-background)]"
              >
                Contact Trail Aerospace
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
