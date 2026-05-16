import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="px-6 md:px-0">
      {/* Top spacing */}
      <div className="pt-24 md:pt-32" />

      {/* Card */}
      <div className="mx-auto max-w-3xl rounded-b-none border border-(--border) bg-(--surface) px-8 py-10 md:px-12 md:py-14 shadow-[0_0_40px_rgba(0,0,0,0.3)]">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-head leading-tight tracking-widest mb-10">
          about
        </h1>

        {/* Intro paragraph */}
        <p className="font-neue leading-relaxed tracking-wide text-(--text) mb-8">
          wsg. i've set up this website here as essentially an archive to put whatever i make in a consolidated location: whether it be music, design, or just shitposts.
        </p>

        {/* Image */}
        <div className="mb-12 w-full">
          <Image
            src="/photos/me-redshirt.jpg"
            alt="Sai in red shirt"
            width={200}
            height={150}
            className="w-fit h-auto object-cover"
          />
        </div>

        {/* Section */}
        <section className="mt-16">
          <p className="leading-relaxed mb-6 font-neue text-(--text) tracking-wide ">
            in the streets i'm a computer science grad from bits hyd working in tech, but in the sheets (as in outside of work), i like doing creative stuff like music, design, and previously film. 
          </p>

        </section>
      </div>

      {/* Footer spacing */}
      <div className="h-24 md:h-32" />
    </main>
  );
}