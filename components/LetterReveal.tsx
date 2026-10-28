
"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: string;
  className?: string;
  delay?: number;
};

export default function LetterReveal({
  children,
  className = "",
  delay = 0,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(false);
  const [motionOff, setMotionOff] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      setMotionOff(true);
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
        } else if (
          entry.boundingClientRect.top >
          (entry.rootBounds?.bottom ?? window.innerHeight)
        ) {
          setShown(false);
        }
      },
      {
        threshold: 0,
        rootMargin: "0px 0px 40px 0px",
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  let count = 0;

  return (
    <span ref={ref} className={className} aria-label={children}>
      {children.split(/(\s+)/).map((part, wi) => {
        if (/^\s+$/.test(part)) {
          return (
            <span key={wi} aria-hidden="true">
              {part}
            </span>
          );
        }

        return (
          <span
            key={wi}
            aria-hidden="true"
            className="inline-block whitespace-nowrap"
          >
            {Array.from(part).map((letter, li) => {
              const index = count++;

              return (
                <span
                  key={li}
                  className="inline-block"
                  style={{
                    opacity: shown || motionOff ? 1 : 0,
                    transform:
                      shown || motionOff
                        ? "translateY(0)"
                        : "translateY(0.65em)",
                    filter:
                      shown || motionOff
                        ? "blur(0px)"
                        : "blur(4px)",
                    transitionProperty:
                      "opacity, transform, filter",
                    transitionDuration: motionOff ? "0ms" : "900ms",
                    transitionTimingFunction:
                      "cubic-bezier(0.16,1,0.3,1)",
                    transitionDelay:
                      shown && !motionOff
                        ? `${delay + index * 45}ms`
                        : "0ms",
                  }}
                >
                  {letter}
                </span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
}
