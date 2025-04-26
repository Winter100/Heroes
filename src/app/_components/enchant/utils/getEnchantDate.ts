import { EnchantPriceType } from '@/app/_type/enchantType';
import { convertToKST } from '@/app/_utils/convertToKST';

export const getEnchantDate = (enchantList: EnchantPriceType[]) => {
  if (enchantList.length === 0) return { firstDate: null, lastDate: null };

  const first =
    enchantList[0].item.length > 0 ? enchantList[0].item[0].date_update : null;

  const lastItem = enchantList[enchantList.length - 1];
  const last =
    lastItem.item.length > 0
      ? lastItem.item[lastItem.item.length - 1].date_update
      : null;

  const firstDate = convertToKST(first || '');
  const lastDate = convertToKST(last || '');

  return { firstDate, lastDate };
};
