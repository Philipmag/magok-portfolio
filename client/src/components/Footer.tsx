// Design: Midnight Craft — Minimal footer with nav links and copyright

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      role="contentinfo"
      className="py-10"
      style={{
        background: "oklch(0.09 0.02 240)",
        borderTop: "1px solid oklch(1 0 0 / 6%)",
      }}
    >
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + copyright */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span
              className="text-base font-bold"
              style={{ fontFamily: "Syne, sans-serif", color: "oklch(0.96 0.005 240)" }}
            >
              Joh Magok Kuerang
            </span>
            <span
              className="text-xs"
              style={{ color: "oklch(0.45 0.015 240)", fontFamily: "Fira Code, monospace" }}
            >
              © {year} · Frontend Developer · Peterborough, ON
            </span>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-5" role="list">
              {["projects", "skills", "experience", "about", "contact"].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="text-xs capitalize transition-colors"
                    style={{ color: "oklch(0.50 0.015 240)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "oklch(0.83 0.15 198)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "oklch(0.50 0.015 240)")
                    }
                  >
                    {id}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
              { href: "https://github.com/philipmag", icon: <Github size={16} />, label: "GitHub" },
              { href: "https://linkedin.com/in/joh-magok", icon: <Linkedin size={16} />, label: "LinkedIn" },
              { href: "mailto:philipsmagok@gmail.com", icon: <Mail size={16} />, label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 rounded-sm flex items-center justify-center transition-all duration-200"
                style={{
                  background: "oklch(0.16 0.025 240)",
                  border: "1px solid oklch(1 0 0 / 8%)",
                  color: "oklch(0.55 0.015 240)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "oklch(0.83 0.15 198 / 0.4)";
                  (e.currentTarget as HTMLElement).style.color = "oklch(0.83 0.15 198)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "oklch(1 0 0 / 8%)";
                  (e.currentTarget as HTMLElement).style.color = "oklch(0.55 0.015 240)";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
