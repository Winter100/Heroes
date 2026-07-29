import { MetadataRoute } from 'next';
import { getApi } from './api/getIApi';
import { API_PATH } from './_constant/keyword';
import { RaidListType } from './_type/raidType';
import { EnchantOptionType } from './_type/enchantType';
import { ItemRecipe } from './_type/itemType';

export const revalidate = false;

const baseUrl = 'https://www.heroes-dev.com';
export const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const results = await Promise.allSettled([
    getApi<RaidListType>(API_PATH.raid),
    getApi<EnchantOptionType>(API_PATH.enchant),
    getApi<ItemRecipe>(API_PATH.recipe),
  ]);

  const [raid, enchant, recipe] = results.map((r) =>
    r.status === 'fulfilled' ? r.value : []
  ) as [RaidListType[], EnchantOptionType[], ItemRecipe[]];

  const flatRaid = raid
    .filter((f) => f.raid_name !== '미분류')
    .flatMap((r) => [...r.monsters]);

  const recipeUrls: MetadataRoute.Sitemap = recipe.map((item) => ({
    url: `${baseUrl}/iteminfo/${encodeURIComponent(item.name)}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));
  const raidUrls: MetadataRoute.Sitemap = flatRaid.map((raid) => ({
    url: `${baseUrl}/raidinfo/${encodeURIComponent(raid.battle)}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const enchantUrls: MetadataRoute.Sitemap = enchant.map((enchant) => ({
    url: `${baseUrl}/market/enchant/${encodeURIComponent(enchant.name)}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 1,
    },
    ...recipeUrls,
    ...raidUrls,
    ...enchantUrls,
    {
      url: `${baseUrl}/iteminfo`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/raidinfo`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/market/enchant`,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 0.7,
    },

    {
      url: `${baseUrl}/preview`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/character`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/raid`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/gold`,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 0.3,
    },
  ];
};

export default sitemap;
