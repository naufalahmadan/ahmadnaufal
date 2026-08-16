export default function TrustStripCard({
  client,
  industry,
  blurb,
}: {
  client: string;
  industry: string;
  blurb: string;
}) {
  return (
    <div className="rounded-2xl border border-line/70 bg-surface/60 p-6">
      <p className="font-display text-lg font-bold text-paper">{client}</p>
      <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted">
        {industry}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-paper/75">{blurb}</p>
    </div>
  );
}
