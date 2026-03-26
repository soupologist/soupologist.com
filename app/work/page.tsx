export default function AboutPage() {
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

        {/* Intro paragraph */}
        <p className="text-base md:text-lg font-sans leading-relaxed mb-8">
          I\'m a fourth year Computer Science student in BITS Pilani, Hyderabad
          Campus.
        </p>

        <p className="text-base md:text-lg font-sans leading-relaxed mb-8">
          Over the years, I’ve worked across design, engineering, and product,
          always trying to keep things clean and intentional.
        </p>

        {/* Section */}
        <section className="mt-16">
          <h2 className="text-xl md:text-2xl mb-6">Work</h2>

          <p className="leading-relaxed mb-6">
            I’ve spent time working on product design and frontend engineering,
            focusing on building experiences that feel fast, minimal, and
            intuitive.
          </p>

          <p className="leading-relaxed mb-6">
            Previously, I worked on growth and design systems, helping teams
            ship cohesive and scalable products.
          </p>
        </section>

        {/* Section */}
        <section className="mt-16">
          <h2 className="text-xl md:text-2xl mb-6">Elsewhere</h2>

          <p className="leading-relaxed mb-6">
            Outside of work, I enjoy photography, writing, and collecting
            inspiration from well-designed products and spaces.
          </p>
        </section>

        {/* Footer spacing */}
        <div className="h-24 md:h-32" />
      </div>
    </main>
  );
}
