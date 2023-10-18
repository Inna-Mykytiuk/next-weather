/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'lh3.googleusercontent.com',
      },
    ],
    domains: ['res.cloudinary.com', 'images.unsplash.com'],
  },
};

module.exports = nextConfig;
