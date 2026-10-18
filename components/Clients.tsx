import React from "react";

interface ClientsProps {
  className?: string;
}

const clients = [
  "Nova",
  "Atlas",
  "Kino",
  "Meridian",
  "Offset",
  "Prism",
  "Halide",
  "Vantage",
];

export default function Clients({ className = "" }: ClientsProps) {
  return (
    <section
      id="why-us"
      aria-label="Why us"
      className={`w-full py-16 sm:py-20 md:py-28 border-t border-[#121212]/15 ${className}`}
    >
      <p className="font-satoshi text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-[#121212]/70 mb-6 sm:mb-8">
        Why us
      </p>
      <p className="font-clash font-medium text-[#121212] text-2xl sm:text-4xl md:text-5xl leading-[1.08] tracking-[-0.02em] max-w-4xl mb-10 sm:mb-14">
        The short version — we do the work, we hit the date, we pick up the
        phone.
      </p>
      <p className="font-satoshi text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-[#121212]/70 mb-5">
        Selected clients
      </p>
      <p className="font-clash font-medium text-[#121212] text-xl sm:text-2xl md:text-3xl tracking-tight leading-relaxed">
        {clients.map((client, i) => (
          <span key={client}>
            {client}
            {i < clients.length - 1 && (
              <span className="text-[#121212]/30"> / </span>
            )}
          </span>
        ))}
      </p>
    </section>
  );
}
