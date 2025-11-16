import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'ac.goit.global' }],
  },
};

export default nextConfig;

module.exports = {
  images: {
    domains: ['i.pravatar.cc', 'avatars.githubusercontent.com', 'res.cloudinary.com'],
  },
};