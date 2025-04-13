import { EnchantPrice } from './enchantType';
import { ItemInfoQuipmentProps } from './equipmentType';

export interface PreviewSelectedType {
  slot: string;
  upgreadeType: string;
  name: string;
  stat_value: Stat[];
}

export interface PrviewItemProps {
  item: ItemInfoQuipmentProps;
  slot: string;
}

export interface beforeAndAfterStatsType {
  rank: string;
  name: string;
  stat_value: {
    stat_name: string;
    stat_value: string;
  }[];
  upgreadeType: string;
}

export type OptionsType = {
  rank: string;
  description: string;
  name: string;
  stat_value: {
    stat_name: string;
    stat_value: string;
  }[];
}[];

export interface PreviewModalProps {
  itemName: {
    name: string;
    level: string;
  };
  preName?: string;
  slot: string;
  upgreadeType: string;
  usableItemList: {
    rank: string;
    name: string;
    description: string;
    stat_value: { stat_name: string; stat_value: string }[];
  }[];
  enchantPriceList?: EnchantPrice[];
  enchantPriceLoading?: boolean;
  existing: beforeAndAfterStatsType;
}

export interface PriceData {
  upgreadeType: string;
  slot: string;
  stat_name: string;
  price: number;
}

export type Stat = {
  stat_name: string;
  stat_value: string | number;
};

export type Item = {
  slot: string;
  upgreadeType: string;
  name: string;
  stat_value: Stat[];
};

export type CombinedStats = {
  [key: string]: number; // stat_name에 해당하는 값들을 합칠 객체의 타입
};
