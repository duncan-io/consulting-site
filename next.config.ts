import type { NextConfig } from "next";

/**
 * GitHub Pages project sites use a subpath (/repo-name/). User/org sites use
 * the repo name <user>.github.io but are served at the domain root—no subpath.
 * Cloudflare Pages and most hosts use root (no subpath) unless you set base path.
 * Set NEXT_PUBLIC_BASE_PATH to override (e.g. "" for a project build).
 */
function githubPagesBasePath(): string {
  if (process.env.NEXT_PUBLIC_BASE_PATH !== undefined) {
    return process.env.NEXT_PUBLIC_BASE_PATH;
  }
  if (process.env.GITHUB_ACTIONS !== "true") {
    return "";
  }
  const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
  if (!repo) return "";
  if (repo.endsWith(".github.io")) return "";
  return `/${repo}`;
}

const basePath = githubPagesBasePath();

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
