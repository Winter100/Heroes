import { create } from 'zustand';

type State = {
  allChecked: boolean;
  checkedList: string[];
};

type Action = {
  setAllChecked: (name: string[]) => void;
  setChecked: (name: string) => void;
  clearCheckList: () => void;
};

export const useCheckStore = create<State & Action>((set) => {
  return {
    allChecked: false,
    setAllChecked: (name: string[]) => {
      set((state) => {
        const arr = [...state.checkedList];

        if (arr.length === name.length) {
          return { checkedList: [] };
        }

        return { checkedList: name };
      });
    },
    checkedList: [],
    setChecked: (name: string) => {
      set((state) => {
        const arr = [...state.checkedList];
        if (arr.includes(name)) {
          return { checkedList: arr.filter((item) => item !== name) };
        } else {
          return {
            checkedList: [...arr, name],
          };
        }
      });
    },
    clearCheckList: () => {
      set(() => {
        return { checkedList: [] };
      });
    },
  };
});
