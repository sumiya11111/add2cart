import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap flex min-h-[80vh] flex-col items-start justify-center pt-24">
      <div className="eyebrow mb-4">404</div>
      <h1 className="text-6xl font-semibold tracking-[-0.05em] md:text-8xl">
        Page not <span className="serif-i text-accent">found.</span>
      </h1>
      <p className="mt-6 max-w-md text-lg text-muted">This page does not exist. Let&apos;s get you back.</p>
      <Link href="/" className="mt-10 inline-flex h-12 items-center rounded-full bg-cream px-6 font-medium text-ink">
        Back to home
      </Link>
    </section>
  );
}
