"use client";

import { motion } from "framer-motion";
import { Trees, BookOpen, Users, Music, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const pillars = [
  {
    title: "Restore",
    description: "Protecting and restoring ecosystems through practical environmental action.",
    icon: Trees,
  },
  {
    title: "Educate",
    description: "Building environmental knowledge and climate awareness.",
    icon: BookOpen,
  },
  {
    title: "Mobilise",
    description: "Bringing young people and communities together around environmental action.",
    icon: Users,
  },
  {
    title: "Inspire",
    description: "Using culture, storytelling and Music, Dance and Drama to make environmental issues relatable.",
    icon: Music,
  },
  {
    title: "Innovate",
    description: "Encouraging practical ideas and alternative approaches to environmental challenges.",
    icon: Lightbulb,
  },
];

export function WhyRafSection() {
  return (
    <section className="py-24 bg-raf-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-heading font-bold text-raf-forest mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Environmental change starts with people.
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-raf-charcoal/80 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Re-Green Africa Foundation combines environmental restoration, youth engagement, and community participation to build lasting change.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={index === 3 ? "md:col-span-1 lg:col-start-2" : (index === 4 ? "md:col-span-2 lg:col-span-1" : "")}
            >
              <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow bg-white rounded-2xl overflow-hidden group">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-xl bg-raf-sand/30 flex items-center justify-center mb-4 group-hover:bg-raf-terracotta group-hover:text-white transition-colors text-raf-forest">
                    <pillar.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl font-heading text-raf-forest">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-raf-charcoal/70 leading-relaxed text-lg">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
