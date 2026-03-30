// Design: Midnight Craft — Two-column layout with generated about visual,
// personal story, and career goals

import { useEffect, useRef } from "react";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/110291972/6FpJWqmAcyACmMchXZeDxb/about-visual-auXMiHfv2fQY53CqVkpM7j.webp";

export default function About() {
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
      id="about"
      ref={sectionRef}
      aria-labelledby="about-heading"
      className="py-24 relative overflow-hidden"
      style={{ background: "oklch(0.13 0.025 240)" }}
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image column */}
          <div className="animate-on-scroll order-2 lg:order-1">
            <div className="relative max-w-sm mx-auto lg:mx-0">
              {/* Decorative border offset */}
              <div
                className="absolute -top-3 -left-3 w-full h-full rounded-lg"
                style={{ border: "1px solid oklch(0.83 0.15 198 / 0.2)" }}
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-3 -right-3 w-full h-full rounded-lg"
                style={{ border: "1px solid oklch(0.83 0.15 198 / 0.1)" }}
                aria-hidden="true"
              />
              <img
                src={ABOUT_IMG}
                alt="Abstract digital representation of a developer — glowing network nodes forming a human silhouette"
                className="relative z-10 w-full rounded-lg"
                style={{ border: "1px solid oklch(0.83 0.15 198 / 0.15)" }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Text column */}
          <div className="animate-on-scroll order-1 lg:order-2" style={{ transitionDelay: "150ms" }}>
            <div className="relative mb-8">
              <span className="section-number" aria-hidden="true">05</span>
              <div className="flex items-center gap-3 mb-3">
                <span className="cyan-line" aria-hidden="true" />
                <span
                  className="text-xs font-medium tracking-widest uppercase"
                  style={{
                    color: "oklch(0.83 0.15 198)",
                    fontFamily: "Fira Code, monospace",
                  }}
                >
                  About
                </span>
              </div>
              <h2
                id="about-heading"
                className="text-4xl sm:text-5xl font-bold"
                style={{ fontFamily: "Syne, sans-serif", color: "oklch(0.96 0.005 240)" }}
              >
                The Story
              </h2>
            </div>

            <div className="flex flex-col gap-4 text-base leading-relaxed" style={{ color: "oklch(0.62 0.015 240)" }}>
              <p>
                I'm a Computer Science and Business Administration student at Trent University,
                Peterborough, where I maintain a 3.3+ GPA while building real-world web applications
                that solve genuine problems. My path into frontend development started with a simple
                curiosity: how do you turn complex data into something people can actually understand
                and use?
              </p>
              <p>
                That question led me to React, REST APIs, and the craft of accessible design. At
                Trent's School of Education, I built interfaces managing 500+ confidential records
                and automated workflows that cut processing time by 40%. Through the IMIX Data
                Analytics Capstone at the University of Toronto, I learned to translate raw data
                into strategic insights for senior stakeholders.
              </p>
              <p>
                My Cybersecurity Awareness Platform — built for seniors with varying technical
                abilities — won the 2025 Impact Microgrant. That project taught me that the best
                interfaces are the ones that disappear: they just work, for everyone.
              </p>
              <p>
                I'm currently looking for frontend engineering roles where I can contribute to
                teams building scalable, accessible products. I bring strong React fundamentals,
                a data-informed approach to UI decisions, and a genuine commitment to inclusive
                design.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { label: "Accessibility First", desc: "WCAG 2.1 compliance in every build" },
                { label: "Clean Architecture", desc: "Component-based, scalable code" },
                { label: "Data-Informed", desc: "Decisions backed by evidence" },
                { label: "Continuous Learning", desc: "AI tools + modern tooling" },
              ].map((v) => (
                <div
                  key={v.label}
                  className="p-3 rounded-sm"
                  style={{
                    background: "oklch(0.16 0.025 240)",
                    border: "1px solid oklch(1 0 0 / 6%)",
                  }}
                >
                  <p
                    className="text-sm font-semibold mb-0.5"
                    style={{
                      fontFamily: "Syne, sans-serif",
                      color: "oklch(0.83 0.15 198)",
                    }}
                  >
                    {v.label}
                  </p>
                  <p className="text-xs" style={{ color: "oklch(0.55 0.015 240)" }}>
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
