'use client';

import { useSimulationStats } from '@/app/_hooks/useSimulationStats';
import { useRaidStore } from '@/app/_store/useRaidStore';
import PreviewStatsTable from './preview-stats-table';
import { previewStatsFilter } from '@/app/_features/preview/utils/previewStatsFilter';
import { previewInitialTitleList } from '@/app/_constant/rankTitleList';

const PreviewStatsContainer = ({ ocid }: { ocid: string }) => {
  const { finalStatsArray, isError } = useSimulationStats(ocid);

  const raid = useRaidStore((state) => state.raid);

  const userStats = previewStatsFilter(finalStatsArray ?? []);

  if (isError) {
    return (
      <div className="flex flex-col gap-2 p-2 text-center text-xs text-red-100">
        <p>레이드를 선택할 수 없습니다.</p>
        <p>잠시 후 다시 시도해주세요</p>
      </div>
    );
  }

  return (
    <PreviewStatsTable
      raid={raid}
      raidType={raid?.type ?? '빠른전투'}
      userStats={userStats}
      statNameList={previewInitialTitleList}
    />
  );
};

export default PreviewStatsContainer;
