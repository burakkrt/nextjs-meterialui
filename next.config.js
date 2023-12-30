/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')();

const nextConfig = withNextIntl({
  // Other Next.js configuration ...
  // images: {
  //   unoptimized: true,
  // },
  // output: 'export',
  trailingSlash: true,
});

module.exports = nextConfig;
