/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [],
  },
  experimental: {
    optimizePackageImports: ['clsx']
  }
}

module.exports = nextConfig
