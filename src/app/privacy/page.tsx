import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Re-Green Africa Foundation",
  description:
    "Privacy Policy for Re-Green Africa Foundation — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-raf-forest text-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="text-raf-gold text-sm font-bold tracking-widest uppercase mb-4">
              Legal
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
              Privacy Policy
            </h1>
            <p className="text-raf-cream/80 text-lg">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-raf-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div className="space-y-10 text-raf-charcoal/80 leading-relaxed">
              <div>
                <h2 className="text-2xl font-heading font-bold text-raf-forest mb-4">
                  1. Introduction
                </h2>
                <p>
                  Re-Green Africa Foundation (&quot;RAF&quot;, &quot;we&quot;, &quot;us&quot;, or
                  &quot;our&quot;) is committed to protecting your privacy. This Privacy
                  Policy explains how we collect, use, and safeguard your
                  personal information when you visit our website or interact
                  with our organisation.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-raf-forest mb-4">
                  2. Information We Collect
                </h2>
                <p className="mb-3">
                  We may collect the following types of information:
                </p>
                <ul className="space-y-2 list-none pl-0">
                  {[
                    "Contact details (name, email address, phone number) provided via our contact form",
                    "Voluntarily submitted information from volunteers, partners, or supporters",
                    "Usage data collected automatically when you visit our website (IP address, browser type, pages visited)",
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
                  3. How We Use Your Information
                </h2>
                <p className="mb-3">
                  We use the information we collect to:
                </p>
                <ul className="space-y-2 list-none pl-0">
                  {[
                    "Respond to enquiries and communicate with volunteers, partners, and supporters",
                    "Coordinate programme activities and manage volunteer engagement",
                    "Improve our website and services",
                    "Send programme updates and news to those who have requested them",
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
                  4. Data Sharing
                </h2>
                <p>
                  We do not sell, trade, or rent your personal information to
                  third parties. We may share information with trusted partners
                  or service providers who assist in operating our website or
                  conducting our programmes, subject to confidentiality
                  agreements.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-raf-forest mb-4">
                  5. Data Security
                </h2>
                <p>
                  We implement reasonable security measures to protect your
                  personal information. However, no method of transmission over
                  the internet is 100% secure, and we cannot guarantee absolute
                  security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-raf-forest mb-4">
                  6. Your Rights
                </h2>
                <p>
                  You have the right to access, correct, or request deletion of
                  your personal information. To exercise these rights, please
                  contact us at{" "}
                  <a
                    href="mailto:regreenafricafoundation@gmail.com"
                    className="text-raf-terracotta hover:underline"
                  >
                    regreenafricafoundation@gmail.com
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-raf-forest mb-4">
                  7. Contact
                </h2>
                <p>
                  If you have questions about this Privacy Policy, please
                  contact us at{" "}
                  <a
                    href="mailto:regreenafricafoundation@gmail.com"
                    className="text-raf-terracotta hover:underline"
                  >
                    regreenafricafoundation@gmail.com
                  </a>{" "}
                  or visit our{" "}
                  <Link href="/contact" className="text-raf-terracotta hover:underline">
                    contact page
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
