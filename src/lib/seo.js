import { site } from "@/data/site";

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}

// Construit les métadonnées d'une page (titre, description, URL canonique, Open Graph).
export function buildMetadata({ title, description = site.description, path = "/" }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: title ? `${title} | ${site.name}` : `${site.name} · ${site.role}`,
      description,
      url: path,
      // Un openGraph défini dans une page remplace celui du layout : on remet l'image.
      images: ["/opengraph-image"],
    },
  };
}

// Données structurées schema.org : aident Google à comprendre qui tu es.
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    description: site.shortBio,
    url: site.url,
    email: `mailto:${site.email}`,
    address: { "@type": "PostalAddress", addressCountry: "FR", addressLocality: site.location },
    knowsAbout: ["React", "Next.js", "JavaScript", "Strapi", "API REST", "SEO", "Bootstrap"],
    sameAs: site.socials.map((social) => social.href),
  };
}

export function projectJsonLd(project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: absoluteUrl(`/projets/${project.slug}`),
    author: { "@type": "Person", name: site.name },
    keywords: project.stack.join(", "),
  };
}
