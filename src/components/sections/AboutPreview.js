import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";

const facts = [
  { value: "5", label: "projets clients réalisés" },
  { value: "Full Stack", label: "formation de développeuse" },
  { value: "Ingénieure", label: "en génie biologique" },
];

export default function AboutPreview() {
  return (
    <section className="section" aria-labelledby="about-preview-title">
      <div className="container">
        <div className="row g-5 align-items-center">
          <Reveal className="col-12 col-lg-6">
            <SectionTitle
              eyebrow="Mon parcours"
              title={<span id="about-preview-title">De la biologie au code</span>}
            />
            <p>
              Ingénieure en génie biologique, j&apos;ai choisi de me reconvertir dans le développement web pour
              construire des produits concrets et utiles. Après une formation Full Stack Developer, je travaille
              sur des projets web réels pour des entreprises.
            </p>
            <p>
              Ma formation scientifique m&apos;a donné une méthode : comprendre le besoin, tester, mesurer,
              documenter. Je l&apos;applique au quotidien pour livrer un code propre, performant et bien
              référencé.
            </p>
            <Link href="/a-propos" className="link-arrow">
              Découvrir mon parcours
            </Link>
          </Reveal>

          <div className="col-12 col-lg-6">
            <ul className="facts list-unstyled">
              {facts.map((fact, index) => (
                <Reveal as="li" className="facts__item" key={fact.label} delay={index * 100}>
                  <span className="facts__value">{fact.value}</span>
                  <span className="facts__label">{fact.label}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
