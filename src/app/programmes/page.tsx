import type { Metadata } from "next";
import Link from "next/link";
import {
  Leaf,
  Droplets,
  GraduationCap,
  Music,
  Recycle,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Programmes | Re-Green Africa Foundation",
  description:
    "Explore RAF's six core programmes: Ecological Restoration, Climate Action, Youth & Schools, Climate Culture, Circular Communities, and Environmental Innovation.",
};

const programmes = [
  {
    id: "01",
    title: "Ecological Restoration",
    tagline: "Restoring ecosystems, one tree at a time.",
    description:
      "Our Ecological Restoration programme focuses on tree planting, habitat rehabilitation, and community-based environmental conservation. We work directly with communities to identify degraded areas, establish nurseries, and lead collective restoration activities that deliver lasting ecological benefit.",
    activities: [
      "Community tree planting drives",
      "School nursery establishment",
      "Degraded land rehabilitation",
      "Environmental monitoring and reporting",
    ],
    icon: Leaf,
    href: "/programmes/ecological-restoration",
    color: "bg-raf-forest",
  },
  {
    id: "02",
    title: "Climate Action & Education",
    tagline: "Turning awareness into action.",
    description:
      "We deliver climate awareness workshops, environmental education sessions, and behaviour-change communication campaigns. Our approach equips community members and youth with the knowledge and tools to make environmentally responsible choices.",
    activities: [
      "Climate awareness workshops",
      "Community campaigns",
      "Behaviour-change communication",
      "Environmental education in schools",
    ],
    icon: Droplets,
    href: "/programmes/climate-action-education",
    color: "bg-raf-terracotta",
  },
  {
    id: "03",
    title: "Youth & Schools",
    tagline: "Empowering young environmental champions.",
    description:
      "RAF believes young people are the most powerful agents of environmental change. Through our Youth & Schools programme, we engage students and teachers in environmental learning, practical conservation activities, and youth-led environmental clubs.",
    activities: [
      "Environmental clubs in schools",
      "Youth leadership training",
      "School greening activities",
      "Inter-school environmental competitions",
    ],
    icon: GraduationCap,
    href: "/programmes/youth-and-schools",
    color: "bg-raf-olive",
  },
  {
    id: "04",
    title: "Climate Culture (MDD)",
    tagline: "When culture tells the story, people listen.",
    description:
      "Using Music, Dance, and Drama (MDD) alongside traditional storytelling, we translate complex environmental issues into powerful cultural performances. This programme makes climate action accessible, emotionally resonant, and genuinely transformative.",
    activities: [
      "MDD performances and festivals",
      "Environmental storytelling sessions",
      "Community drama productions",
      "Cultural climate awareness campaigns",
    ],
    icon: Music,
    href: "/programmes/climate-culture",
    color: "bg-raf-gold",
  },
  {
    id: "05",
    title: "Circular Communities",
    tagline: "Rethinking waste, rebuilding communities.",
    description:
      "Our Circular Communities programme promotes practical solid waste management, community-level waste sorting, and environmentally responsible disposal practices. We work with households and community groups to reduce pollution and build cleaner environments.",
    activities: [
      "Waste sorting and segregation training",
      "Community clean-up campaigns",
      "Solid waste management education",
      "Plastic-free community initiatives",
    ],
    icon: Recycle,
    href: "/programmes/circular-communities",
    color: "bg-raf-charcoal",
  },
  {
    id: "06",
    title: "Environmental Innovation",
    tagline: "Ideas that change the way we live.",
    description:
      "We support young people and community members in developing practical innovations and alternative approaches that reduce environmentally harmful practices. From sustainable agriculture to clean energy ideas, we champion locally-driven environmental solutions.",
    activities: [
      "Innovation challenges and workshops",
      "Sustainable livelihood alternatives",
      "Green entrepreneurship support",
      "Knowledge-sharing and networking",
    ],
    icon: Lightbulb,
    href: "/programmes/environmental-innovation",
    color: "bg-raf-terracotta",
  },
];

export default function ProgrammesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-raf-forest text-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="text-raf-gold text-sm font-bold tracking-widest uppercase mb-4">
              What We Do
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-6">
              Six programmes.<br />
              <span className="text-raf-terracotta">One mission.</span>
            </h1>
            <p className="text-raf-cream/80 text-xl leading-relaxed max-w-2xl">
              RAF delivers integrated environmental programmes that span
              ecological restoration, education, youth empowerment, cultural
              expression, waste management, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Programmes List */}
      <section className="py-20 bg-raf-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-12">
            {programmes.map((prog, index) => (
              <div
                key={prog.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden bg-white shadow-sm border border-raf-charcoal/5 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Colour Banner */}
                <div
                  className={`lg:col-span-2 ${prog.color} flex flex-col items-center justify-center py-10 px-6 text-white min-h-[160px] lg:min-h-0`}
                >
                  <prog.icon className="h-12 w-12 mb-3 opacity-90" />
                  <span className="font-heading font-bold text-4xl opacity-30">
                    {prog.id}
                  </span>
                </div>

                {/* Content */}
                <div className="lg:col-span-10 p-8 md:p-10">
                  <p className="text-sm font-bold text-raf-terracotta tracking-wide uppercase mb-2">
                    {prog.tagline}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-raf-forest mb-4">
                    {prog.title}
                  </h2>
                  <p className="text-raf-charcoal/70 text-lg leading-relaxed mb-6">
                    {prog.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="font-semibold text-raf-charcoal mb-3">
                      Key activities:
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {prog.activities.map((activity) => (
                        <li
                          key={activity}
                          className="flex items-center gap-2 text-raf-charcoal/70"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-raf-terracotta shrink-0" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={prog.href}
                    className="inline-flex items-center gap-2 text-raf-terracotta font-semibold hover:gap-3 transition-all"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-raf-charcoal text-white text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-5">
            Want to support our programmes?
          </h2>
          <p className="text-raf-cream/80 text-lg mb-8">
            Partner with RAF, volunteer your time, or help fund the work that
            is making a real difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-involved/partner"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-raf-terracotta hover:bg-raf-terracotta/90 text-white font-medium transition-colors"
            >
              Partner With Us
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 font-medium transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
