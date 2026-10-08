import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, FileText, Image } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources | Re-Green Africa Foundation",
  description:
    "Access stories, reports, and educational resources from Re-Green Africa Foundation.",
};

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-raf-forest text-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="text-raf-gold text-sm font-bold tracking-widest uppercase mb-4">
              Resources
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
              Stories, reports &amp;<br />
              <span className="text-raf-terracotta">resources.</span>
            </h1>
            <p className="text-raf-cream/80 text-xl leading-relaxed">
              Explore stories from the communities we work with, read about our
              programme outcomes, and access educational resources.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-raf-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Stories",
                description:
                  "First-hand accounts of environmental change from the communities and young people we work with.",
                href: "/resources/stories",
                cta: "Read Stories",
              },
              {
                icon: FileText,
                title: "Reports",
                description:
                  "Programme reports, impact documents, and annual reviews from RAF.",
                href: "/resources/stories",
                cta: "View Reports",
              },
              {
                icon: Image,
                title: "Media",
                description:
                  "Photos and documentation from our tree planting drives, MDD performances, and community events.",
                href: "/resources/stories",
                cta: "Browse Media",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-raf-charcoal/5 flex flex-col"
              >
                <div className="h-12 w-12 rounded-xl bg-raf-sand/50 flex items-center justify-center text-raf-forest mb-5">
                  <item.icon className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-heading font-bold text-raf-forest mb-3">
                  {item.title}
                </h2>
                <p className="text-raf-charcoal/70 leading-relaxed flex-grow mb-6">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-raf-terracotta font-semibold hover:gap-3 transition-all text-sm"
                >
                  {item.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
