import { getImageByName } from '@/app/_utils/getImageByName';
import { getEnchantItemByName } from './getEnchantItemByName';
import { getEnchantImage } from '@/app/_components/enchant/utils/getEnchantImage';

export const getImageByFilter = (filter: string, itemName: string) => {
  switch (filter) {
    case '인챈트':
      const enchant = getEnchantItemByName(itemName);
      if (!enchant) return '';
      const { rank, upgreadeType } = enchant;
      return getEnchantImage(rank, upgreadeType);

    default:
      return getImageByName(itemName);
  }
};
