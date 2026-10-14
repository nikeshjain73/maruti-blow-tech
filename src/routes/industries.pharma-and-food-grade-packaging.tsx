import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight, ShieldCheck, HeartPulse, Apple, Sparkles } from "lucide-react";
import { SectionHead } from "@/components/site/SectionHead";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import openMouthImg from "@/assets/FULL-OPEN-MOUTH-DRUMS.png";

export const Route = createFileRoute("/industries/pharma-and-food-grade-packaging")({
  head: () => ({
    meta: [
      { title: "Pharma & Food-Grade HDPE Packaging | Maruti Blow Tech" },
      {
        name: "description",
        content:
          "Food-grade virgin HDPE drums & jerry cans for pharmaceutical APIs, syrups & food pastes. Odourless, non-toxic packaging manufactured in Ankleshwar, Gujarat.",
      },
      { property: "og:title", content: "Pharma & Food-Grade HDPE Packaging | Maruti Blow Tech" },
      {
        property: "og:description",
        content:
          "Virgin HM-HDPE open-mouth drums, wide-mouth barrels, and food-grade jerry cans engineered for zero contamination.",
      },
      { property: "og:url", content: "https://marutiblowtech.com/industries/pharma-and-food-grade-packaging" },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://marutiblowtech.com/industries/pharma-and-food-grade-packaging",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Pharma and Food-Grade HDPE Packaging",
          description:
            "Virgin food-contact certified HDPE packaging solutions for pharmaceutical intermediates and food ingredients.",
          publisher: {
            "@type": "Organization",
            name: "Maruti Blow Tech Pvt. Ltd.",
          },
        }),
      },
    ],
  }),
  component: PharmaFoodPackagingPage,
});

function PharmaFoodPackagingPage() {
  return (
    <>
      <section className="border-b border-border bg-navy text-primary-foreground pt-10 pb-16">
        <div className="container-x">
          <Breadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: "Industries" },
              { name: "Pharma & Food-Grade Packaging" },
            ]}
          />

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-ember">
                Certified Purity Standards
              </span>
              <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-bold">
                Pharma & Food-Grade Packaging
              </h1>
              <p className="mt-4 max-w-2xl text-base sm:text-lg text-primary-foreground/80">
                100% virgin polymer construction, pigment-free contact liners, and airtight seal closures protecting pharmaceutical APIs and food concentrates.
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

      {/* 400-600 WORDS CONTENT */}
      <section className="bg-background py-16">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 relative aspect-square w-full overflow-hidden rounded-3xl bg-gradient-to-b from-bone/40 to-bone border border-border/50 p-8 sm:p-12 flex justify-center items-center sticky top-24">
            <img
              src={openMouthImg}
              alt="Food grade full open mouth drum manufactured by Maruti Blow Tech"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="lg:col-span-7 space-y-6 text-navy/80 text-base leading-relaxed">
            <SectionHead
              eyebrow="Zero Contamination Guarantee"
              title="Purity-Preserving Packaging for Consumables & Pharmaceuticals"
            />

            <p>
              In pharmaceutical synthesis and food processing, packaging is a critical quality control point. Active pharmaceutical ingredients (APIs), excipients, oral syrups, food flavors, edible pastes, and fruit concentrates cannot tolerate trace chemical migration, leachables, or pigment leaching from storage containers.
            </p>

            <p>
              Maruti Blow Tech manufactures food-grade and pharma-grade HDPE containers using 100% virgin polymer raw materials. Our co-extrusion technology features a specialized double-layer structure: an unpigmented, natural virgin inner wall that provides a biologically inert, odourless, and non-toxic contact surface, bonded to a robust UV-shielded outer layer that prevents light degradation.
            </p>

            <p>
              For dry active bulk powders, excipients, and viscous pastes, pharmaceutical facilities rely heavily on our{" "}
              <Link
                to="/products/full-open-mouth-drums"
                className="font-semibold text-navy underline decoration-ember hover:text-ember"
              >
                full-open mouth drums
              </Link>
              . Featuring a wide-aperture mouth with snap-fit metal clamping rings and food-grade elastomeric sealing gaskets, these containers provide airtight, moisture-proof preservation and full-diameter access for clean scooping and hygienic washdown.
            </p>

            <p>
              When packaging semi-viscous food syrups, flavourings, or suspensions, our 50L{" "}
              <Link
                to="/products/wide-mouth-drums"
                className="font-semibold text-navy underline decoration-ember hover:text-ember"
              >
                wide-mouth drums
              </Link>{" "}
              with 6-inch threaded openings allow rapid pouring with integrated pilfer-proof tamper evidence. For smaller batch packaging, oral solutions, and liquid sanitizers, our ergonomic{" "}
              <Link
                to="/products/jerry-cans"
                className="font-semibold text-navy underline decoration-ember hover:text-ember"
              >
                10L and 35L jerry cans
              </Link>{" "}
              provide comfortable handling, auto-sealing closures, and reliable pallet stackability.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="bg-card border border-border/60 p-5 rounded-xl">
                <HeartPulse className="h-6 w-6 text-ember mb-3" />
                <h3 className="font-bold text-navy text-base">Virgin Polyethylene Resin</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Strictly zero regrind or post-consumer recycled plastic on product contact surfaces to prevent cross-contamination.
                </p>
              </div>
              <div className="bg-card border border-border/60 p-5 rounded-xl">
                <ShieldCheck className="h-6 w-6 text-ember mb-3" />
                <h3 className="font-bold text-navy text-base">Airtight Gasket Seals</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Food-grade continuous elastomeric gaskets protect hygroscopic powders from moisture uptake and oxidation.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-navy pt-4">Key Pharma & Food Vertical Applications</h3>
            <ul className="space-y-3">
              {[
                "Bulk active pharmaceutical ingredients (APIs), pharmaceutical intermediates, and excipients",
                "Liquid pharmaceutical syrups, antiseptics, herbal extracts, and diagnostic reagents",
                "Fruit concentrates, pulps, tomato purees, and edible food paste formulations",
                "Nutraceutical powders, dairy flavourings, protein additives, and edible oils",
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
              All containers are compatible with our precision-engineered{" "}
              <Link
                to="/products/accessories"
                className="font-semibold text-navy underline decoration-ember hover:text-ember"
              >
                food-grade lids, caps & accessories
              </Link>
              , or can be supplied in custom corporate colours via our{" "}
              <Link
                to="/custom-mould-drums"
                className="font-semibold text-ember underline hover:text-navy"
              >
                custom mould drums
              </Link>{" "}
              program. For technical assistance choosing the right container volume and closure type, refer to our{" "}
              <Link
                to="/guides/how-to-choose-an-hdpe-drum"
                className="font-semibold text-navy underline decoration-ember hover:text-ember"
              >
                drum selection guide
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-primary-foreground py-16">
        <div className="container-x text-center max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Order Certified Food-Grade & Pharma HDPE Packaging
          </h2>
          <p className="mt-4 text-sm sm:text-base text-primary-foreground/80">
            Request resin declarations, food-contact safety compliance data, and sample containers from our Ankleshwar sales desk. [TODO: Confirm specific FDA/FSSAI food contact certificate numbers].
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
