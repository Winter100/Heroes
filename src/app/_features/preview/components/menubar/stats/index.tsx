'use client';

import { useStats } from '@/app/_hooks/useStats';
import PreviewStats from './PreviewStats';

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
