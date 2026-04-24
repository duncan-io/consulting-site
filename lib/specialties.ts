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
      "Align your site with business goals, audiences, and journeys so every page earns its place.",
    overview:
      "Your website should be a deliberate system—not a pile of pages. I help you define what to build, what to cut, and how experiences should flow from first touch to conversion.",
    helpWith: [
      "Information architecture and navigation that match how people decide",
      "Messaging hierarchy and page templates tied to funnel stages",
      "Requirements for speed, accessibility, and measurable outcomes",
      "Stakeholder workshops and prioritization so roadmaps stay realistic",
    ],
    outcomes: [
      "Clear rationale for what ships next (and what waits)",
      "Fewer costly redesign loops and more confident launches",
      "A site structure that marketing and product can iterate on together",
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
