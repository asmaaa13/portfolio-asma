import ProjectGrid from "@/components/projects/ProjectGrid";
import ContactCTA from "@/components/sections/ContactCTA";
import { getAllProjects, getAllTechnologies } from "@/lib/projects";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Projets",
  description:
    "Découvrez mes projets web : BEDB, Volpi Bâtiment, Ingenium, Lerda et Probat. Sites réalisés avec Next.js, React, Strapi et une attention particulière au SEO.",
  path: "/projets",
});

export default function ProjectsPage() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <p className="eyebrow animate-in">Réalisations</p>
          <h1 className="page-header__title animate-in" style={{ "--delay": "80ms" }}>
            Mes projets
          </h1>
          <p className="page-header__lead animate-in" style={{ "--delay": "160ms" }}>
            Des projets web réalisés pour des clients réels : intégration, développement, connexion à un CMS
            et optimisation SEO.
          </p>
        </div>
      </header>

      <section className="section pt-4">
        <div className="container">
          <ProjectGrid projects={getAllProjects()} technologies={getAllTechnologies()} />
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
