"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ClimateCulturePreview() {
  return (
    <section className="py-24 bg-raf-forest text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="max-w-xl">
            <motion.h2 
              className="text-sm font-bold tracking-widest text-raf-gold uppercase mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              Climate Culture & MDD
            </motion.h2>
            <motion.h3 
              className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              When culture tells the story, people listen.
            </motion.h3>
            <motion.p 
              className="text-lg text-raf-cream/80 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Re-Green Africa Foundation uses Music, Dance, and Drama (MDD) alongside traditional storytelling as powerful tools for environmental awareness. We translate complex climate issues into relatable cultural performances that inspire genuine behavioural change within communities.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button size="lg" asChild className="bg-raf-gold hover:bg-raf-gold/90 text-raf-charcoal rounded-full px-8 text-base">
                <Link href="/programmes/climate-culture">Discover Climate Culture</Link>
              </Button>
            </motion.div>
          </div>

          {/* Visual Concept */}
          <motion.div 
            className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-2xl overflow-hidden group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            {/* Placeholder background */}
            <div className="absolute inset-0 bg-raf-charcoal/40 group-hover:bg-raf-charcoal/50 transition-colors duration-500 z-10" />
            
            <div className="absolute inset-0 bg-gradient-to-tr from-raf-terracotta/40 to-transparent mix-blend-overlay z-0" />
            
            <div className="absolute inset-0 bg-raf-sand flex items-center justify-center -z-10">
              <span className="text-raf-charcoal/30 font-medium tracking-widest uppercase">Performance Image Placeholder</span>
            </div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <button 
                className="h-20 w-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform duration-500 ease-out"
                aria-label="Play video"
              >
                <Play className="h-8 w-8 ml-1 fill-white" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
