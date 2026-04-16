"use client";

import { motion } from "framer-motion";
import { Brain, Code, Cloud, Search } from "lucide-react";

const services = [
  {
    icon: <Brain className="text-brand-teal" size={32} />,
    title: "AI/ML Solutions",
    text: "Engineering intelligent systems, predictive models, and automation workflows using state-of-the-art AI.",
  },
  {
    icon: <Code className="text-brand-soft-black" size={32} />,
    title: "Full Stack Development",
    text: "Building scalable, end-to-end web applications with modern frameworks like Next.js and Node.js.",
  },
  {
    icon: <Cloud className="text-brand-teal" size={32} />,
    title: "Cloud Architecture",
    text: "Designing cost-efficient, high-performance serverless infrastructures on AWS and Google Cloud.",
  },
  {
    icon: <Search className="text-brand-soft-black" size={32} />,
    title: "Data Analytics",
    text: "Transforming raw data into actionable insights through advanced data processing and visualization.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-32 bg-brand-dark text-white overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 sm:mb-24 gap-8">
          <div className="max-w-xl">
            <h2 className="text-brand-accent font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-4 sm:mb-6">
              My Expertise
            </h2>
            <h3 className="text-4xl sm:text-5xl md:text-8xl font-serif leading-tight">
              Services I <span className="italic accent-gradient">Provide.</span>
            </h3>
          </div>
          <p className="text-white/40 max-w-sm text-base sm:text-lg font-light leading-relaxed">
            Specializing in high-performance AI systems and modern full-stack architectures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, backgroundColor: "rgba(255, 255, 255, 0.08)", borderColor: "rgba(45, 212, 191, 0.3)" }}
              whileTap={{ scale: 0.95, backgroundColor: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(45, 212, 191, 0.5)" }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass-card p-8 sm:p-10 rounded-[2.5rem] sm:rounded-[3rem] hover:bg-white/[0.05] transition-all duration-500 cursor-default relative overflow-hidden"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-gray flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 border border-white/5">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-brand-accent transition-colors">{service.title}</h4>
              <p className="text-white/40 leading-relaxed font-light text-sm">
                {service.text}
              </p>
              
              <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center opacity-20 group-hover:opacity-100 transition-opacity">
                <span className="font-mono text-xs">0{index + 1}</span>
                <div className="w-8 h-[1px] bg-brand-accent" />
              </div>

              {/* Background Glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-accent/5 blur-[50px] rounded-full group-hover:bg-brand-accent/10 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
