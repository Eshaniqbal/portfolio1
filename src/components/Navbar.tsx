"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Briefcase, Sparkles, User, Layers, MessageCircle } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#", icon: Home },
  { name: "Exp", href: "#experience", icon: Briefcase },
  { name: "Services", href: "#services", icon: Sparkles },
  { name: "About", href: "#about", icon: User },
  { name: "Projects", href: "#projects", icon: Layers },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.replace("#", "")).filter(Boolean);
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top < 100) {
          setActiveSection(navLinks.find(l => l.href === `#${section}`)?.name || "Home");
          break;
        }
      }
      if (window.scrollY < 100) setActiveSection("Home");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop & Mobile Top Bar */}
      <nav
        className={`fixed top-4 sm:top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] sm:w-[90%] max-w-5xl`}
      >
        <div className={`px-4 sm:px-6 py-3 sm:py-4 rounded-2xl sm:rounded-full flex justify-between items-center transition-all duration-500 border ${
          scrolled 
            ? "bg-brand-dark/80 backdrop-blur-2xl border-white/10 py-2 sm:py-3 scale-95 shadow-[0_0_30px_rgba(0,0,0,0.5)]" 
            : "glass-card border-white/5 py-4 sm:py-5"
        }`}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="group flex items-center gap-2 sm:gap-3">
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold transition-all duration-700 ${
                scrolled ? "bg-white text-brand-dark" : "bg-brand-accent text-brand-dark group-hover:rotate-[360deg]"
              }`}>
                E
              </div>
              <span className={`font-syne font-bold text-base sm:text-lg tracking-tighter transition-colors ${
                scrolled ? "text-white" : "text-white/90"
              }`}>ESHAN IQBAL</span>
            </Link>
          </motion.div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all relative group ${
                  activeSection === link.name 
                    ? "text-brand-accent" 
                    : scrolled ? "text-white/70 hover:text-white" : "text-white/50 hover:text-brand-accent"
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] transition-all ${
                  activeSection === link.name ? "w-4 bg-brand-accent" : "w-0 group-hover:w-4 " + (scrolled ? "bg-white" : "bg-brand-accent")
                }`} />
              </Link>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <a 
              href="https://wa.me/919419403158"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-bold transition-all duration-300 flex items-center gap-2 ${
                scrolled 
                  ? "bg-brand-accent text-brand-dark hover:bg-white" 
                  : "bg-white text-brand-dark hover:bg-brand-accent"
              }`}
            >
              <span className="hidden sm:inline">Let's Talk</span>
              <MessageCircle size={16} />
            </a>
          </motion.div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <motion.div 
        initial={{ y: 100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.5 }}
        className="fixed bottom-8 left-1/2 z-50 md:hidden w-[auto] min-w-[280px]"
      >
        <div className="glass-card border-white/10 rounded-[2rem] p-1.5 flex justify-center items-center gap-1 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.name;
            return (
              <motion.div
                key={link.name}
                whileTap={{ scale: 0.9 }}
                className="relative"
              >
                <Link
                  href={link.href}
                  onClick={() => setActiveSection(link.name)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl transition-all duration-500 relative ${
                    isActive ? "text-brand-accent" : "text-white/40"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabMobile"
                      className="absolute inset-0 bg-brand-accent/10 rounded-2xl border border-brand-accent/20"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                  <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.span
                        initial={{ width: 0, opacity: 0, x: -5 }}
                        animate={{ width: "auto", opacity: 1, x: 0 }}
                        exit={{ width: 0, opacity: 0, x: -5 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="text-[10px] font-bold uppercase tracking-wider overflow-hidden whitespace-nowrap"
                      >
                        {link.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}
