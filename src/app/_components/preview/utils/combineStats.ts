import { CombinedStats, Item } from "@/app/_type/previewType";

export const combineStats = (data: Item[]): CombinedStats => {
  const combinedStats: CombinedStats = {};

  data?.forEach((item) => {
    item?.stat_value?.forEach((stat) => {
      const name = stat.stat_name;
      const value = parseFloat(stat?.stat_value?.toString());

      if (!combinedStats[name]) {
        combinedStats[name] = 0;
      }

      combinedStats[name] += value;
    });
  });

  return combinedStats;
};
