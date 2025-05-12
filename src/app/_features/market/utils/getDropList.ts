import { insertUpgradeType } from '@/app/_components/enchant/utils/insertUpgradeType';
import {
  prefix_enchant_options,
  suffix_enchant_options,
} from '@/app/_constant/enchant';
import { keyword } from '@/app/_constant/keyword';

export const getDropList = () => {
  const allEnchantList = [
    ...insertUpgradeType(prefix_enchant_options, keyword.upgreadeType.prefix),
    ...insertUpgradeType(suffix_enchant_options, keyword.upgreadeType.suffix),
  ];

  const setDropList = allEnchantList.reduce((acc, cur) => {
    cur.drop_item_list.forEach((item) => acc.add(item));
    return acc;
  }, new Set<string>());

  return Array.from(setDropList).sort();
};
