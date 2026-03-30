// Design: Midnight Craft — Contact section with email, GitHub, LinkedIn links
// and a simple contact form with accessible labels

import { useEffect, useRef, useState } from "react";
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Compose mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:philipsmagok@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const inputStyle = {
    background: "oklch(0.16 0.025 240)",
    border: "1px solid oklch(1 0 0 / 10%)",
    color: "oklch(0.96 0.005 240)",
    borderRadius: "0.375rem",
    padding: "0.75rem 1rem",
    fontSize: "0.875rem",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s ease",
    fontFamily: "Inter, sans-serif",
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      aria-labelledby="contact-heading"
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

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-20" aria-hidden="true" />

      <div className="container relative z-10">
        {/* Section header */}
        <div className="relative mb-12 animate-on-scroll text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="cyan-line" aria-hidden="true" />
            <span
              className="text-xs font-medium tracking-widest uppercase"
              style={{
                color: "oklch(0.83 0.15 198)",
                fontFamily: "Fira Code, monospace",
              }}
            >
              Get in Touch
            </span>
            <span className="cyan-line" aria-hidden="true" />
          </div>
          <h2
            id="contact-heading"
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: "Syne, sans-serif", color: "oklch(0.96 0.005 240)" }}
          >
            Let's Work Together
          </h2>
          <p
            className="text-base max-w-lg mx-auto"
            style={{ color: "oklch(0.60 0.015 240)" }}
          >
            I'm actively looking for frontend engineering opportunities. Whether you have a
            role, a project, or just want to connect — I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Contact info */}
          <div className="animate-on-scroll flex flex-col gap-5">
            {/* Direct links */}
            {[
              {
                icon: <Mail size={18} />,
                label: "Email",
                value: "philipsmagok@gmail.com",
                href: "mailto:philipsmagok@gmail.com",
              },
              {
                icon: <Github size={18} />,
                label: "GitHub",
                value: "github.com/philipmag",
                href: "https://github.com/philipmag",
              },
              {
                icon: <Linkedin size={18} />,
                label: "LinkedIn",
                value: "linkedin.com/in/joh-magok",
                href: "https://linkedin.com/in/joh-magok",
              },
              {
                icon: <MapPin size={18} />,
                label: "Location",
                value: "Peterborough, ON, Canada",
                href: null,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="card-hover flex items-center gap-4 p-4 rounded-lg"
                style={{ background: "oklch(0.16 0.025 240)" }}
              >
                <span
                  className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0"
                  style={{
                    background: "oklch(0.83 0.15 198 / 0.1)",
                    border: "1px solid oklch(0.83 0.15 198 / 0.2)",
                    color: "oklch(0.83 0.15 198)",
                  }}
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                <div>
                  <p
                    className="text-xs mb-0.5"
                    style={{ color: "oklch(0.50 0.015 240)", fontFamily: "Fira Code, monospace" }}
                  >
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="text-sm font-medium animated-underline"
                      style={{ color: "oklch(0.83 0.15 198)" }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium" style={{ color: "oklch(0.75 0.01 240)" }}>
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <div
            className="animate-on-scroll card-hover rounded-lg p-6"
            style={{ background: "oklch(0.16 0.025 240)", transitionDelay: "100ms" }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-8 text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{
                    background: "oklch(0.83 0.15 198 / 0.1)",
                    border: "1px solid oklch(0.83 0.15 198 / 0.3)",
                  }}
                >
                  <Send size={22} style={{ color: "oklch(0.83 0.15 198)" }} />
                </div>
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: "Syne, sans-serif", color: "oklch(0.96 0.005 240)" }}
                >
                  Message Ready
                </h3>
                <p className="text-sm" style={{ color: "oklch(0.60 0.015 240)" }}>
                  Your email client should have opened. If not, reach me directly at{" "}
                  <a
                    href="mailto:philipsmagok@gmail.com"
                    style={{ color: "oklch(0.83 0.15 198)" }}
                  >
                    philipsmagok@gmail.com
                  </a>
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm"
                  style={{ color: "oklch(0.60 0.015 240)" }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <h3
                  className="text-base font-bold mb-5"
                  style={{ fontFamily: "Syne, sans-serif", color: "oklch(0.96 0.005 240)" }}
                >
                  Send a Message
                </h3>

                <div className="flex flex-col gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium mb-1.5"
                      style={{ color: "oklch(0.65 0.015 240)" }}
                    >
                      Your Name <span aria-hidden="true" style={{ color: "oklch(0.83 0.15 198)" }}>*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Jane Smith"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) =>
                        ((e.target as HTMLElement).style.borderColor =
                          "oklch(0.83 0.15 198 / 0.5)")
                      }
                      onBlur={(e) =>
                        ((e.target as HTMLElement).style.borderColor = "oklch(1 0 0 / 10%)")
                      }
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium mb-1.5"
                      style={{ color: "oklch(0.65 0.015 240)" }}
                    >
                      Email Address <span aria-hidden="true" style={{ color: "oklch(0.83 0.15 198)" }}>*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="jane@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) =>
                        ((e.target as HTMLElement).style.borderColor =
                          "oklch(0.83 0.15 198 / 0.5)")
                      }
                      onBlur={(e) =>
                        ((e.target as HTMLElement).style.borderColor = "oklch(1 0 0 / 10%)")
                      }
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-medium mb-1.5"
                      style={{ color: "oklch(0.65 0.015 240)" }}
                    >
                      Message <span aria-hidden="true" style={{ color: "oklch(0.83 0.15 198)" }}>*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      placeholder="Tell me about the opportunity or project..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      style={{ ...inputStyle, resize: "vertical", minHeight: "100px" }}
                      onFocus={(e) =>
                        ((e.target as HTMLElement).style.borderColor =
                          "oklch(0.83 0.15 198 / 0.5)")
                      }
                      onBlur={(e) =>
                        ((e.target as HTMLElement).style.borderColor = "oklch(1 0 0 / 10%)")
                      }
                      aria-required="true"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-sm text-sm font-semibold transition-all duration-200"
                    style={{
                      background: "oklch(0.83 0.15 198)",
                      color: "oklch(0.10 0.02 240)",
                      fontFamily: "Syne, sans-serif",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "oklch(0.88 0.15 198)";
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        "0 0 24px oklch(0.83 0.15 198 / 0.3)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "oklch(0.83 0.15 198)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    <Send size={15} />
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
