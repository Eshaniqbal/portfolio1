"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Python", value: 95, color: "bg-nb-lime" },
  { name: "JavaScript", value: 90, color: "bg-nb-pink" },
  { name: "Machine Learning", value: 92, color: "bg-nb-yellow" },
  { name: "React / Next.js", value: 88, color: "bg-nb-blue" },
  { name: "Node.js / Express", value: 85, color: "bg-nb-purple" },
  { name: "AWS / Cloud", value: 80, color: "bg-nb-lime" },
];

export default function Skills() {
  return (
    <section id="about" className="py-24 sm:py-32 pb-40 bg-nb-cream overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="nb-tag bg-nb-yellow mb-6 w-fit">Technical Arsenal</h2>
            <h3 className="text-3xl sm:text-6xl md:text-7xl font-black uppercase leading-[0.8] mb-10">
              The Tech <br />
              <span className="text-nb-pink drop-shadow-[4px_4px_0px_#000]">Behind.</span>
            </h3>
            <p className="text-xl font-bold leading-relaxed mb-12 max-w-lg">
              As an AI/ML Engineer and Full Stack Architect, I build high-performance systems 
              that combine mathematical precision with seamless user experiences.
            </p>
            
            <div className="bg-white border-[3px] border-black p-10 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] -rotate-2">
              <p className="font-black italic text-2xl sm:text-3xl mb-4">"Complexity simplified through code."</p>
              <p className="font-black text-xs uppercase tracking-widest opacity-40">— Eshan Iqbal</p>
            </div>
          </div>

          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  show: { opacity: 1, x: 0 }
                }}
                className="bg-white border-[3px] border-black p-5 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all group"
              >
                <div className="flex justify-between items-center mb-8">
                  <div className={`w-10 h-10 border-[2px] border-black ${skill.color} shadow-[3px_3px_0px_0px_#000]`} />
                  <span className="font-black text-lg sm:text-xl">{skill.value}%</span>
                </div>
                
                <div className="pb-4">
                  <h4 className="text-lg sm:text-2xl font-black uppercase mb-4 break-words leading-tight">{skill.name}</h4>
                  <div className="h-5 w-full bg-black border-[2px] border-black p-1">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className={`h-full ${skill.color}`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

