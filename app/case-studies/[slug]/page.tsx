import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";
import DataTable from "@/components/DataTable";
import VerifiedStamp from "@/components/VerifiedStamp";

export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((s) => s.slug === params.slug);
  if (!study) return {};
  return {
    title: `${study.client} — Case File №${study.caseNo}`,
    description: study.headline,
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((s) => s.slug === params.slug);
  if (!study) return notFound();

  const accentText = study.accent === "stamp" ? "text-stamp" : "text-gold";

  return (
    <article>
      {/* HEADER */}
      <section className="border-b border-line px-6 pb-16 pt-14">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/#case-files"
            className="font-mono text-xs uppercase tracking-widest text-muted transition hover:text-paper"
          >
            ← All case files
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              Case File №{study.caseNo}
            </span>
            <span className={`font-mono text-xs uppercase tracking-widest ${accentText}`}>
              Tier — {study.tier}
            </span>
            <VerifiedStamp color={study.accent} />
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-paper sm:text-5xl">
            {study.client}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-paper/80">
            {study.headline}
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-widest text-muted">Industry</dt>
              <dd className="mt-1 text-sm text-paper/85">{study.industry}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-widest text-muted">Market</dt>
              <dd className="mt-1 text-sm text-paper/85">{study.market}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-widest text-muted">Platform</dt>
              <dd className="mt-1 text-sm text-paper/85">{study.platform}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-widest text-muted">Period</dt>
              <dd className="mt-1 text-sm text-paper/85">{study.period}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* SNAPSHOT */}
      <section className="border-b border-line bg-surface/40 px-6 py-14">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-4">
          {study.snapshot.map((s) => (
            <div key={s.label}>
              <p className={`font-display text-3xl font-bold ${accentText}`}>{s.value}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CHALLENGE + APPROACH */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-4xl gap-12 sm:grid-cols-2">
          <div>
            <p className="eyebrow">The challenge</p>
            <p className="mt-4 text-base leading-relaxed text-paper/85">{study.challenge}</p>
          </div>
          <div>
            <p className="eyebrow">The approach</p>
            <p className="mt-4 text-base leading-relaxed text-paper/85">{study.approach}</p>
          </div>
        </div>
      </section>

      {/* DATA SECTIONS */}
      <section className="border-t border-line px-6 py-16">
        <div className="mx-auto max-w-4xl space-y-16">
          {study.sections.map((sec) => (
            <div key={sec.heading}>
              <h2 className="font-display text-2xl font-bold text-paper">{sec.heading}</h2>
              {sec.body && (
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{sec.body}</p>
              )}
              {sec.table && (
                <div className="mt-6">
                  <DataTable columns={sec.table.columns} rows={sec.table.rows} />
                </div>
              )}
              {sec.note && (
                <p className={`mt-4 max-w-2xl text-sm leading-relaxed ${accentText}`}>{sec.note}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* KEY INSIGHT */}
      <section className="border-t border-line bg-surface/40 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow">Key insight</p>
          <p className="mt-4 max-w-2xl font-display text-2xl font-medium leading-snug text-paper">
            {study.insight}
          </p>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-2xl border border-line bg-surface/50 p-8">
          <p className="eyebrow">Methodology note</p>
          <p className="mt-4 text-sm leading-relaxed text-paper/75">{study.methodology}</p>
        </div>
      </section>

      {/* NEXT */}
      <section className="border-t border-line px-6 py-12 text-center">
        <Link
          href="/#case-files"
          className="font-mono text-xs uppercase tracking-widest text-paper/70 transition hover:text-paper"
        >
          ← Back to all case files
        </Link>
      </section>
    </article>
  );
}
