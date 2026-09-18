"use client";

import React from "react";

interface HeroProps {
  title?: string;
  className?: string;
}

export default function Hero({ title = "Moah", className = "" }: HeroProps) {
  return (
    <section
      className={`w-full flex-1 flex flex-col items-center justify-center relative select-none py-4 sm:py-6 md:py-8 ${className}`}
      aria-label="Studio Brand Hero"
    >
      {/* Central Brand Typography */}
      <div className="w-full flex items-center justify-center text-center overflow-hidden">
        <h1 className="font-clash font-semibold text-[#121212] text-[25vw] md:text-[27.5vw] lg:text-[29vw] leading-[0.76] tracking-[-0.038em] whitespace-nowrap select-none transition-transform duration-700 ease-out hover:scale-[1.012]">
          {title}
        </h1>
      </div>
    </section>
  );
}
