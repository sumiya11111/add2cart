
"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import Reveal from "./Reveal";

type Step = {
  title: string;
  text: string;
};

export default function ProcessTimeline({ steps }: { steps: Step[] }) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 45%"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      steps.length - 1,
      Math.floor(latest * steps.length)
    );

    setActiveStep(Math.max(0, index));
  });

  return (
    <div ref={timelineRef} className="relative mt-16">

      {/* BASE LINE */}
      <div className="absolute left-[12.5%] right-[12.5%] top-[22px] hidden h-[2px] bg-line-2 lg:block" />

      {/* ANIMATED PROGRESS LINE */}
      <div className="absolute left-[12.5%] right-[12.5%] top-[22px] hidden h-[2px] lg:block">
        <motion.div
          className="h-full w-full origin-left bg-accent shadow-[0_0_12px_rgba(59,130,246,0.65)]"
          style={{ scaleX: scrollYProgress }}
        />
      </div>

      {/* NUMBERED CIRCLES */}
      <div className="relative mb-8 hidden grid-cols-4 lg:grid">
        {steps.map((step, i) => {
          const active = i <= activeStep;

          return (
            <div key={step.title} className="flex justify-center">
              <motion.div
                animate={{
                  backgroundColor: active ? "#3B82F6" : "#17191F",
                  borderColor: active ? "#3B82F6" : "#343943",
                  color: active ? "#FFFFFF" : "#888888",
                  scale: active ? 1 : 0.94,
                }}
                transition={{ duration: 0.3 }}
                className="relative z-10 grid size-11 place-items-center rounded-full border-[5px] border-ink text-sm font-bold"
                style={{
                  boxShadow: active
                    ? "0 0 0 7px rgba(59,130,246,0.10), 0 0 25px rgba(59,130,246,0.35)"
                    : "none",
                }}
              >
                {i + 1}
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* MOBILE PROGRESS INDICATOR */}
      <div className="mb-5 flex items-center justify-between lg:hidden">
        <span className="font-mono text-xs text-accent">
          STEP 0{activeStep + 1} / 0{steps.length}
        </span>
        <div className="h-1.5 w-28 overflow-hidden rounded-full bg-line-2">
          <motion.div
            className="h-full rounded-full bg-accent"
            style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
          />
        </div>
      </div>

      {/* PROCESS CARDS */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.08} y={35}>
            <article
              className={`group relative flex h-full min-h-[225px] flex-col overflow-hidden rounded-[24px] border p-6 transition-all duration-500 hover:-translate-y-2 md:p-7 ${
                i <= activeStep
                  ? "border-accent/40 bg-[linear-gradient(145deg,rgba(35,65,115,0.18),rgba(18,20,27,0.85))]"
                  : "border-line-2 bg-surface"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted">
                  STEP 0{i + 1}
                </span>
                <motion.span
                  animate={{
                    color: i <= activeStep ? "#3B82F6" : "#777777",
                  }}
                >
                  ●
                </motion.span>
              </div>

              <div className="mt-auto pt-10">
                <h3 className="text-[23px] font-semibold tracking-tight text-cream">
                  {step.title}
                </h3>

                <p className="mt-3 text-[14px] leading-relaxed text-cream/65">
                  {step.text}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
