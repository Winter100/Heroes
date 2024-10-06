import { MetadataRoute } from "next";

export const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: "https://heroes-dev.com/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://heroes-dev.com/preview",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
};

export default sitemap;
