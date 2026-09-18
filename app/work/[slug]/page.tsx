import { notFound } from "next/navigation";
import ProjectPreview from "@/components/projects/ProjectPreview";
import { projects } from "@/content/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen overflow-hidden bg-[#0B0D0D] text-[#E9E6DE]">
      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-6 md:px-10">
        <a
          href="/"
          className="font-mono text-sm tracking-[0.18em] transition-opacity hover:opacity-60"
        >
          PUGAL
        </a>

        <a
          href="/#work"
          className="font-mono text-[10px] tracking-[0.14em] transition-colors hover:text-[#F04A35]"
        >
          ← ALL WORK
        </a>
      </header>

      {/* ======================================================
          PROJECT HEADER
      ====================================================== */}
      <section className="relative flex min-h-screen items-end px-6 pb-20 pt-32 md:px-10 md:pb-24">
        <div className="mx-auto w-full max-w-[1250px] md:pl-[9%]">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] tracking-[0.15em] text-[#92958F]">
                <span>{project.number} / {project.category}</span>
                <span className="text-[#4D514C]">/</span>
                <span>{project.year}</span>
                <span className="text-[#4D514C]">/</span>
                <span>{project.status}</span>
              </div>

              <h1 className="mt-10 text-[clamp(5rem,14vw,13rem)] font-semibold uppercase leading-[0.72] tracking-[-0.085em]">
                {project.name}
              </h1>

              <p className="mt-10 max-w-3xl text-[clamp(1.5rem,3vw,3rem)] leading-[0.98] tracking-[-0.035em] text-[#D9D6CE]">
                {project.tagline}
              </p>

              <p className="mt-7 max-w-2xl text-base leading-relaxed text-[#92958F] md:text-lg">
                {project.description}
              </p>
            </div>

            <div className="border-t border-[#363936] pt-6">
              <div className="font-mono text-[9px] tracking-[0.14em] text-[#686B66]">
                ROLE
              </div>
              <div className="mt-3 text-sm uppercase tracking-[0.03em] text-[#B9BBB5]">
                {project.role}
              </div>

              <div className="mt-8 font-mono text-[9px] tracking-[0.14em] text-[#686B66]">
                STACK
              </div>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                {project.stack.map((technology) => (
                  <span
                    key={technology}
                    className="font-mono text-[9px] tracking-[0.1em] text-[#92958F]"
                  >
                    [{technology}]
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-[#363936] pt-5 font-mono text-[9px] tracking-[0.14em] text-[#686B66]">
            CASE STUDY / {project.number} / TRACE
          </div>
        </div>
      </section>

      {/* ======================================================
          VISUAL ARTIFACT
      ====================================================== */}
      <section className="border-t border-[#2D302D] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1250px] md:pl-[9%]">
          <div className="grid gap-10 md:grid-cols-[90px_1fr]">
            <div className="font-mono text-[9px] tracking-[0.14em] text-[#F04A35]">
              VISUAL
            </div>

            <div>
              <ProjectPreview type={project.name} number={project.number} />
              <div className="mt-4 flex justify-between font-mono text-[9px] tracking-[0.12em] text-[#686B66]">
                <span>PROJECT SYSTEM / LIVE</span>
                <span>{project.category}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          01 QUESTION
      ====================================================== */}
      <CaseSection number="01" label="QUESTION">
        <h2 className="max-w-5xl text-[clamp(2.7rem,6vw,6.5rem)] uppercase leading-[0.86] tracking-[-0.06em]">
          {project.question}
        </h2>
      </CaseSection>

      {/* ======================================================
          02 PROBLEM
      ====================================================== */}
      <CaseSection number="02" label="PROBLEM">
        <p className="max-w-4xl text-[clamp(1.7rem,3.5vw,4rem)] leading-[0.98] tracking-[-0.035em] text-[#D9D6CE]">
          {project.problem}
        </p>
      </CaseSection>

      {/* ======================================================
          03 EXPERIMENT
      ====================================================== */}
      <CaseSection number="03" label="EXPERIMENT">
        <div className="grid gap-12 md:grid-cols-[1fr_280px]">
          <p className="max-w-3xl text-lg leading-relaxed text-[#92958F] md:text-2xl">
            {project.experiment}
          </p>

          <div className="border-t border-[#363936] pt-5">
            <div className="font-mono text-[9px] tracking-[0.14em] text-[#686B66]">
              APPROACH
            </div>
            <div className="mt-5 font-mono text-[10px] leading-relaxed tracking-[0.1em] text-[#B9BBB5]">
              EXPLORE
              <br />
              PROTOTYPE
              <br />
              OBSERVE
              <br />
              ITERATE
            </div>
          </div>
        </div>
      </CaseSection>

      {/* ======================================================
          04 SYSTEM
      ====================================================== */}
      <CaseSection number="04" label="SYSTEM">
        <div className="border-t border-[#363936]">
          <div className="border-b border-[#363936] py-7 md:py-9">
            <p className="max-w-4xl text-base leading-8 text-[#92958F] md:text-lg">
              {project.system}
            </p>
          </div>
        </div>
      </CaseSection>

      {/* ======================================================
          05 OUTCOME
      ====================================================== */}
      <CaseSection number="05" label="OUTCOME">
        <h2 className="max-w-5xl text-[clamp(2.8rem,6vw,6.5rem)] uppercase leading-[0.84] tracking-[-0.06em]">
          {project.outcome}
        </h2>

        <div className="mt-14 border-t border-[#363936] pt-5 font-mono text-[9px] tracking-[0.14em] text-[#686B66]">
          OUTCOME / DESCRIBED AS CURRENT PROJECT STATE — NO UNSUPPORTED METRICS
        </div>
      </CaseSection>

      {/* ======================================================
          FOOTER
      ====================================================== */}
      <footer className="border-t border-[#2D302D] px-6 py-20 md:px-10">
        <div className="mx-auto flex max-w-[1250px] flex-col justify-between gap-8 md:flex-row md:pl-[9%]">
          <a
            href="/#work"
            className="font-mono text-[10px] tracking-[0.14em] transition-colors hover:text-[#F04A35]"
          >
            ← ALL PROJECTS
          </a>

          <a
            href="/"
            className="font-mono text-[10px] tracking-[0.14em] transition-colors hover:text-[#F04A35]"
          >
            PUGAL / TRACE ↑
          </a>
        </div>
      </footer>
    </main>
  );
}

function CaseSection({
  number,
  label,
  children,
}: {
  number: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-[#2D302D] px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid w-full max-w-[1250px] gap-10 md:grid-cols-[90px_1fr] md:pl-[9%]">
        <div className="font-mono text-[9px] tracking-[0.14em] text-[#F04A35]">
          {number} / {label}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
