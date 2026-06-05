import { useQuery } from '@tanstack/react-query';
import { getRaidData } from '../api/getRaidData';
import { RaidListType } from '../_constant/raidList';
import { raidSort } from '../_utils/filterRaidList';
import { QUERY_KEY } from '../_constant/query-key';

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
