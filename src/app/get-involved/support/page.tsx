import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Support Our Work | Re-Green Africa Foundation",
  description:
    "Support Re-Green Africa Foundation's environmental and community work in Uganda.",
};

export default function SupportPage() {
  return (
    <>
      <section className="bg-raf-forest text-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <Link
            href="/get-involved"
            className="inline-flex items-center gap-2 text-raf-cream/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Get Involved
          </Link>
          <div className="max-w-3xl">
            <p className="text-raf-gold text-sm font-bold tracking-widest uppercase mb-4">
              Support
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
              Help us grow<br />
              <span className="text-raf-terracotta">the movement.</span>
            </h1>
            <p className="text-raf-cream/80 text-xl leading-relaxed">
              Financial support — however large or small — directly funds
              tree planting, community programmes, youth training, and
              environmental education across Uganda.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-raf-cream">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-raf-forest mb-6">
            Where your support goes
          </h2>
          <div className="space-y-5 mb-14">
            {[
              {
                label: "Tree Planting & Restoration",
                text: "Funding seedlings, nursery equipment, community mobilisation, and follow-up monitoring.",
              },
              {
                label: "Youth & Schools Programmes",
                text: "Supporting environmental clubs, school nurseries, training sessions, and youth leadership activities.",
              },
              {
                label: "Climate Culture Performances",
                text: "Enabling MDD performances, storytelling events, and community cultural campaigns.",
              },
              {
                label: "Community Education",
                text: "Producing and delivering environmental education materials, workshops, and campaigns.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex gap-4 bg-white rounded-2xl p-6 shadow-sm"
              >
                <span className="h-2 w-2 rounded-full bg-raf-terracotta mt-2.5 shrink-0" />
                <div>
                  <h3 className="font-heading font-bold text-raf-forest mb-1">
                    {item.label}
                  </h3>
                  <p className="text-raf-charcoal/70">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-raf-forest text-white rounded-3xl p-10 text-center">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Ready to support RAF?
            </h2>
            <p className="text-raf-cream/80 mb-6">
              Contact us directly to discuss donation and funding options.
            </p>
            <a
              href="mailto:regreenafricafoundation@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-raf-terracotta hover:bg-raf-terracotta/90 text-white font-medium transition-colors"
            >
              <Mail className="h-4 w-4" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
