const jobs = [
  {
    company: "BlackRock",
    role: "Quantitative Analytics Engineering Intern",
    location: "Mumbai, India",
    dates: "May 2025 — Jul 2025",
    description:
      "Worked on internal tooling for an attribution platform. Built an LLM-powered codebase exploration tool using tree-sitter and Google ADK.",
    href: "#",
  },
  {
    company: "Movie Club, BITS Hyderabad",
    role: "Webmaster / Design / Development",
    location: "Hyderabad, India",
    dates: "2024 — 2025",
    description:
      "Built and maintained the club's website, worked on its visual identity, and generally made things happen on the internet.",
    href: "https://movieclubbphc.in",
  },
];

export default function Work() {
  return (
    <main className="min-h-screen bg-[#070707] text-[#e8e5dd]">
      <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between px-6 py-5 md:px-10 md:py-7">
        <a href="/" className="font-mono text-sm tracking-[-0.04em]">
          soupologist
        </a>

        <nav className="flex gap-5 font-mono text-xs">
          <a href="/work" className="opacity-50">
            things
          </a>
          <a href="/blog">thoughts</a>
          <a href="/music">music</a>
          <a href="/film">films</a>
          <a href="/about">about</a>
        </nav>
      </header>

      <section className="mx-auto max-w-3xl px-6 pb-32 pt-36 md:px-10 md:pt-44">
        <div className="mb-20">
          <h1 className="font-mono text-xs uppercase tracking-[0.2em] text-[#6e6c66]">
            work
          </h1>
        </div>

        <div>
          {jobs.map((job, index) => (
            <article
              key={job.company}
              className={`py-12 ${
                index !== 0 ? "border-t border-[#242421]" : ""
              }`}
            >
              <div className="mb-8 flex items-start justify-between gap-8">
                <div>
                  <h2 className="font-mono text-lg">
                    {job.company}
                  </h2>

                  <p className="mt-2 font-mono text-xs text-[#8a8881]">
                    {job.role}
                  </p>
                </div>

                <p className="shrink-0 font-mono text-[10px] text-[#52504b]">
                  {job.dates}
                </p>
              </div>

              <p className="max-w-xl font-mono text-xs leading-6 text-[#8a8881]">
                {job.description}
              </p>

              <div className="mt-8 flex gap-6 font-mono text-[10px] text-[#52504b]">
                <span>{job.location}</span>

                {job.href !== "#" && (
                  <a
                    href={job.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 transition-opacity hover:opacity-50"
                  >
                    website ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}