/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Permet de lancer un build de vérification sans écraser le cache du serveur de dev.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  images: {
    formats: ["image/avif", "image/webp"],
  },
  sassOptions: {
    // Bootstrap 5.3 utilise encore des fonctions Sass dépréciées :
    // on masque ces avertissements qui ne concernent pas notre code.
    quietDeps: true,
    silenceDeprecations: ["legacy-js-api", "import", "global-builtin", "color-functions", "mixed-decls"],
  },
};

export default nextConfig;
