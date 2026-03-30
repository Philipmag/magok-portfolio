// Design: Midnight Craft — Single-page portfolio assembling all sections
// Navbar + Hero + Projects + Skills + Experience + About + Contact + Footer

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.11 0.025 240)" }}>
      {/* Skip to main content for accessibility */}
      <a
        href="#projects"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-sm focus:text-sm focus:font-semibold"
        style={{
          background: "oklch(0.83 0.15 198)",
          color: "oklch(0.10 0.02 240)",
        }}
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
