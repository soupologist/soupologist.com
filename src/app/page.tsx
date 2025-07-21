export default function HomePage() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Fullscreen background image */}
      <img
        src="/images/rightbar.jpeg"
        alt="Soupologist Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Text Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h2 className="text-xs md:text-sm tracking-[0.2em] uppercase text-white mb-4">
          The creations of Sai Ashish Vure
        </h2>

        <div className="relative inline-block text-center px-6 py-4">
          {/* Noisy overlay */}
          <div className="pointer-events-none absolute inset-0 z-10 mix-blend-soft-light opacity-30">
            <img src="/images/grain.png" alt="" className="w-full h-full object-cover" />
          </div>

          {/* Gradient Text */}
          <h1
            className="relative z-20 text-[20vw] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-red-900"
            style={{ fontFamily: 'var(--font-humane)' }}
          >
            SOUPOLOGIST
          </h1>
        </div>
      </div>
    </div>
  );
}
