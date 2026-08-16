import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  const accentText = study.accent === "stamp" ? "text-stamp" : "text-gold";
  const accentBorder = study.accent === "stamp" ? "hover:border-stamp/60" : "hover:border-gold/60";

  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface p-7 transition ${accentBorder} hover:-translate-y-1`}
    >
      <div>
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-widest text-muted">
            Case Studies {study.caseNo}
          </span>
          <span className={`font-mono text-xs uppercase tracking-widest ${accentText}`}>
          </span>
        </div>
        <h3 className="mt-4 font-display text-2xl font-bold leading-snug text-paper">
          {study.client}
        </h3>
        <p className="mt-2 text-sm text-muted">{study.industry}</p>
        <p className="mt-6 text-sm leading-relaxed text-paper/80">
          {study.headline}
        </p>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-4 border-t border-line pt-5">
        {study.snapshot.slice(0, 2).map((s) => (
          <div key={s.label}>
            <p className={`font-display text-xl font-bold ${accentText}`}>{s.value}</p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
              {s.label}
            </p>
          </div>
        ))}
      </div>
      <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-paper/70 transition group-hover:text-paper">
        Read the audit →
      </span>
    </Link>
  );
}
