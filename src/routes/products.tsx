import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { products } from "@/lib/products";
import { SectionHead } from "@/components/site/SectionHead";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — HDPE Drums, Jerry Cans & Carboys | Maruti Blow Tech" },
      {
        name: "description",
        content:
          "Full product range: narrow & wide mouth drums, full open-top drums, mouser & jerry cans, rocket drums, L-Ring drums, and accessories from 50 ml to 230 L.",
      },
      { property: "og:title", content: "Products — Maruti Blow Tech" },
      {
        property: "og:description",
        content: "Browse HDPE drums, jerry cans, carboys and accessories from 50 ml to 230 L.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <section className="border-b border-border bg-navy text-primary-foreground">
        <div className="container-x py-20">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-ember">
            Catalog
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl">Our Product Range</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            Every Maruti container is built to world-class standards — pilfer-proof,
            stackable, food-grade and reusable. Capacities from 50 ml to 230 L.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="container-x py-16">
          <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
            {products.map((p, i) => (
              <Link
                key={p.slug}
                to="/products/$slug"
                params={{ slug: p.slug }}
                className={`group grid overflow-hidden rounded-2xl bg-card border border-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/5 sm:grid-cols-5 ${
                  i === products.length - 1 && products.length % 2 !== 0 ? "lg:col-span-2 lg:w-[80%] lg:mx-auto w-full" : ""
                }`}
              >
                <div className="relative p-6 sm:p-8 sm:col-span-2 bg-gradient-to-b from-bone/40 to-bone">
                  <img
                    src={p.image}
                    alt={p.name}
                    width={800}
                    height={800}
                    loading={i < 2 ? "eager" : "lazy"}
                    className="aspect-square h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy/0 transition-colors duration-300 group-hover:bg-navy/5" />
                </div>
                <div className="flex flex-col justify-center p-6 sm:col-span-3 sm:p-8">
                  <div className="mb-4 w-fit rounded-full bg-ember/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-ember">
                    {p.capacity}
                  </div>
                  <h2 className="text-2xl font-bold text-navy transition-colors group-hover:text-ember">{p.name}</h2>
                  <p className="mt-3 text-muted-foreground">{p.tagline}</p>
                  <ul className="mt-6 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                        <span className="text-navy/80">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="container-x pb-20">
          <div className="border-l-4 border-ember bg-card p-8 sm:p-12">
            <SectionHead
              eyebrow="Need something specific?"
              title="Custom-mould drums in your brand colours."
              intro="Virgin HM-HDPE full open top with metal lock-ring, moulded in custom colours for brand identity. Smooth finished surface for excellent print quality."
            />
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 bg-ember px-6 py-4 text-sm font-bold uppercase tracking-wider text-accent-foreground hover:opacity-90"
            >
              Talk to Sales <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
