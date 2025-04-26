'use client';

import PreviewStats from '@/app/_components/preview/PreviewStats';
import { useStats } from '@/app/_hooks/useStats/useStats';

const StatsContent = () => {
  const { data, mergedStats, statDifference, name } = useStats();

  return (
    <PreviewStats
      name={name}
      data={data ?? []}
      mergedStats={mergedStats || []}
      statDifference={statDifference || []}
    />
  );
};

export default StatsContent;
