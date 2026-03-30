// Design: Midnight Craft — Bento grid layout, category filter, scroll animations
// Dynamic rendering from data array with React state filtering

import { useState, useEffect, useRef } from "react";
import { projects, projectCategories } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const sectionRef = useRef<HTMLElement>(null);

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    items?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filtered]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      aria-labelledby="projects-heading"
      className="py-24 relative overflow-hidden"
      style={{ background: "oklch(0.11 0.025 240)" }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-20" aria-hidden="true" />

      <div className="container relative z-10">
        {/* Section header */}
        <div className="relative mb-12 animate-on-scroll">
          <span className="section-number" aria-hidden="true">02</span>
          <div className="flex items-center gap-3 mb-3">
            <span className="cyan-line" aria-hidden="true" />
            <span
              className="text-xs font-medium tracking-widest uppercase"
              style={{
                color: "oklch(0.83 0.15 198)",
                fontFamily: "Fira Code, monospace",
              }}
            >
              Work
            </span>
          </div>
          <h2
            id="projects-heading"
            className="text-4xl sm:text-5xl font-bold"
            style={{ fontFamily: "Syne, sans-serif", color: "oklch(0.96 0.005 240)" }}
          >
            Featured Projects
          </h2>
          <p
            className="mt-3 text-base max-w-xl"
            style={{ color: "oklch(0.60 0.015 240)" }}
          >
            A selection of work spanning frontend applications, data platforms, and
            accessible web experiences.
          </p>
        </div>

        {/* Filter tabs */}
        <div
          className="flex flex-wrap gap-2 mb-10 animate-on-scroll"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {projectCategories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(cat.id)}
                className="px-4 py-2 rounded-sm text-sm font-medium transition-all duration-200"
                style={{
                  fontFamily: "Syne, sans-serif",
                  background: isActive
                    ? "oklch(0.83 0.15 198 / 0.15)"
                    : "oklch(0.16 0.025 240)",
                  border: `1px solid ${
                    isActive
                      ? "oklch(0.83 0.15 198 / 0.4)"
                      : "oklch(1 0 0 / 8%)"
                  }`,
                  color: isActive
                    ? "oklch(0.83 0.15 198)"
                    : "oklch(0.60 0.015 240)",
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Project grid — bento layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className={`animate-on-scroll ${
                // Featured projects span wider on large screens
                project.featured && i === 0
                  ? "lg:col-span-2"
                  : ""
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <ProjectCard project={project} featured={project.featured && i === 0} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div
            className="text-center py-16"
            style={{ color: "oklch(0.55 0.015 240)" }}
          >
            <p>No projects found in this category.</p>
          </div>
        )}

        {/* GitHub CTA */}
        <div className="mt-12 text-center animate-on-scroll">
          <a
            href="https://github.com/philipmag"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors animated-underline"
            style={{ color: "oklch(0.60 0.015 240)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "oklch(0.83 0.15 198)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "oklch(0.60 0.015 240)")
            }
          >
            View all repositories on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
