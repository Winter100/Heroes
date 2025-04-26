import { prefix_enchant_options } from '@/app/_constant/enchant';

export const insertUpgradeType = (
  data: typeof prefix_enchant_options,
  upgreadeType: string
) => {
  return data.map((enchant) => {
    return { ...enchant, upgreadeType };
  });
};
