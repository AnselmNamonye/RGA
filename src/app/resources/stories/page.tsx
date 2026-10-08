import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Stories | Re-Green Africa Foundation",
  description:
    "Read first-hand stories of environmental change from the communities and young people RAF works with.",
};

const stories = [
  {
    title: "How a school nursery changed one community's relationship with trees",
    category: "Youth & Schools",
    summary:
      "Students at a primary school in Ntungamo District established a tree nursery as part of RAF's Green Schools programme — and sparked a community-wide conversation about deforestation.",
    date: "2025",
  },
  {
    title: "When drama meets climate change: an MDD performance that moved a community",
    category: "Climate Culture",
    summary:
      "A community in Ntungamo District gathered for what they thought was an ordinary evening event. What followed was a Music, Dance, and Drama performance that left audiences reflecting on their own environmental habits.",
    date: "2025",
  },
  {
    title: "Young people leading the way: RAF's first youth environmental champions",
    category: "Youth & Schools",
    summary:
      "Meet the young environmental champions who are taking what they learned in RAF's programmes back to their homes and communities.",
    date: "2024",
  },
];

export default function StoriesPage() {
  return (
    <>
      <section className="bg-raf-forest text-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-raf-cream/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Resources
          </Link>
          <div className="max-w-3xl">
            <p className="text-raf-gold text-sm font-bold tracking-widest uppercase mb-4">
              Stories
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
              Stories of change.
            </h1>
            <p className="text-raf-cream/80 text-xl leading-relaxed">
              Real stories from the communities, schools, and young people
              who are living and leading environmental change.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-raf-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-8 max-w-3xl mx-auto">
            {stories.map((story) => (
              <article
                key={story.title}
                className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-raf-charcoal/5 hover:border-raf-terracotta/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-raf-terracotta uppercase tracking-wide bg-raf-terracotta/10 px-3 py-1 rounded-full">
                    {story.category}
                  </span>
                  <span className="text-sm text-raf-charcoal/50">{story.date}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-heading font-bold text-raf-forest mb-4">
                  {story.title}
                </h2>
                <p className="text-raf-charcoal/70 leading-relaxed mb-6">
                  {story.summary}
                </p>
                <button
                  className="inline-flex items-center gap-2 text-raf-terracotta font-semibold text-sm"
                  aria-label="Read full story (coming soon)"
                >
                  Read full story <ArrowRight className="h-4 w-4" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
