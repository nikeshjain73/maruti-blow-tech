import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

export type BreadcrumbItem = {
  name: string;
  url?: string;
};

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  // BreadcrumbList JSON-LD schema
  const breadcrumbListSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url ? { item: item.url.startsWith("http") ? item.url : `https://marutiblowtech.com${item.url}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }}
      />
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center text-xs font-semibold tracking-wider uppercase text-primary-foreground/70">
        <ol className="flex flex-wrap items-center gap-1.5">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex items-center gap-1.5">
                {index > 0 && <ChevronRight className="h-3.5 w-3.5 text-primary-foreground/40 shrink-0" />}
                {isLast || !item.url ? (
                  <span className="text-ember font-bold" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    to={item.url}
                    className="hover:text-ember transition-colors flex items-center gap-1"
                  >
                    {index === 0 && <Home className="h-3.5 w-3.5" />}
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
