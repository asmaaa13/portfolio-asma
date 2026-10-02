import Link from "next/link";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__shape hero__shape--one" aria-hidden="true" />
      <div className="hero__shape hero__shape--two" aria-hidden="true" />

      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-7">
            <p className="hero__status animate-in">
              <span className="hero__dot" aria-hidden="true" />
              {site.availability}
            </p>
            <h1 id="hero-title" className="hero__title animate-in" style={{ "--delay": "80ms" }}>
              Bonjour, je suis {site.name}.
              <span className="hero__role">{site.role}.</span>
            </h1>
            <p className="hero__lead animate-in" style={{ "--delay": "160ms" }}>
              {site.shortBio}
            </p>
            <div className="hero__actions animate-in" style={{ "--delay": "240ms" }}>
              <Link href="/projets" className="btn btn-primary btn-lg">
                Voir mes projets
              </Link>
              <Link href="/contact" className="btn btn-outline-primary btn-lg">
                Me contacter
              </Link>
            </div>
          </div>

          <div className="col-12 col-lg-5">
            <div className="code-card animate-in" style={{ "--delay": "320ms" }} aria-hidden="true">
              <div className="code-card__bar">
                <i />
                <i />
                <i />
                <span>profil.js</span>
              </div>
              <pre className="code-card__body">
                <code>
                  <span className="tok-k">const</span> <span className="tok-v">developpeuse</span> = {"{"}
                  {"\n"}  <span className="tok-p">formation</span>: <span className="tok-s">&quot;Ingénieure génie bio&quot;</span>,
                  {"\n"}  <span className="tok-p">poste</span>: <span className="tok-s">&quot;Full Stack&quot;</span>,
                  {"\n"}  <span className="tok-p">front</span>: [<span className="tok-s">&quot;React&quot;</span>, <span className="tok-s">&quot;Next.js&quot;</span>],
                  {"\n"}  <span className="tok-p">back</span>: [<span className="tok-s">&quot;Strapi&quot;</span>, <span className="tok-s">&quot;REST&quot;</span>],
                  {"\n"}  <span className="tok-p">outils</span>: [<span className="tok-s">&quot;Git&quot;</span>, <span className="tok-s">&quot;GitLab&quot;</span>],
                  {"\n"}  <span className="tok-p">atout</span>: <span className="tok-s">&quot;rigueur&quot;</span>,
                  {"\n"}{"}"};
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
