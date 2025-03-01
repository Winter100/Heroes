type Stat = {
  stat_name: string;
  stat_value: number | string;
};

export const mergeInfoStat = (stats: Stat[]) => {
  const statMap = stats.reduce<Record<string, number | string>>(
    (acc, { stat_name, stat_value }) => {
      acc[stat_name] = Number(acc[stat_name] || 0) + Number(stat_value);
      return acc;
    },
    {},
  );

  return Object.entries(statMap).map(([stat_name, stat_value]) => ({
    stat_name,
    stat_value,
  }));
};
