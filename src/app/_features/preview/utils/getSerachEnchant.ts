import { EnchantGroup } from '../types';

export const getSerachEnchant = (
  enchantList: EnchantGroup[],
  searchQuery: string
) => {
  const trimQuery = searchQuery.trim();
  if (!trimQuery) return enchantList;

  return enchantList
    .map((enchant) => {
      const filteredItems = enchant.items.filter((item) => {
        const isNameMatch = item.name.includes(trimQuery);
        const isStatMatch = item.stat_value.some((stat) =>
          stat.stat_name.includes(trimQuery)
        );
        return isNameMatch || isStatMatch;
      });

      if (filteredItems.length > 0) {
        return {
          ...enchant,
          items: filteredItems,
        };
      }
      return null;
    })
    .filter(Boolean);
};
