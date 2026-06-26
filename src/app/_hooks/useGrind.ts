import { useQuery } from '@tanstack/react-query';
import { getGrindOption } from '../api/getGrindOption';
import { QUERY_KEY } from '../_constant/keyword';

export const useGrind = () => {
  return useQuery({
    queryKey: [QUERY_KEY.grind],
    queryFn: () => getGrindOption(),
    staleTime: Infinity,
  });
};
