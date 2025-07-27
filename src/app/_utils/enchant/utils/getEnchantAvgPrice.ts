import { getEnchantAvgPricePropsP } from '@/app/_type/enchantType';

export const getEnchantAvgPrice = ({
  upgreadeType,
  enchantPriceList,
  enchantName,
}: getEnchantAvgPricePropsP) => {
  const isPrefix = upgreadeType === 'prefix';

  if (isPrefix) {
    const lastPrefixEnchant = enchantPriceList.findLast(
      (i) => i.item_option.prefix_enchant_preset_1 === enchantName
    );

    if (!lastPrefixEnchant)
      return {
        avgPrice: 0,
        minPrice: 0,
        maxPrice: 0,
      };

    return {
      avgPrice: Math.floor(lastPrefixEnchant.average_price / 100) * 100,
      minPrice: Math.floor(lastPrefixEnchant.min_price / 100) * 100,
      maxPrice: Math.floor(lastPrefixEnchant.max_price / 100) * 100,
    };
  } else {
    const lastSuffixEnchant = enchantPriceList.findLast(
      (i) => i.item_option.suffix_enchant_preset_1 === enchantName
    );

    if (!lastSuffixEnchant)
      return {
        avgPrice: 0,
        minPrice: 0,
        maxPrice: 0,
      };

    return {
      avgPrice: Math.floor(lastSuffixEnchant.average_price / 100) * 100,
      minPrice: Math.floor(lastSuffixEnchant.min_price / 100) * 100,
      maxPrice: Math.floor(lastSuffixEnchant.max_price / 100) * 100,
    };
  }
};
