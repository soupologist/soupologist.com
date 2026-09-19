import BackgroundVideo from "@/components/BackgroundVideo";

const links = [
  { label: "things", href: "/work" },
  { label: "thoughts", href: "/blog" },
  { label: "music", href: "/music" },
  { label: "films", href: "/film" },
  { label: "about", href: "/about" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden text-[#e8e5dd]">
      <BackgroundVideo />

      {/* top */}
      <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between px-6 py-5 md:px-10 md:py-7">
        <a href="/" className="font-mono text-sm tracking-[-0.04em]">
          soupologist
        </a>

        <span className="font-mono text-xs text-[#6e6c66]">2026 / 09 / 04</span>
      </header>

      {/* main canvas */}
      <section className="relative z-20 min-h-screen">       

        {/* navigation */}
        <nav
          className="absolute bottom-[13%] left-[9%]
            flex
            flex-col
            gap-1
            md:bottom-[10%] md:left-[15%]
          "
        >
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#52504b]">
            stuff
          </p>

          {links.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-3 font-mono text-sm text-[#e8e5dd]"
            >
              <span className="w-4 text-[10px] text-[#4f4d48]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="underline decoration-[#e8e5dd] underline-offset-4">
                {link.label}
              </span>

              <span>↗</span>
            </a>
          ))}
        </nav>

        {/* accent dot */}
        <div className="absolute bottom-8 right-8 h-2 w-2 rounded-full bg-[#ffb52e]" />
      </section>
    </main>
  );
}
