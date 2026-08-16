export default function Footer() {
  return (
    <footer className="border-t border-line/70 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl font-bold text-paper">
              AHMAD NAUFAL<span className="text-stamp">.</span>
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              Performance marketer based in Indonesia. I've handled different industries, all held to the same standard.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3">Markets</p>
            <ul className="space-y-1 text-sm text-paper/80">
              <li>Indonesia</li>
              <li>Philippines</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-3">Let's Connect</p>
           <div className="space-y-3">
  <a href="mailto:naufal14ahmad@gmail.com" className="flex justify-between border-b border-line pb-2">
    <span>Email</span>
    <span>↗</span>
  </a>

  <a href="https://linkedin.com/in/ahmadnaufalan" className="flex justify-between border-b border-line pb-2">
    <span>LinkedIn</span>
    <span>↗</span>
  </a>

  <a href="https://wasap.at/ymGzoH" className="flex justify-between border-b border-line pb-2">
    <span>Whatsapp</span>
    <span>↗</span>
  </a>
</div>
          </div>
        </div>
        <p className="mt-12 font-mono text-[11px] uppercase tracking-widest text-muted">
          © {new Date().getFullYear()} — Ahmad Naufal.
        </p>
      </div>
    </footer>
  );
}
