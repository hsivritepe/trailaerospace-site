import Link from 'next/link';
import Image from 'next/image';
import { HeroVideo } from '@/components/HeroVideo';
import { ProductCard } from '@/components/ProductCard';
import { ServiceCard } from '@/components/ServiceCard';
import {
    homeImageFeature,
    portalHighlights,
    productHighlight,
    services,
} from '@/content/siteContent';

export default function Home() {
    return (
        <main className="min-h-screen bg-[var(--color-background)]">
            <HeroVideo />
            <section className="relative min-h-[min(78vh,720px)] overflow-hidden border-y-1 border-[var(--color-accent)]">
                <div className="absolute inset-0">
                    <Image
                        src={homeImageFeature.imageSrc}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="100vw"
                    />
                    <div
                        className="image-feature-overlay-gradient absolute inset-0"
                        aria-hidden
                    />
                </div>
                <div className="relative mx-auto flex min-h-[min(78vh,720px)] max-w-6xl flex-col justify-center px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div className="bg-black/40 max-w-3xl rounded-4xl border-2 border-white/40 p-8 shadow-xl backdrop-blur-sm">
                        <p className="font-bold text-xs uppercase tracking-[0.3em]">
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
            <section className="section-featured px-4 py-20 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="section-featured-eyebrow text-xs font-semibold uppercase tracking-[0.3em]">
                                Featured product
                            </p>
                            <h2 className="section-featured-heading mt-3 text-3xl sm:text-4xl">
                                Single-board product presentation
                            </h2>
                        </div>
                        <p className="section-featured-muted max-w-2xl text-sm leading-7 sm:text-base">
                            This section is set up for one highlighted
                            board that sits over a background image
                            and reacts on hover.
                        </p>
                    </div>
                    <ProductCard {...productHighlight} />
                </div>
            </section>

            <section className="section-bg border-y-2 border-[var(--color-accent)] py-20">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                                Services
                            </p>
                            <h2 className="mt-3 text-3xl text-[var(--color-foreground)] sm:text-4xl">
                                Three placeholder boards with
                                lift-on-hover behavior
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
                            <ServiceCard
                                key={service.title}
                                {...service}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-contact px-4 py-20 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                        <div className="rounded-[2rem] border-2 border-white/30 bg-[var(--color-surface)] p-8 shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                                Contact us
                            </p>
                            <h2 className="mt-3 text-3xl text-[var(--color-foreground)] sm:text-4xl">
                                Use the current form as the main
                                contact entry point
                            </h2>
                            <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                                The contact page is ready as the main
                                communication area and can continue to
                                evolve with API or mail delivery
                                updates later.
                            </p>
                            <Link
                                href="/contact"
                                className="mt-8 inline-flex rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                            >
                                Open contact page
                            </Link>
                        </div>

                        <div className="rounded-4xl border-2 border-white/30 bg-[var(--color-surface)] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.12)]">
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                                Customer portal
                            </p>
                            <h2 className="mt-3 text-3xl text-[var(--color-foreground)] sm:text-4xl">
                                Current sign-in area placeholder
                            </h2>
                            <div className="mt-6 space-y-3 text-sm leading-7 text-[var(--color-muted)]">
                                {portalHighlights.map((item) => (
                                    <p key={item}>{item}</p>
                                ))}
                            </div>
                            <Link
                                href="/portal"
                                className="mt-8 inline-flex rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                            >
                                Go to portal
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
