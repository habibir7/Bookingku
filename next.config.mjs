/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'daisycon.io',
          },
        ],
      },
};

export default nextConfig;
