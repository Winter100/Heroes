import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import Providers from './providers';
import { API_PATH } from '@/app/_constant/keyword';
import { GrindType, ItemRecipeType, ItemSetType } from '@/app/_type/itemType';
import { getApi } from '@/app/api/getIApi';
import { EnchantOptionType } from '@/app/_type/enchantType';
import { RaidListType } from '@/app/_type/raidType';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: [API_PATH.enchant],
      queryFn: () => getApi<EnchantOptionType>(API_PATH.enchant),
    }),
    queryClient.prefetchQuery({
      queryKey: [API_PATH.infusion],
      queryFn: () => getApi<EnchantOptionType>(API_PATH.infusion),
    }),
    queryClient.prefetchQuery({
      queryKey: [API_PATH.raid],
      queryFn: () => getApi<RaidListType>(API_PATH.raid),
    }),
    queryClient.prefetchQuery({
      queryKey: [API_PATH.partholn],
      queryFn: () => getApi<EnchantOptionType>(API_PATH.partholn),
    }),
    queryClient.prefetchQuery({
      queryKey: [API_PATH.grind],
      queryFn: () => getApi<GrindType>(API_PATH.grind),
    }),
    queryClient.prefetchQuery({
      queryKey: [API_PATH.itemSetOption],
      queryFn: () => getApi<ItemSetType>(API_PATH.itemSetOption),
    }),
    queryClient.prefetchQuery({
      queryKey: [API_PATH.recipe],
      queryFn: () => getApi<ItemRecipeType>(API_PATH.recipe),
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
