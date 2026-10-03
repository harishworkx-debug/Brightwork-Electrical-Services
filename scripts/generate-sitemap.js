import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read services.ts and locations.ts using regex or dynamic module import
const servicesPath = path.join(__dirname, '../src/data/services.ts');
const locationsPath = path.join(__dirname, '../src/data/locations.ts');
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');

const servicesContent = fs.readFileSync(servicesPath, 'utf-8');
const locationsContent = fs.readFileSync(locationsPath, 'utf-8');

// Match slugs
const serviceSlugs = [...servicesContent.matchAll(/^\s*slug:\s*'([^']+)'/gm)].map(m => m[1]);
const locationSlugs = [...locationsContent.matchAll(/^\s*slug:\s*'([^']+)'/gm)].map(m => m[1]);

const domain = 'https://www.brightworkelectrical.com';
const today = new Date().toISOString().split('T')[0];

const staticPages = [
  { url: `${domain}/`, priority: '1.0', changefreq: 'weekly' },
  { url: `${domain}/reviews`, priority: '0.9', changefreq: 'weekly' },
  { url: `${domain}/about`, priority: '0.8', changefreq: 'monthly' },
  { url: `${domain}/contact`, priority: '0.8', changefreq: 'monthly' },
];

const servicePages = serviceSlugs.map(slug => ({
  url: `${domain}/${slug}`,
  priority: '0.9',
  changefreq: 'monthly',
}));

const locationPages = locationSlugs.map(slug => ({
  url: `${domain}/${slug}`,
  priority: '0.8',
  changefreq: 'monthly',
}));

const allPages = [...staticPages, ...servicePages, ...locationPages];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

fs.writeFileSync(sitemapPath, xml, 'utf-8');
console.log(`Successfully generated sitemap.xml with ${allPages.length} URLs!`);
