export type StatRow = Record<string, string>;

export type Section = {
  heading: string;
  body?: string;
  table?: { columns: string[]; rows: StatRow[] };
  note?: string;
};

export type CaseStudy = {
  caseNo: string; // real file/case number, e.g. "01"
  slug: string;
  tier: "Hero" | "Methodology" | "Range";
  client: string; // anonymized label
  industry: string;
  market: string;
  platform: string;
  period: string;
  snapshot: { label: string; value: string }[];
  challenge: string;
  approach: string;
  sections: Section[];
  insight: string;
  headline: string;
  methodology: string;
  accent: "stamp" | "gold";
};

export const caseStudies: CaseStudy[] = [
  {
    caseNo: "01",
    slug: "mills",
    tier: "Hero",
    client: "An Indonesian Sports Apparel & Gear Brand",
    industry: "E-commerce | Sports apparel & gear",
    market: "Indonesia",
    platform: "Meta (CPAS / catalog ads)",
    period: "February–July 2026 · 6 months",
    accent: "stamp",
    snapshot: [
      { label: "ROAS trend", value: "168× → 302×" },
      { label: "Cost / purchase", value: "↓ 40%" },
      { label: "Spend scaled", value: "+19%" },
      { label: "Purchases tracked", value: "23,042" },
    ],
    challenge:
      "This brand runs a catalog-driven purchase funnel on Meta, selling a mixed line of sports apparel and gear through marketplace-linked (CPAS) catalog ads. The goal: grow total spend and purchase volume without letting efficiency erode as the account scaled — a common failure mode when budgets grow faster than an audience can support.",
    approach:
      "Spend was split across two funnel stages: Prospecting (39%, anchored by a Running/Marathon Engaged Shoppers audience) and Remarketing (61%, built around an ATC 30D → Purchase 30D retargeting window). Budget was weighted toward the highest-converting layer while still feeding the funnel with fresh prospecting reach, with every month's efficiency defended before scaling further.",
    sections: [
      {
        heading: "Spend scaled while efficiency improved",
        body: "March included the Lebaran holiday closure (7 days, no ad activity) — a normal seasonal pause, not a performance dip.",
        table: {
          columns: ["Month", "Spend", "ROAS", "Cost / purchase"],
          rows: [
            { Month: "Feb", Spend: "Rp 6.25jt", ROAS: "168×", "Cost / purchase": "Rp 2,177" },
            { Month: "Mar (Lebaran)", Spend: "Rp 4.86jt", ROAS: "141×", "Cost / purchase": "Rp 2,360" },
            { Month: "Apr", Spend: "Rp 6.12jt", ROAS: "231×", "Cost / purchase": "Rp 1,668" },
            { Month: "May", Spend: "Rp 6.85jt", ROAS: "244×", "Cost / purchase": "Rp 1,573" },
            { Month: "Jun", Spend: "Rp 6.40jt", ROAS: "275×", "Cost / purchase": "Rp 1,453" },
            { Month: "Jul", Spend: "Rp 7.44jt", ROAS: "302×", "Cost / purchase": "Rp 1,310" },
          ],
        },
      },
      {
        heading: "Segmenting the funnel showed where the efficiency came from",
        table: {
          columns: ["Ad set", "Spend share", "ROAS", "Cost / purchase"],
          rows: [
            { "Ad set": "ATC 30D → Purchase 30D retargeting", "Spend share": "26.7%", ROAS: "289.6×", "Cost / purchase": "Rp 1,329" },
            { "Ad set": "Upsell ATC 45D (top 50 ATC)", "Spend share": "28.3%", ROAS: "227.4×", "Cost / purchase": "Rp 1,627" },
            { "Ad set": "Running/Marathon prospecting", "Spend share": "33.7%", ROAS: "199.4×", "Cost / purchase": "Rp 1,972" },
            { "Ad set": "Lookalike 3% Shop Buyers", "Spend share": "5.0%", ROAS: "219.0×", "Cost / purchase": "Rp 1,830" },
          ],
        },
      },
    ],
    insight:
      "Prospecting showed the higher click-through rate, as expected for a colder audience, while Remarketing converted better despite the lower CTR — CTR and ROAS moved in the directions the funnel logic predicts. That consistency is itself a signal of clean tracking, not a coincidence.",
    headline:
      "Spend scaled 19% while blended ROAS nearly doubled (168×→302×) and cost per purchase fell 40% — the retargeting layer that made it possible converted at 289.6×.",
    methodology:
      "This account's blended ROAS is CPAS/catalog-attributed — tied to marketplace purchase data, not first-party site tracking. This case study leads with the trend (168×→302×) as the primary claim, since it holds regardless of the absolute multiple. The raw 232.9× figure hasn't been independently cross-checked against marketplace order data directly, but the client has not flagged any discrepancy against their own marketplace dashboard across the 6-month period — corroborating context, alongside cross-validation across two separate exports of the same account and period that produced matching totals to the rupiah.",
  },
  {
    caseNo: "02",
    slug: "courtina",
    tier: "Methodology",
    client: "An Indonesian Flooring Brand",
    industry: "Home goods | Flooring",
    market: "Indonesia",
    platform: "Meta (Leads + Messaging, kept separate)",
    period: "February–July 2026 · 6 months",
    accent: "gold",
    snapshot: [
      { label: "Leads generated", value: "1,612" },
      { label: "Cost / lead", value: "Rp 15,312" },
      { label: "Messaging efficiency gain", value: "~6×" },
      { label: "Underperformer cut", value: "Confirmed" },
    ],
    challenge:
      "This flooring brand runs two product lines (bamboo and laminate) through Meta ads split across two objectives: Leads (for the sales team to follow up directly) and Messaging (for Messenger inquiries). The mandate: keep lead generation steady across both lines, and make sure Messaging spend was actually earning its keep — not just running because it always had.",
    approach:
      "Leads campaigns for Bamboo and Laminate ran as the steady, mature engine for the full period. On Messaging, a Remarketing campaign was tested alongside newer Prospecting campaigns, and each was tracked on its own cost per result — so an underperformer couldn't quietly drag down the blended average.",
    sections: [
      {
        heading: "Leads held a defensible range through two real closures",
        body: "Both flagged months included brief, explained closures: a 10-day pause in March for the Lebaran holiday, and a 2-day pause in July while the landing page was restored after a brief security incident. Cost per lead stayed in a Rp14,089–18,602 band across the whole period — reported as an honest range, not a cherry-picked best month.",
        table: {
          columns: ["Month", "Spend", "Cost / lead", "Leads"],
          rows: [
            { Month: "Feb", Spend: "Rp 4.58jt", "Cost / lead": "Rp 15,208", Leads: "301" },
            { Month: "Mar (Lebaran)", Spend: "Rp 3.97jt", "Cost / lead": "Rp 16,281", Leads: "244" },
            { Month: "Apr", Spend: "Rp 5.09jt", "Cost / lead": "Rp 14,089", Leads: "361" },
            { Month: "May", Spend: "Rp 3.94jt", "Cost / lead": "Rp 14,582", Leads: "270" },
            { Month: "Jun", Spend: "Rp 3.59jt", "Cost / lead": "Rp 18,602", Leads: "193" },
            { Month: "Jul (brief pause)", Spend: "Rp 3.52jt", "Cost / lead": "Rp 14,484", Leads: "243" },
          ],
        },
      },
      {
        heading: "A documented, deliberate cut",
        table: {
          columns: ["Campaign", "Window", "Spend", "Conversations", "Cost / conv."],
          rows: [
            { Campaign: "Remarketing (discontinued)", Window: "Feb 1 – May 19", Spend: "Rp 3.21jt", Conversations: "64", "Cost / conv.": "Rp 50,212" },
            { Campaign: "Prospecting — Bamboo", Window: "May 5 – Jul 31", Spend: "Rp 4.19jt", Conversations: "501", "Cost / conv.": "Rp 8,366" },
            { Campaign: "Prospecting — Laminate (new)", Window: "Jul 13 – 31", Spend: "Rp 0.74jt", Conversations: "102", "Cost / conv.": "Rp 7,245" },
          ],
        },
        note: "The Remarketing campaign was identified as underperforming and cut on May 19, with budget reallocated into Prospecting Messaging — roughly 6× more cost-efficient than the campaign it replaced.",
      },
    ],
    insight:
      "The 6× gap only shows up when Messaging spend is tracked per-campaign instead of blended into one average. A blended view for this period would have shown a perfectly reasonable-looking Rp 12,210 per conversation — masking both the cost of keeping a failing campaign running for three and a half months, and the size of the win from cutting it.",
    headline:
      "Identified an underperforming Remarketing campaign costing Rp50,212 per conversation, cut it, and replaced it with Prospecting running at Rp7,245–8,366 — a confirmed ~6× efficiency gain.",
    methodology:
      "Leads and Messaging spend were kept fully separate throughout — no cost-per-lead figure is blended with cost-per-message anywhere in this account's reporting. The newest campaign (Prospecting Messaging — Laminate) has only 19 days of data and its figure, while encouraging, is not yet treated as representative.",
  },
  {
    caseNo: "03",
    slug: "cutt-n-grill",
    tier: "Methodology",
    client: "A Metro Manila Steakhouse",
    industry: "Food & beverage | Fine dining",
    market: "Philippines",
    platform: "Meta (Contact + Messaging, tracked separately)",
    period: "February–July 2026 · 6 months",
    accent: "gold",
    snapshot: [
      { label: "Direct contacts", value: "5,646" },
      { label: "Cost / contact", value: "₱22.2 (↓42%)" },
      { label: "Messenger conversations", value: "4,170" },
      { label: "Cost / conversation", value: "₱13.1 (↓~3×)" },
    ],
    challenge:
      "This Metro Manila steakhouse needed to drive two distinct types of customer outreach — direct WhatsApp/Viber contact and Messenger conversations — without letting either objective's own cost-per-result get diluted by blending it with the other.",
    approach:
      "Contact and Messaging ran as fully separate campaigns from day one, and were analyzed that way too — every cost-per-result figure is computed from a single objective's own spend and own results, never mixed. Each campaign was allowed a partial ramp-up month before being judged on steady-state performance.",
    sections: [
      {
        heading: "Contact — cost per contact fell as the campaign matured",
        table: {
          columns: ["Month", "Spend", "Contacts", "Cost / contact"],
          rows: [
            { Month: "Feb (ramp)", Spend: "₱5,784", Contacts: "167", "Cost / contact": "₱34.6" },
            { Month: "Mar", Spend: "₱22,602", Contacts: "906", "Cost / contact": "₱24.9" },
            { Month: "Apr", Spend: "₱23,915", Contacts: "1,115", "Cost / contact": "₱21.4" },
            { Month: "May", Spend: "₱24,588", Contacts: "1,079", "Cost / contact": "₱22.8" },
            { Month: "Jun", Spend: "₱23,990", Contacts: "1,151", "Cost / contact": "₱20.8" },
            { Month: "Jul", Spend: "₱24,683", Contacts: "1,228", "Cost / contact": "₱20.1" },
          ],
        },
      },
      {
        heading: "Messaging — the stronger efficiency curve",
        table: {
          columns: ["Month", "Spend", "Conversations", "Cost / conv."],
          rows: [
            { Month: "Mar (ramp)", Spend: "₱5,824", Conversations: "176", "Cost / conv.": "₱33.1" },
            { Month: "Apr", Spend: "₱11,856", Conversations: "638", "Cost / conv.": "₱18.6" },
            { Month: "May", Spend: "₱12,386", Conversations: "1,155", "Cost / conv.": "₱10.7" },
            { Month: "Jun", Spend: "₱12,116", Conversations: "1,055", "Cost / conv.": "₱11.5" },
            { Month: "Jul", Spend: "₱12,272", Conversations: "1,146", "Cost / conv.": "₱10.7" },
          ],
        },
      },
    ],
    insight:
      "Keeping the two objectives strictly separate is what makes both trends credible. A blended cost-per-lead across both campaigns would have masked which channel was actually improving and by how much.",
    headline:
      "Cut cost per Messenger conversation by ~3× and cost per direct contact by ~42% over 5 months — with spend held steady, not cut back.",
    methodology:
      "A third objective, Schedule OpenTable — which directs the audience to book a table directly on the restaurant's website, distinct from the WhatsApp/Viber and Messenger touchpoints above — is also running on this account, but is excluded from every figure here. Its tracking was disrupted for most of the period and only re-established in late July; the single booking recorded so far isn't a defensible sample. It will be added to a future version of this case study once a full month of data exists under working tracking.",
  },
  {
    caseNo: "04",
    slug: "gloskin",
    tier: "Range",
    client: "An Indonesian Aesthetic Clinic",
    industry: "Services | Aesthetic / beauty clinic",
    market: "Indonesia",
    platform: "Meta (Messaging objective)",
    period: "March–July 2026 · 5 months, from account start",
    accent: "stamp",
    snapshot: [
      { label: "Conversations generated", value: "2,593" },
      { label: "Cost / conversation", value: "Rp 11,191" },
      { label: "Prospecting vs. Remarketing", value: "2.4× cheaper" },
      { label: "Pattern", value: "Reversed" },
    ],
    challenge:
      "This aesthetic clinic runs treatment-category campaigns (dermatology, hair, body) driving Messenger conversations for a services business, not e-commerce purchases. The starting assumption — common across most catalog accounts — was that warm-audience Remarketing would outperform cold-audience Prospecting. This account tested that assumption rather than taking it for granted.",
    approach:
      "Four category-specific Prospecting campaigns ran alongside a single broad Remarketing Messaging campaign. Each was tracked on its own cost per conversation rather than assumed to behave the way similar campaigns had on other accounts.",
    sections: [
      {
        heading: "The efficiency ranking flipped",
        table: {
          columns: ["Campaign type", "Spend share", "Cost / conversation", "CTR"],
          rows: [
            { "Campaign type": "Prospecting (4 category campaigns)", "Spend share": "76.6%", "Cost / conversation": "Rp 9,642", CTR: "0.69%" },
            { "Campaign type": "Remarketing (1 broad campaign)", "Spend share": "23.4%", "Cost / conversation": "Rp 23,592", CTR: "0.34%" },
          ],
        },
      },
      {
        heading: "A volatile trend, reported honestly",
        table: {
          columns: ["Month", "Spend", "Cost / conversation", "Conversations"],
          rows: [
            { Month: "Mar (partial)", Spend: "Rp 4.74jt", "Cost / conversation": "Rp 11,343", Conversations: "418" },
            { Month: "Apr", Spend: "Rp 6.83jt", "Cost / conversation": "Rp 14,532", Conversations: "470" },
            { Month: "May", Spend: "Rp 5.86jt", "Cost / conversation": "Rp 10,358", Conversations: "566" },
            { Month: "Jun", Spend: "Rp 5.65jt", "Cost / conversation": "Rp 8,548", Conversations: "661" },
            { Month: "Jul", Spend: "Rp 5.94jt", "Cost / conversation": "Rp 12,416", Conversations: "478" },
          ],
        },
      },
    ],
    insight:
      "The Prospecting/Remarketing efficiency ranking isn't universal — it depends on what the ad is asking someone to do. For a service where the product itself is the hook, strong top-of-funnel creative can out-convert broad remarketing. Assuming the same funnel logic holds across every vertical would have missed this.",
    headline:
      "Category-specific Prospecting campaigns converted Messenger leads ~2.4× cheaper than broad remarketing — a reversal of the usual e-commerce pattern.",
    methodology:
      "A legacy campaign, internally relabeled 'UNUSED,' is fully excluded from every number above — it was a discontinued campaign that received a platform restriction and was archived rather than deleted. Roughly 15% of the active period had no ad delivery, due to account balance top-ups occasionally lagging behind spend; monthly figures reflect this real pacing.",
  },
];

