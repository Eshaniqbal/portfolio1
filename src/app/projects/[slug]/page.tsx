"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Terminal, Cpu, Brain, Database } from "lucide-react";
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
    stats: { performance: "99.9% Uptime", cost: "60% Reduction", speed: "<200ms Latency" }
  },
  "ai-image-generator": {
    title: "AI Powered Image Generator",
    category: "AI / React / DALL-E 3",
    description: "Cutting-edge UI for AI image generation with DALL-E 3 integration and ExpressJS backend.",
    fullDescription: "A sophisticated web application that allows users to generate high-quality images from text prompts using OpenAI's DALL-E 3 model. Features a sleek, modern UI with real-time generation previews.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop",
    tech: ["OpenAI API", "React", "Express.js", "Tailwind CSS", "Framer Motion"],
    features: ["Text-to-Image generation", "Image history gallery", "Downloadable assets", "Custom prompt presets"],
    stats: { retention: "+25%", speed: "30% Faster Load", api: "90% Efficiency" }
  },
  "paraphrasing-tool": {
    title: "Paraphrasing Tool",
    category: "NLP / Node.js / Express",
    description: "Online paraphrasing tool using REST APIs for fast and reliable text processing.",
    fullDescription: "A powerful NLP-driven tool that helps users rewrite content while maintaining the original meaning. It uses advanced algorithms to provide context-aware suggestions and improvements.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2573&auto=format&fit=crop",
    tech: ["Node.js", "Express.js", "REST API", "NLP Algorithms", "React"],
    features: ["Context-aware rewriting", "Multiple tone options", "Plagiarism check integration", "Fast processing speed"],
    stats: { reliability: "80% Increase", speed: "90% Fast Results", users: "10k+ Monthly" }
  },
  "nogap-ai": {
    title: "NoGap AI Compliance",
    category: "AI / ML / Compliance",
    description: "Engineered an AI-powered compliance and questionnaire automation system.",
    fullDescription: "An enterprise-grade AI system designed to automate the complex process of security compliance (SOC2, ISO27001). It uses historical data and smart mapping to recommend answers for security questionnaires.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
    tech: ["Python", "Machine Learning", "NLP", "SOC2/ISO27001", "Google Cloud"],
    features: ["Automated audit effort reduction", "Smart answer recommendations", "Document ingestion pipeline", "Compliance alignment mapping"],
    stats: { effort: "98% Reduction", accuracy: "95% Recommendations", automation: "Full Pipeline" }
  },
  "stock-prediction": {
    title: "Stock Prediction ML",
    category: "Machine Learning / Finance",
    description: "Developed advanced ML algorithms for stock prediction reducing error by 18%.",
    fullDescription: "A data science project focused on predicting stock market trends using historical data and deep learning models. It incorporates predictive analytics to boost portfolio returns.",
    image: "https://images.unsplash.com/photo-1611974717537-430635f79188?q=80&w=2670&auto=format&fit=crop",
    tech: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "Predictive Analytics"],
    features: ["Historical trend analysis", "Error reduction algorithms", "ROI optimization models", "Real-time data streaming"],
    stats: { error: "-18%", returns: "+12%", accuracy: "+20% Forecast" }
  },
  "mindsync": {
    title: "MindSync",
    category: "Full Stack / Mental Health",
    description: "A mental health app developed to provide real-time support and tracking.",
    fullDescription: "MindSync is a comprehensive mental wellness platform that provides users with tools for mood tracking, guided meditation, and professional support connectivity.",
    image: "https://images.unsplash.com/photo-1527137342181-19aab11a8ee1?q=80&w=2670&auto=format&fit=crop",
    tech: ["React Native", "Firebase", "Node.js", "Redux", "Express"],
    features: ["Mood tracking dashboard", "Guided wellness sessions", "Direct therapist chat", "Personalized insights"],
    stats: { satisfaction: "92%", uptime: "99.9%", active: "5k+ Users" }
  }
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsData[slug as keyof typeof projectsData];

  if (!project) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Project Not Found</h1>
          <Link href="/#projects" className="text-brand-teal hover:underline flex items-center gap-2 justify-center">
            <ArrowLeft size={20} /> Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-brand-soft-black">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <Link href="/#projects" className="group inline-flex items-center gap-2 text-brand-soft-black/60 hover:text-brand-teal transition-colors mb-8 font-bold uppercase tracking-widest text-xs">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Projects
            </Link>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div>
                <span className="text-brand-teal font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
                  {project.category}
                </span>
                <h1 className="text-5xl md:text-7xl font-serif leading-tight">
                  {project.title}
                </h1>
              </div>
              <div className="flex gap-4">
                <button className="neu-raised p-4 rounded-2xl hover:neu-pressed transition-all">
                  <Github size={24} />
                </button>
                <button className="neu-convex px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:neu-pressed transition-all">
                  Live Demo <ExternalLink size={20} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="neu-raised rounded-[3rem] overflow-hidden aspect-[21/9] mb-20 p-4"
          >
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover"
              />
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-20">
            {/* Project Details */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-serif mb-6 italic">The Challenge</h2>
                <p className="text-xl text-brand-soft-black/70 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <Terminal size={20} className="text-brand-teal" /> Key Features
                  </h3>
                  <ul className="space-y-4">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-brand-soft-black/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <Database size={20} className="text-brand-teal" /> Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((t, i) => (
                      <span key={i} className="neu-pressed px-4 py-2 rounded-xl text-xs font-bold text-brand-soft-black/50">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Stats */}
            <div className="space-y-8">
              <div className="neu-raised p-10 rounded-[2.5rem] space-y-8">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-teal">Project Impact</h3>
                <div className="space-y-8">
                  {Object.entries(project.stats).map(([key, value], i) => (
                    <div key={i}>
                      <p className="text-xs font-bold uppercase tracking-widest opacity-40 mb-2">{key}</p>
                      <p className="text-3xl font-serif text-brand-soft-black">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="neu-pressed p-10 rounded-[2.5rem] bg-brand-soft-black text-brand-cream space-y-6">
                <Brain size={40} className="text-brand-lavender mb-4" />
                <h4 className="text-2xl font-serif italic">Need a similar solution?</h4>
                <p className="text-brand-cream/60 leading-relaxed">
                  I specialize in building intelligent, high-performance systems tailored to specific business needs.
                </p>
                <Link href="/#contact" className="inline-block pt-4 text-brand-lavender font-bold hover:underline">
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
