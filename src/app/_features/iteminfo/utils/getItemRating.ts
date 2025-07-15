import { itemInfoMap, materialsMap } from '@/app/_constant/items/item_map';
import { Item_Rating } from '@/app/_type/infoInfoType';

export const getItemOrMaterialsRating = (
  category: string,
  itemName: string
): Item_Rating | null => {
  return category === '장비'
    ? getItemRating(itemName)
    : getMaterialsRating(itemName);
};

export const getItemRating = (item: string): Item_Rating | null => {
  const rating = itemInfoMap?.get(item)?.rating;
  if (!rating) return null;

  return rating;
};

export const getMaterialsRating = (item: string): Item_Rating | null => {
  const rating = materialsMap?.get(item)?.item_rating;
  if (!rating) return null;
  return rating;
};
