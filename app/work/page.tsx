import ExperienceSection from "../../components/ExperienceSection";

export default function WorkPage() {
  return (
    <main className="px-6 md:px-0">
      {/* Container */}
      <div className="mx-auto max-w-3xl">
        {/* Top spacing */}
        <div className="pt-24 md:pt-32" />

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-head leading-tight tracking-tight mb-10">
          W*rk
        </h1>

        <p className="leading-relaxed font-sans mb-6">
          To put it simply, I like designing and making stuff, either in the
          context of software or otherwise, as you can see in some other
          avenues.
        </p>

        {/* Section */}
        <section className="mt-16">
          <h2 className="text-xl md:text-2xl mb-6 font-head">Experience</h2>

          <p className="leading-relaxed mb-6 font-sans">
            I currently work in BlackRock Mumbai as an intern, under the
            Quantitative Analytics Engineering team.
          </p>

          <p className="leading-relaxed mb-6 font-sans">
            I've previously interned at iCIMS for a few months in the Summer of
            2025.
          </p>
        </section>

        {/* Footer spacing */}
        <div className="h-24 md:h-32" />
      </div>
    </main>
  );
}
