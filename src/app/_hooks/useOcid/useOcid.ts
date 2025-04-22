import { getOcid } from '@/app/_services/getOcid';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

export const useOcid = (characerName?: string) => {
  const searchParams = useSearchParams();
  const name = characerName ? characerName : (searchParams.get('name') ?? '');

  const { data, isLoading, error } = useQuery({
    enabled: !!name,
    queryKey: [name],
    queryFn: () => getOcid(name),
  });

  return { data, isLoading, error, name };
};
