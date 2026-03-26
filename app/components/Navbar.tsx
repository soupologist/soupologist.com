"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Music", href: "/music" },
  { name: "Film", href: "/film" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between py-6">
          {/* Left: Site Name */}
          <Link href="/" className="text-base tracking-tight">
            soupologist
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-sm">
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
        <div className="md:hidden">
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
