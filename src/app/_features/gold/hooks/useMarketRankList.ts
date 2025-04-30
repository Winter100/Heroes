import { useQuery } from '@tanstack/react-query';
import { getMarketRankList } from '../services/getMarketRankList';

export const useMarketRankList = (type: 'buy' | 'sell') => {
  return useQuery({
    queryKey: [type],
    queryFn: () => getMarketRankList(type),
    refetchOnMount: false,
  });
};
