import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    MONGO_URI: process.env.MONGO_URI,  // Ensure this is correctly set in your environment
  },
  experimental: {
    // Removed 'appDir' as it is not a valid property of 'ExperimentalConfig'
    serverActions: {
      bodySizeLimit: '1mb',
      allowedOrigins: ['*'],
    },
  },
};

export default nextConfig;
