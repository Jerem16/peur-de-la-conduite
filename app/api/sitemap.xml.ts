import { SitemapStream, streamToPromise } from "sitemap";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    const links = [
        { url: "/", changefreq: "daily", priority: 1.0 },
        { url: "/blog", changefreq: "weekly", priority: 0.8 },
        { url: "/contact", changefreq: "monthly", priority: 0.8 },
        { url: "/reservation", changefreq: "monthly", priority: 0.8 },
        { url: "/services", changefreq: "monthly", priority: 0.8 },
        { url: "/tarifs", changefreq: "monthly", priority: 0.8 },
    ];

    const sitemap = new SitemapStream({ hostname: siteUrl });

    res.setHeader("Content-Type", "application/xml");
    res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");

    // Add links to sitemap
    links.forEach((link) => sitemap.write(link));

    // Generate sitemap.xml and send the response
    streamToPromise(sitemap).then((xml) => {
        res.send(xml);
    });

    // End the stream
    sitemap.end();
}
