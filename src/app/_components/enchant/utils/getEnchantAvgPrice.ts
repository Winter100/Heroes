import { calculateAveragePrice } from "@/app/_components/preview/utils/calculateAverage";
import { getEnchantAvgPricePropsP } from "@/app/_type/enchantType";

export const getEnchantAvgPrice = ({
  upgreadeType,
  enchantPriceList,
  enchantName,
}: getEnchantAvgPricePropsP) => {
  const isPrefix = upgreadeType === "prefix";

  if (isPrefix) {
    const prefixEnchant = enchantPriceList.filter(
      (i) => i.item_option.prefix_enchant_preset_1 === enchantName,
    );

    return calculateAveragePrice(prefixEnchant).average;
  } else {
    const suffixEnchant = enchantPriceList.filter(
      (i) => i.item_option.suffix_enchant_preset_1 === enchantName,
    );

    return calculateAveragePrice(suffixEnchant).average;
  }
};
