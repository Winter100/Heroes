import { Stat } from "@/app/_type/previewType";

export const someStats = (
  data: Stat[],
  before: Stat[],
  after: Stat[],
): Stat[] => {
  const combinedStats: Stat[] = [];

  for (const dataItem of data) {
    const beforeItem = before.find(
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
    const afterItem = after.find(
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
