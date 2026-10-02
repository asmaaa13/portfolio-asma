import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { site } from "@/data/site";
import { personJsonLd } from "@/lib/seo";
import "@/styles/globals.scss";

// next/font héberge les polices localement : pas de requête vers Google, pas de décalage au chargement.
const bodyFont = Inter({ subsets: ["latin"], display: "swap", variable: "--font-body" });
const headingFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  variable: "--font-heading",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.role}`,
    template: `%s | ${site.name} · ${site.role}`,
  },
  description: site.description,
  applicationName: `Portfolio ${site.name}`,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "développeuse Full Stack",
    "développeuse web junior",
    "React",
    "Next.js",
    "Strapi",
    "API REST",
    "JavaScript",
    "SEO",
    "portfolio",
    "reconversion",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: "/",
    siteName: `Portfolio ${site.name}`,
    title: `${site.name} · ${site.role}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.role}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#0f5c55",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${bodyFont.variable} ${headingFont.variable}`}>
      <body>
        {/* Si JavaScript est désactivé, le contenu animé reste visible. */}
        <noscript>
          <style>{".reveal{opacity:1!important;transform:none!important}"}</style>
        </noscript>
        <a href="#contenu" className="skip-link">
          Aller au contenu
        </a>
        <Navbar />
        <main id="contenu">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
        />
      </body>
    </html>
  );
}
