import CaseStudyCard from "@/components/CaseStudyCard";
import TrustStripCard from "@/components/TrustStripCard";
import StatTicker from "@/components/StatTicker";
import VerifiedStamp from "@/components/VerifiedStamp";
import { caseStudies, trustStripClients, portfolioStats } from "@/lib/case-studies";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-20 sm:pt-28">
          <VerifiedStamp label="PROOF, NOT JUST A GOOD MONTH" />
          <h1 className="mt-8 max-w-3xl font-display text-5xl font-bold leading-[1.05] text-paper sm:text-7xl">
            Every marketer can show you{" "}
            <span className="text-stamp">a good month.</span> I'll show you the ones I can{" "}
            <span className="text-gold">actually prove.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/80">
            I'm Ahmad Naufal, a performance marketer based in Indonesia. I've spent the last few years running Meta ads for brands across e-commerce, F&B, and services. Right now I manage 10+ client accounts with a combined Rp100 million in monthly ad spend.
          </p>
          <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4">
           {portfolioStats.map((s, index) =>
  s ? (
    <StatTicker
      key={s.label ?? index}
      value={s.value}
      suffix={s.suffix}
      label={s.label}
    />
  ) : null
)}
          </div>
        </div>
      </section>

      {/* CASE FILES */}
      <section id="case-files" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="eyebrow">Growth Stories</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-paper sm:text-4xl">
              A collection of campaigns, strategies, and measurable business results.
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm text-muted sm:block">
            Four industries, two markets. Each one broken down to the campaign
            level and cross-checked before a claim was made.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </section>

      {/* VERIFIED ROSTER */}
      <section id="verified" className="border-t border-line bg-surface/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="eyebrow">More Clients</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold text-paper sm:text-4xl">
            Same standard, less scrolling. 
          </h2>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold text-paper sm:text-4xl"> 
            Not every account needs a full write-up to be proof.
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {trustStripClients.map((c) => (
              <TrustStripCard key={c.client} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <p className="eyebrow"></p>
        <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-bold text-paper">
          GOT A BUSINESS THAT NEEDS ITS ADS HANDLED?
        </h2>
        <a
          href="https://wa.me/6281818462424"
          className="mt-8 inline-flex rounded-full bg-stamp px-8 py-4 font-mono text-sm uppercase tracking-widest text-ink transition hover:bg-gold"
        >
          LET'S COLLABORATE
        </a>
      </section>
    </>
  );
}
