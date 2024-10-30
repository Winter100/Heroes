import { Stat } from "@/app/_type/previewType";

const mergeStats = (stats: Stat[]): Stat[] => {
  const mergedStats: { [key: string]: number } = {};

  for (const stat of stats) {
    const statName = stat.stat_name === "해제 2" ? "해제" : stat.stat_name;
    const statValue = parseInt(stat.stat_value || "0");

    mergedStats[statName] = (mergedStats[statName] || 0) + statValue;
  }

  return Object.entries(mergedStats).map(([name, value]) => ({
    stat_name: name,
    stat_value: value.toString(),
  }));
};

export const someStats = (
  data: Stat[],
  before: Stat[],
  after: Stat[],
): Stat[] => {
  const mergedData = mergeStats(data);
  const mergedBefore = mergeStats(before);
  const mergedAfter = mergeStats(after);

  const combinedStats: Stat[] = [];

  for (const dataItem of mergedData) {
    const beforeItem = mergedBefore.find(
      (item) => item.stat_name === dataItem.stat_name,
    );

    let statValue = parseInt(dataItem.stat_value || "0");

    if (beforeItem) {
      statValue -= parseInt(beforeItem.stat_value || "0");
    }

    combinedStats.push({
      stat_name: dataItem.stat_name,
      stat_value: statValue.toString(),
    });
  }

  for (const dataItem of combinedStats) {
    const afterItem = mergedAfter.find(
      (item) => item.stat_name === dataItem.stat_name,
    );

    if (afterItem) {
      dataItem.stat_value = (
        parseInt(dataItem?.stat_value ?? "") +
        parseInt(afterItem.stat_value || "0")
      ).toString();
    }
  }

  return combinedStats;
};
