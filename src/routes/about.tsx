import { createFileRoute } from "@tanstack/react-router";
import factoryImg from "@/assets/factory.jpg";
import { SectionHead } from "@/components/site/SectionHead";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Maruti Blow Tech Pvt. Ltd." },
      {
        name: "description",
        content:
          "Founded in 2013 in Ankleshwar, Gujarat. Two decades of expertise in HDPE blow & injection moulding — engineered for quality, reliability and respect.",
      },
      { property: "og:title", content: "About — Maruti Blow Tech" },
      {
        property: "og:description",
        content: "Two decades of HDPE blow & injection moulding expertise.",
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
            Reliability and Respect. A true devotee in the service of God Rama inspires us
            to follow the same quality in the service of our customers.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="container-x grid items-start gap-12 py-20 md:grid-cols-2">
          <div>
            <SectionHead
              eyebrow="Our Story"
              title="Two decades of moulding expertise."
            />
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Maruti Blow Tech Pvt. Ltd. was incorporated in 2013 by a group of directors
                who have been manufacturing plastic blow and injection moulding articles
                and containers for the last two decades. Their vast experience has brought
                various laurels to the company.
              </p>
              <p>
                Maruti Blow Tech is born from the experience of the directors of an
                existing group of companies — L.K. Continental Plastic Division and
                Maruti Industries.
              </p>
              <p>
                When it comes to packaging, we go to the farthest point of manufacturing
                technology perfection to provide perfect solutions in polymer drums, jerry
                cans, mousers and carboys — conforming to international standards.
              </p>
            </div>
          </div>
          <div>
            <img
              src={factoryImg}
              alt="Maruti Blow Tech manufacturing facility"
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
          <SectionHead
            eyebrow="Salient Features"
            title="What every Maruti container delivers."
          />
          <div className="mt-10 grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {salient.map((s) => (
              <div
                key={s}
                className="flex items-center gap-3 bg-card px-5 py-4 text-sm"
              >
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
          </div>
        </div>
      </section>
    </>
  );
}
