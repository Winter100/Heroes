import { create } from 'zustand';

type State = {
  stats: '능력치' | null;
  item: 'item' | 'skill' | 'cash' | null;
};

type Action = {
  setStats: (name: '능력치') => void;
  setItem: (name: 'item' | 'skill' | 'cash') => void;
  reset: () => void;
};

export const useDetailStore = create<State & Action>((set) => {
  return {
    stats: '능력치',
    item: null,

    setStats: (name) => {
      set((state) => {
        if (state.stats === '능력치') {
          return { stats: null };
        }
        return { stats: name };
      });
    },
    setItem: (name) => {
      set((state) => {
        if (state.item === name) {
          return { item: null };
        }
        return { item: name };
      });
    },

    reset: () => {
      set(() => ({
        item: null,
        stats: null,
      }));
    },
  };
});
