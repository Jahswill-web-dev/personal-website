import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-canvas px-4 py-16 text-ink">
      <div className="mx-auto max-w-2xl">
        <Link href="/" className="text-sm font-semibold text-accent">
          Back to portfolio
        </Link>
        <h1 className="mt-8 text-4xl font-semibold">Blog is paused for now.</h1>
        <p className="mt-4 leading-7 text-ink/70">
          This section is intentionally offline while the blog experience is being fixed.
        </p>
      </div>
    </main>
  );
}
