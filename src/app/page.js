"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const lines = [
    "Art doesn't just exist in drawings..",
    "Where elegance matters",
    "Extracting art out of pixels",
  ];
  const linesLength = lines.length;
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isResumePreviewOpen, setIsResumePreviewOpen] = useState(false);


  const projects = [
    {
      num: "01",
      title: "NeuraBench",
      desc: [
        "Complete NPU benchmarking suite built with WinUI3",
        "Focused on reliable performance profiling and repeatable runs",
      ],
      tags: ["WinUI3", "C++", "GoLang"],
      year: "2026",
      status: "Under Development",
      href: "https://neurabench.com",
    },
    {
      num: "02",
      title: "NPU Stress Tester",
      desc: [
        "Simple NPU stress testing tool built with Python and Tkinter",
        "Designed for quick stability checks under sustained load",
      ],
      tags: ["Python", "Tkinter"],
      year: "2025",
      status: "Live",
      href: "https://nputest.com",
    },
    {
      num: "03",
      title: "ConferIt (Formely PsMeet)",
      desc: [
        "Zoom-like video conferencing app in active development",
        "Built around low-latency meetings and collaboration workflows",
      ],
      tags: ["Node.js", "WebRTC", "Next.js"],
      year: "2024",
      status: "In Progress",
      href: "https://conferit.com",
    },
    {
      num: "04",
      title: "ViewGrow",
      desc: [
        "Simple YouTube growth assistant application",
        "Built to help creators track and improve content momentum",
      ],
      tags: ["Android", "Java"],
      year: "2024",
      status: "Live",
      href: "https://play.google.com/store/apps/details?id=com.parapf.viewgrow",
    },
    {
      num: "05",
      title: "Chess Online",
      desc: [
        "Multiplayer chess with real-time gameplay",
        "Online room-based matches powered by live socket sync",
      ],
      tags: ["WebSockets", "React"],
      year: "2019",
      status: "Inactive",
      github: "https://github.com/parapf/chess-online",
      href: "https://chess-by-pss.web.app",
    },
    {
      num: "06",
      title: "TechEcho",
      desc: [
        "Tech news website for quick, readable updates",
        "Curates recent stories with a clean editorial layout",
      ],
      tags: ["HTML"],
      year: "2024",
      status: "Live",
      href: "https://parapf.com/",
    },
    {
      num: "07",
      title: "URL Shortener",
      desc: [
        "Simple URL shortener built with HTML, JavaScript, and Firebase",
        "Fast link generation with lightweight management flow",
      ],
      tags: ["Firebase", "JavaScript"],
      year: "2022",
      status: "Live",
      href: "https://pssurl.web.app",
    },
    {
      num: "08",
      title: "CloudClock",
      desc: [
        "Smart IoT clock with cloud sync",
        "Customizable behavior through firmware and web controls",
      ],
      tags: ["IoT", "GoLang", "NextJS", "ESP (C++)"],
      year: "2026",
      status: "In Progress",
      // href: "https://cloudclock.com",
    }
    // {
    //   num: "08",
    //   title: "Para Store",
    //   desc: "Online store for computer parts",
    //   tags: ["E-commerce", "React"],
    //   year: "2025",
    //   status: "Live",
    //   href: "https://parastore.in/",
    // },
  ];

  const experiences = [
    {
      id: "01",
      role: "Founder & Developer",
      company: "Para Platforms",
      companies: [
        { label: "Para Platforms", url: "https://parapf.com/" },
        { label: "ConferIt", url: "https://conferit.com" },
      ],
      type: "Independent",
      period: "2022 - Present",
      location: "Remote",
      highlights: [
        "Building and shipping utility-first products across web and android",
        "Development of various tools and utilities",
      ],
    },
    {
      id: "02",
      role: "Founder & Developer",
      company: "NeuraBench",
      companyUrl: "https://neurabench.com",
      companies: [
        { label: "NPU Test (Stress Testing)", url: "https://nputest.com/" },
        { label: "NeuraBench", url: "https://neurabench.com" },
      ],
      type: "Independent",
      period: "2025 - Present",
      location: "Remote",
      highlights: [
        "Designing repeatable NPU benchmarking pipelines and reports",
        "Building a modern WinUI3 interface for profiling workflows",
      ],
    },
    {
      id: "03",
      role: "Android Developer and Fullstack Developer",
      company: "Lemly Inc.",
      companyUrl: "https://lemly.io",
      type: "Independent",
      period: "2025 - 2026",
      location: "Remote",
      highlights: [
        "Android application development for the platform",
        "Working on a few things related to backend and infrastructure as well",
      ],
    },
  ];

  const stack = {
    languages: ["Java", "C", "C++", "Go", "Python","JavaScript", "Kotlin", "SQL", "HTML", "CSS", "Dart"],
    frameworks: ["React", "Next.js", "Node.js", "Express", "Android (Flutter and Android Studio)", "WinUI3"],
    tools: ["MongoDB", "Firebase", "Supabase", "Neon", "MinIO", "Git", "Cloudflare (Tunnels)", "Netlify", "Vercel", "VPS's (Ubuntu)"],
  };

  const now = {
    updated: "March 2026",
    focus: [
      "Building NeuraBench into a reliable NPU benchmarking platform",
      "Exploring product direction for CloudClock and connected cloud/backend",
    ],
  };

  useEffect(() => {
    const storageKey = "homeQuoteIndex";
    const storedIndex = window.localStorage.getItem(storageKey);

    if (storedIndex !== null) {
      const parsedIndex = Number.parseInt(storedIndex, 10);
      if (Number.isInteger(parsedIndex) && parsedIndex >= 0) {
        setQuoteIndex(parsedIndex % linesLength);
      } else {
        window.localStorage.setItem(storageKey, "0");
      }
    } else {
      window.localStorage.setItem(storageKey, "0");
    }

    const intervalId = setInterval(() => {
      setQuoteIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % linesLength;
        window.localStorage.setItem(storageKey, String(nextIndex));
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, [linesLength]);

  useEffect(() => {
    if (!isResumePreviewOpen) {
      return;
    }

    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setIsResumePreviewOpen(false);
      }
    };

    const previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isResumePreviewOpen]);

  const handleProjectPointerMove = (event) => {
    const row = event.currentTarget;
    const rect = row.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    row.style.setProperty("--mx", `${x}px`);
    row.style.setProperty("--my", `${y}px`);
  };

  const resetProjectPointer = (event) => {
    const row = event.currentTarget;
    row.style.setProperty("--mx", "50%");
    row.style.setProperty("--my", "50%");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">

      {/* ── Nav ─────────────────────────────────────────────────────── */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-[#161616] bg-[#0a0a0a]/90 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 h-14 flex items-center justify-between">
          <a href="#home" className="text-sm font-medium text-[#dedad3] no-underline">
            Home
          </a>
          <nav className="flex items-center gap-7">
            <a href="#about" className="nav-item">About</a>
            <a href="#work" className="nav-item">Work</a>
            <a href="#experience" className="nav-item">Experience</a>
            <a href="#now" className="nav-item">Now</a>
            <a href="#contact" className="nav-item">Contact</a>
          </nav>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section id="home" className="max-w-3xl mx-auto px-6 sm:px-10 pt-36 pb-32">
        <p className="appear text-xs tracking-widest uppercase text-[#3e3e3e] mb-10 flex items-center gap-2">
          <span className="avail-dot" aria-hidden="true" />
          Available
        </p>

        <h1
          className="appear appear-1 text-[#ede8df] leading-[1.04] tracking-[-0.015em] mb-8"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(3.25rem, 9vw, 6.5rem)",
          }}
        >
          Shanmukha
        </h1>

        <p className="appear appear-2 text-[var(--fg-2)] font-light max-w-sm leading-relaxed mb-12"
          style={{ fontSize: "1.2rem" }}>
          Software developer. <br />
          <span className="quote-wrap" aria-live="polite">
            <span
              key={quoteIndex}
              className={`quote-line ${quoteIndex % 2 === 0 ? "quote-white" : "quote-yellow"}`}
            >
              {lines[quoteIndex]}
            </span>
          </span>
        </p>

        <div className="appear appear-3 flex items-center gap-8">
          <a href="#work" className="tlink text-sm">Selected works</a>
          <a href="#contact" className="tlink text-sm">Get in touch</a>
        </div>
      </section>

      {/* ── Work ────────────────────────────────────────────────────── */}
      <section id="work" className="max-w-3xl mx-auto px-6 sm:px-10 py-20">
        <p className="text-xs tracking-widest uppercase text-[#2e2e2e] mb-10">
          Selected work
        </p>

        <div>
          {projects.map((p) => {
            const descPoints = Array.isArray(p.desc) ? p.desc : [p.desc];

            return (
            <div
              key={p.num}
              className="project-row group"
              onMouseMove={handleProjectPointerMove}
              onMouseLeave={resetProjectPointer}
            >
              <span className="row-num">{p.num}</span>
              <div className="row-body">
                <div className="row-top">
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="row-title-link"
                  >
                    <span className="row-title">{p.title}</span>
                  </a>
                  <span className="row-meta">

                    <span className="row-status">
                      {p.status} ·
                    </span>

                    <span className="row-year">{p.year}</span>
                    {p.github ? (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="row-github"
                        aria-label={`${p.title} GitHub repository`}
                      >
                        GitHub
                      </a>
                    ) : null}
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="row-arrow"
                      aria-label={`Open ${p.title}`}
                    >
                      ↗
                    </a>
                  </span>
                </div>
                {/* <p className="row-tags">{p.tags}</p> */}
                <p className="row-tags">
                  {p.tags.map((tag, i) => (
                    <span key={tag}>
                      <span className="tag">{tag}</span>
                        {i < p.tags.length - 1 ? " · " : null}
                    </span>
                  ))}
                </p>
                <ul className="row-desc-list" aria-label={`${p.title} highlights`}>
                  {descPoints.map((point) => (
                    <li key={point} className="row-desc-item">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
            );
          })}
        </div>
      </section>

      {/* ── Experience ─────────────────────────────────────────────── */}
      <section id="experience" className="max-w-3xl mx-auto px-6 sm:px-10 py-20">
        <div className="experience-head">
          <p className="text-xs tracking-widest uppercase text-[#2e2e2e]">
            Experience
          </p>
          <p className="experience-caption">Places I&apos;ve worked</p>
        </div>

        <div className="experience-list" aria-label="Work experience list">
          {experiences.map((item) => {
            const companyItems = Array.isArray(item.companies)
              ? item.companies
              : [{ label: item.company, url: item.companyUrl }];
            const companyLabel = companyItems
              .map((companyItem) => companyItem.label)
              .filter(Boolean)
              .join(" / ");

            return (
              <article key={item.id} className="experience-row">
                <span className="experience-num">{item.id}</span>

                <div className="experience-body">
                  <div className="experience-top">
                    <div className="experience-title-wrap">
                      <h3 className="experience-role">{item.company} - {item.role}</h3>

                      <p className="experience-company-list">
                        {companyItems.map((companyItem, index) => (
                          <span key={`${item.id}-${companyItem.label}-${index}`}>
                            {companyItem.url ? (
                              <a
                                href={companyItem.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="experience-company"
                              >
                                {companyItem.label} ↗
                              </a>
                            ) : (
                              <span className="experience-company">{companyItem.label}</span>
                            )}
                            {index < companyItems.length - 1 ? (
                              <span className="experience-company-sep" aria-hidden="true"> · </span>
                            ) : null}
                          </span>
                        ))}
                      </p>
                    </div>

                    <div className="experience-meta">
                      <span>{item.type}</span>
                      <span>{item.period}</span>
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <ul className="experience-points" aria-label={`${companyLabel || "Experience"} highlights`}>
                    {item.highlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── About ───────────────────────────────────────────────────── */}
      <section id="about" className="max-w-3xl mx-auto px-6 sm:px-10 py-20">
        <p className="text-xs tracking-widest uppercase text-[#2e2e2e] mb-10">
          About
        </p>

        <div className="grid sm:grid-cols-[7rem_1fr] gap-10 sm:gap-16">
          <div
            className="space-y-1 text-[0.7rem] text-[#2e2e2e] leading-relaxed pt-0.5"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {/* <p>India</p>
            <p>Remote-friendly</p> */}
            <p>psssvst</p>
          </div>

          <div className="space-y-5 text-[0.875rem] text-[#6b6b6b] leading-[1.9]">
            <p>
              I&apos;m Shanmukha, I build software across Android, Web, 
              and Windows.
              While my focus is always on efficiency and the goal, 
              I also deeply care about asthetics and design.
            </p>
            <p>
              My works spans various stacks and domains, but I&apos;m especially passionate about tools and utilities that enhance productivity and creativity. 
              I enjoy working and learning stacks that allow me to reach closer to the systems. I love to build tools that require a deep understanding of the underlying platform, whether it&apos;s a low-level code or high-level permission based applications.
              Lately have been exploring the world of NPUs and am currently building a benchmarking suite for them, which is a space I find really fascinating.
              Also exploring the intersection of software and hardware with a personal project around building a smart clock, which has been a fun way to dive into IoT and embedded systems,
              And would be deep into IoT and embedded systems, may be by build one using a custom SoCs like RISC-V or ARM, soon maybe?
              I&apos;d also love to research or go deep into areas like compilers, operating systems, embedded systems, and machine learning, anything new actually.
              
            </p>
            <p>
              Currently open to the projects/jobs that I've proactively applied to, or genuinely interested in.
            </p>
            <div className="resume-actions" role="group" aria-label="Resume actions">
              <a
                href="/resume.pdf"
                className="tlink text-sm inline-block mt-1"
                aria-label="Download resume PDF"
              >
                Download résumé ↓
              </a>
              <button
                type="button"
                className="resume-preview-btn"
                onClick={() => setIsResumePreviewOpen(true)}
                aria-haspopup="dialog"
                aria-expanded={isResumePreviewOpen}
                aria-controls="resume-preview-dialog"
              >
                Preview résumé ↗
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stack ───────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6 sm:px-10">
        <hr className="border-[#161616]" />
      </div>

      <section className="max-w-3xl mx-auto px-6 sm:px-10 py-14">
        <p className="text-xs tracking-widest uppercase text-[#2e2e2e] mb-6">
          Stack
        </p>
        <div className="space-y-6">
          {Object.entries(stack).map(([category, items]) => (
            <div key={category}>
              <p className="text-xs tracking-widest uppercase text-[#2e2e2e] mb-3">
                {category.charAt(0).toUpperCase() + category.slice(1)}:
              </p>
              <p
                className="text-[0.75rem] text-[#6b6b6b] leading-loose"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {items.map((item, i) => (
                  <span key={item}>
                    {item}
                    {i < items.length - 1 ? "\u00A0·\u00A0" : ""}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Now ─────────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6 sm:px-10">
        <hr className="border-[#161616]" />
      </div>

      <section id="now" className="max-w-3xl mx-auto px-6 sm:px-10 py-16">
        <div className="now-head">
          <p className="text-xs tracking-widest uppercase text-[#2e2e2e]">Now</p>
          <p className="now-updated">Updated {now.updated}</p>
        </div>

        <ul className="now-list" aria-label="Current focus">
          {now.focus.map((item) => (
            <li key={item} className="now-item">{item}</li>
          ))}
        </ul>
      </section>

      {/* ── Contact ─────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6 sm:px-10">
        <hr className="border-[#161616]" />
      </div>

      <section id="contact" className="max-w-3xl mx-auto px-6 sm:px-10 py-28">
        <p className="text-xs tracking-widest uppercase text-[#2e2e2e] mb-10">
          Contact
        </p>

        <h2
          className="text-[#ede8df] leading-[1.1] tracking-[-0.01em] font-normal mb-12"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2rem, 5.5vw, 3.75rem)",
          }}
        >
          Let&apos;s build<br />something great!
        </h2>

        <div className="flex flex-col gap-3.5">
          <a
            href="mailto:me@psssvst.com"
              className="tlink contact-link text-sm w-fit"
          >
              <span className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 6h16v12H4z" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </span>
              <span>me@psssvst.com</span>
          </a>
          <a
            href="https://github.com/Shanmukhsvstp"
            target="_blank"
            rel="noopener noreferrer"
              className="tlink contact-link text-sm w-fit"
          >
              <span className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18c-3 1-3-1.5-4.5-2" />
                  <path d="M14.5 20v-2.2c0-.8.1-1.4-.4-2 2.7-.3 5.4-1.3 5.4-5.8a4.5 4.5 0 0 0-1.2-3.1 4.2 4.2 0 0 0-.1-3.1s-1-.3-3.2 1.2a11 11 0 0 0-6 0C6.8 3.5 5.8 3.8 5.8 3.8a4.2 4.2 0 0 0-.1 3.1A4.5 4.5 0 0 0 4.5 10c0 4.5 2.7 5.5 5.4 5.8-.5.6-.5 1.4-.5 2V20" />
                </svg>
              </span>
              <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/psssvst"
            target="_blank"
            rel="noopener noreferrer"
              className="tlink contact-link text-sm w-fit"
          >
              <span className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 1 0-4 0v6h-4v-6a6 6 0 0 1 6-6z" />
                  <path d="M2 9h4v11H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </span>
              <span>LinkedIn</span>
          </a>
          <a
            href="https://youtube.com/@ParaPlatforms"
            target="_blank"
            rel="noopener noreferrer"
              className="tlink contact-link text-sm w-fit"
          >
              <span className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2.5" y="6" width="19" height="12" rx="3" />
                  <path d="m10 10 5 2-5 2z" />
                </svg>
              </span>
              <span>YouTube</span>
          </a>
        </div>
      </section>

      {isResumePreviewOpen ? (
        <div
          className="resume-modal-backdrop"
          role="presentation"
          onClick={() => setIsResumePreviewOpen(false)}
        >
          <div
            id="resume-preview-dialog"
            className="resume-modal-shell"
            role="dialog"
            aria-modal="true"
            aria-label="Resume preview"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="resume-modal-header">
              <p className="resume-modal-title">Resume Preview</p>
              <button
                type="button"
                className="resume-modal-close"
                onClick={() => setIsResumePreviewOpen(false)}
                aria-label="Close resume preview"
              >
                Close
              </button>
            </div>

            <div className="resume-modal-image-wrap">
              <img
                src="/resume.png"
                alt="Preview of Shanmukha's resume"
                className="resume-modal-image"
              />
            </div>

            <a
              href="/resume.pdf"
              className="resume-modal-download"
              aria-label="Download resume PDF"
            >
              Download PDF ↓
            </a>
          </div>
        </div>
      ) : null}

      {/* ── Footer ──────────────────────────────────────────────────── */}
      <footer className="max-w-3xl mx-auto px-6 sm:px-10 py-8 border-t border-[#161616] flex items-center justify-between">
        <span className="text-[0.7rem] text-[#2e2e2e]">
          All rights reserved &copy; {new Date().getFullYear()}
        </span>
        <span
          className="text-[0.7rem] text-[#2e2e2e]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          psssvst.com
        </span>
      </footer>

    </div>
  );
}

