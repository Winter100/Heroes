import { Stat } from "@/app/_type/previewType";

export const calculateStatsDifference = (
  data: Stat[],
  combinedStats: Stat[],
): Stat[] => {
  const resultStats: Stat[] = [];

  for (const dataItem of data) {
    const combinedItem = combinedStats.find(
      (item) => item.stat_name === dataItem.stat_name,
    );

    let statValue = parseInt(dataItem.stat_value);

    if (combinedItem) {
      statValue -= parseInt(combinedItem.stat_value);
    }

    resultStats.push({
      stat_name: dataItem.stat_name,
      stat_value: statValue.toString(),
    });
  }

  return resultStats;
};
