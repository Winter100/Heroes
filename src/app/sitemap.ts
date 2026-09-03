import { MetadataRoute } from 'next';
import { getApi } from './api/getIApi';
import { API_PATH } from './_constant/keyword';
import { EnchantOptionType } from './_type/enchantType';
import { ItemRecipes } from './_type/itemType';

export const baseUrl = 'https://www.heroes-dev.com';

export const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const results = await Promise.allSettled([
    getApi<string[]>(API_PATH.raidSSG, { next: { tags: [API_PATH.raidSSG] } }),
    getApi<{ id: number; name: string }>(API_PATH.enchantSSG, {
      next: { tags: [API_PATH.enchantSSG] },
    }),
    getApi<ItemRecipes>(API_PATH.recipes, {
      next: { tags: [API_PATH.recipes] },
    }),
  ]);

  const [raid, enchant, recipe] = results.map((r) =>
    r.status === 'fulfilled' ? r.value : []
  ) as [string[], EnchantOptionType[], ItemRecipes[]];

  const recipeUrls: MetadataRoute.Sitemap = recipe.map((item) => ({
    url: `${baseUrl}/iteminfo/${encodeURIComponent(item.name)}`,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));
  const raidUrls: MetadataRoute.Sitemap = raid.map((raid) => ({
    url: `${baseUrl}/raidinfo/${encodeURIComponent(raid)}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const enchantUrls: MetadataRoute.Sitemap = enchant.map((enchant) => ({
    url: `${baseUrl}/market/enchant/${encodeURIComponent(enchant.name)}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    {
      url: `${baseUrl}`,

      changeFrequency: 'hourly',
      priority: 1,
    },
    ...recipeUrls,
    ...raidUrls,
    ...enchantUrls,
    {
      url: `${baseUrl}/iteminfo`,

      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/raidinfo`,

      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/market/enchant`,

      changeFrequency: 'hourly',
      priority: 0.7,
    },

    {
      url: `${baseUrl}/preview`,

      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/character`,

      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/raid`,

      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/gold`,

      changeFrequency: 'hourly',
      priority: 0.3,
    },
  ];
};

export default sitemap;
