import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Re-Green Africa Foundation",
  description:
    "Get in touch with Re-Green Africa Foundation. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-raf-forest text-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="text-raf-gold text-sm font-bold tracking-widest uppercase mb-4">
              Contact
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
              Let&apos;s talk.
            </h1>
            <p className="text-raf-cream/80 text-xl leading-relaxed">
              Whether you want to volunteer, partner, support our work, or just
              find out more — we&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-raf-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-raf-forest mb-8">
                Reach Us
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm">
                  <div className="h-10 w-10 rounded-xl bg-raf-forest/10 flex items-center justify-center text-raf-forest shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-raf-charcoal/50 uppercase tracking-wide mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:regreenafricafoundation@gmail.com"
                      className="text-raf-forest hover:text-raf-terracotta transition-colors font-medium break-all"
                    >
                      regreenafricafoundation@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm">
                  <div className="h-10 w-10 rounded-xl bg-raf-forest/10 flex items-center justify-center text-raf-forest shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-raf-charcoal/50 uppercase tracking-wide mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:+256776642165"
                      className="text-raf-forest hover:text-raf-terracotta transition-colors font-medium"
                    >
                      +256 776 642 165
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm">
                  <div className="h-10 w-10 rounded-xl bg-raf-forest/10 flex items-center justify-center text-raf-forest shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-raf-charcoal/50 uppercase tracking-wide mb-1">
                      Location
                    </p>
                    <p className="text-raf-forest font-medium">
                      Ntungamo District, Uganda
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-heading font-bold text-raf-forest mb-6">
                Send a Message
              </h2>
              <form
                action={`mailto:regreenafricafoundation@gmail.com`}
                method="get"
                encType="text/plain"
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-raf-charcoal mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Jane Doe"
                      className="w-full h-10 rounded-lg border border-raf-charcoal/20 bg-raf-cream px-3 py-2 text-sm placeholder:text-raf-charcoal/40 focus:outline-none focus:ring-2 focus:ring-raf-forest/20 focus:border-raf-forest transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-raf-charcoal mb-1.5"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full h-10 rounded-lg border border-raf-charcoal/20 bg-raf-cream px-3 py-2 text-sm placeholder:text-raf-charcoal/40 focus:outline-none focus:ring-2 focus:ring-raf-forest/20 focus:border-raf-forest transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-raf-charcoal mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="How can we help?"
                    className="w-full h-10 rounded-lg border border-raf-charcoal/20 bg-raf-cream px-3 py-2 text-sm placeholder:text-raf-charcoal/40 focus:outline-none focus:ring-2 focus:ring-raf-forest/20 focus:border-raf-forest transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-raf-charcoal mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="body"
                    required
                    rows={5}
                    placeholder="Tell us about your interest in RAF..."
                    className="w-full rounded-lg border border-raf-charcoal/20 bg-raf-cream px-3 py-2 text-sm placeholder:text-raf-charcoal/40 focus:outline-none focus:ring-2 focus:ring-raf-forest/20 focus:border-raf-forest transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-full bg-raf-terracotta hover:bg-raf-terracotta/90 text-white font-semibold text-sm transition-colors"
                >
                  Send Message
                </button>
                <p className="text-xs text-raf-charcoal/50 text-center">
                  This will open your email client. Alternatively, email us
                  directly at regreenafricafoundation@gmail.com
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
