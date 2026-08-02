import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, ArrowLeft, ArrowRight, Shield, CalendarDays, Recycle } from "lucide-react";
import { products } from "@/lib/products";
import { SectionHead } from "@/components/site/SectionHead";

export const Route = createFileRoute("/products_/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData?.product) return {};
    const { product } = loaderData;
    return {
      meta: [
        { title: `${product.name} | HDPE Manufacturer | Maruti Blow Tech` },
        { name: "description", content: product.tagline },
        { property: "og:title", content: product.name },
        { property: "og:description", content: product.tagline },
        { property: "og:image", content: product.image },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: product.name,
            image: product.image,
            description: product.tagline,
            brand: {
              "@type": "Brand",
              name: "Maruti Blow Tech",
            },
            offers: {
              "@type": "Offer",
              url: `https://marutiblowtech.com/products/${product.slug}`,
              priceCurrency: "INR",
              price: "0", // Quote based
              availability: "https://schema.org/InStock",
            },
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
      <section className="border-b border-border bg-navy text-primary-foreground pt-12 pb-20">
        <div className="container-x">
          <Link
            to="/products"
            className="mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary-foreground/60 hover:text-ember transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Catalog
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-ember">
                Capacity: {product.capacity}
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl">{product.name}</h1>
              <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
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

      <section className="bg-background py-16">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-gradient-to-b from-bone/40 to-bone border border-border/50 p-12 lg:p-20 flex justify-center items-center group">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div>
            <SectionHead 
              eyebrow="Product Specifications" 
              title="Engineered for harsh industrial requirements." 
            />
            
            <div className="mt-10 grid sm:grid-cols-2 gap-6">
               <div className="bg-card border border-border/50 p-6 rounded-2xl">
                 <Shield className="h-6 w-6 text-ember mb-4" />
                 <h4 className="font-bold text-navy text-lg">UN Certified</h4>
                 <p className="text-sm text-muted-foreground mt-2">Tested against strict international standards for drop and leak proofing.</p>
               </div>
               <div className="bg-card border border-border/50 p-6 rounded-2xl">
                 <Recycle className="h-6 w-6 text-ember mb-4" />
                 <h4 className="font-bold text-navy text-lg">Virgin HDPE</h4>
                 <p className="text-sm text-muted-foreground mt-2">100% food-grade inner layer ensuring zero contamination.</p>
               </div>
            </div>

            <h3 className="mt-10 text-xl font-bold text-navy border-b border-border pb-4">Key Features</h3>
            <ul className="mt-6 space-y-4">
              {product.features.map((f, i) => (
                <li key={i} className="flex items-start gap-4 text-base">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ember/15">
                    <Check className="h-3.5 w-3.5 text-ember" />
                  </span>
                  <span className="text-navy/80 leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      
      <section className="bg-bone/30 border-t border-border flex-1">
        <div className="container-x py-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy">Ready to place an order?</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Our Ankleshwar GIDC facility runs 24/7 to ensure your supply chain never stops. Let us know your requirements.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 border-2 border-navy bg-navy px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground hover:bg-transparent hover:text-navy transition-colors"
          >
            Contact Sales Team
          </Link>
        </div>
      </section>
    </>
  );
}
