import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight, Shield, Palette, Layers, Award } from "lucide-react";
import { SectionHead } from "@/components/site/SectionHead";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import openMouthImg from "@/assets/FULL-OPEN-MOUTH-DRUMS.png";

export const Route = createFileRoute("/custom-mould-drums")({
  head: () => ({
    meta: [
      { title: "Custom Mould HDPE Drums | Brand Colours & Metal Lock Ring" },
      {
        name: "description",
        content:
          "Custom-mould HDPE drums in bespoke brand colours with metal locking rings. Virgin HM-HDPE open-top containers, smooth print finish direct from Ankleshwar.",
      },
      { property: "og:title", content: "Custom Mould HDPE Drums | Brand Colours & Metal Lock Ring" },
      {
        property: "og:description",
        content:
          "Manufactured from virgin HM-HDPE with galvanised metal lock rings, moulded in client corporate colours for distinctive brand identity.",
      },
      { property: "og:url", content: "https://marutiblowtech.com/custom-mould-drums" },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://marutiblowtech.com/custom-mould-drums",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Custom Mould HDPE Drums",
          description:
            "Custom-mould HDPE drums in brand colours with heavy-duty metal lock rings and virgin HM-HDPE resin.",
          brand: {
            "@type": "Brand",
            name: "Maruti Blow Tech",
          },
          offers: {
            "@type": "Offer",
            url: "https://marutiblowtech.com/custom-mould-drums",
            priceCurrency: "INR",
            price: "0",
            availability: "https://schema.org/InStock",
          },
        }),
      },
    ],
  }),
  component: CustomMouldDrumsPage,
});

function CustomMouldDrumsPage() {
  return (
    <>
      <section className="border-b border-border bg-navy text-primary-foreground pt-10 pb-16">
        <div className="container-x">
          <Breadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: "Products", url: "/products" },
              { name: "Custom Mould Drums" },
            ]}
          />

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-ember">
                Bespoke Industrial Packaging
              </span>
              <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-bold">
                Custom Mould HDPE Drums
              </h1>
              <p className="mt-4 max-w-2xl text-base sm:text-lg text-primary-foreground/80">
                Virgin HM-HDPE open-top drums moulded in your signature corporate brand colours, fitted with heavy-gauge metal locking rings.
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 inline-flex items-center gap-2 bg-ember px-6 py-4 text-sm font-bold uppercase tracking-wider text-accent-foreground hover:opacity-90 transition-opacity"
            >
              Get a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* DETAILED CONTENT SECTION */}
      <section className="bg-background py-16">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 relative aspect-square w-full overflow-hidden rounded-3xl bg-gradient-to-b from-bone/40 to-bone border border-border/50 p-8 sm:p-12 flex justify-center items-center sticky top-24">
            <img
              src={openMouthImg}
              alt="Custom Mould HDPE Drum with metal locking ring"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="lg:col-span-7 space-y-6 text-navy/80 text-base leading-relaxed">
            <SectionHead
              eyebrow="Corporate Identity Packaging"
              title="Transform Standard Drums Into Your Brand Asset"
            />

            <p>
              In highly competitive chemical, pharmaceutical, and export distribution environments, packaging does more than safely hold fluids or solids—it signals quality, authenticity, and immediate brand recognition. Maruti Blow Tech manufactures custom-mould drums tailored precisely to client corporate specifications, blending virgin HM-HDPE resin with masterbatch pigments to replicate exact brand colour palettes.
            </p>

            <p>
              Built upon our proven{" "}
              <Link
                to="/products/full-open-mouth-drums"
                className="font-semibold text-navy underline decoration-ember hover:text-ember"
              >
                full open mouth drums
              </Link>{" "}
              architecture, each custom drum features a full open-top aperture secured by an engineered metal lock-ring (available in galvanized steel or powder-coated finishes). The heavy-duty snap-fit clamping ring compresses a continuous elastomeric sealing gasket against the drum chime, achieving an airtight and moisture-resistant seal suitable for high-value powders, pigments, and chemical pastes.
            </p>

            <p>
              Unlike conventional rough industrial containers, our custom tooling produces a smooth finished exterior surface engineered specifically for high-adhesion screen printing, in-mould labelling (IML), and automated stencil branding. This ensures your corporate identity, hazard warnings, and batch numbering remain crisp throughout rugged domestic freight and marine shipping.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="bg-card border border-border/60 p-5 rounded-xl">
                <Palette className="h-6 w-6 text-ember mb-3" />
                <h3 className="font-bold text-navy text-base">Custom Brand Colours</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Precision colour compounding in vibrant reds, yellows, greens, greys, and corporate tones. [TODO: Confirm minimum batch run for custom colour matching].
                </p>
              </div>
              <div className="bg-card border border-border/60 p-5 rounded-xl">
                <Shield className="h-6 w-6 text-ember mb-3" />
                <h3 className="font-bold text-navy text-base">Galvanized Metal Lock-Ring</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Lever-action clamping ring creates complete radial closure with tamper-evident security tabs.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-navy pt-4">Technical Specifications & Capabilities</h3>
            <ul className="space-y-3">
              {[
                "Moulded from 100% virgin HM-HDPE resin for superior stress-cracking resistance (ESCR)",
                "Full open-top design facilitates rapid scooping, filling, and thorough internal washing",
                "Fitted with robust metal locking rings (plastic or powder-coated variants available upon request)",
                "Aesthetic smooth exterior surface optimized for silkscreen printing and branding labels",
                "Fully compatible with standard Maruti drum lids, gaskets, and sealing accessories",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ember/15">
                    <Check className="h-3 w-3 text-ember" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p>
              For applications demanding narrow bungholes rather than open-top clamping rings, explore our standard{" "}
              <Link
                to="/products/narrow-mouth-drums"
                className="font-semibold text-navy underline decoration-ember hover:text-ember"
              >
                narrow mouth HDPE drums
              </Link>
              , or review our{" "}
              <Link
                to="/products/accessories"
                className="font-semibold text-navy underline decoration-ember hover:text-ember"
              >
                drum lids, caps & accessories
              </Link>{" "}
              for specialized replacement closures.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-primary-foreground py-16">
        <div className="container-x text-center max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Develop Custom Brand-Coloured Drums for Your Product Line
          </h2>
          <p className="mt-4 text-sm sm:text-base text-primary-foreground/80">
            Consult our blow-moulding engineers at our Ankleshwar plant to discuss Pantone color matching, metal ring specifications, and production timelines.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-ember px-8 py-4 text-sm font-bold uppercase tracking-wider text-accent-foreground hover:opacity-90 transition-opacity"
            >
              Get a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
