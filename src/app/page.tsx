'use client';

import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FDF5D7] flex justify-center overflow-hidden">
      <div className="w-full flex flex-col md:flex-row items-center justify-between border-2 px-16">
        {/* Left Text Section */}
        <div className="text-left md:text-left">
          <h1 className="text-9xl md:text-[15vw] font-extrabold font-humane leading-tight">
            SOUPOLOGIST
          </h1>
          <p className="text-lg font-medium leading-tight">THE CREATIONS OF SAI ASHISH VURE</p>
          <p className="text-lg">(and ms paint)</p>
        </div>

        {/* Right Image Section */}
        <div className="mt-2 md:mt-0">
          <Image
            src="/images/art/soup.png"
            alt="Soup Image"
            width={2000}
            height={2000}
            className="object-contain max-w-2xl md:max-w-5xl h-auto"
          />
        </div>
      </div>
    </main>
  );
}
