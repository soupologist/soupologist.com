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
      {/* Navbar Wrapper */}
      <header className="absolute top-0 left-0 w-full z-50 px-4 md:px-8 py-3 flex items-center justify-between">
        {/* Left - Logo/Title */}
        <Link
          href="/"
          className="text-xl md:text-xl font-bold"
          style={{ fontFamily: 'var(--font-neue)' }}
        >
          soupologist
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm md:text-base uppercase font-medium hover:text-blue-500 transition"
              style={{ fontFamily: 'var(--font-neue)' }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
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
                transition={{ delay: 0.08 * idx }}
              >
                <Link
                  href={item.href}
                  className="text-2xl md:text-4xl tracking-wide hover:text-blue-500 transition font-donerdisplay"
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
