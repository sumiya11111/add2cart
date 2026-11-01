
import Link from "next/link";
import { PROJECTS } from "@/lib/projects";
import HeroBackground from "@/components/HeroBackground";
import WorkStack from "@/components/WorkStack";
import Reveal from "@/components/Reveal";
import Spotlight from "@/components/Spotlight";
import CodeWindow from "@/components/CodeWindow";
import CTAButton from "@/components/CTAButton";
import ServiceVisual, { type VisualKind } from "@/components/ServiceVisuals";
import { ArrowRight } from "@/components/Arrow";

const SERVICES: { visual: VisualKind; title: string; text: string; tags: string[]; wide?: boolean }[] = [
  {
    visual: "store",
    title: "Custom stores on Next.js",
    text: "Built from scratch for your brand. Product pages, size picker, cart, checkout and order tracking, with any feature you need.",
    tags: ["Fashion", "Lifestyle", "Beauty"],
    wide: true,
  },
  {
    visual: "shopify",
    title: "Shopify stores",
    text: "A Shopify store set up and designed for your brand. Easy for you to run every day.",
    tags: ["Theme design", "Apps", "Setup"],
  },
  {
    visual: "booking",
    title: "Booking sites",
    text: "For service brands. Clients pick a service, choose a time and book in a few taps.",
    tags: ["Tailors", "Salons", "Studios"],
  },
  {
    visual: "brand",
    title: "Brand websites",
    text: "A clean home for your brand that tells your story and brings in new leads.",
    tags: ["Story", "Leads", "SEO"],
  },
  {
    visual: "speed",
    title: "Redesign and speed",
    text: "Your old site, rebuilt on Next.js or Shopify. Faster pages, better look, easier to grow.",
    tags: ["Migration", "Speed", "UX"],
  },
];

const STACK = ["Next.js", "Shopify", "React", "TypeScript", "Tailwind CSS", "Liquid", "Vercel"];

const WHY_NEXT = [
  { icon: "fast", title: "Next.js for full control", text: "A custom store, built from scratch. Fast pages and any feature you can think of." },
  { icon: "bag", title: "Shopify for easy running", text: "Add products, take orders and see sales yourself, all from one simple dashboard." },
  { icon: "search", title: "Fast and easy to find", text: "Both load fast, and every product page is built so Google can find it." },
];

const LOCAL_A = ["Cash on delivery", "bKash", "Nagad", "Card payments", "Steadfast", "Pathao", "RedX", "Order tracking"];
const LOCAL_B = ["WhatsApp chat", "Messenger chat", "Bank offers", "Telco offers", "Bangla and English", "Bulk orders", "Size guides", "Facebook Pixel"];

const ICONS: Record<string, React.ReactNode> = {
  chat: <path d="M4 5h16v11H8l-4 4V5Z" />,
  plan: <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Zm0 0v14m6-12v14" />,
  build: <path d="m8 8-5 4 5 4m8-8 5 4-5 4M14 4l-4 16" />,
  launch: <path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2m-1-5a14 14 0 0 1 11-9 14 14 0 0 1-9 11l-2-2Zm7-5h.01M9 13l-3-1 2-4 4 1m0 6 1 3 4-2-1-4" />,
  fast: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
  bag: <path d="M5 8h14l-1 12H6L5 8Zm4 0a3 3 0 0 1 6 0" />,
  search: <path d="m21 21-4.3-4.3M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z" />,
};

function Icon({ name }: { name: string }) {
  return (
    <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-line-2 bg-accent/10 text-accent">
      <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {ICONS[name]}
      </svg>
    </span>
  );
}

