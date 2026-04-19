"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Brain, Cpu, Database, Star } from "lucide-react";

const experiences = [
  {
    company: "NoGap AI",
    location: "Awantipora J&K, IN",
    role: "AI/ML Engineer",
    period: "Aug 2025 – Present",
    type: "Onsite",
    color: "bg-nb-lime",
    icon: <Brain size={24} />,
    description: [
      "Engineered an AI-powered compliance system (~98% audit effort reduction)",
      "Developed smart answer recommendation using historical data",
      "Designed control-mapping for SOC2 & ISO27001 compliance alignment"
    ]
  },
  {
    company: "ProceedIt",
    location: "Barcelona Spain, EU",
    role: "Artificial Intelligence Intern",
    period: "Apr 2024 – Jun 2024",
    type: "Remote",
    color: "bg-nb-pink",
    icon: <Cpu size={24} />,
    description: [
      "Developed ML algorithms for stock prediction, reducing errors by 18%",
      "Boosted portfolio returns by 12% in the first quarter",
      "Engineered machine learning models increasing forecast accuracy by 20%"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-nb-cream relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 sm:mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="nb-tag bg-nb-lime mb-6 w-fit">Professional Journey</h2>
            <h3 className="text-3xl sm:text-6xl font-black uppercase leading-[0.9]">
              Work <br />
              <span className="text-nb-blue drop-shadow-[4px_4px_0px_#000]">Experience.</span>
            </h3>
          </div>
          <div className="bg-white border-[3px] border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] max-w-sm -rotate-2">
            <p className="font-bold text-lg">
              Leading AI initiatives and building complex architectures for global impact.
            </p>
          </div>
        </div>

        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              whileHover={{ 
                scale: 1.05, 
                rotate: i % 2 === 0 ? 2 : -2,
                boxShadow: "12px 12px 0px 0px rgba(0,0,0,1)" 
              }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                show: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.6, type: "spring" }}
              className="relative flex flex-col md:flex-row gap-8 md:gap-16 group"
            >
              <div className="bg-white border-[4px] border-black p-8 sm:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col md:flex-row gap-12 items-start">
                <div className={`w-24 h-24 border-[3px] border-black ${exp.color} flex items-center justify-center shadow-[4px_4px_0px_0px_#000] shrink-0 rotate-3 group-hover:rotate-0 transition-transform`}>
                  {exp.icon}
                </div>
                
                <div className="flex-1 w-full">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                      <h4 className="text-2xl sm:text-4xl font-black uppercase mb-2 break-words leading-tight">{exp.role}</h4>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="nb-tag bg-nb-yellow break-words">{exp.company}</span>
                        <span className="font-black text-sm opacity-40 uppercase tracking-widest">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {exp.description.map((item, i) => (
                      <div key={i} className="flex gap-4 p-4 border-[2px] border-black bg-nb-cream shadow-[3px_3px_0px_0px_#000]">
                        <Star size={16} fill="black" className="shrink-0 mt-1" />
                        <p className="font-bold text-sm leading-tight break-words">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="hidden lg:flex flex-col items-end gap-3 shrink-0">
                   <div className="nb-tag bg-white flex items-center gap-2">
                      <MapPin size={14} strokeWidth={3} /> {exp.location}
                   </div>
                   <div className="nb-tag bg-white flex items-center gap-2">
                      <Briefcase size={14} strokeWidth={3} /> {exp.type}
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

