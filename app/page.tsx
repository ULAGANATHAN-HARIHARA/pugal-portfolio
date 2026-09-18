"use client";

import ProjectPreview from "@/components/projects/ProjectPreview";
import TraceEngine from "@/components/trace/TraceEngine";
import TraceField from "@/components/lab/TraceField";
import MenuOverlay from "@/components/navigation/MenuOverlay";
import { projects } from "@/content/projects";
import { profile } from "@/content/profile";
import { journey } from "@/content/journey";
import { experiments } from "@/content/experiments";
import { thoughts } from "@/content/thoughts";
import { career } from "@/content/career";

const navSections = [
  { id: "home", number: "01", label: "HOME" },
  { id: "career", number: "02", label: "CAREER" },
  { id: "work", number: "03", label: "WORK" },
  { id: "journey", number: "04", label: "JOURNEY" },
  { id: "skills", number: "05", label: "SKILLS" },
  { id: "about", number: "06", label: "ABOUT" },
  { id: "contact", number: "07", label: "CONTACT" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0B0D0D] text-[#E9E6DE]">
      <TraceEngine />

      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-6 md:px-10">
        <a
          href="#home"
          className="font-mono text-sm tracking-[0.18em] transition-opacity hover:opacity-60"
        >
          PUGAL
        </a>

        <div className="flex items-center gap-6">
          <span className="hidden font-mono text-[9px] tracking-[0.16em] text-[#686B66] md:block">
            {profile.role}
          </span>
          <MenuOverlay />
        </div>
      </header>

      {/* ======================================================
          01 — IDENTITY
      ====================================================== */}
      <section
        id="home"
        className="relative flex min-h-screen items-center px-6 pb-14 pt-32 md:px-10"
      >
        <div className="mx-auto w-full max-w-[1500px] md:pl-[9%]">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_.75fr] xl:gap-24">
            <div className="max-w-5xl">
              <div className="mb-7 flex items-center gap-4 font-mono text-[10px] tracking-[0.18em] text-[#92958F] md:text-xs">
                <span>001 / IDENTITY</span>
                <span className="h-px w-14 bg-[#3A3D39]" />
                <span className="hidden sm:inline">{profile.location}</span>
              </div>

              <h1 className="font-sans text-[clamp(5rem,12vw,12rem)] font-semibold uppercase leading-[0.72] tracking-[-0.085em]">
                {profile.name}
              </h1>

              <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs tracking-[0.15em] text-[#B9BBB5] md:text-sm">
                <span className="h-px w-10 bg-[#F04A35]" />
                <span>CREATIVE TECHNOLOGIST</span>
                <span className="text-[#555952]">/</span>
                <span>AI ENGINEER</span>
              </div>

              <h2 className="mt-12 max-w-5xl font-sans text-[clamp(2.7rem,6vw,6.5rem)] font-normal uppercase leading-[0.88] tracking-[-0.06em]">
                {profile.hero.headline}
              </h2>

              <p className="mt-9 max-w-2xl text-base leading-relaxed text-[#92958F] md:text-lg">
                {profile.hero.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {profile.focus.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#383B37] bg-[#111413] px-3.5 py-2 font-mono text-[9px] tracking-[0.13em] text-[#B9BBB5]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-11 flex flex-wrap items-center gap-7">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-4 font-mono text-xs tracking-[0.16em] md:text-sm"
                >
                  <span className="border-b border-[#E9E6DE] pb-2">
                    VIEW MY WORK
                  </span>
                  <span className="transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </a>

                <a
                  href="#career"
                  className="font-mono text-[10px] tracking-[0.14em] text-[#92958F] transition-colors hover:text-[#E9E6DE]"
                >
                  CAREER SNAPSHOT ↓
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <CareerArtifact />
            </div>
          </div>

          <div className="mt-16 flex items-end justify-between border-t border-[#2D302D] pt-5 md:mt-20">
            <div className="font-mono text-[9px] leading-relaxed tracking-[0.15em] text-[#686B66]">
              {profile.location}
              <br />
              EST. 2004
            </div>

            <div className="font-mono text-[9px] tracking-[0.15em] text-[#686B66]">
              TRACE / PERSONAL CAREER PROFILE
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          02 — CAREER SNAPSHOT
      ====================================================== */}
      <section
        id="career"
        className="relative border-t border-[#2D302D] px-6 py-28 md:px-10 md:py-36"
      >
        <div className="mx-auto w-full max-w-[1250px] md:pl-[9%]">
          <SectionHeader
            number="02"
            eyebrow="CAREER SNAPSHOT"
            title="THE PERSON BEHIND THE WORK."
            description="A quick view of the direction, foundation, and areas I am building toward."
          />

          <div className="mt-16 border-t border-[#363936]">
            {career.map((item) => (
              <article
                key={item.code}
                className="group grid gap-8 border-b border-[#363936] py-10 md:grid-cols-[110px_1fr_190px] md:gap-12 md:py-12"
              >
                <div className="font-mono text-xs text-[#F04A35]">
                  {item.year}
                </div>

                <div>
                  <div className="font-mono text-[9px] tracking-[0.14em] text-[#686B66]">
                    {item.code} / {item.type}
                  </div>

                  <h3 className="mt-4 text-[clamp(2.5rem,5vw,5rem)] uppercase leading-[0.82] tracking-[-0.055em] transition-transform duration-500 group-hover:translate-x-2">
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#92958F] md:text-lg">
                    {item.text}
                  </p>
                </div>

                <div className="flex flex-wrap content-start gap-x-4 gap-y-2 md:justify-end">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[9px] tracking-[0.1em] text-[#686B66]"
                    >
                      [{tag}]
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-3xl text-2xl leading-tight tracking-[-0.035em] text-[#D9D6CE] md:text-4xl">
              My career is developing at the intersection of artificial intelligence,
              software engineering, computer vision, and practical systems.
            </p>

            <div className="font-mono text-[9px] leading-relaxed tracking-[0.15em] text-[#686B66] md:text-right">
              CURRENT STATUS
              <br />
              {profile.status}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          03 — WORK
      ====================================================== */}
      <section
        id="work"
        className="relative border-t border-[#2D302D] px-6 py-28 md:px-10 md:py-36"
      >
        <div className="mx-auto w-full max-w-[1250px] md:pl-[9%]">
          <SectionHeader
            number="03"
            eyebrow="SELECTED WORK"
            title="THINGS I HAVE BUILT."
            description="A selection of projects across artificial intelligence, software engineering, computer vision, product interaction, and visual computing."
          />

          <div className="mt-16 space-y-0">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="border-t border-[#363936] py-12 md:py-16"
              >
                <div className="grid gap-10 lg:grid-cols-[80px_1fr_1.05fr] lg:items-center">
                  <div className="font-mono text-[10px] tracking-[0.14em] text-[#F04A35]">
                    {project.number}
                  </div>

                  <div>
                    <div className="font-mono text-[9px] tracking-[0.14em] text-[#92958F]">
                      {project.category}
                    </div>

                    <h3 className="mt-4 text-[clamp(3.2rem,6vw,6.5rem)] uppercase leading-[0.78] tracking-[-0.065em]">
                      {project.name}
                    </h3>

                    <p className="mt-5 max-w-xl text-base leading-relaxed text-[#B9BBB5] md:text-lg">
                      {project.tagline}
                    </p>

                    <div className="mt-5 font-mono text-[9px] tracking-[0.12em] text-[#686B66]">
                      ROLE / {project.role}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                      {project.stack.map((technology) => (
                        <span
                          key={technology}
                          className="font-mono text-[9px] tracking-[0.1em] text-[#686B66]"
                        >
                          [{technology}]
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex items-center gap-5">
                      <a
                        href={`/work/${project.slug}`}
                        className="group/link inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.14em]"
                      >
                        <span className="border-b border-[#E9E6DE] pb-2">
                          VIEW CASE STUDY
                        </span>
                        <span className="transition-transform duration-300 group-hover/link:translate-x-2">
                          →
                        </span>
                      </a>

                      <span className="font-mono text-[9px] tracking-[0.12em] text-[#555952]">
                        {project.year} / {project.status}
                      </span>
                    </div>
                  </div>

                  <div>
                    <ProjectPreview
                      type={project.name}
                      number={project.number}
                    />

                    <div className="mt-4 grid grid-cols-3 gap-3">
                      {project.highlights.map((highlight, index) => (
                        <div
                          key={highlight}
                          className="border-t border-[#363936] pt-3"
                        >
                          <div className="font-mono text-[8px] tracking-[0.12em] text-[#F04A35]">
                            0{index + 1}
                          </div>
                          <div className="mt-2 text-xs leading-snug text-[#92958F]">
                            {highlight}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 border-t border-[#363936] pt-7 font-mono text-[9px] tracking-[0.13em] text-[#686B66]">
            EACH PROJECT / QUESTION → PROBLEM → EXPERIMENT → SYSTEM → OUTCOME
          </div>
        </div>
      </section>

      {/* ======================================================
          04 — JOURNEY
      ====================================================== */}
      <section
        id="journey"
        className="relative border-t border-[#2D302D] px-6 py-28 md:px-10 md:py-36"
      >
        <div className="mx-auto w-full max-w-[1250px] md:pl-[9%]">
          <SectionHeader
            number="04"
            eyebrow="JOURNEY"
            title="HOW THE CAREER IS TAKING SHAPE."
            description="The trace is not only navigation. It represents the progression from learning, to building, to systems thinking."
          />

          <div className="relative mt-20">
            <div className="absolute bottom-0 left-[49px] top-0 hidden w-px bg-[#363936] md:block" />

            <div className="space-y-0">
              {journey.map((item) => (
                <article
                  key={item.year}
                  className="group relative grid gap-8 border-t border-[#363936] py-10 md:grid-cols-[100px_1fr_180px] md:gap-12 md:py-14"
                >
                  <div className="font-mono text-xs text-[#F04A35]">
                    {item.year}
                  </div>

                  <div>
                    <div className="font-mono text-[9px] tracking-[0.14em] text-[#686B66]">
                      {item.code}
                    </div>

                    <h3 className="mt-4 text-[clamp(2.4rem,5vw,5rem)] uppercase leading-[0.82] tracking-[-0.055em] transition-transform duration-500 group-hover:translate-x-2">
                      {item.title}
                    </h3>

                    <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#92958F]">
                      {item.text}
                    </p>
                  </div>

                  <div className="flex flex-wrap content-start gap-2 md:justify-end">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[9px] tracking-[0.12em] text-[#686B66]"
                      >
                        [{tag}]
                      </span>
                    ))}
                  </div>

                  <span className="absolute left-[45px] top-[49px] hidden h-2.5 w-2.5 rounded-full border border-[#777A73] bg-[#0B0D0D] transition-all duration-300 group-hover:border-[#F04A35] group-hover:bg-[#F04A35] md:block" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          05 — SKILLS
      ====================================================== */}
      <section
        id="skills"
        className="relative border-t border-[#2D302D] px-6 py-28 md:px-10 md:py-36"
      >
        <div className="mx-auto w-full max-w-[1250px] md:pl-[9%]">
          <SectionHeader
            number="05"
            eyebrow="CAPABILITIES"
            title="WHAT I WORK WITH."
            description="A practical view of the technical areas that shape the portfolio."
          />

          <div className="mt-16 grid border-t border-[#363936] md:grid-cols-2">
            <SkillBlock
              number="01"
              title="ARTIFICIAL INTELLIGENCE"
              items={["AI / ML", "Computer Vision", "LLM Systems", "PyTorch"]}
            />
            <SkillBlock
              number="02"
              title="SOFTWARE ENGINEERING"
              items={["Python", "TypeScript", "React", "Next.js", "Node.js"]}
            />
            <SkillBlock
              number="03"
              title="DATA + BACKEND"
              items={["SQL", "PostgreSQL", "MongoDB", "APIs", "Data Systems"]}
            />
            <SkillBlock
              number="04"
              title="SYSTEMS + TOOLS"
              items={["Git", "Docker", "Cloud", "Interactive Systems", "Creative Coding"]}
            />
          </div>

          <div className="mt-16 grid gap-10 border-t border-[#363936] pt-8 md:grid-cols-[1fr_auto]">
            <div>
              <div className="font-mono text-[9px] tracking-[0.14em] text-[#686B66]">
                INTERESTS
              </div>
              <div className="mt-5 flex max-w-3xl flex-wrap gap-x-7 gap-y-3">
                {profile.interests.map((interest) => (
                  <span
                    key={interest}
                    className="text-lg text-[#B9BBB5] md:text-xl"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="font-mono text-[9px] leading-relaxed tracking-[0.14em] text-[#686B66] md:text-right">
              LEARNING IS PART OF THE TRACE
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          LAB — EXPERIMENTAL LAYER
      ====================================================== */}
      <section
        id="lab"
        className="relative border-t border-[#2D302D] px-6 py-28 md:px-10 md:py-32"
      >
        <div className="mx-auto w-full max-w-[1250px] md:pl-[9%]">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <div className="font-mono text-xs tracking-[0.14em] text-[#92958F]">
                06 / LAB
              </div>
              <h2 className="mt-7 max-w-4xl text-[clamp(3.25rem,7vw,7rem)] font-medium uppercase leading-[0.84] tracking-[-0.065em]">
                EXPERIMENTS
                <br />
                BEYOND THE RESUME.
              </h2>
            </div>

            <p className="max-w-sm text-base leading-relaxed text-[#92958F]">
              A smaller layer of the portfolio for interaction studies,
              creative coding, and ideas that do not fit neatly into a job
              title.
            </p>
          </div>

          <div className="mt-14">
            <TraceField />
          </div>

          <div className="mt-10 grid gap-0 md:grid-cols-3">
            {experiments.map((experiment) => (
              <article
                key={experiment.number}
                className="border-t border-[#363936] p-6 first:pl-0 md:border-l md:border-t-0 md:pl-8"
              >
                <div className="font-mono text-[9px] tracking-[0.14em] text-[#686B66]">
                  EXPERIMENT / {experiment.number}
                </div>
                <h3 className="mt-4 text-xl uppercase tracking-[-0.03em]">
                  {experiment.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#92958F]">
                  {experiment.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          THINK — OPTIONAL DEEPER PROFILE
      ====================================================== */}
      <section
        id="think"
        className="relative border-t border-[#2D302D] px-6 py-28 md:px-10 md:py-32"
      >
        <div className="mx-auto w-full max-w-[1250px] md:pl-[9%]">
          <div className="font-mono text-xs tracking-[0.14em] text-[#92958F]">
            07 / THINK
          </div>

          <div className="mt-7 grid gap-10 md:grid-cols-[1fr_280px]">
            <h2 className="max-w-5xl text-[clamp(3.25rem,7vw,7rem)] font-medium uppercase leading-[0.84] tracking-[-0.065em]">
              HOW I THINK
              <br />
              ABOUT TECHNOLOGY.
            </h2>

            <p className="text-base leading-relaxed text-[#92958F]">
              The work is shaped by questions about intelligent systems,
              interfaces, uncertainty, and making complex technology easier to
              understand.
            </p>
          </div>

          <div className="mt-16 border-t border-[#363936]">
            {thoughts.map((thought) => (
              <article
                key={thought.number}
                className="grid gap-7 border-b border-[#363936] py-10 md:grid-cols-[90px_1fr_170px]"
              >
                <div className="font-mono text-xs text-[#F04A35]">
                  {thought.number}
                </div>

                <div>
                  <div className="font-mono text-[9px] tracking-[0.14em] text-[#686B66]">
                    {thought.signal}
                  </div>
                  <h3 className="mt-4 max-w-4xl text-2xl uppercase leading-[0.9] tracking-[-0.04em] md:text-4xl">
                    {thought.title}
                  </h3>
                  <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#B9BBB5] md:text-lg">
                    {thought.thesis}
                  </p>
                </div>

                <div className="font-mono text-[9px] leading-relaxed tracking-[0.12em] text-[#686B66] md:text-right">
                  NOTE / {thought.number}
                  <br />
                  ACTIVE
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          08 — ABOUT
      ====================================================== */}
      <section
        id="about"
        className="relative border-t border-[#2D302D] px-6 py-28 md:px-10 md:py-36"
      >
        <div className="mx-auto w-full max-w-[1250px] md:pl-[9%]">
          <SectionHeader
            number="08"
            eyebrow="ABOUT"
            title="THE PERSON BEHIND THE SYSTEMS."
            description="A concise profile for recruiters, interviewers, collaborators, and anyone interested in the work."
          />

          <div className="mt-16 grid gap-16 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <p className="max-w-4xl text-[clamp(2rem,4vw,4rem)] leading-[0.95] tracking-[-0.045em]">
                {profile.about}
              </p>

              <div className="mt-12 grid gap-8 border-t border-[#363936] pt-7 sm:grid-cols-2">
                <div>
                  <div className="font-mono text-[9px] tracking-[0.14em] text-[#686B66]">
                    EDUCATION
                  </div>
                  <div className="mt-4 text-2xl uppercase tracking-[-0.035em]">
                    {profile.education.degree}
                  </div>
                  <div className="mt-2 text-sm text-[#92958F]">
                    {profile.education.field}
                  </div>
                  <div className="mt-3 font-mono text-[9px] tracking-[0.12em] text-[#686B66]">
                    {profile.education.period}
                  </div>
                </div>

                <div>
                  <div className="font-mono text-[9px] tracking-[0.14em] text-[#686B66]">
                    CAREER DIRECTION
                  </div>
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                    {profile.careerDirection.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-[10px] tracking-[0.1em] text-[#B9BBB5]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-[#363936] pt-6">
              <div className="font-mono text-[9px] tracking-[0.14em] text-[#686B66]">
                TECHNICAL TOOLKIT
              </div>

              <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
                {profile.skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 border-b border-[#202321] pb-2"
                  >
                    <span className="font-mono text-[8px] text-[#F04A35]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-[#B9BBB5]">{skill}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t border-[#363936] pt-6">
                <div className="font-mono text-[9px] tracking-[0.14em] text-[#686B66]">
                  INTERESTS
                </div>

                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                  {profile.interests.map((interest) => (
                    <span
                      key={interest}
                      className="text-sm text-[#92958F]"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          09 — CONTACT
      ====================================================== */}
      <section
        id="contact"
        className="relative border-t border-[#2D302D] px-6 py-28 md:px-10 md:py-36"
      >
        <div className="mx-auto w-full max-w-[1250px] md:pl-[9%]">
          <div className="font-mono text-xs tracking-[0.14em] text-[#92958F]">
            09 / CONTACT
          </div>

          <div className="mt-8 grid gap-14 md:grid-cols-[1fr_300px]">
            <div>
              <h2 className="max-w-6xl text-[clamp(3.5rem,9vw,9rem)] font-medium uppercase leading-[0.78] tracking-[-0.075em]">
                LET&apos;S BUILD
                <br />
                SOMETHING
                <br />
                USEFUL.
              </h2>

              <p className="mt-9 max-w-2xl text-base leading-relaxed text-[#92958F] md:text-lg">
                Interested in AI engineering, software engineering, machine
                learning, computer vision, and thoughtful technology?
                Let&apos;s connect.
              </p>

              <a
                href={`mailto:${profile.contact.email}`}
                className="group mt-10 inline-flex items-center gap-4 font-mono text-xs tracking-[0.15em] md:text-sm"
              >
                <span className="border-b border-[#E9E6DE] pb-3">
                  {profile.contact.email}
                </span>
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </a>
            </div>

            <div className="md:pt-12">
              <div className="flex items-center gap-3 font-mono text-[9px] tracking-[0.14em] text-[#686B66]">
                <span className="h-2 w-2 rounded-full bg-[#F04A35]" />
                {profile.status}
              </div>

              <div className="mt-10 border-t border-[#363936] pt-5">
                <div className="font-mono text-[9px] tracking-[0.14em] text-[#686B66]">
                  LINKS
                </div>

                <div className="mt-5 space-y-4 font-mono text-[10px] tracking-[0.13em]">
                  <a
                    href="#work"
                    className="group flex justify-between border-b border-[#202321] pb-3 transition-colors hover:text-[#F04A35]"
                  >
                    <span>WORK</span>
                    <span>→</span>
                  </a>

                  <a
                    href="#about"
                    className="group flex justify-between border-b border-[#202321] pb-3 transition-colors hover:text-[#F04A35]"
                  >
                    <span>ABOUT</span>
                    <span>→</span>
                  </a>

                  <a
                    href={`mailto:${profile.contact.email}`}
                    className="group flex justify-between border-b border-[#202321] pb-3 transition-colors hover:text-[#F04A35]"
                  >
                    <span>EMAIL</span>
                    <span>→</span>
                  </a>
                </div>

                <div className="mt-7 font-mono text-[9px] leading-relaxed tracking-[0.12em] text-[#555952]">
                  GITHUB / LINKEDIN / RESUME
                  <br />
                  ADD VERIFIED LINKS BEFORE DEPLOYMENT
                </div>
              </div>
            </div>
          </div>

          <footer className="mt-24 flex flex-col justify-between gap-5 border-t border-[#363936] pt-6 font-mono text-[9px] tracking-[0.14em] text-[#686B66] md:flex-row">
            <span>PUGAL / PERSONAL CAREER PORTFOLIO</span>
            <span>TRACE / {profile.year}</span>
          </footer>
        </div>
      </section>
    </main>
  );
}

function SectionHeader({
  number,
  eyebrow,
  title,
  description,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="grid gap-8 md:grid-cols-[150px_1fr]">
      <div className="font-mono text-[10px] tracking-[0.14em] text-[#F04A35]">
        {number} / {eyebrow}
      </div>

      <div>
        <h2 className="max-w-5xl text-[clamp(3.1rem,7vw,7rem)] font-medium uppercase leading-[0.84] tracking-[-0.065em]">
          {title}
        </h2>

        <p className="mt-9 max-w-2xl text-base leading-relaxed text-[#92958F] md:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}

function CareerItem({
  label,
  title,
  text,
  detail,
}: {
  label: string;
  title: string;
  text: string;
  detail: string;
}) {
  return (
    <div className="border-b border-[#363936] p-0 py-8 md:border-r md:border-b-0 md:p-8 md:first:pl-0">
      <div className="font-mono text-[9px] tracking-[0.14em] text-[#686B66]">
        {label}
      </div>

      <h3 className="mt-5 text-2xl uppercase tracking-[-0.04em] md:text-3xl">
        {title}
      </h3>

      <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#92958F]">
        {text}
      </p>

      <div className="mt-8 font-mono text-[9px] tracking-[0.12em] text-[#555952]">
        {detail}
      </div>
    </div>
  );
}

function SkillBlock({
  number,
  title,
  items,
}: {
  number: string;
  title: string;
  items: string[];
}) {
  return (
    <div className="group border-b border-[#363936] p-0 py-9 md:p-9 md:first:pl-0">
      <div className="flex items-start justify-between gap-5">
        <span className="font-mono text-[9px] tracking-[0.14em] text-[#F04A35]">
          {number}
        </span>
        <span className="h-2 w-2 rounded-full border border-[#555952] transition-colors group-hover:border-[#F04A35] group-hover:bg-[#F04A35]" />
      </div>

      <h3 className="mt-7 text-2xl uppercase tracking-[-0.04em] md:text-4xl">
        {title}
      </h3>

      <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
        {items.map((item) => (
          <span
            key={item}
            className="font-mono text-[10px] tracking-[0.12em] text-[#92958F]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function InfoList({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="border-t border-[#363936] pt-5">
      <div className="font-mono text-[9px] tracking-[0.14em] text-[#686B66]">
        {label}
      </div>

      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
        {items.map((item) => (
          <span key={item} className="text-base text-[#B9BBB5]">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function CareerArtifact() {
  return (
    <div className="relative ml-auto aspect-[0.8] w-full max-w-[450px] overflow-hidden border border-[#30332F] bg-[#101312]">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(160,164,156,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(160,164,156,.07) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="absolute left-0 right-0 top-1/2 h-px bg-[#30342F]" />
      <div className="absolute bottom-0 left-1/2 top-0 w-px bg-[#30342F]" />

      <svg
        viewBox="0 0 500 650"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <path
          d="M50 510 C110 470 120 350 185 390 C250 430 250 250 325 285 C390 315 410 210 465 165"
          fill="none"
          stroke="#777A73"
          strokeWidth="1"
        />

        <path
          d="M50 510 C110 470 120 350 185 390 C250 430 250 250 325 285 C390 315 410 210 465 165"
          fill="none"
          stroke="#F04A35"
          strokeWidth="2"
          strokeDasharray="3 12"
        />

        {[
          [50, 510],
          [185, 390],
          [325, 285],
          [465, 165],
        ].map(([cx, cy], index) => (
          <g key={`${cx}-${cy}`}>
            <circle
              cx={cx}
              cy={cy}
              r={index === 3 ? 7 : 5}
              fill={index === 3 ? "#F04A35" : "#101312"}
              stroke={index === 3 ? "#F04A35" : "#858981"}
              strokeWidth="1"
            />
            {index === 3 && (
              <>
                <circle
                  cx={cx}
                  cy={cy}
                  r="25"
                  fill="none"
                  stroke="#F04A35"
                  strokeWidth="1"
                  opacity=".45"
                />
                <circle
                  cx={cx}
                  cy={cy}
                  r="48"
                  fill="none"
                  stroke="#666A63"
                  strokeWidth="1"
                  opacity=".25"
                />
              </>
            )}
          </g>
        ))}
      </svg>

      <div className="absolute left-5 top-5 font-mono text-[9px] tracking-[0.16em] text-[#686B66]">
        CAREER TRACE / 001—004
      </div>

      <div className="absolute right-5 top-5 font-mono text-[9px] tracking-[0.16em] text-[#686B66]">
        PUGAL / 2026
      </div>

      <div className="absolute bottom-5 left-5 font-mono text-[9px] leading-relaxed tracking-[0.13em] text-[#686B66]">
        LEARN
        <br />
        BUILD
        <br />
        SYSTEMS
        <br />
        NEXT
      </div>

      <div className="absolute bottom-5 right-5 font-mono text-[9px] tracking-[0.13em] text-[#686B66]">
        TRACE / ACTIVE
      </div>
    </div>
  );
}
