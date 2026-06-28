import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Shield, Layers, Award, Recycle, PackageCheck, Factory } from "lucide-react";
import heroImg from "@/assets/hero-drums.jpg";
import factoryImg from "@/assets/factory.jpg";
import { products } from "@/lib/products";
import { SectionHead } from "@/components/site/SectionHead";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maruti Blow Tech — HDPE Drums & Jerry Cans (50 ml to 230 L)" },
      {
        name: "description",
        content:
          "Industrial-grade HDPE plastic drums, carboys and jerry cans from 50 ml to 230 L. World-class design, zero leakage, food-grade — built in Ankleshwar, Gujarat.",
      },
      { property: "og:title", content: "Maruti Blow Tech — HDPE Drums & Jerry Cans" },
      {
        property: "og:description",
        content: "Manufacturer of HDPE plastic drums, jerry cans and carboys — 50 ml to 230 L.",
      },
    ],
  }),
  component: HomePage,
});

const features = [
  { icon: Shield, title: "Zero Leakage", text: "Pilfer-proof, auto-sealing systems on every drum." },
  { icon: Layers, title: "Multi-Layered HDPE", text: "UV-shielded outer + food-safe self-coloured inner." },
  { icon: PackageCheck, title: "Stackable Design", text: "Excellent stack and drop strength with or without pallets." },
  { icon: Award, title: "International Standards", text: "World-class design backed by two decades of experience." },
  { icon: Recycle, title: "Long Life, Reusable", text: "Food-grade virgin material with strong resale value." },
  { icon: Factory, title: "Made in Ankleshwar", text: "Manufactured in our Gujarat plant with modern automation." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy text-primary-foreground">
        <img
          src={heroImg}
          alt="Stacked blue HDPE drums in a manufacturing facility"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(110deg, oklch(0.18 0.06 255 / 0.92) 0%, oklch(0.22 0.08 255 / 0.7) 55%, oklch(0.22 0.06 255 / 0.35) 100%)",
          }}
        />
        <div className="container-x relative grid gap-10 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-8">
            <span className="inline-block border-l-4 border-ember pl-3 text-xs font-bold uppercase tracking-[0.3em] text-ember">
              It's all about quality
            </span>
            <h1 className="mt-5 text-4xl leading-[0.95] sm:text-6xl md:text-7xl">
              Your search for <br />
              <span className="text-ember">quality packaging</span> <br />
              ends here.
            </h1>
            <p className="mt-6 max-w-xl text-base text-primary-foreground/80 sm:text-lg">
              Maruti Blow Tech manufactures HDPE plastic drums, jerry cans, carboys and
              injection-moulded articles — from 50 ml to 230 L — engineered for zero leakage
              and built to international standards.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-ember px-6 py-4 text-sm font-bold uppercase tracking-wider text-accent-foreground hover:opacity-90"
              >
                Explore Products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-primary-foreground/40 px-6 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary-foreground/10"
              >
                Request a Quote
              </Link>
            </div>
          </div>

          <div className="md:col-span-4 md:self-end">
            <div className="grid grid-cols-2 gap-px bg-primary-foreground/20">
              {[
                { k: "10 L", v: "Smallest" },
                { k: "80 L", v: "Largest" },
                { k: "2013", v: "Established" },
                { k: "24×7", v: "Production" },
              ].map((s) => (
                <div key={s.k} className="bg-navy p-5">
                  <div className="font-display text-2xl text-ember sm:text-3xl">{s.k}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-primary-foreground/70">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MULTI-LAYER TECH */}
      <section className="border-b border-border bg-background">
        <div className="container-x grid items-center gap-12 py-20 md:grid-cols-2">
          <div>
            <SectionHead
              eyebrow="Multi-Layered Technology"
              title="Two layers. One drum. Built to outlast its contents."
              intro="Our containers use a dark outer layer that blocks ultraviolet radiation and resists ageing, and a self-coloured inner layer that prevents pigment contamination — engineered from virgin HDPE for excellent rigidity, creep resistance and stress-cracking resistance."
            />
            <div className="mt-8 grid grid-cols-2 gap-6 text-sm">
              <div className="border-l-4 border-drum pl-4">
                <div className="font-display text-base text-navy">Outer Layer</div>
                <p className="mt-1 text-muted-foreground">UV-shielded, anti-ageing, dark colour.</p>
              </div>
              <div className="border-l-4 border-ember pl-4">
                <div className="font-display text-base text-navy">Inner Layer</div>
                <p className="mt-1 text-muted-foreground">Food-grade, pigment-free, non-toxic.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={factoryImg}
              alt="Industrial blow moulding line"
              width={1600}
              height={1024}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute -bottom-4 -left-4 hidden bg-ember px-5 py-3 text-xs font-bold uppercase tracking-widest text-accent-foreground sm:block">
              150 Tons / Month Capacity
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="bg-background">
        <div className="container-x py-20">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHead
              eyebrow="Our Range"
              title="Drums, cans & carboys for every industry."
              intro="From narrow-mouth drums to 230-litre L-Ring barrels — all engineered for stackability, drop strength and pilfer-proof sealing."
            />
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-navy hover:text-ember"
            >
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.slice(0, 8).map((p) => (
              <Link
                key={p.slug}
                to="/products"
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-card border border-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/5"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-b from-bone/40 to-bone p-8">
                  <img
                    src={p.image}
                    alt={p.name}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy/0 transition-colors duration-300 group-hover:bg-navy/5" />
                </div>
                <div className="flex flex-1 flex-col justify-end p-6">
                  <div className="mb-3 w-fit rounded-full bg-ember/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-ember">
                    {p.capacity}
                  </div>
                  <h3 className="text-lg font-bold leading-tight text-navy transition-colors group-hover:text-ember">
                    {p.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES STRIP */}
      <section className="bg-navy text-primary-foreground">
        <div className="container-x py-20">
          <SectionHead
            eyebrow="Salient Features"
            title="Why MARUTI is the name to reckon with."
          />
          <div className="mt-12 grid grid-cols-1 gap-px bg-primary-foreground/10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="bg-navy p-7">
                <f.icon className="h-7 w-7 text-ember" />
                <div className="mt-4 font-display text-base">{f.title}</div>
                <p className="mt-2 text-sm text-primary-foreground/70">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="container-x py-20">
          <div className="flex flex-col items-start justify-between gap-6 border-l-4 border-ember bg-card p-8 sm:flex-row sm:items-center sm:p-12">
            <div>
              <h2 className="text-2xl sm:text-3xl">Need a custom-mould drum for your brand?</h2>
              <p className="mt-2 text-muted-foreground">
                Virgin HM-HDPE, custom colours, smooth print-ready surface. Tell us your spec.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-ember px-6 py-4 text-sm font-bold uppercase tracking-wider text-accent-foreground hover:opacity-90"
            >
              Start the Conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
