import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight, Factory, MapPin, Truck, ShieldCheck, Clock } from "lucide-react";
import { SectionHead } from "@/components/site/SectionHead";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import factoryImg from "@/assets/factory.jpg";

export const Route = createFileRoute("/hdpe-drum-manufacturer-ankleshwar-gujarat")({
  head: () => ({
    meta: [
      { title: "HDPE Drum Manufacturer Ankleshwar Gujarat | Maruti Blow Tech" },
      {
        name: "description",
        content:
          "Leading HDPE drum & jerry can manufacturer in Ankleshwar GIDC, Gujarat. Continuous 24/7 blow moulding plant supplying leak-proof UN certified containers.",
      },
      { property: "og:title", content: "HDPE Drum Manufacturer Ankleshwar Gujarat | Maruti Blow Tech" },
      {
        property: "og:description",
        content:
          "24/7 manufacturing facility in GIDC Estate Ankleshwar, producing industrial HDPE plastic drums, mousers, and carboys for Gujarat's chemical corridor.",
      },
      { property: "og:url", content: "https://marutiblowtech.com/hdpe-drum-manufacturer-ankleshwar-gujarat" },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://marutiblowtech.com/hdpe-drum-manufacturer-ankleshwar-gujarat",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Maruti Blow Tech Pvt. Ltd. - Ankleshwar Plant",
          address: {
            "@type": "PostalAddress",
            streetAddress: "C 1 - 4727/1/2, Opp. Rallis, G.I.D.C. Estate",
            addressLocality: "Ankleshwar",
            postalCode: "393002",
            addressRegion: "Gujarat",
            addressCountry: "IN",
          },
          telephone: "+91 2646 224284",
          email: "contact@marutiblowtech.com",
          priceRange: "$$",
        }),
      },
    ],
  }),
  component: AnkleshwarManufacturerPage,
});

function AnkleshwarManufacturerPage() {
  return (
    <>
      <section className="border-b border-border bg-navy text-primary-foreground pt-10 pb-16">
        <div className="container-x">
          <Breadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: "About", url: "/about" },
              { name: "Ankleshwar Gujarat Plant" },
            ]}
          />

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-ember">
                Ankleshwar GIDC Manufacturing Hub
              </span>
              <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-bold">
                HDPE Drum Manufacturer in Ankleshwar, Gujarat
              </h1>
              <p className="mt-4 max-w-2xl text-base sm:text-lg text-primary-foreground/80">
                Operating directly within the heart of Asia's premier chemical industrial corridor with automated 24/7 blow moulding production lines.
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

      {/* BODY CONTENT (400-600 words) */}
      <section className="bg-background py-16">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-slate-100 border border-border/50 sticky top-24">
            <img
              src={factoryImg}
              alt="Maruti Blow Tech manufacturing facility located in GIDC Ankleshwar Gujarat"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="lg:col-span-7 space-y-6 text-navy/80 text-base leading-relaxed">
            <SectionHead
              eyebrow="Strategic Location Advantage"
              title="Serving the Chemical, Pharma & Industrial Hubs of Gujarat"
            />

            <p>
              Ankleshwar GIDC in Gujarat is recognized globally as one of Asia's most intensive chemical, dye, pesticide, and pharmaceutical manufacturing clusters. Maruti Blow Tech Pvt. Ltd. was incorporated in 2013 (backed by group directors with two decades of established plastic blow and injection moulding expertise) specifically to deliver high-integrity, zero-leakage polymer packaging right to the doorsteps of Ankleshwar, Panoli, Jhagadia, Dahej, and Bharuch industrial estates.
            </p>

            <p>
              By locating our modern manufacturing plant at C 1 - 4727/1/2, Opp. Rallis in G.I.D.C. Estate, Ankleshwar, we eliminate long transport lead times and erratic supply chains for chemical producers. Our facility maintains an installed processing capacity of 150 tons per month and operates on a continuous 24×7 manufacturing schedule to ensure emergency dispatch availability for high-volume filling campaigns.
            </p>

            <p>
              We produce an exhaustive portfolio of HM-HDPE containers engineered to meet strict drop-impact and hydraulic pressure standards. For hazardous fluid transport, chemical processors rely on our{" "}
              <Link
                to="/products/narrow-mouth-drums"
                className="font-semibold text-navy underline decoration-ember hover:text-ember"
              >
                50L narrow mouth HDPE drums
              </Link>
              , while agrochemical and pigment manufacturers utilize our wide-access{" "}
              <Link
                to="/products/full-open-mouth-drums"
                className="font-semibold text-navy underline decoration-ember hover:text-ember"
              >
                full open mouth drums
              </Link>{" "}
              secured by galvanized metal locking rings.
            </p>

            <p>
              For liquid specialty additives, sanitizers, and diagnostic reagents, our plant blow-moulds ergonomic{" "}
              <Link
                to="/products/jerry-cans"
                className="font-semibold text-navy underline decoration-ember hover:text-ember"
              >
                10L and 35L jerry cans
              </Link>{" "}
              and heavy-gauge{" "}
              <Link
                to="/products/mouser-jerry-cans"
                className="font-semibold text-navy underline decoration-ember hover:text-ember"
              >
                mouser jerry cans
              </Link>
              . Furthermore, our on-site tooling facility produces{" "}
              <Link
                to="/custom-mould-drums"
                className="font-semibold text-ember underline hover:text-navy"
              >
                custom mould drums
              </Link>{" "}
              in customized corporate colors with smooth surfaces for screen branding.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="bg-card border border-border/60 p-5 rounded-xl">
                <Clock className="h-6 w-6 text-ember mb-3" />
                <h3 className="font-bold text-navy text-base">24×7 Plant Operation</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Continuous production cycles guarantee rapid dispatch schedules across Dahej PCPIR, Bharuch, and Vadodara.
                </p>
              </div>
              <div className="bg-card border border-border/60 p-5 rounded-xl">
                <ShieldCheck className="h-6 w-6 text-ember mb-3" />
                <h3 className="font-bold text-navy text-base">Strict Quality Assurance</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  In-house drop testing, leak detection, and environmental stress crack resistance (ESCR) screening on all production runs.
                </p>
              </div>
            </div>

            <p>
              Whether you are an exporter shipping specialty chemicals through Nhava Sheva / Hazira or an active pharmaceutical manufacturer in Ankleshwar GIDC, Maruti Blow Tech provides reliable local container inventory. Review our{" "}
              <Link
                to="/guides/how-to-choose-an-hdpe-drum"
                className="font-semibold text-navy underline decoration-ember hover:text-ember"
              >
                HDPE drum selection guide
              </Link>{" "}
              or contact our sales engineers today.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-primary-foreground py-16">
        <div className="container-x text-center max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Partner with Ankleshwar's Trusted HDPE Container Manufacturer
          </h2>
          <p className="mt-4 text-sm sm:text-base text-primary-foreground/80">
            Contact our plant sales desk at Ankleshwar GIDC for factory visits, batch sample inspections, and contract pricing.
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
