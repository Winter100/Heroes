import { useQuery } from '@tanstack/react-query';
import { getItemSetOption } from '../api/getItemSetOption';
import { QUERY_KEY } from '../_constant/keyword';

export const useItemSetOption = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEY.itemSetOption],
    queryFn: () => getItemSetOption(),
  });

  return { data, isLoading, error };
};
