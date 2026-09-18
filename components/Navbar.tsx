"use client";

import React, { useState } from "react";
import Link from "next/link";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className = "" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "WHO WE ARE", href: "#who-we-are" },
    { name: "OUR WORK", href: "#our-work" },
    { name: "WHAT WE DO", href: "#what-we-do" },
    { name: "WHY US", href: "#why-us" },
  ];

  return (
    <header className={`w-full z-20 select-none ${className}`}>
      <nav className="w-full flex items-center justify-between text-[#121212]">
        {/* Brand / Left */}
        <div className="flex items-center">
          <Link
            href="/"
            className="font-satoshi text-[1.25rem] sm:text-[1.35rem] md:text-[1.45rem] font-medium tracking-tight hover:opacity-75 transition-opacity"
          >
            We are
          </Link>
        </div>

        {/* Center Nav Links (Desktop) */}
        <div className="hidden md:flex items-center gap-7 lg:gap-10 tracking-[0.06em] text-[11px] lg:text-[11.5px] font-bold">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative py-1 group transition-colors duration-200 hover:text-black"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#121212] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Right CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center bg-[#121212] text-[#ff0700] hover:text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-[10.5px] sm:text-[11.5px] font-bold tracking-[0.08em] uppercase transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-sm"
          >
            LET&apos;S TALK
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-[#121212] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-[#121212]/15 flex flex-col gap-3 font-bold text-xs tracking-wider">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 text-[#121212] hover:text-black transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
