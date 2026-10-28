/* A small code window, so visitors see what sits behind the store */

type Tok = [string, string?];

const C = {
  k: "text-accent-soft", // keyword
  f: "text-[#f5f3ee]", // function
  s: "text-[#c8d68a]", // string
  t: "text-[#e6c07b]", // type / tag
  c: "text-[#6e6c67]", // comment
  p: "text-[#a3a19b]", // punctuation
};

const LINES: Tok[][] = [
  [["// app/product/[slug]/page.tsx", C.c]],
  [["export const ", C.k], ["revalidate", C.f], [" = ", C.p], ["60", C.s]],
  [],
  [["export default async function ", C.k], ["ProductPage", C.f], ["({ params }) {", C.p]],
  [["  const ", C.k], ["product", C.f], [" = ", C.p], ["await ", C.k], ["getProduct", C.f], ["(params.slug)", C.p]],
  [],
  [["  return ", C.k], ["(", C.p]],
  [["    <", C.p], ["Gallery", C.t], [" images", C.f], ["={product.images} />", C.p]],
  [["    <", C.p], ["SizePicker", C.t], [" sizes", C.f], ["={product.sizes} />", C.p]],
  [["    <", C.p], ["Price", C.t], [" bdt", C.f], ["={product.price} />", C.p]],
  [["    <", C.p], ["BuyNow", C.t], [" cod bkash", C.f], [" />", C.p]],
  [["  )", C.p]],
  [["}", C.p]],
];

export default function CodeWindow() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line-2 bg-[#0e0e10] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)]">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div className="flex gap-2">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
        </div>
        <span className="font-mono text-[11px] text-dim">page.tsx</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-[1.9] md:text-[13px]">
        <code>
          {LINES.map((line, i) => (
            <div key={i} className="flex">
              <span>
                {line.length === 0 ? " " : line.map(([t, cls], j) => (
                  <span key={j} className={cls}>
                    {t}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}
