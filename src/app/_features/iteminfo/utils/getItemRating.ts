import { itemInfoMap, materialsMap } from '@/app/_constant/items/item_map';

export const getItemOrMaterialsRating = (filter: string, item_name: string) => {
  return filter === '장비'
    ? getItemRating(item_name)
    : getMaterialsRating(item_name);
};

export const getItemRating = (item: string) => {
  return itemInfoMap?.get(item)?.rating;
};

export const getMaterialsRating = (item: string) => {
  return materialsMap?.get(item)?.item_rating;
};
