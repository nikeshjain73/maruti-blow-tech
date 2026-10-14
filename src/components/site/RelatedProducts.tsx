import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export type RelatedItem = {
  slug: string;
  name: string;
  anchorText: string;
  description: string;
};

// Precise config map as mandated by Step 2
export const relatedProductsMap: Record<string, RelatedItem[]> = {
  "narrow-mouth-drums": [
    {
      slug: "full-open-mouth-drums",
      name: "Full Open Mouth Drums",
      anchorText: "Full open mouth drums (20L to 80L)",
      description: "Snap-fit clamping ring drums engineered for powders, viscous chemicals, and bulk solids.",
    },
    {
      slug: "wide-mouth-drums",
      name: "Wide Mouth Drums",
      anchorText: "Wide mouth drums with 6-inch opening",
      description: "Pilfer-proof sealing drums designed for rapid filling and discharge of liquid chemicals.",
    },
    {
      slug: "accessories",
      name: "Lids, Caps & Accessories",
      anchorText: "caps and vent plugs for narrow mouth drums",
      description: "Leak-proof bung caps, tamper-evident seals, and automated pressure-relief vent plugs.",
    },
  ],
  "full-open-mouth-drums": [
    {
      slug: "narrow-mouth-drums",
      name: "Narrow Mouth Drums",
      anchorText: "50L narrow mouth HDPE drums",
      description: "Standard industrial liquid drums featuring auto-sealing bungs and drop-tested durability.",
    },
    {
      slug: "wide-mouth-drums",
      name: "Wide Mouth Drums",
      anchorText: "Wide mouth drums with pilfer-proof seals",
      description: "Ideal pairing for high-viscosity materials requiring secure stackability and tamper evidence.",
    },
    {
      slug: "accessories",
      name: "Lids, Caps & Accessories",
      anchorText: "locking rings and drum lids",
      description: "Galvanized steel and powder-coated metal clamping rings with food-grade airtight gasket seals.",
    },
    {
      slug: "custom-mould-drums",
      name: "Custom Mould Drums",
      anchorText: "custom-mould drums in brand colours",
      description: "Tailor-made open-top containers manufactured in custom Pantone shades with silkscreen branding.",
    },
  ],
  "wide-mouth-drums": [
    {
      slug: "full-open-mouth-drums",
      name: "Full Open Mouth Drums",
      anchorText: "Full open mouth drums with clamping rings",
      description: "Complete diameter opening for quick filling and thorough cleaning between cycles.",
    },
    {
      slug: "rocket-drums",
      name: "Rocket Drums",
      anchorText: "50L rocket drums for outdoor storage",
      description: "High-grade UV-stabilised industrial drums designed for prolonged outdoor warehousing.",
    },
    {
      slug: "accessories",
      name: "Lids, Caps & Accessories",
      anchorText: "pilfer-proof seals and lids",
      description: "Heavy-duty threaded lids, bung closures, and tamper-evident locking solutions.",
    },
  ],
  "rocket-drums": [
    {
      slug: "narrow-mouth-drums",
      name: "Narrow Mouth Drums",
      anchorText: "Narrow mouth HDPE drums for chemical export",
      description: "UN-tested containers built for liquid agrochemicals, acids, and solvent logistics.",
    },
    {
      slug: "wide-mouth-drums",
      name: "Wide Mouth Drums",
      anchorText: "Wide mouth drums with 6\" mouth opening",
      description: "High-capacity stackable containers with tamper-evident threading and leak-proof necks.",
    },
    {
      slug: "jerry-cans",
      name: "Jerry Cans",
      anchorText: "10L and 35L stackable jerry cans",
      description: "Compact chemical and pharma carboys with integrated ergonomic handles.",
    },
  ],
  "jerry-cans": [
    {
      slug: "mouser-jerry-cans",
      name: "Mouser Jerry Cans",
      anchorText: "20–35L Mouser jerry cans",
      description: "Heavy-duty UN-rated mouser cans engineered with built-in handles and auto-sealing mouths.",
    },
    {
      slug: "narrow-mouth-drums",
      name: "Narrow Mouth Drums",
      anchorText: "50L narrow mouth drums for bulk chemicals",
      description: "High-volume HM-HDPE industrial drums for bulk liquid packaging requirements.",
    },
    {
      slug: "accessories",
      name: "Lids, Caps & Accessories",
      anchorText: "caps and tamper-evident seals",
      description: "Induction heat-seal caps, pour spouts, and replacement vent closures.",
    },
  ],
  "mouser-jerry-cans": [
    {
      slug: "jerry-cans",
      name: "Jerry Cans",
      anchorText: "10L and 35L jerry cans",
      description: "Standard industrial carboys and chemical jerry cans with high drop impact resilience.",
    },
    {
      slug: "narrow-mouth-drums",
      name: "Narrow Mouth Drums",
      anchorText: "50L narrow mouth HDPE drums",
      description: "High top-load compression drums engineered for multi-tier warehouse pallet racking.",
    },
    {
      slug: "accessories",
      name: "Lids, Caps & Accessories",
      anchorText: "mouser caps and vent plugs",
      description: "Airtight threaded closures and pressure-compensating breathable caps.",
    },
  ],
  "accessories": [
    {
      slug: "narrow-mouth-drums",
      name: "Narrow Mouth Drums",
      anchorText: "compatible with 50L narrow mouth HDPE drums",
      description: "Bung closures, tamper-evident tear-off seals, and venting caps matched to standard openings.",
    },
    {
      slug: "full-open-mouth-drums",
      name: "Full Open Mouth Drums",
      anchorText: "compatible with full open mouth drums (20L–80L)",
      description: "Heavy-gauge clamping rings, rubber sealing gaskets, and snap-fit lids.",
    },
    {
      slug: "wide-mouth-drums",
      name: "Wide Mouth Drums",
      anchorText: "compatible with wide mouth drums",
      description: "6-inch threaded closures, inner seals, and safety caps for chemical containers.",
    },
    {
      slug: "rocket-drums",
      name: "Rocket Drums",
      anchorText: "compatible with rocket drums",
      description: "UV-resistant replacement caps and industrial pressure-relief vent assemblies.",
    },
    {
      slug: "jerry-cans",
      name: "Jerry Cans",
      anchorText: "compatible with 10L & 35L jerry cans",
      description: "Tamper-evident screw caps, pour spouts, and vented bungs for carboys.",
    },
    {
      slug: "mouser-jerry-cans",
      name: "Mouser Jerry Cans",
      anchorText: "compatible with 20L–35L mouser jerry cans",
      description: "Heavy-duty mouser caps and leak-proof gasket seals.",
    },
    {
      slug: "custom-mould-drums",
      name: "Custom Mould Drums",
      anchorText: "custom-mould drums with specialized closures",
      description: "Bespoke tooling and specialized closures engineered to custom technical specifications.",
    },
  ],
};

