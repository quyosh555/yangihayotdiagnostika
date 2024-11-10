/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['yangihayot.uz'],
  },
  i18n: {
    locales: ['ru', 'uz', 'en'],
    defaultLocale: 'ru',
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
        ],
      },
    ]
  },
  webpack: (config) => {
    config.cache = false
    return config
  },
}

module.exports = nextConfig 