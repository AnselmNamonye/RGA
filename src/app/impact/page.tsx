import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, TreePine, Users, School } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Impact | Re-Green Africa Foundation",
  description:
    "See the tangible impact of Re-Green Africa Foundation's work across communities, schools, and ecosystems in Uganda.",
};

const stats = [
  { number: "500+", label: "Trees planted", icon: TreePine },
  { number: "20+", label: "Communities reached", icon: Users },
  { number: "10+", label: "Schools engaged", icon: School },
  { number: "5+", label: "Districts active", icon: MapPin },
];

const projects = [
  {
    title: "Ntungamo Green Schools Initiative",
    location: "Ntungamo District, Uganda",
    description:
      "Engaging students and teachers through MDD, establishing school nurseries, and integrating environmental education into extracurricular activities across primary and secondary schools.",
    status: "Ongoing",
    href: "/impact/projects/ntungamo-green-schools",
  },
  {
    title: "Community Restoration Drive",
    location: "Ntungamo District, Uganda",
    description:
      "A community-wide tree planting and land rehabilitation initiative engaging households, local leaders, and youth groups to restore degraded landscapes.",
    status: "Ongoing",
    href: "/impact/projects",
  },
  {
    title: "Climate Culture Awareness Campaign",
    location: "Ntungamo District, Uganda",
    description:
      "A series of Music, Dance, and Drama performances delivered across communities and schools to raise climate awareness and inspire behaviour change.",
    status: "Completed",
    href: "/impact/projects",
  },
];

export default function ImpactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-raf-forest text-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="text-raf-gold text-sm font-bold tracking-widest uppercase mb-4">
              Our Impact
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-6">
              Measuring what<br />
              <span className="text-raf-terracotta">matters most.</span>
            </h1>
            <p className="text-raf-cream/80 text-xl leading-relaxed max-w-2xl">
              Every tree planted, every community reached, every young person
              empowered — these are the measures of our success.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-raf-charcoal border-b-4 border-raf-terracotta">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center text-white">
                <stat.icon className="h-8 w-8 text-raf-gold mx-auto mb-3" />
                <p className="text-4xl md:text-5xl font-heading font-bold text-raf-gold mb-2">
                  {stat.number}
                </p>
                <p className="text-raf-cream/70 text-sm font-medium uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-raf-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-raf-forest mb-5">
              How We Create Change
            </h2>
            <p className="text-raf-charcoal/70 text-lg leading-relaxed">
              RAF takes an integrated approach — combining ecological action
              with education, cultural expression, and community mobilisation
              to create change that lasts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Community Entry",
                text: "We start by engaging communities, building trust, and understanding local environmental challenges and priorities.",
              },
              {
                step: "02",
                title: "Programme Design",
                text: "Together with community members and schools, we co-design activities that are contextually relevant and practically achievable.",
              },
              {
                step: "03",
                title: "Sustained Action",
                text: "We support implementation over time — monitoring progress, adapting approaches, and celebrating milestones with communities.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <span className="font-heading font-bold text-5xl text-raf-terracotta/20 block mb-4">
                  {item.step}
                </span>
                <h3 className="text-xl font-heading font-bold text-raf-forest mb-3">
                  {item.title}
                </h3>
                <p className="text-raf-charcoal/70 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-raf-forest">
              Featured Projects
            </h2>
            <Link
              href="/impact/projects"
              className="text-raf-terracotta font-semibold flex items-center gap-2 hover:gap-3 transition-all"
            >
              View all projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="space-y-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-raf-cream rounded-2xl p-8 md:p-10 border border-raf-charcoal/5 hover:border-raf-terracotta/30 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <span
                      className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${
                        project.status === "Ongoing"
                          ? "bg-raf-forest/10 text-raf-forest"
                          : "bg-raf-gold/20 text-raf-charcoal"
                      }`}
                    >
                      {project.status}
                    </span>
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-raf-forest">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-raf-olive text-sm font-medium shrink-0">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </div>
                </div>
                <p className="text-raf-charcoal/70 leading-relaxed mb-6">
                  {project.description}
                </p>
                <Link
                  href={project.href}
                  className="inline-flex items-center gap-2 text-raf-terracotta font-semibold hover:gap-3 transition-all text-sm"
                >
                  Read more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories CTA */}
      <section className="py-20 bg-raf-forest text-white text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-5">
            Read the stories behind the numbers
          </h2>
          <p className="text-raf-cream/80 text-lg mb-8">
            Impact is more than statistics. Explore the real stories of
            communities, schools, and young people transforming their
            environments.
          </p>
          <Link
            href="/resources/stories"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-raf-terracotta hover:bg-raf-terracotta/90 text-white font-medium transition-colors"
          >
            Read Our Stories
          </Link>
        </div>
      </section>
    </>
  );
}
