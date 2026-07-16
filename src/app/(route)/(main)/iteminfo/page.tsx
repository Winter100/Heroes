import SideAd from '@/app/_components/adsense/SideAd';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import AutoResponsiveAd from '@/app/_components/adsense/AutoResponsiveAd';
import ItemRecipeNewContainer from '@/app/_features/iteminfo/components/item-recipe-new-container';

const Page = () => {
  return (
    <>
      <SideAd dataSlot="2056348937" position="left" />
      <RoundedContainer>
        <AutoResponsiveAd />
        <div className="p-2">
          <h1 className="text-center text-lg">아이템 정보</h1>
          <div className="pb-4 text-center text-xs">
            아이템을 클릭하면 상세 정보를 볼 수 있습니다.
          </div>
          <ItemRecipeNewContainer />
        </div>
      </RoundedContainer>
      <SideAd dataSlot="1601053361" position="right" />
    </>
  );
};

export default Page;
