import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import Providers from './providers';
import { API_PATH } from '@/app/_constant/keyword';
import { getApi } from '@/app/api/getIApi';
import { EnchantOptionType } from '@/app/_type/enchantType';
import { RaidListType } from '@/app/_type/raidType';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: [API_PATH.partholn],
      queryFn: () => getApi<EnchantOptionType>(API_PATH.partholn),
      staleTime: Infinity,
    }),
    ,
    queryClient.prefetchQuery({
      queryKey: [API_PATH.raid],
      queryFn: () => getApi<RaidListType>(API_PATH.raid),
      staleTime: Infinity,
    }),
  ]);

  return (
    <Providers>
      <HydrationBoundary state={dehydrate(queryClient)}>
        {children}
      </HydrationBoundary>
    </Providers>
  );
};

export default Layout;
