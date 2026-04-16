"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Brain, Cpu, Database } from "lucide-react";

const experiences = [
  {
    company: "NoGap AI",
    location: "Awantipora J&K, IN",
    role: "AI/ML Engineer",
    period: "Aug 2025 – Present",
    type: "Onsite",
    icon: <Brain className="text-brand-teal" size={24} />,
    description: [
      "Engineered an AI-powered compliance and questionnaire automation system (~98% audit effort reduction)",
      "Developed smart answer recommendation using historical data and mappings",
      "Designed control-mapping for SOC2 & ISO27001 compliance alignment"
    ]
  },
  {
    company: "ProceedIt",
    location: "Barcelona Spain, EU",
    role: "Artificial Intelligence Intern",
    period: "Apr 2024 – Jun 2024",
    type: "Remote",
    icon: <Cpu className="text-brand-lavender" size={24} />,
    description: [
      "Developed advanced ML algorithms for stock prediction, reducing prediction errors by 18%",
      "Boosted portfolio returns by 12% in the first quarter",
      "Engineered machine learning models increasing forecast accuracy by 20%"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 sm:mb-24 gap-8">
          <div className="max-w-xl">
            <h2 className="text-brand-accent font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-4 sm:mb-6">
              Professional Journey
            </h2>
            <h3 className="text-4xl sm:text-5xl md:text-8xl font-serif text-white leading-tight">
              Work <span className="italic accent-gradient">Experience.</span>
            </h3>
          </div>
          <p className="text-white/40 max-w-sm text-base sm:text-lg font-light leading-relaxed">
            Leading AI initiatives and building complex architectures for global impact.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="glass-card p-6 sm:p-12 rounded-[2rem] sm:rounded-[3rem] flex flex-col md:flex-row gap-8 sm:gap-12 items-center sm:items-start group-hover:bg-white/[0.08] group-hover:border-brand-accent/30 transition-all duration-500">
                <div className="w-16 sm:w-24 h-16 sm:h-24 rounded-2xl sm:rounded-3xl bg-brand-gray flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-white/5 shrink-0">
                  {exp.icon}
                </div>
                
                <div className="flex-1 text-center md:text-left w-full">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <h4 className="text-2xl sm:text-3xl font-serif text-white mb-1">{exp.role}</h4>
                      <p className="text-brand-accent font-bold text-xs sm:text-sm uppercase tracking-widest">{exp.company}</p>
                    </div>
                    <div className="text-white/30 font-mono text-[10px] sm:text-sm tracking-tighter uppercase">
                      {exp.period}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {exp.description.map((item, i) => (
                      <div key={i} className="flex gap-3 sm:gap-4 text-white/50 text-xs sm:text-sm font-light leading-relaxed text-left">
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-brand-accent mt-1.5 shrink-0" />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex md:hidden lg:flex flex-row md:flex-col items-center md:items-end gap-6 md:gap-3 opacity-40 md:opacity-20 group-hover:opacity-100 transition-opacity pt-4 md:pt-0 border-t md:border-t-0 border-white/5 w-full md:w-auto justify-center md:justify-start">
                   <div className="flex items-center gap-2 text-[8px] sm:text-[10px] font-bold uppercase text-white tracking-widest">
                      <MapPin size={12} /> {exp.location}
                   </div>
                   <div className="flex items-center gap-2 text-[8px] sm:text-[10px] font-bold uppercase text-white tracking-widest">
                      <Briefcase size={12} /> {exp.type}
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
