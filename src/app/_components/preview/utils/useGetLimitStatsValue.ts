import { MonstersType } from "@/app/_constant/raidList";
import { previewInitialTitleList } from "@/app/_constant/rankTitleList";
import { useRaidStore } from "@/app/_store/raidStore";
import { Stat } from "@/app/_type/previewType";
import { filterRaidList } from "@/app/_utils/filterRaidList";

export const useGetLimitStatsValue = (stats: Stat[]) => {
  const filteredStats = stats
    .filter((stat) =>
      previewInitialTitleList.some((c) => c.stat_name === stat.stat_name),
    )
    .sort(
      (a, b) =>
        previewInitialTitleList.findIndex((c) => c.stat_name === a.stat_name) -
        previewInitialTitleList.findIndex((c) => c.stat_name === b.stat_name),
    );
  const raidString = useRaidStore((state) => state.raidString);

  const limitValue = filteredStats.find(
    (i) => i.stat_name === "해제",
  )?.stat_value;

  const boss = filterRaidList(raidString.entry)
    .find((raid) => {
      return raid?.monsters.some(
        (monster) => monster.name === raidString.monsterName,
      );
    })
    ?.monsters.find(
      (monster) => monster.name === raidString.monsterName,
    ) as MonstersType;

  return { filteredStats, limitValue, boss, raidString };
};
