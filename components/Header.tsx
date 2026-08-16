import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-ink/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-lg font-bold tracking-tight text-paper">
          Ahmad Naufal Performance Marketing Portofolio<span className="text-stamp">.</span>
        </Link>
        <nav className="flex items-center gap-6">
          <a
            href="/#case-files"
            className="hidden font-mono text-xs uppercase tracking-widest text-muted transition hover:text-paper sm:inline"
          >
            Case Studies
          </a>
          <a
            href="/#verified"
            className="hidden font-mono text-xs uppercase tracking-widest text-muted transition hover:text-paper sm:inline"
          >
            More Clients
          </a>
          <a
            href="mailto:hello@example.com"
            className="rounded-full bg-stamp px-4 py-2 font-mono text-xs uppercase tracking-widest text-ink transition hover:bg-gold"
          >
            LET'S CONNECT
          </a>
        </nav>
      </div>
    </header>
  );
}
