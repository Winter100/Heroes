import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../_constant/query-key';
import { PartholnApiType, PartholnType } from '../_type/partholnType';
import { getPartholn } from '../api/getPartholn';

/**
 * 파르홀른 데이터 조회
 */
export const usePartholn = () => {
  return useQuery<PartholnApiType[], Error, PartholnType[]>({
    queryKey: [QUERY_KEY.partholn],
    queryFn: getPartholn,
    select: (data) => {
      return data
        .map((partholn) => {
          const { affix, ...rest } = partholn;
          return {
            ...rest,
            affix: affix.value.toLowerCase() as 'partholn',
          };
        })
        .sort((a, b) => Number(a.rank) - Number(b.rank));
    },
    staleTime: Infinity,
  });
};
