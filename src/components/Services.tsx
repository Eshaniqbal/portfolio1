"use client";

import { motion } from "framer-motion";
import { Brain, Code, Cloud, Search, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: <Brain size={32} />,
    title: "AI/ML Solutions",
    text: "Engineering intelligent systems, predictive models, and automation workflows using state-of-the-art AI.",
    color: "bg-nb-lime",
  },
  {
    icon: <Code size={32} />,
    title: "Full Stack Development",
    text: "Building scalable, end-to-end web applications with modern frameworks like Next.js and Node.js.",
    color: "bg-nb-pink",
  },
  {
    icon: <Cloud size={32} />,
    title: "Cloud Architecture",
    text: "Designing cost-efficient, high-performance serverless infrastructures on AWS and Google Cloud.",
    color: "bg-nb-yellow",
  },
  {
    icon: <Search size={32} />,
    title: "Data Analytics",
    text: "Transforming raw data into actionable insights through advanced data processing and visualization.",
    color: "bg-nb-blue",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-nb-cream overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 sm:mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="nb-tag bg-nb-pink mb-6 w-fit">My Expertise</h2>
            <h3 className="text-3xl sm:text-7xl md:text-8xl font-black uppercase leading-[0.8] tracking-tighter">
              Services <br />
              <span className="text-nb-purple drop-shadow-[4px_4px_0px_#000]">I Provide.</span>
            </h3>
          </div>
          <div className="bg-white border-[3px] border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] max-w-sm rotate-2">
            <p className="font-bold text-lg">
              Specializing in high-performance AI systems and modern full-stack architectures.
            </p>
          </div>
        </div>

        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                show: { opacity: 1, y: 0, scale: 1 }
              }}
              whileHover={{ 
                y: -10,
                rotate: index % 2 === 0 ? 2 : -2,
                transition: { type: "spring", stiffness: 300 }
              }}
              className={`p-10 border-[4px] border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] ${service.color} transition-all cursor-default group flex flex-col justify-between min-h-[400px]`}
            >
                <div>
                  <div className="w-16 h-16 bg-white border-[3px] border-black flex items-center justify-center mb-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-12 transition-transform">
                    {service.icon}
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black mb-6 uppercase tracking-tight break-words leading-tight">{service.title}</h4>
                  <p className="font-bold leading-tight text-black/80 break-words">
                    {service.text}
                  </p>
                </div>
                
                <div className="mt-12 flex justify-between items-end">
                  <span className="font-black text-4xl opacity-20">0{index + 1}</span>
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors border-[2px] border-black">
                    <ArrowUpRight size={24} strokeWidth={3} />
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}

