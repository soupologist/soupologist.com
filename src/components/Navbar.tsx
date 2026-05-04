"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Design", href: "/design" },
  { name: "Music", href: "/music" },
  { name: "Film", href: "/film" },
  { name: "W*rk", href: "/work" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Subtle gradient for readability */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 to-transparent pointer-events-none" />

      <div className="relative mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between py-6 font-neue">
          {/* Left: Site Name */}
          <Link href="/" className="text-base tracking-wide">
            soupologist
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm tracking-wide"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-sm">
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-md">
          <div className="mx-auto px-6 pb-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
