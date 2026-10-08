import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects | Re-Green Africa Foundation",
  description:
    "Browse all projects by Re-Green Africa Foundation across communities and schools in Uganda.",
};

const projects = [
  {
    slug: "ntungamo-green-schools",
    title: "Ntungamo Green Schools Initiative",
    location: "Ntungamo District, Uganda",
    category: "Youth & Schools",
    status: "Ongoing",
    summary:
      "Engaging students and teachers through MDD, establishing school nurseries, and integrating environmental education into extracurricular activities.",
  },
  {
    slug: "community-restoration",
    title: "Community Restoration Drive",
    location: "Ntungamo District, Uganda",
    category: "Ecological Restoration",
    status: "Ongoing",
    summary:
      "A community-wide tree planting and land rehabilitation initiative engaging households, local leaders, and youth groups.",
  },
  {
    slug: "climate-culture-campaign",
    title: "Climate Culture Awareness Campaign",
    location: "Ntungamo District, Uganda",
    category: "Climate Culture",
    status: "Completed",
    summary:
      "A series of Music, Dance, and Drama performances delivered across communities and schools to raise climate awareness.",
  },
  {
    slug: "waste-management-pilot",
    title: "Circular Communities Pilot",
    location: "Ntungamo Town, Uganda",
    category: "Circular Communities",
    status: "Completed",
    summary:
      "A pilot waste sorting and community clean-up programme targeting households and local markets.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-raf-forest text-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="text-raf-gold text-sm font-bold tracking-widest uppercase mb-4">
              Projects
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-6">
              Our Projects
            </h1>
            <p className="text-raf-cream/80 text-xl leading-relaxed">
              Explore all of RAF&apos;s ongoing and completed projects across
              communities, schools, and ecosystems.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-raf-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.slug}
                className="bg-white rounded-2xl p-8 shadow-sm border border-raf-charcoal/5 hover:border-raf-terracotta/30 transition-colors flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-raf-terracotta uppercase tracking-wide bg-raf-terracotta/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${
                      project.status === "Ongoing"
                        ? "bg-raf-forest/10 text-raf-forest"
                        : "bg-raf-gold/20 text-raf-charcoal"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <h2 className="text-xl font-heading font-bold text-raf-forest mb-2">
                  {project.title}
                </h2>
                <div className="flex items-center gap-2 text-raf-olive text-sm mb-4">
                  <MapPin className="h-4 w-4" />
                  {project.location}
                </div>
                <p className="text-raf-charcoal/70 leading-relaxed flex-grow mb-6">
                  {project.summary}
                </p>
                <Link
                  href={`/impact/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-raf-terracotta font-semibold hover:gap-3 transition-all text-sm"
                >
                  View project <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
