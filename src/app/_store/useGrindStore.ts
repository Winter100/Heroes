import { create } from 'zustand';

type GrindSimulation = {
  grind: {
    before: Record<string, number>;
    after: Record<string, number>;
  };
};

type GrindSimulations = Record<string, GrindSimulation>;

interface GrindState {
  simulations: GrindSimulations;
}

interface GrindAction {
  setSimulations: (
    itemName: string,
    statId: string,
    newValue: number,
    min: number,
    max: number,
    originalValue: number
  ) => void;
  resetSimulations: () => void;
}

/**
 * 연마(Stat Tuning) 시뮬레이션 상태 관리
 */
export const useGrindStore = create<GrindState & GrindAction>((set) => {
  return {
    simulations: {},
    setSimulations: (itemName, statId, newValue, min, max, originalValue) => {
      set((state) => {
        const clampedValue = Math.max(min, Math.min(max, newValue));

        const currentItem = state.simulations[itemName] || {
          grind: { before: {}, after: {} },
        };

        return {
          simulations: {
            ...state.simulations,
            [itemName]: {
              ...currentItem,
              grind: {
                before: {
                  ...currentItem.grind.before,
                  [statId]: currentItem.grind.before?.[statId] ?? originalValue,
                },
                after: {
                  ...currentItem.grind.after,
                  [statId]: clampedValue,
                },
              },
            },
          },
        };
      });
    },
    resetSimulations: () => set({ simulations: {} }),
  };
});
