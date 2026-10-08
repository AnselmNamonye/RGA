import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found | Re-Green Africa Foundation",
};

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center bg-raf-cream">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <p className="text-raf-terracotta font-bold text-6xl md:text-8xl font-heading mb-4">
          404
        </p>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-raf-forest mb-4">
          Page not found
        </h1>
        <p className="text-raf-charcoal/70 text-lg mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-raf-forest hover:bg-raf-forest/90 text-white font-medium transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
