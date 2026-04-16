import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-brand-teal selection:text-brand-cream">
      <Navbar />
      <Hero />
      <Experience />
      <Services />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}

