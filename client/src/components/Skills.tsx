// Design: Midnight Craft — Skills grouped by category with glowing pill badges
// Scroll-triggered entrance animations, icon-labeled categories

import { useEffect, useRef } from "react";
import { Monitor, Code, Layers, Brain } from "lucide-react";
import { skillCategories } from "@/data/skills";

const iconMap: Record<string, React.ReactNode> = {
  monitor: <Monitor size={18} />,
  code: <Code size={18} />,
  layers: <Layers size={18} />,
  brain: <Brain size={18} />,
};

const levelColors: Record<string, string> = {
  expert: "oklch(0.83 0.15 198)",
  proficient: "oklch(0.70 0.10 198)",
  familiar: "oklch(0.50 0.06 198)",
};

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".animate-on-scroll").forEach((el) =>
      observer.observe(el)
    );
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      aria-labelledby="skills-heading"
      className="py-24 relative overflow-hidden"
      style={{ background: "oklch(0.13 0.025 240)" }}
    >
      {/* Subtle gradient divider at top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, oklch(0.83 0.15 198 / 0.2), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        {/* Section header */}
        <div className="relative mb-12 animate-on-scroll">
          <span className="section-number" aria-hidden="true">03</span>
          <div className="flex items-center gap-3 mb-3">
            <span className="cyan-line" aria-hidden="true" />
            <span
              className="text-xs font-medium tracking-widest uppercase"
              style={{
                color: "oklch(0.83 0.15 198)",
                fontFamily: "Fira Code, monospace",
              }}
            >
              Expertise
            </span>
          </div>
          <h2
            id="skills-heading"
            className="text-4xl sm:text-5xl font-bold"
            style={{ fontFamily: "Syne, sans-serif", color: "oklch(0.96 0.005 240)" }}
          >
            Technical Skills
          </h2>
          <p
            className="mt-3 text-base max-w-xl"
            style={{ color: "oklch(0.60 0.015 240)" }}
          >
            A full-stack of tools and technologies I use to build, ship, and maintain
            production-quality web applications.
          </p>
        </div>

        {/* Skill categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skillCategories.map((category, i) => (
            <div
              key={category.id}
              className="animate-on-scroll card-hover rounded-lg p-6"
              style={{
                background: "oklch(0.16 0.025 240)",
                transitionDelay: `${i * 100}ms`,
              }}
              aria-labelledby={`skill-cat-${category.id}`}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="w-9 h-9 rounded-sm flex items-center justify-center shrink-0"
                  style={{
                    background: "oklch(0.83 0.15 198 / 0.1)",
                    border: "1px solid oklch(0.83 0.15 198 / 0.2)",
                    color: "oklch(0.83 0.15 198)",
                  }}
                  aria-hidden="true"
                >
                  {iconMap[category.icon]}
                </span>
                <h3
                  id={`skill-cat-${category.id}`}
                  className="text-base font-bold"
                  style={{
                    fontFamily: "Syne, sans-serif",
                    color: "oklch(0.96 0.005 240)",
                  }}
                >
                  {category.label}
                </h3>
              </div>

              {/* Skills list */}
              <div
                className="flex flex-wrap gap-2"
                role="list"
                aria-label={`${category.label} skills`}
              >
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    role="listitem"
                    className="skill-badge"
                    title={`Proficiency: ${skill.level}`}
                    style={{
                      borderColor: `${levelColors[skill.level]}22`,
                    }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div
          className="mt-8 flex flex-wrap items-center gap-5 animate-on-scroll"
          aria-label="Proficiency legend"
        >
          <span
            className="text-xs"
            style={{ color: "oklch(0.50 0.015 240)", fontFamily: "Fira Code, monospace" }}
          >
            Hover badges to explore
          </span>
        </div>
      </div>
    </section>
  );
}
