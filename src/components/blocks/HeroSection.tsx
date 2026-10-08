"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-raf-forest">
      {/* Background overlay placeholder - replace with actual image later */}
      <div 
        className="absolute inset-0 bg-raf-forest opacity-90 z-0"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(15, 44, 26, 0.9), rgba(15, 44, 26, 0.4))",
        }}
      />
      
      {/* If using an actual image, it would go here */}
      {/* <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
         <Image src="/hero-placeholder.jpg" fill className="object-cover" alt="Community tree planting" priority />
      </div> */}

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-4xl">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-[1.1]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Restoring Nature.<br />
            Empowering Communities.<br />
            <span className="text-raf-gold">Inspiring Change.</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-raf-cream/90 mb-10 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Re-Green Africa Foundation is a youth-driven environmental organisation working with communities to advance environmental conservation, climate awareness and sustainable action.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Link href="/programmes" className={buttonVariants({ size: "lg", className: "bg-raf-terracotta hover:bg-raf-terracotta/90 text-white rounded-full px-8 text-base" })}>
              Explore Our Work
            </Link>
            <Link href="/get-involved" className={buttonVariants({ size: "lg", variant: "outline", className: "bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white rounded-full px-8 text-base backdrop-blur-sm" })}>
              Join the Movement
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <motion.div 
          className="w-[1px] h-12 bg-white/30 relative overflow-hidden"
        >
          <motion.div 
            className="w-full h-1/2 bg-white absolute top-0"
            animate={{ top: ["-50%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
