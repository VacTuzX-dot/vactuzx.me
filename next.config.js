/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["framer-motion", "@tippyjs/react"],
  },
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
  images: {
    domains: [
      "/",
      "cdn.discordapp.com",
      "i.imgur.com",
      "raw.githubusercontent.com",
      "sperovita.gallerycdn.vsassets.io",
      "softwareer.net",
      "www.coreldraw.com",
      "ph-files.imgix.net",
      "cdns.iconmonstr.com",
      "avatars.githubusercontent.com",
    ],
  },
};

module.exports = nextConfig;
