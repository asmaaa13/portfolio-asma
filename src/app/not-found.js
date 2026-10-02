import Link from "next/link";

export const metadata = {
  title: "Page introuvable",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container text-center">
        <p className="not-found__code">404</p>
        <h1 className="h2">Cette page n&apos;existe pas</h1>
        <p className="text-secondary mb-4">Le lien est peut-être erroné, ou la page a été déplacée.</p>
        <div className="d-flex justify-content-center flex-wrap gap-2">
          <Link href="/" className="btn btn-primary">
            Retour à l&apos;accueil
          </Link>
          <Link href="/projets" className="btn btn-outline-primary">
            Voir mes projets
          </Link>
        </div>
      </div>
    </section>
  );
}
