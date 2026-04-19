"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Terminal, Cpu, Brain, Database, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projectsData = {
  "cloudhisab": {
    title: "CloudHisab",
    category: "AWS / Serverless / SaaS",
    description: "Architected a scalable serverless accounting SaaS platform using AWS Lambda, DynamoDB, and SQS, enabling cost-efficient and high-performance backend operations.",
    fullDescription: "CloudHisab is a modern, GST-compliant accounting platform designed for small and medium enterprises. It leverages the full power of AWS serverless architecture to provide a highly available and cost-effective solution for business management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    tech: ["AWS Lambda", "DynamoDB", "Node.js", "GraphQL", "Next.js"],
    features: ["GST-compliant billing", "Automated invoice generation", "Real-time financial insights", "Multi-user collaboration"],
    stats: { performance: "99.9% Uptime", cost: "60% Reduction", speed: "<200ms Latency" },
    color: "bg-nb-lime"
  },
  "ai-image-generator": {
    title: "AI Image Generator",
    category: "AI / React / DALL-E 3",
    description: "Cutting-edge UI for AI image generation with DALL-E 3 integration and ExpressJS backend.",
    fullDescription: "A sophisticated web application that allows users to generate high-quality images from text prompts using OpenAI's DALL-E 3 model. Features a sleek, modern UI with real-time generation previews.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop",
    tech: ["OpenAI API", "React", "Express.js", "Tailwind CSS", "Framer Motion"],
    features: ["Text-to-Image generation", "Image history gallery", "Downloadable assets", "Custom prompt presets"],
    stats: { retention: "+25%", speed: "30% Faster Load", api: "90% Efficiency" },
    color: "bg-nb-pink"
  },
  "paraphrasing-tool": {
    title: "Paraphrasing Tool",
    category: "NLP / Node.js / Express",
    description: "Online paraphrasing tool using REST APIs for fast and reliable text processing.",
    fullDescription: "A powerful NLP-driven tool that helps users rewrite content while maintaining the original meaning. It uses advanced algorithms to provide context-aware suggestions and improvements.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2573&auto=format&fit=crop",
    tech: ["Node.js", "Express.js", "REST API", "NLP Algorithms", "React"],
    features: ["Context-aware rewriting", "Multiple tone options", "Plagiarism check integration", "Fast processing speed"],
    stats: { reliability: "80% Increase", speed: "90% Fast Results", users: "10k+ Monthly" },
    color: "bg-nb-yellow"
  },
  "stock-prediction": {
    title: "Stock Prediction ML",
    category: "Machine Learning / Finance",
    description: "Developed advanced ML algorithms for stock prediction reducing error by 18%.",
    fullDescription: "A data science project focused on predicting stock market trends using historical data and deep learning models. It incorporates predictive analytics to boost portfolio returns.",
    image: "https://images.unsplash.com/photo-1611974717537-430635f79188?q=80&w=2670&auto=format&fit=crop",
    tech: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "Predictive Analytics"],
    features: ["Historical trend analysis", "Error reduction algorithms", "ROI optimization models", "Real-time data streaming"],
    stats: { error: "-18%", returns: "+12%", accuracy: "+20% Forecast" },
    color: "bg-nb-blue"
  },
  "mindsync": {
    title: "MindSync",
    category: "Full Stack / Mental Health",
    description: "A mental health app developed to provide real-time support and tracking.",
    fullDescription: "MindSync is a comprehensive mental wellness platform that provides users with tools for mood tracking, guided meditation, and professional support connectivity.",
    image: "https://images.unsplash.com/photo-1527137342181-19aab11a8ee1?q=80&w=2670&auto=format&fit=crop",
    tech: ["React Native", "Firebase", "Node.js", "Redux", "Express"],
    features: ["Mood tracking dashboard", "Guided wellness sessions", "Direct therapist chat", "Personalized insights"],
    stats: { satisfaction: "92%", uptime: "99.9%", active: "5k+ Users" },
    color: "bg-nb-purple"
  }
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsData[slug as keyof typeof projectsData];

  if (!project) {
    return (
      <main className="min-h-screen bg-nb-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black uppercase mb-4">Project Not Found</h1>
          <Link href="/#projects" className="nb-button bg-nb-lime">
            <ArrowLeft size={20} /> Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-nb-cream text-black">
      <Navbar />
      
      <section className="pt-40 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <Link href="/#projects" className="group inline-flex items-center gap-2 font-black uppercase tracking-widest text-xs mb-8 hover:text-nb-pink transition-colors">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" strokeWidth={3} /> Back to Projects
            </Link>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
              <div>
                <span className="nb-tag bg-nb-lime mb-4 inline-block">
                  {project.category}
                </span>
                <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.8] tracking-tighter">
                  {project.title}
                </h1>
              </div>
              <div className="flex gap-4">
                <button className="nb-button bg-white p-5">
                  <Github size={28} strokeWidth={3} />
                </button>
                <button className="nb-button bg-nb-yellow text-lg">
                  Live Demo <ExternalLink size={24} strokeWidth={3} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-black border-[4px] border-black shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] aspect-[21/9] mb-20 relative overflow-hidden"
          >
            <Image 
              src={project.image} 
              alt={project.title} 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-16">
            {/* Project Details */}
            <div className="lg:col-span-2 space-y-16">
              <div className="bg-white border-[3px] border-black p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-4xl font-black uppercase mb-8 italic text-nb-purple underline decoration-[6px] decoration-black">The Challenge</h2>
                <p className="text-2xl font-bold leading-tight">
                  {project.fullDescription}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-nb-pink border-[3px] border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="text-2xl font-black uppercase mb-8 flex items-center gap-3 underline decoration-[4px] decoration-black">
                    <Terminal size={24} strokeWidth={3} /> Key Features
                  </h3>
                  <ul className="space-y-6">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-4 font-bold text-lg leading-tight">
                        <Star size={16} fill="black" className="shrink-0 mt-1" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-nb-lime border-[3px] border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="text-2xl font-black uppercase mb-8 flex items-center gap-3 underline decoration-[4px] decoration-black">
                    <Database size={24} strokeWidth={3} /> Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((t, i) => (
                      <span key={i} className="nb-tag bg-white text-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Stats */}
            <div className="space-y-12">
              <div className="bg-nb-yellow border-[3px] border-black p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-10">
                <h3 className="font-black uppercase tracking-widest text-sm border-b-[2px] border-black pb-4">Project Impact</h3>
                <div className="space-y-10">
                  {Object.entries(project.stats).map(([key, value], i) => (
                    <div key={i}>
                      <p className="font-black text-xs uppercase tracking-widest opacity-40 mb-2">{key}</p>
                      <p className="text-4xl font-black uppercase">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-black text-white border-[3px] border-black p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-8">
                <Brain size={50} strokeWidth={2.5} className="text-nb-purple" />
                <h4 className="text-3xl font-black uppercase leading-tight italic">Need a similar solution?</h4>
                <p className="font-bold text-lg opacity-70">
                  I specialize in building intelligent, high-performance systems tailored to specific business needs.
                </p>
                <Link href="/#contact" className="nb-button bg-nb-lime text-black w-full text-center justify-center">
                  Let's Discuss →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

