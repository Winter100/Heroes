import { getEnchantAvgPricePropsP } from "@/app/_type/enchantType";

export const getEnchantLastDate = ({
  upgreadeType,
  enchantPriceList,
  enchantName,
}: getEnchantAvgPricePropsP) => {
  const isPrefix = upgreadeType === "prefix";

  if (isPrefix) {
    const lastPrefixEnchant = enchantPriceList?.findLast(
      (i) => i.item_option.prefix_enchant_preset_1 === enchantName,
    );

    if (!lastPrefixEnchant) return "";

    return lastPrefixEnchant.date_update || "";
  } else {
    const lastSuffixEnchant = enchantPriceList?.findLast(
      (i) => i.item_option.suffix_enchant_preset_1 === enchantName,
    );

    if (!lastSuffixEnchant) return "";

    return lastSuffixEnchant.date_update || "";
  }
};
