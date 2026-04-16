"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "CloudHisab",
    slug: "cloudhisab",
    category: "AWS / Serverless / SaaS",
    description: "Architected a scalable serverless accounting SaaS platform using AWS Lambda, DynamoDB, and SQS.",
    icon: (
      <svg viewBox="0 0 200 200" className="w-full h-full p-12 text-brand-accent opacity-40">
        <path fill="currentColor" d="M160,80 c0-22-18-40-40-40 c-15,0-28,8-35,20 c-5-3-10-5-15-5 c-17,0-30,13-30,30 c-20,2-35,18-35,38 c0,22,18,40,40,40 h85 c19,0,35-16,35-35 C165,108,163,89,160,80z" />
        <rect x="80" y="110" width="40" height="10" rx="5" fill="currentColor" opacity="0.5" />
        <rect x="70" y="130" width="60" height="10" rx="5" fill="currentColor" opacity="0.3" />
      </svg>
    ),
    color: "bg-blue-50/10",
  },
  {
    title: "AI Image Generator",
    slug: "ai-image-generator",
    category: "AI / React / DALL-E 3",
    description: "Cutting-edge UI for AI image generation with DALL-E 3 integration and ExpressJS backend.",
    icon: (
      <svg viewBox="0 0 200 200" className="w-full h-full p-12 text-brand-purple opacity-40">
        <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="4" fill="none" />
        <path d="M100 20 L100 40 M100 160 L100 180 M20 100 L40 100 M160 100 L180 100" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
        <path d="M43 43 L58 58 M142 142 L157 157 M43 157 L58 142 M142 43 L157 58" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
        <circle cx="100" cy="100" r="15" fill="currentColor" />
      </svg>
    ),
    color: "bg-purple-50/10",
  },
  {
    title: "Paraphrasing Tool",
    slug: "paraphrasing-tool",
    category: "NLP / Node.js / Express",
    description: "Online paraphrasing tool using REST APIs for fast and reliable text processing.",
    icon: (
      <svg viewBox="0 0 200 200" className="w-full h-full p-12 text-orange-400 opacity-40">
        <path d="M40 60 h120 M40 100 h120 M40 140 h80" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
        <path d="M140 130 l20 20 l-20 20" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
      </svg>
    ),
    color: "bg-orange-50/10",
  },
  {
      title: "Stock Prediction ML",
      slug: "stock-prediction",
      category: "Machine Learning / Finance",
      description: "Developed advanced ML algorithms for stock prediction reducing error by 18%.",
      icon: (
        <svg viewBox="0 0 200 200" className="w-full h-full p-12 text-pink-500 opacity-40">
          <path d="M40 140 l30-40 l30 20 l60-80" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
          <circle cx="160" cy="40" r="10" fill="currentColor" />
        </svg>
      ),
      color: "bg-pink-50/10"
  },
  {
      title: "MindSync",
      slug: "mindsync",
      category: "Full Stack / Mental Health",
      description: "A mental health app developed to provide real-time support and tracking.",
      icon: (
        <svg viewBox="0 0 200 200" className="w-full h-full p-12 text-cyan-500 opacity-40">
          <path d="M100 40 c-30 0-50 20-50 50 c0 30 20 40 50 70 c30-30 50-40 50-70 c0-30-20-50-50-50z" fill="currentColor" />
          <path d="M70 90 h60 M100 60 v60" stroke="white" strokeWidth="8" strokeLinecap="round" />
        </svg>
      ),
      color: "bg-cyan-50/10"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-brand-dark relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16 sm:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="max-w-2xl">
            <h2 className="text-brand-accent font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-4 sm:mb-6">
              Selected Works
            </h2>
            <h3 className="text-5xl sm:text-6xl md:text-9xl font-serif text-white leading-[0.9] md:leading-[0.85] tracking-tighter">
              Featured <br />
              <span className="italic accent-gradient">Creations.</span>
            </h3>
          </div>
          <button className="glass-card px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold flex items-center gap-3 hover:bg-white/10 transition-all text-white w-full sm:w-auto justify-center">
            Explore All <ArrowUpRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/projects/${project.slug}`}>
                <div className="glass-card p-3 rounded-[2rem] sm:rounded-[2.5rem] group-hover:bg-white/[0.08] group-hover:border-brand-accent/30 transition-all duration-500 relative overflow-hidden h-full flex flex-col">
                  <div className="aspect-video rounded-[1.8rem] overflow-hidden bg-brand-gray relative flex items-center justify-center mb-6 border border-white/5 shrink-0">
                    <div className="w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                      {project.icon}
                    </div>
                    
                    {/* Hover Overlay - Optimized for Mobile (visible on tap/hover) */}
                    <div className="absolute inset-0 bg-brand-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                       <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-brand-accent flex items-center justify-center scale-50 group-hover:scale-100 transition-transform duration-500 shadow-2xl shadow-brand-accent/40">
                          <ArrowUpRight size={24} className="text-brand-dark" />
                       </div>
                    </div>
                  </div>
                  
                  <div className="px-4 sm:px-6 pb-6 flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <span className="text-brand-accent font-bold uppercase tracking-[0.2em] text-[8px] sm:text-[9px] mb-2 block">
                          {project.category}
                        </span>
                        <h4 className="text-xl sm:text-2xl font-serif text-white group-hover:text-brand-accent transition-colors">
                          {project.title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-white/40 text-xs sm:text-sm font-light leading-relaxed line-clamp-3 sm:line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Subtle Background Text */}
                  <div className="absolute -bottom-4 -right-4 font-serif italic text-[4rem] sm:text-[6rem] text-white/[0.02] pointer-events-none group-hover:text-brand-accent/[0.03] transition-colors">
                    {index + 1}
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
