import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight, HelpCircle, Layers, Droplet, PackageCheck, Scale } from "lucide-react";
import { SectionHead } from "@/components/site/SectionHead";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import heroImg from "@/assets/hero-drums.jpg";

export const Route = createFileRoute("/guides/how-to-choose-an-hdpe-drum")({
  head: () => ({
    meta: [
      { title: "How to Choose an HDPE Drum | Industrial Selection Guide" },
      {
        name: "description",
        content:
          "Open top vs narrow vs wide mouth HDPE drums: compare neck sizes, capacities (10L–80L), and chemical compatibility to select the ideal industrial container.",
      },
      { property: "og:title", content: "How to Choose an HDPE Drum | Industrial Selection Guide" },
      {
        property: "og:description",
        content:
          "Technical guide to choosing open-top, narrow-mouth, and wide-mouth HDPE drums for chemical, pharma, and food liquids.",
      },
      { property: "og:url", content: "https://marutiblowtech.com/guides/how-to-choose-an-hdpe-drum" },
      { property: "og:type", content: "article" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://marutiblowtech.com/guides/how-to-choose-an-hdpe-drum",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to Choose an HDPE Drum for Industrial Packaging",
          description:
            "A comprehensive guide comparing narrow mouth, full open mouth, and wide mouth drums by mouth style, volume capacity, and contents.",
          step: [
            {
              "@type": "HowToStep",
              name: "Assess Liquid vs Solid Consistency",
              text: "Determine if contents are low-viscosity liquids requiring bung ports or solids/pastes requiring open-top access.",
            },
            {
              "@type": "HowToStep",
              name: "Select Mouth Aperture & Closure Type",
              text: "Choose between narrow bungs, wide mouth 6-inch threaded openings, or full open-head clamping rings.",
            },
            {
              "@type": "HowToStep",
              name: "Match Capacity to Logistics Requirements",
              text: "Choose between standard 50L drums, multi-size 20L–80L open containers, or 10L–35L jerry cans.",
            },
          ],
        }),
      },
    ],
  }),
  component: HowToChooseDrumPage,
});

