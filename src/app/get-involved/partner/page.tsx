import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Partner With Us | Re-Green Africa Foundation",
  description:
    "Partner with Re-Green Africa Foundation to co-design environmental programmes and amplify community impact.",
};

export default function PartnerPage() {
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
              Partnerships
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
              Let&apos;s build<br />
              <span className="text-raf-terracotta">something together.</span>
            </h1>
            <p className="text-raf-cream/80 text-xl leading-relaxed">
              RAF welcomes partnerships with organisations, schools, businesses,
              and government bodies that share our commitment to environmental
              conservation and community empowerment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-raf-cream">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-raf-forest mb-8">
            Partnership Models
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {[
              {
                title: "Programme Partnership",
                desc: "Co-design and deliver environmental programmes with RAF in your community or region.",
              },
              {
                title: "School Partnership",
                desc: "Integrate RAF's youth environmental programmes into your school's activities.",
              },
              {
                title: "Corporate Partnership",
                desc: "Align your CSR activities with verified community environmental impact.",
              },
              {
                title: "Research & Knowledge",
                desc: "Collaborate on environmental research, monitoring, and documentation initiatives.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-raf-charcoal/5"
              >
                <h3 className="font-heading font-bold text-xl text-raf-forest mb-3">
                  {item.title}
                </h3>
                <p className="text-raf-charcoal/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-raf-terracotta text-white rounded-3xl p-10 text-center">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Interested in partnering with RAF?
            </h2>
            <p className="text-white/80 mb-6">
              Contact us to discuss how we can work together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-raf-terracotta hover:bg-raf-cream font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
