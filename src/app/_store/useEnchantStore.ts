import { create } from 'zustand';
import { EnchantOptionType, SIMULATION_AFFIX_TYPE } from '../_constant/enchant';

export type Simulations = Record<
  string,
  {
    prefix: {
      before: (EnchantOptionType & { isExisting: boolean }) | null;
      after: (EnchantOptionType & { isExisting: boolean }) | null;
    };
    suffix: {
      before: (EnchantOptionType & { isExisting: boolean }) | null;
      after: (EnchantOptionType & { isExisting: boolean }) | null;
    };
    infusion: {
      before: (EnchantOptionType & { isExisting: boolean }) | null;
      after: (EnchantOptionType & { isExisting: boolean }) | null;
    };
    partholn: {
      before: (EnchantOptionType & { isExisting: boolean }) | null;
      after: (EnchantOptionType & { isExisting: boolean }) | null;
    };
    grind: {
      before: (EnchantOptionType & { isExisting: boolean }) | null;
      after: (EnchantOptionType & { isExisting: boolean }) | null;
    };
  }
>;

interface EnchantState {
  simulations: Simulations;
}
interface EnchantAction {
  setSimulations: (
    itemId: string,
    affix: SIMULATION_AFFIX_TYPE,
    before: EnchantOptionType | null,
    after: EnchantOptionType | null,
    isExisting: boolean
  ) => void;
}
export type SetSimulationsParams = Parameters<EnchantAction['setSimulations']>;

export const useEnchantStore = create<EnchantState & EnchantAction>((set) => {
  return {
    simulations: {},
    setSimulations: (
      itemId,
      affix,
      beforeEnchant,
      afterEnchant,
      isExisting
    ) => {
      set((state) => {
        const current = state.simulations[itemId] || {
          prefix: { before: null, after: null },
          suffix: { before: null, after: null },
          infusion: { before: null, after: null },
          partholn: { before: null, after: null },
          grind: { before: null, after: null },
        };

        return {
          simulations: {
            ...state.simulations,
            [itemId]: {
              ...current,
              [affix]: {
                before: { ...beforeEnchant, isExisting },
                after: { ...afterEnchant, isExisting },
              },
            },
          },
        };
      });
    },

    setGrindSimulations: () => {
      set(() => {
        return {};
      });
    },
  };
});
