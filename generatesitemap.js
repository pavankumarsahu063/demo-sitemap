import {writeFile} from 'fs/promises';
import path from 'path';


const baseUrl="https://demo-sitemap-app.vercel.app/";

const endPoints=[

    "/",
    "/about",
    "/service"
];

const date =new Date();
const lastUpdate=date.toISOString().split("T")[0];


const siteMap=`
    <?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">



    endPoints.map((currentPage)=>

        <url>
            <loc>${baseUrl}${path}</loc>
            <lastmod>${lastUpdate}</lastmod>
            <changefreq>daily</changefreq>
            <priority>03</priority>
        </url>
)
.join("")}

</urlset>`;

await writeFile("publi/sitemap.xml",siteMap);
console.log("sucessfull");