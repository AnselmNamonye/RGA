"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export function FeaturedProjectTeaser() {
  return (
    <section className="py-24 bg-raf-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex items-center gap-4 mb-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-px w-12 bg-raf-terracotta" />
            <span className="text-sm font-bold tracking-widest text-raf-terracotta uppercase">
              Featured Project
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12 items-center bg-white rounded-3xl overflow-hidden shadow-sm border border-raf-charcoal/5">
            
            {/* Project Image */}
            <motion.div 
              className="lg:col-span-7 h-[300px] sm:h-[400px] lg:h-full min-h-[500px] bg-raf-sand relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-raf-charcoal/30 font-medium tracking-widest uppercase text-center px-4">
                  Project Image Placeholder<br/>
                  (E.g., Community Tree Planting)
                </span>
              </div>
            </motion.div>

            {/* Project Details */}
            <motion.div 
              className="lg:col-span-5 p-8 md:p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 text-raf-olive mb-4 font-medium text-sm">
                <MapPin className="h-4 w-4" />
                <span>Ntungamo District, Uganda</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-raf-forest mb-6">
                Ntungamo Green Schools Initiative
              </h3>
              
              <div className="space-y-6 text-raf-charcoal/70 mb-8">
                <div>
                  <h4 className="font-heading font-semibold text-raf-charcoal mb-2">The Challenge</h4>
                  <p>Deforestation and lack of environmental awareness among school-going youth in local communities.</p>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-raf-charcoal mb-2">What RAF Did</h4>
                  <p>Engaged students and teachers through MDD, established school nurseries, and integrated environmental education into extracurricular activities.</p>
                </div>
              </div>

              <Link href="/impact/projects/ntungamo-green-schools" className={buttonVariants({ className: "bg-raf-terracotta hover:bg-raf-terracotta/90 text-white rounded-full px-8 flex items-center gap-2 w-fit" })}>
                View Project <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
