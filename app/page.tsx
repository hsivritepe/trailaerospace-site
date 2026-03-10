import Link from "next/link";
import Image from "next/image";
import { HeroVideo } from "@/components/HeroVideo";
import { ProductCard } from "@/components/ProductCard";
import { ServiceCard } from "@/components/ServiceCard";
import {
  homeImageFeature,
  portalHighlights,
  productHighlight,
  services,
} from "@/content/siteContent";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-background)]">
      <HeroVideo />
      <section className="relative min-h-[min(78vh,720px)] overflow-hidden border-y-2 border-[var(--color-accent)]">
        <div className="absolute inset-0">
          <Image
            src={homeImageFeature.imageSrc}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(217,201,176,0.48),rgba(184,160,136,0.38),rgba(217,201,176,0.52))]"
            aria-hidden
          />
        </div>
        <div className="relative mx-auto flex min-h-[min(78vh,720px)] max-w-6xl flex-col justify-center px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="max-w-3xl rounded-4xl border-2 border-white/40 bg-[rgba(26,37,32,0.72)] p-8 shadow-xl backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#588158]">
              {homeImageFeature.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]">
              {homeImageFeature.title}
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/90 sm:text-base [text-shadow:0_1px_6px_rgba(0,0,0,0.4)]">
              {homeImageFeature.description}
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Featured product
            </p>
            <h2 className="mt-3 text-3xl text-[var(--color-foreground)] sm:text-4xl">
              Single-board product presentation
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
            This section is set up for one highlighted board that sits over a
            background image and reacts on hover.
          </p>
        </div>
        <ProductCard {...productHighlight} />
      </section>

      <section className="border-y-2 border-[var(--color-accent)] bg-[rgba(226,212,196,0.85)] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Services
              </p>
              <h2 className="mt-3 text-3xl text-[var(--color-foreground)] sm:text-4xl">
                Three placeholder boards with lift-on-hover behavior
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex w-fit rounded-full border-2 border-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-[var(--color-accent)] transition hover:bg-[var(--color-accent)] hover:text-white"
            >
              Visit services page
            </Link>
          </div>
          <div className="space-y-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border-2 border-[var(--color-accent)] bg-[var(--color-surface)] p-8 shadow-[0_18px_45px_rgba(80,60,40,0.12)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Contact us
            </p>
            <h2 className="mt-3 text-3xl text-[var(--color-foreground)] sm:text-4xl">
              Use the current form as the main contact entry point
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
              The contact page is ready as the main communication area and can
              continue to evolve with API or mail delivery updates later.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Open contact page
            </Link>
          </div>

          <div className="rounded-[2rem] bg-[linear-gradient(160deg,#6f5440,#8f7055)] p-8 text-white shadow-[0_24px_60px_rgba(110,80,52,0.18)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              Customer portal
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Current sign-in area placeholder</h2>
            <div className="mt-6 space-y-3 text-sm leading-7 text-white/85">
              {portalHighlights.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
            <Link
              href="/portal"
              className="mt-8 inline-flex rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Go to portal
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
