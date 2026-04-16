"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="pt-32 pb-12 bg-brand-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-32 mb-32">
          <div>
            <h3 className="text-6xl md:text-9xl font-serif text-white leading-[0.85] tracking-tighter mb-12">
              Let's craft <br />
              <span className="italic accent-gradient">the future.</span>
            </h3>
            <p className="text-xl text-white/40 max-w-md mb-16 font-light leading-relaxed">
              Open for collaborations and interesting conversations.
            </p>
            
            <motion.a
              href="mailto:eshaniqbal9090@gmail.com"
              whileHover={{ x: 10 }}
              className="inline-flex items-center gap-6 text-2xl md:text-4xl font-serif text-white hover:text-brand-accent transition-all group"
            >
              eshaniqbal9090@gmail.com
              <ArrowUpRight size={32} className="opacity-20 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          </div>

          <div className="flex flex-col justify-between">
            <div className="grid sm:grid-cols-2 gap-16 mb-20">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 mb-8">Contact</h4>
                <div className="space-y-4">
                  <a href="tel:+919103448683" className="block text-lg text-white/60 hover:text-brand-accent transition-colors">
                    +91-9103448683
                  </a>
                  <p className="text-lg text-white/60">Bangalore, KA</p>
                </div>
              </div>

              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 mb-8">Social</h4>
                <div className="flex gap-4">
                  {[
                    { icon: <Github size={20} />, href: "https://github.com/Eshaniqbal" },
                    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/eshan-iqbal-a8678b252/" }
                  ].map((social, i) => (
                    <a key={i} href={social.href} target="_blank" className="w-14 h-14 glass-card rounded-2xl flex items-center justify-center hover:bg-brand-accent hover:text-brand-dark transition-all">
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass-card p-12 rounded-[3rem] relative overflow-hidden group">
               <div className="flex justify-between items-end relative z-10">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 mb-2">Available for</p>
                    <p className="text-2xl font-serif italic text-white">Full-time roles</p>
                  </div>
                  <div className="text-right">
                    <div className="text-5xl font-bold text-brand-accent leading-none mb-1">2026</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/20">Portfolio Edition</div>
                  </div>
               </div>
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 blur-3xl rounded-full" />
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">
            © {currentYear} Eshan Iqbal. Crafted with precision.
          </p>
          <div className="flex gap-12">
            <a href="#" className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
      
      {/* Background Accent */}
      <div className="absolute -bottom-64 -left-64 w-[600px] h-[600px] bg-brand-accent/5 blur-[150px] rounded-full pointer-events-none" />
    </footer>
  );
}
