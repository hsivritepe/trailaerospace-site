import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Trail Aerospace.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] pb-20 pt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <section className="rounded-[2rem] border border-[var(--color-border)] p-8 shadow-[0_24px_60px_rgba(110,80,52,0.15)] sm:p-10"
            style={{ background: 'linear-gradient(160deg, #8f7055, #6f5440)', color: 'white' }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              Contact us
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl">We would love to hear from you</h1>
            <p className="mt-5 text-sm leading-7 text-white/82 sm:text-base">
              Use this page for general inquiries, product discussions, or service-related questions.
            </p>
            <div className="mt-8 space-y-3 text-sm leading-7 text-white/85">
              <p>info@trailaerospace.com can be shown here as the primary contact address.</p>
              <p>This block can later hold address, response time, and contact team details.</p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_18px_45px_rgba(20,34,28,0.08)] sm:p-10">
            <h2 className="text-2xl text-[var(--color-foreground)]">Send a message</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
              The existing contact form remains the main entry point for now.
            </p>
            <ContactForm className="mt-8" />
          </section>
        </div>
      </div>
    </main>
  );
}
