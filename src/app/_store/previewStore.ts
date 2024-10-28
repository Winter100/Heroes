import { create } from "zustand";
import { PreviewSelectedType, PriceData } from "../_type/previewType";
import { Stat } from "../_type/characterType";
import { NewEquipmentType, NewTuning_stat } from "../_type/equipmentType";

type State = {
  characterName: string;
  afterStats: PreviewSelectedType[];
  beforeStats: PreviewSelectedType[];
  totalPriceItem: PriceData[];
  previewAllStats: Stat[];

  items: NewEquipmentType[];
  preItems: NewEquipmentType[];
};

type Action = {
  setAfterStats: (value: PreviewSelectedType) => void;
  setBeforeStats: (value: PreviewSelectedType) => void;
  setCharacterName: (name: string) => void;
  reset: () => void;
  setTotalPrice: (price: PriceData) => void;
  setPreviewAllStats: (value: Stat[]) => void;

  setItems: (value: NewEquipmentType[]) => void;
  setIncreaseStat: (slot: string, statName: string) => void;
  setDecreaseStat: (slot: string, statName: string) => void;
};

export const usePreviewStore = create<State & Action>((set) => {
  return {
    characterName: "",
    afterStats: [],
    beforeStats: [],
    totalPriceItem: [],
    previewAllStats: [],
    items: [],
    preItems: [],
    setCharacterName: (value) => {
      set(() => {
        return { characterName: value };
      });
    },
    setAfterStats: (value) => {
      set((state) => {
        const afterStats = [...state.afterStats];
        const existsInafterStats = afterStats.some(
          (stat) =>
            stat.slot === value.slot && stat.previewName === value.previewName,
        );
        if (existsInafterStats) {
          return {
            afterStats: afterStats.map((stat) =>
              stat.slot === value.slot && stat.previewName === value.previewName
                ? value
                : stat,
            ),
          };
        } else {
          return { afterStats: [...afterStats, value] };
        }
      });
    },
    setBeforeStats: (value) => {
      set((state) => {
        const beforeStats = [...state.beforeStats];
        const existsInBeforeStats = beforeStats.some(
          (stat) =>
            stat.slot === value.slot && stat.previewName === value.previewName,
        );
        if (existsInBeforeStats) {
          return {
            beforeStats: beforeStats.map((stat) =>
              stat.slot === value.slot && stat.previewName === value.previewName
                ? value
                : stat,
            ),
          };
        } else {
          return { beforeStats: [...beforeStats, value] };
        }
      });
    },
    reset: () => {
      set(() => {
        return {
          characterName: "",
          afterStats: [],
          beforeStats: [],
          totalPriceItem: [],
          previewAllStats: [],
          StatDifference: [],
        };
      });
    },
    setTotalPrice: (value) => {
      set((state) => {
        const total = [...state.totalPriceItem];
        const existsInTotal = total.some(
          (item) =>
            item.slot === value.slot && item.previewName === value.previewName,
        );

        if (existsInTotal) {
          return {
            totalPriceItem: total.map((item) =>
              item.slot === value.slot && item.previewName === value.previewName
                ? value
                : item,
            ),
          };
        } else {
          return { totalPriceItem: [...total, value] };
        }
      });
    },
    setPreviewAllStats: (value) => {
      set(() => {
        return { previewAllStats: value };
      });
    },

    setItems: (value) => {
      set(() => {
        return { items: value, preItems: value };
      });
    },

    setIncreaseStat: (slot, statName) => {
      set((state) => {
        const updatedItems = state.items.map((item) => {
          if (item.item_equipment_slot_name === slot) {
            if (item.item_option?.tuning_stat) {
              const updatedTuningStat = item.item_option.tuning_stat.map(
                (stat) => {
                  if (stat.stat_name === statName) {
                    const newStatValue = Math.min(
                      Number(stat.stat_value) + Number(stat.stat_one_value),
                      Number(stat.stat_max_value),
                    ).toString();
                    return {
                      ...stat,
                      stat_value: newStatValue,
                    };
                  }
                  return stat;
                },
              );

              return {
                ...item,
                item_option: {
                  ...item.item_option,
                  tuning_stat: updatedTuningStat,
                },
              };
            }
          }
          return item;
        });

        return { items: updatedItems };
      });
    },

    setDecreaseStat: (slot, statName) => {
      set((state) => {
        const updatedItems = state.items.map((item) => {
          if (item.item_equipment_slot_name === slot) {
            if (item.item_option?.tuning_stat) {
              const updatedTuningStat = item.item_option.tuning_stat.map(
                (stat) => {
                  if (stat.stat_name === statName) {
                    const newStatValue = Math.max(
                      0,
                      Number(stat.stat_value) - Number(stat.stat_one_value),
                    ).toString();
                    return {
                      ...stat,
                      stat_value: newStatValue,
                    };
                  }
                  return stat;
                },
              );

              return {
                ...item,
                item_option: {
                  ...item.item_option,
                  tuning_stat: updatedTuningStat,
                },
              };
            }
          }
          return item;
        });

        return { items: updatedItems };
      });
    },
  };
});
