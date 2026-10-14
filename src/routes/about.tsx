import { createFileRoute, Link } from "@tanstack/react-router";
import factoryImg from "@/assets/factory.jpg";
import { SectionHead } from "@/components/site/SectionHead";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Maruti Blow Tech Pvt. Ltd. | Ankleshwar GIDC" },
      {
        name: "description",
        content:
          "Incorporated in 2013 with 20+ years of group moulding experience. Leading manufacturer of HM-HDPE plastic drums, jerry cans & carboys in Ankleshwar, Gujarat.",
      },
      { property: "og:title", content: "About Maruti Blow Tech — HDPE Container Manufacturer" },
      {
        property: "og:description",
        content: "Two decades of HDPE blow and injection moulding expertise in Ankleshwar GIDC, Gujarat.",
      },
      { property: "og:url", content: "https://marutiblowtech.com/about" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://marutiblowtech.com/about",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          mainEntity: {
            "@type": "Organization",
            name: "Maruti Blow Tech Pvt. Ltd.",
            foundingDate: "2013",
            description: "Manufacturer of plastic blow and injection moulding articles and containers.",
            legalName: "Maruti Blow Tech Pvt. Ltd.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "C 1 - 4727/1/2, Opp. Rallis, G.I.D.C. Estate",
              addressLocality: "Ankleshwar",
              postalCode: "393002",
              addressRegion: "Gujarat",
              addressCountry: "IN",
            },
          },
        }),
      },
    ],
  }),
  component: AboutPage,
});

const salient = [
  "World-class design, wide acceptance",
  "Zero leakage",
  "Pilfer proof",
  "Optimal drainability — no wastage",
  "Good stackability",
  "Excellent space utilization",
  "Large aesthetic printing surface",
  "Available in varied sizes",
  "Corrosion free",
  "Excellent impact strength",
  "Long performance life",
  "High resale value",
  "Food grade virgin material",
  "Non toxic, odourless",
  "100% Recyclable eco-friendly",
];

function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-navy text-primary-foreground">
        <div className="container-x grid items-end gap-10 py-20 md:grid-cols-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-ember">
              About Us
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl">
              The name to <span className="text-ember">reckon with.</span>
            </h1>
          </div>
          <p className="text-primary-foreground/80">
            “Maruti” — an Indian mythological son of the God of Wind, a symbol of Strength,
            Reliability and Respect. A true devotee in the service of God Rama inspires us to follow
            the same quality in the service of our customers.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="container-x grid items-start gap-12 py-20 md:grid-cols-2">
          <div>
            <SectionHead eyebrow="Our Story" title="Two decades of moulding expertise." />
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Maruti Blow Tech Pvt. Ltd. was incorporated in 2013 by a group of directors who have
                been manufacturing plastic blow and injection moulding articles and containers for
                the last two decades. Their vast technical experience has brought various laurels to the
                company.
              </p>
              <p>
                Maruti Blow Tech is born from the experience of the directors of an existing group
                of companies — Krishna Plastic Industries and Maruti Industries. Operating from our automated facility in{" "}
                <Link
                  to="/hdpe-drum-manufacturer-ankleshwar-gujarat"
                  className="font-semibold text-navy underline decoration-ember hover:text-ember"
                >
                  Ankleshwar GIDC, Gujarat
                </Link>
                , we serve key industrial chemical hubs across Bharuch, Dahej, Vadodara, and western India.
              </p>
              <p>
                When it comes to packaging, we go to the farthest point of manufacturing technology
                perfection to provide perfect solutions in polymer drums, jerry cans, mousers and
                carboys — conforming to international standards. Discover our diverse{" "}
                <Link
                  to="/products"
                  className="font-semibold text-navy underline decoration-ember hover:text-ember"
                >
                  HDPE product catalog
                </Link>
                , including specialised{" "}
                <Link
                  to="/products/narrow-mouth-drums"
                  className="font-semibold text-navy underline decoration-ember hover:text-ember"
                >
                  narrow mouth drums
                </Link>
                , robust{" "}
                <Link
                  to="/products/full-open-mouth-drums"
                  className="font-semibold text-navy underline decoration-ember hover:text-ember"
                >
                  full open mouth drums
                </Link>
                , and branded{" "}
                <Link
                  to="/custom-mould-drums"
                  className="font-semibold text-ember underline hover:text-navy"
                >
                  custom-mould drums
                </Link>
                .
              </p>
              <p>
                We also offer sector-focused solutions designed specifically for{" "}
                <Link
                  to="/industries/chemical-packaging"
                  className="font-semibold text-navy underline decoration-ember hover:text-ember"
                >
                  chemical packaging
                </Link>{" "}
                as well as certified{" "}
                <Link
                  to="/industries/pharma-and-food-grade-packaging"
                  className="font-semibold text-navy underline decoration-ember hover:text-ember"
                >
                  pharmaceutical & food-grade packaging
                </Link>
                . For help choosing container types and neck specifications, consult our practical{" "}
                <Link
                  to="/guides/how-to-choose-an-hdpe-drum"
                  className="font-semibold text-navy underline decoration-ember hover:text-ember"
                >
                  HDPE drum selection guide
                </Link>
                .
              </p>
            </div>
          </div>
          <div>
            <img
              src={factoryImg}
              alt="Maruti Blow Tech manufacturing facility in Ankleshwar GIDC"
              width={1600}
              height={1024}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="mt-6 grid grid-cols-3 gap-px bg-border">
              {[
                { k: "2013", v: "Established" },
                { k: "20+", v: "Years experience" },
                { k: "24×7", v: "Production" },
              ].map((s) => (
                <div key={s.k} className="bg-card p-4 text-center">
                  <div className="font-display text-2xl text-navy">{s.k}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container-x py-20">
          <SectionHead eyebrow="Salient Features" title="What every Maruti container delivers." />
          <div className="mt-10 grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {salient.map((s) => (
              <div key={s} className="flex items-center gap-3 bg-card px-5 py-4 text-sm">
                <span className="h-2 w-2 shrink-0 bg-ember" />
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="container-x py-20">
          <div className="border-l-4 border-ember bg-card p-8 sm:p-12">
            <SectionHead
              eyebrow="Our Quality Policy"
              title="Beyond commitment to customer in quality and service."
              intro="We believe in development of individuals within the organization to develop the organization. We strive to provide total customer service under one roof — 24 × 365."
            />
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-ember px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-accent-foreground hover:opacity-90 transition-opacity"
              >
                Inquire With Our Sales Team <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
