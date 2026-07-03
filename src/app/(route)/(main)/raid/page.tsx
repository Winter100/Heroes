import AutoResponsiveAd from '@/app/_components/adsense/AutoResponsiveAd';
import SideAd from '@/app/_components/adsense/SideAd';
import Loading from '@/app/_components/common/Loading';
import BasicContainer from '@/app/_components/layout/BasicContainer';
import { LimitTable, LimitTableMenuBar } from '@/app/_features/raid';
import { Suspense } from 'react';

const Page = async () => {
  return (
    <>
      <SideAd dataSlot="2056348937" position="left" />
      <Suspense fallback={<Loading />}>
        <BasicContainer className="flex-1 gap-2">
          <AutoResponsiveAd />
          <LimitTableMenuBar />
          <LimitTable />
        </BasicContainer>
      </Suspense>
      <SideAd dataSlot="1601053361" position="right" />
    </>
  );
};
export default Page;
