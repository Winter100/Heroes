import { calculateAveragePrice } from "@/app/_components/preview/utils/calculateAverage";
import { EnchantPrice } from "@/app/_type/enchantPriceType";

export const getEnchantAvgPrice = (
  previewName: string,
  enchantList: EnchantPrice[],
  enchantName: string,
) => {
  const isPrefix = previewName === "prefix";

  if (isPrefix) {
    const prefixEnchant = enchantList.filter(
      (i) => i.item_option.prefix_enchant_preset_1 === enchantName,
    );

    return calculateAveragePrice(prefixEnchant).average;
  } else {
    const suffixEnchant = enchantList.filter(
      (i) => i.item_option.suffix_enchant_preset_1 === enchantName,
    );

    return calculateAveragePrice(suffixEnchant).average;
  }
};
