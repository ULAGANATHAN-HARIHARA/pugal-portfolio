"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "home", number: "01", label: "HOME" },
  { id: "career", number: "02", label: "CAREER" },
  { id: "work", number: "03", label: "WORK" },
  { id: "journey", number: "04", label: "JOURNEY" },
  { id: "skills", number: "05", label: "SKILLS" },
  { id: "lab", number: "06", label: "LAB" },
  { id: "think", number: "07", label: "THINK" },
  { id: "about", number: "08", label: "ABOUT" },
  { id: "contact", number: "09", label: "CONTACT" },
];

export default function TraceEngine() {
  const [activeSection, setActiveSection] = useState("home");
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(motionQuery.matches);

    updateMotionPreference();
    motionQuery.addEventListener("change", updateMotionPreference);

    return () => motionQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      window.requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const documentHeight =
          document.documentElement.scrollHeight - window.innerHeight;

        const currentProgress =
          documentHeight > 0
            ? Math.min(Math.max(scrollTop / documentHeight, 0), 1)
            : 0;

        setProgress(currentProgress);

        let currentSection = "home";

        sections.forEach((section) => {
          const element = document.getElementById(section.id);
          if (!element) return;

          if (element.getBoundingClientRect().top <= window.innerHeight * 0.45) {
            currentSection = section.id;
          }
        });

        setActiveSection(currentSection);
        ticking = false;
      });

      ticking = true;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const activeIndex = Math.max(
    sections.findIndex((section) => section.id === activeSection),
    0
  );

  return (
    <>
      <div className="pointer-events-none fixed bottom-0 left-[5.5%] top-0 z-40 hidden md:block">
        <svg
          className="h-full w-[90px] overflow-visible"
          viewBox="0 0 90 1000"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M45 0 C18 110 70 170 43 270 C15 370 69 425 45 510 C20 600 72 690 42 785 C18 870 68 930 45 1000"
            fill="none"
            stroke="#3A3D39"
            strokeWidth="1"
          />

          <path
            d="M45 0 C18 110 70 170 43 270 C15 370 69 425 45 510 C20 600 72 690 42 785 C18 870 68 930 45 1000"
            fill="none"
            stroke="#F04A35"
            strokeWidth="1.5"
            pathLength="1"
            strokeDasharray="1"
            strokeDashoffset={1 - progress}
            className={reducedMotion ? "" : "trace-progress"}
          />

          {sections.map((section, index) => {
            const y = (index / (sections.length - 1)) * 1000;
            const active = index === activeIndex;
            const passed = progress >= index / (sections.length - 1);

            return (
              <g key={section.id}>
                {active && !reducedMotion && (
                  <circle
                    cx="45"
                    cy={y}
                    r="13"
                    fill="none"
                    stroke="#F04A35"
                    strokeWidth="1"
                    opacity="0"
                    className="trace-node-pulse"
                  />
                )}

                <circle
                  cx="45"
                  cy={y}
                  r={active ? 5.5 : 3}
                  fill={active || passed ? "#F04A35" : "#0B0D0D"}
                  stroke={active || passed ? "#F04A35" : "#777A73"}
                  strokeWidth="1"
                  className={
                    active && !reducedMotion ? "trace-node-active" : ""
                  }
                />
              </g>
            );
          })}

          {!reducedMotion && (
            <circle
              cx="45"
              cy={progress * 1000}
              r="3.5"
              fill="#F04A35"
              className="trace-signal"
            />
          )}
        </svg>
      </div>

      <nav className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-4 md:right-10 md:flex">
        {sections.map((section, index) => {
          const active = activeSection === section.id;
          const passed = progress >= index / (sections.length - 1);

          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-label={`Go to ${section.label}`}
              className="group flex items-center justify-end gap-3"
            >
              <span
                className={`font-mono text-[9px] tracking-widest transition-all duration-300 ${
                  active
                    ? "translate-x-0 text-[#E9E6DE] opacity-100"
                    : "translate-x-2 text-[#92958F] opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                }`}
              >
                {section.number}
              </span>

              <span
                className={`h-2 w-2 rounded-full border transition-all duration-300 ${
                  active
                    ? "scale-125 border-[#F04A35] bg-[#F04A35]"
                    : passed
                      ? "border-[#F04A35] bg-[#F04A35]"
                      : "border-[#777A73] bg-[#0B0D0D] group-hover:border-[#E9E6DE]"
                }`}
              />
            </a>
          );
        })}
      </nav>

      <div className="fixed bottom-6 right-6 z-50 hidden font-mono text-[9px] tracking-widest text-[#686B66] md:right-10 md:block">
        {sections.find((section) => section.id === activeSection)?.number} /{" "}
        {sections.find((section) => section.id === activeSection)?.label}
      </div>

      <div className="pointer-events-none fixed bottom-0 left-5 top-0 z-40 md:hidden">
        <div className="relative h-full w-px bg-[#343733]">
          <div
            className="absolute left-0 top-0 w-px bg-[#F04A35]"
            style={{ height: `${progress * 100}%` }}
          />

          {sections.map((section, index) => {
            const active = activeSection === section.id;
            const passed = progress >= index / (sections.length - 1);
            const position = (index / (sections.length - 1)) * 100;

            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                aria-label={`Go to ${section.label}`}
                className="pointer-events-auto absolute left-1/2 -translate-x-1/2"
                style={{ top: `${position}%` }}
              >
                <span
                  className={`block rounded-full border transition-all duration-300 ${
                    active
                      ? "h-3 w-3 scale-110 border-[#F04A35] bg-[#F04A35]"
                      : passed
                        ? "h-2 w-2 border-[#F04A35] bg-[#F04A35]"
                        : "h-2 w-2 border-[#777A73] bg-[#0B0D0D]"
                  }`}
                />
              </a>
            );
          })}
        </div>
      </div>

      <div className="pointer-events-none fixed left-9 top-1/2 z-40 -translate-y-1/2 md:hidden">
        <div className="font-mono text-[9px] tracking-widest text-[#686B66] [writing-mode:vertical-rl]">
          {sections.find((section) => section.id === activeSection)?.number} /{" "}
          {sections.find((section) => section.id === activeSection)?.label}
        </div>
      </div>

      <div className="sr-only" aria-live="polite">
        Current section:{" "}
        {sections.find((section) => section.id === activeSection)?.label}
      </div>
    </>
  );
}
