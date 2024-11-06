import { create } from "zustand";

type State = {
  level: number;
};

type Action = {
  setLevel: (level: number) => void;
  reset: () => void;
};

export const usePartholnStore = create<State & Action>((set) => {
  return {
    level: 0,
    setLevel: (level) => {
      set(() => {
        return { level: level };
      });
    },
    reset: () => {
      set(() => ({
        level: 0,
      }));
    },
  };
});
