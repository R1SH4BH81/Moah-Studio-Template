import React from "react";

interface ServicesProps {
  className?: string;
}

const services = [
  {
    index: "01",
    name: "Brand Identity",
    description: "Names, marks, and systems that hold together everywhere.",
  },
  {
    index: "02",
    name: "Web Design",
    description: "Sites people actually remember visiting.",
  },
  {
    index: "03",
    name: "Motion & Interaction",
    description: "Movement with intent. Never decoration.",
  },
  {
    index: "04",
    name: "Art Direction",
    description: "A clear point of view, applied to everything.",
  },
];

export default function Services({ className = "" }: ServicesProps) {
  return (
    <section
      id="what-we-do"
      aria-label="What we do"
      className={`w-full py-16 sm:py-20 md:py-28 border-t border-[#121212]/15 ${className}`}
    >
      <p className="font-satoshi text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-[#121212]/70 mb-8 sm:mb-10">
        What we do
      </p>

      <ul>
        {services.map((service) => (
          <li
            key={service.index}
            className="group border-t border-[#121212]/15 last:border-b py-6 sm:py-8 md:py-10 px-2 sm:px-4 -mx-2 sm:-mx-4 transition-colors duration-200 hover:bg-[#121212] cursor-default"
          >
            <div className="flex items-baseline gap-4 sm:gap-8">
              <span className="font-satoshi text-xs sm:text-sm font-bold tracking-[0.1em] text-[#121212]/60 group-hover:text-[#ff0700] transition-colors duration-200 shrink-0 w-8">
                {service.index}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="font-clash font-medium text-[#121212] group-hover:text-[#ff0700] text-3xl sm:text-5xl md:text-6xl tracking-[-0.02em] leading-[1.02] transition-colors duration-200">
                  {service.name}
                </h3>
                <p className="font-satoshi text-sm sm:text-base text-[#121212]/70 group-hover:text-white/60 mt-2 sm:mt-3 transition-colors duration-200">
                  {service.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
