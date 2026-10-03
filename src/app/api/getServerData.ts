import { API_PATH } from '../_constant/keyword';
import { MergedEnchantType } from '../_features/market/enchant-fiter-list';
import { CharacterInfo } from '../_type/characterType';
import { EnchantOptionType } from '../_type/enchantType';
import {
  GrindType,
  ItemRecipes,
  ItemSetType,
  ItemStaticRecipeType,
} from '../_type/itemType';
import { RaidListType } from '../_type/raidType';
import { getServerApi } from './getServerApi';

type ServerDataMap = {
  enchant: EnchantOptionType[];
  infusion: EnchantOptionType[];
  itemSetOption: ItemSetType[];
  characterImage: CharacterInfo[];
  grind: GrindType[];
  raid: RaidListType[];
  enchantTable: MergedEnchantType[];
  recipes: ItemRecipes[];
  recipeByItemName: ItemRecipes;
  recipeSSG: ItemStaticRecipeType[];
};

export const getServerData = <K extends keyof ServerDataMap>(
  key: K
): Promise<ServerDataMap[K]> => {
  const path = API_PATH[key];

  return getServerApi<ServerDataMap[K]>(path, {
    next: {
      tags: [path],
      ...(key === 'enchantTable' ? { revalidate: 43200 } : {}),
    },
  });
};
