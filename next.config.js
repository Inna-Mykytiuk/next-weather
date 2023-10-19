/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  publicRuntimeConfig: {
    REACT_APP_API_KEY: process.env.REACT_APP_API_KEY,
  },
};

module.exports = nextConfig;
