'use client';
import AutoResponsiveAd from '@/app/_components/adsense/AutoResponsiveAd';
import SideAd from '@/app/_components/adsense/SideAd';
import BasicContainer from '@/app/_components/layout/BasicContainer';
import { LimitTable, LimitTableMenuBar } from '@/app/_features/raid';

const Page = () => {
  return (
    <>
      <SideAd dataSlot="2056348937" position="left" />
      <BasicContainer className="flex-1 gap-2">
        {/* <div className="flex flex-col items-center justify-center py-36">
          <h1 className="text-lg">현재 조회 서비스 점검중입니다</h1>
        </div> */}
        <AutoResponsiveAd />
        <LimitTableMenuBar />
        <LimitTable />
      </BasicContainer>
      <SideAd dataSlot="1601053361" position="right" />
    </>
  );
};
export default Page;
