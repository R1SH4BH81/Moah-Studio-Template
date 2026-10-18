import React from "react";

interface WorkProps {
  className?: string;
}

const projects = [
  { name: "Nova Athletics", discipline: "Brand Identity" },
  { name: "Atlas Coffee", discipline: "Web Design" },
  { name: "Kino Festival", discipline: "Art Direction" },
  { name: "Meridian", discipline: "Motion & Interaction" },
  { name: "Offset Records", discipline: "Brand Identity" },
  { name: "Halide Optics", discipline: "Web Design" },
];

export default function Work({ className = "" }: WorkProps) {
  return (
    <section
      id="our-work"
      aria-label="Selected work"
      className={`w-full py-16 sm:py-20 md:py-28 border-t border-[#121212]/15 ${className}`}
    >
      <div className="flex items-end justify-between mb-8 sm:mb-12">
        <p className="font-satoshi text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-[#121212]/70">
          Selected work
        </p>
        <p className="font-satoshi text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-[#121212]/70">
          01 — 06
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {projects.map((project, i) => (
          <article
            key={project.name}
            className="bg-[#121212] rounded-2xl sm:rounded-[20px] p-6 sm:p-7 md:p-8 min-h-[11rem] sm:min-h-[13rem] flex flex-col justify-between transition-transform duration-300 ease-out hover:scale-[1.015]"
          >
            <p className="font-clash font-semibold text-[#ff0700] text-5xl sm:text-6xl leading-none tracking-tight">
              {String(i + 1).padStart(2, "0")}
            </p>
            <div>
              <h3 className="font-clash font-medium text-white text-xl sm:text-2xl tracking-tight leading-tight">
                {project.name}
              </h3>
              <p className="font-satoshi text-[11px] sm:text-xs font-bold tracking-[0.14em] uppercase text-white/50 mt-2">
                {project.discipline}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
