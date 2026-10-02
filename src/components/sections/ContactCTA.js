import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function ContactCTA({
  title = "Un poste de développeuse Full Stack à pourvoir ?",
  text = "Je suis à l'écoute de nouvelles opportunités. Parlons de votre équipe et de vos projets.",
}) {
  return (
    <section className="section pt-0">
      <div className="container">
        <Reveal className="cta">
          <div>
            <h2 className="cta__title">{title}</h2>
            <p className="cta__text">{text}</p>
          </div>
          <Link href="/contact" className="btn btn-light btn-lg flex-shrink-0">
            Me contacter
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