export const trustStripClients = [
  {
    client: "An Indonesian Beauty Brand",
    industry: "E-commerce · Meta CPAS/Shopee catalog · 6 months",
    blurb:
      "Ran a stable 12–16× ROAS catalog program for 6 straight months with zero missing tracking days, and confirmed on native campaign data that Remarketing converts ~3.6× more efficiently than Prospecting (20.7× vs. 5.8× ROAS).",
  },
  {
    client: "An Indonesian Personal Care Brand",
    industry: "E-commerce · Meta Prospecting + Remarketing catalog · 6 months",
    blurb:
      "Diagnosed a softening blended ROAS as a mix-shift effect, not a performance problem: the core Remarketing engine held a stable 10.5×–14.3× band for 6 straight months while a newly-scaled Prospecting layer diluted the average.",
  },
  {
    client: "An Indonesian Batik / Traditional Apparel Brand",
    industry: "E-commerce (fashion) · Meta, 13 campaigns · 6 months",
    blurb:
      "Managed a 13-campaign catalog account across two genuinely different objectives — Purchase and Add-to-Cart — without blending their numbers. Held Purchase-campaign ROAS in a 10.7×–16.6× band through a deliberate 51% spend pullback.",
  },
];

export const portfolioStats = [
  { value: 10, suffix: "+", label: "Brands Managed" },
  { value: 100, suffix: "M+", label: "Monthly Ads Spent" },,
  { value: 2, suffix: "", label: "Markets (ID, PH)" },
];
