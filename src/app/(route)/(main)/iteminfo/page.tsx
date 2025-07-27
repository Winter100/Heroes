import SideAd from '@/app/_components/adsense/SideAd';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import CraftingInfo from '@/app/_features/iteminfo/components/CraftingInfo';
import AutoAd from '@/app/_components/adsense/AutoAd';

const Page = () => {
  return (
    <>
      <SideAd dataSlot="2056348937" position="left" />
      <RoundedContainer>
        <AutoAd dataSlot="9712379035" className="h-40" />
        <div className="p-2 md:px-20">
          <h1 className="text-center text-lg">아이템 제작 정보</h1>
          <div className="pb-4 text-center text-xs">
            이미지를 클릭하면 상세 정보를 볼 수 있습니다.
          </div>
          <CraftingInfo />
        </div>
      </RoundedContainer>
      <SideAd dataSlot="1601053361" position="right" />
    </>
  );
};

export default Page;
