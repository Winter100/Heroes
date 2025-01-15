import { EnchantPriceType } from "@/app/_type/enchantType";

export const splitEnchantByType = (enchantList: EnchantPriceType[]) => {
  const prefix_list =
    enchantList &&
    enchantList.map((item) =>
      item.item.filter((c) => c.item_option.prefix_enchant_preset_1),
    );
  const suffix_list =
    enchantList &&
    enchantList.map((item) =>
      item.item.filter((c) => c.item_option.suffix_enchant_preset_1),
    );
  return {
    prefix: prefix_list.flat(),
    suffix: suffix_list.flat(),
  };
};
