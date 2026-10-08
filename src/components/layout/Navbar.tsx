"use client";

import { Suspense, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "What We Do", href: "/programmes" },
  { name: "Our Impact", href: "/impact" },
  { name: "Get Involved", href: "/get-involved" },
  { name: "Resources", href: "/resources" },
];

function DesktopNavigation({ pathname }: { pathname?: string }) {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`text-sm font-medium transition-colors hover:text-raf-terracotta ${
              isActive ? "text-raf-forest font-semibold" : "text-raf-charcoal/80"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}

function ActiveDesktopNavigation() {
  const pathname = usePathname();
  return <DesktopNavigation pathname={pathname} />;
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-raf-cream/90 backdrop-blur-md border-raf-charcoal/10 py-3 shadow-sm"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Leaf className="h-8 w-8 text-raf-forest group-hover:text-raf-terracotta transition-colors" />
          <span className="font-heading font-bold text-xl tracking-tight text-raf-forest">
            RAF
          </span>
        </Link>

        {/* Desktop Navigation */}
        <Suspense fallback={<DesktopNavigation />}>
          <ActiveDesktopNavigation />
        </Suspense>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/contact" className="text-sm font-medium text-raf-charcoal hover:text-raf-terracotta transition-colors">
            Contact
          </Link>
          <Button asChild className="bg-raf-terracotta hover:bg-raf-terracotta/90 text-white rounded-full px-6">
            <Link href="/get-involved">Join the Movement</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" aria-label="Open menu" className="text-raf-forest">
                  <Menu className="h-6 w-6" />
                </Button>
              }
            />
            <SheetContent side="right" className="bg-raf-cream border-l-raf-charcoal/10 flex flex-col">
              <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
              <div className="flex items-center gap-2 mb-8 mt-4">
                <Leaf className="h-6 w-6 text-raf-forest" />
                <span className="font-heading font-bold text-lg text-raf-forest">RAF</span>
              </div>
              <nav className="flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-heading font-medium text-raf-charcoal hover:text-raf-terracotta transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="text-lg font-heading font-medium text-raf-charcoal hover:text-raf-terracotta transition-colors"
                >
                  Contact
                </Link>
              </nav>
              <div className="mt-auto pb-8">
                <Button asChild className="w-full bg-raf-terracotta hover:bg-raf-terracotta/90 text-white rounded-full">
                  <Link href="/get-involved">Join the Movement</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
