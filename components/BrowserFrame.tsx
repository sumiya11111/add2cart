
import Image from "next/image";

export default function BrowserFrame({
  src,
  alt,
  url,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  url: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[18px] border border-white/15 bg-[#111113] shadow-[0_32px_90px_-28px_rgba(0,0,0,0.9)] ${className}`}
    >
      <div className="flex h-[48px] items-center gap-3 border-b border-white/10 bg-[linear-gradient(110deg,#101012,#1b1714_70%,#241a12)] px-3 sm:px-4">
        <div className="grid size-7 shrink-0 place-items-center rounded-full border border-[#c99a55]/50 bg-[#c99a55]/10 font-serif text-[17px] leading-none text-[#e7bd78] shadow-[0_0_22px_rgba(201,154,85,0.12)]">
          P
        </div>

        <div className="flex min-w-0 flex-1 items-center gap-2">
          <span aria-hidden="true" className="hidden text-lg text-white/35 sm:inline">‹</span>
          <span aria-hidden="true" className="hidden text-lg text-white/35 sm:inline">›</span>
          <span aria-hidden="true" className="mr-1 hidden text-sm text-[#d5ad70] sm:inline">↻</span>

          <div className="flex h-[30px] min-w-0 flex-1 items-center gap-2 rounded-full border border-[#c99a55]/40 bg-black/35 px-3 shadow-[inset_0_0_16px_rgba(201,154,85,0.08),0_0_18px_rgba(201,154,85,0.06)] sm:px-4">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-4 shrink-0 text-[#e3bd80]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M3.5 12h17M12 3c2.3 2.5 3.4 5.5 3.4 9s-1.1 6.5-3.4 9c-2.3-2.5-3.4-5.5-3.4-9S9.7 5.5 12 3Z" />
            </svg>

            <span className="truncate font-mono text-[11px] text-white/80 sm:text-xs">
              {url}
            </span>

            <span aria-hidden="true" className="ml-auto text-sm text-[#d5a95e]">
              ☆
            </span>
          </div>
        </div>

        <div
          className="hidden shrink-0 items-center gap-3 text-white/55 sm:flex"
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M12 3v12m-4-4 4 4 4-4M5 16v4h14v-4" />
          </svg>
          <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="4" y="3" width="16" height="18" rx="2" />
          </svg>
        </div>
      </div>

      <div className="relative aspect-[788/493] w-full overflow-hidden bg-[#f5f1e9]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 62vw"
          className="object-contain object-center"
          priority={priority}
        />
      </div>
    </div>
  );
}
