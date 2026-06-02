/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    // Les images locales (public/images/lumia/*) ne nécessitent aucune config.
    // Ajouter ici les domaines distants si vous servez des images via un CDN.
    remotePatterns: [],
  },
};

export default nextConfig;
