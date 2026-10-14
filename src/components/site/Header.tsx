import { Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

export const productNavItems = [
  { to: "/products/narrow-mouth-drums", label: "Narrow Mouth HDPE Drums" },
  { to: "/products/full-open-mouth-drums", label: "Full Open Mouth Drums" },
  { to: "/products/wide-mouth-drums", label: "Wide Mouth Drums" },
  { to: "/products/rocket-drums", label: "Rocket Drums" },
  { to: "/products/jerry-cans", label: "Jerry Cans" },
  { to: "/products/mouser-jerry-cans", label: "Mouser Jerry Cans" },
  { to: "/products/accessories", label: "Lids, Caps & Accessories" },
] as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white text-navy">
      <div className="container-x flex items-center justify-between py-3">
        <Link to="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
          <img src={logo} alt="Maruti Blow Tech" className="h-10 w-auto md:h-12" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            activeProps={{ className: "bg-ember text-accent-foreground" }}
            className="px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-colors hover:bg-drum"
          >
            Home
          </Link>

          {/* Accessible Products Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <div className="flex items-center">
              <Link
                to="/products"
                activeOptions={{ exact: true }}
                activeProps={{ className: "bg-ember text-accent-foreground" }}
                className="px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-colors hover:bg-drum flex items-center gap-1"
                onFocus={() => setDropdownOpen(true)}
              >
                Products
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
              </Link>
            </div>

            {/* Always rendered in HTML for bots/SEO, styled visible on open */}
            <div
              className={`absolute left-0 top-full min-w-[260px] bg-white border border-border shadow-lg py-2 transition-all duration-150 ${
                dropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1 pointer-events-none"
              }`}
            >
              <div className="px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-muted-foreground border-b border-border/40 mb-1">
                <Link to="/products" className="hover:text-ember">
                  All Products Overview →
                </Link>
              </div>
              {productNavItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2 text-xs font-semibold text-navy hover:bg-drum hover:text-navy transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-border/40 mt-1 pt-1">
                <Link
                  to="/custom-mould-drums"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2 text-xs font-bold text-ember hover:bg-drum transition-colors"
                >
                  Custom Mould Drums
                </Link>
              </div>
            </div>
          </div>

          <Link
            to="/about"
            activeProps={{ className: "bg-ember text-accent-foreground" }}
            className="px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-colors hover:bg-drum"
          >
            About
          </Link>
          <Link
            to="/contact"
            activeProps={{ className: "bg-ember text-accent-foreground" }}
            className="px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-colors hover:bg-drum"
          >
            Contact
          </Link>

          <Link
            to="/contact"
            className="ml-3 bg-ember px-4 py-2 text-sm font-bold uppercase tracking-wider text-accent-foreground transition-opacity hover:opacity-90"
          >
            Get a Quote
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 text-navy"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-drum-deep bg-white md:hidden py-2 px-4 space-y-1">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            activeOptions={{ exact: true }}
            activeProps={{ className: "bg-ember text-accent-foreground" }}
            className="block px-3 py-2 text-sm font-semibold uppercase tracking-wider hover:bg-drum"
          >
            Home
          </Link>
          <div className="py-1">
            <Link
              to="/products"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-sm font-bold uppercase tracking-wider text-ember hover:bg-drum"
            >
              All Products
            </Link>
            <div className="pl-4 space-y-1 border-l-2 border-ember/30 my-1">
              {productNavItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-1.5 text-xs font-medium text-navy/80 hover:text-ember"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/custom-mould-drums"
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-1.5 text-xs font-bold text-ember"
              >
                Custom Mould Drums
              </Link>
            </div>
          </div>
          <Link
            to="/about"
            onClick={() => setMobileOpen(false)}
            activeProps={{ className: "bg-ember text-accent-foreground" }}
            className="block px-3 py-2 text-sm font-semibold uppercase tracking-wider hover:bg-drum"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            activeProps={{ className: "bg-ember text-accent-foreground" }}
            className="block px-3 py-2 text-sm font-semibold uppercase tracking-wider hover:bg-drum"
          >
            Contact
          </Link>
          <div className="pt-2">
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center bg-ember px-4 py-2 text-sm font-bold uppercase tracking-wider text-accent-foreground"
            >
              Get a Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
