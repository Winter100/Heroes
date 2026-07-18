'use client';
import { RaidType } from '@/app/_store/useRaidStore';
import RaidSelector from './raid-selector';
import { usePreviewAllData } from '@/app/_hooks';
import ErrorDisplay from '../common/error/ErrorDisplay';

const RaidSelectorContainer = ({
  initType = '상한',
}: {
  initType?: RaidType;
}) => {
  const { raid } = usePreviewAllData();

  if (raid.error) return <ErrorDisplay content="레이드 조회에 실패했습니다." />;

  return <RaidSelector raid={raid.data ?? []} initType={initType} />;
};

export default RaidSelectorContainer;
