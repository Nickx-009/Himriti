/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove ESLint ignore to catch build errors
  images: {
    domains: ['images.pexels.com'], // Add any external image domains
    formats: ['image/webp', 'image/avif'],
  },
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;
