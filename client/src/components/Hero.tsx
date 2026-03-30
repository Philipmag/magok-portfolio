// Design: Midnight Craft — Full-viewport hero with background image, left-aligned text,
// staggered entrance animations, and floating code snippet decoration

import { useEffect, useRef } from "react";
import { Github, Linkedin, ArrowDown, ExternalLink } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/110291972/6FpJWqmAcyACmMchXZeDxb/hero-bg-WJ3UoAutqs3oyzFAPPcjAe.webp";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = containerRef.current?.querySelectorAll<HTMLElement>(".hero-item");
    if (!items) return;
    items.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 150 + i * 120);
    });
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      aria-label="Hero — Introduction"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "oklch(0.11 0.025 240)" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          opacity: 0.35,
        }}
        role="presentation"
        aria-hidden="true"
      />

      {/* Gradient overlay — stronger at bottom */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.11 0.025 240 / 0.3) 0%, oklch(0.11 0.025 240 / 0.6) 60%, oklch(0.11 0.025 240) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Dot grid texture */}
      <div className="absolute inset-0 dot-grid opacity-40" aria-hidden="true" />

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16" ref={containerRef}>
        <div className="max-w-3xl">
          {/* Availability badge */}
          <div className="hero-item mb-6 inline-flex items-center gap-2">
            <span
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
              style={{
                background: "oklch(0.83 0.15 198 / 0.1)",
                border: "1px solid oklch(0.83 0.15 198 / 0.25)",
                color: "oklch(0.83 0.15 198)",
                fontFamily: "Fira Code, monospace",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "oklch(0.83 0.15 198)" }}
              />
              Open to opportunities
            </span>
          </div>

          {/* Name */}
          <h1
            className="hero-item text-5xl sm:text-6xl lg:text-7xl font-bold leading-none tracking-tight mb-4"
            style={{ fontFamily: "Syne, sans-serif", color: "oklch(0.96 0.005 240)" }}
          >
            Joh Magok
            <br />
            <span style={{ color: "oklch(0.83 0.15 198)" }}>Kuerang</span>
          </h1>

          {/* Title */}
          <p
            className="hero-item text-lg sm:text-xl font-medium mb-4"
            style={{ color: "oklch(0.65 0.015 240)", fontFamily: "Syne, sans-serif" }}
          >
            Frontend Developer & Computer Science Student
          </p>

          {/* Value proposition */}
          <p
            className="hero-item text-base sm:text-lg leading-relaxed max-w-xl mb-8"
            style={{ color: "oklch(0.60 0.015 240)" }}
          >
            Building accessible, scalable web applications with React and modern JavaScript.
            Focused on clean component architecture, real-time data interfaces, and
            inclusive design that works for everyone.
          </p>

          {/* CTA buttons */}
          <div className="hero-item flex flex-wrap items-center gap-3 mb-10">
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-semibold transition-all duration-200"
              style={{
                background: "oklch(0.83 0.15 198)",
                color: "oklch(0.10 0.02 240)",
                fontFamily: "Syne, sans-serif",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "oklch(0.88 0.15 198)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 24px oklch(0.83 0.15 198 / 0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "oklch(0.83 0.15 198)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              View Projects
              <ArrowDown size={15} />
            </button>

            <a
              href="https://github.com/philipmag"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-semibold transition-all duration-200"
              style={{
                background: "transparent",
                border: "1px solid oklch(1 0 0 / 15%)",
                color: "oklch(0.75 0.01 240)",
                fontFamily: "Syne, sans-serif",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "oklch(0.83 0.15 198 / 0.4)";
                (e.currentTarget as HTMLElement).style.color = "oklch(0.96 0.005 240)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "oklch(1 0 0 / 15%)";
                (e.currentTarget as HTMLElement).style.color = "oklch(0.75 0.01 240)";
              }}
            >
              <Github size={15} />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/joh-magok"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-semibold transition-all duration-200"
              style={{
                background: "transparent",
                border: "1px solid oklch(1 0 0 / 15%)",
                color: "oklch(0.75 0.01 240)",
                fontFamily: "Syne, sans-serif",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "oklch(0.83 0.15 198 / 0.4)";
                (e.currentTarget as HTMLElement).style.color = "oklch(0.96 0.005 240)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "oklch(1 0 0 / 15%)";
                (e.currentTarget as HTMLElement).style.color = "oklch(0.75 0.01 240)";
              }}
            >
              <Linkedin size={15} />
              LinkedIn
            </a>
          </div>

          {/* Quick stats */}
          <div
            className="hero-item flex flex-wrap gap-6 pt-6"
            style={{ borderTop: "1px solid oklch(1 0 0 / 8%)" }}
          >
            {[
              { value: "5+", label: "Projects Built" },
              { value: "WCAG 2.1", label: "Accessibility Standard" },
              { value: "3.3+ GPA", label: "Computer Science" },
              { value: "2025", label: "Microgrant Winner" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <span
                  className="text-xl font-bold"
                  style={{
                    fontFamily: "Syne, sans-serif",
                    color: "oklch(0.83 0.15 198)",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-xs"
                  style={{ color: "oklch(0.55 0.015 240)" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span
          className="text-xs tracking-widest uppercase"
          style={{
            color: "oklch(0.45 0.015 240)",
            fontFamily: "Fira Code, monospace",
          }}
        >
          scroll
        </span>
        <div
          className="w-px h-8 animate-pulse"
          style={{ background: "oklch(0.83 0.15 198 / 0.3)" }}
        />
      </div>
    </section>
  );
}
