import { calculateAveragePrice } from "@/app/_components/preview/utils/calculateAverage";
import { getEnchantAvgPricePropsP } from "@/app/_type/enchantType";

export const getEnchantAvgPrice = ({
  upgreadeType,
  enchantPriceList,
  enchantName,
}: getEnchantAvgPricePropsP) => {
  const isPrefix = upgreadeType === "prefix";

  if (isPrefix) {
    const lastPrefixEnchant = enchantPriceList.findLast(
      (i) => i.item_option.prefix_enchant_preset_1 === enchantName,
    );

    if (!lastPrefixEnchant) return null;

    return (
      Math.floor(calculateAveragePrice([lastPrefixEnchant]).average / 100) * 100
    );
  } else {
    const lastSuffixEnchant = enchantPriceList.findLast(
      (i) => i.item_option.suffix_enchant_preset_1 === enchantName,
    );

    if (!lastSuffixEnchant) return null;

    return (
      Math.floor(calculateAveragePrice([lastSuffixEnchant]).average / 100) * 100
    );
  }
};
