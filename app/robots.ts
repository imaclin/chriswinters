import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/", "/dist/"],
    },
    sitemap: "https://cswinterslaw.com/sitemap.xml",
    host: "https://cswinterslaw.com",
  };
}
