'use client';
import { RaidType } from '@/app/_store/useRaidStore';
import RaidSelector from './raid-selector';
import { RaidListType } from '@/app/_type/raidType';

type Props = {
  raid: RaidListType[];
  initType?: RaidType;
};
const RaidSelectorContainer = ({ raid, initType = '상한' }: Props) => {
  return <RaidSelector raid={raid ?? []} initType={initType} />;
};

export default RaidSelectorContainer;
