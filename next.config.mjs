/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ignoreBuildErrors: true, // Remove this line to surface TS errors during build
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig