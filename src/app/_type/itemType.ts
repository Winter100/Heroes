import { Stat } from './previewType';

type ItemBonus = {
  level: number;
  stat_bonus: { stat_name: string; stat_value: number }[];
};

type ItemSlot = {
  item_name: string;
  item_slot: string;
};

export type ItemSetType = {
  item_set_name: string;
  item_set_list: string[];
  item_set_slot: ItemSlot[];
  item_set_bonus: ItemBonus[];
};

export type ItemStaticRecipeType = {
  id: string;
  name: string;
};

export interface ItemRecipes {
  id: number;
  name: string;
  level: string;
  image?: string;
  slot?: { id: number; name: string; value: string };
  effects: Stat[];
  category: string;
  grinds: GrindResponse;
  tier: string;
  description?: string;
  material_count: number;
  sets?: {
    set_name?: string;
    title?: string;
    set_title?: string[];
    slots?: { name: string; value: string }[];
    set_options?: ItemBonus[];
  }[];
  materials: MaterialsType[];
}

type GrindResponse = {
  title: string;
  item: GrindItemResponse[];
};

type GrindItemResponse = {
  item_slot: string[];
  item_value: GrindItemValueResponse[];
};

type GrindItemValueResponse = {
  stat_name: string;
  stat_one_value: number;
  stat_max_value: number;
  stat_value: number;
  one_ingredient: {
    name: string;
    image: string;
    quantity: number;
  }[];
};

interface MaterialsType extends ItemRecipes {
  materialId: number;
  hasRecipe: boolean;
  option?: string;
  quantity?: number;
}

export interface GrindType {
  title: string;
  item: {
    item_slot: string[];
    item_value: {
      stat_name: string;
      stat_one_value: string;
      stat_max_value: string;
      one_ingredient: {
        name: string;
        quantity: string;
      }[];
    }[];
  }[];
}
