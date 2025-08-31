'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Films', href: '/films' },
  { label: 'Music', href: '/music' },
  { label: 'Projects', href: '/projects' },
  { label: 'Designs', href: '/designs' },
  { label: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <div className="absolute top-6 right-6 z-40 hidden md:flex space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-lg uppercase font-medium hover:text-blue-500 transition"
            style={{ fontFamily: 'var(--font-neue)' }}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Toggle Button for Mobile */}
      <div className="absolute top-6 left-6 z-50 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Fullscreen Overlay Menu (Mobile) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background bg-opacity-95 flex flex-col items-center justify-center space-y-8 text-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {navItems.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * idx }}
              >
                <Link
                  href={item.href}
                  className="text-3xl md:text-5xl tracking-wide hover:text-blue-500 transition font-donerdisplay"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
