"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white relative z-50">
      {/* Logo */}
      <div className="font-bold text-xl tracking-wide">
        <Link href="/">Mini Blog IBM</Link>
      </div>

      {/* Tombol Hamburger */}
      <button
        className="sm:hidden focus:outline-none cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Menu desktop */}
      <div className="hidden sm:flex gap-6">
        <Link href="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link href="/history" className="hover:text-gray-300">
          History
        </Link>
        <Link href="/about" className="hover:text-gray-300">
          About
        </Link>
        <Link href="/profile" className="hover:text-gray-300">
          Profile
        </Link>
      </div>

      {/* Overlay mobile (blur hanya di belakang menu, bukan navbar) */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900/80 backdrop-blur-md sm:hidden z-40 p-6 flex flex-col gap-4">
          <Link
            href="/"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/history"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            History
          </Link>
          <Link
            href="/about"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/profile"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Profile
          </Link>
        </div>
      )}
    </nav>
  );
}
