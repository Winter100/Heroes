import { previewInitialTitleList } from '@/app/_constant/keyword';

export const previewStatsFilter = (
  stats: {
    stat_name: string;
    stat_value: number;
  }[]
) => {
  return stats
    .filter((stat) =>
      previewInitialTitleList.some((c) => c.stat_name === stat.stat_name)
    )
    .sort(
      (a, b) =>
        previewInitialTitleList.findIndex((c) => c.stat_name === a.stat_name) -
        previewInitialTitleList.findIndex((c) => c.stat_name === b.stat_name)
    );
};