function HowToChooseDrumPage() {
  return (
    <>
      <section className="border-b border-border bg-navy text-primary-foreground pt-10 pb-16">
        <div className="container-x">
          <Breadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: "Guides" },
              { name: "How to Choose an HDPE Drum" },
            ]}
          />

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-ember">
                Technical Buying Guide
              </span>
              <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-bold">
                How to Choose the Right HDPE Drum
              </h1>
              <p className="mt-4 max-w-2xl text-base sm:text-lg text-primary-foreground/80">
                Comparing open-top vs narrow mouth vs wide mouth barrels, closure mechanics, and container capacity for industrial manufacturing.
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

      {/* 400-600 WORDS GUIDE BODY */}
      <section className="bg-background py-16">
        <div className="container-x max-w-4xl space-y-8 text-navy/80 text-base leading-relaxed">
          <SectionHead
            eyebrow="Drum Selection Engineering"
            title="Matching Container Geometry to Your Product & Process"
          />

          <p>
            Selecting the ideal high-density polyethylene (HDPE) container is one of the most vital logistical decisions for chemical manufacturers, pharmaceutical formulators, and industrial packaging engineers. Choosing the incorrect mouth aperture, wall structure, or closure system can lead to in-transit leakage, product contamination, or significant material discharge bottlenecks on the filling line.
          </p>

          <h2 className="text-2xl font-bold text-navy pt-2">
            1. Mouth Configuration: Narrow Mouth vs Open Top vs Wide Mouth
          </h2>
          <p>
            The physical state and viscosity of your contents dictate your primary container geometry:
          </p>

          <div className="space-y-4">
            <div className="rounded-xl border border-border/80 bg-card/40 p-6">
              <h3 className="text-lg font-bold text-navy flex items-center gap-2">
                <span className="text-ember font-bold">A.</span>
                <Link to="/products/narrow-mouth-drums" className="hover:text-ember underline">
                  Narrow Mouth HDPE Drums (Bung Drums)
                </Link>
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Standard narrow mouth drums feature small 2-inch threaded bung plugs and are best suited for free-flowing, low-viscosity fluids such as industrial acids, solvents, liquid agrochemicals, and neutral chemical washes. Because the top lid is an integral part of the moulded body, narrow mouth drums provide superior hydraulic surge containment during road braking and rough transit.
              </p>
            </div>

            <div className="rounded-xl border border-border/80 bg-card/40 p-6">
              <h3 className="text-lg font-bold text-navy flex items-center gap-2">
                <span className="text-ember font-bold">B.</span>
                <Link to="/products/full-open-mouth-drums" className="hover:text-ember underline">
                  Full Open Mouth Drums (Open-Head Drums)
                </Link>
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Open-top drums feature a completely removable lid secured with a heavy-duty snap-fit metal clamping ring. These are ideal for high-viscosity pastes, bulk powders, active pharmaceutical ingredients (APIs), dye intermediates, and food concentrates. The full diameter aperture facilitates rapid filling, manual or automated scooping, and thorough sanitation between packaging cycles.
              </p>
            </div>

            <div className="rounded-xl border border-border/80 bg-card/40 p-6">
              <h3 className="text-lg font-bold text-navy flex items-center gap-2">
                <span className="text-ember font-bold">C.</span>
                <Link to="/products/wide-mouth-drums" className="hover:text-ember underline">
                  Wide Mouth Drums (6-inch Aperture)
                </Link>
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Wide mouth drums occupy the practical middle ground: they feature a reinforced 6-inch threaded opening with an integrated pilfer-proof seal. They allow much faster pouring and easier rinsing than narrow bungs, without requiring the handling of a metal clamping ring.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-navy pt-4">
            2. Evaluating Capacity and Handling Needs
          </h2>
          <p>
            Container volume impacts warehousing efficiency, pallet configuration, and ergonomics:
          </p>
          <ul className="space-y-3">
            {[
              "Bulk Logistics (50L to 80L): High-volume chemical shipments benefit from 50L narrow mouth barrels or 50L–80L full open mouth drums, designed with top and bottom chimes for pallet stacking and mechanical clamp handling.",
              "Outdoor & Sun Exposure: If your containers will be warehoused in open yards or shipped across maritime export routes, select 50L Rocket Drums compounded with UV-stabilizer additives to prevent photo-oxidation.",
              "Manual Handling & Dispensing (10L to 35L): For plant floors where operators manually lift and pour liquids, ergonomic Jerry Cans (10L, 35L) and heavy-gauge Mouser Jerry Cans provide integrated handles, high drop impact survival, and auto-sealing bungs.",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ember/15">
                  <Check className="h-3 w-3 text-ember" />
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-navy pt-4">
            3. Closure Systems and Genuine Accessories
          </h2>
          <p>
            A drum's integrity relies directly on its closure mating. Always verify that your barrels utilize genuine{" "}
            <Link to="/products/accessories" className="font-semibold text-navy underline decoration-ember hover:text-ember">
              lids, caps & accessories
            </Link>
            . When packaging off-gassing chemistries like hydrogen peroxide or organic solutions, specify pressure-relieving breathable vent bungs. For export consignments, ensure pilfer-proof seals are applied.
          </p>

          <p>
            Need custom corporate colors for brand identity? Maruti Blow Tech's{" "}
            <Link to="/custom-mould-drums" className="font-semibold text-ember underline hover:text-navy">
              custom mould drums
            </Link>{" "}
            division provides full open-top containers moulded in specific Pantone shades with silkscreen-ready surfaces.
          </p>

          <div className="rounded-xl border border-navy/20 bg-card p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-navy text-lg">Still Unsure Which Drum Fits Your Application?</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Our application engineering team in Ankleshwar will evaluate your chemical viscosity, density, and transport conditions.
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 bg-ember px-5 py-3 text-xs font-bold uppercase tracking-wider text-accent-foreground hover:opacity-90"
            >
              Get Expert Advice
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-primary-foreground py-16">
        <div className="container-x text-center max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Explore Maruti Blow Tech's Full Container Portfolio
          </h2>
          <p className="mt-4 text-sm sm:text-base text-primary-foreground/80">
            Compare complete technical specifications, capacity metrics, and dimensional drawings across all our industrial containers.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-ember px-8 py-4 text-sm font-bold uppercase tracking-wider text-accent-foreground hover:opacity-90 transition-opacity"
            >
              View Full Products Catalog <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
