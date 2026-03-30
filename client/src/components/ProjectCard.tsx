// Design: Midnight Craft — Bento-style project card with hover glow border,
// image preview, tech badges, and external links

import { Github, ExternalLink, Award } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      className="card-hover rounded-lg overflow-hidden flex flex-col h-full"
      style={{ background: "oklch(0.16 0.025 240)" }}
      aria-label={`Project: ${project.title}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 40%, oklch(0.16 0.025 240) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Badge */}
        {project.badge && (
          <div className="absolute top-3 left-3">
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
              style={{
                background: "oklch(0.83 0.15 198 / 0.15)",
                border: "1px solid oklch(0.83 0.15 198 / 0.4)",
                color: "oklch(0.83 0.15 198)",
                backdropFilter: "blur(8px)",
                fontFamily: "Syne, sans-serif",
              }}
            >
              <Award size={11} />
              {project.badge}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Period */}
        <span
          className="text-xs"
          style={{
            color: "oklch(0.55 0.015 240)",
            fontFamily: "Fira Code, monospace",
          }}
        >
          {project.period}
        </span>

        {/* Title */}
        <h3
          className="text-lg font-bold leading-snug"
          style={{
            fontFamily: "Syne, sans-serif",
            color: "oklch(0.96 0.005 240)",
          }}
        >
          {project.title}
        </h3>

        {/* Summary */}
        <p
          className="text-sm leading-relaxed flex-1"
          style={{ color: "oklch(0.60 0.015 240)" }}
        >
          {project.summary}
        </p>

        {/* Impact highlights */}
        <ul className="flex flex-col gap-1.5" aria-label="Key achievements">
          {project.impact.slice(0, 2).map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-xs leading-relaxed"
              style={{ color: "oklch(0.55 0.015 240)" }}
            >
              <span
                className="mt-1 w-1 h-1 rounded-full shrink-0"
                style={{ background: "oklch(0.83 0.15 198)" }}
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 pt-1" aria-label="Technologies used">
          {project.techStack.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div
          className="flex items-center gap-3 pt-2"
          style={{ borderTop: "1px solid oklch(1 0 0 / 6%)" }}
        >
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors animated-underline"
            style={{ color: "oklch(0.60 0.015 240)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "oklch(0.96 0.005 240)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "oklch(0.60 0.015 240)")
            }
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github size={13} />
            Code
          </a>
          {project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors animated-underline"
              style={{ color: "oklch(0.83 0.15 198)" }}
              aria-label={`View live demo of ${project.title}`}
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
