import ContactCTA from "@/components/sections/ContactCTA";
import Skills from "@/components/sections/Skills";
import Timeline from "@/components/sections/Timeline";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { site } from "@/data/site";
import { strengths } from "@/data/timeline";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "À propos",
  description: `Ingénieure en génie biologique reconvertie dans le développement web, ${site.name} est développeuse Full Stack junior : React, Next.js, Strapi, API REST et SEO.`,
  path: "/a-propos",
});

export default function AboutPage() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <p className="eyebrow animate-in">À propos</p>
          <h1 className="page-header__title animate-in" style={{ "--delay": "80ms" }}>
            Une ingénieure devenue développeuse
          </h1>
          <p className="page-header__lead animate-in" style={{ "--delay": "160ms" }}>
            J&apos;ai troqué le laboratoire contre l&apos;éditeur de code, sans perdre la méthode scientifique.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-lg-5">
              <Reveal className="about-intro">
                <h2 className="h3">Mon histoire</h2>
                <p>
                  Diplômée ingénieure en génie biologique, j&apos;ai découvert le développement web en cherchant
                  à automatiser et à partager des données. J&apos;y ai trouvé ce que j&apos;aimais le plus dans la
                  science : résoudre des problèmes de façon méthodique, avec des résultats concrets.
                </p>
                <p>
                  J&apos;ai donc suivi une formation Full Stack Developer, puis mis mes compétences en pratique
                  sur des projets clients réels avec React, Next.js et Strapi, au sein d&apos;une équipe
                  utilisant GitLab au quotidien.
                </p>
                <p>
                  Aujourd&apos;hui, je recherche un poste de <strong>développeuse Full Stack</strong> pour
                  continuer à progresser dans une équipe exigeante et bienveillante.
                </p>
                <a href={site.cv} className="btn btn-primary mt-2" download>
                  Télécharger mon CV
                </a>
              </Reveal>
            </div>

            <div className="col-12 col-lg-7">
              <h2 className="h3 mb-4">Mon parcours</h2>
              <Timeline />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="strengths-title">
        <div className="container">
          <SectionTitle
            eyebrow="Ce que j'apporte"
            title={<span id="strengths-title">Les atouts d&apos;un parcours scientifique</span>}
            center
          />
          <div className="row g-4">
            {strengths.map((strength, index) => (
              <Reveal className="col-12 col-sm-6 col-lg-3" key={strength.title} delay={index * 90}>
                <div className="strength-card h-100">
                  <h3 className="strength-card__title">{strength.title}</h3>
                  <p className="mb-0">{strength.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Skills />
      <div className="pt-5" />
      <ContactCTA />
    </>
  );
}
