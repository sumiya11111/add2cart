
import Link from "next/link";
import { PROJECTS } from "@/lib/projects";
import HeroBackground from "@/components/HeroBackground";
import WorkStack from "@/components/WorkStack";
import Reveal from "@/components/Reveal";
import LetterReveal from "@/components/LetterReveal";
import BlueProcess from "@/components/BlueProcess";
import Spotlight from "@/components/Spotlight";
import DirectionalReveal from "@/components/DirectionalReveal";
import CodeWindow from "@/components/CodeWindow";
import CTAButton from "@/components/CTAButton";
import ServiceVisual, { type VisualKind } from "@/components/ServiceVisuals";
import { ArrowRight } from "@/components/Arrow";

const SERVICES: {
  visual: VisualKind;
  title: string;
  text: string;
  tags: string[];
  wide?: boolean;
}[] = [
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

const STACK = [
  "Next.js", "Shopify", "React", "TypeScript",
  "Tailwind CSS", "Liquid", "Vercel"
];

const WHY_NEXT = [
  {
    icon: "fast",
    title: "Next.js for full control",
    text: "A custom store, built from scratch. Fast pages and any feature you can think of.",
  },
  {
    icon: "bag",
    title: "Shopify for easy running",
    text: "Add products, take orders and see sales yourself, all from one simple dashboard.",
  },
  {
    icon: "search",
    title: "Fast and easy to find",
    text: "Both load fast, and every product page is built so Google can find it.",
  },
];

const LOCAL_A = [
  "Cash on delivery", "bKash", "Nagad", "Card payments",
  "Steadfast", "Pathao", "RedX", "Order tracking"
];

const LOCAL_B = [
  "WhatsApp chat", "Messenger chat", "Bank offers",
  "Telco offers", "Bangla and English", "Bulk orders",
  "Size guides", "Facebook Pixel"
];

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
      <svg
        viewBox="0 0 24 24"
        className="size-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {ICONS[name]}
      </svg>
    </span>
  );
}

