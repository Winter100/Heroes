'use client';
import { RaidType } from '@/app/_store/useRaidStore';
import RaidSelector from './raid-selector';
import { useRaidList } from '@/app/_hooks/useRaidList';
import Loading from '../common/Loading';

const RaidSelectorContainer = ({
  initType = '상한',
}: {
  initType?: RaidType;
}) => {
  const { data, isLoading } = useRaidList();

  if (isLoading) return <Loading />;

  return <RaidSelector raid={data ?? []} initType={initType} />;
};

export default RaidSelectorContainer;
