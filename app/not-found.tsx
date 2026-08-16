import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-start px-6 py-32">
      <span className="font-mono text-xs uppercase tracking-widest text-stamp">
        Case File Not Found
      </span>
      <h1 className="mt-4 font-display text-4xl font-bold text-paper">
        No record on this account.
      </h1>
      <p className="mt-4 text-paper/70">
        This case file doesn&apos;t exist yet — or hasn&apos;t cleared review.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-stamp px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink"
      >
        Back to the ledger
      </Link>
    </section>
  );
}
