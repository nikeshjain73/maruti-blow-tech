import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, ArrowRight, Shield, CalendarDays, Recycle, HelpCircle } from "lucide-react";
import { products } from "@/lib/products";
import { SectionHead } from "@/components/site/SectionHead";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { RelatedProducts } from "@/components/site/RelatedProducts";

export const Route = createFileRoute("/products_/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData?.product) return {};
    const { product } = loaderData;
    const pageUrl = `https://marutiblowtech.com/products/${product.slug}`;

    return {
      meta: [
        { title: product.metaTitle },
        { name: "description", content: product.metaDescription },
        { property: "og:title", content: product.metaTitle },
        { property: "og:description", content: product.metaDescription },
        { property: "og:image", content: product.image },
        { property: "og:url", content: pageUrl },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [
        {
          rel: "canonical",
          href: pageUrl,
        },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: product.name,
            image: product.image.startsWith("http") ? product.image : `https://marutiblowtech.com${product.image}`,
            description: product.metaDescription,
            sku: `MBT-${product.slug.toUpperCase()}`,
            brand: {
              "@type": "Brand",
              name: "Maruti Blow Tech",
            },
            offers: {
              "@type": "Offer",
              url: pageUrl,
              priceCurrency: "INR",
              price: "0",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              itemCondition: "https://schema.org/NewCondition",
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: product.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        },
      ],
    };
  },
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const { product } = Route.useLoaderData();

  return (
    <>
      <section className="border-b border-border bg-navy text-primary-foreground pt-10 pb-16">
        <div className="container-x">
          <Breadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: "Products", url: "/products" },
              { name: product.name },
            ]}
          />

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-ember">
                Capacity: {product.capacity}
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">{product.name}</h1>
              <p className="mt-4 max-w-2xl text-base sm:text-lg text-primary-foreground/80">
                {product.tagline}
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 inline-flex items-center gap-2 bg-ember px-6 py-4 text-sm font-bold uppercase tracking-wider text-accent-foreground hover:opacity-90 transition-opacity"
            >
              Request Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* OVERVIEW & PRODUCT SHOWCASE */}
      <section className="bg-background py-16">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 relative aspect-square w-full overflow-hidden rounded-3xl bg-gradient-to-b from-bone/40 to-bone border border-border/50 p-8 sm:p-12 lg:p-16 flex justify-center items-center group sticky top-24">
            <img
              src={product.image}
              alt={`${product.name} manufactured by Maruti Blow Tech`}
              className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="lg:col-span-7">
            <SectionHead 
              eyebrow="Product Engineering" 
              title="Built for rigorous industrial containment." 
            />

            <div className="mt-6 space-y-4 text-base text-navy/80 leading-relaxed">
              {product.overview.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="bg-card border border-border/60 p-5 rounded-xl">
                <Shield className="h-6 w-6 text-ember mb-3" />
                <h3 className="font-bold text-navy text-base">UN Tested & Compliant</h3>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                  Engineered to meet stringent international drop, hydraulic pressure, and stacking standards.
                </p>
              </div>
              <div className="bg-card border border-border/60 p-5 rounded-xl">
                <Recycle className="h-6 w-6 text-ember mb-3" />
                <h3 className="font-bold text-navy text-base">Virgin HM-HDPE Polymer</h3>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                  Food-grade, non-toxic contact layer guaranteeing zero chemical contamination.
                </p>
              </div>
            </div>

            {/* KEY FEATURES */}
            <h3 className="mt-10 text-xl font-bold text-navy border-b border-border pb-3">Key Performance Features</h3>
            <ul className="mt-5 space-y-3">
              {product.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3.5 text-sm">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ember/15">
                    <Check className="h-3 w-3 text-ember" />
                  </span>
                  <span className="text-navy/90 font-medium leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TECHNICAL SPECIFICATIONS & USE CASES */}
      <section className="bg-secondary/40 border-y border-border py-16">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          {/* SPECS TABLE */}
          <div>
            <h2 className="text-2xl font-bold text-navy">Technical Specifications</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Parameters engineered at our Ankleshwar GIDC manufacturing plant.
            </p>
            <div className="mt-6 overflow-hidden rounded-xl border border-border/70 bg-white">
              <table className="w-full text-left text-sm">
                <tbody>
                  {product.specs.map((spec, i) => (
                    <tr
                      key={spec.label}
                      className={i % 2 === 0 ? "bg-white" : "bg-card/60"}
                    >
                      <th className="py-3 px-4 font-semibold text-navy w-1/3 border-b border-border/40 text-xs uppercase tracking-wider">
                        {spec.label}
                      </th>
                      <td className="py-3 px-4 text-navy/80 border-b border-border/40">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* INDUSTRY USE CASES */}
          <div>
            <h2 className="text-2xl font-bold text-navy">Recommended Industrial Uses</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Proven compatibility across vital chemical and industrial verticals.
            </p>
            <div className="mt-6 space-y-3">
              {product.useCases.map((useCase, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-border/60 bg-white p-4 shadow-sm"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <p className="text-sm text-navy/90 font-medium leading-relaxed">{useCase}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-dashed border-ember/50 bg-ember/5 p-4 text-xs text-navy/80">
              <span className="font-bold text-ember uppercase tracking-wider block mb-1">
                Custom Formulation or Special Color?
              </span>
              We produce custom-mould drums in brand-specific colours with metal lock rings. Explore our{" "}
              <Link to="/custom-mould-drums" className="font-bold text-ember underline hover:text-navy">
                Custom Mould Drums
              </Link>{" "}
              division or contact our technical team for custom tooling.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-background py-16">
        <div className="container-x max-w-4xl">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-ember">
              Frequently Asked Questions
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy">
              Questions About {product.name}
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {product.faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border border-border/70 bg-card/40 p-6 transition-all hover:border-border"
              >
                <h3 className="flex items-start gap-3 font-bold text-navy text-base sm:text-lg">
                  <HelpCircle className="h-5 w-5 text-ember shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="mt-3 pl-8 text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS BLOCK (Step 2) */}
      <RelatedProducts currentSlug={product.slug} />

      {/* BOTTOM CTA */}
      <section className="bg-bone/40 border-t border-border">
        <div className="container-x py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy">
            Order High-Grade {product.name} Direct From Factory
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            Manufactured 24/7 at Ankleshwar GIDC, Gujarat. Inquire today for technical datasheets, sample units, and bulk commercial pricing.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-navy bg-navy px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground hover:bg-transparent hover:text-navy transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              to="/guides/how-to-choose-an-hdpe-drum"
              className="inline-flex items-center gap-2 border border-border bg-white px-6 py-4 text-sm font-bold uppercase tracking-wider text-navy hover:bg-secondary transition-colors"
            >
              Read Drum Selection Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
