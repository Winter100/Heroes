import AutoResponsiveAd from '@/app/_components/adsense/AutoResponsiveAd';
import SideAd from '@/app/_components/adsense/SideAd';
import BasicContainer from '@/app/_components/layout/BasicContainer';
import { GoldMarket } from '@/app/_features/gold';

const Page = () => {
  return (
    <>
      <SideAd dataSlot="2056348937" position="left" />
      <BasicContainer>
        <div className="py-2">
          <AutoResponsiveAd />
        </div>
        <GoldMarket />
      </BasicContainer>
      <SideAd dataSlot="1601053361" position="right" />
    </>
  );
};

export default Page;
