/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Disable Turbopack to use traditional webpack build
  experimental: {
    turbo: false,
  },
}

export default nextConfig
