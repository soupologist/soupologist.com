export default function AboutPage() {
  return (
    <main className="px-6 md:px-0">
      {/* Top spacing */}
      <div className="pt-24 md:pt-32" />

      {/* Card */}
      <div className="mx-auto max-w-3xl rounded-b-none border border-(--border) bg-(--surface) px-8 py-10 md:px-12 md:py-14 shadow-[0_0_40px_rgba(0,0,0,0.3)]">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-head leading-tight tracking-widest mb-10">
          w*rk
        </h1>

        {/* Intro paragraph */}
        <p className="font-neue leading-relaxed tracking-wide text-(--text) mb-8">
          currently, i'm doing an internship as a software engineer in the QAE team at BlackRock Mumbai. will have to see what happens in the future.
        </p>

        {/* Section */}
        <section className="mt-16">
          <p className="leading-relaxed mb-6 font-neue text-(--text) tracking-wide ">
            In terms of my skillset, I'm pretty well versed with development: frontend, backend, database stuff, and more recently AI Engineering.
          </p>

        </section>
      </div>

      {/* Footer spacing */}
      <div className="h-24 md:h-32" />
    </main>
  );
}