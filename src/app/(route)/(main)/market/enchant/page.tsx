import AutoResponsiveAd from '@/app/_components/adsense/AutoResponsiveAd';
import SideAd from '@/app/_components/adsense/SideAd';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import EnchantInformationContainer from '@/app/_features/market/components/dialog/enchant-information-container';

const Page = () => {
  return (
    <>
      <SideAd dataSlot="2056348937" position="left" />
      <RoundedContainer className="p-2">
        <AutoResponsiveAd />
        <div className="p-2">
          <h1 className="text-center text-lg">인챈트 정보</h1>
          <div className="pb-4 text-center text-xs">
            거래량이 적은 인챈트는 가격 정보가 표시되지 않습니다
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
