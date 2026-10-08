import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

const projects: Record<
  string,
  {
    title: string;
    location: string;
    category: string;
    status: string;
    description: string;
    challenge: string;
    approach: string;
    outcomes: string[];
  }
> = {
  "ntungamo-green-schools": {
    title: "Ntungamo Green Schools Initiative",
    location: "Ntungamo District, Uganda",
    category: "Youth & Schools",
    status: "Ongoing",
    description:
      "The Ntungamo Green Schools Initiative is RAF's flagship youth-focused environmental programme, engaging primary and secondary schools across Ntungamo District in practical environmental action.",
    challenge:
      "Deforestation and lack of environmental awareness among school-going youth in local communities. Many young people lacked access to environmental education and had no structured ways to take environmental action.",
    approach:
      "RAF engaged students and teachers through Music, Dance, and Drama (MDD) performances, established school tree nurseries, integrated environmental education into extracurricular activities, and supported the formation of environmental clubs.",
    outcomes: [
      "Environmental clubs established in multiple schools",
      "Tree nurseries set up in participating schools",
      "Hundreds of students reached with environmental education",
      "MDD performances delivered to student and community audiences",
      "Teachers trained in environmental education facilitation",
    ],
  },
  "community-restoration": {
    title: "Community Restoration Drive",
    location: "Ntungamo District, Uganda",
    category: "Ecological Restoration",
    status: "Ongoing",
    description:
      "A community-wide ecological restoration initiative bringing together households, local leaders, and youth groups to restore degraded landscapes across Ntungamo District.",
    challenge:
      "Significant land degradation, soil erosion, and deforestation affecting agricultural productivity and ecosystem health in communities across Ntungamo District.",
    approach:
      "RAF organised and facilitated community tree-planting drives, provided seedlings from community nurseries, engaged local leaders and households in ecological restoration planning, and built community capacity for ongoing environmental stewardship.",
    outcomes: [
      "Hundreds of trees planted across community lands",
      "Multiple households engaged in restoration activities",
      "Community nurseries established",
      "Local leaders engaged as environmental champions",
      "Ongoing monitoring and follow-up established",
    ],
  },
  "climate-culture-campaign": {
    title: "Climate Culture Awareness Campaign",
    location: "Ntungamo District, Uganda",
    category: "Climate Culture",
    status: "Completed",
    description:
      "A culturally-driven climate awareness campaign using Music, Dance, and Drama (MDD) to translate complex environmental issues into accessible, compelling performances across communities and schools.",
    challenge:
      "Low awareness of climate change impacts among community members, particularly in rural areas, and limited access to conventional environmental education channels.",
    approach:
      "RAF developed and delivered a series of MDD performances addressing key environmental themes including deforestation, climate change, water conservation, and waste management, performed at community gatherings, schools, and local events.",
    outcomes: [
      "Multiple communities reached through live performances",
      "Thousands of audience members engaged",
      "Environmental messages embedded in culturally relevant formats",
      "Local performers trained and engaged",
      "Significant positive community response and behaviour change reported",
    ],
  },
  "waste-management-pilot": {
    title: "Circular Communities Pilot",
    location: "Ntungamo Town, Uganda",
    category: "Circular Communities",
    status: "Completed",
    description:
      "A pilot programme introducing community-level waste sorting, management, and clean-up practices in Ntungamo Town, targeting households and local market areas.",
    challenge:
      "Inadequate solid waste management practices leading to environmental pollution, health hazards, and degraded living environments in community and market areas.",
    approach:
      "RAF conducted waste sorting training sessions for households and market vendors, organised community clean-up campaigns, distributed educational materials on waste management, and worked with local authorities to improve waste disposal systems.",
    outcomes: [
      "Households trained in waste sorting and segregation",
      "Community clean-up campaigns completed",
      "Market areas cleaned and waste management awareness raised",
      "Partnerships with local authorities established",
      "Model for replication in other communities developed",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Re-Green Africa Foundation`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Params) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="bg-raf-forest text-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <Link
            href="/impact/projects"
            className="inline-flex items-center gap-2 text-raf-cream/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Projects
          </Link>
          <div className="flex items-center gap-2 text-raf-olive mb-4">
            <MapPin className="h-4 w-4 text-raf-gold" />
            <span className="text-raf-cream/70 text-sm">{project.location}</span>
          </div>
          <span className="inline-block text-xs font-bold text-raf-gold bg-raf-gold/10 px-3 py-1 rounded-full mb-4">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight max-w-3xl">
            {project.title}
          </h1>
        </div>
      </section>

      <section className="py-20 bg-raf-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <p className="text-raf-charcoal/80 text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-raf-forest mb-4">
                  The Challenge
                </h2>
                <p className="text-raf-charcoal/70 leading-relaxed text-lg">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-raf-forest mb-4">
                  What RAF Did
                </h2>
                <p className="text-raf-charcoal/70 leading-relaxed text-lg">
                  {project.approach}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-raf-forest mb-4">
                  Outcomes
                </h2>
                <ul className="space-y-3">
                  {project.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex items-start gap-3 text-raf-charcoal/70"
                    >
                      <span className="h-2 w-2 rounded-full bg-raf-terracotta mt-2 shrink-0" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-heading font-bold text-raf-forest mb-4">
                  Project Details
                </h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-xs font-bold text-raf-charcoal/50 uppercase tracking-wide">
                      Category
                    </dt>
                    <dd className="text-raf-charcoal mt-1">{project.category}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold text-raf-charcoal/50 uppercase tracking-wide">
                      Location
                    </dt>
                    <dd className="text-raf-charcoal mt-1">{project.location}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold text-raf-charcoal/50 uppercase tracking-wide">
                      Status
                    </dt>
                    <dd className="mt-1">
                      <span
                        className={`text-sm font-bold px-3 py-1 rounded-full ${
                          project.status === "Ongoing"
                            ? "bg-raf-forest/10 text-raf-forest"
                            : "bg-raf-gold/20 text-raf-charcoal"
                        }`}
                      >
                        {project.status}
                      </span>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="bg-raf-forest text-white rounded-2xl p-6">
                <h3 className="font-heading font-bold mb-3">
                  Support this work
                </h3>
                <p className="text-raf-cream/80 text-sm mb-4">
                  Help us continue and expand projects like this one.
                </p>
                <Link
                  href="/get-involved"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-raf-gold hover:gap-3 transition-all"
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
