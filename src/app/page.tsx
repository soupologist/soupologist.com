'use client';

import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Background image with fade-in */}
      <motion.img
        src="/images/rightbar.jpeg"
        alt="Soupologist Hero"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      />

      {/* Text Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.h2
          className="text-xs md:text-sm tracking-[0.2em] uppercase text-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          The creations of Sai Ashish Vure
        </motion.h2>

        {/* Title block */}
        <motion.div
          className="relative inline-block text-center px-6 py-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2, ease: 'easeOut' }}
        >
          {/* Gradient + Grainy Text */}
          <motion.h1
            className="relative z-20 text-9xl md:text-[20vw] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-red-900"
            style={{
              fontFamily: 'var(--font-humane)',
              WebkitBackgroundClip: 'text',
              backgroundImage: `
                linear-gradient(to right, #7f1d1d, #450a0a),
                url('/images/noise.png')
              `,
              backgroundBlendMode: 'overlay',
              backgroundSize: 'cover',
              filter: 'contrast(130%) brightness(110%)',
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: 'easeOut' }}
          >
            SOUPOLOGIST
          </motion.h1>

          {/* Glitch effect (flicker + slight shift) */}
          <motion.div
            className="absolute inset-0 z-30 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.01, 0.02, 0.01, 0.05, 0.01], x: [0, 1, -1, 1, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
              ease: 'easeInOut',
              delay: 2,
            }}
          >
            <h1
              className="text-9xl md:text-[20vw] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-red-900"
              style={{
                fontFamily: 'var(--font-humane)',
                WebkitBackgroundClip: 'text',
                backgroundImage: `
                  linear-gradient(to right, #7f1d1d, #450a0a),
                  url('/images/noise.png')
                `,
                backgroundBlendMode: 'overlay',
                backgroundSize: 'cover',
                filter: 'contrast(130%) brightness(110%)',
              }}
            >
              SOUPOLOGIST
            </h1>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
