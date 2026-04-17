export type WebProject = {
  id: string;
  title: string;
  summary: string;
  /** Optional logo: path under `public/` (e.g. `/logos/acme.svg`) or an absolute `https` URL. */
  logo?: string;
  status?: string;
  stack?: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export const currentProjects: WebProject[] = [
  {
    id: "localscout",
    title: "LocalScout",
    logo: "/LocalScout-Logo.png",
    summary:
      "LocalScout is a platform that helps digital marketer's audit GBPs in minutes and provides actionable insights using AI and best practices. Other GBP tools show you HOW you rank, LocalScout shows you WHY you rank.",
    status: "Live",
    stack: ["Next.js", "TypeScript", "Agentic AI"],
    liveUrl: "https://localscout.io",
    repoUrl: undefined,
  },
  {
    id: "sitesleuth",
    title: "Site Sleuth (name WIP)",
    summary:
        "Site Sleuth is a tool that help provide constant monitoring and root cause analysis for digital marketing channels using 1st party data from the Google Suite, Meta, LinkedIn, and all of yor favorite digitl channels.",
    status: "Building",
    stack: ["NextJS", "Tailwind CSS", "Agentic AI"],
    liveUrl: undefined,
    repoUrl: undefined,
  },
];
