
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import type { Project } from "@/lib/projects";
import BrowserFrame from "./BrowserFrame";
import PhoneFrame from "./PhoneFrame";
import { ArrowUpRight } from "./Arrow";

function ProjectPanel({
  p,
  index,
  total,
}: {
  p: Project;
  index: number;
  total: number;
}) {
  return (
    <motion.article
      className="group relative isolate flex h-full w-full flex-col justify-center overflow-hidden rounded-[28px] border border-white/10 bg-[#111113] shadow-[0_35px_100px_-45px_rgba(0,0,0,0.95)] transition-[border-color,box-shadow] duration-500 hover:border-[#c99a55]/40 hover:shadow-[0_35px_100px_-35px_rgba(0,0,0,0.9)] sm:rounded-[32px]"
    >
      {/* Premium background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(255,255,255,0.035),transparent_45%,rgba(201,154,85,0.035))]" />

        <div
          className="absolute -right-28 -top-32 size-[420px] rounded-full opacity-20 blur-[110px] transition-opacity duration-700 group-hover:opacity-35"
          style={{ background: p.glow }}
        />

        <div className="absolute -bottom-40 left-[30%] size-[300px] rounded-full bg-[#c99a55]/[0.06] blur-[100px]" />

        <div className="absolute -right-20 top-1/2 size-[330px] -translate-y-1/2 rounded-full border border-[#c99a55]/10" />
      </div>

      <div className="relative grid gap-6 p-5 sm:p-7 md:p-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-8 lg:p-9 xl:p-10">
        {/* Project details */}
        <div className="relative z-20 min-w-0">
          <div className="flex items-center justify-between gap-3">
            <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/55 sm:text-xs">
              <span className="size-1.5 rounded-full bg-blue-500" />
              {p.category}
            </p>

            <span className="font-mono text-[10px] text-white/35">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>
          </div>

          <h2 className="mt-5 break-words text-[clamp(2.8rem,5vw,5.5rem)] font-semibold leading-[0.88] tracking-[-0.075em] text-[#f5f1e9]">
            {p.name}
          </h2>

          <p className="mt-3 font-mono text-xs text-white/45">
            {p.domain}
          </p>

          <p className="mt-5 max-w-md text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
            {p.blurb}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {p.built.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-[10px] text-white/70 transition-colors duration-300 hover:border-[#c99a55]/50 hover:text-white sm:text-[11px]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={`/work/${p.slug}`}
              className="group/button inline-flex h-11 items-center gap-2 rounded-full bg-[#f5f1e9] px-4 text-sm font-medium text-[#171511] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_8px_28px_rgba(255,255,255,0.1)] sm:px-5"
            >
              View case study
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
            </Link>

            <a
              href={`https://${p.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-white/15 px-4 text-sm text-white/75 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c99a55]/60 hover:text-white sm:px-5"
            >
              Live site
              <span className="text-[#d5ad70]" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-4 font-mono text-[10px] text-white/40 sm:mt-8">
            <span>PROJECT {String(index + 1).padStart(2, "0")}</span>
            <span>RESPONSIVE DESIGN</span>
          </div>
        </div>

        {/* Layered website preview */}
        <div className="relative min-w-0 pb-8 pr-4 pt-2 sm:pb-10 sm:pr-8 sm:pt-4">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-5%] top-1/2 aspect-square w-[80%] -translate-y-1/2 rounded-full border border-[#c99a55]/15 transition-transform duration-700 group-hover:scale-105"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-1/2 aspect-square w-[65%] -translate-y-1/2 rounded-full border border-[#c99a55]/10"
          />

          <Link
            href={`/work/${p.slug}`}
            aria-label={`View ${p.name} project`}
            className="group/preview relative z-[1] block"
          >
            <motion.div
              whileHover={{ y: -5, rotate: -0.5, scale: 1.012 }}
              transition={{
                type: "spring",
                stiffness: 170,
                damping: 22,
              }}
            >
              <BrowserFrame
                src={p.shots[0].src}
                alt={`${p.name} website preview`}
                url={p.domain}
                priority={index === 0}
              />
            </motion.div>
          </Link>

          <motion.div
            whileHover={{ y: -7, rotate: 1 }}
            transition={{
              type: "spring",
              stiffness: 190,
              damping: 20,
            }}
            className="absolute bottom-0 right-0 z-10 w-[24%] min-w-[76px] max-w-[155px] sm:right-1 sm:w-[22%]"
          >
            <PhoneFrame
              src={p.mobile}
              alt={`${p.name} mobile preview`}
              className="relative"
            />
          </motion.div>

          <div className="absolute bottom-0 left-0 z-10 rounded-full border border-white/10 bg-[#111113]/90 px-3 py-2 font-mono text-[9px] text-white/60 backdrop-blur-xl sm:text-[10px]">
            <span className="mr-2 inline-block size-1.5 rounded-full bg-emerald-400" />
            DESKTOP / MOBILE
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function WorkStack({
  projects,
}: {
  projects: Project[];
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [travelDistance, setTravelDistance] = useState(0);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!viewport || !track) return;

    const measure = () => {
      setTravelDistance(
        Math.max(0, track.scrollWidth - viewport.clientWidth)
      );
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    observer.observe(track);

    window.addEventListener("load", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("load", measure);
    };
  }, [projects.length]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Smooth the scroll-driven movement with a spring.
  const rawX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -travelDistance]
  );

  const smoothX = useSpring(rawX, {
    stiffness: 85,
    damping: 28,
    mass: 0.45,
  });

  const progressWidth = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 100]),
    {
      stiffness: 100,
      damping: 30,
      mass: 0.3,
    }
  );

  if (!projects.length) return null;

  return (
    <>
      {/* Desktop horizontal scroll */}
      <section
        ref={sectionRef}
        className="relative hidden md:block"
        style={{
          height: `calc(100vh + ${travelDistance}px)`,
        }}
      >
        <div
          ref={viewportRef}
          className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden"
        >
          <div className="relative z-20 mx-auto flex w-full max-w-[1600px] items-end justify-between gap-4 px-6 pb-5 lg:px-10">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#d5ad70]">
                Selected projects
              </p>

              <h2 className="mt-2 text-2xl font-medium tracking-tight text-white sm:text-3xl">
                Work that moves forward.
              </h2>
            </div>

            <div className="flex shrink-0 items-center gap-3 pb-1">
              <span className="font-mono text-[10px] text-white/45">
                SCROLL TO EXPLORE
              </span>
              <span className="text-lg text-[#d5ad70]" aria-hidden="true">
                →
              </span>
            </div>
          </div>

          <motion.div
            ref={trackRef}
            style={{ x: smoothX }}
            className="flex h-[min(76vh,780px)] w-max items-stretch gap-6 px-[6vw] will-change-transform lg:gap-8"
          >
            {projects.map((p, index) => (
              <div
                key={p.slug}
                className="h-full w-[88vw] max-w-[1200px] shrink-0"
              >
                <ProjectPanel
                  p={p}
                  index={index}
                  total={projects.length}
                />
              </div>
            ))}
          </motion.div>

          {/* Smooth progress indicator */}
          <div className="relative z-20 mx-auto mt-6 flex w-full max-w-[1600px] items-center gap-4 px-6 lg:px-10">
            <span className="font-mono text-[10px] text-white/40">
              01
            </span>

            <div className="relative h-[2px] flex-1 overflow-hidden rounded-full bg-white/10">
              <motion.div
                style={{ width: progressWidth }}
                className="absolute inset-y-0 left-0 rounded-full bg-[#d5ad70] shadow-[0_0_12px_rgba(213,173,112,0.45)]"
              />
            </div>

            <span className="font-mono text-[10px] text-white/40">
              {String(projects.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </section>

      {/* Mobile: regular vertical cards */}
      <section className="flex flex-col gap-6 px-4 py-8 md:hidden">
        <div className="mb-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#d5ad70]">
            Selected projects
          </p>

          <h2 className="mt-2 text-2xl font-medium tracking-tight text-white">
            Work that moves forward.
          </h2>
        </div>

        {projects.map((p, index) => (
          <ProjectPanel
            key={p.slug}
            p={p}
            index={index}
            total={projects.length}
          />
        ))}
      </section>
    </>
  );
}
