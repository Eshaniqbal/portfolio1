"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Python", value: 95 },
  { name: "JavaScript", value: 90 },
  { name: "Machine Learning", value: 92 },
  { name: "React / Next.js", value: 88 },
  { name: "Node.js / Express", value: 85 },
  { name: "AWS / Cloud", value: 80 },
];

export default function Skills() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-brand-dark overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <h2 className="text-brand-accent font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-4 sm:mb-6">
              Technical Arsenal
            </h2>
            <h3 className="text-4xl sm:text-5xl md:text-8xl font-serif text-white leading-tight mb-8 sm:mb-12">
              The Tech <br />
              <span className="italic accent-gradient">Behind.</span>
            </h3>
            <p className="text-base sm:text-xl text-white/50 leading-relaxed font-light mb-10 sm:mb-16 max-w-lg">
              As an AI/ML Engineer and Full Stack Architect, I build high-performance systems 
              that combine mathematical precision with seamless user experiences.
            </p>
            
            <div className="inline-block p-6 sm:p-10 glass-card rounded-[2rem] sm:rounded-[2.5rem] relative overflow-hidden group mb-12 lg:mb-0">
              <p className="font-serif italic text-2xl sm:text-3xl mb-4 text-white group-hover:text-brand-accent transition-colors">"Complexity simplified through code."</p>
              <p className="font-bold text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-white/20 group-hover:text-white/40 transition-colors">— Eshan Iqbal</p>
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/5 blur-2xl rounded-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 relative">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.08)", borderColor: "rgba(45, 212, 191, 0.3)" }}
                whileTap={{ scale: 0.95, backgroundColor: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(45, 212, 191, 0.5)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] flex flex-col justify-between transition-all group"
              >
                <div className="flex justify-between items-center mb-6 sm:mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-brand-gray flex items-center justify-center border border-white/5 group-hover:border-brand-accent/30 transition-colors">
                     <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                  </div>
                  <span className="text-white/30 font-mono text-[10px] sm:text-xs">{skill.value}%</span>
                </div>
                
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-brand-accent transition-colors">{skill.name}</h4>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-brand-accent to-brand-purple"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Background Decorative Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-accent/5 blur-[120px] -z-10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
