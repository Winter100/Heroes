import AutoAd from '@/app/_components/adsense/AutoAd';
import SideAd from '@/app/_components/adsense/SideAd';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import EnchantInformation from '@/app/_features/market/components/EnchnatInformation';

const Page = () => {
  return (
    <>
      <SideAd dataSlot="2056348937" position="left" />
      <RoundedContainer className="p-2">
        <AutoAd dataSlot="9712379035" className="h-40" />
        <div className="p-2 md:px-14">
          <h1 className="text-center text-lg">인챈트 정보</h1>
          <div className="pb-4 text-center text-xs">
            거래량이 적은 인챈트는 가격 정보가 표시되지 않습니다
          </div>
          <EnchantInformation />
        </div>
      </RoundedContainer>
      <SideAd dataSlot="1601053361" position="right" />
    </>
  );
};

export default Page;
