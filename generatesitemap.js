import { writeFile } from 'fs/promises';
import path from 'path';

const baseUrl = "https://demo-sitemap-app.vercel.app";  
const paths = [
  "/",
  "/about",
  "/contact",
  "/service",
  "/login",
];

const date = new Date();
const latestDate=date.toISOString().split("T")[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    (path) => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${latestDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join("")}
</urlset>`;

// eslint-disable-next-line no-undef
const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');


await writeFile(sitemapPath, sitemap);


