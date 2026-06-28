import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white text-navy">
      <div className="container-x flex items-center justify-between py-3">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img src={logo} alt="Maruti Blow Tech" className="h-10 w-auto md:h-12" />
        </Link>


        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "bg-ember text-accent-foreground" }}
              className="px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-colors hover:bg-drum"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-3 bg-ember px-4 py-2 text-sm font-bold uppercase tracking-wider text-accent-foreground transition-opacity hover:opacity-90"
          >
            Get a Quote
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-drum-deep md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "bg-ember text-accent-foreground" }}
              className="block px-5 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-drum"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
