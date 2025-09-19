import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 text-white">
      <div className="font-bold text-xl tracking-wide">
        <Link href="/">Mini-Blog-IBM</Link>
      </div>
      <div className="flex gap-4">
        <Link
          href="/"
          className="px-4 py-2 rounded font-bold no-underline hover:bg-gray-800 transition"
        >
          Home
        </Link>
        <Link
          href="/history"
          className="px-4 py-2 rounded font-bold no-underline hover:bg-gray-800 transition"
        >
          History
        </Link>
        <Link
          href="/about"
          className="px-4 py-2 rounded font-bold no-underline hover:bg-gray-800 transition"
        >
          About
        </Link>
        <Link
          href="/profile"
          className="px-4 py-2 rounded font-bold no-underline hover:bg-gray-800 transition"
        >
          Profile
        </Link>
      </div>
    </nav>
  );
}
