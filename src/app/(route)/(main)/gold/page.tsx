import AutoResponsiveAd from '@/app/_components/adsense/AutoResponsiveAd';
import SideAd from '@/app/_components/adsense/SideAd';
import { GoldMarket } from '@/app/_features/gold';

const Page = () => {
  return (
    <>
      <SideAd dataSlot="2056348937" position="left" />
      <div>
        <div className="py-2">
          <AutoResponsiveAd />
        </div>
        <div className="mx-auto max-w-7xl gap-6 px-4 py-6 sm:px-6">
          <GoldMarket />
        </div>
      </div>
      <SideAd dataSlot="1601053361" position="right" />
    </>
  );
};

export default Page;
