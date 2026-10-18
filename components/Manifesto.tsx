import React from "react";

interface ManifestoProps {
  className?: string;
}

export default function Manifesto({ className = "" }: ManifestoProps) {
  return (
    <section
      id="who-we-are"
      aria-label="Who we are"
      className={`w-full py-16 sm:py-20 md:py-28 border-t border-[#121212]/15 ${className}`}
    >
      <p className="font-satoshi text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-[#121212]/70 mb-6 sm:mb-8">
        Who we are
      </p>
      <p className="font-clash font-medium text-[#121212] text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.02em] max-w-6xl">
        Moah is an independent creative studio. We design brands, websites, and
        motion for companies that refuse to blend in.
      </p>
    </section>
  );
}
