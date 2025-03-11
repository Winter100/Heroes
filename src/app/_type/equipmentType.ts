import { Item_Rating } from "./infoInfoType";
import { Stat } from "./previewType";

export interface Item_equipment {
  item_equipment: EquipmentType[];
}

export interface NewTuning_stat {
  stat_name: string;
  stat_value: string;
  stat_one_value: string;
  stat_max_value: string;
  stat_min_value: string;
  one_ingredient: { name: string; quantity: string }[];
}

interface Tuning_stat {
  stat_name: string;
  stat_value: string;
}
export interface NewEquipmentType {
  item_equipment_page: string;
  item_equipment_slot_name: string;
  item_name: string;
  item_option: {
    enhancement_level: null;
    tuning_stat: NewTuning_stat[] | null;
    ability_name: string;
    prefix_enchant_use_preset_no: number;
    suffix_enchant_use_preset_no: number;
    prefix_enchant_preset_1: string;
    suffix_enchant_preset_1: string;
    prefix_enchant_preset_2: string;
    suffix_enchant_preset_2: string;
    power_infusion_use_preset_no: number;
    power_infusion_preset_1: {
      stat_name: string;
      stat_value: string;
    };
    power_infusion_preset_2: {
      stat_name: string;
      stat_value: string;
    };
    cash_item_color: {
      color_1: string;
      color_2: string;
      color_3: string;
    };
    avatar_color_use_preset_no: null;
    avatar_color_preset_1: {
      color_1: null;
      color_2: null;
      color_3: null;
    };
    avatar_color_preset_2: {
      color_1: null;
      color_2: null;
      color_3: null;
    };
    avatar_color_preset_3: {
      color_1: null;
      color_2: null;
      color_3: null;
    };
    avatar_color_preset_4: {
      color_1: null;
      color_2: null;
      color_3: null;
    };
    avatar_color_preset_5: {
      color_1: null;
      color_2: null;
      color_3: null;
    };
    avatar_inner_armor_color_preset_1: {
      color_1: null;
      color_2: null;
      color_3: null;
      default_color_flag: null;
    };
    avatar_inner_armor_color_preset_2: {
      color_1: null;
      color_2: null;
      color_3: null;
      default_color_flag: null;
    };
    avatar_inner_armor_color_preset_3: {
      color_1: null;
      color_2: null;
      color_3: null;
      default_color_flag: null;
    };
    avatar_inner_armor_color_preset_4: {
      color_1: null;
      color_2: null;
      color_3: null;
      default_color_flag: null;
    };
    avatar_inner_armor_color_preset_5: {
      color_1: null;
      color_2: null;
      color_3: null;
      default_color_flag: null;
    };
  };
}
export interface EquipmentType {
  item_equipment_page: string;
  item_equipment_slot_name: string;
  item_name: string;
  item_option: {
    enhancement_level: null;
    tuning_stat: Tuning_stat[];
    ability_name: string;
    prefix_enchant_use_preset_no: number;
    suffix_enchant_use_preset_no: number;
    prefix_enchant_preset_1: string;
    suffix_enchant_preset_1: string;
    prefix_enchant_preset_2: string;
    suffix_enchant_preset_2: string;
    power_infusion_use_preset_no: number;
    power_infusion_preset_1: {
      stat_name: string;
      stat_value: string;
    };
    power_infusion_preset_2: {
      stat_name: string;
      stat_value: string;
    };
    cash_item_color: {
      color_1: string;
      color_2: string;
      color_3: string;
    };
    avatar_color_use_preset_no: null;
    avatar_color_preset_1: {
      color_1: null;
      color_2: null;
      color_3: null;
    };
    avatar_color_preset_2: {
      color_1: null;
      color_2: null;
      color_3: null;
    };
    avatar_color_preset_3: {
      color_1: null;
      color_2: null;
      color_3: null;
    };
    avatar_color_preset_4: {
      color_1: null;
      color_2: null;
      color_3: null;
    };
    avatar_color_preset_5: {
      color_1: null;
      color_2: null;
      color_3: null;
    };
    avatar_inner_armor_color_preset_1: {
      color_1: null;
      color_2: null;
      color_3: null;
      default_color_flag: null;
    };
    avatar_inner_armor_color_preset_2: {
      color_1: null;
      color_2: null;
      color_3: null;
      default_color_flag: null;
    };
    avatar_inner_armor_color_preset_3: {
      color_1: null;
      color_2: null;
      color_3: null;
      default_color_flag: null;
    };
    avatar_inner_armor_color_preset_4: {
      color_1: null;
      color_2: null;
      color_3: null;
      default_color_flag: null;
    };
    avatar_inner_armor_color_preset_5: {
      color_1: null;
      color_2: null;
      color_3: null;
      default_color_flag: null;
    };
  };
}

export interface ItemInfoQuipmentProps extends NewEquipmentType {
  mergedStats: Stat[];
  rating: Item_Rating;
  quality: number;
  before: {
    beforeInfusionName: string;
    beforeInfusionValue: string;
    beforePrefixEnchantName: string;
    beforeSuffixEnchantName: string;
  };
}
