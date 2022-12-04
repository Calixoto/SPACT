/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  images: {
    domains: ["i.ytimg.com", "yt3.ggpht.com"],
  },
  env: {
    YOUTUBE_API_KEY: "AIzaSyAog7LHSwVP-AiDA7PxMiCEkAsj5IfyduI",
  },
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["normal"] } },
    ],
  },
};

module.exports = nextConfig;
