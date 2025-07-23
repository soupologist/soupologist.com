'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { label: 'Films', href: '/films' },
  { label: 'Music', href: '/music' },
  { label: 'Projects', href: '/projects' },
  { label: 'Designs', href: '/designs' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <div className="absolute top-6 left-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black bg-opacity-95 flex flex-col items-center justify-center space-y-8 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
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
                  className="text-3xl md:text-5xl tracking-wide hover:text-red-500 transition"
                  onClick={() => setIsOpen(false)}
                  style={{ fontFamily: 'var(--font-donerdisplay)' }}
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
