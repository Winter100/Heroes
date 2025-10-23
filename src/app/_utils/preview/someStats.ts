import { Stat } from '@/app/_type/previewType';

export const mergeStats = (stats: Stat[]): Stat[] => {
  const mergedStats: Record<string, number> = {};

  for (const stat of stats) {
    let statName = '';
    if (stat.stat_name === '파괴력 2' || stat.stat_name === '파괴력 3') {
      statName = '파괴력';
    } else {
      statName = stat.stat_name;
    }
    const statValue = Number(stat.stat_value) || 0;

    mergedStats[statName] = (mergedStats[statName] || 0) + statValue;
  }

  return Object.entries(mergedStats).map(([stat_name, stat_value]) => ({
    stat_name,
    stat_value: stat_value.toString(),
  }));
};

export const someStats = (
  data: Stat[],
  before: Stat[],
  after: Stat[]
): Stat[] => {
  const mergedData = mergeStats(data);
  const mergedBefore = mergeStats(before);
  const mergedAfter = mergeStats(after);

  const combinedStats: Stat[] = [];

  for (const dataItem of mergedData) {
    const beforeItem = mergedBefore.find(
      (item) => item.stat_name === dataItem.stat_name
    );

    let statValue = parseInt(String(dataItem.stat_value) || '0');

    if (beforeItem) {
      statValue -= parseInt(String(beforeItem.stat_value) || '0');
    }

    combinedStats.push({
      stat_name: dataItem.stat_name,
      stat_value: statValue.toString(),
    });
  }

  for (const dataItem of combinedStats) {
    const afterItem = mergedAfter.find(
      (item) => item.stat_name === dataItem.stat_name
    );

    if (afterItem) {
      dataItem.stat_value = (
        parseInt(String(dataItem?.stat_value) ?? '') +
        parseInt(String(afterItem.stat_value) || '0')
      ).toString();
    }
  }

  return combinedStats;
};
