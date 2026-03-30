// Design: Midnight Craft — Sticky navbar with backdrop blur on scroll, cyan accent
// Responsive mobile menu toggle with smooth animation

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection observer for active section
  useEffect(() => {
    const sections = navLinks.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = useCallback((href: string) => {
    setMobileOpen(false);
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[oklch(0.11_0.025_240/0.92)] backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav
        className="container flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 group"
          aria-label="Joh Magok Kuerang — Back to top"
        >
          <span
            className="w-8 h-8 rounded-sm flex items-center justify-center text-xs font-bold font-mono"
            style={{
              background: "oklch(0.83 0.15 198 / 0.15)",
              border: "1px solid oklch(0.83 0.15 198 / 0.3)",
              color: "oklch(0.83 0.15 198)",
            }}
          >
            JM
          </span>
          <span
            className="text-sm font-semibold hidden sm:block"
            style={{ fontFamily: "Syne, sans-serif", color: "oklch(0.96 0.005 240)" }}
          >
            Joh Magok
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className={`nav-link animated-underline text-sm font-medium transition-colors ${
                  activeSection === link.href.slice(1)
                    ? "text-[oklch(0.83_0.15_198)]"
                    : ""
                }`}
                aria-current={activeSection === link.href.slice(1) ? "true" : undefined}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="mailto:philipsmagok@gmail.com"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-semibold transition-all duration-200"
            style={{
              background: "oklch(0.83 0.15 198 / 0.12)",
              border: "1px solid oklch(0.83 0.15 198 / 0.3)",
              color: "oklch(0.83 0.15 198)",
              fontFamily: "Syne, sans-serif",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "oklch(0.83 0.15 198 / 0.2)";
              (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.83 0.15 198 / 0.6)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "oklch(0.83 0.15 198 / 0.12)";
              (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.83 0.15 198 / 0.3)";
            }}
          >
            Hire Me
          </a>

          <button
            className="md:hidden p-2 rounded-sm transition-colors"
            style={{ color: "oklch(0.75 0.01 240)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation"
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          background: "oklch(0.13 0.025 240 / 0.98)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid oklch(1 0 0 / 8%)",
        }}
      >
        <ul className="container py-4 flex flex-col gap-1" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-3 py-2.5 rounded-sm text-sm font-medium transition-colors"
                style={{
                  color:
                    activeSection === link.href.slice(1)
                      ? "oklch(0.83 0.15 198)"
                      : "oklch(0.65 0.015 240)",
                  background:
                    activeSection === link.href.slice(1)
                      ? "oklch(0.83 0.15 198 / 0.08)"
                      : "transparent",
                }}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="mailto:philipsmagok@gmail.com"
              className="block px-3 py-2.5 rounded-sm text-sm font-semibold text-center"
              style={{
                background: "oklch(0.83 0.15 198 / 0.12)",
                border: "1px solid oklch(0.83 0.15 198 / 0.3)",
                color: "oklch(0.83 0.15 198)",
                fontFamily: "Syne, sans-serif",
              }}
              onClick={() => setMobileOpen(false)}
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
