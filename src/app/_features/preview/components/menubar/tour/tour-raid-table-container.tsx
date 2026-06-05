'use client';

import { useRaidList } from '@/app/_hooks/useRaidList';
import TourRaidTable from './tour-raid-table-dialog';
import { useState } from 'react';
import { RaidType } from '@/app/_store/useRaidStore';
import { useSimulationStats } from '@/app/_hooks/useSimulationStats';
import { raidTypeFilter } from '@/app/_utils/filterRaidList';
import { previewStatsFilter } from '../../../utils/previewStatsFilter';
import { previewInitialTitleList } from '@/app/_constant/rankTitleList';

/**
 * - 유저의 변경된 스텟으로 모든 레이드의 빠른전투 또는 상한 컷을 보여주는 컴포넌트
 */
const TourRaidTableContainer = ({ ocid }: { ocid: string }) => {
  const [type, setType] = useState<RaidType>('빠른전투');
  const { data } = useRaidList();
  const { finalStatsArray } = useSimulationStats(ocid);
  const raidList = raidTypeFilter(type, data ?? []);
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
