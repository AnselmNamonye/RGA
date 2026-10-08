import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accessibility | Re-Green Africa Foundation",
  description:
    "Re-Green Africa Foundation's accessibility statement and our commitment to inclusive digital experiences.",
};

export default function AccessibilityPage() {
  return (
    <>
      <section className="bg-raf-forest text-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="text-raf-gold text-sm font-bold tracking-widest uppercase mb-4">
              Accessibility
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
              Accessibility Statement
            </h1>
            <p className="text-raf-cream/80 text-lg">
              Our commitment to an inclusive digital experience.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-raf-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-10 text-raf-charcoal/80 leading-relaxed">
            <div>
              <h2 className="text-2xl font-heading font-bold text-raf-forest mb-4">
                Our Commitment
              </h2>
              <p>
                Re-Green Africa Foundation is committed to ensuring our website
                is accessible to everyone, including people with disabilities.
                We strive to meet or exceed the Web Content Accessibility
                Guidelines (WCAG) 2.1 Level AA standards.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-raf-forest mb-4">
                Accessibility Features
              </h2>
              <ul className="space-y-2 list-none pl-0">
                {[
                  "Semantic HTML structure to support screen readers",
                  "Sufficient colour contrast ratios for readability",
                  "Keyboard navigation support throughout the site",
                  "Descriptive alt text for images",
                  "Clear and consistent navigation",
                  "Resizable text that does not break page layout",
                  "ARIA labels on interactive elements",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-raf-terracotta mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-raf-forest mb-4">
                Known Limitations
              </h2>
              <p>
                While we aim for full accessibility, some areas of our website
                may not yet meet all standards. We are continuously working to
                improve the experience for all users. If you encounter any
                accessibility barriers, please let us know so we can address
                them promptly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-raf-forest mb-4">
                Feedback & Contact
              </h2>
              <p>
                If you experience any difficulty accessing content on our
                website or have suggestions for improvement, please contact us:
              </p>
              <div className="mt-4 bg-white rounded-2xl p-6 shadow-sm">
                <p className="font-medium text-raf-forest mb-1">
                  Re-Green Africa Foundation
                </p>
                <a
                  href="mailto:regreenafricafoundation@gmail.com"
                  className="text-raf-terracotta hover:underline"
                >
                  regreenafricafoundation@gmail.com
                </a>
                <p className="text-sm text-raf-charcoal/60 mt-2">
                  We aim to respond to accessibility feedback within 5 working
                  days.
                </p>
              </div>
              <p className="mt-4">
                You can also use our{" "}
                <Link href="/contact" className="text-raf-terracotta hover:underline">
                  contact form
                </Link>{" "}
                to reach us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
