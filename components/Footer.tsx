"use client";

import React from "react";

interface FooterProps {
  className?: string;
}

export default function Footer({ className = "" }: FooterProps) {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className={`w-full flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pt-4 pb-1 select-none z-20 ${className}`}
    >
      {/* Bottom Left Studio Tagline */}
      <div className="max-w-xl">
        <p className="font-satoshi text-[1.25rem] sm:text-[1.45rem] md:text-[1.75rem] lg:text-[1.95rem] font-medium leading-[1.12] text-[#121212] tracking-tight">
          A Creative Studio shaping
          <br />
          the paths brands take next.
        </p>
      </div>

      {/* Bottom Right Scroll Indicator */}
      <div className="self-end sm:self-auto">
        <button
          onClick={scrollToNext}
          className="group inline-flex items-center gap-1.5 text-[11px] sm:text-[12px] font-bold tracking-[0.14em] uppercase text-[#121212] hover:opacity-70 transition-all duration-200 cursor-pointer"
          aria-label="Scroll to next section"
        >
          <span>SCROLL</span>
          <svg
            className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5 group-hover:translate-x-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 7h8a4 4 0 0 1 4 4v8" />
            <polyline points="13 15 17 19 21 15" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
