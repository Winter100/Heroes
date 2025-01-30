import { create } from "zustand";

type State = {
  enchant: {
    enchant_name: string;
    average_price: number;
    max_price: number;
    min_price: number;
    date_update: string;
    name: string;
    rank: string;
    upgreadeType: string;
  } | null;
};

type Action = {
  setEnchant: (enchant: EnchantStoreType) => void;
};

export const useSelectEnchantStore = create<State & Action>((set) => {
  return {
    enchant: null,
    setEnchant: (enchant) => {
      set(() => {
        return { enchant };
      });
    },
  };
});

export interface EnchantStoreType {
  enchant_name: string;
  average_price: number;
  max_price: number;
  min_price: number;
  date_update: string;
  name: string;
  rank: string;
  upgreadeType: string;
  description: string;
  drop_item_list: string[];
  stat_value: { stat_name: string; stat_value: string }[];
  item_name: string;
}
