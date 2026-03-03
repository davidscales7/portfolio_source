"use client";
import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="group inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white/80 group-hover:bg-white" />
          <span className="font-semibold tracking-tight">ds</span>
          <span className="text-sm text-white/50">.dev</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-2 text-sm text-white/70">
          <Link href="/" className="rounded-lg px-3 py-2 hover:bg-white/5 hover:text-white">
            Home
          </Link>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="/cv.pdf"
            className="btn btn-ghost ml-2"
            target="_blank"
            rel="noreferrer"
          >
            CV
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-5 bg-white/70 transition-transform duration-200 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-5 bg-white/70 transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-white/70 transition-transform duration-200 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="sm:hidden border-t border-white/10 bg-zinc-950/95 px-4 py-3 flex flex-col gap-1 text-sm text-white/70">
          <Link href="/" className="rounded-lg px-3 py-2 hover:bg-white/5 hover:text-white" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 hover:bg-white/5 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="/cv.pdf"
            className="btn btn-ghost mt-1 w-full justify-center"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            CV
          </a>
        </div>
      )}
    </header>
  );
}