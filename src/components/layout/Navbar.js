"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Ferme le menu mobile à chaque changement de page.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Ajoute une ombre à l'en-tête dès que l'on fait défiler la page.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Touche Échap pour fermer le menu.
  useEffect(() => {
    if (!open) return;
    const onKey = (event) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      <nav className="navbar navbar-expand-lg container" aria-label="Navigation principale">
        <Link href="/" className="navbar-brand brand" aria-label={`${site.name}, retour à l'accueil`}>
          <span className="brand__mark" aria-hidden="true">
            {site.name.charAt(0)}
          </span>
          <span className="brand__text">
            {site.name}
            <small>{site.role}</small>
          </span>
        </Link>

        <button
          type="button"
          className="navbar-toggler burger"
          aria-controls="main-nav"
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <div id="main-nav" className={`collapse navbar-collapse${open ? " show" : ""}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {site.nav.map((item) => (
              <li className="nav-item" key={item.href}>
                <Link
                  href={item.href}
                  className={`nav-link${isActive(item.href) ? " active" : ""}`}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <a href={site.cv} className="btn btn-primary btn-sm px-3" download>
                Télécharger mon CV
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
