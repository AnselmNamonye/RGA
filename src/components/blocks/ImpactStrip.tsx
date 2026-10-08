"use client";

import { motion } from "framer-motion";

const impactStatements = [
  {
    title: "Youth-led",
    description: "Environmental action driven by young people.",
  },
  {
    title: "Community-rooted",
    description: "Working alongside communities and local stakeholders.",
  },
  {
    title: "Action-oriented",
    description: "Turning environmental awareness into practical action.",
  },
];

export function ImpactStrip() {
  return (
    <section className="bg-raf-charcoal text-white py-12 border-b-4 border-raf-terracotta">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {impactStatements.map((item, index) => (
            <motion.div 
              key={item.title}
              className="pt-8 md:pt-0 md:px-8 first:pt-0 first:md:pl-0 last:md:pr-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-heading font-bold mb-3 text-raf-gold">{item.title}</h3>
              <p className="text-raf-cream/80 text-lg leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
