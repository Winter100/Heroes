import { MetadataRoute } from "next";

export const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: "https://www.heroes-dev.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: "https://www.heroes-dev.com/raid",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: "https://www.heroes-dev.com/preview",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://www.heroes-dev.com/character",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://www.heroes-dev.com/gold",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.6,
    },
    {
      url: "https://www.heroes-dev.com/market/enchant",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: "https://www.heroes-dev.com/iteminfo",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];
};

export default sitemap;
