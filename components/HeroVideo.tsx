'use client';

import Image from 'next/image';
import Link from 'next/link';
import { heroVideo, homeImageFeature } from '@/content/siteContent';

export function HeroVideo() {
    return (
        <section className="hero-section relative min-h-[88vh] overflow-hidden pt-16">
            <div className="absolute inset-0 h-full w-full">
                <Image
                    src={homeImageFeature.imageSrc}
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="hero-kenburns object-cover"
                />
                <div className="hero-overlay absolute inset-0" aria-hidden />
            </div>
            <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-4 pb-16 pt-24 sm:px-6 lg:px-8">
                <div className="hero-panel max-w-3xl rounded-3xl border-2 p-6 backdrop-blur-sm sm:p-8">
                    <h1 className="max-w-2xl text-4xl leading-tight sm:text-5xl md:text-6xl">
                        {heroVideo.title}
                    </h1>
                    <p className="mt-5 max-w-2xl text-base leading-7 opacity-90 sm:text-lg">
                        {heroVideo.description}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link href="/products" className="hero-btn-primary rounded-full px-5 py-3 text-sm font-semibold transition">
                            Explore products
                        </Link>
                        <Link href="/services" className="hero-btn-secondary rounded-full border-2 px-5 py-3 text-sm font-semibold transition">
                            View services
                        </Link>
                        <Link href="/portal" className="hero-btn-secondary rounded-full border-2 px-5 py-3 text-sm font-semibold transition">
                            Customer portal
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
