/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'via.placeholder.com',
      'scontent.fmii2-2.fna.fbcdn.net',
      'i.scdn.co',
      'soup.onerpm.com',
      'i.ytimg.com',
    ],
  },
};

module.exports = nextConfig;
