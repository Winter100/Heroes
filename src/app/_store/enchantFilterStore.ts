import { create } from "zustand";

type State = {
  dropRaidOrItemName: string;
  enchantFilterName: string;
};

type Action = {
  setDropRaidOrItemName: (raidOrItemName: string) => void;
  setEnchantFilterName: (enchatName: string) => void;
  resetEnchantFilter: () => void;
};

export const useEnchantFilterStore = create<State & Action>((set) => {
  return {
    dropRaidOrItemName: "all",
    enchantFilterName: "",
    setDropRaidOrItemName: (raidOrItemName) => {
      set((state) => {
        const selectFilterValue =
          raidOrItemName === state.dropRaidOrItemName ? "all" : raidOrItemName;
        return { enchantFilterName: "", dropRaidOrItemName: selectFilterValue };
      });
    },
    setEnchantFilterName: (enchatName) => {
      set(() => {
        return {
          enchantFilterName: enchatName.replace(/\s/g, ""),
          dropRaidOrItemName: "all",
        };
      });
    },
    resetEnchantFilter: () => {
      set(() => {
        return { enchantFilterName: "", dropRaidOrItemName: "all" };
      });
    },
  };
});
