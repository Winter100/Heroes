import { RaidListType } from '@/app/_constant/raidList';

export const flatRaidList = (raidList: RaidListType[]) => {
  return raidList.flatMap(({ raid_name, monsters }) =>
    monsters.map((monster) => {
      let boss_name = '';
      let boss_level = '';

      for (const { stat_name, stat_value } of monster.limit) {
        if (stat_name === '이름') boss_name = stat_value;
        else if (stat_name === '레벨') boss_level = stat_value;
      }

      return {
        ...monster,
        boss_name,
        boss_level,
        region: raid_name,
      };
    })
  );
};
