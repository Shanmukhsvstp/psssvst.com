export default function Home() {
  const projects = [
    {
      num: "01",
      title: "Project Alpha",
      desc: "SaaS dashboard with real-time data visualisation and role-based access control.",
      tags: "Next.js · TypeScript · PostgreSQL",
      year: "2024",
      href: "#",
    },
    {
      num: "02",
      title: "Project Beta",
      desc: "AI writing assistant using language models to suggest, refine, and structure content.",
      tags: "Python · FastAPI · React",
      year: "2024",
      href: "#",
    },
    {
      num: "03",
      title: "Project Gamma",
      desc: "Developer CLI toolkit that reduces project scaffolding from hours to seconds.",
      tags: "Node.js · CLI · Docker",
      year: "2023",
      href: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">

      {/* ── Nav ─────────────────────────────────────────────────────── */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-[#161616] bg-[#0a0a0a]/90 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 h-14 flex items-center justify-between">
          <a href="/" className="text-sm font-medium text-[#dedad3] no-underline">
            S.
          </a>
          <nav className="flex items-center gap-7">
            <a href="#about"   className="nav-item">About</a>
            <a href="#work"    className="nav-item">Work</a>
            <a href="#contact" className="nav-item">Contact</a>
          </nav>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 sm:px-10 pt-36 pb-32">
        <p className="appear text-xs tracking-widest uppercase text-[#3e3e3e] mb-10 flex items-center gap-2">
          <span className="avail-dot" aria-hidden="true" />
          Available for work
        </p>

        <h1
          className="appear appear-1 text-[#ede8df] leading-[1.04] tracking-[-0.015em] mb-8"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(3.25rem, 9vw, 6.5rem)",
          }}
        >
          Shanmukh.
        </h1>

        <p className="appear appear-2 text-[var(--fg-2)] font-light max-w-sm leading-relaxed mb-12"
          style={{ fontSize: "1.0625rem" }}>
          Full-stack developer. I craft precise, purposeful web
          experiences — fast, accessible, and built to last.
        </p>

        <div className="appear appear-3 flex items-center gap-8">
          <a href="#work"    className="tlink text-sm">Selected work ↓</a>
          <a href="#contact" className="tlink text-sm">Get in touch →</a>
        </div>
      </section>

      {/* ── Work ────────────────────────────────────────────────────── */}
      <section id="work" className="max-w-3xl mx-auto px-6 sm:px-10 py-20">
        <p className="text-xs tracking-widest uppercase text-[#2e2e2e] mb-10">
          Selected work
        </p>

        <div>
          {projects.map((p) => (
            <a key={p.num} href={p.href} className="project-row group">
              <span className="row-num">{p.num}</span>
              <div className="row-body">
                <div className="row-top">
                  <span className="row-title">{p.title}</span>
                  <span className="row-meta">
                    <span className="row-year">{p.year}</span>
                    <span className="row-arrow">↗</span>
                  </span>
                </div>
                <p className="row-tags">{p.tags}</p>
                <p className="row-desc sm:block line-clamp-2 sm:line-clamp-none">{p.desc}</p>
              </div>
            </a>
          ))}
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
            <p>India</p>
            <p>Remote-friendly</p>
            <p>Full-stack</p>
          </div>

          <div className="space-y-5 text-[0.875rem] text-[#6b6b6b] leading-[1.9]">
            <p>
              I&apos;m Shanmukh, a developer who cares deeply about the
              intersection of engineering and craft. I build products that feel
              good to use — from the first interaction to the last.
            </p>
            <p>
              My work spans full-stack web development, developer tooling, and
              the occasional side project that scratches a personal itch.
              Comfortable across the whole stack: React and Next.js on the
              frontend, Node.js and Python on the backend, and PostgreSQL or
              MongoDB for data.
            </p>
            <p>
              Currently open to freelance projects and full-time roles.
            </p>
            <a
              href="/resume.pdf"
              className="tlink text-sm inline-block mt-1"
              aria-label="Download resume PDF"
            >
              Download résumé ↓
            </a>
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
        <p
          className="text-[0.75rem] text-[#333] leading-loose"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          JavaScript&nbsp;·&nbsp;TypeScript&nbsp;·&nbsp;React&nbsp;·&nbsp;Next.js&nbsp;·&nbsp;
          Node.js&nbsp;·&nbsp;Python&nbsp;·&nbsp;PostgreSQL&nbsp;·&nbsp;MongoDB&nbsp;·&nbsp;
          Tailwind CSS&nbsp;·&nbsp;Docker&nbsp;·&nbsp;REST APIs&nbsp;·&nbsp;Git
        </p>
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
          Let&apos;s build<br />something great.
        </h2>

        <div className="flex flex-col gap-3.5">
          <a
            href="mailto:hello@psssvst.com"
            className="tlink text-sm w-fit"
          >
            hello@psssvst.com ↗
          </a>
          <a
            href="https://github.com/Shanmukhsvstp"
            target="_blank"
            rel="noopener noreferrer"
            className="tlink text-sm w-fit"
          >
            GitHub ↗
          </a>
          <a
            href="https://linkedin.com/in/shanmukh"
            target="_blank"
            rel="noopener noreferrer"
            className="tlink text-sm w-fit"
          >
            LinkedIn ↗
          </a>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────── */}
      <footer className="max-w-3xl mx-auto px-6 sm:px-10 py-8 border-t border-[#161616] flex items-center justify-between">
        <span className="text-[0.7rem] text-[#2e2e2e]">
          Shanmukh · {new Date().getFullYear()}
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

