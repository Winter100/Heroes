import {
  prefix_enchant_name_list,
  suffix_enchant_name_list,
} from '@/app/_constant/enchant';

const mergedEnchantSlotList = [
  ...prefix_enchant_name_list,
  ...suffix_enchant_name_list,
];

export const findEnchantNames = (enchantName: string) => {
  const result: string[] = [];

  mergedEnchantSlotList.forEach((data) => {
    if (data.list.includes(enchantName)) {
      result.push(...data.name);
    }
  });

  return result;
};
