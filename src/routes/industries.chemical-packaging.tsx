import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight, FlaskConical, ShieldAlert, Layers, Droplets } from "lucide-react";
import { SectionHead } from "@/components/site/SectionHead";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import narrowMouthImg from "@/assets/NARROW-MOUTH-DRUMS.png";

export const Route = createFileRoute("/industries/chemical-packaging")({
  head: () => ({
    meta: [
      { title: "HDPE Drums for Chemical Packaging | Maruti Blow Tech" },
      {
        name: "description",
        content:
          "High-integrity HDPE drums, mouser cans & rocket barrels for hazardous chemicals, acids & agrochemicals. UN-compliant, zero leakage from Ankleshwar, Gujarat.",
      },
      { property: "og:title", content: "HDPE Drums for Chemical Packaging | Maruti Blow Tech" },
      {
        property: "og:description",
        content:
          "Zero-leakage, UN-compliant polymer packaging for bulk chemicals, solvents, and specialty additives.",
      },
      { property: "og:url", content: "https://marutiblowtech.com/industries/chemical-packaging" },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://marutiblowtech.com/industries/chemical-packaging",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "HDPE Chemical Packaging Solutions",
          description:
            "Engineered chemical drums, mouser cans, and rocket barrels designed for hazardous and non-hazardous chemicals.",
          publisher: {
            "@type": "Organization",
            name: "Maruti Blow Tech Pvt. Ltd.",
          },
        }),
      },
    ],
  }),
  component: ChemicalPackagingPage,
});

function ChemicalPackagingPage() {
  return (
    <>
      <section className="border-b border-border bg-navy text-primary-foreground pt-10 pb-16">
        <div className="container-x">
          <Breadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: "Industries" },
              { name: "Chemical Packaging" },
            ]}
          />

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-ember">
                Industry Specific Solutions
              </span>
              <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-bold">
                HDPE Chemical Packaging Solutions
              </h1>
              <p className="mt-4 max-w-2xl text-base sm:text-lg text-primary-foreground/80">
                Heavy-duty polymer containers engineered for zero leakage, environmental stress cracking resistance (ESCR), and hazardous chemical logistics.
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

      {/* 400-600 WORDS BODY */}
      <section className="bg-background py-16">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 relative aspect-square w-full overflow-hidden rounded-3xl bg-gradient-to-b from-bone/40 to-bone border border-border/50 p-8 sm:p-12 flex justify-center items-center sticky top-24">
            <img
              src={narrowMouthImg}
              alt="Heavy-duty HDPE chemical drum manufactured by Maruti Blow Tech"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="lg:col-span-7 space-y-6 text-navy/80 text-base leading-relaxed">
            <SectionHead
              eyebrow="Zero-Leakage Assurance"
              title="Packaging Built to Handle Aggressive Chemistry"
            />

            <p>
              The chemical manufacturing ecosystem across Gujarat and western India demands container performance that goes far beyond routine storage. Transporting reactive agrochemicals, organic solvents, industrial acids, surfactant concentrates, and specialty additives involves mechanical vibrations, thermal cycling, and chemical attack that can compromise lower-grade barrels.
            </p>

            <p>
              Maruti Blow Tech manufactures heavy-duty HM-HDPE containers engineered specifically for harsh industrial chemistries. For bulk liquid transit, our flagship{" "}
              <Link
                to="/products/narrow-mouth-drums"
                className="font-semibold text-navy underline decoration-ember hover:text-ember"
              >
                narrow-mouth drums
              </Link>{" "}
              provide high circumferential tensile strength, robust bung threads, and precision auto-sealing bungs that prevent hazardous vapor discharge and liquid seepage during long-distance road and ocean freight.
            </p>

            <p>
              When operations involve unitized chemical dispensing or export-bound hazardous intermediates, our heavy-gauge{" "}
              <Link
                to="/products/mouser-jerry-cans"
                className="font-semibold text-navy underline decoration-ember hover:text-ember"
              >
                mouser jerry cans
              </Link>{" "}
              deliver enhanced drop impact survival and stackable interlock profiles that prevent pallet load displacement. For open-yard drum storage exposed to intense tropical sunshine and weathering, our UV-stabilised{" "}
              <Link
                to="/products/rocket-drums"
                className="font-semibold text-navy underline decoration-ember hover:text-ember"
              >
                rocket drums
              </Link>{" "}
              utilize compounded polymer formulations that prevent brittleness, wall fatigue, and thermal stress cracking.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="bg-card border border-border/60 p-5 rounded-xl">
                <FlaskConical className="h-6 w-6 text-ember mb-3" />
                <h3 className="font-bold text-navy text-base">Exceptional ESCR Rating</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  High Environmental Stress Crack Resistance ensures immunity against active surfactants and aggressive chemical blends.
                </p>
              </div>
              <div className="bg-card border border-border/60 p-5 rounded-xl">
                <ShieldAlert className="h-6 w-6 text-ember mb-3" />
                <h3 className="font-bold text-navy text-base">UN-Standard Testing</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Drop-tested, hydraulic leak tested, and top-load compression tested for compliance with transport regulations.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-navy pt-4">Chemical Media Compatibility</h3>
            <ul className="space-y-3">
              {[
                "Inorganic acids, caustic soda, alkaline solutions, and industrial bleach",
                "Specialty agrochemical liquids, emulsifiable concentrates (EC), and wetting agents",
                "Textile processing chemicals, dyes, chemical binders, and sizing auxiliaries",
                "Effluent treatment coagulants, polymers, and water management chemical solutions",
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
              For solid powders, granular fertilizers, and viscous pastes, explore our wide-aperture{" "}
              <Link
                to="/products/full-open-mouth-drums"
                className="font-semibold text-navy underline decoration-ember hover:text-ember"
              >
                full open mouth drums
              </Link>
              , or consult our complete{" "}
              <Link
                to="/products"
                className="font-semibold text-navy underline decoration-ember hover:text-ember"
              >
                industrial product catalog
              </Link>{" "}
              to choose the right drum specification for your plant.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-primary-foreground py-16">
        <div className="container-x text-center max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Secure Your Chemical Supply Chain with Zero Leakage
          </h2>
          <p className="mt-4 text-sm sm:text-base text-primary-foreground/80">
            Request chemical compatibility consultations, UN test certificate details, and bulk dispatch schedules direct from our Ankleshwar factory.
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
