import { API_PATH, keyword } from '@/app/_constant/keyword';
import { EnchantOptionType } from '@/app/_type/enchantType';
import { RaidListType } from '@/app/_type/raidType';
import { getApi } from '@/app/api/getIApi';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${keyword.project.name} - 장비 세팅`,
  description:
    '마비노기 영웅전 캐릭터의 연마, 정령 합성, 접두, 접미 인챈트를 교체하고 그에 따른 빠른 전투 및 상한 컷을 조회할 수 있는 장비 시뮬레이션을 제공합니다.',
};
const Layout = async ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: [API_PATH.partholn],
      queryFn: () =>
        getApi<EnchantOptionType>(API_PATH.partholn, {
          next: { tags: [API_PATH.partholn] },
        }),
      staleTime: Infinity,
    }),
    ,
    queryClient.prefetchQuery({
      queryKey: [API_PATH.raid],
      queryFn: () =>
        getApi<RaidListType>(API_PATH.raid, {
          next: { tags: [API_PATH.raid] },
        }),
      staleTime: Infinity,
    }),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
};

export default Layout;
