'use client';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FDF5D7] flex justify-center overflow-hidden px-6 md:px-16 py-12">
      <div className="w-full flex flex-col md:flex-row items-center gap-12 max-w-6xl">
        {/* Left Photo Section */}
        <div className="relative w-full md:w-1/2 h-[50vh] md:h-[70vh]">
          <Image
            src="/images/me/iith.jpg" // replace with your photo
            alt="About Photo"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="font-humane font-bold uppercase text-6xl md:text-7xl leading-tight mb-6">
            About Me
          </h1>
          <p className="font-neue text-lg md:text-xl leading-relaxed mb-4">
            sup, I&apos;m <span className="font-medium">Sai Ashish Vure</span>.
          </p>

          <p>
            The point of this website is so that I could have a piece of myself out there and a
            space just for myself and my creations.
          </p>
        </div>
      </div>
    </main>
  );
}
