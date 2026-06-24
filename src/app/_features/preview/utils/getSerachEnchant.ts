import { EnchantGroup } from '@/app/_type/enchantType';

export const getSerachEnchant = (
  enchantList: EnchantGroup[],
  searchQuery: string
) => {
  const trimQuery = searchQuery.trim().toLowerCase();
  if (!trimQuery) return enchantList;

  return enchantList.map((enchant) => {
    const filteredEnchants = enchant.enchants.filter((item) => {
      const isNameMatch = item.name
        .toString()
        .toLowerCase()
        .includes(trimQuery);
      const isStatMatch = item.effects.some((stat) =>
        stat.stat_name.toString().toLowerCase().includes(trimQuery)
      );
      return isNameMatch || isStatMatch;
    });

    return {
      ...enchant,
      enchants: filteredEnchants,
    };
  });
};
