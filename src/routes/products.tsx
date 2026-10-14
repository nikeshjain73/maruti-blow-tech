import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { products } from "@/lib/products";
import { SectionHead } from "@/components/site/SectionHead";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "HDPE Drums, Jerry Cans & Industrial Carboys Catalog | Maruti" },
      {
        name: "description",
        content:
          "Browse Maruti Blow Tech's industrial HDPE packaging catalog. Narrow mouth drums, full open top drums, wide mouth drums, jerry cans & accessories in Gujarat.",
      },
      { property: "og:title", content: "HDPE Drums, Jerry Cans & Industrial Containers Catalog" },
      {
        property: "og:description",
        content:
          "Industrial HM-HDPE drums, jerry cans, carboys and closure accessories manufactured in Ankleshwar GIDC, Gujarat.",
      },
      { property: "og:url", content: "https://marutiblowtech.com/products" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://marutiblowtech.com/products",
      },
    ],
  }),
  component: ProductsPage,
});

const comparisonData = [
  {
    name: "Narrow Mouth HDPE Drums",
    slug: "narrow-mouth-drums",
    capacity: "50L",
    mouth: "Narrow bung opening with auto-sealing plugs",
    use: "Low-viscosity chemicals, acids, industrial solvents & liquid intermediates",
  },
  {
    name: "Full Open Mouth Drums",
    slug: "full-open-mouth-drums",
    capacity: "20L – 80L",
    mouth: "Full diameter open-top with snap-fit metal clamping ring",
    use: "Pastes, viscous dyes, pigments, food concentrates & solid chemical powders",
  },
  {
    name: "Wide Mouth Drums",
    slug: "wide-mouth-drums",
    capacity: "50L",
    mouth: "6-inch wide threaded neck with pilfer-proof seal",
    use: "Resins, chemical slurries, emulsions & rapid-pour viscous liquids",
  },
  {
    name: "Rocket Drums",
    slug: "rocket-drums",
    capacity: "50L",
    mouth: "Auto-sealing reinforced neck geometry",
    use: "Outdoor yard storage, sun-exposed consignments & harsh agrochemical liquids",
  },
  {
    name: "Industrial Jerry Cans",
    slug: "jerry-cans",
    capacity: "10L, 35L",
    mouth: "Threaded auto-sealing neck with integrated carry handle",
    use: "Automotive oils, sanitizers, pharmaceuticals, lubricants & food liquids",
  },
  {
    name: "Mouser Jerry Cans",
    slug: "mouser-jerry-cans",
    capacity: "20L – 35L",
    mouth: "Heavy-gauge auto-sealing mouser closure",
    use: "High-barrier pharma chemicals, active ingredients & export freight",
  },
  {
    name: "Lids, Caps & Accessories",
    slug: "accessories",
    capacity: "Standard & Custom",
    mouth: "Standard bungs, 6\" closures, metal rings & breathable vents",
    use: "Replacement closures, pressure-relief venting & tamper-proof drum sealing",
  },
];

