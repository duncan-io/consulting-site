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
    id: "project-two",
    title: "Project two",
    summary:
      "Short description of the second web project. Add links below when you have a live URL or public repository.",
    status: "Exploring",
    stack: ["React", "Tailwind CSS"],
    liveUrl: undefined,
    repoUrl: undefined,
  },
];
