"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="pt-32 pb-12 bg-nb-cream relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 mb-32">
          <div>
            <h3 className="text-3xl md:text-7xl font-black uppercase leading-[0.8] tracking-tighter mb-12 break-words">
              Let's craft <br />
              <span className="text-nb-purple drop-shadow-[6px_6px_0px_#000]">the future.</span>
            </h3>
            <p className="text-xl font-bold max-w-md mb-16 leading-tight">
              Open for collaborations and interesting conversations.
            </p>
            
            <motion.a
              href="mailto:eshaniqbal9090@gmail.com"
              whileHover={{ x: 10 }}
              className="inline-flex items-center gap-6 text-xl md:text-3xl font-black uppercase text-black hover:text-nb-pink transition-all group break-all"
            >
              Email --
              <div className="w-16 h-16 bg-black text-white flex items-center justify-center border-[3px] border-black group-hover:bg-nb-pink group-hover:text-black transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] shrink-0">
                <ArrowUpRight size={40} strokeWidth={3} />
              </div>
            </motion.a>
          </div>

          <div className="flex flex-col justify-between">
            <div className="grid sm:grid-cols-2 gap-16 mb-20">
              <div>
                <h4 className="nb-tag bg-nb-yellow mb-8 w-fit">Contact</h4>
                <div className="space-y-4">
                  <a href="tel:+919103448683" className="block text-xl font-black hover:text-nb-lime transition-colors">
                    +91-9103448683
                  </a>
                  <p className="text-xl font-black">Bangalore, KA</p>
                </div>
              </div>

              <div>
                <h4 className="nb-tag bg-nb-pink mb-8 w-fit">Social</h4>
                <div className="flex gap-6">
                  {[
                    { icon: <Github size={28} />, href: "https://github.com/Eshaniqbal", color: "bg-nb-lime" },
                    { icon: <Linkedin size={28} />, href: "https://www.linkedin.com/in/eshan-iqbal-a8678b252/", color: "bg-nb-blue" }
                  ].map((social, i) => (
                    <a 
                      key={i} 
                      href={social.href} 
                      target="_blank" 
                      className={`w-16 h-16 border-[3px] border-black flex items-center justify-center ${social.color} shadow-[4px_4px_0px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#000] transition-all`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white border-[4px] border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group">
               <div className="flex justify-between items-end relative z-10">
                  <div>
                    <p className="font-black text-xs uppercase tracking-widest mb-4 opacity-40">Available for</p>
                    <p className="text-2xl font-black uppercase">Full-time roles</p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-black text-nb-purple leading-none mb-1 drop-shadow-[3px_3px_0px_#000]">2026</div>
                    <div className="font-black text-xs uppercase tracking-widest opacity-40">Portfolio Edition</div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t-[3px] border-black flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="font-black text-xs uppercase tracking-widest">
            © {currentYear} Eshan Iqbal. Built with Brutalism.
          </p>
          <div className="flex gap-12">
            <a href="#" className="font-black text-xs uppercase tracking-widest hover:text-nb-pink transition-colors">Privacy</a>
            <a href="#" className="font-black text-xs uppercase tracking-widest hover:text-nb-pink transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

