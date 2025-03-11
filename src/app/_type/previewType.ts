import { EnchantPrice } from "./enchantType";
import { ItemInfoQuipmentProps, NewEquipmentType } from "./equipmentType";

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

export interface ModalProps {
  beforeName?: string;
  overlay: any;
  content: any;
  slot?: string;
  options: {
    rank: string;
    description: string;
    stat_name: string;
    stat_value: {
      stat_name: string;
      stat_value: string;
    }[];
  }[];
  selectedHandler: (
    title: string,
    value: { stat_name: string; stat_value: string }[],
  ) => void;
  itemName: {
    name: string;
    level: string;
  };
  enchantList?: EnchantPrice[];
  upgreadeType?: string;
  selectedValue?: string;
  enchantLoading?: boolean;
}

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

export interface InfusionsItemProps {
  selectedValue: string;
  stat_name: string;
  stat_value: {
    stat_name: string;
    stat_value: string;
  }[];
  upgreadeType?: string;
  setOpenModal: (isOpenModal: boolean) => void;
}
