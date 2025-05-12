export const filterOutNameAndLevel = (
  stats: { stat_name: string; stat_value: string | number }[]
) => {
  return stats.filter(
    (stat) => stat.stat_name !== '이름' && stat.stat_name !== '레벨'
  );
};
