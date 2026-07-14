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

export interface ItemRecipe {
  name: string;
  level: string;
  image?: string;
  slot: string[];
  effects: Stat[];
  category: string;
  grinds: GrindResponse;
  tier: string;
  description?: string;
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

interface MaterialsType extends ItemRecipe {
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
