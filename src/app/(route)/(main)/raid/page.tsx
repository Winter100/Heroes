import AutoResponsiveAd from '@/app/_components/adsense/AutoResponsiveAd';
import SideAd from '@/app/_components/adsense/SideAd';
import Loading from '@/app/_components/common/Loading';
import { API_PATH } from '@/app/_constant/keyword';
import { LimitTable, LimitTableMenuBar } from '@/app/_features/raid';
import { RaidListType } from '@/app/_type/raidType';
import { getApi } from '@/app/api/getIApi';
import { Suspense } from 'react';

const Page = async () => {
  const data = await getApi<RaidListType>(API_PATH.raid);
  data.sort(
    (a, b) => (a.monsters[0]?.level ?? 0) - (b.monsters[0]?.level ?? 0)
  );
  return (
    <>
      <SideAd dataSlot="2056348937" position="left" />
      <div>
        <div className="py-2">
          <AutoResponsiveAd />
        </div>
        <div className="mx-auto max-w-7xl gap-6 px-4 py-6 sm:px-6">
          <Suspense fallback={<Loading />}>
            <LimitTableMenuBar raid={data} />
            <LimitTable />
          </Suspense>
        </div>
      </div>
      <SideAd dataSlot="1601053361" position="right" />
    </>
  );
};
export default Page;
