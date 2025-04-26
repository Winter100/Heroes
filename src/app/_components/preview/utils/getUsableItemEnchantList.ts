import { getUsableItemEnchantListProps } from '@/app/_type/enchantType';

export const getUsableItemEnchantList = ({
  enchantList,
  optionsList,
  slot,
}: getUsableItemEnchantListProps) => {
  const enchant =
    enchantList.find((item) => item.name.some((c) => c === slot))?.list ?? [];
  const enchant_options = optionsList.filter((item) =>
    enchant.some((c) => c.includes(item.name))
  );

  const sorted = enchant_options.sort((a, b) => {
    const rankA = isNaN(parseInt(a.rank))
      ? a.rank.charCodeAt(0)
      : parseInt(a.rank);
    const rankB = isNaN(parseInt(b.rank))
      ? b.rank.charCodeAt(0)
      : parseInt(b.rank);
    return rankA - rankB;
  });

  return sorted;
};
