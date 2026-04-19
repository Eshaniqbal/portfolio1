"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "CloudHisab",
    slug: "cloudhisab",
    category: "AWS / Serverless / SaaS",
    description: "Architected a scalable serverless accounting SaaS platform using AWS Lambda, DynamoDB, and SQS.",
    color: "bg-nb-lime",
  },
  {
    title: "AI Image Generator",
    slug: "ai-image-generator",
    category: "AI / React / DALL-E 3",
    description: "Cutting-edge UI for AI image generation with DALL-E 3 integration and ExpressJS backend.",
    color: "bg-nb-pink",
  },
  {
    title: "Paraphrasing Tool",
    slug: "paraphrasing-tool",
    category: "NLP / Node.js / Express",
    description: "Online paraphrasing tool using REST APIs for fast and reliable text processing.",
    color: "bg-nb-yellow",
  },
  {
    title: "Stock Prediction ML",
    slug: "stock-prediction",
    category: "Machine Learning / Finance",
    description: "Developed advanced ML algorithms for stock prediction reducing error by 18%.",
    color: "bg-nb-blue",
  },
  {
    title: "MindSync",
    slug: "mindsync",
    category: "Full Stack / Mental Health",
    description: "A mental health app developed to provide real-time support and tracking.",
    color: "bg-nb-purple",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 pb-40 bg-nb-cream relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16 sm:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="max-w-2xl">
            <h2 className="nb-tag bg-nb-blue mb-6 w-fit">Selected Works</h2>
            <h3 className="text-3xl sm:text-7xl md:text-8xl font-black uppercase leading-[0.8] tracking-tighter">
              Featured <br />
              <span className="text-nb-yellow drop-shadow-[4px_4px_0px_#000]">Creations.</span>
            </h3>
          </div>
          <button className="nb-button bg-black text-white px-10 py-5">
            Explore All <ArrowUpRight size={20} />
          </button>
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
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{ 
                scale: 1.02,
                rotate: index % 2 === 0 ? 1 : -1,
                transition: { type: "spring", stiffness: 400 }
              }}
            >
              <Link href={`/projects/${project.slug}`}>
                <div className="bg-white border-[3px] border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all h-full flex flex-col group">
                  <div className={`aspect-video border-[3px] border-black ${project.color} relative flex items-center justify-center mb-8 shadow-[4px_4px_0px_0px_#000] overflow-hidden`}>
                    <div className="text-sm sm:text-2xl font-black uppercase italic drop-shadow-[2px_2px_0px_#fff] whitespace-nowrap px-4">
                      {project.title.split(' ')[0]}
                    </div>
                  </div>
                  
                  <div className="px-2 pb-6 flex-1">
                    <span className="nb-tag bg-white mb-4 inline-block break-words text-[10px] sm:text-xs">
                      {project.category}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-black uppercase mb-4 group-hover:text-nb-pink transition-colors break-words leading-tight">
                      {project.title}
                    </h4>
                    <p className="font-bold text-black/70 leading-tight break-words">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center px-2 pt-6 border-t-[2px] border-black">
                    <span className="font-black text-xl italic">0{index + 1}</span>
                    <ArrowUpRight size={24} strokeWidth={3} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

