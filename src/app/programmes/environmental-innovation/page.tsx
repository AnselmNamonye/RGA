import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Lightbulb, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Environmental Innovation | Re-Green Africa Foundation",
  description:
    "RAF's Environmental Innovation programme — supporting youth-led ideas and innovations that reduce environmentally harmful practices.",
};

export default function EnvironmentalInnovationPage() {
  return (
    <>
      <section className="bg-raf-terracotta text-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <Link
            href="/programmes"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Programmes
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-14 w-14 rounded-full bg-white/10 flex items-center justify-center">
              <Lightbulb className="h-7 w-7 text-white" />
            </div>
            <span className="text-white/70 text-sm font-bold tracking-widest uppercase">
              Programme 06
            </span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
              Environmental Innovation
            </h1>
            <p className="text-white/80 text-xl leading-relaxed">
              Ideas that change the way we live — supporting locally-driven
              innovations and alternative approaches to environmental challenges.
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
                    Many of Uganda&apos;s most pressing environmental challenges
                    have practical, locally-developed solutions waiting to be
                    discovered. RAF&apos;s Environmental Innovation programme
                    creates space for young people and community members to
                    develop, test, and share ideas that reduce environmentally
                    harmful practices.
                  </p>
                  <p>
                    From sustainable agriculture techniques to clean cooking
                    alternatives, from eco-friendly construction materials to
                    green entrepreneurship — we champion innovation that is
                    accessible, affordable, and rooted in local context.
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
                      title: "Innovation Challenges & Workshops",
                      desc: "Facilitated events that invite young people to develop creative solutions to local environmental challenges, with mentorship and recognition for the best ideas.",
                    },
                    {
                      title: "Sustainable Livelihood Alternatives",
                      desc: "Supporting communities to identify and adopt sustainable livelihood practices that reduce pressure on natural resources.",
                    },
                    {
                      title: "Green Entrepreneurship Support",
                      desc: "Encouraging and supporting young entrepreneurs developing environmentally-friendly products, services, and business models.",
                    },
                    {
                      title: "Knowledge-Sharing & Networking",
                      desc: "Connecting innovators with each other, with mentors, and with organisations that can help scale effective environmental solutions.",
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
                    "Youth-led innovation",
                    "Sustainable livelihoods",
                    "Green entrepreneurship",
                    "Clean energy alternatives",
                    "Agroecology & food systems",
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
                  Have an Idea?
                </h3>
                <p className="text-raf-charcoal/70 text-sm mb-4">
                  Are you a young innovator with an environmental idea? RAF
                  would love to hear from you.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-raf-terracotta font-semibold text-sm hover:gap-3 transition-all"
                >
                  Get In Touch <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
