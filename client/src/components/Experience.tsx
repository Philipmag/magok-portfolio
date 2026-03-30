// Design: Midnight Craft — Vertical timeline with cyan left border,
// role cards, and certifications grid

import { useEffect, useRef } from "react";
import { Briefcase, GraduationCap, Award, Star } from "lucide-react";
import { experiences, education, certifications } from "@/data/experience";

const typeIcons: Record<string, React.ReactNode> = {
  work: <Briefcase size={14} />,
  capstone: <Star size={14} />,
  education: <GraduationCap size={14} />,
};

const certTypeColors: Record<string, string> = {
  scholarship: "oklch(0.83 0.15 198)",
  award: "oklch(0.80 0.18 55)",
  certificate: "oklch(0.70 0.15 145)",
};

export default function Experience() {
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
      id="experience"
      ref={sectionRef}
      aria-labelledby="experience-heading"
      className="py-24 relative overflow-hidden"
      style={{ background: "oklch(0.11 0.025 240)" }}
    >
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
          <span className="section-number" aria-hidden="true">04</span>
          <div className="flex items-center gap-3 mb-3">
            <span className="cyan-line" aria-hidden="true" />
            <span
              className="text-xs font-medium tracking-widest uppercase"
              style={{
                color: "oklch(0.83 0.15 198)",
                fontFamily: "Fira Code, monospace",
              }}
            >
              Background
            </span>
          </div>
          <h2
            id="experience-heading"
            className="text-4xl sm:text-5xl font-bold"
            style={{ fontFamily: "Syne, sans-serif", color: "oklch(0.96 0.005 240)" }}
          >
            Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Timeline — left 2/3 */}
          <div className="lg:col-span-2">
            <ol
              className="relative"
              aria-label="Work experience timeline"
              style={{ borderLeft: "1px solid oklch(0.83 0.15 198 / 0.2)" }}
            >
              {experiences.map((exp, i) => (
                <li
                  key={exp.id}
                  className="animate-on-scroll relative pl-8 pb-10 last:pb-0"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute -left-[9px] top-1 w-4 h-4 rounded-full flex items-center justify-center"
                    style={{
                      background: "oklch(0.11 0.025 240)",
                      border: "2px solid oklch(0.83 0.15 198)",
                    }}
                    aria-hidden="true"
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "oklch(0.83 0.15 198)" }}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className="card-hover rounded-lg p-5"
                    style={{ background: "oklch(0.16 0.025 240)" }}
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs"
                            style={{
                              background: "oklch(0.83 0.15 198 / 0.1)",
                              color: "oklch(0.83 0.15 198)",
                              fontFamily: "Fira Code, monospace",
                            }}
                          >
                            {typeIcons[exp.type]}
                            {exp.type === "capstone" ? "Capstone" : "Role"}
                          </span>
                        </div>
                        <h3
                          className="text-base font-bold"
                          style={{
                            fontFamily: "Syne, sans-serif",
                            color: "oklch(0.96 0.005 240)",
                          }}
                        >
                          {exp.role}
                        </h3>
                        <p
                          className="text-sm mt-0.5"
                          style={{ color: "oklch(0.65 0.015 240)" }}
                        >
                          {exp.organization}
                        </p>
                      </div>
                      <span
                        className="text-xs shrink-0"
                        style={{
                          color: "oklch(0.50 0.015 240)",
                          fontFamily: "Fira Code, monospace",
                        }}
                      >
                        {exp.period}
                      </span>
                    </div>

                    {/* Highlights */}
                    <ul
                      className="flex flex-col gap-2"
                      aria-label={`Key achievements at ${exp.organization}`}
                    >
                      {exp.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm leading-relaxed"
                          style={{ color: "oklch(0.60 0.015 240)" }}
                        >
                          <span
                            className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                            style={{ background: "oklch(0.83 0.15 198)" }}
                            aria-hidden="true"
                          />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Skills used */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {exp.skills.map((s) => (
                        <span key={s} className="tech-badge">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Right column: Education + Certifications */}
          <div className="flex flex-col gap-6">
            {/* Education */}
            <div
              className="animate-on-scroll card-hover rounded-lg p-5"
              style={{ background: "oklch(0.16 0.025 240)" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="w-8 h-8 rounded-sm flex items-center justify-center"
                  style={{
                    background: "oklch(0.83 0.15 198 / 0.1)",
                    border: "1px solid oklch(0.83 0.15 198 / 0.2)",
                    color: "oklch(0.83 0.15 198)",
                  }}
                  aria-hidden="true"
                >
                  <GraduationCap size={16} />
                </span>
                <h3
                  className="text-sm font-bold"
                  style={{
                    fontFamily: "Syne, sans-serif",
                    color: "oklch(0.96 0.005 240)",
                  }}
                >
                  Education
                </h3>
              </div>

              <p
                className="text-sm font-semibold leading-snug mb-1"
                style={{ color: "oklch(0.90 0.005 240)", fontFamily: "Syne, sans-serif" }}
              >
                {education.degree}
              </p>
              <p className="text-sm mb-0.5" style={{ color: "oklch(0.65 0.015 240)" }}>
                {education.institution}
              </p>
              <p
                className="text-xs mb-3"
                style={{
                  color: "oklch(0.50 0.015 240)",
                  fontFamily: "Fira Code, monospace",
                }}
              >
                {education.period} · GPA {education.gpa}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {education.coursework.map((c) => (
                  <span
                    key={c}
                    className="text-xs px-2 py-0.5 rounded"
                    style={{
                      background: "oklch(0.20 0.025 240)",
                      color: "oklch(0.55 0.015 240)",
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications & Honours */}
            <div
              className="animate-on-scroll card-hover rounded-lg p-5"
              style={{ background: "oklch(0.16 0.025 240)", transitionDelay: "100ms" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="w-8 h-8 rounded-sm flex items-center justify-center"
                  style={{
                    background: "oklch(0.80 0.18 55 / 0.1)",
                    border: "1px solid oklch(0.80 0.18 55 / 0.2)",
                    color: "oklch(0.80 0.18 55)",
                  }}
                  aria-hidden="true"
                >
                  <Award size={16} />
                </span>
                <h3
                  className="text-sm font-bold"
                  style={{
                    fontFamily: "Syne, sans-serif",
                    color: "oklch(0.96 0.005 240)",
                  }}
                >
                  Honours & Awards
                </h3>
              </div>

              <ul className="flex flex-col gap-3" aria-label="Certifications and honours">
                {certifications.map((cert, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5"
                  >
                    <span
                      className="mt-0.5 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: certTypeColors[cert.type] }}
                      aria-hidden="true"
                    />
                    <div>
                      <p
                        className="text-sm leading-snug"
                        style={{ color: "oklch(0.80 0.005 240)" }}
                      >
                        {cert.title}
                      </p>
                      <p
                        className="text-xs mt-0.5"
                        style={{
                          color: "oklch(0.50 0.015 240)",
                          fontFamily: "Fira Code, monospace",
                        }}
                      >
                        {cert.year}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
