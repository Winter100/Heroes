import { create } from 'zustand';

type State = {
  filter: string;
  category: string;
  materials: string;
  count: number;
};

type Action = {
  setMaterials: (item: string, category: string) => void;
  setCount: (count: number) => void;
  setFilter: (count: string) => void;
};

export const useMaterialsStore = create<State & Action>((set) => {
  return {
    filter: '장비',
    category: '',
    materials: '',
    count: 1,
    setMaterials: (item, category) => {
      set((state) => {
        if (state?.materials === item) {
          return { materials: '', category: '' };
        }
        return { materials: item, category: category };
      });
    },
    setCount: (count) => {
      set(() => {
        return { count };
      });
    },
    setFilter: (filter) => {
      set(() => {
        return { filter };
      });
    },
  };
});
