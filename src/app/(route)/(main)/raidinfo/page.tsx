import AutoAd from '@/app/_components/adsense/AutoAd';
import SideAd from '@/app/_components/adsense/SideAd';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import { RaidInfoTable } from '@/app/_features/raidinfo';

const Page = () => {
  return (
    <>
      <SideAd dataSlot="2056348937" position="left" />
      <RoundedContainer className="p-2">
        <AutoAd dataSlot="9712379035" className="h-40" />
        <div className="p-2 md:px-20">
          <h1 className="text-center text-lg">레이드 정보</h1>
          <div className="pb-4 text-center text-xs">
            자세히 버튼을 눌러 상세 정보를 조회할 수 있습니다.
          </div>
          <RaidInfoTable />
        </div>
      </RoundedContainer>
      <SideAd dataSlot="1601053361" position="right" />
    </>
  );
};

export default Page;
