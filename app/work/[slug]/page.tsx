import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS, getProject } from "@/lib/projects";
import Gallery from "@/components/Gallery";
import PhoneFrame from "@/components/PhoneFrame";
import Reveal from "@/components/Reveal";
import CTAButton from "@/components/CTAButton";
import { ArrowUpRight, ArrowRight } from "@/components/Arrow";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: `${p.name} case study`,
    description: p.summary,
    openGraph: { title: `${p.name} case study | add2cart`, description: p.summary, images: [p.shots[0].src] },
  };
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const idx = PROJECTS.findIndex((x) => x.slug === p.slug);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative isolate overflow-hidden pt-32 md:pt-40">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[-10%] -z-10 h-[70vh] w-[110vw] -translate-x-1/2 rounded-full opacity-25 blur-[140px] [mask-image:linear-gradient(to_bottom,#000_30%,transparent_85%)]"
          style={{ background: p.glow }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-40 [background-image:radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000,transparent)]"
        />

        <div className="wrap">
          <Reveal>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-xs text-muted">
              <Link href="/#work" className="transition-colors hover:text-cream">
                Work
              </Link>
              <span className="text-dim">/</span>
              <span>{p.category}</span>
              <span className="text-dim">/</span>
              <span className="text-cream">{p.name}</span>
            </nav>
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <Reveal delay={0.06}>
              <div className="font-mono text-xs uppercase tracking-[0.12em] text-accent">
                {p.type}
              </div>
              <h1 className="mt-4 text-[clamp(3.5rem,11vw,10rem)] font-semibold leading-[0.88] tracking-[-0.06em]">{p.name}</h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-xl leading-relaxed text-cream/80">{p.summary}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`https://${p.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-12 items-center gap-2 rounded-full bg-cream px-6 text-[15px] font-medium text-ink transition-colors hover:bg-white"
                >
                  Visit live site
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <button type="button" data-add={p.slug} aria-pressed="false" className="inline-flex h-12 items-center rounded-full border border-line-2 px-6 text-[15px] text-cream/85">Add to cart</button>
                <CTAButton variant="ghost" label="Build one like this" text={`Hi add2cart, I saw ${p.name} on your site. I want a website like this for my brand.`} />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <dl className="mt-14 grid grid-cols-1 border-y border-line sm:grid-cols-3">
              {p.facts.map((f, i) => (
                <div key={f.label} className={`py-6 sm:px-6 ${i > 0 ? "border-t border-line sm:border-l sm:border-t-0" : "sm:pl-0"}`}>
                  <dt className="eyebrow">{f.label}</dt>
                  <dd className="mt-2 text-lg">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.1} className="mt-14">
            <Gallery shots={p.shots} name={p.name} />
          </Reveal>
        </div>
      </section>

      {/* ============ DETAILS ============ */}
      <section className="py-24 md:py-32">
        <div className="wrap grid gap-16 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-12">
            <Reveal>
              <div className="eyebrow mb-4">The brand</div>
              <p className="text-2xl leading-snug tracking-tight text-cream/90">{p.brand}</p>
            </Reveal>
            <Reveal>
              <div className="eyebrow mb-4">Who it is for</div>
              <p className="text-lg leading-relaxed text-muted">{p.audience}</p>
            </Reveal>
            <Reveal>
              <div className="eyebrow mb-4">What we built</div>
              <ul className="flex flex-wrap gap-2">
                {p.built.map((t) => (
                  <li key={t} className="rounded-full border border-line-2 px-3.5 py-2 text-sm text-cream/80">
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal>
            <div className="rounded-3xl border border-line-2 bg-surface p-7 md:p-10">
              <div className="eyebrow mb-6">What the site does</div>
              <ol className="space-y-0">
                {p.does.map((d, i) => (
                  <li key={d} className="flex gap-5 border-t border-line py-5 first:border-t-0 first:pt-0">
                    <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                      <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m5 12 5 5 9-10" />
                      </svg>
                    </span>
                    <span className="text-[17px] leading-relaxed text-cream/85">{d}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ MOBILE ============ */}
      <section className="relative isolate overflow-hidden border-y border-line py-24 md:py-32">
        <div aria-hidden="true" className="absolute right-[10%] top-1/2 -z-10 size-[480px] -translate-y-1/2 rounded-full opacity-25 blur-[120px]" style={{ background: p.glow }} />
        <div className="wrap grid items-center gap-14 md:grid-cols-2">
          <Reveal>
            <div className="eyebrow mb-5">On mobile</div>
            <h2 className="text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.045em]">
              Built for the phone <span className="serif-i text-cream/60">in your hand.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">{p.mobileNote}</p>
          </Reveal>
          <Reveal delay={0.1} className="flex justify-center md:justify-end">
            <div className="relative">
              <PhoneFrame src={p.mobile} alt={`${p.name} on a phone`} className="relative w-[230px] rotate-[-4deg] md:w-[270px]" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ NEXT ============ */}
      <section className="py-24 md:py-32">
        <div className="wrap">
          <div className="eyebrow mb-6">Next project</div>
          <Link
            href={`/work/${next.slug}`}
            className="group relative grid items-center gap-8 overflow-hidden rounded-[28px] border border-line-2 bg-surface p-6 transition-colors hover:border-accent/40 md:grid-cols-[1fr_1fr] md:p-10"
          >
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.12em] text-muted">
                {next.type}
              </div>
              <div className="mt-3 flex items-center gap-4 text-5xl font-semibold tracking-[-0.045em] md:text-7xl">
                {next.name}
                <ArrowRight className="size-8 text-accent transition-transform duration-300 group-hover:translate-x-2 md:size-10" />
              </div>
              <p className="mt-4 max-w-sm text-muted">{next.blurb}</p>
            </div>
            <div className="relative aspect-[788/493] overflow-hidden rounded-xl border border-line-2">
              <Image
                src={next.shots[0].src}
                alt={`${next.name} homepage`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
