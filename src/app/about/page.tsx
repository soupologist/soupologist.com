'use client';

import Image from 'next/image';

export default function About() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden pt-24">
      {/* Background image */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Image
          src="/images/streaks.jpeg" // ensure this file exists
          alt="Background"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Content Wrapper */}
      <div className="px-6 py-16 md:px-16 flex flex-col md:flex-row items-start gap-12">
        {/* Left Column: Profile & Info */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          {/* Square Image */}
          <div className="w-60 h-60 md:w-80 md:h-80 overflow-hidden border border-white/20">
            <Image
              src="/images/ashish.jpg"
              alt="Sai Ashish Vure"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Bio */}
          <p
            className="text-base md:text-xl leading-relaxed text-white/80"
            style={{ fontFamily: 'var(--font-doner)' }}
          >
            I’m a multidisciplinary creator exploring storytelling through film, music, design, and
            code. Whether it’s through a camera lens, a soundscape, or a digital product, I aim to
            craft emotionally resonant work rooted in curiosity and experimentation.
          </p>

          {/* Location / Status */}
          <div
            className="text-sm md:text-base text-white/50"
            style={{ fontFamily: 'var(--font-doner-display)' }}
          >
            Currently based in India. Open to collaborations and commissions.
          </div>

          {/* Contact Links */}
          <div className="flex gap-6 mt-2">
            <a
              href="mailto:your@email.com"
              className="underline underline-offset-4 text-white/80 hover:text-red-500 transition"
              style={{ fontFamily: 'var(--font-doner)' }}
            >
              Email
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 text-white/80 hover:text-red-500 transition"
              style={{ fontFamily: 'var(--font-doner)' }}
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 text-white/80 hover:text-red-500 transition"
              style={{ fontFamily: 'var(--font-doner)' }}
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Right Column: Giant Heading */}
        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end">
          <h1
            className="text-9xl md:text-[20vw] leading-none font-bold text-right"
            style={{ fontFamily: 'var(--font-humane)' }}
          >
            ABOUT
          </h1>
        </div>
      </div>
    </main>
  );
}
