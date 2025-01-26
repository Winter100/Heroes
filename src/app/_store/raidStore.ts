import { create } from "zustand";
import { MonstersType, raidList, RaidListType } from "../_constant/raidList";

type State = {
  raidList: RaidListType[];
  raidName: string | null;
  selectedBoss: MonstersType | null;
  raidString: {
    raidName: string;
    monsterName: string;
    entry: "상한" | "빠른전투";
    image: string;
  };
};

type Action = {
  setRaidName: (raid: string) => void;
  setSelectBoss: (
    raidName: string,
    monsterName: string,
    entry: "상한" | "빠른전투",
  ) => void;
  resetRaid: () => void;
};

export const useRaidStore = create<State & Action>((set) => {
  return {
    raidList: raidList as RaidListType[],
    selectedBoss: null,
    raidName: null,
    raidString: {
      raidName: "",
      monsterName: "",
      entry: "빠른전투",
      image: "/images/헤레타.png",
    },
    setSelectBoss: (raidName, monsterName, entry) => {
      set((state) => {
        const selectedRaid = state.raidList.find(
          (r) => r.raid_name === raidName,
        );
        const selectedBoss = selectedRaid?.monsters.find(
          (m) => m.name === monsterName,
        );

        return {
          raidString: {
            raidName,
            monsterName,
            entry,
            image: "/images/헤레타.png",
            // image: selectedBoss?.image ?? "/images/헤레타.png",
          },
          selectedBoss,
        };
      });
    },
    resetRaid: () => {
      set({
        selectedBoss: null,
        raidName: null,
        raidString: {
          raidName: "",
          monsterName: "",
          entry: "빠른전투",
          image: "/images/헤레타.png",
        },
      });
    },
    setRaidName: (raid) => {
      set(() => {
        return { raidName: raid };
      });
    },
  };
});