const STEPS = [
  { icon: "chat", title: "Talk", text: "We chat on WhatsApp. We learn what you sell and who buys it." },
  { icon: "plan", title: "Plan", text: "We map the pages, features and look. You get a clear price and timeline." },
  { icon: "build", title: "Build", text: "We design and build it. You see it and give notes before launch." },
  { icon: "launch", title: "Launch", text: "Your site goes live, ready for orders. We stay with you after launch." },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-line-2 bg-surface/60 px-5 py-3 text-[15px] text-cream/85">
      <span className="size-1.5 rounded-full bg-accent" />
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 -z-20">
          <div className="absolute bottom-[-20%] left-1/2 h-[60vh] w-[90vw] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" />
        </div>

        <HeroBackground className="absolute inset-0 -z-10" />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_55%_at_50%_30%,rgba(10,10,11,0.85),transparent_75%)]"
        />

        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink to-transparent" />

        <div className="wrap flex flex-1 flex-col justify-center pb-16 pt-32 md:pt-36">
          <Reveal>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-line-2 bg-ink/40 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-cream/80 backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              Taking new projects
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-8 max-w-[14ch] text-[clamp(3rem,9.2vw,8.75rem)] font-semibold leading-[0.92] tracking-[-0.055em]">
              We build online stores <span className="serif-i text-accent">that sell.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream/75 md:text-xl">
              add2cart is a web studio in Dhaka. We design and build fast, custom stores on Next.js and Shopify for brands that want more orders.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <CTAButton size="lg" />
              <Link
                href="#work"
                className="group inline-flex h-14 items-center gap-2 rounded-full border border-line-2 bg-ink/30 px-8 text-base text-cream backdrop-blur transition-colors hover:border-cream/40"
              >
                See our work
                <ArrowRight className="size-4 rotate-90 transition-transform group-hover:translate-y-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* ============ CONTINUOUS STORE MARQUEE ============ */}
        <div className="wrap pb-8">
          <div className="flex items-center gap-5 overflow-hidden rounded-full border border-line-2 bg-ink/40 px-5 py-4 backdrop-blur md:gap-8 md:px-7">
            <span className="eyebrow shrink-0">Stores we built</span>

            <div className="fade-x min-w-0 flex-1 overflow-hidden">
              <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                {[0, 1].map((copy) => (
                  <div
                    key={copy}
                    aria-hidden={copy === 1}
                    className="flex shrink-0 items-center gap-9 pr-9 md:gap-14 md:pr-14"
                  >
                    {PROJECTS.map((p) => (
                      <Link
                        key={`${copy}-${p.slug}`}
                        href={`/work/${p.slug}`}
                        tabIndex={copy === 1 ? -1 : 0}
                        className="group inline-flex shrink-0 items-center gap-3 font-mono text-sm text-cream/75 transition-colors duration-300 hover:text-white"
                      >
                        <span className="size-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_8px_rgba(61,123,255,0.55)] transition-transform duration-300 group-hover:scale-150" />
                        <span>{p.domain}</span>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <span className="eyebrow hidden shrink-0 md:inline">Move your mouse</span>
          </div>
        </div>
      </section>

      {/* ============ WORK ============ */}
      <section id="work" className="scroll-mt-20 pt-12 md:pt-16">
        <div className="wrap">
          <div className="mb-8 md:mb-10">
            <Reveal>
              <div className="eyebrow mb-4">Selected work</div>
              <h2 className="text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.045em]">
                Real stores, <span className="serif-i text-cream/60">live right now.</span>
              </h2>
            </Reveal>
          </div>
          <WorkStack projects={PROJECTS} />
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section id="services" className="scroll-mt-20 py-24 md:py-36">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow mb-5">What we build</div>
            <h2 className="max-w-3xl text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.045em]">
              One studio. <span className="serif-i text-cream/60">Every kind of site</span> a brand needs.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => {
              const directions = [
                { x: -120, y: 0 },
                { x: 120, y: 0 },
                { x: 0, y: 100 },
                { x: -120, y: 0 },
                { x: 120, y: 0 },
              ];

              return (
                <Reveal
                  key={s.title}
                  x={directions[i].x}
                  y={directions[i].y}
                  delay={i * 0.12}
                  className={s.wide ? "sm:col-span-2" : ""}
                >
                  <Spotlight className="group flex h-full flex-col rounded-3xl border border-line-2 bg-surface p-3 transition-colors duration-300 hover:border-accent/40">
                    <div className="h-[220px]">
                      <ServiceVisual kind={s.visual} />
                    </div>

                    <div className="flex flex-1 flex-col px-4 pb-4 pt-6">
                      <h3 className="text-2xl font-semibold tracking-tight">
                        {s.title}
                      </h3>

                      <p className="mt-3 text-[15px] leading-relaxed text-muted">
                        {s.text}
                      </p>

                      <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
                        {s.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-white/[0.05] px-2.5 py-1 font-mono text-[11px] text-cream/60"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Spotlight>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ STACK ============ */}
      <section id="stack" className="relative scroll-mt-20 overflow-hidden border-y border-line py-16 sm:py-20 md:py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_60%_60%_at_70%_50%,#000,transparent)]"
        />

        <div aria-hidden="true" className="pointer-events-none absolute right-[-20%] top-1/2 size-[360px] -translate-y-1/2 rounded-full bg-accent/15 blur-[110px] sm:right-[-10%] sm:size-[520px] sm:blur-[130px]" />

        <div className="wrap relative min-w-0">
          <Reveal>
            <div className="eyebrow mb-4 sm:mb-5">Our stack</div>
            <h2 className="w-full max-w-full text-[clamp(1.85rem,6.2vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.05em] sm:text-[clamp(2.2rem,5vw,3.5rem)] md:whitespace-nowrap">
              Next.js or Shopify. <span className="serif-i text-accent">Your pick.</span>
            </h2>
          </Reveal>

          <div className="mt-9 grid min-w-0 grid-cols-1 gap-9 sm:mt-12 sm:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center lg:gap-14">
            <div className="min-w-0 w-full">
              <Reveal>
                <p className="max-w-lg text-base leading-relaxed text-muted sm:text-lg">
                  The same tools top brands around the world use. We help you pick the right one for how you sell.
                </p>
              </Reveal>

              <div className="mt-7 space-y-5 sm:mt-10 sm:space-y-6">
                {WHY_NEXT.map((w, i) => (
                  <Reveal key={w.title} delay={i * 0.06}>
                    <div className="flex min-w-0 gap-3 border-t border-line pt-5 sm:gap-5 sm:pt-6">
                      <Icon name={w.icon} />
                      <div className="min-w-0 flex-1">
                        <h3 className="text-base font-medium sm:text-lg">{w.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted sm:text-[15px]">
                          {w.text}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal delay={0.1}>
              <div className="relative min-w-0 w-full max-w-full overflow-hidden [&_pre]:max-w-full [&_pre]:overflow-x-auto [&_pre]:text-[11px] sm:[&_pre]:text-xs">
                <CodeWindow />

                <div className="mt-4 flex min-w-0 flex-wrap gap-2 sm:mt-5">
                  {STACK.map((s) => (
                    <span
                      key={s}
                      className="max-w-full rounded-full border border-line-2 bg-ink/60 px-3 py-2 font-mono text-[11px] text-cream/80 backdrop-blur sm:px-4 sm:text-[12px]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ MADE FOR BANGLADESH ============ */}
      <section className="py-24 md:py-36">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow mb-5">Made for Bangladesh</div>
            <h2 className="max-w-4xl text-[clamp(2.5rem,6vw,5.25rem)] font-semibold leading-[0.95] tracking-[-0.045em]">
              Built for how <span className="serif-i text-cream/60">people here</span> shop.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Cash on delivery, local payments, courier links and chat. The things your buyers expect are built in from day one.
            </p>
          </Reveal>
        </div>

        <div className="fade-x mt-14 space-y-4 overflow-hidden">
          <div className="flex w-max animate-marquee gap-4">
            {[...LOCAL_A, ...LOCAL_A].map((t, i) => (
              <Pill key={`a${i}`}>{t}</Pill>
            ))}
          </div>
          <div className="flex w-max animate-marquee-rev gap-4">
            {[...LOCAL_B, ...LOCAL_B].map((t, i) => (
              <Pill key={`b${i}`}>{t}</Pill>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <style>{`
        #process {
          view-timeline-name: --process-scroll;
          view-timeline-axis: block;
        }

        #process .process-progress-fill {
          transform: scaleX(0);
          transform-origin: left center;
          animation: process-line-grow linear both;
          animation-timeline: --process-scroll;
          animation-range: entry 8% exit 88%;
        }

        @keyframes process-line-grow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        #process .process-step-dot {
          background: #17191f;
          border-color: #343943;
          color: #888;
          box-shadow: none;
          animation: process-dot-activate linear both;
          animation-timeline: --process-scroll;
        }

        #process .process-step-dot:nth-child(1) {
          animation-range: entry 8% entry 42%;
        }
        #process .process-step-dot:nth-child(2) {
          animation-range: entry 18% entry 52%;
        }
        #process .process-step-dot:nth-child(3) {
          animation-range: entry 28% entry 62%;
        }
        #process .process-step-dot:nth-child(4) {
          animation-range: entry 38% entry 72%;
        }

        @keyframes process-dot-activate {
          from {
            background: #17191f;
            border-color: #343943;
            color: #888;
            box-shadow: none;
          }
          to {
            background: #3b82f6;
            border-color: #3b82f6;
            color: #fff;
            box-shadow: 0 0 0 7px rgba(59,130,246,.10), 0 0 25px rgba(59,130,246,.35);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #process .process-progress-fill,
          #process .process-step-dot {
            animation: none;
          }
          #process .process-progress-fill {
            transform: scaleX(1);
          }
          #process .process-step-dot {
            background: #3b82f6;
            border-color: #3b82f6;
            color: #fff;
          }
        }
      `}</style>

      <section
        id="process"
        className="relative scroll-mt-20 overflow-hidden border-t border-line py-20 md:py-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_55%,rgba(45,110,255,0.07),transparent_65%)]"
        />

        <div className="wrap relative">
          <Reveal>
            <div className="eyebrow mb-5">How we work</div>

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h2 className="max-w-2xl text-[clamp(2.8rem,6vw,5rem)] font-semibold leading-[0.95] tracking-[-0.05em]">
                Four steps.
                <br />
                <span className="serif-i text-cream/60">No mystery.</span>
              </h2>

              <p className="max-w-sm pb-2 text-base leading-relaxed text-muted md:text-right">
                You always know what comes next.
              </p>
            </div>
          </Reveal>

          {/* SCROLL-LINKED TIMELINE */}
          <div className="relative mt-16">
            <div className="absolute left-[12.5%] right-[12.5%] top-[22px] hidden h-[2px] bg-line-2 lg:block" />

            <div className="absolute left-[12.5%] right-[12.5%] top-[22px] hidden h-[2px] lg:block">
              <div className="process-progress-fill h-full w-full bg-accent shadow-[0_0_12px_rgba(59,130,246,0.65)]" />
            </div>

            <div className="relative mb-8 hidden grid-cols-4 lg:grid">
              {[1, 2, 3, 4].map((number) => (
                <div key={number} className="flex justify-center">
                  <div className="process-step-dot relative z-10 grid size-11 place-items-center rounded-full border-[5px] border-ink text-sm font-bold">
                    {number}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Audit",
                  description: "We check your store, ads and tracking.",
                  result: "A short list of what to fix first.",
                },
                {
                  title: "Plan",
                  description: "We agree on the work, the price and the dates.",
                  result: "A clear plan in writing.",
                },
                {
                  title: "Build",
                  description: "We build the store and set up the ads.",
                  result: "A live store and running ads.",
                },
                {
                  title: "Grow",
                  description: "We run it and improve it every week.",
                  result: "A simple report every week.",
                },
              ].map((step, i) => (
                <Reveal key={step.title} delay={i * 0.1} x={0} y={35}>
                  <article className="group relative flex h-full min-h-[225px] flex-col overflow-hidden rounded-[24px] border border-accent/30 bg-[linear-gradient(145deg,rgba(35,65,115,0.18),rgba(18,20,27,0.85))] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-accent/70 hover:shadow-[0_15px_45px_rgba(40,100,255,0.10)] md:p-7">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-accent/10 blur-[55px] transition-opacity duration-500 group-hover:bg-accent/25"
                    />

                    <div className="mb-5 flex items-center justify-between lg:hidden">
                      <span className="grid size-10 place-items-center rounded-full border border-accent/40 bg-accent/10 text-sm font-bold text-accent">
                        {i + 1}
                      </span>
                      <span className="font-mono text-xs text-muted">
                        STEP 0{i + 1}
                      </span>
                    </div>

                    <h3 className="relative text-[23px] font-semibold tracking-tight text-cream">
                      {step.title}
                    </h3>

                    <p className="relative mt-2.5 text-[15px] leading-relaxed text-cream/65">
                      {step.description}
                    </p>

                    <div className="relative my-5 h-px w-full bg-line-2" />

                    <div className="relative mt-auto flex items-start gap-3">
                      <span className="mt-0.5 text-lg font-bold text-accent">✓</span>
                      <div>
                        <span className="font-mono text-[10px] font-semibold tracking-[0.15em] text-accent">
                          YOU GET
                        </span>
                        <p className="mt-1 text-[13px] leading-relaxed text-cream/90">
                          {step.result}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="pb-24 md:pb-32">
        <div className="wrap">
          <Reveal>
            <div className="relative isolate overflow-hidden rounded-[32px] border border-line-2 bg-surface px-6 py-20 text-center md:px-16 md:py-28">
              <div aria-hidden="true" className="absolute left-1/2 top-1/2 -z-10 size-[900px] -translate-x-1/2 -translate-y-1/2">
                <div
                  className="size-full animate-spin-slow rounded-full blur-[90px]"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 0deg, color-mix(in srgb, var(--color-accent) 70%, transparent) 60deg, transparent 140deg, transparent 220deg, color-mix(in srgb, var(--color-accent-soft) 45%, transparent) 280deg, transparent 360deg)",
                  }}
                />
              </div>

              <div aria-hidden="true" className="absolute inset-[1px] -z-10 rounded-[31px] bg-surface/55" />

              <div className="eyebrow mb-6">Next project</div>
              <h2 className="mx-auto max-w-4xl text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-[0.95] tracking-[-0.05em]">
                Have a brand? <br className="hidden sm:block" />
                <span className="serif-i text-accent">Let&apos;s build its store.</span>
              </h2>

              <p className="mx-auto mt-6 max-w-md text-lg text-cream/70">
                Tell us what you sell. We reply on WhatsApp and help you plan it.
              </p>

              <div className="mt-10 flex justify-center">
                <CTAButton size="lg" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
