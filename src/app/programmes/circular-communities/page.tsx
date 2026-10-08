import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Recycle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Circular Communities | Re-Green Africa Foundation",
  description:
    "RAF's Circular Communities programme — promoting solid waste management, waste sorting, and community-level environmental solutions.",
};

export default function CircularCommunitiesPage() {
  return (
    <>
      <section className="bg-raf-charcoal text-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <Link
            href="/programmes"
            className="inline-flex items-center gap-2 text-raf-cream/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Programmes
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-14 w-14 rounded-full bg-white/10 flex items-center justify-center">
              <Recycle className="h-7 w-7 text-raf-gold" />
            </div>
            <span className="text-raf-gold text-sm font-bold tracking-widest uppercase">
              Programme 05
            </span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
              Circular Communities
            </h1>
            <p className="text-raf-cream/80 text-xl leading-relaxed">
              Rethinking waste, rebuilding communities — through practical
              waste management, community clean-ups, and environmental
              responsibility.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-raf-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-bold text-raf-forest mb-4">
                  About This Programme
                </h2>
                <div className="space-y-4 text-raf-charcoal/80 leading-relaxed text-lg">
                  <p>
                    Inadequate solid waste management is one of the most
                    visible and immediate environmental challenges facing
                    communities across Uganda. Plastic waste, unmanaged
                    dumpsites, and poor disposal practices create health
                    hazards and degrade the environment.
                  </p>
                  <p>
                    RAF&apos;s Circular Communities programme works with households,
                    market vendors, schools, and community groups to introduce
                    practical, community-level waste management solutions that
                    reduce pollution and build cleaner, healthier environments.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-raf-forest mb-4">
                  What We Do
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "Waste Sorting & Segregation Training",
                      desc: "Practical training for households and community groups on how to sort, segregate, and manage different types of waste at source.",
                    },
                    {
                      title: "Community Clean-Up Campaigns",
                      desc: "Organised clean-up drives targeting markets, roadsides, water bodies, and public spaces across Ntungamo communities.",
                    },
                    {
                      title: "Solid Waste Management Education",
                      desc: "Educational materials and workshops raising awareness of waste management issues and practical solutions for households and businesses.",
                    },
                    {
                      title: "Plastic-Free Initiatives",
                      desc: "Community-level campaigns promoting alternatives to single-use plastics and encouraging responsible plastic disposal.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-white rounded-2xl p-6 shadow-sm border border-raf-charcoal/5"
                    >
                      <h3 className="font-heading font-bold text-raf-forest mb-2">
                        {item.title}
                      </h3>
                      <p className="text-raf-charcoal/70">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-raf-forest text-white rounded-2xl p-6">
                <h3 className="font-heading font-bold mb-4 text-raf-gold">
                  Key Focus Areas
                </h3>
                <ul className="space-y-3">
                  {[
                    "Solid waste management",
                    "Waste sorting training",
                    "Community clean-up campaigns",
                    "Plastic pollution reduction",
                    "Waste awareness education",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-raf-cream/80 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-raf-terracotta mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-heading font-bold text-raf-forest mb-3">
                  Get Involved
                </h3>
                <p className="text-raf-charcoal/70 text-sm mb-4">
                  Join a community clean-up, support waste management training,
                  or partner with RAF on circular economy initiatives.
                </p>
                <Link
                  href="/get-involved"
                  className="inline-flex items-center gap-2 text-raf-terracotta font-semibold text-sm hover:gap-3 transition-all"
                >
                  Get Involved <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
