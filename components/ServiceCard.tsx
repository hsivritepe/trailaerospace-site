import Image from "next/image";

export interface ServiceCardProps {
  title: string;
  eyebrow?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export function ServiceCard({
  title,
  eyebrow,
  description,
  imageSrc,
  imageAlt,
}: ServiceCardProps) {
  return (
    <article className="group rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[0_18px_45px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_22px_55px_rgba(0,0,0,0.12)] sm:p-5">
      <div className="grid gap-5 md:grid-cols-[280px_1fr] md:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[var(--color-border)]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 280px"
          />
          <div className="service-card-image-overlay absolute inset-0 opacity-80" aria-hidden />
        </div>
        <div className="p-2 sm:p-4">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
              {eyebrow}
            </p>
          ) : null}
          <h3 className="mt-3 text-2xl text-[var(--color-foreground)]">{title}</h3>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}
