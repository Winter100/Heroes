import { EnchantPriceType } from "@/app/_type/enchantType";

interface getPrefixAndSuffixEnchantPriceList {
  enchantPriceList: EnchantPriceType[];
}
export const getPrefixAndSuffixEnchantPriceList = ({
  enchantPriceList,
}: getPrefixAndSuffixEnchantPriceList) => {
  const prefix_list =
    enchantPriceList &&
    enchantPriceList.map((item) =>
      item.item.filter((c) => c.item_option.prefix_enchant_preset_1),
    );
  const suffix_list =
    enchantPriceList &&
    enchantPriceList.map((item) =>
      item.item.filter((c) => c.item_option.suffix_enchant_preset_1),
    );

  const prefix_enchant_price_list = prefix_list.flat();
  const suffix_list_price_list = suffix_list.flat();

  return { prefix_enchant_price_list, suffix_list_price_list };
};
