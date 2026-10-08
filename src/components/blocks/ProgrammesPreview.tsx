"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Leaf, Droplets, GraduationCap, Music, Recycle, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const programmes = [
  {
    id: "01",
    title: "Ecological Restoration",
    description: "Tree planting, environmental conservation and community participation in restoring degraded environments.",
    icon: Leaf,
    href: "/programmes/ecological-restoration"
  },
  {
    id: "02",
    title: "Climate Action & Education",
    description: "Climate awareness, environmental education, behaviour-change communication and community campaigns.",
    icon: Droplets,
    href: "/programmes/climate-action-education"
  },
  {
    id: "03",
    title: "Youth & Schools",
    description: "Engaging young people and school communities in environmental learning and practical action.",
    icon: GraduationCap,
    href: "/programmes/youth-and-schools"
  },
  {
    id: "04",
    title: "Climate Culture",
    description: "Using Music, Dance and Drama and storytelling to communicate environmental issues and inspire behaviour change.",
    icon: Music,
    href: "/programmes/climate-culture"
  },
  {
    id: "05",
    title: "Circular Communities",
    description: "Promoting solid waste management, waste sorting and practical community-level environmental solutions.",
    icon: Recycle,
    href: "/programmes/circular-communities"
  },
  {
    id: "06",
    title: "Environmental Innovation",
    description: "Supporting ideas, innovations and alternative approaches that can reduce environmentally harmful practices.",
    icon: Lightbulb,
    href: "/programmes/environmental-innovation"
  }
];

export function ProgrammesPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              className="text-sm font-bold tracking-widest text-raf-terracotta uppercase mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              Our Programmes
            </motion.h2>
            <motion.h3 
              className="text-3xl md:text-5xl font-heading font-bold text-raf-forest leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Building greener, healthier, and more resilient communities.
            </motion.h3>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button variant="outline" asChild className="rounded-full border-raf-forest text-raf-forest hover:bg-raf-forest hover:text-white">
              <Link href="/programmes" className="flex items-center gap-2">
                View All Programmes <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {programmes.map((prog, index) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={prog.href} className="group block h-full">
                <div className="h-full border border-raf-charcoal/10 rounded-2xl p-8 hover:bg-raf-sand/10 transition-colors duration-300 relative overflow-hidden flex flex-col">
                  {/* Hover Accent Bar */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-raf-terracotta transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                  
                  <div className="flex justify-between items-start mb-6">
                    <div className="h-14 w-14 rounded-full bg-raf-forest/5 flex items-center justify-center text-raf-forest group-hover:bg-raf-forest group-hover:text-white transition-colors duration-300">
                      <prog.icon className="h-7 w-7" />
                    </div>
                    <span className="font-heading font-bold text-2xl text-raf-charcoal/20 group-hover:text-raf-terracotta/40 transition-colors">
                      {prog.id}
                    </span>
                  </div>
                  
                  <h4 className="text-2xl font-heading font-bold text-raf-forest mb-4 group-hover:text-raf-terracotta transition-colors">
                    {prog.title}
                  </h4>
                  
                  <p className="text-raf-charcoal/70 leading-relaxed flex-grow">
                    {prog.description}
                  </p>
                  
                  <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-raf-terracotta opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
