import { getAllProjects } from "@/lib/projects";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap() {
  const now = new Date();

  const pages = [
    { path: "/", priority: 1 },
    { path: "/projets", priority: 0.9 },
    { path: "/a-propos", priority: 0.8 },
    { path: "/contact", priority: 0.6 },
  ].map(({ path, priority }) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  }));

  const projects = getAllProjects().map((project) => ({
    url: absoluteUrl(`/projets/${project.slug}`),
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...pages, ...projects];
}
