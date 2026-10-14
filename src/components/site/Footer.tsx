import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="mt-24 border-t-4 border-ember bg-navy text-primary-foreground">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link to="/" className="inline-block mb-2">
            <img 
              src={logo} 
              alt="Maruti Blow Tech" 
              className="h-14 w-auto brightness-0 invert opacity-90 transition-opacity hover:opacity-100" 
            />
          </Link>
          <p className="mt-4 max-w-md text-sm text-primary-foreground/70">
            Manufacturer of HDPE plastic drums, jerry cans, carboys and injection-moulded
            articles — from 10 L to 80 L. Quality packaging, world-class design,
            zero leakage.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-primary-foreground/60">
            <Link to="/hdpe-drum-manufacturer-ankleshwar-gujarat" className="hover:text-ember underline underline-offset-4">
              Ankleshwar GIDC Plant
            </Link>
            <span>•</span>
            <Link to="/guides/how-to-choose-an-hdpe-drum" className="hover:text-ember underline underline-offset-4">
              Drum Selection Guide
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-widest text-ember uppercase">Products</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>
              <Link to="/products/narrow-mouth-drums" className="hover:text-ember">
                Narrow Mouth HDPE Drums
              </Link>
            </li>
            <li>
              <Link to="/products/full-open-mouth-drums" className="hover:text-ember">
                Full Open Mouth Drums
              </Link>
            </li>
            <li>
              <Link to="/products/wide-mouth-drums" className="hover:text-ember">
                Wide Mouth Drums
              </Link>
            </li>
            <li>
              <Link to="/products/rocket-drums" className="hover:text-ember">
                Rocket Drums
              </Link>
            </li>
            <li>
              <Link to="/products/jerry-cans" className="hover:text-ember">
                Jerry Cans
              </Link>
            </li>
            <li>
              <Link to="/products/mouser-jerry-cans" className="hover:text-ember">
                Mouser Jerry Cans
              </Link>
            </li>
            <li>
              <Link to="/products/accessories" className="hover:text-ember">
                Lids, Caps & Accessories
              </Link>
            </li>
            <li>
              <Link to="/custom-mould-drums" className="text-ember font-semibold hover:underline">
                Custom Mould Drums
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-widest text-ember uppercase">Company & Solutions</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/" className="hover:text-ember">Home</Link></li>
            <li><Link to="/products" className="hover:text-ember">All Products Catalog</Link></li>
            <li><Link to="/about" className="hover:text-ember">About Maruti</Link></li>
            <li><Link to="/contact" className="hover:text-ember">Contact Sales</Link></li>
            <li>
              <Link to="/industries/chemical-packaging" className="hover:text-ember">
                Chemical Packaging
              </Link>
            </li>
            <li>
              <Link to="/industries/pharma-and-food-grade-packaging" className="hover:text-ember">
                Pharma & Food Packaging
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-widest text-ember uppercase">Reach Us</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
              <span>C 1 - 4727/1/2, Opp. Rallis, G.I.D.C. Estate, Ankleshwar 393002, Gujarat, India</span>
            </li>
            <li className="flex gap-2">
              <Phone className="h-4 w-4 shrink-0 text-ember" />
              <a href="tel:+912646224284" className="hover:text-ember">+91 2646 224284</a>
            </li>
            <li className="flex gap-2">
              <Mail className="h-4 w-4 shrink-0 text-ember" />
              <a href="mailto:contact@marutiblowtech.com" className="hover:text-ember">contact@marutiblowtech.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-drum-deep">
        <div className="container-x flex flex-col gap-2 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Maruti Blow Tech Pvt. Ltd. All rights reserved.</span>
          <span className="uppercase tracking-widest">It's all about quality.</span>
        </div>
      </div>
    </footer>
  );
}
