import Image from "next/image";

/*
  Small UI previews for each service card.
  Photos come from stores we built (public/visuals), so every card shows real color.
*/

export type VisualKind = "store" | "shopify" | "booking" | "brand" | "speed";

const ease = "duration-700 ease-[cubic-bezier(.16,1,.3,1)]";

function Frame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`relative h-full overflow-hidden rounded-2xl border border-line bg-ink/70 [background-image:radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:16px_16px] ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 left-1/2 h-32 w-3/4 -translate-x-1/2 rounded-full bg-accent/25 opacity-60 blur-[50px] transition-opacity duration-500 group-hover:opacity-100"
      />
      {children}
    </div>
  );
}

function Photo({
  src,
  alt = "",
  className = "",
  imgClass = "",
  sizes = "240px",
}: {
  src: string;
  alt?: string;
  className?: string;
  imgClass?: string;
  sizes?: string;
}) {
  return (
    <div className={`overflow-hidden ${className.includes("absolute") ? "" : "relative"} ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} className={`object-cover ${imgClass}`} />
    </div>
  );
}

/* Product page with two more products fanned behind it */
function StoreVisual() {
  return (
    <Frame className="flex items-center justify-center p-3">
      <div
        className={`absolute left-[7%] top-1/2 hidden w-[17%] -translate-y-1/2 -rotate-6 rounded-xl border border-black/5 bg-white p-1.5 opacity-90 shadow-2xl transition-transform sm:block ${ease} group-hover:-translate-x-2 group-hover:-rotate-[9deg]`}
      >
        <Photo src="/visuals/panjabi-ivory.jpg" className="aspect-[4/5] rounded-lg" />
        <div className="mt-1.5 h-1.5 w-3/4 rounded-full bg-black/15" />
      </div>
      <div
        className={`absolute right-[7%] top-1/2 hidden w-[17%] -translate-y-1/2 rotate-6 rounded-xl border border-black/5 bg-white p-1.5 opacity-90 shadow-2xl transition-transform sm:block ${ease} group-hover:translate-x-2 group-hover:rotate-[9deg]`}
      >
        <Photo src="/visuals/panjabi-teal.jpg" className="aspect-[4/5] rounded-lg" />
        <div className="mt-1.5 h-1.5 w-3/4 rounded-full bg-black/15" />
      </div>

      <div
        className={`relative z-10 flex w-full max-w-[380px] gap-3.5 rounded-xl border border-black/5 bg-white p-2.5 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.9)] transition-transform ${ease} group-hover:-translate-y-1.5`}
      >
        <div className="relative w-[34%] shrink-0">
          <Photo src="/visuals/panjabi-maroon.jpg" alt="Panjabi product photo" className="aspect-[4/5] rounded-lg" sizes="200px" />
          <span className="absolute left-2 top-2 rounded-full bg-accent-deep px-2 py-0.5 text-[9px] font-semibold text-on-accent">NEW</span>
        </div>
        <div className="flex min-w-0 flex-1 flex-col py-1">
          <span className="text-[12px] font-semibold leading-tight text-[#111]">Rust Maroon Panjabi</span>
          <span className="mt-1 text-[10px] text-black/45">Festive collection</span>
          <span className="mt-3 text-[15px] font-semibold text-[#111]">৳2,065</span>
          <div className="mt-2.5 flex gap-1">
            {["S", "M", "L", "XL"].map((s) => (
              <span
                key={s}
                className={`grid h-6 min-w-6 place-items-center rounded-md border px-1 text-[10px] ${
                  s === "M" ? "border-accent-deep bg-accent/10 font-medium text-accent-deep" : "border-black/10 text-black/50"
                }`}
              >
                {s}
              </span>
            ))}
          </div>
          <span className="mt-auto flex h-8 items-center justify-center rounded-full bg-accent-deep text-[11px] font-medium text-on-accent">
            Buy now
          </span>
        </div>
      </div>

      <span className="absolute right-4 top-4 z-20 hidden rounded-full border border-line-2 bg-ink/80 px-2.5 py-1 font-mono text-[10px] text-cream/70 backdrop-blur sm:block">
        ▲ Next.js
      </span>
    </Frame>
  );
}

