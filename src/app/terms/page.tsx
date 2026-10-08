import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Re-Green Africa Foundation",
  description:
    "Terms of Service for Re-Green Africa Foundation website and programmes.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-raf-forest text-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="text-raf-gold text-sm font-bold tracking-widest uppercase mb-4">
              Legal
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
              Terms of Service
            </h1>
            <p className="text-raf-cream/80 text-lg">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-raf-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-10 text-raf-charcoal/80 leading-relaxed">
            <div>
              <h2 className="text-2xl font-heading font-bold text-raf-forest mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using the Re-Green Africa Foundation website,
                you accept and agree to be bound by these Terms of Service. If
                you do not agree to these terms, please do not use our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-raf-forest mb-4">
                2. Use of the Website
              </h2>
              <p className="mb-3">You agree to use this website only for lawful purposes and in a manner that does not:</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  "Infringe the rights of any third party",
                  "Transmit any unlawful, harmful, or objectionable material",
                  "Attempt to gain unauthorised access to any part of the website or its infrastructure",
                  "Interfere with the operation of the website",
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
                3. Intellectual Property
              </h2>
              <p>
                All content on this website — including text, images,
                graphics, and logos — is the property of Re-Green Africa
                Foundation and is protected by applicable intellectual property
                laws. You may not reproduce, distribute, or create derivative
                works without our explicit written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-raf-forest mb-4">
                4. Disclaimer
              </h2>
              <p>
                This website and its content are provided &quot;as is&quot; without
                warranty of any kind. Re-Green Africa Foundation makes no
                representations or warranties regarding the accuracy,
                completeness, or suitability of the information provided.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-raf-forest mb-4">
                5. Links to Third-Party Websites
              </h2>
              <p>
                Our website may contain links to third-party websites. These
                links are provided for convenience only. Re-Green Africa
                Foundation has no control over the content of those sites and
                accepts no responsibility for them.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-raf-forest mb-4">
                6. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms of Service at any
                time. Changes will be posted on this page with an updated
                revision date. Continued use of the website after changes
                constitutes acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-raf-forest mb-4">
                7. Contact
              </h2>
              <p>
                For questions about these Terms of Service, please contact us
                via our{" "}
                <Link href="/contact" className="text-raf-terracotta hover:underline">
                  contact page
                </Link>{" "}
                or email{" "}
                <a
                  href="mailto:regreenafricafoundation@gmail.com"
                  className="text-raf-terracotta hover:underline"
                >
                  regreenafricafoundation@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
