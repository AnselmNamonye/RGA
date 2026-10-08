import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Music, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Climate Culture (MDD) | Re-Green Africa Foundation",
  description:
    "RAF's Climate Culture programme — using Music, Dance, and Drama (MDD) and storytelling to raise climate awareness and inspire behaviour change.",
};

export default function ClimateCulturePage() {
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
              <Music className="h-7 w-7 text-raf-gold" />
            </div>
            <span className="text-raf-gold text-sm font-bold tracking-widest uppercase">
              Programme 04
            </span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
              Climate Culture (MDD)
            </h1>
            <p className="text-raf-cream/80 text-xl leading-relaxed">
              When culture tells the story, people listen — using Music, Dance,
              and Drama to make environmental issues relatable and inspire
              genuine behaviour change.
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
                    Climate change is a complex, often overwhelming topic. But
                    when communicated through the power of music, dance, drama,
                    and storytelling, environmental messages become emotionally
                    resonant, accessible, and genuinely transformative.
                  </p>
                  <p>
                    RAF&apos;s Climate Culture programme harnesses Uganda&apos;s rich
                    cultural traditions to make environmental communication
                    more effective. We develop and deliver MDD performances,
                    storytelling events, and cultural campaigns that don&apos;t
                    just inform — they move people to act.
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
                      title: "MDD Performances",
                      desc: "Original music, dance, and drama productions performed at community events, schools, and public gatherings to communicate environmental themes.",
                    },
                    {
                      title: "Environmental Storytelling",
                      desc: "Harnessing the tradition of storytelling to convey environmental messages in culturally relevant, memorable ways.",
                    },
                    {
                      title: "Community Drama Productions",
                      desc: "Community-developed drama pieces that address locally relevant environmental issues, performed by and for communities.",
                    },
                    {
                      title: "Cultural Climate Campaigns",
                      desc: "Integrated cultural campaigns that combine performance, visual art, and community engagement to drive behaviour change around specific environmental issues.",
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
              <div className="bg-raf-charcoal text-white rounded-2xl p-6">
                <h3 className="font-heading font-bold mb-4 text-raf-gold">
                  Key Focus Areas
                </h3>
                <ul className="space-y-3">
                  {[
                    "Music, Dance & Drama (MDD)",
                    "Environmental storytelling",
                    "Community cultural campaigns",
                    "Youth performer training",
                    "Behaviour-change through culture",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-raf-cream/80 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-raf-gold mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-heading font-bold text-raf-forest mb-3">
                  Join Our Performers
                </h3>
                <p className="text-raf-charcoal/70 text-sm mb-4">
                  Do you have skills in music, dance, drama, or storytelling?
                  Volunteer your talents with RAF&apos;s Climate Culture programme.
                </p>
                <Link
                  href="/get-involved/volunteer"
                  className="inline-flex items-center gap-2 text-raf-terracotta font-semibold text-sm hover:gap-3 transition-all"
                >
                  Volunteer <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
