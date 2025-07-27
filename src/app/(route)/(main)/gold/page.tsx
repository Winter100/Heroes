import AutoAd from '@/app/_components/adsense/AutoAd';
import SideAd from '@/app/_components/adsense/SideAd';
import BasicContainer from '@/app/_components/layout/BasicContainer';
import { GoldMarket } from '@/app/_features/gold';

const Page = () => {
  return (
    <>
      <SideAd dataSlot="2056348937" position="left" />
      <BasicContainer>
        <AutoAd dataSlot="9712379035" className="h-40" />
        <GoldMarket />
      </BasicContainer>
      <SideAd dataSlot="1601053361" position="right" />
    </>
  );
};

export default Page;
