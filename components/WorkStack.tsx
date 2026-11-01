
"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "motion/react";
import type { Project } from "@/lib/projects";
import BrowserFrame from "./BrowserFrame";
import PhoneFrame from "./PhoneFrame";
import { ArrowUpRight } from "./Arrow";

/* Stacking cards only on bigger screens. On phones the cards are taller than the screen. */
function useDesktop() {
  const [desktop, setDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const set = () => setDesktop(mq.matches);
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);
  return desktop;
}

function Card({
  p,
  i,
  total,
  progress,
}: {
  p: Project;
  i: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const reduce = useReducedMotion();
  const desktop = useDesktop();
  const still = reduce || !desktop;
  const start = i / total;
  const scale = useTransform(progress, [start, 1], [1, still ? 1 : 1 - (total - 1 - i) * 0.045]);
  const dimStart = Math.min((i + 0.55) / total, 1);
  const dimEnd = Math.min((i + 1) / total, 1);
  const dim = useTransform(progress, [dimStart, dimEnd], [0, i === total - 1 || still ? 0 : 0.5]);

  return (
    <div className="md:sticky md:top-[104px] md:pt-[var(--stack)]" style={{ "--stack": `${i * 22}px` } as CSSProperties}>
      <motion.article
        style={{ scale, transformOrigin: "top center" }}
        className="relative overflow-hidden rounded-[28px] border border-line-2 bg-surface"
      >
        {/* soft light in the brand's own color */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 size-[300px] rounded-full opacity-25 blur-[90px] md:-right-40 md:-top-40 md:size-[640px] md:opacity-30 md:blur-[120px]"
          style={{ background: p.glow }}
        />

        <div className="relative grid gap-7 p-5 md:gap-8 md:p-8 lg:grid-cols-[0.9fr_1.3fr] lg:gap-10 lg:p-9">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 font-mono text-xs text-muted">
              <span className="size-1.5 rounded-full bg-accent" />
              <span className="uppercase tracking-[0.12em]">{p.category}</span>
            </div>

            <h3 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl lg:text-6xl">
              {p.name}
            </h3>

            <p className="mt-1.5 font-mono text-xs text-muted">{p.domain}</p>

            <p className="mt-4 max-w-md text-base leading-relaxed text-cream/80">{p.blurb}</p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {p.built.slice(0, 4).map((t) => (
                <li key={t} className="rounded-full border border-line-2 px-3 py-1 text-xs text-cream/75">
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2 lg:mt-auto lg:pt-7">
              <Link
                href={`/work/${p.slug}`}
                className="group inline-flex h-10 items-center gap-2 rounded-full bg-cream px-5 text-sm font-medium text-ink transition-colors hover:bg-white"
              >
                View case study
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <button
                type="button"
                data-add={p.slug}
                aria-pressed="false"
                className="inline-flex h-10 items-center rounded-full border border-line-2 px-5 text-sm text-cream/85 transition-colors hover:border-cream/40"
              >
                Add to cart
              </button>

              <a
                href={`https://${p.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-full border border-line-2 px-5 text-sm text-cream/85 transition-colors hover:border-cream/40"
              >
                Live site
              </a>
            </div>
          </div>

          <Link href={`/work/${p.slug}`} aria-label={`${p.name} case study`} className="group relative block pb-6 pr-4 md:pb-8 md:pr-8">
            <div className="transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-1.5">
              <BrowserFrame src={p.shots[0].src} alt={`${p.name} homepage`} url={p.domain} />
            </div>

            <PhoneFrame
              src={p.mobile}
              alt={`${p.name} on a phone`}
              className="absolute bottom-0 right-0 w-[24%] min-w-[85px] max-w-[165px] transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-4"
            />
          </Link>
        </div>

        <motion.div aria-hidden="true" style={{ opacity: dim }} className="pointer-events-none absolute inset-0 bg-ink" />
      </motion.article>
    </div>
  );
}

export default function WorkStack({ projects }: { projects: Project[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <div ref={ref} className="relative flex flex-col gap-5 md:gap-[8vh] md:pb-[4vh]">
      {projects.map((p, i) => (
        <Card key={p.slug} p={p} i={i} total={projects.length} progress={scrollYProgress} />
      ))}
    </div>
  );
}
