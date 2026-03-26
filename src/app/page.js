export default function Home() {
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js",
    "Node.js", "Python", "PostgreSQL", "MongoDB",
    "Tailwind CSS", "REST APIs", "Git", "Docker",
  ];

  const projects = [
    {
      title: "Project Alpha",
      description:
        "A high-performance SaaS dashboard built with Next.js and PostgreSQL, featuring real-time data visualisation and role-based access control.",
      tags: ["Next.js", "TypeScript", "Postgres"],
      href: "#",
    },
    {
      title: "Project Beta",
      description:
        "An AI-powered writing assistant that integrates with popular editors, leveraging language models to suggest, refine, and structure content.",
      tags: ["Python", "FastAPI", "React"],
      href: "#",
    },
    {
      title: "Project Gamma",
      description:
        "A developer CLI toolkit that automates common scaffolding tasks, reducing project setup time from hours to seconds.",
      tags: ["Node.js", "CLI", "Docker"],
      href: "#",
    },
  ];

  return (
    <div className="noise relative min-h-screen">
      {/* ── Nav ────────────────────────────────────────────────────── */}
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md border-b border-white/[0.05] bg-[#090909]/70">
        <span
          className="font-mono text-sm tracking-widest grad-text font-bold"
          style={{ fontFamily: "var(--font-fira-code), monospace" }}
        >
          &lt;shanmukh /&gt;
        </span>
        <nav className="hidden sm:flex items-center gap-8">
          {["about", "skills", "projects", "contact"].map((s) => (
            <a key={s} href={`#${s}`} className="nav-link capitalize">
              {s}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn-primary text-sm py-2 px-5">
          Hire me
        </a>
      </header>

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center overflow-hidden pt-20">
        {/* Background blobs */}
        <div
          className="blob"
          style={{
            width: 480,
            height: 480,
            background: "rgba(124,58,237,0.25)",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
        <div
          className="blob"
          style={{
            width: 320,
            height: 320,
            background: "rgba(6,182,212,0.15)",
            bottom: "15%",
            right: "10%",
          }}
        />

        <div className="relative z-10 max-w-3xl">
          <p className="section-label fade-up mb-4">Hello, world —</p>

          <h1
            className="fade-up delay-1 text-5xl sm:text-7xl font-extrabold leading-tight tracking-tight mb-6"
          >
            I&apos;m{" "}
            <span className="grad-text">Shanmukh</span>
          </h1>

          <p
            className="fade-up delay-2 text-lg sm:text-xl text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed"
          >
            A full-stack developer who crafts fast, accessible, and beautiful
            digital experiences — from idea to deployment.
          </p>

          <div className="fade-up delay-3 flex flex-wrap items-center justify-center gap-4">
            <a href="#projects" className="btn-primary">
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v18H3z"/><path d="M9 9h6M9 13h6M9 17h4"/></svg>
              View my work
            </a>
            <a href="#contact" className="btn-ghost">
              Get in touch ↗
            </a>
          </div>

          <p
            className="fade-up delay-4 mt-16 text-xs text-zinc-600 tracking-widest uppercase font-mono"
          >
            scroll to explore
          </p>
        </div>

        {/* Bottom gradient fade */}
        <div
          className="pointer-events-none absolute bottom-0 inset-x-0 h-32"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #090909)",
          }}
        />
      </section>

      {/* ── About ──────────────────────────────────────────────────── */}
      <section id="about" className="relative max-w-5xl mx-auto px-6 py-28">
        <p className="section-label mb-3">01 — About</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">
          A bit about me
        </h2>

        <div className="grid sm:grid-cols-2 gap-10 items-center">
          {/* Avatar placeholder */}
          <div className="flex justify-center sm:justify-start">
            <div
              className="relative w-52 h-52 rounded-2xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.4), rgba(6,182,212,0.3))",
                border: "1px solid rgba(124,58,237,0.35)",
              }}
            >
              <svg
                aria-hidden="true"
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 200 200"
                fill="none"
              >
                <circle cx="100" cy="80" r="38" fill="rgba(124,58,237,0.45)" />
                <ellipse cx="100" cy="175" rx="60" ry="40" fill="rgba(124,58,237,0.3)" />
              </svg>
              <span
                className="absolute bottom-4 inset-x-0 text-center text-xs font-mono text-violet-300"
              >
                your photo here
              </span>
            </div>
          </div>

          <div className="space-y-5 text-zinc-400 leading-relaxed">
            <p>
              Hey! I&apos;m Shanmukh, a passionate developer based in India
              with a love for building things that live on the internet.
            </p>
            <p>
              I specialize in modern web technologies and enjoy turning complex
              problems into clean, intuitive solutions. When I&apos;m not
              coding, I explore design systems, contribute to open source, or
              dig into the latest in AI/ML.
            </p>
            <p>
              I&apos;m currently open to freelance projects and full-time
              opportunities.
            </p>
            <a href="/resume.pdf" className="btn-ghost inline-flex mt-2" aria-label="Download resume PDF">
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download Résumé
            </a>
          </div>
        </div>
      </section>

      {/* ── Skills ─────────────────────────────────────────────────── */}
      <section id="skills" className="max-w-5xl mx-auto px-6 py-28">
        <p className="section-label mb-3">02 — Skills</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">
          What I work with
        </h2>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span key={skill} className="skill-pill">
              <span style={{ color: "#7c3aed" }}>#</span>
              {skill}
            </span>
          ))}
        </div>

        {/* Stat row */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { value: "3+", label: "Years experience" },
            { value: "20+", label: "Projects shipped" },
            { value: "10+", label: "Happy clients" },
            { value: "∞", label: "Coffees consumed" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="card p-6 text-center"
            >
              <p className="text-4xl font-extrabold grad-text mb-1">
                {stat.value}
              </p>
              <p className="text-xs text-zinc-500 uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Projects ───────────────────────────────────────────────── */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-28">
        <p className="section-label mb-3">03 — Projects</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">
          Things I&apos;ve built
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href}
              className="card p-7 flex flex-col gap-4 group"
            >
              {/* Top icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(6,182,212,0.2))",
                  border: "1px solid rgba(124,58,237,0.25)",
                }}
              >
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M8 12h8M8 8h8M8 16h5"/>
                </svg>
              </div>

              <h3 className="text-lg font-semibold text-zinc-100 group-hover:grad-text transition-all">
                {p.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed flex-1">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="text-xs text-violet-400 group-hover:text-violet-300 flex items-center gap-1 pt-1">
                View project
                <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ── Contact ────────────────────────────────────────────────── */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-28">
        <p className="section-label mb-3">04 — Contact</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Let&apos;s work together
        </h2>
        <p className="text-zinc-400 max-w-md mb-12">
          Have a project in mind or just want to say hi? My inbox is always
          open — I&apos;ll get back to you as soon as possible.
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="mailto:hello@psssvst.com" className="btn-primary">
            <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            Send an email
          </a>
          <a
            href="https://github.com/Shanmukhsvstp"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/shanmukh"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────── */}
      <footer
        className="border-t text-center py-8 px-6 text-xs text-zinc-600"
        style={{ borderColor: "var(--border)" }}
      >
        <p>
          Designed &amp; built by{" "}
          <span className="grad-text font-semibold">Shanmukh</span> · {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

