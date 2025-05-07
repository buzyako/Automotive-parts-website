/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'v0.blob.com',
      },
      {
        protocol: 'https',
        hostname: '**.placeholder.com',
      },
    ],
    unoptimized: true,
  },
  experimental: {
    // This helps with some build issues
    esmExternals: 'loose',
  },
};

export default nextConfig;
