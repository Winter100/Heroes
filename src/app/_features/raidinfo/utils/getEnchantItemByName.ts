import { insertUpgradeType } from '@/app/_components/enchant/utils/insertUpgradeType';
import {
  prefix_enchant_options,
  suffix_enchant_options,
} from '@/app/_constant/enchant';
import { keyword } from '@/app/_constant/keyword';

export const getEnchantItemByName = (enchant: string) => {
  const enchantName = enchant.split(' ')[0];
  const allEnchantList = [
    ...insertUpgradeType(prefix_enchant_options, keyword.upgreadeType.prefix),
    ...insertUpgradeType(suffix_enchant_options, keyword.upgreadeType.suffix),
  ];

  return allEnchantList?.find((enchant) => enchant.name === enchantName);
};
