'use client';

import Image from 'next/image';
import Link from 'next/link';
import { heroVideo } from '@/content/siteContent';

export function HeroVideo() {
    return (
        <section className="relative min-h-[88vh] overflow-hidden bg-[#2f251c] pt-16 text-white">
            <div className="absolute inset-0 h-full w-full">
                <video
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                >
                    <source src={heroVideo.src} type="video/mp4" />
                </video>
                <div
                    className="absolute inset-0 bg-[linear-gradient(135deg,rgba(47,35,25,0.68),rgba(83,62,40,0.40),rgba(29,22,17,0.72))]"
                    aria-hidden
                />
            </div>
            <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-4 pb-16 pt-24 sm:px-6 lg:px-8">
                <div className="max-w-3xl rounded-3xl border-2 border-[#2A4B3C]/90 bg-[rgba(60,48,36,0.4)] p-6 backdrop-blur-sm sm:p-8">
                    <div className="mb-6">
                        <Image
                            src="/logo/logo-with-name-transparent.png"
                            alt="Trail Aerospace"
                            width={360}
                            height={88}
                            className="h-auto w-full max-w-[320px] object-contain sm:max-w-[360px]"
                            priority
                        />
                        <p className="mt-4 text-sm text-white/80">
                            {heroVideo.eyebrow}
                        </p>
                    </div>
                    <h1 className="max-w-2xl text-4xl leading-tight sm:text-5xl md:text-6xl">
                        {heroVideo.title}
                    </h1>
                    <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
                        {heroVideo.description}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                            href="/products"
                            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#2A4B3C] transition hover:bg-[#e2d4c4]"
                        >
                            Explore products
                        </Link>
                        <Link
                            href="/services"
                            className="rounded-full border-2 border-[#354E41] px-5 py-3 text-sm font-semibold text-[#588158] transition hover:bg-[#2A4B3C] hover:border-[#2A4B3C] hover:text-white"
                        >
                            View services
                        </Link>
                        <Link
                            href="/portal"
                            className="rounded-full border-2 border-[#354E41] px-5 py-3 text-sm font-semibold text-[#588158] transition hover:bg-[#2A4B3C] hover:border-[#2A4B3C] hover:text-white"
                        >
                            Customer portal
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
