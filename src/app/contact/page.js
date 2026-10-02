import ContactForm from "@/components/contact/ContactForm";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description: `Contactez ${site.name}, développeuse Full Stack junior disponible pour un poste en React, Next.js et Strapi.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <p className="eyebrow animate-in">Contact</p>
          <h1 className="page-header__title animate-in" style={{ "--delay": "80ms" }}>
            Travaillons ensemble
          </h1>
          <p className="page-header__lead animate-in" style={{ "--delay": "160ms" }}>
            Une offre d&apos;emploi, une question sur un projet ou simplement l&apos;envie d&apos;échanger ?
            Écrivez-moi, je réponds rapidement.
          </p>
        </div>
      </header>

      <section className="section pt-4">
        <div className="container">
          <div className="row g-5">
            <Reveal className="col-12 col-lg-4">
              <div className="contact-info">
                <h2 className="h5">Coordonnées</h2>
                <ul className="list-unstyled">
                  <li>
                    <span>Email</span>
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </li>
                  <li>
                    <span>Localisation</span>
                    {site.location}
                  </li>
                  {site.socials.map((social) => (
                    <li key={social.label}>
                      <span>{social.label}</span>
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        Voir mon profil
                      </a>
                    </li>
                  ))}
                </ul>
                <a href={site.cv} className="btn btn-outline-primary w-100" download>
                  Télécharger mon CV
                </a>
              </div>
            </Reveal>

            <Reveal className="col-12 col-lg-8" delay={100}>
              <div className="form-card">
                <h2 className="h5 mb-4">Envoyer un message</h2>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