const STEPS = [
  {
    icon: "chat",
    title: "Talk",
    text: "We chat on WhatsApp. We learn what you sell and who buys it.",
  },
  {
    icon: "plan",
    title: "Plan",
    text: "We map the pages, features and look. You get a clear price and timeline.",
  },
  {
    icon: "build",
    title: "Build",
    text: "We design and build it. You see it and give notes before launch.",
  },
  {
    icon: "launch",
    title: "Launch",
    text: "Your site goes live, ready for orders. We stay with you after launch.",
  },
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

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink to-transparent"
        />

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
              <LetterReveal>We build brands,</LetterReveal>{" "}
              <LetterReveal className="serif-i text-accent" delay={350}>
                not just websites.
              </LetterReveal>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream/75 md:text-xl">
              add2cart is a web studio in Dhaka. We design and build fast,
              custom stores on Next.js and Shopify for brands that want more orders.
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

        <div className="wrap pb-8">
          <div className="flex flex-col gap-4 border-t border-line pt-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="eyebrow">Stores we built</span>
              {PROJECTS.map((p) => (
                <Link
                  key={p.slug}
                  href={`/work/${p.slug}`}
                  className="font-mono text-sm text-cream/70 transition-colors hover:text-accent"
                >
                  {p.domain}
                </Link>
              ))}
            </div>
            <span className="eyebrow hidden md:inline">
              Move your mouse
            </span>
          </div>
        </div>
      </section>

      {/* ============ WORK ============ */}
      <section id="work" className="scroll-mt-20 pt-24 md:pt-36">
        <div className="wrap">
          <div className="mb-14 grid gap-6 md:mb-20 md:grid-cols-[1.4fr_1fr] md:items-end">
            <Reveal>
              <div className="eyebrow mb-5">
                Selected work
              </div>

              <h2 className="text-[clamp(2.5rem,6vw,5.25rem)] font-semibold leading-[0.95] tracking-[-0.045em]">
                Real stores,{" "}
                <span className="serif-i text-cream/60">
                  live right now.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="max-w-md text-lg leading-relaxed text-muted md:justify-self-end">
                A clothing brand, a tailor and a handicraft store.
                Each one is built around how that brand sells.
              </p>
            </Reveal>
          </div>

          <WorkStack projects={PROJECTS} />
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section
        id="services"
        className="relative scroll-mt-20 overflow-hidden py-24 md:py-36"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-20 size-[450px] rounded-full bg-blue-600/[0.07] blur-[130px]"
        />

        <div className="wrap relative">
          <div className="grid gap-6 md:grid-cols-[1.3fr_0.7fr] md:items-end">
            <Reveal>
              <div className="eyebrow mb-5 text-blue-400">
                What we build
              </div>

              <h2 className="max-w-4xl text-[clamp(2.6rem,6.5vw,5.5rem)] font-semibold leading-[0.94] tracking-[-0.06em]">
                <LetterReveal>One studio.</LetterReveal>
                <br />
                <LetterReveal
                  className="serif-i font-normal text-white/55"
                  delay={200}
                >
                  Every kind of site
                </LetterReveal>{" "}
                <LetterReveal delay={420}>
                  a brand needs.
                </LetterReveal>
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="max-w-md text-base leading-7 text-muted md:justify-self-end md:text-lg">
                From custom eCommerce experiences to high-converting
                business websites, we build digital products around
                the way you work.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-[1.45fr_1fr]">
            {SERVICES.slice(0, 2).map((s, i) => (
              <DirectionalReveal
                key={s.title}
                direction={i === 0 ? "left" : "right"}
                delay={i * 140}
                className="h-full"
              >
                <Spotlight className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-line-2 bg-[#101116] p-3 transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_20px_70px_-35px_rgba(59,130,246,0.25)] sm:rounded-[32px] sm:p-4">
                  <div className="relative h-[220px] overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0b0c10] sm:h-[260px] lg:h-[280px]">
                    <div className="absolute right-3 top-3 z-10 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 font-mono text-[10px] tracking-wider text-white/70 backdrop-blur">
                      {i === 0
                        ? "01 / CUSTOM ECOMMERCE"
                        : "02 / SHOPIFY"}
                    </div>

                    <div className="h-full transition-transform duration-700 ease-out group-hover:scale-[1.025]">
                      <ServiceVisual kind={s.visual} />
                    </div>
                  </div>

                  <div className="relative flex flex-1 flex-col px-3 pb-3 pt-6 sm:px-4 sm:pb-4 sm:pt-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.17em] text-blue-400">
                          {i === 0
                            ? "Built around your brand"
                            : "Simple to manage"}
                        </p>

                        <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                          {s.title}
                        </h3>
                      </div>

                      <span
                        aria-hidden="true"
                        className="grid size-10 shrink-0 place-items-center rounded-full border border-white/10 text-white/60 transition-all duration-300 group-hover:border-blue-400/50 group-hover:bg-blue-500 group-hover:text-white"
                      >
                        ↗
                      </span>
                    </div>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-white/55 sm:text-[15px]">
                      {s.text}
                    </p>

                    <div className="mt-auto flex flex-wrap gap-2 pt-6">
                      {s.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-[11px] text-white/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Spotlight>
              </DirectionalReveal>
            ))}
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(2).map((s, i) => {
              const directions = [
                "top",
                "bottom",
                "right",
              ] as const;

              return (
                <DirectionalReveal
                  key={s.title}
                  direction={directions[i]}
                  delay={i * 150}
                  className="h-full"
                >
                  <Spotlight className="group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-line-2 bg-[#101116] p-3 transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_18px_55px_-35px_rgba(59,130,246,0.3)] sm:p-4">
                    <div className="relative h-[185px] overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0b0c10] sm:h-[200px]">
                      <div className="absolute right-3 top-3 z-10 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 font-mono text-[9px] text-white/60 backdrop-blur">
                        0{i + 3} / SERVICE
                      </div>

                      <div className="h-full transition-transform duration-700 ease-out group-hover:scale-[1.035]">
                        <ServiceVisual kind={s.visual} />
                      </div>
                    </div>

                    <div className="relative flex flex-1 flex-col px-2 pb-2 pt-6 sm:px-3 sm:pb-3">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-xl font-semibold tracking-tight text-white">
                          {s.title}
                        </h3>

                        <span
                          aria-hidden="true"
                          className="grid size-8 shrink-0 place-items-center rounded-full border border-white/10 text-sm text-white/50 transition-all duration-300 group-hover:border-blue-400/50 group-hover:bg-blue-500 group-hover:text-white"
                        >
                          ↗
                        </span>
                      </div>

                      <p className="mt-3 text-sm leading-6 text-white/55">
                        {s.text}
                      </p>

                      <div className="mt-auto flex flex-wrap gap-2 pt-6">
                        {s.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/[0.08] bg-white/[0.035] px-2.5 py-1.5 text-[10px] text-white/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-5 h-px w-full bg-white/[0.07] transition-colors duration-300 group-hover:bg-blue-500/40" />
                    </div>
                  </Spotlight>
                </DirectionalReveal>
              );
            })}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-white/45">
                One team. The right solution for your business.
              </p>

              <Link
                href="#process"
                className="inline-flex items-center gap-2 text-sm text-blue-400 transition-colors hover:text-blue-300"
              >
                See how we work
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ STACK ============ */}
      <section
        id="stack"
        className="relative scroll-mt-20 overflow-hidden border-y border-line py-24 md:py-36"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_60%_60%_at_70%_50%,#000,transparent)]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-10%] top-1/2 size-[520px] -translate-y-1/2 rounded-full bg-accent/15 blur-[130px]"
        />

        <div className="wrap relative grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <Reveal>
              <div className="eyebrow mb-5">
                Our stack
              </div>

              <h2 className="text-[clamp(2.5rem,6vw,5.25rem)] font-semibold leading-[0.95] tracking-[-0.045em]">
                <LetterReveal>
                  Next.js or Shopify.
                </LetterReveal>{" "}
                <LetterReveal
                  className="serif-i text-accent"
                  delay={300}
                >
                  Your pick.
                </LetterReveal>
              </h2>

              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
                The same tools top brands around the world use.
                We help you pick the right one for how you sell.
              </p>
            </Reveal>

            <div className="mt-10 space-y-6">
              {WHY_NEXT.map((w, i) => (
                <Reveal key={w.title} delay={i * 0.06}>
                  <div className="flex gap-5 border-t border-line pt-6">
                    <Icon name={w.icon} />

                    <div>
                      <h3 className="text-lg font-medium">
                        {w.title}
                      </h3>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-muted">
                        {w.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="relative">
              <CodeWindow />

              <div className="mt-5 flex flex-wrap gap-2">
                {STACK.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-line-2 bg-ink/60 px-4 py-2 font-mono text-[12px] text-cream/80 backdrop-blur"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ MADE FOR BANGLADESH ============ */}
      <section className="py-24 md:py-36">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow mb-5">
              Made for Bangladesh
            </div>

            <h2 className="max-w-4xl text-[clamp(2.5rem,6vw,5.25rem)] font-semibold leading-[0.95] tracking-[-0.045em]">
              <LetterReveal>Built for how</LetterReveal>{" "}
              <LetterReveal
                className="serif-i text-cream/60"
                delay={300}
              >
                people here
              </LetterReveal>{" "}
              <LetterReveal delay={560}>
                shop.
              </LetterReveal>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Cash on delivery, local payments, courier links and chat.
              The things your buyers expect are built in from day one.
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
     
      {/* ============ PROCESS ============ */}
      <BlueProcess />


      {/* ============ CTA ============ */}
      <section className="pb-24 md:pb-32">
        <div className="wrap">
          <Reveal>
            <div className="relative isolate overflow-hidden rounded-[32px] border border-line-2 bg-surface px-6 py-20 text-center md:px-16 md:py-28">
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 -z-10 size-[900px] -translate-x-1/2 -translate-y-1/2"
              >
                <div
                  className="size-full animate-spin-slow rounded-full blur-[90px]"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 0deg, color-mix(in srgb, var(--color-accent) 70%, transparent) 60deg, transparent 140deg, transparent 220deg, color-mix(in srgb, var(--color-accent-soft) 45%, transparent) 280deg, transparent 360deg)",
                  }}
                />
              </div>

              <div
                aria-hidden="true"
                className="absolute inset-[1px] -z-10 rounded-[31px] bg-surface/55"
              />

              <div className="eyebrow mb-6">
                Next project
              </div>

              <h2 className="mx-auto max-w-4xl text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-[0.95] tracking-[-0.05em]">
                <LetterReveal>
                  Have a brand?
                </LetterReveal>{" "}
                <br className="hidden sm:block" />
                <LetterReveal
                  className="serif-i text-accent"
                  delay={280}
                >
                  Let's build its store.
                </LetterReveal>
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
