/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/About',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
