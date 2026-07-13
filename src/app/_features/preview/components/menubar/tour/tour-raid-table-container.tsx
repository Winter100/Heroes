'use client';

import { usePreviewAllData, useSimulationStats } from '@/app/_hooks';
import TourRaidTable from './tour-raid-table-dialog';
import { useState } from 'react';
import { RaidType } from '@/app/_store/useRaidStore';
import { previewInitialTitleList } from '@/app/_constant/keyword';
import { filterRaidList } from '@/app/_utils/convert';
import { previewStatsFilter } from '@/app/_utils/get';

/**
 * - 유저의 변경된 스텟으로 모든 레이드의 빠른전투 또는 상한 컷을 보여주는 컴포넌트
 */
const TourRaidTableContainer = ({ ocid }: { ocid: string }) => {
  const [type, setType] = useState<RaidType>('빠른전투');
  const { raid } = usePreviewAllData();
  const { finalStatsArray } = useSimulationStats(ocid);
  const raidList = filterRaidList(raid.data ?? [], type);
  const userStats = previewStatsFilter(finalStatsArray ?? []);

  return (
    <TourRaidTable
      raidList={raidList}
      userStats={userStats}
      type={type}
      statNameList={previewInitialTitleList}
      onClick={setType}
    />
  );
};

export default TourRaidTableContainer;
