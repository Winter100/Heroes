import { create } from 'zustand';

interface Ability {
  name: string;
  slot: string;
  ingredient: { name: string; quantity: string }[];
}

type State = {
  ability: Ability[];
};

type Action = {
  setAbility: (slot: string, ability: Ability) => void;
  setResetAbility: (slot: string) => void;
};

export const useAbilityStore = create<State & Action>((set) => {
  return {
    ability: [],
    setAbility: (slot: string, newAbility: Ability) => {
      set((state: State) => ({
        ability: [
          ...state.ability.filter((ab) => ab.slot !== slot),
          newAbility,
        ],
      }));
    },
    setResetAbility: (slot: string) => {
      set((state: State) => ({
        ability: state.ability.filter((ab) => ab.slot !== slot),
      }));
    },
  };
});
