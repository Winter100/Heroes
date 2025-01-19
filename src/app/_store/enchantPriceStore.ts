import { create } from "zustand";
import { splitEnchantByType } from "../_components/enchant/utils/splitEnchantByType";
import { EnchantPrice, EnchantPriceType } from "../_type/enchantType";

type State = {
  prefix: EnchantPrice[];
  suffix: EnchantPrice[];
  enchantPriceLoading: boolean;
};

type Action = {
  setEnchantPriceList: (enchantPriceList: EnchantPriceType[]) => void;
  setEnchantPriceLoading: (isLoading: boolean) => void;
};

export const useEnchantPriceStore = create<State & Action>((set) => {
  return {
    prefix: [],
    suffix: [],
    enchantPriceLoading: true,
    setEnchantPriceList: (enchantPriceList) => {
      set((state) => {
        const { prefix, suffix } = splitEnchantByType(enchantPriceList);
        return { ...state, prefix, suffix };
      });
    },
    setEnchantPriceLoading: (enchantPriceLoading: boolean) => {
      set((state) => {
        return { ...state, enchantPriceLoading };
      });
    },
  };
});
