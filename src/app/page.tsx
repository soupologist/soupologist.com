import BackgroundVideo from "@/components/BackgroundVideo";

const links = [
  { label: "w*rk", href: "/work" },
  { label: "blog", href: "/blog" },
  { label: "music", href: "/music" },
  { label: "film", href: "/film" },
  { label: "about", href: "/about" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden text-[#e8e5dd]">
      {/* <BackgroundVideo /> */}

      {/* navbar */}
      <header className="fixed left-0 top-0 z-50 w-full px-6 py-5 md:px-10 md:py-7">
        <nav className="flex items-center justify-between font-mono">
          {/* logo */}
          <a
            href="/"
            className="text-sm tracking-[-0.04em]"
          >
            soupologist
          </a>

          {/* links */}
          <div className="flex items-center gap-5 text-xs">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-opacity hover:opacity-50"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* main canvas */}
      <section className="relative z-20 min-h-screen">
        {/* accent dot */}
        <div className="absolute bottom-8 right-8 h-2 w-2 rounded-full bg-[#ffb52e]" />
      </section>
    </main>
  );
}