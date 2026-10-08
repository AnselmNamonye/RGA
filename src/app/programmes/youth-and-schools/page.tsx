import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, GraduationCap, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Youth & Schools | Re-Green Africa Foundation",
  description:
    "RAF's Youth & Schools programme — engaging young people and school communities in environmental learning and practical action.",
};

export default function YouthAndSchoolsPage() {
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
              <GraduationCap className="h-7 w-7 text-raf-gold" />
            </div>
            <span className="text-raf-gold text-sm font-bold tracking-widest uppercase">
              Programme 03
            </span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
              Youth &amp; Schools
            </h1>
            <p className="text-raf-cream/80 text-xl leading-relaxed">
              Empowering young environmental champions — through school
              programmes, youth leadership, and hands-on environmental action.
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
                    Young people are the most powerful agents of environmental
                    change — not just for the future, but right now. RAF&apos;s
                    Youth &amp; Schools programme places youth at the centre of
                    environmental action, equipping them with the knowledge,
                    skills, and motivation to lead change in their schools and
                    communities.
                  </p>
                  <p>
                    We partner with primary and secondary schools across
                    Ntungamo District to integrate environmental learning into
                    school life, support environmental clubs, and create
                    practical opportunities for students to take meaningful
                    action.
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
                      title: "Environmental Clubs",
                      desc: "We support the establishment and running of environmental clubs in schools, providing structure, activities, and mentorship for student environmental leaders.",
                    },
                    {
                      title: "Youth Leadership Training",
                      desc: "Training sessions that build young people's capacity to lead environmental initiatives in their schools and communities.",
                    },
                    {
                      title: "School Greening Activities",
                      desc: "Practical activities including school tree planting, litter clean-ups, school garden establishment, and composting projects.",
                    },
                    {
                      title: "Inter-School Competitions",
                      desc: "Environmental competitions and events that motivate students and celebrate youth-led environmental action.",
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
              <div className="bg-raf-olive text-white rounded-2xl p-6">
                <h3 className="font-heading font-bold mb-4">
                  Key Focus Areas
                </h3>
                <ul className="space-y-3">
                  {[
                    "School environmental clubs",
                    "Youth leadership development",
                    "School nursery programmes",
                    "Practical environmental action",
                    "Inter-school environmental events",
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
                  Partner With Us
                </h3>
                <p className="text-raf-charcoal/70 text-sm mb-4">
                  Is your school interested in joining RAF&apos;s Youth &amp; Schools
                  programme? Get in touch to explore how we can work together.
                </p>
                <Link
                  href="/get-involved/partner"
                  className="inline-flex items-center gap-2 text-raf-terracotta font-semibold text-sm hover:gap-3 transition-all"
                >
                  Explore Partnership <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
