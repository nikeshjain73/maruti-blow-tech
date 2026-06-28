import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { products } from "@/lib/products";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Maruti Blow Tech Pvt. Ltd. (Ankleshwar, Gujarat)" },
      {
        name: "description",
        content:
          "Get in touch with Maruti Blow Tech in Ankleshwar, Gujarat. Send an inquiry, request a quote or reach our sales team for HDPE drums, jerry cans and carboys.",
      },
      { property: "og:title", content: "Contact — Maruti Blow Tech" },
      {
        property: "og:description",
        content: "Reach our sales team for HDPE drums, jerry cans and carboys.",
      },
    ],
  }),
  component: ContactPage,
});

const inquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  product_interest: z.string().max(100).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const raw = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      company: String(fd.get("company") || ""),
      product_interest: String(fd.get("product_interest") || ""),
      message: String(fd.get("message") || ""),
    };

    const parsed = inquirySchema.safeParse(raw);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form.");
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("inquiries").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone || null,
      company: parsed.data.company || null,
      product_interest: parsed.data.product_interest || null,
      message: parsed.data.message,
    });
    setSubmitting(false);

    if (error) {
      console.error(error);
      toast.error("Couldn't send your inquiry. Please try again or call us directly.");
      return;
    }
    toast.success("Inquiry sent. Our sales team will be in touch shortly.");
    form.reset();
  }

  return (
    <>
      <section className="border-b border-border bg-navy text-primary-foreground">
        <div className="container-x py-20">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-ember">
            Get in Touch
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl">Let's talk packaging.</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            Tell us about your application — volume, contents, branding — and our sales
            team will respond with the right Maruti container for the job.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="container-x grid gap-px bg-border py-0 md:grid-cols-5">
          {/* INFO */}
          <aside className="bg-card p-8 sm:p-10 md:col-span-2">
            <h2 className="text-2xl text-navy">Reach Us</h2>

            <div className="mt-8 space-y-6 text-sm">
              <div className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-ember" />
                <div>
                  <div className="font-bold uppercase tracking-wider text-navy">Plant Address</div>
                  <p className="mt-1 text-muted-foreground">
                    C 1 - 4727/1/2, Opp. Rallis, G.I.D.C. Estate,<br />
                    Ankleshwar — 393002. Gujarat, India.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-ember" />
                <div>
                  <div className="font-bold uppercase tracking-wider text-navy">Phone</div>
                  <p className="mt-1 text-muted-foreground">
                    <a href="tel:+912646224284" className="block hover:text-ember">+91 2646 224284</a>
                    <a href="tel:+919687987777" className="block hover:text-ember">+91 96879 87777</a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-ember" />
                <div>
                  <div className="font-bold uppercase tracking-wider text-navy">Email</div>
                  <p className="mt-1 break-all text-muted-foreground">
                    <a href="mailto:contact@marutiblowtech.com" className="block hover:text-ember">contact@marutiblowtech.com</a>
                    <a href="mailto:sales@marutiblowtech.com" className="block hover:text-ember">sales@marutiblowtech.com</a>
                  </p>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <div className="font-bold uppercase tracking-wider text-navy">Sales Team</div>
                <p className="mt-1 text-muted-foreground">
                  <a href="tel:+918866242660" className="block hover:text-ember">+91 88662 42660</a>
                  <a href="tel:+919825123083" className="block hover:text-ember">+91 98251 23083</a>
                </p>
              </div>
            </div>
          </aside>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-card p-8 sm:p-10 md:col-span-3"
          >
            <h2 className="text-2xl text-navy">Send an Inquiry</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              All fields marked with * are required.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field label="Name *" name="name" required />
              <Field label="Email *" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Company" name="company" />
              <div className="sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-widest text-navy">
                  Product Interest
                </label>
                <select
                  name="product_interest"
                  defaultValue=""
                  className="mt-2 block w-full border border-input bg-background px-4 py-3 text-sm focus:border-drum focus:outline-none focus:ring-2 focus:ring-ring/30"
                >
                  <option value="">Select a product (optional)</option>
                  {products.map((p) => (
                    <option key={p.slug} value={p.name}>{p.name}</option>
                  ))}
                  <option value="Custom Mould">Custom Mould / Other</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-widest text-navy">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  maxLength={2000}
                  className="mt-2 block w-full border border-input bg-background px-4 py-3 text-sm focus:border-drum focus:outline-none focus:ring-2 focus:ring-ring/30"
                  placeholder="Quantity, capacity, contents, expected delivery…"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-8 inline-flex items-center gap-2 bg-ember px-6 py-4 text-sm font-bold uppercase tracking-wider text-accent-foreground hover:opacity-90 disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Send Inquiry"}
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs font-bold uppercase tracking-widest text-navy">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 block w-full border border-input bg-background px-4 py-3 text-sm focus:border-drum focus:outline-none focus:ring-2 focus:ring-ring/30"
      />
    </div>
  );
}
