export type Specialty = {
  id: string;
  title: string;
  summary: string;
  overview: string;
  helpWith: string[];
  outcomes: string[];
};

export const specialties: Specialty[] = [
  {
    id: "website-strategy",
    title: "Website Strategy",
    summary:
      "Treat your site as a go-to-market asset: the right story for the right audience, lead paths that make sense, and a narrative sales can use in live conversations.",
    overview:
      "Your website is where positioning meets pipeline. I help you clarify who you're for, what to ask visitors to do at each stage, and how pages and campaigns support demand, qualified leads, and the sales cycle—so marketing, lead gen, and sales stay pointed at the same outcomes.",
    helpWith: [
      "Positioning, segments, and messaging hierarchy on the pages that matter",
      "Lead capture strategy: offers, primary CTAs, and qualification vs. volume",
      "Journeys and page priorities that reflect how buyers decide—not a flat sitemap",
      "Workshops with marketing and sales to align on priorities, proof, and handoffs to CRM or nurture",
    ],
    outcomes: [
      "A clearer ICP-facing story that prospects and reps can repeat with confidence",
      "Coherent demand: campaigns, site, and follow-up all pulling toward the same goals",
      "Marketing and sales agreed on what the site must deliver for pipeline—not just launch dates",
    ],
  },
  {
    id: "cro",
    title: "CRO",
    summary:
      "Turn existing traffic into more leads and revenue with structured testing and UX fixes.",
    overview:
      "Conversion rate optimization is part research, part experimentation. I focus on high-impact hypotheses, clean test design, and learning loops that compound—not one-off button color guesses.",
    helpWith: [
      "Funnel and form analytics to find real drop-off points",
      "Hypothesis backlog ranked by evidence and implementation cost",
      "A/B and multivariate tests with statistically meaningful readouts",
      "Post-test recommendations and rollouts your team can maintain",
    ],
    outcomes: [
      "More revenue per visitor without buying more traffic",
      "A repeatable testing cadence your stakeholders understand",
      "Reduced friction in checkout, signup, and lead flows",
    ],
  },
  {
    id: "seo",
    title: "SEO",
    summary:
      "Earn durable visibility with technical foundations, content that matches intent, and authority signals.",
    overview:
      "SEO works when technical health, content quality, and off-site credibility move together. I help you build a practical program—not a bag of tactics—that fits your resources.",
    helpWith: [
      "Technical audits: crawlability, indexation, Core Web Vitals, schema",
      "Keyword and topic strategy aligned to buyer intent",
      "On-page templates, internal linking, and content briefs",
      "Measurement: Search Console, rank tracking, and attribution context",
    ],
    outcomes: [
      "Steady growth in qualified organic sessions",
      "Fewer surprises from algorithm updates and site changes",
      "Content and dev teams working from the same prioritized backlog",
    ],
  },
  {
    id: "reputation-management",
    title: "Reputation Management",
    summary:
      "Shape how your brand shows up in reviews, search results, and social proof at decision time.",
    overview:
      "Buyers trust what others say. I help you monitor perception, respond with judgment, and earn better signals—without sounding scripted or defensive.",
    helpWith: [
      "Review platform strategy, response playbooks, and escalation paths",
      "SERP and social listening for brand and executive names",
      "Crisis communication guardrails for marketing channels",
      "Programs that encourage authentic customer feedback",
    ],
    outcomes: [
      "More consistent, trustworthy presence where prospects look you up",
      "Faster, calmer responses when sentiment shifts",
      "Stronger proof points on landing pages and sales collateral",
    ],
  },
  {
    id: "marketing-systems",
    title: "Marketing Systems & Automation",
    summary:
      "Operating rhythms plus automation—code, processes, and agentic AI—so strategy turns into consistent execution without drowning in repetitive work.",
    overview:
      "Strategy only matters when it shows up in how people work day to day. I help you design marketing operating rhythms with clear ownership and workflows, then automate what is repetitive: integrations and scripts where code fits, documented processes where people stay in the loop, and agentic AI for bounded tasks with guardrails. Campaigns, content, and measurement run as one system—not a patchwork of one-offs.",
    helpWith: [
      "Workflow and handoff design across marketing, creative, and sales",
      "Playbooks, templates, and QA so quality stays high as volume grows",
      "Code-friendly automation and integrations for repetitive syncs, routing, and publishing your team can maintain",
      "Agentic AI for well-bounded tasks, with guardrails and measurement hooks tied to the wider system",
    ],
    outcomes: [
      "Less firefighting and fewer dropped balls between teams",
      "Less toil on repetitive work: faster cycles, fewer errors, and automation you can trust",
      "A repeatable engine leadership can scale and inspect with confidence",
    ],
  },
  {
    id: "analytics",
    title: "Analytics",
    summary:
      "Measurement you can trust: tagging, events, and attribution that connect every marketing channel to outcomes.",
    overview:
      "Default platform reports rarely tell the full story. I help teams build analytics systems that capture clean first-party data, model how channels interact, and support decisions leadership actually uses—not vanity metrics.",
    helpWith: [
      "Event schemas, tag management, and data-layer patterns your team can maintain",
      "UTM discipline, campaign taxonomy, and cross-channel journey mapping",
      "Attribution approaches suited to your funnel—from paid and organic to email and social",
      "Dashboards and definitions that align marketing, product, and finance on what “good” means",
    ],
    outcomes: [
      "Clearer picture of which campaigns drive pipeline and revenue—not just clicks",
      "Fewer blind spots when privacy rules or ad platforms change how data flows",
      "A measurement stack that survives team changes and vendor churn",
    ],
  },
];