/* Store dashboard: sales chart and new orders with product photos */
function ShopifyVisual() {
  const bars = [35, 48, 40, 62, 55, 78, 92];
  const orders = [
    { img: "/visuals/denim-bags.jpg", name: "Denim sleeve", pay: "COD", tone: "bg-[#22c55e]/15 text-[#15803d]" },
    { img: "/visuals/rug.jpg", name: "Jute rug", pay: "bKash", tone: "bg-[#ec4899]/15 text-[#be185d]" },
    { img: "/visuals/cup.jpg", name: "Table set", pay: "Card", tone: "bg-accent/15 text-accent-deep" },
  ];
  return (
    <Frame className="p-3.5">
      <div className={`flex h-full gap-3 rounded-xl border border-black/5 bg-white p-3 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] transition-transform ${ease} group-hover:-translate-y-1`}>
        <div className="flex w-[40%] flex-col">
          <span className="flex items-center gap-1.5 text-[10px] font-semibold text-[#111]">
            <span className="size-1.5 rounded-full bg-[#22c55e]" />
            Sales
          </span>
          <div className="mt-2 flex flex-1 items-end gap-1">
            {bars.map((h, i) => (
              <span
                key={i}
                style={{ height: `${h}%`, transitionDelay: `${i * 40}ms` }}
                className={`flex-1 origin-bottom rounded-t-[3px] bg-gradient-to-t transition-transform duration-500 group-hover:scale-y-110 ${
                  i === bars.length - 1 ? "from-accent-deep to-accent-soft" : "from-accent/20 to-accent/40"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="flex min-w-0 flex-1 flex-col justify-between gap-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold text-[#111]">New orders</span>
            <span className="rounded bg-[#95bf47]/20 px-1.5 py-0.5 text-[9px] font-semibold text-[#4f7a28]">Shopify</span>
          </div>
          {orders.map((o) => (
            <div key={o.name} className="flex items-center gap-2 rounded-lg bg-black/[0.04] p-1.5">
              <Photo src={o.img} className="size-8 shrink-0 rounded-md" sizes="40px" />
              <span className="min-w-0 flex-1 truncate text-[10px] font-medium text-black/75">{o.name}</span>
              <span className={`rounded-full px-1.5 py-0.5 text-[9px] font-medium ${o.tone}`}>{o.pay}</span>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

/* Studio photo with a booking card on top */
function BookingVisual() {
  const days = ["Sat", "Sun", "Mon", "Tue", "Wed"];
  return (
    <Frame>
      <Photo src="/visuals/studio.jpg" className={`absolute inset-0 transition-transform ${ease} group-hover:scale-105`} sizes="420px" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
      <div
        className={`absolute inset-x-3 bottom-3 rounded-xl border border-white/40 bg-white/95 p-3 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] backdrop-blur-md transition-transform ${ease} group-hover:-translate-y-1`}
      >
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-semibold text-[#111]">Book a fitting</span>
          <span className="truncate text-[10px] text-black/45">Home · Studio · Online</span>
        </div>
        <div className="mt-2.5 flex gap-1.5">
          {days.map((d) => (
            <span
              key={d}
              className={`flex-1 rounded-md py-1.5 text-center text-[10px] ${
                d === "Mon" ? "bg-accent-deep font-medium text-on-accent" : "bg-black/[0.05] text-black/60"
              }`}
            >
              {d}
            </span>
          ))}
        </div>
        <div className="mt-2 flex gap-1.5">
          {["Morning", "Noon", "Evening"].map((t) => (
            <span
              key={t}
              className={`flex-1 rounded-full border py-1 text-center text-[10px] ${
                t === "Noon" ? "border-accent-deep bg-accent/10 font-medium text-accent-deep" : "border-black/10 text-black/55"
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Frame>
  );
}

/* A brand homepage with a big photo hero */
function BrandVisual() {
  return (
    <Frame className="p-3.5">
      <div className={`relative h-full overflow-hidden rounded-xl border border-line-2 transition-transform ${ease} group-hover:-translate-y-1`}>
        <Photo src="/visuals/tote.jpg" className={`absolute inset-0 transition-transform ${ease} group-hover:scale-105`} imgClass="object-[70%_center]" sizes="420px" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/45 to-transparent" />
        <div className="relative flex h-full flex-col p-3">
          <div className="flex items-center justify-between">
            <span className="h-2 w-9 rounded-full bg-cream/80" />
            <span className="flex gap-1.5">
              <span className="h-1.5 w-4 rounded-full bg-cream/40" />
              <span className="h-1.5 w-4 rounded-full bg-cream/40" />
              <span className="h-1.5 w-4 rounded-full bg-cream/40" />
            </span>
          </div>
          <div className="mt-auto">
            <span className="block text-[19px] font-semibold leading-[1.02] tracking-tight text-cream">
              Made by <span className="serif-i text-accent-soft">hand,</span>
              <br />
              made to last
            </span>
            <span className="mt-2.5 inline-flex h-6 items-center rounded-full bg-cream px-3 text-[10px] font-medium text-ink">Our story</span>
          </div>
        </div>
      </div>
    </Frame>
  );
}

/* Before and after, with a slider handle */
function SpeedVisual() {
  return (
    <Frame className="p-3.5">
      <div className="relative h-full overflow-hidden rounded-xl border border-line-2">
        {/* before: dull and blurry */}
        <Photo src="/visuals/model-maroon.jpg" className="absolute inset-0 opacity-60 blur-[2px] grayscale" imgClass="object-[62%_25%]" sizes="420px" />
        <div className="absolute inset-0 bg-ink/30" />
        {/* after: sharp and bright */}
        <div className={`absolute inset-0 transition-[clip-path] [clip-path:inset(0_0_0_50%)] group-hover:[clip-path:inset(0_0_0_28%)] ${ease}`}>
          <Photo src="/visuals/model-maroon.jpg" className="absolute inset-0 saturate-[1.15]" imgClass="object-[62%_25%]" sizes="420px" />
        </div>
        {/* handle */}
        <div className={`absolute inset-y-0 left-1/2 w-px bg-cream/90 transition-[left] group-hover:left-[28%] ${ease}`}>
          <span className="absolute left-1/2 top-1/2 grid size-7 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-cream text-[11px] font-bold text-ink shadow-lg">
            ‹›
          </span>
        </div>
        <span className="absolute left-2.5 top-2.5 rounded-full bg-ink/70 px-2 py-0.5 text-[10px] text-cream/70 backdrop-blur">Before</span>
        <span className="absolute right-2.5 top-2.5 flex items-center gap-1 rounded-full bg-accent-deep px-2 py-0.5 text-[10px] font-medium text-on-accent">
          <svg viewBox="0 0 24 24" className="size-2.5" fill="currentColor" aria-hidden="true">
            <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
          </svg>
          After
        </span>
      </div>
    </Frame>
  );
}

export default function ServiceVisual({ kind }: { kind: VisualKind }) {
  switch (kind) {
    case "store":
      return <StoreVisual />;
    case "shopify":
      return <ShopifyVisual />;
    case "booking":
      return <BookingVisual />;
    case "brand":
      return <BrandVisual />;
    case "speed":
      return <SpeedVisual />;
  }
}
