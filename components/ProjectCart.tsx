"use client";

import { useEffect, useState } from "react";
import { PROJECTS } from "@/lib/projects";
import { waLink } from "@/lib/site";

const KEY = "a2c_cart";
const projectFor = (id: string) => PROJECTS.find((p) => p.slug === id);

export default function ProjectCart() {
  const [cart, setCart] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  useEffect(() => {
    try {
      const saved: unknown = JSON.parse(localStorage.getItem(KEY) || "[]");
      if (Array.isArray(saved)) {
        const normalized = saved.map((id) => id === "baah" ? "baah-store" : id).filter((id): id is string => typeof id === "string" && !!projectFor(id));
        setCart([...new Set(normalized)]);
      }
    } catch { /* local storage may be disabled */ }
  }, []);
  useEffect(() => {
    const click = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const add = target.closest<HTMLElement>("[data-add]");
      const show = target.closest<HTMLElement>("[data-open-cart]");
      if (add) {
        event.preventDefault();
        const id = add.dataset.add;
        if (id && projectFor(id)) setCart((current) => {
          const next = current.includes(id) ? current.filter((x) => x !== id) : [...current, id];
          try { localStorage.setItem(KEY, JSON.stringify(next)); } catch {}
          return next;
        });
      } else if (show) { event.preventDefault(); setOpen(true); }
    };
    document.addEventListener("click", click);
    return () => document.removeEventListener("click", click);
  }, []);
  useEffect(() => {
    document.querySelectorAll<HTMLElement>("[data-add]").forEach((btn) => {
      const added = cart.includes(btn.dataset.add || "");
      btn.textContent = added ? "Added to cart" : "Add to cart";
      btn.setAttribute("aria-pressed", String(added));
    });
    document.querySelectorAll<HTMLElement>("[data-cart-count]").forEach((el) => { el.textContent = String(cart.length); });
  }, [cart]);
  useEffect(() => {
    if (!open) return;
    const escape = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);
  const message = `Hi add2cart! I want a website like: ${cart.map((id) => projectFor(id)?.name).filter(Boolean).join(", ") || "not sure yet"}\nName: ${name || "-"}\nI sell: ${business || "-"}`;
  return <>
    <button type="button" data-open-cart aria-label="Open project cart" className="fixed bottom-6 right-6 z-[55] rounded-full border border-line-2 bg-surface px-5 py-3 text-sm font-medium text-cream shadow-xl">Your cart (<span data-cart-count>{cart.length}</span>)</button>
    {open && <div className="fixed inset-0 z-[80]" role="presentation">
      <button type="button" aria-label="Close cart" className="absolute inset-0 bg-black/70" onClick={() => setOpen(false)} />
      <aside role="dialog" aria-modal="true" aria-labelledby="cart-title" className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-line-2 bg-ink text-cream shadow-2xl">
        <div className="flex items-center justify-between border-b border-line p-6"><h2 id="cart-title" className="text-2xl font-semibold">Your cart ({cart.length})</h2><button type="button" onClick={() => setOpen(false)} aria-label="Close cart" className="rounded-full border border-line px-3 py-2">✕</button></div>
        <div className="flex-1 space-y-5 overflow-y-auto p-6">
          {cart.length === 0 ? <p className="text-muted">Your cart is empty. Add a store you like. It shows us your taste.</p> : cart.map((id) => { const p = projectFor(id); return p && <div key={id} className="flex items-center gap-4 border-b border-line pb-4"><img src={p.shots[0].src} alt="" className="h-16 w-24 rounded-lg object-cover" /><div className="flex-1"><div className="font-medium">{p.name}</div><div className="text-sm text-muted">{p.category}</div></div><button type="button" className="text-sm text-muted underline" onClick={() => setCart((items) => { const next = items.filter((x) => x !== id); try { localStorage.setItem(KEY, JSON.stringify(next)); } catch {} return next; })}>Remove</button></div>; })}
          <div className="pt-2 text-xs uppercase tracking-widest text-muted">Your details</div>
          <label className="block text-sm">Your name<input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Rahim" autoComplete="name" className="mt-2 w-full rounded-lg border border-line-2 bg-surface p-3 text-cream" /></label>
          <label className="block text-sm">What do you sell?<input value={business} onChange={(e) => setBusiness(e.target.value)} placeholder="e.g. Women's clothing" className="mt-2 w-full rounded-lg border border-line-2 bg-surface p-3 text-cream" /></label>
        </div>
        <div className="space-y-3 border-t border-line p-6"><div className="flex justify-between text-sm"><span>Projects in cart</span><span>{cart.length}</span></div><div className="flex justify-between text-sm"><span>Price</span><span>We quote on WhatsApp</span></div><a href={waLink(message)} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-center rounded-full bg-accent-deep px-5 text-center font-medium text-on-accent">Place order on WhatsApp</a><p className="text-center text-xs text-muted">Opens WhatsApp with your cart already typed in.</p></div>
      </aside>
    </div>}
  </>;
}
