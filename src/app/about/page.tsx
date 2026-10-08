import type { Metadata } from "next";
import Link from "next/link";
import { Leaf, Users, Target, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Re-Green Africa Foundation",
  description:
    "Learn about Re-Green Africa Foundation — a youth-led environmental organisation working to restore nature, empower communities and inspire lasting behaviour change.",
};

const values = [
  {
    icon: Leaf,
    title: "Environmental Stewardship",
    description:
      "We believe every individual and community has a responsibility to protect and restore the natural environment for present and future generations.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "Lasting change happens when communities lead. We work alongside local people — not above them — to co-create solutions that stick.",
  },
  {
    icon: Target,
    title: "Youth Power",
    description:
      "Young people are not just the future — they are the present. We place youth at the centre of every programme we design and deliver.",
  },
  {
    icon: Heart,
    title: "Culture & Creativity",
    description:
      "We harness the power of music, dance, drama, and storytelling to make environmental action accessible, joyful, and deeply human.",
  },
];

const team = [
  {
    name: "Executive Director",
    role: "Leadership",
    bio: "Passionate about youth empowerment and community-based environmental conservation across Uganda.",
  },
  {
    name: "Programmes Lead",
    role: "Programmes",
    bio: "Coordinates our ecological restoration, education, and climate culture initiatives across communities.",
  },
  {
    name: "Community Engagement Officer",
    role: "Community",
    bio: "Builds and maintains partnerships with community leaders, schools, and local stakeholders.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-raf-forest text-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="text-raf-gold text-sm font-bold tracking-widest uppercase mb-4">
              About Us
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-6">
              Youth-led.<br />
              Community-rooted.<br />
              <span className="text-raf-terracotta">Nature-focused.</span>
            </h1>
            <p className="text-raf-cream/80 text-xl leading-relaxed">
              Re-Green Africa Foundation (RAF) is a youth-driven environmental
              organisation based in Ntungamo District, Uganda. We work with
              communities to advance environmental conservation, climate
              awareness, and sustainable behaviour change.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-raf-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-raf-forest mb-6">
                Our Story
              </h2>
              <div className="space-y-5 text-raf-charcoal/80 text-lg leading-relaxed">
                <p>
                  Re-Green Africa Foundation was founded by young people who
                  witnessed first-hand the devastating effects of deforestation,
                  land degradation, and climate change on their communities in
                  Ntungamo District, Uganda.
                </p>
                <p>
                  Frustrated by the gap between awareness and action, our
                  founders set out to build an organisation that would go
                  beyond talking about environmental problems — and actually do
                  something about them alongside the communities most affected.
                </p>
                <p>
                  Today, RAF brings together passionate young people, community
                  members, schools, and local partners around a shared
                  commitment to restoring nature and building more resilient,
                  environmentally-conscious communities.
                </p>
              </div>
            </div>
            <div className="bg-raf-sand rounded-3xl h-80 lg:h-[500px] flex items-center justify-center">
              <span className="text-raf-charcoal/30 font-medium tracking-widest uppercase text-center px-8">
                Team / Organisation Photo
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-raf-forest text-white rounded-3xl p-10">
              <h3 className="text-2xl font-heading font-bold mb-4 text-raf-gold">
                Our Mission
              </h3>
              <p className="text-raf-cream/85 text-lg leading-relaxed">
                To engage and empower youth and communities in environmental
                conservation, climate action, and sustainable behaviour change
                through education, restoration, and cultural expression.
              </p>
            </div>
            <div className="bg-raf-terracotta text-white rounded-3xl p-10">
              <h3 className="text-2xl font-heading font-bold mb-4 text-white">
                Our Vision
              </h3>
              <p className="text-white/85 text-lg leading-relaxed">
                A Uganda where communities live in harmony with their natural
                environment — where young people lead environmental restoration
                and inspire lasting behaviour change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-raf-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-raf-forest mb-4">
              What We Stand For
            </h2>
            <p className="text-raf-charcoal/70 text-lg">
              Our values shape every programme we design, every partnership we
              build, and every community we serve.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-12 w-12 rounded-xl bg-raf-sand/50 flex items-center justify-center text-raf-forest mb-5">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading font-bold text-xl text-raf-forest mb-3">
                  {value.title}
                </h3>
                <p className="text-raf-charcoal/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-raf-forest mb-4">
              Our Team
            </h2>
            <p className="text-raf-charcoal/70 text-lg">
              A dedicated group of young environmentalists committed to making
              a tangible difference.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <div
                key={member.name}
                className="text-center bg-raf-cream rounded-2xl p-8"
              >
                <div className="h-20 w-20 rounded-full bg-raf-sand mx-auto mb-4 flex items-center justify-center">
                  <span className="text-raf-charcoal/40 text-xs">Photo</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-raf-forest mb-1">
                  {member.name}
                </h3>
                <p className="text-raf-terracotta text-sm font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-raf-charcoal/70 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-raf-forest text-white text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-5">
            Be part of the story
          </h2>
          <p className="text-raf-cream/80 text-lg mb-8">
            Whether you volunteer, partner, or simply spread the word — every
            action matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-involved"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-raf-terracotta hover:bg-raf-terracotta/90 text-white font-medium transition-colors"
            >
              Get Involved
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
