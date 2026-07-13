'use client';
import { RaidType } from '@/app/_store/useRaidStore';
import RaidSelector from './raid-selector';
import Loading from '../common/Loading';
import { usePreviewAllData } from '@/app/_hooks';

const RaidSelectorContainer = ({
  initType = '상한',
}: {
  initType?: RaidType;
}) => {
  const { raid } = usePreviewAllData();

  if (raid.isLoading) return <Loading />;

  return <RaidSelector raid={raid.data ?? []} initType={initType} />;
};

export default RaidSelectorContainer;
