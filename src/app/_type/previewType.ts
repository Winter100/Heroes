import { EnchantPrice, EnchantPriceType } from "./enchantPriceType";
import { EquipmentType } from "./equipmentType";

export interface PreviewStatsType {
  stat_name: string;
  stat_value: string;
}

export interface PreviewSelectedType {
  slot: string;
  previewName: string;
  stat_name: string;
  stat_value: PreviewStatsType[];
}

export interface PrviewItemProps {
  enchant: EnchantPriceType[];
  item: EquipmentType;
  slot: string;
}

export interface beforeAndAfterStatsType {
  rank: string;
  stat_name: string;
  stat_value: {
    stat_name: string;
    stat_value: string;
  }[];
  previewName: string;
}

export type OptionsType = {
  rank: string;
  stat_name: string;
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
  openModal: boolean;
  setOpenModal: (isView: boolean) => void;
  options: {
    rank: string;
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
  previewName?: string;
  selectedValue?: string;
}

export interface PreviewModalProps {
  beforeName?: string;
  itemName: {
    name: string;
    level: string;
  };
  slot: string;
  previewName: string;
  options?: {
    rank: string;
    stat_name: string;
    stat_value: { stat_name: string; stat_value: string }[];
  }[];
  before: {
    rank: string;
    stat_name: string;
    stat_value: {
      stat_name: string;
      stat_value: string;
    }[];
    previewName: string;
  };
  enchantList?: EnchantPrice[];
}

export interface EnchantItemProps {
  slot: string;
  rank: string;
  stat_name: string;
  stat_value: {
    stat_name: string;
    stat_value: string;
  }[];
  enchantList: EnchantPrice[];
  previewName?: string;
  selectedValue?: string;
  setOpenModal: (isOpenModal: boolean) => void;
}

export interface PriceData {
  previewName: string;
  slot: string;
  stat_name: string;
  price: number;
}

export type Stat = {
  stat_name: string;
  stat_value: string;
};

export type Item = {
  slot: string;
  previewName: string;
  stat_name: string;
  stat_value: Stat[];
};

export type CombinedStats = {
  [key: string]: number; // stat_name에 해당하는 값들을 합칠 객체의 타입
};

export interface InfusionsItemProps {
  selected: boolean;
  stat_name: string;
  stat_value: {
    stat_name: string;
    stat_value: string;
  }[];
  previewName?: string;
  setOpenModal: (isOpenModal: boolean) => void;
}
