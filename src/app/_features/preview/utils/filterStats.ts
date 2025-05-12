import { previewInitialTitleList } from '@/app/_constant/rankTitleList';
import { Stat } from '@/app/_type/previewType';

export const filterStats = (stats: Stat[]) => {
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
