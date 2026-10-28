"use client";

import dynamic from "next/dynamic";

// Load the 3D field after the page shows, so the first paint stays fast
const WaveField = dynamic(() => import("./WaveField"), { ssr: false });

export default function HeroBackground({ className = "" }: { className?: string }) {
  return <WaveField className={className} />;
}
