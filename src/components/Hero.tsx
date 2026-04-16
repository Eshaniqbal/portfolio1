"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Download, Brain, Cpu, Database, Code, Sparkles, Binary, Zap } from "lucide-react";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden bg-brand-dark">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.15]">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(to right, #2dd4bf 1px, transparent 1px), linear-gradient(to bottom, #2dd4bf 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)'
        }} />
      </div>

      <div className="glow-mesh" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          style={{ x: mousePos.x * 1.5, y: mousePos.y * 1.5 }}
          className="absolute top-[20%] left-[5%] sm:left-[10%] text-brand-accent/10 sm:text-brand-accent/20"
        >
          <Binary size={60} className="sm:w-[120px] sm:h-[120px]" strokeWidth={0.5} />
        </motion.div>
        <motion.div 
          style={{ x: mousePos.x * -1, y: mousePos.y * -1 }}
          className="absolute bottom-[20%] right-[5%] sm:right-[10%] text-brand-purple/10 sm:text-brand-purple/20"
        >
          <Code size={80} className="sm:w-[160px] sm:h-[160px]" strokeWidth={0.5} />
        </motion.div>
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] right-[10%] sm:right-[15%] text-brand-accent/5 sm:text-brand-accent/10"
        >
          <Sparkles size={40} className="sm:w-[80px] sm:h-[80px]" strokeWidth={0.5} />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", damping: 15 }}
            className="mb-6 sm:mb-8 px-5 sm:px-6 py-2 glass-card rounded-full inline-flex items-center gap-3 border-brand-accent/20"
          >
            <div className="w-2 h-2 rounded-full bg-brand-accent animate-ping" />
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] text-brand-accent">System Online: v2.0.4</span>
          </motion.div>

          <motion.div style={{ opacity }}>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl md:text-9xl lg:text-[11rem] font-serif leading-[0.85] text-white tracking-tighter mb-6 sm:mb-12 relative"
            >
              Building <br />
              <span className="relative inline-block">
                <span className="accent-gradient italic">Intelligence.</span>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="absolute -bottom-1 sm:-bottom-2 left-0 h-[3px] sm:h-[4px] bg-gradient-to-r from-brand-accent to-brand-purple rounded-full"
                />
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-2xl mb-10 sm:mb-16 mx-auto"
            >
              <p className="text-base sm:text-xl md:text-2xl text-white/50 leading-relaxed font-light px-4">
                Hi, I’m Eshan Iqbal. I engineer <span className="text-white/80 font-medium italic">scalable AI systems</span> and 
                high-performance digital solutions that bridge the gap between 
                <span className="text-brand-accent/80"> complex data</span> and human experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-6 sm:px-0 justify-center"
            >
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/919419403158"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white text-brand-dark px-10 sm:px-12 py-4 sm:py-5 rounded-full font-bold flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(45,212,191,0.3)] transition-all"
              >
                Let's Talk <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Eshan-Iqbal-Resume-Updated (1).pdf" 
                className="px-10 sm:px-12 py-4 sm:py-5 rounded-full font-bold flex items-center justify-center gap-3 glass-card text-white hover:border-white/20 transition-all"
              >
                Download Dossier <Download size={20} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Dynamic AI Workstation Visual - Redesigned */}
        <motion.div 
          style={{ y: y1 }}
          className="relative mt-20 sm:mt-32 max-w-7xl mx-auto px-4 sm:px-0"
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="glass-card p-1.5 sm:p-6 rounded-[2.5rem] sm:rounded-[4rem] relative overflow-hidden group shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
          >
             <div className="aspect-[4/6] sm:aspect-[21/9] bg-[#020202] rounded-[2.2rem] sm:rounded-[3.2rem] overflow-hidden relative flex flex-col sm:flex-row">
                {/* Visual Content */}
                <div className="flex-1 p-8 sm:p-16 flex flex-col justify-between relative overflow-hidden">
                   <div className="space-y-6 sm:space-y-8 relative z-10">
                      <div className="flex gap-4">
                        <motion.div 
                          animate={{ width: ["2rem", "8rem", "2rem"] }}
                          transition={{ duration: 4, repeat: Infinity }}
                          className="h-1.5 bg-brand-accent rounded-full" 
                        />
                        <div className="w-6 sm:w-8 h-1.5 bg-white/10 rounded-full" />
                      </div>
                      <div className="space-y-4">
                        <motion.h2 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white/95 italic leading-tight max-w-[280px] sm:max-w-2xl"
                        >
                          Neural Network <br /> Optimization
                        </motion.h2>
                        <div className="flex items-center gap-6">
                          <div className="flex -space-x-3">
                            {[1,2,3,4].map(i => (
                              <motion.div 
                                key={i}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: 0.8 + (i * 0.1) }}
                                className="w-8 h-8 rounded-full border-2 border-brand-dark bg-brand-gray" 
                              />
                            ))}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                            <span className="text-[10px] sm:text-xs text-white/40 font-mono tracking-[0.2em] uppercase">Processing Sync</span>
                          </div>
                        </div>
                      </div>
                   </div>
                   
                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-10 relative z-10">
                      {[
                        { label: "Precision", val: "99.2%", icon: <Zap className="text-brand-accent" size={22} />, color: "rgba(45,212,191,0.1)" },
                        { label: "Inference", val: "12ms", icon: <Cpu className="text-brand-purple" size={22} />, color: "rgba(168,85,247,0.1)" },
                        { label: "Reliability", val: "99.9%", icon: <Database className="text-blue-400" size={22} />, color: "rgba(96,165,250,0.1)" }
                      ].map((stat, i) => (
                        <motion.div 
                          key={i} 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1 + (i * 0.1) }}
                          whileHover={{ y: -8, backgroundColor: "rgba(255,255,255,0.08)", borderColor: "rgba(45,212,191,0.3)" }}
                          whileTap={{ scale: 0.92, backgroundColor: "rgba(255,255,255,0.12)", borderColor: "rgba(45,212,191,0.5)" }}
                          className="glass-card p-5 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] flex items-center sm:items-start gap-5 sm:gap-4 border-white/5 group/card"
                        >
                           <div className="p-3 rounded-2xl transition-colors duration-500" style={{ backgroundColor: stat.color }}>
                              {stat.icon}
                           </div>
                           <div>
                             <p className="text-[10px] sm:text-xs uppercase tracking-widest text-white/30 mb-1 group-hover/card:text-white/50 transition-colors">{stat.label}</p>
                             <p className="text-2xl sm:text-3xl font-bold text-white font-mono tracking-tighter">{stat.val}</p>
                           </div>
                        </motion.div>
                      ))}
                   </div>

                   {/* Scanning Line Animation */}
                   <motion.div 
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent z-20 shadow-[0_0_20px_rgba(45,212,191,0.5)]"
                   />

                   {/* Dynamic Glow following the scan */}
                   <motion.div 
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-40 bg-gradient-to-b from-brand-accent/5 to-transparent z-10 pointer-events-none"
                   />

                   {/* Background Glow */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-[800px] h-full sm:h-[800px] bg-brand-accent/5 blur-[120px] sm:blur-[180px] rounded-full" />
                </div>
                
                {/* Code Terminal Sidebar */}
                <div className="w-96 border-l border-white/5 bg-white/[0.02] p-10 font-mono text-[11px] hidden lg:block overflow-hidden relative">
                   <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2dd4bf 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                   
                   <div className="space-y-6 relative z-10">
                      <div className="flex items-center gap-2.5 mb-8">
                        <div className="w-3 h-3 rounded-full bg-red-500/40" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                        <div className="w-3 h-3 rounded-full bg-green-500/40" />
                        <span className="ml-2 text-[9px] text-white/20 uppercase tracking-widest">Terminal</span>
                      </div>
                      
                      <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="space-y-5"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-brand-accent">➜</span>
                          <span className="text-white/80">model.initialize()</span>
                        </div>
                        <div className="pl-6 text-white/30 text-[10px]">
                          [SUCCESS] Weights loaded: 142.4M params
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <span className="text-brand-purple">➜</span>
                          <span className="text-white/80">model.optimize(lr=0.001)</span>
                        </div>
                        
                        <div className="space-y-3 pl-6">
                          {[
                            { e: 1, loss: "0.42", bar: "w-[80%]" },
                            { e: 2, loss: "0.28", bar: "w-[60%]" },
                            { e: 3, loss: "0.15", bar: "w-[40%]" },
                            { e: 4, loss: "0.08", bar: "w-[25%]" },
                            { e: 5, loss: "0.04", bar: "w-[15%]" }
                          ].map((t, i) => (
                            <motion.div 
                              key={i} 
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 1.2 + (i * 0.1) }}
                              className="flex items-center gap-4"
                            >
                              <span className="text-white/10 w-4">E{t.e}</span>
                              <span className="text-white/50 w-16">loss: {t.loss}</span>
                              <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  whileInView={{ width: "100%" }}
                                  transition={{ delay: 1.5 + (i * 0.1), duration: 1 }}
                                  className={`h-full bg-brand-accent/30 ${t.bar} rounded-full`} 
                                />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        
                        <motion.div 
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="flex items-center gap-3 pt-4"
                        >
                          <span className="text-brand-accent">➜</span>
                          <span className="text-brand-accent">system_active.exe</span>
                        </motion.div>
                      </motion.div>
                   </div>
                </div>
             </div>
          </motion.div>

          {/* Floating Accents - Modern Style */}
          <motion.div
            style={{ y: y2 }}
            className="absolute -top-12 -right-12 hidden xl:block"
          >
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="glass-card p-8 rounded-[2rem] border-brand-accent/20 backdrop-blur-3xl shadow-2xl"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center mb-4">
                <Code className="text-brand-accent" size={24} />
              </div>
              <p className="font-bold text-lg mb-1">Architecture</p>
              <p className="text-xs text-white/40 uppercase tracking-widest font-mono">Clean • Scalable • Fast</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
