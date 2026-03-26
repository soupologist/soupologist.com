export default function AboutPage() {
  return (
    <main className="px-6 md:px-0">
      {/* Container */}
      <div className="mx-auto max-w-3xl">
        {/* Top spacing */}
        <div className="pt-24 md:pt-32" />

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-head leading-tight tracking-tight mb-10">
          About
        </h1>

        {/* Intro paragraph */}
        <p className="font-sans leading-relaxed mb-8">
          I've always wanted a personal website for myself to put all my stuff
          in one place and be able to put myself out there.
        </p>

        {/* Section */}
        <section className="mt-16">
          <p className="leading-relaxed mb-6 font-sans">
            my name is sai ashish vure. it's
          </p>

          <p className="leading-relaxed mb-6">
            Previously, I worked on growth and design systems, helping teams
            ship cohesive and scalable products.
          </p>
        </section>

        {/* Footer spacing */}
        <div className="h-24 md:h-32" />
      </div>
    </main>
  );
}
