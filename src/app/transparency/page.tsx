import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Transparency | Re-Green Africa Foundation",
  description:
    "Re-Green Africa Foundation's commitment to transparency, accountability, and responsible stewardship.",
};

export default function TransparencyPage() {
  return (
    <>
      <section className="bg-raf-forest text-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="text-raf-gold text-sm font-bold tracking-widest uppercase mb-4">
              Transparency
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
              Our Commitment to<br />
              <span className="text-raf-terracotta">Transparency</span>
            </h1>
            <p className="text-raf-cream/80 text-xl leading-relaxed">
              We believe that trust is built through openness. Here&apos;s how
              we operate and account for our work.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-raf-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {[
                {
                  title: "Who We Are",
                  content:
                    "Re-Green Africa Foundation is a youth-led environmental organisation registered in Uganda, operating in Ntungamo District and surrounding communities. We are governed by a board of directors and led by a passionate team of young environmentalists.",
                },
                {
                  title: "How We Are Funded",
                  content:
                    "RAF is funded through individual donations, organisational grants, and partnership contributions. We are committed to responsible financial stewardship and directing the majority of our resources towards programme delivery.",
                },
                {
                  title: "How We Make Decisions",
                  content:
                    "Programme decisions are made collaboratively, involving community members, youth participants, and partner organisations. Strategic decisions are the responsibility of our board and leadership team.",
                },
                {
                  title: "How We Measure Impact",
                  content:
                    "We track key indicators including trees planted, communities reached, youth trained, and schools engaged. We regularly review our approaches and report on outcomes to our partners and supporters.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-8 shadow-sm"
                >
                  <h2 className="text-xl font-heading font-bold text-raf-forest mb-3">
                    {item.title}
                  </h2>
                  <p className="text-raf-charcoal/70 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-raf-forest text-white rounded-3xl p-10 text-center">
              <h2 className="text-2xl font-heading font-bold mb-4">
                Questions about our work?
              </h2>
              <p className="text-raf-cream/80 mb-6 max-w-xl mx-auto">
                We welcome questions from supporters, partners, and the public
                about how we operate and use resources. Reach out to us
                directly.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-raf-terracotta hover:bg-raf-terracotta/90 text-white font-medium transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
