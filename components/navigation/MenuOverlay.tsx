"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "home", number: "01", label: "HOME", description: "Meet Pugal." },
  { id: "career", number: "02", label: "CAREER", description: "Direction and foundation." },
  { id: "work", number: "03", label: "WORK", description: "Projects and case studies." },
  { id: "journey", number: "04", label: "JOURNEY", description: "How the path is developing." },
  { id: "skills", number: "05", label: "SKILLS", description: "Technical capabilities." },
  { id: "lab", number: "06", label: "LAB", description: "Experiments beyond the resume." },
  { id: "think", number: "07", label: "THINK", description: "Ideas behind the work." },
  { id: "about", number: "08", label: "ABOUT", description: "The person behind the systems." },
  { id: "contact", number: "09", label: "CONTACT", description: "Start a conversation." },
];

export default function MenuOverlay() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={open}
        className="border-b border-[#E9E6DE] pb-1 font-mono text-xs tracking-wider transition-opacity hover:opacity-50"
      >
        MENU
      </button>

      <div
        className={`fixed inset-0 z-[100] bg-[#0B0D0D] text-[#E9E6DE] transition-all duration-500 ${
          open ? "visible opacity-100" : "invisible pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute left-0 right-0 top-0 flex items-center justify-between px-6 py-6 md:px-10">
          <div className="font-mono text-sm tracking-[0.18em]">PUGAL</div>

          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close navigation menu"
            className="border-b border-[#E9E6DE] pb-1 font-mono text-xs tracking-wider transition-opacity hover:opacity-50"
          >
            CLOSE ×
          </button>
        </div>

        <div className="h-full overflow-y-auto px-6 pb-16 pt-28 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 grid gap-6 md:grid-cols-[180px_1fr]">
              <div className="font-mono text-[10px] tracking-widest text-[#686B66]">
                PERSONAL PORTFOLIO
              </div>

              <p className="max-w-xl text-sm leading-relaxed text-[#92958F] md:text-base">
                Career, capabilities, projects, experiments, and the person
                behind the work.
              </p>
            </div>

            <nav>
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => setOpen(false)}
                  className="group relative block border-t border-[#30332F] py-6 md:py-7"
                >
                  <div className="grid items-center gap-5 md:grid-cols-[90px_1fr_auto]">
                    <span className="font-mono text-xs text-[#686B66]">
                      {section.number}
                    </span>

                    <div>
                      <div className="text-[clamp(2.1rem,5vw,5rem)] font-medium uppercase leading-[0.82] tracking-[-0.065em] transition-transform duration-500 group-hover:translate-x-2">
                        {section.label}
                      </div>

                      <div className="mt-3 font-mono text-[9px] tracking-[0.1em] text-[#686B66]">
                        {section.description}
                      </div>
                    </div>

                    <span className="hidden text-2xl transition-transform duration-500 group-hover:translate-x-2 md:block">
                      →
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 h-px w-0 bg-[#F04A35] transition-all duration-700 group-hover:w-full" />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