interface RelatedProductsProps {
  currentSlug: string;
}

export function RelatedProducts({ currentSlug }: RelatedProductsProps) {
  const relatedList = relatedProductsMap[currentSlug];
  if (!relatedList || relatedList.length === 0) return null;

  return (
    <section className="border-t border-border bg-card/60 py-16">
      <div className="container-x">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-ember">
              Related Industrial Containers
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-navy">
              Explore Complementary HDPE Packaging
            </h2>
          </div>
          <Link
            to="/products"
            className="text-xs font-bold uppercase tracking-wider text-navy hover:text-ember flex items-center gap-1.5"
          >
            View Full Product Range <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {relatedList.map((item) => {
            const isCustomRoute = item.slug === "custom-mould-drums";
            const targetUrl = isCustomRoute ? "/custom-mould-drums" : `/products/${item.slug}`;

            return (
              <div
                key={item.slug}
                className="flex flex-col justify-between rounded-xl border border-border/70 bg-white p-6 shadow-sm hover:shadow-md hover:border-ember/40 transition-all group"
              >
                <div>
                  <h3 className="text-base font-bold text-navy group-hover:text-ember transition-colors">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-border/40">
                  <Link
                    to={targetUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-navy group-hover:text-ember transition-colors"
                  >
                    <span>{item.anchorText}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
