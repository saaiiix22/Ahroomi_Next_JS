/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'setmycart.blob.core.windows.net',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
