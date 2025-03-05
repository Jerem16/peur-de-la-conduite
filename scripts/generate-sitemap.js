const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');

const pages = [
  '/',
  '/blog',
  '/contact',
  '/services',
  '/tarifs',
  '/search',
  '/reservation',
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://peur-de-la-conduite.lemaignent.com' });

  pages.forEach(page => {
    sitemap.write({ url: page, changefreq: 'weekly', priority: 0.8 });
  });

  sitemap.end();

  const sitemapXML = await streamToPromise(sitemap).then(data => data.toString());
  fs.writeFileSync('public/sitemap.xml', sitemapXML);
}

generateSitemap();
