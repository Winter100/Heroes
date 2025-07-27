import { create } from 'zustand';

type State = {
  filter: string;
  category: string;
  itemName: string;
  count: number;
};

type Action = {
  setItemName: (item: string, category: string) => void;
  setCount: (count: number) => void;
  setFilter: (count: string) => void;
};

export const useMaterialsStore = create<State & Action>((set) => {
  return {
    filter: '장비',
    category: '',
    itemName: '',
    count: 1,
    setItemName: (item, category) => {
      set((state) => {
        if (state?.itemName === item) {
          return { itemName: '', category: '' };
        }
        return { itemName: item, category: category };
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
