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
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl transition-all duration-300`}
      >
        <div className={`px-4 py-3 border-[3px] border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex justify-between items-center ${
          scrolled ? "py-2" : "py-3"
        }`}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link href="/" className="group flex items-center gap-3">
              <div className="w-8 h-8 bg-nb-lime border-[3px] border-black flex items-center justify-center font-black text-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none transition-all">
                E
              </div>
              <span className="font-syne font-black text-lg tracking-tighter uppercase italic">ESHAN IQBAL</span>
            </Link>
          </motion.div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[10px] font-black uppercase tracking-widest transition-all relative group ${
                  activeSection === link.name ? "text-nb-purple" : "text-black hover:text-nb-pink"
                }`}
              >
                {link.name}
                {activeSection === link.name && (
                  <motion.div 
                    layoutId="navUnderline"
                    className="absolute -bottom-1 left-0 w-full h-1 bg-black"
                  />
                )}
              </Link>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <a 
              href="https://wa.me/919419403158"
              target="_blank"
              rel="noopener noreferrer"
              className="nb-button bg-nb-yellow text-xs px-4 py-2"
            >
              <span className="hidden sm:inline">Let's Talk</span>
              <MessageCircle size={16} />
            </a>
          </motion.div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-6 inset-x-0 z-50 md:hidden flex justify-center px-4">
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="bg-white border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-2 flex justify-around items-center relative w-full max-w-[340px]"
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.name;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.name)}
                className="relative p-4 z-10"
              >
                {isActive && (
                  <motion.div
                    layoutId="mobileNavActive"
                    className="absolute inset-0 bg-nb-lime border-[2px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <motion.div
                  animate={{ 
                    scale: isActive ? 1.2 : 1,
                    rotate: isActive ? [0, -10, 10, 0] : 0
                  }}
                  className="relative z-20"
                >
                  <Icon 
                    size={22} 
                    strokeWidth={isActive ? 3 : 2}
                    className={isActive ? "text-black" : "text-black/40"} 
                  />
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </>
  );
}

