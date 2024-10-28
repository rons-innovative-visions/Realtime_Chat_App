/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
          allowedOrigins: ['localhost', '*.vercel.app'],
        },
      },
};

export default nextConfig;