function ProductsPage() {
  return (
    <>
      <section className="border-b border-border bg-navy text-primary-foreground">
        <div className="container-x py-16 sm:py-20">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-ember">
            Complete Industrial Catalog
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-bold">Industrial HDPE Containers</h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-primary-foreground/80">
            Every Maruti container is precision blow-moulded to world-class standards — pilfer-proof,
            multi-tier stackable, food-grade and recyclable.
          </p>
        </div>
      </section>

      {/* 100-150 WORD INTRO GROUPED BY USE */}
      <section className="bg-white border-b border-border py-12">
        <div className="container-x max-w-5xl">
          <h2 className="text-xl sm:text-2xl font-bold text-navy">
            Engineered Polyethylene Packaging for Gujarat & Pan-India Industry
          </h2>
          <div className="mt-4 space-y-4 text-sm sm:text-base text-navy/80 leading-relaxed">
            <p>
              At Maruti Blow Tech, our comprehensive container line is purpose-built to solve specific industrial transport challenges across chemical processing, active pharmaceutical manufacturing, agrochemical distribution, and food-grade packaging. For bulk liquid and hazardous chemical transit, our{" "}
              <Link to="/products/narrow-mouth-drums" className="font-semibold text-navy underline decoration-ember hover:text-ember">
                Narrow Mouth HDPE Drums
              </Link>
              ,{" "}
              <Link to="/products/wide-mouth-drums" className="font-semibold text-navy underline decoration-ember hover:text-ember">
                Wide Mouth Drums
              </Link>
              , and UV-stabilised{" "}
              <Link to="/products/rocket-drums" className="font-semibold text-navy underline decoration-ember hover:text-ember">
                Rocket Drums
              </Link>{" "}
              provide zero-leakage assurance and superior drop resistance. When packaging high-viscosity pastes, powders, or edible pulps, our wide-aperture{" "}
              <Link to="/products/full-open-mouth-drums" className="font-semibold text-navy underline decoration-ember hover:text-ember">
                Full Open Mouth Drums
              </Link>{" "}
              deliver airtight containment with galvanized metal clamping rings.
            </p>
            <p>
              For smaller unit dispensing, our ergonomic{" "}
              <Link to="/products/jerry-cans" className="font-semibold text-navy underline decoration-ember hover:text-ember">
                10L and 35L Jerry Cans
              </Link>{" "}
              and heavy-gauge{" "}
              <Link to="/products/mouser-jerry-cans" className="font-semibold text-navy underline decoration-ember hover:text-ember">
                Mouser Jerry Cans
              </Link>{" "}
              ensure space-saving pallet stackability and comfortable manual decanting. All barrels and carboys pair seamlessly with our genuine industrial{" "}
              <Link to="/products/accessories" className="font-semibold text-navy underline decoration-ember hover:text-ember">
                Lids, Caps & Accessories
              </Link>
              , or can be custom engineered through our{" "}
              <Link to="/custom-mould-drums" className="font-semibold text-ember underline hover:text-navy">
                Custom Mould Drums
              </Link>{" "}
              division to incorporate client corporate Pantone colours.
            </p>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="bg-secondary/30 border-b border-border py-14">
        <div className="container-x">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-ember">
              Quick Reference
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-navy">Container Comparison Guide</h2>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
              Compare container type, capacity range, neck opening, and typical industrial applications.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-border/80 bg-white shadow-sm">
            <table className="w-full min-w-[700px] text-left text-sm">
              <thead className="bg-navy text-primary-foreground text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-4 px-5">Container Type</th>
                  <th className="py-4 px-4">Capacity</th>
                  <th className="py-4 px-4">Mouth / Opening</th>
                  <th className="py-4 px-5">Typical Industrial Use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {comparisonData.map((item, idx) => (
                  <tr key={item.slug} className={idx % 2 === 0 ? "bg-white" : "bg-card/40 hover:bg-secondary/50"}>
                    <td className="py-3.5 px-5 font-bold text-navy">
                      <Link
                        to="/products/$slug"
                        params={{ slug: item.slug }}
                        className="text-navy hover:text-ember transition-colors underline decoration-border hover:decoration-ember"
                      >
                        {item.name}
                      </Link>
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-ember text-xs whitespace-nowrap">
                      {item.capacity}
                    </td>
                    <td className="py-3.5 px-4 text-xs text-navy/80">
                      {item.mouth}
                    </td>
                    <td className="py-3.5 px-5 text-xs text-muted-foreground">
                      {item.use}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PRODUCT CARDS GRID */}
      <section className="bg-background">
        <div className="container-x py-16">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-ember">
              Product Specifications
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-navy">Individual Container Details</h2>
          </div>

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
                  <h3 className="text-2xl font-bold text-navy transition-colors group-hover:text-ember">{p.name}</h3>
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

      {/* CUSTOM MOULDS BANNER */}
      <section className="bg-background">
        <div className="container-x pb-20">
          <div className="border-l-4 border-ember bg-card p-8 sm:p-12">
            <SectionHead
              eyebrow="Custom Manufacturing"
              title="Custom-mould drums in your brand colours."
              intro="Virgin HM-HDPE full open top with metal lock-ring, moulded in custom colours for brand identity. Smooth finished surface for excellent print quality."
            />
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                to="/custom-mould-drums"
                className="inline-flex items-center gap-2 bg-ember px-6 py-4 text-sm font-bold uppercase tracking-wider text-accent-foreground hover:opacity-90"
              >
                Learn About Custom Mould Drums <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-navy/20 bg-white px-6 py-4 text-sm font-bold uppercase tracking-wider text-navy hover:bg-secondary"
              >
                Contact Sales Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
