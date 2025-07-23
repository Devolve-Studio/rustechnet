/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://rustechnet.com', // your live domain here
    generateRobotsTxt: true, // also generates robots.txt
    sitemapSize: 7000,       // optional
    changefreq: 'weekly',
    priority: 0.7,
    exclude: ['/private-page'],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
        additionalSitemaps: [
            'https://rustechnet.com/sitemap.xml',
        ],
    },
};