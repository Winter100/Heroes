interface EnchantList {
  name: string[];
  list: string[];
}

interface Options {
  rank: string;
  stat_name: string;
  stat_value: {
    stat_name: string;
    stat_value: string;
  }[];
}

export const sortEnchant = (
  enchantList: EnchantList[],
  optionsList: Options[],
  slot: string,
) => {
  const enchant =
    enchantList.find((item) => item.name.some((c) => c === slot))?.list ?? [];
  const enchant_options = optionsList.filter((item) =>
    enchant.some((c) => c.includes(item.stat_name)),
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
