import { ComponentProps } from 'react';
import { Stat } from './previewType';

export interface ItemPriceType {
  date_update: string;
  item_name: string;
  average_price: number;
  min_price: number;
  max_price: number;
  item_option: {
    enhancement_level: number;
    tuning_stat: [
      {
        stat_name: string;
        stat_value: string;
      },
    ];
    ability_name: string;
    prefix_enchant_preset_1: string;
    suffix_enchant_preset_1: string;
    prefix_enchant_preset_2: string;
    suffix_enchant_preset_2: string;
    power_infusion_preset_1: [
      {
        stat_name: string;
        stat_value: string;
      },
    ];
    power_infusion_preset_2: [
      {
        stat_name: string;
        stat_value: string;
      },
    ];
    bind_release_limit: string;
    item_shape_name: string;
    item_quality: string;
    bracelet_gem_composite: [
      {
        item_name: string;
        stat: [
          {
            stat_name: string;
            stat_value: string;
          },
        ];
      },
    ];
    value: string;
  };
}

export interface ItemPriceApiType {
  next_cursor: string;
  item: ItemPriceType[];
}

export interface EnchantFormatingType {
  item_name: string;
  min_price: number;
  max_price: number;
  average_price: number;
  date_update: string;
  affix: SIMULATION_AFFIX_TYPE;
}

export interface EnchantMergePriceType
  extends EnchantFormatingType,
    EnchantOptionType {}

export interface EnchantTableType extends Omit<EnchantMergePriceType, 'slot'> {
  slot: string[];
}

export interface EnchantPriceProps {
  label?: string;
  falseLabel?: string;
  avgPrice: number;
  enchantPriceLoading: boolean;
}

export enum EnchantTableKeyEnum {
  rank = 'rank',
  name = 'name',
  average_price = 'average_price',
  max_price = 'max_price',
  min_price = 'min_price',
}

export type EnchantKeyType = {
  rank: EnchantTableKeyEnum.rank;
  name: EnchantTableKeyEnum.name;
  average_price: EnchantTableKeyEnum.average_price;
  max_price: EnchantTableKeyEnum.max_price;
  min_price: EnchantTableKeyEnum.min_price;
};

export interface EnchantRankTableProps extends ComponentProps<'table'> {
  enchantData: {
    upgreadeType: string;
    rank: string;
    name: string;
    drop_item_list: string[];
    description: string;
    stat_value: {
      stat_name: string;
      stat_value: string;
    }[];
  }[];
}

export const SIMULATION_AFFIX_PART = [
  'prefix',
  'suffix',
  'infusion',
  'partholn',
  'grind',
] as const;

export type SIMULATION_AFFIX_TYPE = (typeof SIMULATION_AFFIX_PART)[number];

export type EnchantOptionType = {
  rank: string | number;
  name: string;
  affix: SIMULATION_AFFIX_TYPE;
  effects: Stat[];
  slot?: { name: string; value: string }[];
  description?: string;
  drop_list?: DropType[];
};

interface DropType {
  name: string;
  image: string | null;
  type: string;
}

export interface EnchantGroup {
  title: string;
  rank: string;
  enchants: EnchantOptionType[];
}

export const ENCHANT_DESTRUCTION_RANK = 5;

export interface StatsProps extends ComponentProps<'div'> {
  stats: Stat[];
  simulationsStats?: Stat[];
  isTitle?: boolean;
}

export interface DefferenceStatsProps {
  simulationsStats: Stat[];
  stat: Stat;
}

export type EnchantGroupByAffix = Map<
  string,
  {
    prefix: EnchantOptionType[];
    suffix: EnchantOptionType[];
    infusion: EnchantOptionType[];
  }
>;
