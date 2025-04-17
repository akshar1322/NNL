import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    MONGO_URI: process.env.MONGO_URI,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '1mb',
      allowedOrigins: ['*'],
    },
  },
};

export default nextConfig;
