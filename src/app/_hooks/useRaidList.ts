import { useQuery } from '@tanstack/react-query';
import { getRaidData } from '../api/getRaidData';
import { RaidListType } from '../_type/raidType';
import { QUERY_KEY } from '../_constant/keyword';

export const useRaidList = () => {
  return useQuery<RaidListType[], Error>({
    queryKey: [QUERY_KEY.raid],
    queryFn: getRaidData,
    select: (data) => {
      return raidSort(data);
    },
    staleTime: Infinity,
  });
};

const raidSort = (raid: RaidListType[]): RaidListType[] => {
  return [...raid].sort((a, b) => {
    const indexA = sortKey.indexOf(a.raid_name);
    const indexB = sortKey.indexOf(b.raid_name);

    const posA = indexA === -1 ? Infinity : indexA;
    const posB = indexB === -1 ? Infinity : indexB;

    return posA - posB;
  });
};

const sortKey = [
  '아르드리',
  '오르나',
  '와드네',
  '에리우',
  '스페셜 전투',
  '시공간 왜곡',
  '결사대',
  '결사대 [헬]',
];
