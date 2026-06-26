import { create } from 'zustand';
import { MonstersType } from '../_type/raidType';

export type RaidType = '빠른전투' | '상한';

interface RaidState {
  raid: (MonstersType & { type: RaidType }) | null;
}
interface RaidAction {
  setRaid: (type: RaidType, raid: MonstersType) => void;
}
export const useRaidStore = create<RaidState & RaidAction>((set) => {
  return {
    raid: null,
    setRaid: (type, battle) => {
      set(() => {
        return {
          raid: { type, ...battle },
        };
      });
    },
  };
});
