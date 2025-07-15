import { create } from 'zustand';
import { EnchantStoreType } from '../_type/enchantStoreType';

type State = {
  enchant: EnchantStoreType | null;
};

type Action = {
  setEnchant: (enchant: EnchantStoreType | null) => void;
  resetSelectEnchant: () => void;
};

export const useSelectEnchantStore = create<State & Action>((set) => {
  return {
    enchant: null,
    setEnchant: (enchant) => {
      set(() => {
        return { enchant };
      });
    },
    resetSelectEnchant: () => {
      set(() => {
        return { enchant: null };
      });
    },
  };
});
