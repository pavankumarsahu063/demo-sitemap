import { writeFile } from 'fs/promises';
import path from 'path';

const baseUrl = "https://demo-sitemap-app.vercel.app";

const endPoints = [
  "/",
  "/about",
  "/service"
];

const date = new Date();
const lastUpdate = date.toISOString().split("T")[0];


const urls = endPoints.map((currentPage) => {
  return `
    <url>
      <loc>${baseUrl}${currentPage}</loc>
      <lastmod>${lastUpdate}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>`;
}).join("");


const siteMap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`;

await writeFile("public/sitemap.xml", siteMap);
console.log("successful");
