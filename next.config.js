/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "platform-lookaside.fbsbx.com",
      "images.pexels.com",
      "www.w3.org",
      "mdbcdn.b-cdn.net",
    ],
  },
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
  },
};

module.exports = nextConfig;
