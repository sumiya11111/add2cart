import Link from "next/link";
import { NAV, SITE, waLink } from "@/lib/site";
import { PROJECTS } from "@/lib/projects";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="wrap grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="space-y-5">
          <Logo height={24} />
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            A web studio in Dhaka. We build fast, custom stores on Next.js and Shopify for brands that want more orders.
          </p>
        </div>
        <div>
          <div className="eyebrow mb-4">Studio</div>
          <ul className="space-y-2.5 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-cream/80 transition-colors hover:text-accent">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="eyebrow mb-4">Work</div>
          <ul className="space-y-2.5 text-sm">
            {PROJECTS.map((p) => (
              <li key={p.slug}>
                <Link href={`/work/${p.slug}`} className="text-cream/80 transition-colors hover:text-accent">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="eyebrow mb-4">Talk to us</div>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="text-cream/80 transition-colors hover:text-accent">
                WhatsApp
              </a>
            </li>
            <li className="text-muted">{SITE.city}</li>
          </ul>
        </div>
      </div>
      <div className="wrap">
        <div className="flex flex-col gap-2 border-t border-line py-6 font-mono text-xs text-dim sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} add2cart</span>
          <span>Made in Dhaka</span>
        </div>
      </div>
    </footer>
  );
}
