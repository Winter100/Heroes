import { create } from "zustand";

export type EquipmentFilterValuesType = "장비" | "아바타" | "캐쉬";

type State = {
  filter: EquipmentFilterValuesType;
};

type Action = {
  setFilter: (filter: EquipmentFilterValuesType) => void;
};

export const useEquipmentFilterStore = create<State & Action>((set) => {
  return {
    filter: "장비",
    setFilter: (filter) => {
      set(() => {
        return { filter };
      });
    },
  };
});
