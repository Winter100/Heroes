import AutoResponsiveAd from '@/app/_components/adsense/AutoResponsiveAd';
import SideAd from '@/app/_components/adsense/SideAd';
import BasicContainer from '@/app/_components/layout/BasicContainer';
import { LimitTable, LimitTableMenuBar } from '@/app/_features/raid';

const Page = () => {
  return (
    <>
      <SideAd dataSlot="2056348937" position="left" />
      <BasicContainer className="flex-1 gap-2">
        <AutoResponsiveAd />
        <LimitTableMenuBar />
        <LimitTable />
      </BasicContainer>
      <SideAd dataSlot="1601053361" position="right" />
    </>
  );
};
export default Page;
