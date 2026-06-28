import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="mt-24 border-t-4 border-ember bg-navy text-primary-foreground">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
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
        </div>


        <div>
          <h4 className="text-xs font-bold tracking-widest text-ember">Navigate</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-ember">Home</Link></li>
            <li><Link to="/products" className="hover:text-ember">Products</Link></li>
            <li><Link to="/about" className="hover:text-ember">About</Link></li>
            <li><Link to="/contact" className="hover:text-ember">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-widest text-ember">Reach Us</h4>
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
