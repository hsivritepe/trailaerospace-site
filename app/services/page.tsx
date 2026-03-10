import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/content/siteContent";

export const metadata = {
  title: "Services",
  description: "Aerospace services and support from Trail Aerospace.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] pb-20 pt-28">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
            Services
          </p>
          <h1 className="mt-4 text-4xl text-[var(--color-foreground)] sm:text-5xl">
            Three service boards with image, explanation, and lift interaction
          </h1>
          <p className="mt-5 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
            Each board is built for an image with supporting copy and rises
            slightly on hover, similar to the interaction style you described.
          </p>
        </div>

        <div className="mt-10 space-y-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>
    </main>
  );
}
