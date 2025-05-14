import { create } from 'zustand';
import { MonstersType, raidList, RaidListType } from '../_constant/raidList';

type State = {
  raidList: RaidListType[];
  selectedBoss: MonstersType | null;
  selectedSumUp: {
    raidName: string;
    monsterName: string;
    entry: '상한' | '빠른전투' | null;
  };
};

type Action = {
  setSelectBoss: (
    raidName: string,
    monsterName: string,
    entry: '상한' | '빠른전투'
  ) => void;
  resetRaid: () => void;
};

export const useRaidStore = create<State & Action>((set) => {
  return {
    raidList: raidList as RaidListType[],
    selectedBoss: null,
    selectedSumUp: {
      raidName: '',
      monsterName: '',
      entry: null,
    },
    setSelectBoss: (raidName, monsterName, entry) => {
      set((state) => {
        const selectedRaid = state.raidList.find(
          (r) => r.raid_name === raidName
        );
        const selectedBoss = selectedRaid?.monsters.find(
          (m) => m.name === monsterName
        );

        return {
          selectedSumUp: {
            raidName,
            monsterName,
            entry,
          },
          selectedBoss,
        };
      });
    },
    resetRaid: () => {
      set({
        selectedBoss: null,
        selectedSumUp: {
          raidName: '',
          monsterName: '',
          entry: null,
        },
      });
    },
  };
});
// import { create } from 'zustand';
// import { MonstersType, raidList, RaidListType } from '../_constant/raidList';

// type State = {
//   raidList: RaidListType[];
//   raidName: string | null;
//   selectedBoss: MonstersType | null;
//   raidString: {
//     raidName: string;
//     monsterName: string;
//     entry: '상한' | '빠른전투';
//     image: string;
//   };
// };

// type Action = {
//   setRaidName: (raid: string) => void;
//   setSelectBoss: (
//     raidName: string,
//     monsterName: string,
//     entry: '상한' | '빠른전투'
//   ) => void;
//   resetRaid: () => void;
// };

// export const useRaidStore = create<State & Action>((set) => {
//   return {
//     raidList: raidList as RaidListType[],
//     selectedBoss: null,
//     raidName: null,
//     raidString: {
//       raidName: '',
//       monsterName: '',
//       entry: '빠른전투',
//       image: '/images/hereta.png',
//     },
//     setSelectBoss: (raidName, monsterName, entry) => {
//       set((state) => {
//         const selectedRaid = state.raidList.find(
//           (r) => r.raid_name === raidName
//         );
//         const selectedBoss = selectedRaid?.monsters.find(
//           (m) => m.name === monsterName
//         );

//         return {
//           raidString: {
//             raidName,
//             monsterName,
//             entry,
//             image: '/images/hereta.png',
//             // image: selectedBoss?.image ?? "/images/hereta.png",
//           },
//           selectedBoss,
//         };
//       });
//     },
//     resetRaid: () => {
//       set({
//         selectedBoss: null,
//         raidName: null,
//         raidString: {
//           raidName: '',
//           monsterName: '',
//           entry: '빠른전투',
//           image: '/images/hereta.png',
//         },
//       });
//     },
//     setRaidName: (raid) => {
//       set(() => {
//         return { raidName: raid };
//       });
//     },
//   };
// });
