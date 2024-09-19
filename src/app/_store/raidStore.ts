import { create } from "zustand";
import { MonstersType, raidList, RaidListType } from "../_constant/raidList";

type State = {
  raidList: RaidListType[];
  selectedBoss: MonstersType | null;
  raidName: string | null;
};

type Action = {
  setSelectBoss: (raidName: string, monsterName: string) => void;
  setRaidName: (raid: string) => void;
  resetRaid: () => void;
};

export const useRaidStore = create<State & Action>((set) => {
  return {
    raidList: raidList as RaidListType[],
    selectedBoss: null,
    raidName: null,
    setSelectBoss: (raidName, monsterName) => {
      set((state) => {
        const selectedRaid = state.raidList.find(
          (r) => r.raid_name === raidName,
        );
        const selectedBoss = selectedRaid?.monsters.find(
          (m) => m.name === monsterName,
        );
        return { selectedBoss };
      });
    },
    resetRaid: () => {
      set({ selectedBoss: null });
    },
    setRaidName: (raid) => {
      set(() => {
        return { raidName: raid };
      });
    },
  };
});
