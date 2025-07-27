import { create } from 'zustand';
import { splitEnchantByType } from '../_utils/enchant/utils/splitEnchantByType';
import { EnchantPrice, EnchantPriceType } from '../_type/enchantType';
import { getEnchantDate } from '../_utils/enchant/utils/getEnchantDate';

type State = {
  prefix: EnchantPrice[];
  suffix: EnchantPrice[];
  date: {
    first: string;
    last: string;
  };
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
    date: { first: '', last: '' },
    enchantPriceLoading: true,
    setEnchantPriceList: (enchantPriceList) => {
      set((state) => {
        const { prefix, suffix } = splitEnchantByType(enchantPriceList);
        const { firstDate, lastDate } = getEnchantDate(enchantPriceList);
        return {
          ...state,
          prefix,
          suffix,
          date: { first: firstDate || '', last: lastDate || '' },
        };
      });
    },
    setEnchantPriceLoading: (enchantPriceLoading: boolean) => {
      set((state) => {
        return { ...state, enchantPriceLoading };
      });
    },
  };
});
