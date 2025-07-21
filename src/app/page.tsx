'use client';

import { motion } from 'framer-motion';

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
        <motion.h2
          className="text-xs md:text-sm tracking-[0.2em] uppercase text-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          The creations of Sai Ashish Vure
        </motion.h2>

        <motion.div
          className="relative inline-block text-center px-6 py-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2, ease: 'easeOut' }}
        >
          {/* Noisy overlay */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-10 mix-blend-soft-light opacity-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
          >
            <img src="/images/grain.png" alt="" className="w-full h-full object-cover" />
          </motion.div>

          {/* Gradient Text */}
          <motion.h1
            className="relative z-20 text-9xl md:text-[20vw] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-red-900"
            style={{ fontFamily: 'var(--font-humane)' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: 'easeOut' }}
          >
            SOUPOLOGIST
          </motion.h1>
        </motion.div>
      </div>
    </div>
  );
}
