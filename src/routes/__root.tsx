import "@fontsource/archivo-black/400.css";
import "@fontsource/barlow/400.css";
import "@fontsource/barlow/500.css";
import "@fontsource/barlow/600.css";
import "@fontsource/barlow/700.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { Toaster } from "../components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl text-foreground">404</h1>
        <h2 className="mt-4 text-xl text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-ember px-5 py-3 text-sm font-bold uppercase tracking-wider text-accent-foreground hover:opacity-90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center bg-ember px-5 py-3 text-sm font-bold uppercase tracking-wider text-accent-foreground hover:opacity-90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-input bg-background px-5 py-3 text-sm font-bold uppercase tracking-wider text-foreground hover:bg-secondary"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Maruti Blow Tech — HDPE Drums, Jerry Cans & Carboys" },
      {
        name: "description",
        content:
          "Maruti Blow Tech Pvt. Ltd. — manufacturer of HDPE plastic drums, jerry cans and carboys from 50 ml to 230 L. World-class design, zero leakage, food-grade.",
      },
      { name: "author", content: "Maruti Blow Tech Pvt. Ltd." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://marutiblowtech.com/#organization",
              name: "Maruti Blow Tech Pvt. Ltd.",
              url: "https://marutiblowtech.com",
              logo: "https://marutiblowtech.com/logo.png",
              description:
                "Manufacturer of industrial HDPE plastic drums, jerry cans, carboys and accessories in Ankleshwar GIDC, Gujarat.",
              foundingDate: "2013",
              email: "contact@marutiblowtech.com",
              telephone: "+91 2646 224284",
              address: {
                "@type": "PostalAddress",
                streetAddress: "C 1 - 4727/1/2, Opp. Rallis, G.I.D.C. Estate",
                addressLocality: "Ankleshwar",
                postalCode: "393002",
                addressRegion: "Gujarat",
                addressCountry: "IN",
              },
            },
            {
              "@type": "LocalBusiness",
              "@id": "https://marutiblowtech.com/#localbusiness",
              name: "Maruti Blow Tech Pvt. Ltd.",
              url: "https://marutiblowtech.com",
              telephone: "+91 2646 224284",
              email: "contact@marutiblowtech.com",
              priceRange: "$$",
              image: "https://marutiblowtech.com/logo.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "C 1 - 4727/1/2, Opp. Rallis, G.I.D.C. Estate",
                addressLocality: "Ankleshwar",
                postalCode: "393002",
                addressRegion: "Gujarat",
                addressCountry: "IN",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "19:00",
                },
              ],
            },
          ],
        }),
      },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex flex-col">
          <Outlet />
        </main>
        <Footer />
      </div>
      <Toaster richColors position="top-center" />
    </QueryClientProvider>
  );
}
