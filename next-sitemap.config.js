/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://yangihayotclinic.uz',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://yangihayotclinic.uz/sitemap.xml',
    ],
  },
  exclude: ['/404'],
} 