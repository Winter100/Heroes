import { create } from "zustand";
import { PreviewSelectedType, PriceData } from "../_type/previewType";
import { Stat } from "../_type/characterType";

type State = {
  characterName: string;
  afterStats: PreviewSelectedType[];
  beforeStats: PreviewSelectedType[];
  totalPriceItem: PriceData[];
  previewAllStats: Stat[];
};

type Action = {
  setAfterStats: (value: PreviewSelectedType) => void;
  setBeforeStats: (value: PreviewSelectedType) => void;
  setCharacterName: (name: string) => void;
  reset: () => void;
  setTotalPrice: (price: PriceData) => void;
  setPreviewAllStats: (value: Stat[]) => void;
};

export const usePreviewStore = create<State & Action>((set) => {
  return {
    characterName: "",
    afterStats: [],
    beforeStats: [],
    totalPriceItem: [],
    previewAllStats: [],
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
  };
});
