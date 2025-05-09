import SideAd from '@/app/_components/adsense/SideAd';
import { GoldMarket } from '@/app/_features/gold';

const Page = () => {
  return (
    <>
      <SideAd dataSlot="2056348937" position="left" />
      <GoldMarket />
      <SideAd dataSlot="1601053361" position="right" />
    </>
  );
};

export default Page;
