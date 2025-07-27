type Stat = {
  stat_name: string;
  stat_value: number | string;
};

type AdditionalStat = {
  stat_name: string;
  stat_value: string;
};

export const craftingStatsMerge = (
  baseStats: Stat[],
  additionalStats: AdditionalStat[]
): Stat[] => {
  const statMap = new Map<string, number>();

  for (const stat of baseStats) {
    statMap.set(stat.stat_name, Number(stat.stat_value));
  }

  for (const stat of additionalStats) {
    const value = parseInt(stat.stat_value, 10) || 0;
    statMap.set(stat.stat_name, (statMap.get(stat.stat_name) || 0) + value);
  }

  return Array.from(statMap, ([stat_name, stat_value]) => ({
    stat_name,
    stat_value,
  }));
};
