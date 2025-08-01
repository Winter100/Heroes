import { raidList } from '../_constant/raidList';

export const filterRaidList = (filter: string) => {
  return filter === '빠른전투'
    ? raidList
        ?.map((item) => {
          const filteredMonsters = item.monsters
            .filter((monster) => monster.entry?.length > 1)
            .map((monster) => {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const { limit, entry, ...rest } = monster;
              return { ...rest, entry };
            });

          return filteredMonsters.length > 0
            ? {
                raid_name: item.raid_name,
                monsters: filteredMonsters,
              }
            : null;
        })
        .filter(Boolean)
    : raidList
        ?.map((item) => {
          const filteredMonsters = item.monsters
            .filter((monster) => monster.limit?.length > 1)
            .map((monster) => {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const { limit, entry, ...rest } = monster;
              return { ...rest, limit };
            });

          return filteredMonsters.length > 0
            ? {
                raid_name: item.raid_name,
                monsters: filteredMonsters,
              }
            : null;
        })
        .filter(Boolean);
};
