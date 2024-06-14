/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'daisycon.io',
          },
        ],
      },
};

export default nextConfig;
