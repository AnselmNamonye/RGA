import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Leaf, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Ecological Restoration | Re-Green Africa Foundation",
  description:
    "RAF's Ecological Restoration programme — tree planting, habitat rehabilitation, and community-based conservation in Uganda.",
};

export default function EcologicalRestorationPage() {
  return (
    <>
      <section className="bg-raf-forest text-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <Link
            href="/programmes"
            className="inline-flex items-center gap-2 text-raf-cream/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Programmes
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-14 w-14 rounded-full bg-white/10 flex items-center justify-center">
              <Leaf className="h-7 w-7 text-raf-gold" />
            </div>
            <span className="text-raf-gold text-sm font-bold tracking-widest uppercase">
              Programme 01
            </span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
              Ecological Restoration
            </h1>
            <p className="text-raf-cream/80 text-xl leading-relaxed">
              Restoring ecosystems, one tree at a time — through community
              tree planting, nursery establishment, and land rehabilitation.
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
                    Our Ecological Restoration programme addresses the growing
                    challenge of deforestation and land degradation across
                    Ntungamo District and surrounding communities. We work
                    directly with communities to restore degraded ecosystems
                    through practical, participatory action.
                  </p>
                  <p>
                    At the core of this programme is community ownership — we
                    believe that lasting ecological restoration can only happen
                    when the communities that depend on the land are genuinely
                    involved in its recovery.
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
                      title: "Community Tree Planting Drives",
                      desc: "We organise and facilitate mass tree planting events, bringing together households, schools, local leaders, and youth groups to restore degraded land.",
                    },
                    {
                      title: "School & Community Nurseries",
                      desc: "We establish tree nurseries in schools and community centres, ensuring a reliable supply of indigenous seedlings for restoration activities.",
                    },
                    {
                      title: "Degraded Land Rehabilitation",
                      desc: "We identify and prioritise highly degraded areas for targeted restoration, working with landowners and communities on rehabilitation planning.",
                    },
                    {
                      title: "Environmental Monitoring",
                      desc: "We track the survival and growth of planted trees, monitoring restoration progress and adapting our approach based on outcomes.",
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
                    "Tree planting & reforestation",
                    "School nursery establishment",
                    "Community land rehabilitation",
                    "Indigenous species promotion",
                    "Agroforestry support",
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
                  Join a tree planting drive, support a school nursery, or
                  partner with RAF to expand our restoration work.
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
