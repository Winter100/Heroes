import { raidList } from "../_constant/raidList";

export const filterRaidList = (entry: string) => {
  return entry === "빠른전투"
    ? raidList?.map((item) => {
        return {
          raid_name: item.raid_name,
          monsters: item.monsters.map((monster) => {
            const { limit, entry, ...rest } = monster;
            return { ...rest, entry };
          }),
        };
      })
    : raidList?.map((item) => {
        return {
          raid_name: item.raid_name,
          monsters: item.monsters.map((monster) => {
            const { limit, entry, ...rest } = monster;
            return { ...rest, limit };
          }),
        };
      });
};
