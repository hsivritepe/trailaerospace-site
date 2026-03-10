import Link from "next/link";
import Image from "next/image";

export interface ProductCardProps {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  ctaLabel?: string;
  details?: string[];
}

export function ProductCard({
  title,
  description,
  imageSrc,
  imageAlt,
  href,
  ctaLabel = "Learn more",
  details = [],
}: ProductCardProps) {
  return (
    <Link href={href} className="group block">
      <article className="relative min-h-[480px] overflow-hidden rounded-[2rem] border border-white/15 shadow-[0_24px_60px_rgba(110,80,52,0.18)]"
        style={{ backgroundColor: '#3d3025' }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 opacity-90"
          style={{ background: 'linear-gradient(120deg, rgba(45,35,28,0.85), rgba(80,60,45,0.45), rgba(35,28,22,0.82))' }}
          aria-hidden
        />
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
          <div className="grid gap-6 rounded-[1.75rem] border border-white/15 bg-white/10 p-6 backdrop-blur-md md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                Product board
              </p>
              <h3 className="mt-3 text-2xl text-white sm:text-3xl">{title}</h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/82 sm:text-base">
                {description}
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-white/92 p-5 text-sm text-[var(--color-foreground)] shadow-lg transition duration-500 group-hover:-translate-y-1">
              <div className="space-y-3">
                {details.map((detail) => (
                  <p key={detail} className="border-b border-[var(--color-border)] pb-3 last:border-b-0 last:pb-0">
                    {detail}
                  </p>
                ))}
              </div>
              <span className="mt-6 inline-flex items-center rounded-full bg-[var(--color-accent)] px-4 py-2 font-semibold text-white">
                {ctaLabel}
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
