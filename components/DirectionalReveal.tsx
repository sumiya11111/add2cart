
"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type Direction = "left" | "right" | "top" | "bottom";

type Props = {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
};

const offsets: Record<Direction, string> = {
  left: "translate3d(-90px, 0, 0)",
  right: "translate3d(90px, 0, 0)",
  top: "translate3d(0, -80px, 0)",
  bottom: "translate3d(0, 80px, 0)",
};

export default function DirectionalReveal({
  children,
  direction = "bottom",
  delay = 0,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      setVisible(true);
      setReady(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else if (
          entry.boundingClientRect.top >
          entry.rootBounds!.bottom
        ) {
          setVisible(false);
        }
      },
      {
        threshold: 0,
        rootMargin: "0px 0px 80px 0px",
      }
    );

    observer.observe(element);

    // Allow initial layout to settle.
    const frame = requestAnimationFrame(() => {
      setReady(true);
    });

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: !ready || visible ? 1 : 0,
        transform:
          !ready || visible
            ? "translate3d(0, 0, 0)"
            : offsets[direction],
        transitionProperty: "opacity, transform",
        transitionDuration: "1600ms",
        transitionTimingFunction:
          "cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay:
          visible && ready ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}
