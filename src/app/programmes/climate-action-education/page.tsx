import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Droplets, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Climate Action & Education | Re-Green Africa Foundation",
  description:
    "RAF's Climate Action & Education programme — raising awareness, delivering behaviour-change communication, and empowering communities to act on climate.",
};

export default function ClimateActionEducationPage() {
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
              <Droplets className="h-7 w-7 text-raf-gold" />
            </div>
            <span className="text-raf-gold text-sm font-bold tracking-widest uppercase">
              Programme 02
            </span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
              Climate Action &amp; Education
            </h1>
            <p className="text-raf-cream/80 text-xl leading-relaxed">
              Turning awareness into action — through climate education,
              community campaigns, and behaviour-change communication.
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
                    Knowledge alone doesn&apos;t change behaviour — but the right
                    knowledge, delivered in the right way, can. RAF&apos;s Climate
                    Action &amp; Education programme bridges the gap between climate
                    information and community action.
                  </p>
                  <p>
                    We work with communities, schools, and youth groups to
                    build genuine understanding of climate change and
                    environmental issues, and to equip people with practical
                    tools to make environmentally responsible choices.
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
                      title: "Climate Awareness Workshops",
                      desc: "Interactive workshops that help community members and students understand the causes, effects, and local impacts of climate change.",
                    },
                    {
                      title: "Community Campaigns",
                      desc: "Targeted environmental campaigns addressing specific issues such as deforestation, plastic pollution, and water conservation.",
                    },
                    {
                      title: "Behaviour-Change Communication",
                      desc: "Designing and delivering communication strategies that motivate meaningful, sustained changes in environmental behaviour.",
                    },
                    {
                      title: "Environmental Education in Schools",
                      desc: "Integrating climate and environmental education into school programmes through workshops, materials, and extracurricular activities.",
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
              <div className="bg-raf-terracotta text-white rounded-2xl p-6">
                <h3 className="font-heading font-bold mb-4">
                  Key Focus Areas
                </h3>
                <ul className="space-y-3">
                  {[
                    "Climate change awareness",
                    "Community environmental campaigns",
                    "School-based education",
                    "Behaviour-change communication",
                    "Environmental advocacy",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-white/80 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/60 mt-2 shrink-0" />
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
                  Volunteer as a facilitator, support our education materials,
                  or partner with RAF to bring climate education to more
                  communities.
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
