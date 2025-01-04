import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/resume',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
