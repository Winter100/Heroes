import { filterRaidList } from '@/app/_utils/filterRaidList';
import RaidSelecterBossList from './RaidSelecterBossList';

interface RaidSelecterProps {
  filter: '빠른전투' | '상한';
}
const RaidSelecter = ({ filter }: RaidSelecterProps) => {
  const raidList = filterRaidList(filter);

  return <RaidSelecterBossList raidList={raidList} filter={filter} />;
};

export default RaidSelecter;
