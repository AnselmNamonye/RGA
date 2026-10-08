import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Volunteer | Re-Green Africa Foundation",
  description:
    "Volunteer with Re-Green Africa Foundation and help us restore nature and empower communities in Uganda.",
};

export default function VolunteerPage() {
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
              Volunteer
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
              Give your time.<br />
              <span className="text-raf-terracotta">Change your community.</span>
            </h1>
            <p className="text-raf-cream/80 text-xl leading-relaxed">
              Volunteers are at the heart of everything RAF does. Join us in
              tree planting, education, community campaigns, and more.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-raf-cream">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-raf-forest mb-8">
            Volunteer Opportunities
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Tree Planting & Restoration",
                desc: "Join our community tree planting drives and ecological restoration activities.",
              },
              {
                title: "Education & Outreach",
                desc: "Help deliver environmental education sessions in schools and communities.",
              },
              {
                title: "MDD Performances",
                desc: "Use your creative talents in music, dance, or drama for climate awareness.",
              },
              {
                title: "Communications & Documentation",
                desc: "Help document our work through photography, writing, or social media.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-raf-charcoal/5"
              >
                <h3 className="font-heading font-bold text-xl text-raf-forest mb-2">
                  {item.title}
                </h3>
                <p className="text-raf-charcoal/70">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-raf-forest text-white rounded-3xl p-10 text-center">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Ready to volunteer?
            </h2>
            <p className="text-raf-cream/80 mb-6">
              Reach out to us and we&apos;ll connect you with the right opportunity.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-raf-terracotta hover:bg-raf-terracotta/90 text-white font-medium transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
