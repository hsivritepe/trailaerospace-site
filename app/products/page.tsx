import { ProductCard } from "@/components/ProductCard";
import { productHighlight } from "@/content/siteContent";

export const metadata = {
  title: "Products",
  description: "Explore our aerospace products and solutions.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] pb-20 pt-28">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
            Products
          </p>
          <h1 className="mt-4 text-4xl text-[var(--color-foreground)] sm:text-5xl">
            One main board with image, text, and hover emphasis
          </h1>
          <p className="mt-5 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
            This page is structured around a single highlighted board over a
            background visual. It is ready for your first product, data sheet,
            or main platform presentation.
          </p>
        </div>

        <div className="mt-10">
          <ProductCard {...productHighlight} />
        </div>
      </section>
    </main>
  );
}
