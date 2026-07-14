import AutoResponsiveAd from '@/app/_components/adsense/AutoResponsiveAd';
import SideAd from '@/app/_components/adsense/SideAd';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import EnchantInformationContainer from '@/app/_features/market/components/enchant-information-container';

const Page = () => {
  return (
    <>
      <SideAd dataSlot="2056348937" position="left" />
      <RoundedContainer className="p-2">
        <AutoResponsiveAd />
        <div className="p-2">
          <h1 className="text-center text-lg">인챈트 정보</h1>
          <div className="pb-4 text-center text-sm">
            아이템을 클릭하여 상세 정보를 볼 수 있습니다
          </div>
          <div>
            <EnchantInformationContainer />
          </div>
        </div>
      </RoundedContainer>
      <SideAd dataSlot="1601053361" position="right" />
    </>
  );
};

export default Page;
