import { raidList } from '../_constant/raidList';

export const filterRaidList = (entry: string) => {
  const result =
    entry === '빠른전투'
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
      : raidList?.map((item) => {
          return {
            raid_name: item.raid_name,
            monsters: item.monsters.map((monster) => {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const { limit, entry, ...rest } = monster;
              return { ...rest, limit };
            }),
          };
        });
  return result;
};
