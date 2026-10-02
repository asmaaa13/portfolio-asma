import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-4 align-items-start">
          <div className="col-12 col-md-5">
            <p className="site-footer__brand">{site.name}</p>
            <p className="site-footer__text">{site.availability}.</p>
          </div>

          <nav className="col-6 col-md-3" aria-label="Plan du site">
            <p className="site-footer__title">Navigation</p>
            <ul className="list-unstyled">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-6 col-md-4">
            <p className="site-footer__title">Me retrouver</p>
            <ul className="list-unstyled">
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              {site.socials.map((social) => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="site-footer__bottom">
          © {year} {site.name}. Conçu et développé avec Next.js, React et Bootstrap.
        </p>
      </div>
    </footer>
  );
}
