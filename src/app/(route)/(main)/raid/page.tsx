import AutoResponsiveAd from '@/app/_components/adsense/AutoResponsiveAd';
import SideAd from '@/app/_components/adsense/SideAd';
import Loading from '@/app/_components/common/Loading';
import { LimitTable, LimitTableMenuBar } from '@/app/_features/raid';
import { Suspense } from 'react';

const Page = async () => {
  return (
    <>
      <SideAd dataSlot="2056348937" position="left" />
      <div>
        <div className="py-2">
          <AutoResponsiveAd />
        </div>
        <div className="mx-auto max-w-7xl gap-6 px-4 py-6 sm:px-6">
          <Suspense fallback={<Loading />}>
            <LimitTableMenuBar />
            <LimitTable />
          </Suspense>
        </div>
      </div>
      <SideAd dataSlot="1601053361" position="right" />
    </>
  );
};
export default Page;
