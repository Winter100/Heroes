import { useQuery } from '@tanstack/react-query';
import { getBasic } from '../_services/getBasic';
import { Basic } from '../_type/characterType';

export const useBasic = (ocid: string) => {
  const { data, isLoading, error } = useQuery<Basic>({
    enabled: !!ocid,
    queryKey: [ocid, '베이직'],
    queryFn: () => getBasic(ocid ?? ''),
  });

  const basic = data as Basic;

  return { basic, isLoading, error };
};
