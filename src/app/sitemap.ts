import { MetadataRoute } from "next";

export const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: "https://www.heroes-dev.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: "https://www.heroes-dev.com/raid",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: "https://www.heroes-dev.com/preview",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
};

export default sitemap;
