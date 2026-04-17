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
    id: "ppc-strategy",
    title: "PPC Strategy",
    summary:
      "Spend smarter on paid search and social with clear account structure, creative tests, and honest attribution.",
    overview:
      "Paid media fails when goals, audiences, and creative are misaligned—or when accounts grow into unmaintainable complexity. I help you simplify, test, and scale what actually works.",
    helpWith: [
      "Account and campaign structure matched to products and regions",
      "Audience, keyword, and placement strategy with guardrails",
      "Creative and landing-page testing plans tied to CPA/ROAS targets",
      "Budget pacing, bid strategies, and reporting that leadership can trust",
    ],
    outcomes: [
      "Lower wasted spend and clearer picture of incremental performance",
      "Faster iteration on ads and landing experiences",
      "Documentation so transitions and audits do not reset progress",
    ],
  },
  {
    id: "email-strategy",
    title: "Email Strategy",
    summary:
      "Lifecycle email that respects the inbox: segmentation, automation, and copy that drives action.",
    overview:
      "Email is still one of the highest-ROI channels when strategy leads. I help you design programs that feel personal at scale and stay compliant with evolving expectations.",
    helpWith: [
      "Lifecycle mapping: onboarding, nurture, retention, win-back",
      "List health, deliverability basics, and preference centers",
      "Automation architecture and trigger logic that marketing can own",
      "Testing calendars for subject lines, content modules, and CTAs",
    ],
    outcomes: [
      "Higher engagement and revenue per subscriber",
      "Fewer batch blasts and more purposeful journeys",
      "Clear metrics beyond open rate in a privacy-aware world",
    ],
  },
];
