import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Users, Handshake, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Get Involved | Re-Green Africa Foundation",
  description:
    "Join the RAF movement. Volunteer, partner, or support our environmental work in Uganda.",
};

const ways = [
  {
    icon: Users,
    title: "Volunteer",
    description:
      "Bring your energy, skills, and passion to our programmes. Whether you're a student, professional, or community member — there's a role for you.",
    cta: "Become a Volunteer",
    href: "/get-involved/volunteer",
    color: "bg-raf-forest",
  },
  {
    icon: Handshake,
    title: "Partner With Us",
    description:
      "Organisations, schools, businesses, and government bodies can partner with RAF to co-design programmes and amplify environmental impact.",
    cta: "Explore Partnership",
    href: "/get-involved/partner",
    color: "bg-raf-terracotta",
  },
  {
    icon: Heart,
    title: "Support Our Work",
    description:
      "Financial contributions — however small — help us plant more trees, reach more communities, and train more young environmental champions.",
    cta: "Support RAF",
    href: "/get-involved/support",
    color: "bg-raf-gold",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-raf-forest text-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="text-raf-gold text-sm font-bold tracking-widest uppercase mb-4">
              Get Involved
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-6">
              Join the movement<br />
              <span className="text-raf-terracotta">for a greener Africa.</span>
            </h1>
            <p className="text-raf-cream/80 text-xl leading-relaxed max-w-2xl">
              There are many ways to be part of the work RAF does. Whether
              you volunteer, partner, or contribute — your involvement
              makes a real difference.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-20 bg-raf-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ways.map((way) => (
              <div
                key={way.title}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div
                  className={`${way.color} text-white p-8 flex items-center gap-4`}
                >
                  <way.icon className="h-10 w-10 opacity-90" />
                  <h2 className="text-2xl font-heading font-bold">{way.title}</h2>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-raf-charcoal/70 leading-relaxed text-lg flex-grow mb-8">
                    {way.description}
                  </p>
                  <Link
                    href={way.href}
                    className="inline-flex items-center gap-2 text-raf-terracotta font-semibold hover:gap-3 transition-all"
                  >
                    {way.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-raf-forest mb-6">
              Why get involved with RAF?
            </h2>
            <p className="text-raf-charcoal/70 text-lg leading-relaxed mb-10">
              We are a community of passionate individuals working toward a
              shared vision of a greener, more resilient Africa. When you join
              RAF, you become part of a movement that is already making a
              tangible difference on the ground.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              {[
                {
                  title: "Real Impact",
                  text: "Your contribution directly supports trees planted, communities reached, and youth empowered.",
                },
                {
                  title: "Community",
                  text: "Join a network of like-minded environmentalists across Uganda and beyond.",
                },
                {
                  title: "Youth-Led",
                  text: "Work alongside young people who are leading environmental change from the front.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-raf-cream rounded-2xl p-6">
                  <h3 className="font-heading font-bold text-raf-forest text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-raf-charcoal/70 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-raf-terracotta text-white text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-5">
            Not sure where to start?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Reach out to us directly and we&apos;ll help you find the best way
            to contribute.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-raf-terracotta hover:bg-raf-cream font-semibold transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
