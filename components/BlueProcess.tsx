
"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "motion/react";

const steps = [
  {
    number: "1",
    title: "Audit",
    description: "We check your store, ads and tracking.",
    result: "A short list of what to fix first.",
  },
  {
    number: "2",
    title: "Plan",
    description: "We agree on the work, the price and the dates.",
    result: "A clear plan in writing.",
  },
  {
    number: "3",
    title: "Build",
    description: "We build the store and set up the ads.",
    result: "A live store and running ads.",
  },
  {
    number: "4",
    title: "Grow",
    description: "We run it and improve it every week.",
    result: "A simple report every week.",
  },
];

export default function BlueProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 30%"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 65,
    damping: 24,
    mass: 0.8,
  });

  const lineScale = useTransform(
    progress,
    [0.1, 0.75],
    [0, 1]
  );

  const lineOpacity = useTransform(
    progress,
    [0, 0.15],
    [0.3, 1]
  );

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative isolate scroll-mt-20 overflow-hidden border-t border-white/10 bg-[#0b0c10] py-24 md:py-36"
    >
      <div className="wrap relative">
        {/* Heading */}
        <div className="mb-14 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-blue-400">
              HOW WE WORK
            </p>

            <h2 className="text-[clamp(2.6rem,5.5vw,5.2rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-white">
              Four steps.
              <br />
              <span className="serif-i font-normal text-white/55">
                No mystery.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-base text-white/55 md:pb-2 md:text-lg">
            You always know what comes next.
          </p>
        </div>

        {/* Scroll animated connecting line */}
        <div className="relative hidden px-[calc(12.5%-1px)] md:block">
          <div className="absolute left-[12.5%] right-[12.5%] top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-blue-500/15" />

          <motion.div
            style={{
              scaleX: reduceMotion ? 1 : lineScale,
              opacity: reduceMotion ? 1 : lineOpacity,
              transformOrigin: "left center",
            }}
            className="absolute left-[12.5%] right-[12.5%] top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-blue-500 shadow-[0_0_18px_rgba(59,130,246,0.9)]"
          />

          <div className="relative z-10 grid grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex justify-center"
              >
                <div className="grid size-14 place-items-center rounded-full border-[6px] border-[#10264d] bg-blue-500 text-lg font-bold text-white shadow-[0_0_25px_rgba(59,130,246,0.4)]">
                  {step.number}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 35 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: false,
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative min-h-[225px] rounded-[24px] border border-blue-500/30 bg-[#101725]/90 p-6 transition-colors duration-300 hover:border-blue-400/80 hover:bg-[#14203a]"
            >
              {/* Mobile number */}
              <div className="mb-5 flex items-center gap-3 md:hidden">
                <span className="grid size-10 place-items-center rounded-full bg-blue-600 font-bold text-white">
                  {step.number}
                </span>
                <div className="h-px flex-1 bg-blue-500/30" />
              </div>

              <h3 className="text-2xl font-semibold tracking-tight text-white">
                {step.title}
              </h3>

              <p className="mt-2 text-[15px] leading-relaxed text-white/55">
                {step.description}
              </p>

              <div className="mt-5 h-px bg-white/15" />

              <div className="mt-4 flex items-start gap-3">
                <span className="mt-0.5 font-bold text-blue-400">
                  ✓
                </span>

                <div>
                  <p className="mb-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-blue-400">
                    You get
                  </p>

                  <p className="text-sm leading-relaxed text-white/85">
                    {step.result}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
