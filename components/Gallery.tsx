"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Shot } from "@/lib/projects";

export default function Gallery({ shots, name }: { shots: Shot[]; name: string }) {
  const [active, setActive] = useState(0);
  const shot = shots[active];

  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-line-2 bg-surface-2 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)]">
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="ml-3 truncate rounded-md bg-white/[0.05] px-3 py-1 font-mono text-[11px] text-muted">{shot.url}</span>
        </div>
        <div className="relative aspect-[788/493] bg-black">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={shot.src}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image src={shot.src} alt={`${name}: ${shot.label}`} fill priority={active === 0} sizes="(max-width: 1024px) 100vw, 1100px" className="object-cover object-top" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div role="group" aria-label="Choose a screen" className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {shots.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => setActive(i)}
            aria-pressed={i === active}
            className={`group text-left transition-opacity ${i === active ? "opacity-100" : "opacity-55 hover:opacity-90"}`}
          >
            <span
              className={`relative block aspect-[788/493] overflow-hidden rounded-lg border transition-colors ${
                i === active ? "border-accent" : "border-line-2"
              }`}
            >
              <Image src={s.src} alt="" fill sizes="240px" className="object-cover object-top" />
            </span>
            <span className="mt-2 block font-mono text-[11px] uppercase tracking-[0.1em] text-muted">{s.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
