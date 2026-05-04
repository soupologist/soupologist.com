export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay (IMPORTANT) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <main className="relative z-10 flex flex-col h-full items-center justify-center text-center px-6">
        <h1 className="text-9xl font-humane font-bold">SOUPOLOGIST</h1>
      </main>
    </div>
  );
}
