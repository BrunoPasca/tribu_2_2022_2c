/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/file/d/1sAOVcrF3d__kIZgHhNkgzFeepZvOyotC/view',
      },
    ],
    domains: ['drive.google.com']
  },
}
