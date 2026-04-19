"use client";

import { motion } from "framer-motion";

export default function GridBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-nb-cream">
      {/* Light Yellow Dot Grid */}
      <div 
        className="absolute inset-0 opacity-[0.25]" 
        style={{
          backgroundImage: `radial-gradient(#facc15 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      />

      {/* Static Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.1]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Animated Moving Grid */}
      <motion.div 
        initial={{ backgroundPosition: "0px 0px" }}
        animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute inset-0 opacity-[0.05]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-multiply" 
        style={{
          backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")`,
          filter: 'contrast(150%) brightness(100%)'
        }}
      />
    </div>
  );
}
