"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo or Site Name */}
          <Link href="/" className="text-xl font-semibold">
            JobHunt
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8">
            <Link href="/" className="hover:text-blue-400">Home</Link>
            <Link href="/about" className="hover:text-blue-400">About Us</Link>
            <Link href="/jobs" className="hover:text-blue-400">Jobs</Link>
            <div className="flex gap-2">
              <Link href="/signup" className="hover:text-blue-400">Signup</Link>
              <span>or</span>
              <Link href="/login" className="hover:text-blue-400">Login</Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 pb-4 space-y-2">
          <Link href="/" className="block hover:text-blue-400">Home</Link>
          <Link href="/about" className="block hover:text-blue-400">About Us</Link>
          <Link href="/jobs" className="block hover:text-blue-400">Jobs</Link>
          <div className="flex gap-2">
            <Link href="/signup" className="hover:text-blue-400">Signup</Link>
            <span>or</span>
            <Link href="/login" className="hover:text-blue-400">Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
