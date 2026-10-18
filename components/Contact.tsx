import React from "react";

interface ContactProps {
  className?: string;
}

export default function Contact({ className = "" }: ContactProps) {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className={`w-full py-20 sm:py-28 md:py-36 border-t border-[#121212]/15 text-center ${className}`}
    >
      <p className="font-satoshi text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-[#121212]/70 mb-6 sm:mb-8">
        Have something to make?
      </p>
      <a
        href="mailto:hello@moah.studio"
        className="inline-block font-clash font-semibold text-[#121212] text-[17vw] sm:text-[14vw] leading-[0.9] tracking-[-0.03em] whitespace-nowrap select-none transition-transform duration-500 ease-out hover:scale-[1.02]"
      >
        Let&apos;s talk
      </a>
      <p className="mt-6 sm:mt-8">
        <a
          href="mailto:hello@moah.studio"
          className="font-satoshi text-sm sm:text-base font-bold tracking-[0.06em] text-[#121212] underline underline-offset-4 decoration-2 hover:opacity-70 transition-opacity"
        >
          hello@moah.studio
        </a>
      </p>
      <p className="font-satoshi text-xs sm:text-sm text-[#121212]/60 mt-3">
        Currently taking on new projects.
      </p>
    </section>
  );
}
