/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://insightinvestigations.co.nz',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/'
      }
    ]
  },
  exclude: [
    '/api/*',
    '/error'
  ],
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/services'),
    await config.transform(config, '/about'),
    await config.transform(config, '/contact'),
    await config.transform(config, '/faq'),
    await config.transform(config, '/blog'),
    await config.transform(config, '/blog/watching-chloe'),
    await config.transform(config, '/blog/reconnecting-the-missing-pieces'),
    await config.transform(config, '/blog/bug-sweeping-protecting-your-privacy'),
    await config.transform(config, '/blog/cheating-partner-investigations'),
  ]
}