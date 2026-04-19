"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, Brain, Cpu, Database, Code, Sparkles, Zap, Star, Layers } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-nb-cream">
      {/* Neubrutalism Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{ 
        backgroundImage: `radial-gradient(#000 1.5px, transparent 1.5px)`,
        backgroundSize: '30px 30px'
      }} />

      {/* Floating Graphic Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-[15%] left-[5%] hidden lg:block"
        >
          <div className="nb-card p-4 bg-nb-lime -rotate-6">
            <Star size={40} fill="black" />
          </div>
        </motion.div>
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-[25%] right-[8%] hidden lg:block"
        >
          <div className="nb-card p-6 bg-nb-pink rotate-12">
            <Zap size={50} fill="black" />
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -10, 0],
              rotate: [0, -2, 2, 0]
            }}
            transition={{ 
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              duration: 0.5 
            }}
            className="mb-8 px-6 py-2 bg-nb-yellow border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-flex items-center gap-3"
          >
            <motion.div 
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-black" 
            />
            <span className="text-xs font-black uppercase tracking-widest">Available for Hire</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black leading-[0.8] tracking-tighter mb-8 uppercase"
          >
            <span className="block">DIGITAL</span>
            <span className="block text-nb-purple drop-shadow-[4px_4px_0px_#000]">ARCHITECT</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl mb-12 bg-white border-[3px] border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-1"
          >
            <p className="text-xl sm:text-2xl font-bold leading-tight">
              I'm <span className="bg-nb-lime px-2">Eshan Iqbal</span>. I build high-performance AI systems and digital products with a focus on <span className="underline decoration-[4px] decoration-nb-pink">Scalability</span> and <span className="underline decoration-[4px] decoration-nb-yellow">Impact</span>.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto justify-center">
            <motion.a 
              href="https://wa.me/919419403158"
              className="nb-button bg-nb-lime px-12 py-6 text-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Project <ArrowRight size={24} strokeWidth={3} />
            </motion.a>
            <motion.a 
              href="/127.0.0.1%20Resume.pdf" 
              className="nb-button bg-white px-12 py-6 text-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume <Download size={24} strokeWidth={3} />
            </motion.a>
          </div>
        </div>

        {/* Profile and Stats Section */}
        <div className="mt-20 lg:mt-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 mb-10 lg:mb-0">
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 1, -1, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative w-full aspect-square max-w-[280px] sm:max-w-md mx-auto"
            >
              <div className="absolute inset-0 bg-nb-purple border-[4px] border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] translate-x-3 translate-y-3" />
              <div className="relative w-full h-full border-[4px] border-black bg-nb-cream overflow-hidden rounded-full">
                <Image 
                  src="/assets/images/1698249934969.jpg" 
                  alt="Eshan Iqbal" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="hover:grayscale transition-all duration-500"
                />
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { label: "Architecture", val: "Scalable", icon: <Layers size={32} />, color: "bg-nb-yellow" },
              { label: "Intelligence", val: "AI-First", icon: <Brain size={32} />, color: "bg-nb-lime" },
              { label: "Execution", val: "Blazing", icon: <Zap size={32} />, color: "bg-nb-pink" },
              { label: "Innovation", val: "Infinite", icon: <Sparkles size={32} />, color: "bg-nb-blue" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8, rotate: i % 2 === 0 ? -5 : 5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: i * 0.1, 
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: i % 2 === 0 ? 2 : -2,
                  boxShadow: "12px 12px 0px 0px rgba(0,0,0,1)" 
                }}
                className={`p-6 sm:p-8 border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${stat.color} flex flex-col justify-start gap-4 h-40 sm:h-48 transition-all cursor-default`}
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white border-[2px] border-black p-2 w-fit shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-auto"
                >
                  {stat.icon}
                </motion.div>
                <div className="mt-auto">
                  <p className="text-xs font-black uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-2xl sm:text-4xl font-black uppercase leading-tight">{stat.val}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

